import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach access token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto-refresh token on 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh = localStorage.getItem("refresh_token");
      return axios.post(`${BASE_URL}/auth/jwt/refresh/`, { refresh })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access);
          originalRequest.headers.Authorization = `Bearer ${data.access}`;
          return api(originalRequest);
        })
        .catch(() => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          window.location.href = "/react-vite-supreme/login";
        });
    }
    return Promise.reject(error);
  }
);

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  re_password: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface UserProfile {
  id: number;
  username: string;
  email: string;
  role?: string;
}

// Djoser JWT endpoints
export const authService = {
  login: (payload: LoginPayload): Promise<AuthTokens> => {
    return api.post<AuthTokens>("/auth/jwt/create/", payload).then(({ data }) => {
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      return data;
    });
  },

  register: (payload: RegisterPayload): Promise<UserProfile> => {
    return api.post<UserProfile>("/auth/users/", payload).then(({ data }) => data);
  },

  getMe: (): Promise<UserProfile> => {
    return api.get<UserProfile>("/auth/users/me/").then(({ data }) => data);
  },

  logout: () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("access_token");
  },
};

export default api;

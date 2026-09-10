import{r as m,a as f,S as o,j as e}from"./index-c7ffd172.js";const S=`
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');

.um-page, .um-page * {
    box-sizing: border-box;
}

.um-page {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 32px 36px 48px;
    color: #172033;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* HEADER */

.um-page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
    gap: 24px;
}

.um-header-title {
    font-size: 30px;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #172033;
    margin: 0 0 6px;
}

.um-header-subtitle {
    font-size: 14px;
    color: #718096;
    font-weight: 500;
    margin: 0;
}

.um-add-user-button {
    height: 46px;
    padding: 0 22px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(135deg, #1769e8, #0758d8);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.22);
    transition: 0.2s ease;
    cursor: pointer;
    white-space: nowrap;
}

.um-add-user-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 22px rgba(37, 99, 235, 0.28);
}

.um-add-user-button:active {
    transform: scale(0.97);
}

/* LAYOUT */

.um-main-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 400px;
    gap: 24px;
    align-items: start;
}

.um-main-layout--single {
    grid-template-columns: 1fr;
}

.um-users-area {
    min-width: 0;
}

/* SEARCH */

.um-search-container {
    height: 50px;
    background: #ffffff;
    border: 1px solid #e0e6ee;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    margin-bottom: 20px;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);
}

.um-search-container i {
    color: #8290a3;
    font-size: 15px;
    margin-right: 12px;
}

.um-search-input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    background: transparent;
    color: #334155;
    font-size: 14px;
}

.um-search-input::placeholder {
    color: #8b97a8;
}

/* USER GRID */

.um-user-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 18px;
}

.um-user-card {
    min-height: 260px;
    padding: 22px 20px 18px;
    background: #ffffff;
    border: 1px solid #e0e6ee;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.um-user-card:hover {
    transform: translateY(-3px);
    border-color: #cbd8e8;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
}

.um-card-top {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 14px;
}

.um-avatar-wrapper {
    position: relative;
    flex-shrink: 0;
}

.um-avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1264e8, #0755d5);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 800;
}

.um-online-dot {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #20a85a;
    border: 2px solid white;
    right: 0px;
    bottom: 2px;
}

.um-user-main {
    min-width: 0;
    flex: 1;
    padding-top: 2px;
}

.um-user-name-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 6px;
    min-width: 0;
}

.um-user-name {
    font-size: 16px;
    font-weight: 800;
    color: #182235;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.um-role-badge {
    flex-shrink: 0;
    padding: 4px 9px;
    border-radius: 5px;
    font-size: 10px;
    line-height: 1.4;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.um-role-super {
    background: #172033;
    color: #ffffff;
}

.um-role-admin {
    background: #1769e8;
    color: #ffffff;
}

.um-role-officer {
    background: #dbe8ff;
    color: #1356bf;
}

.um-email {
    color: #718096;
    font-size: 12.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.um-card-divider {
    height: 1px;
    background: #e7ebf1;
    margin: 10px 0 14px;
}

.um-user-details {
    display: flex;
    flex-direction: column;
    gap: 11px;
    flex: 1;
}

.um-detail-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: #475569;
    font-size: 12.5px;
    line-height: 1.4;
}

.um-detail-row i {
    width: 14px;
    color: #7b8798;
    font-size: 13px;
    text-align: center;
    flex-shrink: 0;
    margin-top: 1px;
}

.um-detail-text {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.um-card-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 16px;
}

.um-action-button {
    height: 38px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid;
    font-size: 12px;
    font-weight: 700;
    transition: 0.15s ease;
    cursor: pointer;
}

.um-edit-button {
    color: #1461dc;
    border-color: #d7e3fa;
    background: #f8fbff;
}

.um-edit-button:hover {
    background: #eaf2ff;
    border-color: #bdd2f4;
}

.um-delete-button {
    color: #f04444;
    border-color: #ffd6d6;
    background: #fff7f7;
}

.um-delete-button:hover {
    background: #ffeaea;
    border-color: #ffbaba;
}

.um-pagination-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}

.um-pagination-info {
    color: #718096;
    font-size: 13px;
}

.um-empty-state {
    grid-column: 1 / -1;
    min-height: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    background: #f8fafc;
    border: 1px dashed #d1d9e5;
    border-radius: 12px;
    color: #94a3b8;
}

.um-empty-state i {
    font-size: 36px;
}

.um-empty-state p {
    margin: 0;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* SIDE PANEL */

.um-user-panel {
    background: #ffffff;
    border: 1px solid #dfe5ed;
    border-radius: 14px;
    padding: 24px;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.1);
    position: sticky;
    top: 24px;
}

.um-panel-header {
    display: flex;
    align-items: center;
    gap: 14px;
    padding-bottom: 18px;
    border-bottom: 1px solid #e8edf3;
    margin-bottom: 18px;
}

.um-panel-icon {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1769e8, #0758d8);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
}

.um-panel-heading {
    min-width: 0;
    flex: 1;
}

.um-panel-title {
    color: #172033;
    font-size: 17px;
    font-weight: 800;
    margin-bottom: 3px;
}

.um-panel-subtitle {
    color: #7a8798;
    font-size: 12.5px;
}

.um-panel-close {
    border: none;
    background: transparent;
    color: #657286;
    font-size: 24px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 6px;
}

.um-panel-close:hover {
    color: #172033;
    background: #f1f4f8;
}

.um-form-group {
    margin-bottom: 16px;
}

.um-form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
}

.um-form-label {
    display: block;
    margin-bottom: 7px;
    color: #344054;
    font-size: 12.5px;
    font-weight: 700;
}

.um-required {
    color: #ef4444;
    margin-left: 3px;
}

.um-form-input,
.um-form-select {
    width: 100%;
    height: 44px;
    border: 1px solid #dce3eb;
    border-radius: 8px;
    background: #ffffff;
    padding: 0 13px;
    outline: none;
    color: #344054;
    font-size: 14px;
    transition: 0.2s ease;
}

.um-form-input:focus,
.um-form-select:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.um-form-input::placeholder {
    color: #8490a0;
}

.um-form-input:disabled {
    background: #f3f5f8;
    color: #8a94a3;
    cursor: not-allowed;
}

.um-privilege-box {
    margin-top: 6px;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #d5e1ff;
    border-radius: 10px;
    background: linear-gradient(135deg, #f6f8ff, #f0f4ff);
    display: flex;
    gap: 12px;
    align-items: flex-start;
}

.um-checkbox-wrapper {
    position: relative;
    flex-shrink: 0;
    padding-top: 2px;
}

.um-privilege-checkbox {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #b9c8e4;
    border-radius: 4px;
    background: #ffffff;
    cursor: pointer;
    position: relative;
}

.um-privilege-checkbox:checked {
    background: #1769e8;
    border-color: #1769e8;
}

.um-privilege-checkbox:checked::after {
    content: "\\2713";
    position: absolute;
    left: 4px;
    top: 1px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 800;
}

.um-privilege-content {
    min-width: 0;
}

.um-privilege-title {
    color: #344054;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 4px;
}

.um-privilege-description {
    color: #718096;
    font-size: 12.5px;
    line-height: 1.5;
}

.um-panel-actions {
    display: grid;
    grid-template-columns: 1fr 1.45fr;
    gap: 12px;
}

.um-panel-button {
    height: 46px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    transition: 0.2s ease;
    cursor: pointer;
}

.um-cancel-button {
    border: 1px solid #e1e6ee;
    background: #f8fafc;
    color: #344054;
}

.um-cancel-button:hover {
    background: #eef2f6;
}

.um-create-button {
    border: 1px solid #1769e8;
    background: linear-gradient(135deg, #1769e8, #0758d8);
    color: #ffffff;
    box-shadow: 0 5px 12px rgba(37, 99, 235, 0.18);
}

.um-create-button:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(37, 99, 235, 0.25);
}

.um-create-button:disabled {
    opacity: 0.65;
    cursor: not-allowed;
}

/* LOADING */

.um-loading {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.um-loading p {
    color: #94a3b8;
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    margin: 0;
}

.um-spinner,
.um-button-spinner {
    border-radius: 50%;
    border: 3px solid #dbeafe;
    border-top-color: #1769e8;
    animation: um-spin 0.8s linear infinite;
}

.um-spinner {
    width: 42px;
    height: 42px;
}

.um-button-spinner {
    width: 15px;
    height: 15px;
    border-width: 2px;
}

@keyframes um-spin {
    to { transform: rotate(360deg); }
}

/* RESPONSIVE */

@media (max-width: 1100px) {
    .um-main-layout {
        grid-template-columns: 1fr;
    }
    .um-user-panel {
        max-width: 560px;
        width: 100%;
        margin: 0 auto;
        position: static;
    }
}

@media (max-width: 650px) {
    .um-page {
        padding: 20px 16px 32px;
    }
    .um-page-header {
        align-items: flex-start;
        flex-direction: column;
    }
    .um-add-user-button {
        width: 100%;
    }
    .um-user-grid {
        grid-template-columns: 1fr;
    }
    .um-form-row {
        grid-template-columns: 1fr;
    }
    .um-header-title {
        font-size: 24px;
    }
}
`;function R(){const[b,_]=m.useState([]),[w,C]=m.useState([]),[z,v]=m.useState(!0),[j,p]=m.useState(!1),[N,U]=m.useState(""),[y,k]=m.useState(!1),[i,u]=m.useState(null),[s,l]=m.useState({email:"",first_name:"",last_name:"",password:"",office:"",position:"Officer",is_superuser:!1});m.useEffect(()=>{h()},[]);const h=async()=>{v(!0);try{const[a,t]=await Promise.all([f.get("users/"),f.get("offices/")]);_(a.data||[]),C(t.data||[])}catch(a){console.error("Data Fetch Error:",a),o.fire({icon:"error",title:"Error",text:"Failed to retrieve personnel records."})}finally{v(!1)}},E=()=>{var a;u(null),l({email:"",first_name:"",last_name:"",password:"",office:((a=w[0])==null?void 0:a.id)||"",position:"Officer",is_superuser:!1}),p(!0)},O=a=>{u(a),l({email:a.email||"",first_name:a.first_name||"",last_name:a.last_name||"",password:"",office:a.office||"",position:a.position||"Officer",is_superuser:a.role==="super-admin"||a.is_superuser===!0}),p(!0),window.scrollTo({top:0,behavior:"smooth"})},D=async a=>{var d;if(a.preventDefault(),!s.first_name.trim()||!s.last_name.trim()){o.fire("Incomplete Information","Please enter the first name and last name.","warning");return}if(!s.email.trim()){o.fire("Incomplete Information","Please enter the official email address.","warning");return}if(!i&&!s.password){o.fire("Password Required","Please enter a security password.","warning");return}k(!0);const t={email:s.email,first_name:s.first_name,last_name:s.last_name,office:s.office,position:s.position,acc_lvl:3,is_superuser:s.is_superuser,is_staff:s.is_superuser};s.password&&(t.password=s.password);try{i?(await f.patch(`users/${i.id}/`,t),o.fire({icon:"success",title:"Personnel Updated",text:"User information has been updated successfully.",timer:1500,showConfirmButton:!1})):(await f.post("users/",t),o.fire({icon:"success",title:"Personnel Onboarded",text:"New user has been created successfully.",timer:1500,showConfirmButton:!1})),p(!1),u(null),await h()}catch(r){console.error("Save Error:",r);let n="Transmission failure.";(d=r==null?void 0:r.response)!=null&&d.data&&(typeof r.response.data=="string"?n=r.response.data:n=JSON.stringify(r.response.data)),o.fire("Error",`Failed to save record: ${n}`,"error")}finally{k(!1)}},P=(a,t)=>{o.fire({title:"Delete this User?",text:`Are you sure you want to remove ${t} from the system?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#ef4444",cancelButtonColor:"#64748b",confirmButtonText:"Yes, Delete",cancelButtonText:"No, Keep User"}).then(async d=>{var r,n;if(d.isConfirmed)try{await f.delete(`users/${a}/`),o.fire({icon:"success",title:"Revoked",text:"Security clearance has been terminated.",timer:1500,showConfirmButton:!1}),h()}catch(c){console.error("Delete Error:",c);const x=((n=(r=c==null?void 0:c.response)==null?void 0:r.data)==null?void 0:n.detail)||"Unable to terminate access. This user might have active dependencies.";o.fire("Failed",x,"error")}})},g=b.filter(a=>{const t=N.toLowerCase().trim(),d=String(a.email||"").toLowerCase(),r=String(a.first_name||"").toLowerCase(),n=String(a.last_name||"").toLowerCase();return d.includes(t)||r.includes(t)||n.includes(t)});if(z)return e.jsxs("div",{className:"um-loading",children:[e.jsx("style",{children:S}),e.jsx("div",{className:"um-spinner"}),e.jsx("p",{children:"Synchronizing Registry..."})]});const I=j?"um-main-layout":"um-main-layout um-main-layout--single";return e.jsxs("main",{className:"um-page",children:[e.jsx("style",{children:S}),e.jsxs("header",{className:"um-page-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"um-header-title",children:"User Management"}),e.jsx("p",{className:"um-header-subtitle",children:"List of all system users and administrators."})]}),e.jsxs("button",{className:"um-add-user-button",onClick:E,children:[e.jsx("i",{className:"fas fa-user-plus"}),"Add New User"]})]}),e.jsxs("div",{className:I,children:[e.jsxs("section",{className:"um-users-area",children:[e.jsxs("div",{className:"um-search-container",children:[e.jsx("i",{className:"fas fa-magnifying-glass"}),e.jsx("input",{type:"text",className:"um-search-input",placeholder:"Search users by name or email...",value:N,onChange:a=>U(a.target.value)})]}),e.jsx("div",{className:"um-user-grid",children:g.length>0?g.map(a=>{var c,x;const t=`${a.first_name||""} ${a.last_name||""}`.trim(),d=`${((c=a.first_name)==null?void 0:c.charAt(0))||""}${((x=a.last_name)==null?void 0:x.charAt(0))||""}`.toUpperCase(),r=a.role==="super-admin"||a.is_superuser===!0,n=a.assignedOffice||a.office_name||"Global Headquarters";return e.jsxs("article",{className:"um-user-card",children:[e.jsxs("div",{className:"um-card-top",children:[e.jsxs("div",{className:"um-avatar-wrapper",children:[e.jsx("div",{className:"um-avatar",children:d||"U"}),e.jsx("span",{className:"um-online-dot"})]}),e.jsxs("div",{className:"um-user-main",children:[e.jsxs("div",{className:"um-user-name-row",children:[e.jsx("span",{className:"um-user-name",title:t,children:t||"Unnamed User"}),e.jsx("span",{className:`um-role-badge ${r?"um-role-super":a.role==="admin"?"um-role-admin":"um-role-officer"}`,children:r?"SUPER-ADMIN":String(a.role||"OFFICER").replace("-"," ")})]}),e.jsx("div",{className:"um-email",title:a.email,children:a.email})]})]}),e.jsx("div",{className:"um-card-divider"}),e.jsxs("div",{className:"um-user-details",children:[e.jsxs("div",{className:"um-detail-row",children:[e.jsx("i",{className:"fas fa-building"}),e.jsx("span",{className:"um-detail-text",title:n,children:n})]}),e.jsxs("div",{className:"um-detail-row",children:[e.jsx("i",{className:"fas fa-user-shield"}),e.jsx("span",{className:"um-detail-text",children:a.position||"System Officer"})]}),e.jsxs("div",{className:"um-detail-row",children:[e.jsx("i",{className:"fas fa-fingerprint"}),e.jsxs("span",{className:"um-detail-text",children:["ID: ",a.id]})]})]}),e.jsxs("div",{className:"um-card-actions",children:[e.jsxs("button",{className:"um-action-button um-edit-button",onClick:()=>O(a),title:"Edit User",children:[e.jsx("i",{className:"fas fa-pen"}),"Edit"]}),a.email!=="superadmin@dict.gov.ph"&&e.jsxs("button",{className:"um-action-button um-delete-button",onClick:()=>P(a.id,a.email),title:"Delete User",children:[e.jsx("i",{className:"fas fa-trash"}),"Delete"]})]})]},a.id)}):e.jsxs("div",{className:"um-empty-state",children:[e.jsx("i",{className:"fas fa-users-slash"}),e.jsx("p",{children:"No personnel matching search parameters."})]})}),e.jsx("div",{className:"um-pagination-container",children:e.jsxs("div",{className:"um-pagination-info",children:["Showing ",g.length," of ",b.length," users"]})})]}),j&&e.jsxs("aside",{className:"um-user-panel",children:[e.jsxs("div",{className:"um-panel-header",children:[e.jsx("div",{className:"um-panel-icon",children:e.jsx("i",{className:i?"fas fa-user-pen":"fas fa-user-plus"})}),e.jsxs("div",{className:"um-panel-heading",children:[e.jsx("div",{className:"um-panel-title",children:i?"Edit User":"Add New User"}),e.jsx("div",{className:"um-panel-subtitle",children:"Set user details and access level."})]}),e.jsx("button",{className:"um-panel-close",onClick:()=>{p(!1),u(null)},title:"Close",children:"×"})]}),e.jsxs("form",{onSubmit:D,className:"um-user-form",children:[e.jsxs("div",{className:"um-form-row",children:[e.jsxs("div",{className:"um-form-group",children:[e.jsxs("label",{className:"um-form-label",children:["First Name",e.jsx("span",{className:"um-required",children:"*"})]}),e.jsx("input",{type:"text",className:"um-form-input",placeholder:"Juan",value:s.first_name,onChange:a=>l({...s,first_name:a.target.value}),required:!0})]}),e.jsxs("div",{className:"um-form-group",children:[e.jsxs("label",{className:"um-form-label",children:["Last Name",e.jsx("span",{className:"um-required",children:"*"})]}),e.jsx("input",{type:"text",className:"um-form-input",placeholder:"Dela Peña",value:s.last_name,onChange:a=>l({...s,last_name:a.target.value}),required:!0})]})]}),e.jsxs("div",{className:"um-form-group",children:[e.jsxs("label",{className:"um-form-label",children:["Official Email Address",e.jsx("span",{className:"um-required",children:"*"})]}),e.jsx("input",{type:"email",className:"um-form-input",placeholder:"juan.delapena@dict.gov.ph",value:s.email,disabled:!!i,onChange:a=>l({...s,email:a.target.value}),required:!0})]}),e.jsxs("div",{className:"um-form-row",children:[e.jsxs("div",{className:"um-form-group",children:[e.jsxs("label",{className:"um-form-label",children:[i?"New Password":"Security Password",!i&&e.jsx("span",{className:"um-required",children:"*"})]}),e.jsx("input",{type:"password",className:"um-form-input",placeholder:i?"Leave blank to keep current":"Password",value:s.password,onChange:a=>l({...s,password:a.target.value}),required:!i})]}),e.jsxs("div",{className:"um-form-group",children:[e.jsx("label",{className:"um-form-label",children:"Official Office Assignment"}),e.jsxs("select",{className:"um-form-select",value:s.office,onChange:a=>l({...s,office:a.target.value}),children:[e.jsx("option",{value:"",children:"Select Office"}),w.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})]})]}),e.jsxs("div",{className:"um-form-group",children:[e.jsx("label",{className:"um-form-label",children:"Position"}),e.jsx("input",{type:"text",className:"um-form-input",placeholder:"Officer",value:s.position,onChange:a=>l({...s,position:a.target.value})})]}),e.jsxs("div",{className:"um-privilege-box",children:[e.jsx("div",{className:"um-checkbox-wrapper",children:e.jsx("input",{type:"checkbox",className:"um-privilege-checkbox",checked:s.is_superuser,onChange:a=>l({...s,is_superuser:a.target.checked})})}),e.jsxs("div",{className:"um-privilege-content",children:[e.jsx("div",{className:"um-privilege-title",children:"Grant Superuser Privileges"}),e.jsx("div",{className:"um-privilege-description",children:"Enables global network oversight and personnel management."})]})]}),e.jsxs("div",{className:"um-panel-actions",children:[e.jsx("button",{type:"button",className:"um-panel-button um-cancel-button",onClick:()=>{p(!1),u(null)},children:"Cancel"}),e.jsx("button",{type:"submit",className:"um-panel-button um-create-button",disabled:y,children:y?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"um-button-spinner"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fas fa-floppy-disk"}),i?"Save Changes":"Create User"]})})]})]})]})]})]})}export{R as default};

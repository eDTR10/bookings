import{r as s,a as te,j as e}from"./index-c3b2c6f0.js";import{i as ae,g as se}from"./calendarUtils-e1b983f3.js";import{B as A}from"./bell-6a0c51a7.js";import{X as re}from"./x-7292c81d.js";import{C as le}from"./clipboard-list-fa5ca07d.js";import{W as ne}from"./wifi-c60e550b.js";function be({bookings:f}){const[i,$]=s.useState(new Date),[c,o]=s.useState(null),[R]=s.useState(!1),[j,I]=s.useState(new Date),[M,B]=s.useState([]),[V,h]=s.useState(!1),[N,F]=s.useState([]),[b,y]=s.useState(0),[L,w]=s.useState(!1),x=3;s.useEffect(()=>{te.get("starlink-requests/").then(t=>B(Array.isArray(t.data)?t.data:[])).catch(t=>console.error("Failed to load Starlink notifications:",t))},[]),s.useEffect(()=>{const t=setInterval(()=>I(new Date),6e4);return()=>clearInterval(t)},[]);const r=s.useMemo(()=>Array.isArray(f)?f:[],[f]),u=s.useMemo(()=>({total:r.length,pending:r.filter(t=>t.status==="PENDING").length,approved:r.filter(t=>t.status==="APPROVED").length,cancelled:r.filter(t=>t.status==="REJECTED"||t.status==="CANCELLED").length}),[r]),q="SA",O="Super Admin",D=r.filter(t=>t.status==="PENDING"&&!N.includes(`booking-${t.id}`)),E=M.filter(t=>String(t.status||"").toLowerCase().includes("pending")&&!N.includes(`starlink-${t.id}`)),n=D.length+E.length,S=t=>{F(a=>a.includes(t)?a:[...a,t])},_=s.useMemo(()=>{const t=i.getFullYear(),a=i.getMonth(),m=new Date(t,a,1).getDay(),K=new Date(t,a+1,0).getDate(),Y=new Date(t,a,0).getDate(),k=[];for(let l=m;l>0;l--)k.push({day:Y-l+1,type:"prev",dateKey:""});const v=new Date;for(let l=1;l<=K;l++){const z=`${t}-${String(a+1).padStart(2,"0")}-${String(l).padStart(2,"0")}`,H=v.getDate()===l&&v.getMonth()===a&&v.getFullYear()===t,X=r.filter(ee=>ee.date===z),P=new Date(t,a,l),Q=ae(P),Z=se(P);k.push({day:l,type:"current",dateKey:z,isToday:H,isSunday:Q,holidayName:Z,bookings:X})}return k},[i,r]),d=s.useMemo(()=>{const t=new Date;return t.setHours(0,0,0,0),r.filter(a=>a.date&&new Date(a.date)>=t&&a.status!=="REJECTED").sort((a,m)=>new Date(a.date).getTime()-new Date(m.date).getTime()).slice(0,15)},[r]),p=Math.max(1,Math.ceil(d.length/x));s.useEffect(()=>{y(0)},[d.length]),s.useEffect(()=>{if(d.length<=x)return;const t=setInterval(()=>{w(!0),setTimeout(()=>{y(a=>(a+1)%p),w(!1)},300)},4e3);return()=>clearInterval(t)},[d.length,p]);const U=s.useMemo(()=>d.slice(b*x,b*x+x),[d,b]),C={time:new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit"}).format(j),date:new Intl.DateTimeFormat("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric"}).format(j)},T=t=>{const a=new Date(i);a.setMonth(i.getMonth()+t),$(a)},W=t=>{!t.dateKey||t.type==="prev"||o({date:t.dateKey,bookings:t.bookings||[]})},G=t=>{switch(t){case"total":return r;case"approved":return r.filter(a=>a.status==="APPROVED");case"pending":return r.filter(a=>a.status==="PENDING");case"cancelled":return r.filter(a=>a.status==="REJECTED"||a.status==="CANCELLED");default:return[]}},g=t=>{const a=G(t);o({date:"Bookings",bookings:a})},J=t=>{o({date:t.date,bookings:[t]})};return e.jsxs("div",{className:R?"dark":"",children:[e.jsx("style",{children:`
                .dash-summary {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 13px;
                }
                @media (max-width: 720px) {
                    .dash-summary {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }
                .dash-summary-card {
                    position: relative;
                    min-height: 118px;
                    padding: 17px;
                    overflow: hidden;
                    border: 1px solid #e7ebf2;
                    border-radius: 13px;
                    background: #ffffff;
                    box-shadow: 0 5px 18px rgba(15, 23, 42, .045);
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                }
                .dark .dash-summary-card {
                    border-color: #243149;
                    background: #111a2a;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, .18);
                }
                .dash-summary-card.primary {
                    border-color: transparent;
                    background: linear-gradient(135deg, #3478f6, #1d4ed8);
                    color: #ffffff;
                    box-shadow: 0 9px 24px rgba(37, 99, 235, .20);
                }
                .dash-summary-card.success {
                    border-color: transparent;
                    background: linear-gradient(135deg, #17283e, #0f1d30);
                    color: #ffffff;
                }
                .dash-summary-card.warning {
                    background: linear-gradient(135deg, #ffffff, #f8fafc);
                }
                .dark .dash-summary-card.warning {
                    background: linear-gradient(135deg, #111a2a, #151f31);
                }
                .dash-summary-card.danger {
                    border-color: transparent;
                    background: linear-gradient(135deg, #ef4444, #b91c1c);
                    color: #ffffff;
                    box-shadow: 0 9px 24px rgba(220, 38, 38, .20);
                }
                .dash-summary-icon {
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 14px;
                    border-radius: 9px;
                    background: #eef4ff;
                    color: #2563eb;
                    font-size: 14px;
                }
                .primary .dash-summary-icon,
                .success .dash-summary-icon,
                .danger .dash-summary-icon {
                    background: rgba(255, 255, 255, .13);
                    color: #ffffff;
                }
                .dash-summary-label {
                    margin-bottom: 4px;
                    color: #718096;
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: .06em;
                    text-transform: uppercase;
                }
                .primary .dash-summary-label,
                .success .dash-summary-label,
                .danger .dash-summary-label {
                    color: rgba(255, 255, 255, .72);
                }
                .dash-summary-value {
                    color: #172033;
                    font-size: 28px;
                    line-height: 1;
                    font-weight: 900;
                    letter-spacing: -1px;
                    margin-bottom: 12px;
                }
                .dark .dash-summary-value {
                    color: #f1f5f9;
                }
                .primary .dash-summary-value,
                .success .dash-summary-value,
                .danger .dash-summary-value {
                    color: #ffffff;
                }
                .dash-summary-decoration {
                    position: absolute;
                    right: -13px;
                    bottom: -22px;
                    font-size: 82px;
                    opacity: .055;
                    transform: rotate(-8deg);
                    pointer-events: none;
                }
                .primary .dash-summary-decoration,
                .success .dash-summary-decoration,
                .danger .dash-summary-decoration {
                    opacity: .10;
                }
                .dash-summary-link {
                    position: relative;
                    z-index: 2;
                    align-self: flex-start;
                    background: none;
                    border: none;
                    padding: 0;
                    font-size: 11px;
                    font-weight: 800;
                    cursor: pointer;
                    color: #2563eb;
                }
                .dark .dash-summary-link {
                    color: #60a5fa;
                }
                .primary .dash-summary-link,
                .success .dash-summary-link,
                .danger .dash-summary-link {
                    color: #ffffff;
                    text-decoration: underline;
                }
            `}),e.jsxs("div",{className:"min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors",children:[e.jsxs("div",{className:"border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-50",children:[e.jsxs("div",{className:"px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm",children:q}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h1",{className:"text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate",children:"Welcome back, Superadmin!"}),e.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 truncate",children:O})]})]}),e.jsxs("div",{className:"flex items-center gap-3 sm:gap-5 flex-shrink-0",children:[e.jsxs("div",{className:"relative",children:[e.jsxs("button",{type:"button",onClick:()=>h(t=>!t),className:"relative flex h-10 w-10 items-center justify-center text-slate-500 transition-all duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400","aria-label":`Notifications${n?` (${n} pending)`:""}`,children:[e.jsx(A,{size:21,strokeWidth:2,className:"transition-transform duration-200 hover:scale-110"}),n>0&&e.jsx("span",{className:"absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-bold leading-none text-white ring-2 ring-white dark:ring-slate-900",children:n>99?"99+":n})]}),V&&e.jsxs("div",{className:`\r
                            absolute\r
                            right-0\r
                            top-[calc(100%+10px)]\r
                            z-[60]\r
                            w-[320px]\r
                            sm:w-[360px]\r
                            overflow-hidden\r
                            rounded-2xl\r
                            border\r
                            border-slate-200\r
                            dark:border-slate-700\r
                            bg-white\r
                            dark:bg-slate-900\r
                            shadow-2xl\r
                            shadow-slate-900/10\r
                        `,children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3.5 border-b border-slate-200 dark:border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:"text-sm font-bold text-slate-900 dark:text-white",children:"Notifications"}),n>0&&e.jsx("span",{className:"px-1.5 py-0.5 rounded-md bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-[9px] font-bold",children:n})]}),e.jsx("p",{className:"text-[11px] text-slate-500 dark:text-slate-400 mt-0.5",children:n>0?"Pending transactions require your attention":"You are all caught up"})]}),e.jsx("button",{type:"button",onClick:()=>h(!1),"aria-label":"Close notifications",className:`\r
                                    w-7 h-7\r
                                    flex items-center justify-center\r
                                    rounded-lg\r
                                    text-slate-400\r
                                    hover:bg-slate-100\r
                                    dark:hover:bg-slate-800\r
                                    hover:text-slate-700\r
                                    dark:hover:text-slate-200\r
                                    transition\r
                                `,children:e.jsx(re,{size:15})})]}),e.jsx("div",{className:"max-h-[320px] overflow-y-auto p-2",children:n===0?e.jsxs("div",{className:"px-4 py-10 text-center",children:[e.jsx("div",{className:"mx-auto mb-3 w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center",children:e.jsx(A,{size:19,className:"text-slate-400 dark:text-slate-500"})}),e.jsx("p",{className:"text-xs font-bold text-slate-600 dark:text-slate-300",children:"No pending transactions"}),e.jsx("p",{className:"mt-1 text-[11px] text-slate-400 dark:text-slate-500",children:"New requests will appear here."})]}):e.jsxs(e.Fragment,{children:[D.slice(0,5).map(t=>e.jsxs("button",{type:"button",onClick:()=>{S(`booking-${t.id}`),h(!1),o({date:"Pending Booking",bookings:[t]})},className:`\r
                                                    group\r
                                                    flex\r
                                                    w-full\r
                                                    items-start\r
                                                    gap-3\r
                                                    rounded-xl\r
                                                    px-3\r
                                                    py-3\r
                                                    text-left\r
                                                    hover:bg-slate-50\r
                                                    dark:hover:bg-slate-800\r
                                                    transition\r
                                                `,children:[e.jsx("div",{className:`\r
                                                    w-9\r
                                                    h-9\r
                                                    rounded-lg\r
                                                    bg-blue-50\r
                                                    dark:bg-blue-900/20\r
                                                    flex\r
                                                    items-center\r
                                                    justify-center\r
                                                    flex-shrink-0\r
                                                `,children:e.jsx(le,{size:16,className:"text-blue-600 dark:text-blue-400"})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("span",{className:"block text-xs font-bold text-slate-800 dark:text-slate-100",children:"Booking needs approval"}),e.jsx("span",{className:"block mt-1 text-[11px] text-slate-500 dark:text-slate-400 truncate",children:t.activityName||t.purpose||t.requestor||"New booking request"})]}),e.jsx("span",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"})]},`booking-${t.id}`)),E.slice(0,5).map(t=>e.jsxs("button",{type:"button",onClick:()=>{S(`starlink-${t.id}`),h(!1),o({date:"Pending Starlink Request",bookings:[t]})},className:`\r
                                                    group\r
                                                    flex\r
                                                    w-full\r
                                                    items-start\r
                                                    gap-3\r
                                                    rounded-xl\r
                                                    px-3\r
                                                    py-3\r
                                                    text-left\r
                                                    hover:bg-slate-50\r
                                                    dark:hover:bg-slate-800\r
                                                    transition\r
                                                `,children:[e.jsx("div",{className:`\r
                                                    w-9\r
                                                    h-9\r
                                                    rounded-lg\r
                                                    bg-sky-50\r
                                                    dark:bg-sky-900/20\r
                                                    flex\r
                                                    items-center\r
                                                    justify-center\r
                                                    flex-shrink-0\r
                                                `,children:e.jsx(ne,{size:16,className:"text-sky-600 dark:text-sky-400"})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("span",{className:"block text-xs font-bold text-slate-800 dark:text-slate-100",children:"Starlink request needs approval"}),e.jsx("span",{className:"block mt-1 text-[11px] text-slate-500 dark:text-slate-400 truncate",children:t.request_number||t.borrower_full_name||"New Starlink request"})]}),e.jsx("span",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0"})]},`starlink-${t.id}`))]})})]})]}),e.jsx("div",{className:"hidden sm:block h-8 w-px bg-slate-200 dark:bg-slate-800"}),e.jsxs("div",{className:"text-right flex-shrink-0",children:[e.jsx("p",{className:"text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight",children:C.time}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-500 dark:text-slate-400",children:C.date})]})]})]}),e.jsx("div",{className:"px-4 sm:px-6 lg:px-8 flex items-center gap-6 border-t border-slate-200 dark:border-slate-800",children:e.jsxs("button",{className:`\r
                py-3\r
                px-1\r
                text-sm\r
                font-bold\r
                text-blue-600\r
                dark:text-blue-400\r
                border-b-2\r
                border-blue-600\r
                dark:border-blue-400\r
                flex\r
                items-center\r
                gap-2\r
                transition\r
            `,children:[e.jsx("i",{className:"fas fa-th-large text-xs"}),"Overview"]})})]}),e.jsxs("div",{className:"p-4 sm:p-6 lg:p-8 space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-4 gap-3 sm:gap-4",children:[e.jsxs("div",{className:"group relative overflow-hidden bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900",children:[e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-3 transition-all duration-300 group-hover:scale-110",children:e.jsx("i",{className:"fas fa-file-lines text-lg"})}),e.jsx("p",{className:"text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1",children:"Total Bookings"}),e.jsx("p",{className:"text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3",children:u.total}),e.jsx("button",{onClick:()=>g("total"),className:"text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",children:"View details"})]}),e.jsx("div",{className:"absolute -right-3 -bottom-4 text-blue-100 dark:text-blue-950/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",children:e.jsx("i",{className:"fas fa-clipboard-list text-7xl"})})]}),e.jsxs("div",{className:"group relative overflow-hidden bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-green-200 dark:hover:border-green-900",children:[e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"w-11 h-11 flex items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 mb-3 transition-all duration-300 group-hover:scale-110",children:e.jsx("i",{className:"fas fa-calendar-check text-lg"})}),e.jsx("p",{className:"text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1",children:"Confirmed"}),e.jsx("p",{className:"text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3",children:u.approved}),e.jsx("button",{onClick:()=>g("approved"),className:"text-xs font-bold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors",children:"View details"})]}),e.jsx("div",{className:"absolute -right-3 -bottom-4 text-green-100 dark:text-green-950/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",children:e.jsx("i",{className:"fas fa-check-circle text-7xl"})})]}),e.jsxs("div",{className:"group relative overflow-hidden bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-amber-200 dark:hover:border-amber-900",children:[e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"w-11 h-11 flex items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 mb-3 transition-all duration-300 group-hover:scale-110",children:e.jsx("i",{className:"fas fa-hourglass-half text-lg"})}),e.jsx("p",{className:"text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1",children:"Pending"}),e.jsx("p",{className:"text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3",children:u.pending}),e.jsx("button",{onClick:()=>g("pending"),className:"text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors",children:"View details"})]}),e.jsx("div",{className:"absolute -right-3 -bottom-4 text-amber-100 dark:text-amber-950/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",children:e.jsx("i",{className:"fas fa-clock text-7xl"})})]}),e.jsxs("div",{className:"group relative overflow-hidden bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-red-200 dark:hover:border-red-900",children:[e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"w-11 h-11 flex items-center justify-center rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 mb-3 transition-all duration-300 group-hover:scale-110",children:e.jsx("i",{className:"fas fa-ban text-lg"})}),e.jsx("p",{className:"text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1",children:"Cancelled"}),e.jsx("p",{className:"text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3",children:u.cancelled}),e.jsx("button",{onClick:()=>g("cancelled"),className:"text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors",children:"View details"})]}),e.jsx("div",{className:"absolute -right-3 -bottom-4 text-red-100 dark:text-red-950/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",children:e.jsx("i",{className:"fas fa-ban text-7xl"})})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:gap-6 items-stretch",children:[e.jsxs("div",{className:"min-w-0 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3 sm:p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase",children:[e.jsx("i",{className:"fas fa-bell text-blue-600"})," Upcoming Events"]}),e.jsx("button",{className:"text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700",children:"View all"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-3 pb-3 border-b border-slate-200 dark:border-slate-800",children:[e.jsx("p",{className:"text-xs font-bold text-blue-600 dark:text-blue-400 uppercase",children:"Name of activity"}),e.jsx("p",{className:"text-xs font-bold text-blue-600 dark:text-blue-400 uppercase text-right",children:"Details"})]}),e.jsx("div",{className:`space-y-3 transition-all duration-300 ease-in-out ${L?"opacity-0 -translate-x-4":"opacity-100 translate-x-0"}`,children:d.length===0?e.jsx("p",{className:"text-xs text-slate-400 dark:text-slate-500 text-center py-4",children:"No upcoming events"}):U.map((t,a)=>e.jsxs("div",{className:"pb-3 border-b border-slate-100 dark:border-slate-800 last:pb-0 last:border-b-0",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center",children:e.jsx("i",{className:"fas fa-calendar text-blue-600 dark:text-blue-400 text-xs"})}),e.jsx("h4",{className:"font-bold text-slate-900 dark:text-white text-sm truncate flex-1",children:t.activityName||"Activity"})]}),e.jsx("button",{onClick:()=>J(t),className:"text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 ml-11",children:"View details"})]},`${b}-${a}`))}),d.length>x&&e.jsx("div",{className:"flex justify-center gap-1.5 mt-3",children:Array.from({length:p}).map((t,a)=>e.jsx("span",{className:`h-1.5 rounded-full transition-all duration-300 ${a===b?"w-4 bg-blue-600":"w-1.5 bg-slate-300 dark:bg-slate-700"}`},a))})]}),e.jsxs("div",{className:"min-w-0 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3 sm:p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("button",{onClick:()=>T(-1),className:"p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition flex-shrink-0",children:e.jsx("i",{className:"fas fa-chevron-left text-sm text-slate-400"})}),e.jsx("h3",{className:"text-sm font-bold text-slate-900 dark:text-white",children:new Intl.DateTimeFormat("en-US",{month:"long",year:"numeric"}).format(i)}),e.jsx("button",{onClick:()=>T(1),className:"p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition flex-shrink-0",children:e.jsx("i",{className:"fas fa-chevron-right text-sm text-slate-400"})})]}),e.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:["S","M","T","W","T","F","S"].map((t,a)=>e.jsx("div",{className:"text-center text-xs font-bold py-2 text-slate-500 dark:text-slate-400",children:t},a))}),e.jsx("div",{className:"grid grid-cols-7 gap-1",children:_.map((t,a)=>{var m;return e.jsxs("button",{onClick:()=>W(t),disabled:t.type==="prev",className:`h-8 text-xs font-medium rounded transition-all flex items-center justify-center relative ${t.type==="prev"?"text-slate-300 dark:text-slate-700 cursor-default":t.isToday?"bg-blue-600 text-white font-bold":"text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"}`,title:t.holidayName||void 0,children:[t.day,t.type==="current"&&!t.isToday&&((m=t.bookings)==null?void 0:m.length)>0&&e.jsx("span",{className:"absolute bottom-1 h-1 w-1 rounded-full bg-amber-400"})]},a)})})]})]})]}),c&&e.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm p-4",children:e.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-xl w-full max-w-lg shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800",children:[e.jsxs("div",{className:"p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800",children:[e.jsxs("h3",{className:"font-bold text-slate-900 dark:text-white text-base truncate",children:["Bookings: ",c.date]}),e.jsx("button",{onClick:()=>o(null),className:"w-8 h-8 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded text-slate-600 dark:text-slate-300 hover:bg-red-200 dark:hover:bg-red-600 hover:text-red-600 dark:hover:text-white transition flex-shrink-0",children:e.jsx("i",{className:"fas fa-times text-sm"})})]}),e.jsx("div",{className:"p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3",children:c.bookings.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rounded-lg bg-blue-50 dark:bg-blue-900/20 px-3 py-2 text-xs font-bold text-blue-700 dark:text-blue-300",children:[c.bookings.length," item",c.bookings.length>1?"s":""," found"]}),c.bookings.map((t,a)=>e.jsxs("div",{className:"border border-slate-200 dark:border-slate-700 rounded-lg p-4 dark:bg-slate-800/50 hover:border-blue-400 dark:hover:border-blue-500 transition",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("span",{className:`px-2 py-1 rounded text-[10px] font-bold uppercase ${t.status==="APPROVED"?"bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400":t.status==="REJECTED"||t.status==="CANCELLED"?"bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400":"bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"}`,children:t.status}),e.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400 font-bold",children:[t.startTime," - ",t.endTime]})]}),e.jsx("h4",{className:"font-bold text-slate-900 dark:text-white text-sm mb-2 uppercase",children:t.activityName}),e.jsxs("p",{className:"text-xs text-slate-500 dark:text-slate-400 mb-2",children:[t.requestor," • ",t.venue]}),t.date&&e.jsxs("p",{className:"text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500",children:["Date: ",t.date]})]},a))]}):e.jsxs("div",{className:"rounded-lg border border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-6 text-center",children:[e.jsx("p",{className:"text-base font-bold text-slate-600 dark:text-slate-300",children:"No bookings found"}),e.jsx("p",{className:"mt-2 text-sm text-slate-400 dark:text-slate-500",children:"There are no bookings in this category yet."})]})}),e.jsx("div",{className:"p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800",children:e.jsx("button",{onClick:()=>o(null),className:"w-full py-2.5 sm:py-3 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white font-bold rounded-lg transition uppercase text-xs sm:text-sm",children:"Close"})})]})})]})]})}export{be as default};

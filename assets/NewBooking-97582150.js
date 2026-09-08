import{i as he,u as fe,d as xe,r as d,a as U,j as e,M as ge,n as ve,S as v}from"./index-2b63eb1b.js";import{S as J}from"./react-select.esm-6f70e43c.js";import"./defineProperty-2a4504bf.js";import"./slicedToArray-92ea9758.js";const c=({path:y,size:b=18})=>e.jsx("svg",{width:b,height:b,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:y})}),l={office:"M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 21h16M9 10h.01M15 10h.01M9 14h.01M15 14h.01",room:"M5 21V4a1 1 0 0 1 1-1h8l5 5v13H5Z M14 3v5h5 M9 12h6",calendar:"M8 2v4M16 2v4M3.5 9h17M4 5h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",clock:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3.5 2",laptop:"M4 5h16v10H4z M2 19h20 M9 15h6",computer:"M4 4h16v11H4z M9 20h6 M12 15v5",table:"M3 8h18 M6 8v11 M18 8v11 M3 8l2-4h14l2 4",projector:"M3 15a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM15 10h6v8h-6zM7 11V6a1 1 0 0 1 1-1h3",box:"M21 8 12 3 3 8v8l9 5 9-5V8ZM3 8l9 5 9-5M12 13v8",upload:"M12 16V4M7 9l5-5 5 5M4 20h16",file:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6",user:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0",mail:"M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM3 6l9 7 9-7",phone:"M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.4.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .55 3.4 1 1 0 0 1-.25 1Z",arrowLeft:"M19 12H5M12 19l-7-7 7-7",arrowRight:"M5 12h14M12 5l7 7-7 7",check:"M20 6 9 17l-5-5",checkSquare:"M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",alert:"M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",lock:"M6 11V7a6 6 0 0 1 12 0v4M5 11h14v10H5z",minus:"M5 12h14",plus:"M12 5v14M5 12h14",search:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"},ye=y=>{const b=(y||"").toLowerCase();return b.includes("laptop")?l.laptop:b.includes("computer")||b.includes("pc")||b.includes("desktop")?l.computer:b.includes("table")?l.table:b.includes("projector")?l.projector:l.box},W=y=>({control:b=>`nb-rs-control${b.isFocused?" focused":""}${y?" err":""}${b.isDisabled?" disabled":""}`,valueContainer:()=>"nb-rs-value-container",placeholder:()=>"nb-rs-placeholder",singleValue:()=>"nb-rs-single-value",input:()=>"nb-rs-input",indicatorsContainer:()=>"nb-rs-indicators",indicatorSeparator:()=>"nb-rs-hide",dropdownIndicator:()=>"nb-rs-dropdown-indicator",clearIndicator:()=>"nb-rs-clear-indicator",menu:()=>"nb-rs-menu",menuList:()=>"nb-rs-menu-list",option:b=>`nb-rs-option${b.isFocused?" focused":""}${b.isSelected?" selected":""}`,noOptionsMessage:()=>"nb-rs-no-options"}),G=[{id:1,title:"Location & Schedule",subtitle:"Reserve a space and equipment for your event. Start with the venue and time."},{id:2,title:"Equipment & Resources",subtitle:"Request available equipment for your reservation."},{id:3,title:"Request Details",subtitle:"Purpose and goals of your request."},{id:4,title:"Contact Information",subtitle:"Requestor verification and details."}],D=8;function qe({offices:y,bookings:b=[],prefilledData:R,onAdd:P,onCancel:K}){const $=he(),ee=fe(),C=xe(),k=y??(C==null?void 0:C.offices)??[],o=d.useMemo(()=>{var i;const n=((i=$.state)==null?void 0:i.prefilledData)||R;if(!n)return n;const a=k.find(t=>String(t.id)===String(n.venue)||String(t.id)===String(n.officeId)||String(t.office_name??t.name)===String(n.venue));return a?{...n,venue:a.office_name??a.name??"",office:a.id}:n},[$.state,R,k]),[r,m]=d.useState({venue:o!=null&&o.venue&&o.venue!=="All"?o.venue:"",facility:o!=null&&o.facility&&o.facility!=="All"?o.facility:"",date:(o==null?void 0:o.date)||"",startTime:(o==null?void 0:o.startTime)||"",endTime:(o==null?void 0:o.endTime)||"",purpose:"",activityName:(o==null?void 0:o.activityName)||"",requestor:"",email:"",phoneNumber:"",selectedEquipment:[],attachmentName:"",attachment:null,office:(o==null?void 0:o.office)??(o==null?void 0:o.officeId)??"",equipmentQuantities:{}});d.useEffect(()=>{o&&o.venue&&o.venue!==r.venue&&m(n=>({...n,venue:o.venue,office:o.office??o.officeId??n.office,facility:o.facility??n.facility,date:o.date??n.date,startTime:o.startTime??n.startTime,endTime:o.endTime??n.endTime,activityName:o.activityName??n.activityName}))},[o]);const[I,ne]=d.useState([]),[z,F]=d.useState(null),[f,O]=d.useState(1),[Q,L]=d.useState(!1),[g,q]=d.useState({}),[B,V]=d.useState(""),[E,_]=d.useState("All"),A="dict_booking_form_data";d.useEffect(()=>{const n=localStorage.getItem(A);if(n)try{const a=JSON.parse(n);m(i=>({...i,...a,attachment:null,attachmentName:""}))}catch(a){console.error("Error loading persisted form data:",a)}},[]),d.useEffect(()=>{const{attachment:n,attachmentName:a,...i}=r;Object.values(i).some(t=>t!==""&&(Array.isArray(t)?t.length>0:!0))&&localStorage.setItem(A,JSON.stringify(i))},[r]),d.useEffect(()=>{U.get("inventory/").then(n=>ne(n.data)).catch(n=>console.error("Error fetching inventory:",n))},[]),d.useEffect(()=>{V(""),_("All"),L(!1)},[r.venue]);const u=d.useMemo(()=>k.find(n=>String(n.office_name??n.name)===String(r.venue)||String(n.id)===String(r.office)),[r.venue,r.office,k]),N=d.useMemo(()=>r.venue?I.filter(n=>{const a=String(n.venue??"")===String(r.venue),i=r.office&&n.office!=null?String(n.office)===String(r.office):!0;return a&&i&&Number(n.available)>0}):[],[r.venue,I]),re=d.useMemo(()=>["All",...Array.from(new Set(N.map(a=>a.name)))],[N]),w=d.useMemo(()=>{const n=B.trim().toLowerCase();return N.filter(a=>{const i=E==="All"||a.name===E,t=!n||String(a.name??"").toLowerCase().includes(n);return i&&t})},[N,E,B]),te=Q?w:w.slice(0,D),ae=n=>{var a;return((a=r.selectedEquipment.find(i=>i.id===n))==null?void 0:a.requestedQty)||0},H=!!(r.venue&&r.facility&&r.date&&r.startTime&&r.endTime),T=d.useMemo(()=>k.map(n=>({value:String(n.office_name??n.name??""),label:n.office_name??n.name??"",raw:n})),[k]),ie=d.useMemo(()=>T.find(n=>n.value===String(r.venue))??null,[T,r.venue]),S=d.useMemo(()=>((u==null?void 0:u.rooms)??[]).map(n=>({value:n.name,label:n.name,raw:n})),[u]),oe=d.useMemo(()=>S.find(n=>n.value===String(r.facility))??null,[S,r.facility]),se=n=>{var a;m({...r,venue:(n==null?void 0:n.value)??"",office:((a=n==null?void 0:n.raw)==null?void 0:a.id)??"",facility:"",selectedEquipment:[],equipmentQuantities:{}})},le=n=>{m({...r,facility:(n==null?void 0:n.value)??""})},ce=n=>{const a=new Date;if(a.setHours(0,0,0,0),new Date(n)<a){v.fire({icon:"warning",title:"Invalid Date",text:"You cannot select a past date.",confirmButtonColor:"#2F6FED"}),F("You cannot select a past date."),m({...r,date:""});return}if(b.filter(s=>s.date===n&&s.venue===r.venue&&s.facility===r.facility&&s.status!=="REJECTED"&&s.status!=="CANCELLED").length>=3){v.fire({icon:"error",title:"Facility Fully Booked",text:"This facility is fully booked for the selected date. Please choose another date or venue.",confirmButtonColor:"#E23D3D"}),F("This facility is fully booked for the selected date. Please choose another date or venue."),m({...r,date:""});return}F(null),m({...r,date:n})},Z=(n,a)=>{m(i=>{const t=i.selectedEquipment.find(x=>x.id===n.id),s=(t==null?void 0:t.requestedQty)||0,p=Math.max(0,Math.min(n.available,s+a));let h;return p===0?h=i.selectedEquipment.filter(x=>x.id!==n.id):t?h=i.selectedEquipment.map(x=>x.id===n.id?{...x,requestedQty:p}:x):h=[...i.selectedEquipment,{...n,requestedQty:p}],{...i,selectedEquipment:h,equipmentQuantities:h.reduce((x,j)=>(x[String(j.id)]=Number(j.requestedQty)||0,x),{})}})},de=n=>{var i;const a=(i=n.target.files)==null?void 0:i[0];if(a){if(a.size>10*1024*1024){v.fire({icon:"error",title:"File Too Large",text:"The request letter must be under 10MB.",confirmButtonColor:"#E23D3D"}),n.target.value="";return}m(t=>({...t,attachmentName:a.name,attachment:a}))}},X=(n,a=!0)=>{const i={},t=[];if(n===1&&(r.venue||(i.venue=!0,t.push("Regional Office")),r.facility||(i.facility=!0,t.push("Room / Unit")),r.date||(i.date=!0,t.push("Reservation Date")),r.startTime||(i.startTime=!0,t.push("Start Time")),r.endTime||(i.endTime=!0,t.push("End Time")),r.startTime&&r.endTime&&r.endTime<=r.startTime))return i.endTime=!0,q(i),v.fire({icon:"warning",title:"Check the Schedule",text:"End time must be after start time.",confirmButtonColor:"#2F6FED"}),!1;if(n===3){const s=String(r.purpose??"").trim(),p=String(r.activityName??"").trim();s||(i.purpose=!0,t.push("Purpose / Objectives")),p||(i.activityName=!0,t.push("Name of Activity"))}if(n===4){const s=String(r.requestor??"").trim(),p=String(r.email??""),h=String(r.phoneNumber??"");s||(i.requestor=!0,t.push("Requestor Full Name")),/^\S+@\S+\.\S+$/.test(p)||(i.email=!0,t.push("Email Address (must be a valid email)")),h.length<10&&(i.phoneNumber=!0,t.push("Contact Number (at least 10 digits)"))}return q(i),a&&Object.keys(i).length>0?(v.fire({icon:"warning",title:"Missing Information",html:`Please complete the following before continuing:<br/><strong>${t.join(", ")}</strong>`,confirmButtonColor:"#2F6FED"}),!1):!0},pe=()=>{f===1&&!X(1,!1)||(q({}),O(n=>Math.min(4,n+1)))},be=()=>{if(f===1){K();return}q({}),O(n=>Math.max(1,n-1))},ue=()=>{if(!X(4))return;const a=(t=>{const s={...t};return delete s.id,delete s.createdAt,s.status="PENDING",s.region=(u==null?void 0:u.region)||"",s.office=(u==null?void 0:u.id)??s.office??"",s.venue=(u==null?void 0:u.office_name)??(u==null?void 0:u.name)??s.venue??"",s.selectedEquipment=Array.isArray(s.selectedEquipment)?s.selectedEquipment:[],s.equipmentQuantities=s.selectedEquipment.reduce((p,h)=>(p[String(h.id)]=Number(h.requestedQty)||0,p),{}),s})(r),i=new FormData;Object.keys(a).forEach(t=>{t==="selectedEquipment"||t==="equipmentQuantities"?i.append(t,JSON.stringify(a[t])):t==="attachment"?a[t]instanceof File&&i.append(t,a[t]):i.append(t,a[t]!==null&&a[t]!==void 0?a[t]:"")}),v.fire({title:"Submitting Request",text:"Please wait while we process your booking...",allowOutsideClick:!1,didOpen:()=>{v.showLoading()}}),U.post("bookings/",i).then(async t=>{const s=t.data;await v.fire({icon:"info",title:"Request Submitted",html:'<p>Your booking request is now <strong>pending admin approval</strong>.</p><p class="mt-2">You will receive an email once the administrator approves, rejects, or cancels your request.</p>',confirmButtonText:"Go to Dashboard",confirmButtonColor:"#2563eb",allowOutsideClick:!1}),localStorage.removeItem(A),P(s),ee("/bookings/portal/dashboard",{replace:!0})}).catch(t=>{const s=t.response;if(s){let p=s.data,h=p.message||"Unknown error occurred.",x=p.details?`
Details: ${p.details}`:"";if(typeof p=="object"&&p!==null&&!p.message){const j=[];for(const[me,M]of Object.entries(p))Array.isArray(M)?j.push(`${me}: ${M[0]}`):typeof M=="string"&&j.push(M);j.length>0&&(h=j.join(`
`))}v.fire({icon:"error",title:"Submission Failed",text:h+x,confirmButtonColor:"#E23D3D"})}else console.error("Booking Error:",t),v.fire({icon:"error",title:"Network Error",text:"Error connecting to the server. Please check your connection and try again.",confirmButtonColor:"#E23D3D"})})},Y=G[f-1];return e.jsxs("div",{className:"nb-page",children:[e.jsx("style",{children:`
                .nb-page { min-height: 100vh; width: 100%; background: var(--nb-bg); }
                .nb-page, .nb-page * { box-sizing: border-box; }
                .nb-page {
                    --nb-primary: #2F6FED;
                    --nb-primary-dark: #1E4FC4;
                    --nb-primary-light: #EAF1FF;
                    --nb-ink: #1A2233;
                    --nb-muted: #6B7280;
                    --nb-border: #E2E5EA;
                    --nb-danger: #E23D3D;
                    --nb-danger-bg: #FDECEC;
                    --nb-success: #12B76A;
                    --nb-bg: #F4F6FA;
                    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
                }

                /* Dark mode support */
                .dark .nb-page {
                    --nb-primary: #3B7BFF;
                    --nb-primary-dark: #2563EB;
                    --nb-primary-light: #1E3A8A;
                    --nb-ink: #F1F5F9;
                    --nb-muted: #9CA3AF;
                    --nb-border: #404854;
                    --nb-danger: #FF6B6B;
                    --nb-danger-bg: #7F1D1D;
                    --nb-success: #10B981;
                    --nb-bg: #0F172A;
                }

                .nb-shell { width: 100%; min-height: 100vh; background: #fff; display: flex; flex-direction: column; }
                .dark .nb-shell { background: #1E293B; }

                /* ---------- Header / step indicator ---------- */
                .nb-hero {
                    background: linear-gradient(135deg, var(--nb-primary), var(--nb-primary-dark));
                    color: #fff; padding: 22px 20px; display: flex; align-items: center; justify-content: space-between;
                }
                .nb-hero-left { flex: 1; }
                .nb-hero-right { display: flex; align-items: center; }
                .nb-steps-row { display: flex; align-items: flex-start; width: 100%; }
                .nb-step-item { flex: 1; display: flex; flex-direction: column; align-items: center; position: relative; padding: 0 4px; }
                .nb-step-item:not(:last-child)::after {
                    content: ''; position: absolute; top: 17px; left: calc(50% + 22px); right: calc(-50% + 22px);
                    border-top: 2px dotted rgba(255,255,255,0.45); z-index: 0;
                }
                .nb-step-item.done:not(:last-child)::after { border-top-color: rgba(255,255,255,0.85); border-top-style: solid; }
                .nb-step-badge {
                    width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center;
                    font-weight: 800; font-size: 12.5px; flex-shrink: 0; position: relative; z-index: 1;
                    background: rgba(255,255,255,0.16); color: rgba(255,255,255,0.85); border: 1px solid rgba(255,255,255,0.3);
                }
                .nb-step-item.active .nb-step-badge { background: #fff; color: var(--nb-primary-dark); box-shadow: 0 4px 12px rgba(0,0,0,0.18); border-color: #fff; }
                .nb-step-item.done .nb-step-badge { background: rgba(255,255,255,0.9); color: var(--nb-primary-dark); border-color: #fff; }
                .nb-step-label { margin-top: 8px; font-size: 11px; text-align: center; color: rgba(255,255,255,0.7); line-height: 1.3; max-width: 110px; }
                .nb-step-item.active .nb-step-label { color: #fff; font-weight: 700; }

                /* ---------- Body ---------- */
                .nb-body-outer { flex: 1; padding: 26px 20px 120px; background: var(--nb-bg); }
                .nb-body-inner { max-width: 1400px; margin: 0 auto; width: 100%; }
                .nb-title { font-size: 24px; font-weight: 800; color: var(--nb-ink); margin: 0 0 4px; }
                .nb-subtitle { font-size: 13px; color: var(--nb-muted); margin: 0 0 26px; }

                .nb-field { margin-bottom: 18px; }
                .nb-label { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: var(--nb-ink); margin-bottom: 7px; }
                .nb-label .req { color: var(--nb-danger); }
                .nb-label svg { color: var(--nb-primary); }

                .nb-input, .nb-select, .nb-textarea {
                    width: 100%; padding: 12px 14px; border: 1.5px solid var(--nb-border); border-radius: 12px;
                    font-size: 13.5px; font-family: inherit; color: var(--nb-ink); background: #fff; transition: border-color .15s, box-shadow .15s;
                }
                .dark .nb-input, .dark .nb-select, .dark .nb-textarea {
                    background: #334155; color: var(--nb-ink);
                }
                .nb-input:focus, .nb-select:focus, .nb-textarea:focus {
                    outline: none; border-color: var(--nb-primary); box-shadow: 0 0 0 3px var(--nb-primary-light);
                }
                .nb-input.err, .nb-select.err, .nb-textarea.err { border-color: var(--nb-danger); background: var(--nb-danger-bg); }
                .nb-select:disabled { opacity: .5; cursor: not-allowed; background: #F5F6F8; }
                .dark .nb-select:disabled { background: #1E293B; }
                .nb-textarea { resize: vertical; min-height: 130px; }

                /* ---------- react-select (unstyled) ---------- */
                .nb-rs-control {
                    width: 100%; min-height: 46px; padding: 2px 14px; border: 1.5px solid var(--nb-border); border-radius: 12px;
                    font-size: 13.5px; font-family: inherit; color: var(--nb-ink); background: #fff;
                    display: flex; align-items: center; cursor: pointer; transition: border-color .15s, box-shadow .15s;
                }
                .dark .nb-rs-control { background: #334155; }
                .nb-rs-control.focused { border-color: var(--nb-primary); box-shadow: 0 0 0 3px var(--nb-primary-light); }
                .nb-rs-control.err { border-color: var(--nb-danger); background: var(--nb-danger-bg); }
                .nb-rs-control.disabled { opacity: .5; cursor: not-allowed; background: #F5F6F8; }
                .dark .nb-rs-control.disabled { background: #1E293B; }
                .nb-rs-value-container { flex: 1; padding: 0; gap: 4px; }
                .nb-rs-placeholder { color: var(--nb-muted); }
                .nb-rs-single-value { color: var(--nb-ink); }
                .nb-rs-input input { color: var(--nb-ink) !important; }
                .nb-rs-indicators { gap: 4px; color: var(--nb-muted); }
                .nb-rs-hide { display: none; }
                .nb-rs-dropdown-indicator, .nb-rs-clear-indicator { color: var(--nb-muted); display: flex; align-items: center; cursor: pointer; }
                .nb-rs-dropdown-indicator:hover, .nb-rs-clear-indicator:hover { color: var(--nb-primary); }
                .nb-rs-menu {
                    margin-top: 6px; background: #fff; border: 1.5px solid var(--nb-border); border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12); overflow: hidden; z-index: 20;
                }
                .dark .nb-rs-menu { background: #334155; box-shadow: 0 10px 30px rgba(0,0,0,0.35); }
                .nb-rs-menu-list { padding: 6px; max-height: 260px; overflow-y: auto; }
                .nb-rs-option { padding: 10px 12px; border-radius: 8px; font-size: 13px; color: var(--nb-ink); cursor: pointer; }
                .nb-rs-option.focused { background: var(--nb-primary-light); }
                .nb-rs-option.selected { background: var(--nb-primary); color: #fff; }
                .nb-rs-no-options { padding: 12px; font-size: 12.5px; color: var(--nb-muted); text-align: center; }

                .nb-row-2 { display: grid; grid-template-columns: 1fr; gap: 14px; }
                .nb-row-3 { display: grid; grid-template-columns: 1fr; gap: 14px; }
                @media (min-width: 640px) {
                    .nb-row-2 { grid-template-columns: 1fr 1fr; }
                    .nb-row-3 { grid-template-columns: 1fr 1fr 1fr; }
                }

                .nb-warning {
                    display: flex; gap: 8px; align-items: flex-start; font-size: 12px; color: var(--nb-danger);
                    margin-top: 8px; padding: 10px 12px; background: var(--nb-danger-bg); border: 1px solid #F5C2C2; border-radius: 10px;
                }
                .dark .nb-warning { border-color: #DC2626; }
                .nb-warning svg { flex-shrink: 0; margin-top: 1px; }

                .nb-hint {
                    display: flex; gap: 10px; align-items: flex-start; font-size: 12.5px; color: var(--nb-primary-dark);
                    margin-top: 22px; padding: 13px 16px; background: var(--nb-primary-light); border: 1px solid #CBDCFB; border-radius: 12px;
                }
                .dark .nb-hint { background: #1E3A8A; border-color: #1E40AF; color: #3B82F6; }
                .nb-hint.filled { color: #0C7A48; background: #E9FBF2; border-color: #BEEBD3; }
                .dark .nb-hint.filled { color: #10B981; background: #064E3B; border-color: #047857; }
                .nb-hint svg { flex-shrink: 0; margin-top: 1px; }
                .nb-hint strong { font-weight: 700; }

                /* ---------- Equipment step ---------- */
                .nb-equip-toolbar { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
                @media (min-width: 640px) { .nb-equip-toolbar { flex-direction: row; align-items: center; } }
                .nb-search { position: relative; flex: 1; }
                .nb-search svg { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--nb-muted); }
                .nb-search input {
                    width: 100%; padding: 11px 14px 11px 38px; border: 1.5px solid var(--nb-border); border-radius: 12px;
                    font-size: 13px; font-family: inherit; color: var(--nb-ink); background: #fff;
                }
                .dark .nb-search input { background: #334155; color: var(--nb-ink); }
                .nb-search input:focus { outline: none; border-color: var(--nb-primary); box-shadow: 0 0 0 3px var(--nb-primary-light); }
                .nb-pills { display: flex; gap: 8px; flex-wrap: wrap; }
                .nb-pill {
                    padding: 9px 16px; border-radius: 999px; border: 1.5px solid var(--nb-border); background: #fff;
                    font-size: 12px; font-weight: 700; color: var(--nb-ink); cursor: pointer; white-space: nowrap; transition: all .15s;
                }
                .dark .nb-pill { background: #334155; border-color: #404854; }
                .nb-pill.active { background: var(--nb-primary); border-color: var(--nb-primary); color: #fff; }
                .nb-pill:hover:not(.active) { border-color: var(--nb-primary); color: var(--nb-primary); }

                .nb-equip-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
                @media (min-width: 560px) { .nb-equip-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (min-width: 900px) { .nb-equip-grid { grid-template-columns: repeat(3, 1fr); } }
                @media (min-width: 1200px) { .nb-equip-grid { grid-template-columns: repeat(4, 1fr); } }

                .nb-equip-card {
                    border: 1.5px solid var(--nb-border); border-radius: 18px; padding: 14px; background: #fff; transition: border-color .15s, box-shadow .15s, transform .15s;
                    display: flex; flex-direction: column; gap: 12px; box-shadow: 0 2px 9px rgba(15, 23, 42, 0.04);
                }
                .dark .nb-equip-card { background: #334155; box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2); }
                .nb-equip-card:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(47, 111, 237, 0.08); }
                .dark .nb-equip-card:hover { box-shadow: 0 10px 24px rgba(47, 111, 237, 0.15); }
                .nb-equip-card.selected { border-color: rgba(47, 111, 237, 0.7); background: #f5f8ff; box-shadow: 0 10px 24px rgba(47, 111, 237, 0.10); }
                .dark .nb-equip-card.selected { background: #1E3A8A; border-color: rgba(59, 123, 255, 0.7); box-shadow: 0 10px 24px rgba(59, 123, 255, 0.15); }
                .nb-equip-top { display: flex; align-items: flex-start; gap: 12px; }
                .nb-equip-thumb {
                    width: 76px; height: 76px; border-radius: 14px; background: #f7f9fc; border: 1px solid var(--nb-border);
                    display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0;
                }
                .dark .nb-equip-thumb { background: #1E293B; }
                .nb-equip-thumb img { width: 100%; height: 100%; object-fit: cover; }
                .nb-equip-icon {
                    width: 52px; height: 52px; border-radius: 12px; background: #fff; border: 1px solid var(--nb-border);
                    display: flex; align-items: center; justify-content: center; color: var(--nb-primary); flex-shrink: 0;
                }
                .nb-equip-icon[hidden] { display: none !important; }
                .dark .nb-equip-icon { background: #1E293B; border-color: #404854; }
                .nb-equip-name { font-size: 13.5px; font-weight: 800; color: var(--nb-ink); margin: 0 0 2px; line-height: 1.3; }
                .nb-equip-sub { font-size: 11px; color: var(--nb-muted); margin: 0; }
                .nb-equip-meta { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
                .nb-equip-meta-item { min-width: 0; }
                .nb-equip-meta-label { font-size: 9px; color: var(--nb-muted); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; margin: 0 0 3px; }
                .nb-equip-meta-value { font-size: 11px; color: var(--nb-ink); font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                .nb-equip-bottom { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 12px; border-top: 1px dashed var(--nb-border); }
                .nb-equip-stock { font-size: 11px; color: var(--nb-muted); font-weight: 700; }
                .nb-stepper { display: flex; align-items: center; gap: 8px; }
                .nb-stepper button {
                    width: 28px; height: 28px; border-radius: 8px; border: 1.5px solid var(--nb-border); background: #fff;
                    display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--nb-ink);
                }
                .dark .nb-stepper button { background: #1E293B; border-color: #404854; color: var(--nb-ink); }
                .nb-stepper button:disabled { opacity: .35; cursor: not-allowed; }
                .nb-stepper button.primary { background: var(--nb-primary); border-color: var(--nb-primary); color: #fff; }
                .nb-stepper .qty { min-width: 20px; text-align: center; font-weight: 800; font-size: 13px; }

                .nb-more-btn {
                    grid-column: 1 / -1; text-align: center; background: none; border: none; color: var(--nb-primary);
                    font-size: 12px; font-weight: 700; padding: 10px; cursor: pointer;
                }
                .nb-empty {
                    grid-column: 1 / -1; text-align: center; padding: 40px 16px; border: 2px dashed var(--nb-border);
                    border-radius: 14px; color: var(--nb-muted); font-size: 12.5px; background: #fafbfc;
                }
                .dark .nb-empty { background: #1E293B; }
                .nb-empty svg { color: var(--nb-muted); margin-bottom: 8px; }

                .nb-summary { margin-top: 22px; padding: 16px; background: var(--nb-primary-light); border-radius: 14px; }
                .dark .nb-summary { background: #1E3A8A; }
                .nb-summary-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; color: var(--nb-primary-dark); margin: 0 0 8px; }
                .dark .nb-summary-title { color: #3B7BFF; }
                .nb-summary-row { display: flex; justify-content: space-between; font-size: 12.5px; padding: 5px 0; border-bottom: 1px dashed #C7D8FA; color: var(--nb-ink); }
                .dark .nb-summary-row { border-bottom-color: #1E40AF; }
                .nb-summary-row:last-child { border-bottom: none; }

                .nb-dropzone {
                    border: 2px dashed var(--nb-border); border-radius: 14px; padding: 30px 16px; text-align: center;
                    cursor: pointer; background: #fafbfc; transition: border-color .15s, background .15s;
                }
                .dark .nb-dropzone { background: #1E293B; }
                .nb-dropzone:hover { border-color: var(--nb-primary); background: var(--nb-primary-light); }
                .dark .nb-dropzone:hover { background: #1E3A8A; }
                .nb-dropzone-icon {
                    width: 44px; height: 44px; border-radius: 50%; background: var(--nb-ink); color: #fff; margin: 0 auto 10px;
                    display: flex; align-items: center; justify-content: center;
                }
                .nb-dropzone-title { font-size: 12.5px; font-weight: 700; color: var(--nb-ink); margin: 0 0 4px; }
                .nb-dropzone-hint { font-size: 10.5px; color: var(--nb-muted); margin: 0; }
                .nb-dropzone-file { margin-top: 10px; font-size: 12px; font-weight: 700; color: var(--nb-success); display: flex; align-items: center; justify-content: center; gap: 6px; }

                /* ---------- Footer ---------- */
                .nb-footer-outer { position: sticky; bottom: 0; background: #fff; border-top: 1px solid var(--nb-border); }
                .dark .nb-footer-outer { background: #1E293B; }
                .nb-footer { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 20px; }
                .nb-btn-back {
                    background: none; border: none; color: var(--nb-muted); font-size: 13px; font-weight: 700;
                    display: flex; align-items: center; gap: 6px; cursor: pointer; padding: 10px 6px;
                }
                .nb-btn-back:hover { color: var(--nb-ink); }
                .nb-btn-next {
                    padding: 13px 28px; border-radius: 999px; font-size: 13px; font-weight: 700; letter-spacing: .02em;
                    border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
                    background: var(--nb-primary); color: #fff; transition: filter .15s, transform .1s;
                }
                .nb-btn-next:hover { filter: brightness(1.06); }
                .nb-btn-next:active { transform: scale(0.98); }
            `}),e.jsxs("div",{className:"nb-shell",children:[e.jsxs("div",{className:"nb-hero",children:[e.jsx("div",{className:"nb-hero-left",children:e.jsx("div",{className:"nb-steps-row",children:G.map(n=>e.jsxs("div",{className:`nb-step-item ${n.id===f?"active":""} ${n.id<f?"done":""}`,children:[e.jsx("div",{className:"nb-step-badge",children:n.id<f?e.jsx(c,{path:l.check,size:15}):String(n.id).padStart(2,"0")}),e.jsx("div",{className:"nb-step-label",children:n.title})]},n.id))})}),e.jsx("div",{className:"nb-hero-right",children:e.jsx(ge,{})})]}),e.jsxs("form",{onSubmit:n=>n.preventDefault(),style:{display:"flex",flexDirection:"column",flex:1},children:[e.jsx("div",{className:"nb-body-outer",children:e.jsxs("div",{className:"nb-body-inner",children:[e.jsx("h1",{className:"nb-title",children:f===1?"Facility request":Y.title}),e.jsx("p",{className:"nb-subtitle",children:Y.subtitle}),f===1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"nb-row-2",children:[e.jsxs("div",{className:"nb-field",children:[e.jsxs("label",{className:"nb-label",children:[e.jsx(c,{path:l.office}),"Regional office ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx(J,{unstyled:!0,classNamePrefix:"nbrs",classNames:W(g.venue),options:T,value:ie,onChange:se,placeholder:"Select office",isClearable:!0,isSearchable:!0,noOptionsMessage:()=>"No offices found"})]}),e.jsxs("div",{className:"nb-field",children:[e.jsxs("label",{className:"nb-label",children:[e.jsx(c,{path:l.room}),"Room / unit ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx(J,{unstyled:!0,classNamePrefix:"nbrs",classNames:W(g.facility),options:S,value:oe,onChange:le,placeholder:"Select room",isClearable:!0,isSearchable:!0,isDisabled:!u||S.length===0,noOptionsMessage:()=>"No rooms found"})]})]}),e.jsxs("div",{className:"nb-row-3",children:[e.jsxs("div",{className:"nb-field",children:[e.jsxs("label",{className:"nb-label",children:[e.jsx(c,{path:l.calendar}),"Reservation date ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"date",className:`nb-input ${z||g.date?"err":""}`,value:r.date,onChange:n=>ce(n.target.value)})]}),e.jsxs("div",{className:"nb-field",children:[e.jsxs("label",{className:"nb-label",children:[e.jsx(c,{path:l.clock}),"Start time ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"time",className:`nb-input ${g.startTime?"err":""}`,value:r.startTime,onChange:n=>m({...r,startTime:n.target.value})})]}),e.jsxs("div",{className:"nb-field",children:[e.jsxs("label",{className:"nb-label",children:[e.jsx(c,{path:l.clock}),"End time ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"time",className:`nb-input ${g.endTime?"err":""}`,value:r.endTime,onChange:n=>m({...r,endTime:n.target.value})})]})]}),z&&e.jsxs("div",{className:"nb-warning",children:[e.jsx(c,{path:l.alert,size:15}),z]}),e.jsxs("div",{className:`nb-hint ${H?"filled":""}`,children:[e.jsx(c,{path:l.checkSquare,size:16}),H?e.jsxs("span",{children:[e.jsx("strong",{children:r.facility})," at ",e.jsx("strong",{children:r.venue})," · ",r.date," · ",r.startTime,"–",r.endTime]}):e.jsx("span",{children:"Fill in the fields above to preview your request."})]})]}),f===2&&e.jsxs(e.Fragment,{children:[r.venue&&N.length>0&&e.jsxs("div",{className:"nb-equip-toolbar",children:[e.jsxs("div",{className:"nb-search",children:[e.jsx(c,{path:l.search,size:16}),e.jsx("input",{type:"text",placeholder:"Search equipment",value:B,onChange:n=>V(n.target.value)})]}),e.jsx("div",{className:"nb-pills",children:re.map(n=>e.jsx("button",{type:"button",className:`nb-pill ${E===n?"active":""}`,onClick:()=>_(n),children:n},n))})]}),e.jsx("div",{className:"nb-equip-grid",children:r.venue?N.length===0?e.jsxs("div",{className:"nb-empty",children:[e.jsx(c,{path:l.box,size:26}),e.jsx("div",{children:"No equipment is available at this venue."})]}):w.length===0?e.jsxs("div",{className:"nb-empty",children:[e.jsx(c,{path:l.search,size:26}),e.jsx("div",{children:"No equipment matches your search."})]}):e.jsxs(e.Fragment,{children:[te.map(n=>{const a=ae(n.id),i=a>0,t=ve(n.image),s=!!t;return e.jsxs("div",{className:`nb-equip-card ${i?"selected":""}`,children:[e.jsxs("div",{className:"nb-equip-top",children:[e.jsxs("div",{className:"nb-equip-thumb",children:[s?e.jsx("img",{src:t,alt:n.name,onError:p=>{var h;p.currentTarget.style.display="none",(h=p.currentTarget.nextElementSibling)==null||h.removeAttribute("hidden")}}):null,e.jsx("div",{className:"nb-equip-icon",hidden:s,children:e.jsx(c,{path:ye(n.name),size:22})})]}),e.jsxs("div",{style:{minWidth:0,flex:1},children:[e.jsx("p",{className:"nb-equip-name",children:n.name}),e.jsx("p",{className:"nb-equip-sub",children:n.category||n.description||"Available equipment"})]})]}),e.jsxs("div",{className:"nb-equip-meta",children:[e.jsxs("div",{className:"nb-equip-meta-item",children:[e.jsx("p",{className:"nb-equip-meta-label",children:"Brand"}),e.jsx("p",{className:"nb-equip-meta-value",children:n.brand||"—"})]}),e.jsxs("div",{className:"nb-equip-meta-item",children:[e.jsx("p",{className:"nb-equip-meta-label",children:"Model"}),e.jsx("p",{className:"nb-equip-meta-value",children:n.model||"—"})]})]}),e.jsxs("div",{className:"nb-equip-bottom",children:[e.jsxs("span",{className:"nb-equip-stock",children:["Stock: ",n.available]}),e.jsxs("div",{className:"nb-stepper",children:[e.jsx("button",{type:"button",disabled:a===0,onClick:()=>Z(n,-1),children:e.jsx(c,{path:l.minus,size:13})}),e.jsx("span",{className:"qty",children:a}),e.jsx("button",{type:"button",className:"primary",disabled:a>=n.available,onClick:()=>Z(n,1),children:e.jsx(c,{path:l.plus,size:13})})]})]})]},n.id)}),w.length>D&&e.jsx("button",{type:"button",className:"nb-more-btn",onClick:()=>L(n=>!n),children:Q?"Show less":`+ ${w.length-D} more equipment`})]}):e.jsxs("div",{className:"nb-empty",children:[e.jsx(c,{path:l.office,size:26}),e.jsx("div",{children:"Select a Regional Office first to see available equipment."})]})}),r.selectedEquipment.length>0&&e.jsxs("div",{className:"nb-summary",children:[e.jsx("p",{className:"nb-summary-title",children:"Selected Equipment"}),r.selectedEquipment.map(n=>e.jsxs("div",{className:"nb-summary-row",children:[e.jsx("span",{children:n.name}),e.jsxs("strong",{children:[n.requestedQty," ",n.requestedQty>1?"pcs":"pc"]})]},n.id))]})]}),f===3&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"nb-field",children:[e.jsxs("label",{className:"nb-label",children:["Name of activity ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",className:`nb-input ${g.activityName?"err":""}`,value:r.activityName,onChange:n=>m({...r,activityName:n.target.value}),placeholder:"e.g. ICT Skills Training for Youth"})]}),e.jsxs("div",{className:"nb-field",children:[e.jsxs("label",{className:"nb-label",children:["Purpose / objectives ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("textarea",{className:`nb-textarea ${g.purpose?"err":""}`,rows:6,value:r.purpose,onChange:n=>m({...r,purpose:n.target.value}),placeholder:"Describe the purpose and goals of your event..."})]}),e.jsxs("div",{className:"nb-field",children:[e.jsx("label",{className:"nb-label",children:"Formal request letter / document"}),e.jsxs("div",{className:"nb-dropzone",onClick:()=>{var n;return(n=document.getElementById("fileInput"))==null?void 0:n.click()},children:[e.jsx("input",{id:"fileInput",type:"file",onChange:de,style:{display:"none"},accept:".pdf,.jpg,.jpeg,.png"}),e.jsx("div",{className:"nb-dropzone-icon",children:e.jsx(c,{path:l.lock,size:18})}),e.jsx("p",{className:"nb-dropzone-title",children:"Click to upload request letter"}),e.jsx("p",{className:"nb-dropzone-hint",children:"Support document · PDF / Image · 10MB max"}),r.attachmentName&&e.jsxs("div",{className:"nb-dropzone-file",children:[e.jsx(c,{path:l.check,size:14}),r.attachmentName]})]})]})]}),f===4&&e.jsxs("div",{className:"nb-row-2",children:[e.jsxs("div",{className:"nb-field",style:{gridColumn:"1 / -1"},children:[e.jsxs("label",{className:"nb-label",children:[e.jsx(c,{path:l.user}),"Requestor full name ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"text",className:`nb-input ${g.requestor?"err":""}`,value:r.requestor,onChange:n=>m({...r,requestor:n.target.value}),placeholder:"Full Name"})]}),e.jsxs("div",{className:"nb-field",children:[e.jsxs("label",{className:"nb-label",children:[e.jsx(c,{path:l.mail}),"Email address ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"email",className:`nb-input ${g.email?"err":""}`,value:r.email,onChange:n=>m({...r,email:n.target.value}),placeholder:"email@example.com"})]}),e.jsxs("div",{className:"nb-field",children:[e.jsxs("label",{className:"nb-label",children:[e.jsx(c,{path:l.phone}),"Contact number ",e.jsx("span",{className:"req",children:"*"})]}),e.jsx("input",{type:"tel",className:`nb-input ${g.phoneNumber?"err":""}`,value:r.phoneNumber,onChange:n=>{const a=n.target.value.replace(/\D/g,"").slice(0,11);m({...r,phoneNumber:a})},placeholder:"09XX XXX XXXX"})]})]})]})}),e.jsx("div",{className:"nb-footer-outer",children:e.jsxs("div",{className:"nb-footer",children:[e.jsxs("button",{type:"button",className:"nb-btn-back",onClick:be,children:[e.jsx(c,{path:l.arrowLeft,size:15}),"Back"]}),f<4?e.jsxs("button",{type:"button",className:"nb-btn-next",onClick:pe,children:["Next",e.jsx(c,{path:l.arrowRight,size:15})]}):e.jsxs("button",{type:"button",className:"nb-btn-next",onClick:ue,children:["Submit",e.jsx(c,{path:l.arrowRight,size:15})]})]})})]})]})]})}export{qe as default};

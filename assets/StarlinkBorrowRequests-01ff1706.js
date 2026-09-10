import{u as P,d as L,r as m,j as e,M as B,a as N,S as g}from"./index-c3b2c6f0.js";import{A as F}from"./arrow-left-7bd9150d.js";import{E as U}from"./eye-dfdc83dc.js";import{T as M}from"./trash-2-0be548b1.js";import{F as V}from"./file-text-7151ae06.js";import{D as W,C as G}from"./download-f08feba6.js";import{C as H}from"./check-circle-2-0a684db7.js";import{X as K}from"./x-circle-229eff6f.js";const J="/bookings/dic.png",Y="/bookings/bp.png",o=a=>String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),j=a=>{if(!a)return"—";const l=new Date(`${a}T00:00:00`);return Number.isNaN(l.getTime())?a:l.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})};function Q(a,l,c){const h=l.length>0?l.map(b=>`
              <tr>
                <td>${o(b.kit_id||b.starlink_serial_number||"—")}</td>
                <td>${o(b.description||"Starlink Equipment")}</td>
                <td>${o(b.model_type||"Mini")}</td>
              </tr>
            `).join(""):`
          <tr>
            <td colspan="3" class="no-kits">
              No kits selected
            </td>
          </tr>
        `,y=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Starlink Equipment Request Form</title>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@page {
  size: A4;
  margin: 0;
}

html,
body {
  width: 210mm;
  min-height: 297mm;
  margin: 0;
  padding: 0;
  background: #ffffff;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #111827;
  background: #ffffff;
}

.container {
  width: 210mm;
  min-height: 297mm;
  padding: 12mm 17mm 12mm 17mm;
  background: #ffffff;
}

.government-header {
  width: 100%;
  display: grid;
  grid-template-columns: 75px 1fr 75px;
  align-items: center;
  column-gap: 12px;
  padding-bottom: 9px;
  border-bottom: 1.5px solid #111827;
}

.logo-wrapper {
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-wrapper img {
  display: block;
  max-width: 70px;
  max-height: 70px;
  width: auto;
  height: auto;
  object-fit: contain;
}

.government-text {
  text-align: center;
  line-height: 1.25;
  color: #111827;
}

.republic {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.35px;
  margin-bottom: 2px;
}

.department {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2px;
  margin-bottom: 2px;
}

.region {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.25px;
}

.document-title {
  text-align: center;
  margin-top: 12px;
  margin-bottom: 14px;
}

.document-title h1 {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.35px;
  color: #0369a1;
}

.document-title p {
  margin-top: 3px;
  font-size: 8.5px;
  color: #6b7280;
}

.form-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.65px;
  color: #0369a1;
  padding-bottom: 4px;
  margin-bottom: 8px;
  border-bottom: 1.2px solid #0369a1;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 9px;
}

.form-row.full {
  grid-template-columns: 1fr;
}

.form-row.cols-3 {
  grid-template-columns: 1fr 1fr 1fr;
}

.request-no-banner {
  font-family: 'Courier New', monospace;
  color: #dc2626;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.4px;
  margin-bottom: 10px;
}

.form-group {
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.form-label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.25px;
  margin-bottom: 1px;
}

.form-value {
  width: 100%;
  min-height: 20px;
  padding: 2px 1px 3px 1px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 12px;
  font-weight: 700;
  color: #111827;
  background: transparent;
  border: none;
  border-bottom: 0.8px solid #4b5563;
  display: flex;
  align-items: center;
  word-break: break-word;
  overflow-wrap: anywhere;
}

.table-label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25px;
  margin-top: 7px;
  margin-bottom: 4px;
  color: #374151;
}

.table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  font-size: 8.5px;
}

.table col.kit-id-column { width: 25%; }
.table col.description-column { width: 50%; }
.table col.model-column { width: 25%; }

.table th {
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 6px;
  color: #111827;
  background: #f3f4f6;
  border-top: 0.8px solid #6b7280;
  border-bottom: 0.8px solid #6b7280;
}

.table td {
  padding: 5px 6px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 12px;
  font-weight: 700;
  border-bottom: 0.6px solid #d1d5db;
  vertical-align: middle;
}

.table tbody tr:last-child td {
  border-bottom: 0.8px solid #6b7280;
}

.no-kits {
  text-align: center;
  padding: 7px !important;
  color: #6b7280;
}

.signature-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 45px;
  margin-top: 25px;
  margin-bottom: 220px;
  font-size: 8.5px;
}

.signature-block {
  text-align: center;
}

.signature-space {
  height: 32px;
}

.signature-line {
  border-top: 0.8px solid #111827;
  padding-top: 3px;
  font-size: 12px;
  font-weight: 700;
}

.signature-name {
  margin-top: 2px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 12px;
  font-weight: 700;
  color: #374151;
}

.footer {
  margin-top: 18px;
  padding-top: 6px;
  border-top: 0.6px solid #d1d5db;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 12px;
  color: #374151;
  line-height: 1.5;
}

.footer-line {
  font-family: 'Times New Roman', Times, serif;
  font-size: 12px;
}

.footer-office {
  font-weight: 700;
  font-size: 12px;
  color: #111827;
}

img {
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

@media print {
  body {
    background: white;
  }
  .container {
    width: 210mm;
    min-height: 297mm;
    margin: 0;
    padding: 12mm 17mm;
  }
}
</style>
</head>

<body>

<div class="container">

  <div class="government-header">

    <div class="logo-wrapper">
      <img src="${J}" alt="DICT Logo" />
    </div>

    <div class="government-text">
      <div class="republic">REPUBLIC OF THE PHILIPPINES</div>
      <div class="department">DEPARTMENT OF INFORMATION COMMUNICATIONS TECHNOLOGY</div>
      <div class="region">REGION OFFICE X</div>
    </div>

    <div class="logo-wrapper">
      <img src="${Y}" alt="Bagong Pilipinas Logo" />
    </div>

  </div>

  <div class="document-title">
    <h1>STARLINK EQUIPMENT BORROW REQUEST</h1>
    <p>Submitted on ${o(y)}</p>
  </div>

  <div class="form-section">

    <div class="request-no-banner">
      REQUEST NO: ${o(c||"______________")}
    </div>

    <div class="section-title">Borrower Information</div>

    <div class="form-row cols-3">

      <div class="form-group">
        <span class="form-label">Borrower Full Name:</span>
        <div class="form-value">${o(a.borrower_full_name)}</div>
      </div>

      <div class="form-group">
        <span class="form-label">Contact Number</span>
        <div class="form-value">${o(a.contact_number)}</div>
      </div>

      <div class="form-group">
        <span class="form-label">Email Address:</span>
        <div class="form-value">${o(a.email)}</div>
      </div>

    </div>

    <div class="form-row">
      <div class="form-group">
        <span class="form-label">Borrowing Organization:</span>
        <div class="form-value">${o(a.borrowing_organization)}</div>
      </div>
    </div>

  </div>

  <div class="form-section">

    <div class="section-title">Equipment Details</div>

    <div class="form-row">

      <div class="form-group">
        <span class="form-label">Equipment Type Required:</span>
        <div class="form-value">${o(a.equipment_type_required)}</div>
      </div>

      <div class="form-group">
        <span class="form-label">Days Required:</span>
        <div class="form-value">${o(a.days_required)}</div>
      </div>

    </div>

    <div class="table-label">Selected Starlink Kits</div>

    <table class="table">
      <colgroup>
        <col class="kit-id-column" />
        <col class="description-column" />
        <col class="model-column" />
      </colgroup>
      <thead>
        <tr>
          <th>Kit ID</th>
          <th>Description</th>
          <th>Model Type</th>
        </tr>
      </thead>
      <tbody>
        ${h}
      </tbody>
    </table>

  </div>

  <div class="form-section">

    <div class="section-title">Activity Information</div>

    <div class="form-row">

      <div class="form-group">
        <span class="form-label">Name of Activity:</span>
        <div class="form-value">${o(a.name_of_activity)}</div>
      </div>

      <div class="form-group">
        <span class="form-label">Place of Activity:</span>
        <div class="form-value">${o(a.place_of_activity)}</div>
      </div>
     <div class="form-group">
  <span class="form-label">DATE OF ACTIVITY:</span>
  <div class="form-value">
    ${a.reservation_end_date&&a.reservation_start_date!==a.reservation_end_date?`${o(j(a.reservation_start_date))} – ${o(j(a.reservation_end_date))}`:o(j(a.reservation_start_date))}
  </div>
</div>

      <div class="form-group">
        <span class="form-label">Expected Return Date:</span>
        <div class="form-value">${o(j(a.expected_return_date))}</div>
      </div>

    </div>

    ${a.primary_purpose&&a.primary_purpose.trim()?`
          <div class="form-row full">
            <div class="form-group">
              <span class="form-label">Primary Purpose</span>
              <div class="form-value">${o(a.primary_purpose)}</div>
            </div>
          </div>
        `:""}

  </div>

  <div class="signature-section">

   <div class="signature-block">
  <div class="signature-space"></div>
  <div class="signature-name">${o(a.borrower_full_name)}</div>
  <div class="signature-line">BORROWER SIGNATURE</div>
</div>

<div class="signature-block">
  <div class="signature-space"></div>
  <div class="signature-name">REY BESADRE</div>
  <div class="signature-line">APPROVING OFFICER</div>
</div>

  </div>

  <div class="footer">
    <div class="footer-line footer-office">DICT Misamis Oriental Office</div>
    <div class="footer-line">T. Chavez St, Cagayan De Oro City, Misamis Oriental</div>
    <div class="footer-line">0888550018 | misor@dict.gov.ph | www.dict.gov.ph</div>
  </div>

</div>

</body>
</html>
  `}function f(a){return(a||"").trim().toUpperCase()}function X(a){const l=f(a);return["APPROVED","RELEASED","RETURNED"].includes(l)?"border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400":["REJECTED","CANCELLED","OVERDUE"].includes(l)?"border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800 dark:bg-rose-900/30 dark:text-rose-400":"border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-400"}function A({status:a}){const l=f(a);let c=G;return["APPROVED","RELEASED","RETURNED"].includes(l)?c=H:["REJECTED","CANCELLED"].includes(l)&&(c=K),e.jsxs("span",{className:`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${X(a)}`,children:[e.jsx(c,{size:12}),a||"Pending Approval"]})}function Z(a){if(!a)return"";try{const c=a.split("?")[0].split("/");return decodeURIComponent(c[c.length-1]||"")}catch{return""}}function de(){const a=P(),{currentUser:l}=L()||{},[c,h]=m.useState([]),[y,b]=m.useState(!0),[t,_]=m.useState(null),[x,v]=m.useState(null),[E,R]=m.useState(!1),[u,T]=m.useState("all"),k=l==null?void 0:l.assignedOfficeId,C=(l==null?void 0:l.is_superuser)!==!0&&k!=null,D=m.useRef(null);m.useEffect(()=>{(async()=>{try{const s=await N.get("starlink-requests/");h(Array.isArray(s.data)?s.data:[])}catch(s){console.error("Failed to load requests:",s),g.fire({icon:"error",title:"Failed to Load",text:"Could not load borrow requests.",confirmButtonColor:"#2563eb"})}finally{b(!1)}})()},[]);const p=m.useMemo(()=>C?c.filter(r=>{var s;return String(r.office_id??r.office)===String(k)||((s=r.office_ids)==null?void 0:s.some(d=>String(d)===String(k)))}):c,[c,C,k]),w=m.useMemo(()=>({total:p.length,confirmed:p.filter(r=>["APPROVED","RELEASED","RETURNED"].includes(f(r.status))).length,pending:p.filter(r=>f(r.status).includes("PENDING")).length,rejected:p.filter(r=>["REJECTED","CANCELLED"].includes(f(r.status))).length}),[p]),q=m.useMemo(()=>u==="all"?p:p.filter(r=>{const s=f(r.status);return u==="confirmed"?["APPROVED","RELEASED","RETURNED"].includes(s):u==="pending"?s.includes("PENDING"):u==="rejected"?["REJECTED","CANCELLED"].includes(s):!0}),[p,u]),S=(r,s)=>{var d;s==null||s.stopPropagation(),T(r),(d=D.current)==null||d.scrollIntoView({behavior:"smooth",block:"start"})},$=async()=>{var r,s;if(!(!t||!x)){R(!0);try{await N.post(`starlink-requests/${t.id}/status/`,{status:x}),h(d=>d.map(n=>n.id===t.id?{...n,status:x}:n)),_(null),v(null),g.fire({icon:"success",title:"Updated",text:`Request marked as ${x}.`,confirmButtonColor:"#2563eb"})}catch(d){console.error("Failed to update request:",d),g.fire({icon:"error",title:"Update Failed",text:((s=(r=d.response)==null?void 0:r.data)==null?void 0:s.detail)||"Could not update request status.",confirmButtonColor:"#2563eb"})}finally{R(!1)}}},z=async r=>{var d,n;if((await g.fire({title:"Delete borrow request?",text:r.request_number||`Request #${r.id}`,icon:"warning",showCancelButton:!0,confirmButtonText:"Delete",confirmButtonColor:"#e11d48"})).isConfirmed)try{await N.delete(`starlink-requests/${r.id}/`),h(i=>i.filter(O=>O.id!==r.id)),g.fire({icon:"success",title:"Deleted",text:"The borrow request was deleted.",timer:1400,showConfirmButton:!1})}catch(i){console.error("Failed to delete request:",i),g.fire({icon:"error",title:"Delete Failed",text:((n=(d=i.response)==null?void 0:d.data)==null?void 0:n.detail)||"Could not delete the borrow request.",confirmButtonColor:"#2563eb"})}},I=()=>{if(!t)return;const r={borrowing_organization:t.borrowing_organization||"",borrower_full_name:t.borrower_full_name||"",contact_number:t.contact_number||"",email:t.email||"",equipment_type_required:t.equipment_type_required||"",days_required:String(t.days_required||""),reservation_start_date:t.reservation_start_date||"",reservation_end_date:t.reservation_end_date||"",expected_return_date:t.expected_return_date||"",name_of_activity:t.name_of_activity||"",place_of_activity:t.place_of_activity||"",primary_purpose:t.primary_purpose||"",selected_kit_ids:Array.isArray(t.starlink_kits)?t.starlink_kits.map(i=>typeof i=="object"?i.id||i.kit_id:i).map(i=>Number(i)).filter(i=>Number.isFinite(i)):[]},s=Array.isArray(t.kit_details)?t.kit_details:Array.isArray(t.starlink_kits)?t.starlink_kits.map(i=>({id:i.id||i,kit_id:i.kit_id,starlink_serial_number:i.starlink_serial_number,description:i.description,model_type:i.model_type})):[],d=Q(r,s,t.request_number||`#${t.id}`),n=window.open("","","width=900,height=700");n&&(n.document.write(d),n.document.close(),n.focus(),setTimeout(()=>{n.print()},250))};return y?e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-500 mx-auto mb-4 dark:border-slate-700"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Loading requests..."})]})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 dark:from-slate-950 dark:to-slate-900",children:[e.jsxs("div",{className:"mx-auto max-w-7xl",children:[e.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>a("/bookings/admin/dashboard"),className:"mb-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",children:[e.jsx(F,{size:16}),"Back"]}),e.jsx("h1",{className:"text-3xl font-bold text-slate-900 dark:text-white",children:"WiFi Borrow Requests"}),e.jsx("p",{className:"mt-1 text-sm text-slate-600 dark:text-slate-400",children:"Review and approve Starlink equipment borrow requests"})]}),e.jsx(B,{})]}),e.jsx("div",{className:"grid grid-cols-4 gap-3 sm:gap-4",children:[{key:"all",label:"Total Requests",value:w.total,icon:"fas fa-file-lines",bgColor:"bg-blue-50 dark:bg-blue-950/40",iconColor:"text-blue-600 dark:text-blue-400",hoverBorder:"hover:border-blue-200 dark:hover:border-blue-900",decorativeIcon:"fas fa-clipboard-list",decorativeColor:"text-blue-100 dark:text-blue-950/60",buttonColor:"text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"},{key:"confirmed",label:"Confirmed",value:w.confirmed,icon:"fas fa-calendar-check",bgColor:"bg-emerald-50 dark:bg-emerald-950/40",iconColor:"text-emerald-600 dark:text-emerald-400",hoverBorder:"hover:border-emerald-200 dark:hover:border-emerald-900",decorativeIcon:"fas fa-check-circle",decorativeColor:"text-emerald-100 dark:text-emerald-950/60",buttonColor:"text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"},{key:"pending",label:"Pending",value:w.pending,icon:"fas fa-hourglass-half",bgColor:"bg-amber-50 dark:bg-amber-950/40",iconColor:"text-amber-600 dark:text-amber-400",hoverBorder:"hover:border-amber-200 dark:hover:border-amber-900",decorativeIcon:"fas fa-clock",decorativeColor:"text-amber-100 dark:text-amber-950/60",buttonColor:"text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300"},{key:"rejected",label:"Rejected / Cancelled",value:w.rejected,icon:"fas fa-ban",bgColor:"bg-rose-50 dark:bg-rose-950/40",iconColor:"text-rose-600 dark:text-rose-400",hoverBorder:"hover:border-rose-200 dark:hover:border-rose-900",decorativeIcon:"fas fa-ban",decorativeColor:"text-rose-100 dark:text-rose-950/60",buttonColor:"text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300"}].map(r=>{const s=r.key,d=u===s;return e.jsxs("div",{className:`group relative overflow-hidden bg-white dark:bg-slate-900 rounded-xl border p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${d?"border-blue-400 ring-2 ring-blue-200 dark:border-blue-500 dark:ring-blue-900":`border-slate-200 dark:border-slate-800 ${r.hoverBorder}`}`,onClick:()=>S(s),children:[e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:`w-11 h-11 flex items-center justify-center rounded-xl ${r.bgColor} ${r.iconColor} mb-3 transition-all duration-300 group-hover:scale-110`,children:e.jsx("i",{className:`${r.icon} text-lg`})}),e.jsx("p",{className:"text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1",children:r.label}),e.jsx("p",{className:"text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3",children:r.value}),e.jsx("button",{type:"button",onClick:n=>S(s,n),className:`text-xs font-bold ${r.buttonColor} transition-colors`,children:d?"Viewing":"View details"})]}),e.jsx("div",{className:`absolute -right-3 -bottom-4 ${r.decorativeColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`,children:e.jsx("i",{className:`${r.decorativeIcon} text-7xl`})})]},r.key)})}),e.jsx("div",{ref:D,className:"overflow-x-auto rounded-2xl bg-white shadow-sm dark:bg-slate-900",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left font-bold text-slate-700 dark:text-slate-300",children:"Request #"}),e.jsx("th",{className:"px-6 py-4 text-left font-bold text-slate-700 dark:text-slate-300",children:"Borrower"}),e.jsx("th",{className:"px-6 py-4 text-left font-bold text-slate-700 dark:text-slate-300",children:"Organization"}),e.jsx("th",{className:"px-6 py-4 text-left font-bold text-slate-700 dark:text-slate-300",children:"Activity"}),e.jsx("th",{className:"px-6 py-4 text-left font-bold text-slate-700 dark:text-slate-300",children:"Status"}),e.jsx("th",{className:"px-6 py-4 text-left font-bold text-slate-700 dark:text-slate-300",children:"Action"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-200 dark:divide-slate-800",children:q.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,className:"px-6 py-8 text-center text-slate-500 dark:text-slate-400",children:"No requests found"})}):q.map(r=>e.jsxs("tr",{className:"hover:bg-slate-50 dark:hover:bg-slate-800/50",children:[e.jsx("td",{className:"px-6 py-4 font-mono text-xs font-semibold text-slate-900 dark:text-white",children:r.request_number||`#${r.id}`}),e.jsx("td",{className:"px-6 py-4 text-slate-900 dark:text-slate-100",children:r.borrower_full_name||"—"}),e.jsx("td",{className:"px-6 py-4 text-slate-600 dark:text-slate-400",children:r.borrowing_organization||"—"}),e.jsx("td",{className:"px-6 py-4 text-slate-600 dark:text-slate-400",children:r.name_of_activity||"—"}),e.jsx("td",{className:"px-6 py-4",children:e.jsx(A,{status:r.status})}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>{_(r),v(null)},title:"Review","aria-label":"Review",className:"rounded-lg bg-blue-50 p-2 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50",children:e.jsx(U,{size:16})}),e.jsx("button",{onClick:()=>z(r),title:"Delete","aria-label":"Delete",className:"rounded-lg bg-rose-50 p-2 text-rose-600 hover:bg-rose-100 dark:bg-rose-900/30 dark:text-rose-400 dark:hover:bg-rose-900/50",children:e.jsx(M,{size:16})})]})})]},r.id))})]})})]}),t&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4",children:e.jsxs("div",{className:"w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900",children:[e.jsxs("div",{className:"sticky top-0 border-b border-slate-200 px-8 py-6 dark:border-slate-800 bg-white dark:bg-slate-900",children:[e.jsxs("h2",{className:"text-xl font-bold text-slate-900 dark:text-white",children:["Borrow Request #",t.request_number||t.id]}),e.jsx("p",{className:"mt-1 text-sm text-slate-600 dark:text-slate-400",children:"Review the complete request details below"})]}),e.jsxs("div",{className:"space-y-6 px-8 py-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300 border-b border-slate-200 pb-2 dark:border-slate-700",children:"Borrower Information"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"Organization"}),e.jsx("p",{className:"mt-2 text-slate-900 dark:text-slate-100",children:t.borrowing_organization||"—"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"Borrower Name"}),e.jsx("p",{className:"mt-2 text-slate-900 dark:text-slate-100",children:t.borrower_full_name||"—"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"Contact Number"}),e.jsx("p",{className:"mt-2 text-slate-900 dark:text-slate-100",children:t.contact_number||"—"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"Email Address"}),e.jsx("p",{className:"mt-2 text-slate-900 dark:text-slate-100",children:t.email?e.jsx("a",{href:`mailto:${t.email}`,className:"text-blue-600 hover:underline dark:text-blue-400",children:t.email}):"—"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300 border-b border-slate-200 pb-2 dark:border-slate-700",children:"Equipment Details"}),e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"Equipment Type"}),e.jsx("p",{className:"mt-2 text-slate-900 dark:text-slate-100",children:t.equipment_type_required||"—"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300 border-b border-slate-200 pb-2 dark:border-slate-700",children:"Reservation Details"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"Start Date"}),e.jsx("p",{className:"mt-2 text-slate-900 dark:text-slate-100",children:t.reservation_start_date?new Date(t.reservation_start_date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}):"—"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"End Date"}),e.jsx("p",{className:"mt-2 text-slate-900 dark:text-slate-100",children:t.reservation_end_date?new Date(t.reservation_end_date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}):"—"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"Expected Return Date"}),e.jsx("p",{className:"mt-2 text-slate-900 dark:text-slate-100",children:t.expected_return_date?new Date(t.expected_return_date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}):"—"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"Days Required"}),e.jsx("p",{className:"mt-2 text-slate-900 dark:text-slate-100",children:t.days_required||"—"})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300 border-b border-slate-200 pb-2 dark:border-slate-700",children:"Activity Information"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"Activity Name"}),e.jsx("p",{className:"mt-2 text-slate-900 dark:text-slate-100",children:t.name_of_activity||"—"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"Place of Activity"}),e.jsx("p",{className:"mt-2 text-slate-900 dark:text-slate-100",children:t.place_of_activity||"—"})]}),t.primary_purpose&&e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"Primary Purpose"}),e.jsx("p",{className:"mt-2 text-slate-900 dark:text-slate-100",children:t.primary_purpose})]}),e.jsx("div",{})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300 border-b border-slate-200 pb-2 dark:border-slate-700",children:"Attached Request Letter"}),t.request_letter?e.jsxs("a",{href:t.request_letter,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50",children:[e.jsx(V,{size:16}),t.request_letter_name||Z(t.request_letter)||"View Attached Letter"]}):e.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:"No letter attached."})]}),e.jsxs("div",{className:"rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:"Current Status"}),e.jsx("p",{className:"mt-2",children:e.jsx(A,{status:t.status})})]})]}),e.jsxs("div",{className:"sticky bottom-0 border-t border-slate-200 px-8 py-4 flex justify-end gap-3 dark:border-slate-800 bg-white dark:bg-slate-900",children:[e.jsx("button",{onClick:()=>{_(null),v(null)},className:"rounded-lg px-6 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",children:"Close"}),e.jsxs("button",{onClick:I,className:"rounded-lg border border-amber-200 bg-amber-50 px-6 py-2.5 text-sm font-bold text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50 flex items-center gap-2",children:[e.jsx(W,{size:16}),"Print/Save PDF"]}),e.jsx("button",{onClick:()=>v("Rejected"),className:`rounded-lg px-6 py-2.5 text-sm font-bold transition ${x==="Rejected"?"bg-rose-600 text-white":"border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 dark:border-rose-800 dark:bg-rose-900/30 dark:text-rose-400 dark:hover:bg-rose-900/50"}`,children:"Reject"}),t.status!=="Approved"&&e.jsx("button",{onClick:()=>v("Approved"),className:`rounded-lg px-6 py-2.5 text-sm font-bold transition ${x==="Approved"?"bg-emerald-600 text-white":"border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50"}`,children:"Approve"}),x&&e.jsx("button",{onClick:$,disabled:E,className:"rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-blue-700 disabled:opacity-50",children:E?"Updating...":`Confirm ${x}`})]})]})})]})}export{de as default};

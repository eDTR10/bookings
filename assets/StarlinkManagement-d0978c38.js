import{c as Oe,d as ot,r as o,j as e,h as te,a as L,S as m}from"./index-c7ffd172.js";import{C as ce}from"./clipboard-list-4b1ee076.js";import{C as ae}from"./check-circle-2-a6d5e480.js";import{C as ue,D as xe}from"./download-056b5178.js";import{X as O}from"./x-circle-36fe6922.js";import{P as Ie}from"./package-7556d8e6.js";import{W as $}from"./wifi-c9b28ab9.js";import{A as qe}from"./activity-92d89c99.js";import{U as Be}from"./user-508aaf4d.js";import{X as P}from"./x-d53ec293.js";import{S as dt,P as me}from"./search-8f294ab1.js";import{A as ct}from"./arrow-up-down-3af93e43.js";import{F as pe}from"./file-text-e0a7a5c8.js";import{L as se}from"./loader-2-c782e68e.js";import{A as xt}from"./alert-circle-b622ca05.js";import{H as mt}from"./hash-60bace19.js";import{B as Pe}from"./building-2-1b460726.js";import{T as pt}from"./trash-2-d2789cc0.js";import{P as ut}from"./phone-5b3d7bf0.js";import{M as bt}from"./map-pin-e2ff4ddc.js";import{P as ht}from"./printer-385a80de.js";import{S as ft}from"./shield-check-abf9d4f5.js";const Te=Oe("CalendarDays",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]),gt=Oe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),j=l=>String(l??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),C=l=>{if(!l)return"—";const n=new Date(`${l}T00:00:00`);return Number.isNaN(n.getTime())?l:n.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})};function Le(l,n,u){const k=n.length>0?n.map(E=>`
              <tr>
                <td>${j(E.kit_id||E.starlink_serial_number||"—")}</td>
                <td>${j(E.description||"Starlink Equipment")}</td>
                <td>${j(E.model_type||"Mini")}</td>
              </tr>
            `).join(""):`
          <tr>
            <td colspan="3" style="text-align:center;padding:8px;">
              No kits selected
            </td>
          </tr>
        `,K=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return`
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

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.5;
      color: #222;
      background: #fff;
    }

    .container {
      width: 210mm;
      min-height: 297mm;
      margin: 0 auto;
      padding: 15mm 18mm;
      background: white;
    }

    .government-header {
      width: 100%;
      display: grid;
      grid-template-columns: 75px 1fr 75px;
      align-items: center;
      column-gap: 15px;
      padding-bottom: 12px;
      border-bottom: 2px solid #0369a1;
      margin-bottom: 18px;
    }

    .logo-wrapper {
      width: 75px;
      height: 75px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-wrapper img {
      max-width: 70px;
      max-height: 70px;
      object-fit: contain;
    }

    .government-text {
      text-align: center;
      line-height: 1.3;
    }

    .government-text .republic {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    .government-text .department {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    .government-text .region {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .document-title {
      text-align: center;
      margin-bottom: 18px;
    }

    .document-title h1 {
      font-size: 17px;
      font-weight: 700;
      color: #0369a1;
      letter-spacing: 0.4px;
      margin-bottom: 4px;
    }

    .document-title p {
      font-size: 10px;
      color: #666;
    }

    .form-section {
      margin-bottom: 16px;
    }

    .section-title {
      color: #0369a1;
      font-weight: 700;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      padding-bottom: 5px;
      margin-bottom: 10px;
      border-bottom: 1.5px solid #0369a1;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-bottom: 11px;
    }

    .form-row.full {
      grid-template-columns: 1fr;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .form-label {
      font-weight: 600;
      font-size: 9px;
      margin-bottom: 2px;
      color: #222;
      text-transform: uppercase;
      letter-spacing: 0.25px;
    }

    .form-value {
      font-size: 10.5px;
      min-height: 22px;
      padding: 3px 2px 4px 2px;
      border: none;
      border-bottom: 1px solid #555;
      background: transparent;
      display: flex;
      align-items: center;
      color: #111;
      word-break: break-word;
    }

    .table-label {
      font-weight: 600;
      font-size: 9px;
      margin-top: 8px;
      margin-bottom: 5px;
      color: #222;
      text-transform: uppercase;
      letter-spacing: 0.25px;
    }

    .table {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;
      margin-top: 5px;
      font-size: 9.5px;
    }

    .table col.kit-id-column { width: 25%; }
    .table col.description-column { width: 50%; }
    .table col.model-column { width: 25%; }

    .table th {
      background: #f3f4f6;
      padding: 6px 7px;
      text-align: left;
      font-weight: 700;
      border-top: 1px solid #999;
      border-bottom: 1px solid #999;
    }

    .table td {
      padding: 7px;
      border-bottom: 1px solid #ccc;
      border-left: none;
      border-right: none;
    }

    .table tbody tr:last-child td {
      border-bottom: 1px solid #999;
    }

    .signature-section {
      margin-top: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 45px;
      font-size: 9px;
    }

    .signature-block {
      text-align: center;
    }

    .signature-space {
      height: 38px;
    }

    .signature-line {
      border-top: 1px solid #000;
      padding-top: 4px;
      font-weight: 700;
    }

    .signature-name {
      margin-top: 2px;
      font-size: 9px;
    }

    .footer {
      margin-top: 25px;
      padding-top: 8px;
      border-top: 1px solid #ccc;
      font-size: 8px;
      color: #777;
      text-align: center;
    }

    @media print {
      body {
        background: white;
      }

      .container {
        width: 210mm;
        min-height: 297mm;
        margin: 0;
        padding: 15mm 18mm;
      }
    }

    @media screen and (max-width: 800px) {
      .container {
        width: 100%;
        min-height: auto;
        padding: 25px;
      }

      .government-header {
        grid-template-columns: 55px 1fr 55px;
        column-gap: 8px;
      }

      .logo-wrapper {
        width: 55px;
        height: 55px;
      }

      .logo-wrapper img {
        max-width: 52px;
        max-height: 52px;
      }

      .government-text .republic {
        font-size: 9px;
      }

      .government-text .department {
        font-size: 10px;
      }

      .government-text .region {
        font-size: 9px;
      }
    }
  </style>
</head>

<body>

  <div class="container">

    <div class="government-header">

      <div class="logo-wrapper">
        <img src="/dic.png" alt="DICT Logo">
      </div>

      <div class="government-text">
        <div class="republic">REPUBLIC OF THE PHILIPPINES</div>
        <div class="department">DEPARTMENT OF INFORMATION COMMUNICATIONS TECHNOLOGY</div>
        <div class="region">REGION OFFICE X</div>
      </div>

      <div class="logo-wrapper">
        <img src="/bp.png" alt="Bagong Pilipinas Logo">
      </div>

    </div>

    <div class="document-title">
      <h1>STARLINK EQUIPMENT BORROW REQUEST</h1>
      <p>Submitted on ${j(K)}</p>
    </div>

    <div class="form-section">
      <div class="section-title">Borrower Information</div>

     

        <div class="form-group">
          <span class="form-label">Borrowing Organization</span>
          <div class="form-value">${j(l.borrowing_organization)}</div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <span class="form-label">Borrower Full Name</span>
          <div class="form-value">${j(l.borrower_full_name)}</div>
        </div>

        <div class="form-group">
          <span class="form-label">Contact Number</span>
          <div class="form-value">${j(l.contact_number)}</div>
        </div>
      </div>
    </div>

    <div class="form-section">
      <div class="section-title">Equipment Details</div>

      <div class="form-row">
        <div class="form-group">
          <span class="form-label">Equipment Type Required</span>
          <div class="form-value">${j(l.equipment_type_required)}</div>
        </div>

        <div class="form-group">
          <span class="form-label">Days Required</span>
          <div class="form-value">${j(l.days_required)}</div>
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
          ${k}
        </tbody>
      </table>
    </div>

    <div class="form-section">
      <div class="section-title">Reservation Details</div>

      <div class="form-row">
        <div class="form-group">
          <span class="form-label">Reservation Start Date</span>
          <div class="form-value">${j(C(l.reservation_start_date))}</div>
        </div>

        <div class="form-group">
          <span class="form-label">Reservation End Date</span>
          <div class="form-value">${j(C(l.reservation_end_date))}</div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <span class="form-label">Expected Return Date</span>
          <div class="form-value">${j(C(l.expected_return_date))}</div>
        </div>
      </div>
    </div>

    <div class="form-section">
      <div class="section-title">Activity Information</div>

      <div class="form-row full">
        <div class="form-group">
          <span class="form-label">Name of Activity</span>
          <div class="form-value">${j(l.name_of_activity)}</div>
        </div>
      </div>

      <div class="form-row full">
        <div class="form-group">
          <span class="form-label">Place of Activity</span>
          <div class="form-value">${j(l.place_of_activity)}</div>
        </div>
      </div>

      ${l.primary_purpose.trim()?`
            <div class="form-row full">
              <div class="form-group">
                <span class="form-label">Primary Purpose</span>
                <div class="form-value">${j(l.primary_purpose)}</div>
              </div>
            </div>
          `:""}
    </div>

    <div class="signature-section">
      <div class="signature-block">
        <div class="signature-space"></div>
        <div class="signature-line">Borrower Signature</div>
        <div class="signature-name">${j(l.borrower_full_name)}</div>
      </div>

      <div class="signature-block">
        <div class="signature-space"></div>
        <div class="signature-line">Approving Officer</div>
        <div class="signature-name">_____________________</div>
      </div>
    </div>

    <div class="footer">
      <p>
        This is a generated document. For official records, please contact
        the administrative office.
      </p>
    </div>

  </div>

</body>
</html>
  `}const h="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10",f="mb-2 block text-[11px] font-bold uppercase tracking-[0.08em] text-slate-500",y="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-50";function N(l){return(l||"").trim().toUpperCase()}function Me(l){return l?l.toLowerCase()==="released"?"Borrowed / Not Available":l:"Unknown"}function vt(l){const n=N(l);return n==="APPROVED"||n==="RELEASED"||n==="RETURNED"?"border-emerald-200 bg-emerald-50 text-emerald-700":n==="REJECTED"||n==="CANCELLED"||n==="OVERDUE"?"border-rose-200 bg-rose-50 text-rose-700":"border-amber-200 bg-amber-50 text-amber-700"}function jt(l){const n=N(l);return n==="AVAILABLE"?"border-emerald-200 bg-emerald-50 text-emerald-700":n==="RELEASED"?"border-blue-200 bg-blue-50 text-blue-700":n==="RESERVED"?"border-amber-200 bg-amber-50 text-amber-700":n==="MAINTENANCE"||n==="INACTIVE"?"border-violet-200 bg-violet-50 text-violet-700":n==="RETURNED"?"border-slate-200 bg-slate-50 text-slate-700":n==="OVERDUE"?"border-rose-200 bg-rose-50 text-rose-700":"border-slate-200 bg-slate-50 text-slate-600"}function Nt({status:l,small:n=!1}){const u=N(l);let k=Ie;return u==="AVAILABLE"||u==="APPROVED"||u==="RETURNED"?k=ae:u.includes("PENDING")||u==="RESERVED"?k=ue:u==="REJECTED"||u==="CANCELLED"||u==="OVERDUE"?k=O:u==="RELEASED"&&(k=$),e.jsxs("span",{className:`inline-flex w-fit items-center gap-1.5 rounded-full border font-bold ${n?"px-2 py-1 text-[9px]":"px-2.5 py-1 text-[10px]"} ${jt(l)}`,children:[e.jsx(k,{size:n?11:12}),Me(l)]})}function $e({status:l}){const n=N(l);let u=ue;return n==="APPROVED"||n==="RELEASED"||n==="RETURNED"?u=ae:(n==="REJECTED"||n==="CANCELLED")&&(u=O),e.jsxs("span",{className:`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${vt(l)}`,children:[e.jsx(u,{size:12}),l||"Pending Approval"]})}function _({label:l,value:n}){return e.jsxs("div",{children:[e.jsx("p",{className:"text-[9px] font-bold uppercase tracking-widest text-slate-400",children:l}),e.jsx("p",{className:"mt-1 text-sm font-semibold text-slate-800",children:n||"Not provided"})]})}function Ut(){var De,ze;const{currentUser:l}=ot()||{},[n,u]=o.useState([]),[k,K]=o.useState([]),[E,Fe]=o.useState([]),[Ke,be]=o.useState(!0),[he,fe]=o.useState(null),[ge,ve]=o.useState(null),[re,je]=o.useState(!1),[U,Ne]=o.useState(!1),[Ue,V]=o.useState(!1),[Ve,le]=o.useState(!1),[Xe,we]=o.useState(!1),[c,I]=o.useState(null),[b,A]=o.useState(null),[X,We]=o.useState(""),[ie,Ge]=o.useState(""),[W,He]=o.useState("all"),[G,Je]=o.useState("all"),[z,ye]=o.useState("all"),[H,_e]=o.useState("description-asc"),[Qe,ne]=o.useState(!1),T=l==null?void 0:l.assignedOfficeId,J=(l==null?void 0:l.is_superuser)!==!0&&T!=null,g=o.useMemo(()=>J?n.filter(t=>String(t.office_id??t.office)===String(T)):n,[n,J,T]),D=o.useMemo(()=>J?k.filter(t=>{var s;return String(t.office_id??t.office)===String(T)||((s=t.office_ids)==null?void 0:s.some(a=>String(a)===String(T)))}):k,[k,J,T]),[r,M]=o.useState({office:"",borrowing_organization:"",borrower_full_name:"",contact_number:"",equipment_type_required:"Starlink",days_required:"",reservation_start_date:"",reservation_end_date:"",expected_return_date:"",name_of_activity:"",place_of_activity:"",primary_purpose:"",selected_kit_ids:[]}),[w,q]=o.useState({starlink_serial_number:"",description:"",office_id:"",model_type:"Mini",status:"Available",kit_id:""});o.useEffect(()=>{var t,s,a,i;try{const x=localStorage.getItem("user");if(!x)return;const d=JSON.parse(x),p=(d==null?void 0:d.office_id)??((t=d==null?void 0:d.office)==null?void 0:t.id)??((s=d==null?void 0:d.user)==null?void 0:s.office_id)??((i=(a=d==null?void 0:d.user)==null?void 0:a.office)==null?void 0:i.id);p!=null&&We(String(p))}catch(x){console.error("Failed to resolve admin office:",x)}},[]),o.useEffect(()=>{X&&M(t=>({...t,office:X}))},[X]);const ke=async()=>{var t,s;try{be(!0),fe(null);const[a,i,x]=await Promise.all([L.get("starlink-kits/"),L.get("offices/"),L.get("starlink-requests/")]),d=Array.isArray(a.data)?a.data:[],p=Array.isArray(i.data)?i.data:[],v=Array.isArray(x.data)?x.data:[];u(d),Fe(p),K(v)}catch(a){console.error("Failed to load Starlink data:",a);const i=((s=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:s.detail)||"Failed to load Starlink management data.";fe(i),m.fire({icon:"error",title:"Load Error",text:i,confirmButtonColor:"#2563eb"})}finally{be(!1)}};o.useEffect(()=>{ke()},[]);const R=t=>{if(!t)return"N/A";const s=E.find(a=>Number(a.id)===Number(t));return(s==null?void 0:s.name)||"N/A"},Ze=o.useMemo(()=>E.map(t=>({id:t.id,name:t.name})).sort((t,s)=>t.name.localeCompare(s.name)),[E]),Ye=o.useMemo(()=>{const t=g.map(s=>s.model_type||"Mini").filter(Boolean);return Array.from(new Set(t)).sort((s,a)=>s.localeCompare(a))},[g]),et=o.useMemo(()=>{const t=g.map(s=>s.status||"Unknown").filter(Boolean);return Array.from(new Set(t)).sort((s,a)=>s.localeCompare(a))},[g]),Se=o.useMemo(()=>[...g].sort((t,s)=>{const a=(t.description||t.name||t.kit_id||"").toLowerCase(),i=(s.description||s.name||s.kit_id||"").toLowerCase();return H==="description-desc"?i.localeCompare(a):a.localeCompare(i)}),[g,H]),Q=o.useMemo(()=>{const t=ie.trim().toLowerCase();return Se.filter(s=>{const a=[s.starlink_serial_number,s.description,s.name,s.kit_id,s.model_type,R(s.office_id)].filter(Boolean).join(" ").toLowerCase(),i=!t||a.includes(t),x=W==="all"||(s.model_type||"Mini")===W,d=G==="all"||(s.status||"Unknown")===G;return i&&x&&d})},[Se,ie,W,G,E]),F=o.useMemo(()=>{const t=g.filter(x=>N(x.status)==="AVAILABLE").length,s=g.filter(x=>N(x.status)==="RELEASED").length,a=g.filter(x=>N(x.status)==="RESERVED").length,i=g.filter(x=>N(x.status)==="MAINTENANCE").length;return{total:g.length,available:t,released:s,reserved:a,maintenance:i}},[g]),Z=o.useMemo(()=>({total:D.length,confirmed:D.filter(t=>["APPROVED","RELEASED","RETURNED"].includes(N(t.status))).length,pending:D.filter(t=>N(t.status).includes("PENDING")).length,rejected:D.filter(t=>["REJECTED","CANCELLED"].includes(N(t.status))).length}),[D]),Y=o.useMemo(()=>z==="all"?D:D.filter(t=>{const s=N(t.status);return z==="confirmed"?["APPROVED","RELEASED","RETURNED"].includes(s):z==="pending"?s.includes("PENDING"):z==="rejected"?["REJECTED","CANCELLED"].includes(s):!0}),[D,z]),Ce=o.useMemo(()=>g.filter(t=>{const s=N(t.status);return s==="AVAILABLE"||s==="RETURNED"}),[g]),ee=o.useMemo(()=>g.filter(t=>r.selected_kit_ids.includes(t.id)),[g,r.selected_kit_ids]),S=(t,s)=>{M(a=>({...a,[t]:s}))},tt=t=>{M(s=>{const a=s.selected_kit_ids.includes(t);return{...s,selected_kit_ids:a?s.selected_kit_ids.filter(i=>i!==t):[...s.selected_kit_ids,t]}})},Ee=()=>{M({office:X,borrowing_organization:"",borrower_full_name:"",contact_number:"",equipment_type_required:"Starlink",days_required:"",reservation_start_date:"",reservation_end_date:"",expected_return_date:"",name_of_activity:"",place_of_activity:"",primary_purpose:"",selected_kit_ids:[]})},oe=()=>r.borrowing_organization.trim()?r.borrower_full_name.trim()?r.contact_number.trim()?r.days_required?Number(r.days_required)<=0?(m.fire({icon:"warning",title:"Invalid Days",text:"Days required must be greater than zero.",confirmButtonColor:"#2563eb"}),!1):r.reservation_start_date?r.reservation_end_date?r.reservation_end_date<r.reservation_start_date?(m.fire({icon:"warning",title:"Invalid Reservation",text:"The reservation end date cannot be before the start date.",confirmButtonColor:"#2563eb"}),!1):r.expected_return_date?r.name_of_activity.trim()?r.place_of_activity.trim()?r.selected_kit_ids.length===0?(m.fire({icon:"warning",title:"No Kit Selected",text:"Please select at least one available Starlink kit.",confirmButtonColor:"#2563eb"}),!1):!0:(m.fire({icon:"warning",title:"Place Required",text:"Please enter the place of activity.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Activity Required",text:"Please enter the name of activity.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Return Date Required",text:"Please select the expected return date.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"End Date Required",text:"Please select the reservation end date.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Start Date Required",text:"Please select the reservation start date.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Days Required",text:"Please enter the number of days required.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Contact Number Required",text:"Please enter the contact number.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Borrower Required",text:"Please enter the borrower full name.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Organization Required",text:"Please enter the borrowing organization.",confirmButtonColor:"#2563eb"}),!1),st=()=>{if(!oe())return;const t=Le(r,ee,R(Number(r.office))),s=window.open("","_blank","width=1000,height=900");if(!s){m.fire({icon:"error",title:"Popup Blocked",text:"Please allow popups for this site before printing.",confirmButtonColor:"#2563eb"});return}s.document.open(),s.document.write(t),s.document.close(),s.onload=()=>{setTimeout(()=>{s.focus(),s.print()},500)}},at=()=>{if(!oe())return;const t=Le(r,ee,R(Number(r.office))),s=new Blob([t],{type:"text/html;charset=utf-8"}),a=URL.createObjectURL(s),i=document.createElement("a"),x=r.borrower_full_name.trim().replace(/[^a-zA-Z0-9]+/g,"-").replace(/^-|-$/g,"")||"borrower";i.href=a,i.download=`starlink-borrow-request-${x}.html`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(a),m.fire({icon:"success",title:"Downloaded",text:"The Starlink Borrow Request form has been downloaded.",timer:1600,showConfirmButton:!1})},Re=()=>{const s=`starlink-inventory-${new Date().toISOString().split("T")[0]}.csv`,a=v=>`"${String(v??"").replace(/"/g,'""')}"`,i=[["Serial Number","Kit ID","Description","Office Name","Model Type","Status"].join(","),...Q.map(v=>[a(v.starlink_serial_number),a(v.kit_id),a(v.description),a(R(v.office_id)),a(v.model_type),a(v.status)].join(","))],x=new Blob([i.join(`
`)],{type:"text/csv;charset=utf-8;"}),d=URL.createObjectURL(x),p=document.createElement("a");p.href=d,p.download=s,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(d),m.fire({icon:"success",title:"CSV Exported",text:"The filtered Starlink inventory has been exported.",timer:1500,showConfirmButton:!1})},rt=async t=>{var s,a;if(t.preventDefault(),!w.starlink_serial_number.trim()){m.fire({icon:"warning",title:"Serial Number Required",text:"Please enter the Starlink serial number.",confirmButtonColor:"#2563eb"});return}if(!w.description.trim()){m.fire({icon:"warning",title:"Description Required",text:"Please enter a description.",confirmButtonColor:"#2563eb"});return}if(!w.office_id){m.fire({icon:"warning",title:"Office Required",text:"Please select an office.",confirmButtonColor:"#2563eb"});return}try{je(!0);const i={starlink_serial_number:w.starlink_serial_number.trim(),description:w.description.trim(),office_id:parseInt(w.office_id,10),model_type:w.model_type,status:w.status,kit_id:w.kit_id.trim()||null},d=(await L.post("starlink-kits/",i)).data;u(p=>[...p,d]),V(!1),q({starlink_serial_number:"",description:"",office_id:"",model_type:"Mini",status:"Available",kit_id:""}),m.fire({icon:"success",title:"Starlink Added",text:"Starlink kit has been added successfully.",confirmButtonColor:"#2563eb",timer:1800,showConfirmButton:!1})}catch(i){console.error("Failed to add Starlink kit:",i),m.fire({icon:"error",title:"Add Error",text:((a=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:a.detail)||"Failed to add Starlink kit. Please try again.",confirmButtonColor:"#2563eb"})}finally{je(!1)}},lt=async t=>{var i,x;const s=R(t.office_id);if((await m.fire({icon:"warning",title:"Delete Starlink Kit?",html:`
        <div style="text-align:left;margin:16px 0">
          <p><strong>Serial Number:</strong> ${t.starlink_serial_number||"N/A"}</p>

          <p style="margin-top:8px">
            <strong>Kit ID:</strong> ${t.kit_id||"N/A"}
          </p>

          <p style="margin-top:8px">
            <strong>Description:</strong> ${t.description||"N/A"}
          </p>

          <p style="margin-top:8px">
            <strong>Office:</strong> ${s}
          </p>

          <p style="margin-top:16px;color:#dc2626;font-weight:600">
            This action cannot be undone.
          </p>
        </div>
      `,showCancelButton:!0,confirmButtonText:"Delete",cancelButtonText:"Keep Kit",confirmButtonColor:"#dc2626",cancelButtonColor:"#64748b",reverseButtons:!0})).isConfirmed)try{ve(t.id),await L.delete(`starlink-kits/${t.id}/`),u(d=>d.filter(p=>p.id!==t.id)),M(d=>({...d,selected_kit_ids:d.selected_kit_ids.filter(p=>p!==t.id)})),m.fire({icon:"success",title:"Deleted",text:"Starlink kit has been deleted successfully.",timer:1600,showConfirmButton:!1})}catch(d){console.error("Failed to delete Starlink kit:",d),m.fire({icon:"error",title:"Delete Error",text:((x=(i=d==null?void 0:d.response)==null?void 0:i.data)==null?void 0:x.detail)||"Failed to delete Starlink kit. Please try again.",confirmButtonColor:"#2563eb"})}finally{ve(null)}},it=t=>{I(t),A(null)},de=(t,s)=>{I(t),A(s)},nt=async()=>{var t,s,a;if(!(!c||!b))try{Ne(!0);const i=await L.post(`starlink-requests/${c.id}/status/`,{status:b}),x=((t=i==null?void 0:i.data)==null?void 0:t.status)||b;K(v=>v.map(B=>B.id===c.id?{...B,status:x}:B));const d=new Set((c.starlink_kits||[]).map(v=>String(v))),p=b==="Approved"?"Released":c.status==="Approved"?"Available":null;p&&d.size>0&&u(v=>v.map(B=>d.has(String(B.id))?{...B,status:p}:B)),I(null),A(null),m.fire({icon:"success",title:`Request ${b}`,text:`The WiFi request has been ${b.toLowerCase()}.`,timer:1600,showConfirmButton:!1})}catch(i){console.error("Failed to update request:",i),m.fire({icon:"error",title:"Update Failed",text:((a=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:a.detail)||"The request status could not be updated.",confirmButtonColor:"#2563eb"})}finally{Ne(!1)}},Ae=[{key:"all",label:"Total Requests",value:Z.total,icon:ce,iconClass:"text-blue-600",bgClass:"bg-blue-50"},{key:"confirmed",label:"Confirmed",value:Z.confirmed,icon:ae,iconClass:"text-emerald-600",bgClass:"bg-emerald-50"},{key:"pending",label:"Pending",value:Z.pending,icon:ue,iconClass:"text-amber-600",bgClass:"bg-amber-50"},{key:"rejected",label:"Rejected / Cancelled",value:Z.rejected,icon:O,iconClass:"text-rose-600",bgClass:"bg-rose-50"}];return e.jsxs("div",{className:"min-h-screen bg-slate-50",children:[e.jsxs("main",{className:"mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8",children:[e.jsxs("section",{className:"mb-7",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-blue-600",children:"Equipment Overview"}),e.jsx("h2",{className:"mt-1 text-lg font-black text-slate-900",children:"Starlink Inventory"})]}),e.jsxs("button",{type:"button",onClick:Re,className:"hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-100 sm:flex",children:[e.jsx(xe,{size:14}),"Export CSV"]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 md:grid-cols-5",children:[e.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600",children:e.jsx(Ie,{size:17})}),e.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-slate-400",children:"Total"})]}),e.jsx("p",{className:"mt-4 text-2xl font-black text-slate-900",children:F.total}),e.jsx("p",{className:"mt-1 text-[10px] font-semibold text-slate-500",children:"All equipment"})]}),e.jsxs("div",{className:"rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600",children:e.jsx(ae,{size:17})}),e.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-emerald-600",children:"Ready"})]}),e.jsx("p",{className:"mt-4 text-2xl font-black text-emerald-700",children:F.available}),e.jsx("p",{className:"mt-1 text-[10px] font-semibold text-emerald-700/70",children:"Available"})]}),e.jsxs("div",{className:"rounded-2xl border border-blue-100 bg-blue-50/50 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600",children:e.jsx($,{size:17})}),e.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-blue-600",children:"Active"})]}),e.jsx("p",{className:"mt-4 text-2xl font-black text-blue-700",children:F.released}),e.jsx("p",{className:"mt-1 text-[10px] font-semibold text-blue-700/70",children:"Released"})]}),e.jsxs("div",{className:"rounded-2xl border border-amber-100 bg-amber-50/50 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-600",children:e.jsx(Te,{size:17})}),e.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-amber-600",children:"Reserved"})]}),e.jsx("p",{className:"mt-4 text-2xl font-black text-amber-700",children:F.reserved}),e.jsx("p",{className:"mt-1 text-[10px] font-semibold text-amber-700/70",children:"Reserved"})]}),e.jsxs("div",{className:"rounded-2xl border border-violet-100 bg-violet-50/50 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-600",children:e.jsx(qe,{size:17})}),e.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-violet-600",children:"Service"})]}),e.jsx("p",{className:"mt-4 text-2xl font-black text-violet-700",children:F.maintenance}),e.jsx("p",{className:"mt-1 text-[10px] font-semibold text-violet-700/70",children:"Maintenance"})]})]})]}),e.jsxs("section",{className:"mb-8",children:[e.jsxs("div",{className:"mb-4 flex items-end justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-blue-600",children:"Request Center"}),e.jsx("h2",{className:"mt-1 text-lg font-black text-slate-900",children:"WiFi Borrow Requests"})]}),e.jsxs("span",{className:"text-xs font-semibold text-slate-400",children:[Y.length," displayed"]})]}),e.jsx("div",{className:"grid grid-cols-2 gap-3 lg:grid-cols-4",children:Ae.map(t=>{const s=t.icon,a=z===t.key;return e.jsxs("button",{type:"button",onClick:()=>ye(t.key),className:`group rounded-2xl border p-4 text-left transition ${a?"border-blue-300 bg-blue-50 shadow-sm ring-2 ring-blue-100":"border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:`flex h-10 w-10 items-center justify-center rounded-xl ${t.bgClass} ${t.iconClass}`,children:e.jsx(s,{size:18})}),e.jsx(gt,{size:15,className:`rotate-[-90deg] transition ${a?"text-blue-500":"text-slate-300 group-hover:text-blue-400"}`})]}),e.jsx("p",{className:"mt-4 text-2xl font-black text-slate-900",children:t.value}),e.jsx("p",{className:"mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400",children:t.label})]},t.key)})}),e.jsxs("div",{className:"mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",children:[e.jsxs("div",{className:"flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-black text-slate-900",children:((De=Ae.find(t=>t.key===z))==null?void 0:De.label)||"WiFi Requests"}),e.jsx("p",{className:"mt-0.5 text-xs text-slate-500",children:"Review and process borrowing requests."})]}),e.jsx("button",{type:"button",onClick:()=>ye("all"),className:"w-fit text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-800",children:"Show All"})]}),Y.length===0?e.jsxs("div",{className:"px-6 py-10 text-center",children:[e.jsx(ce,{size:34,className:"mx-auto text-slate-200"}),e.jsx("p",{className:"mt-3 text-sm font-bold text-slate-500",children:"No WiFi requests found"}),e.jsx("p",{className:"mt-1 text-xs text-slate-400",children:"There are no requests in this category."})]}):e.jsx("div",{className:"divide-y divide-slate-100",children:Y.slice(0,8).map(t=>{const s=N(t.status),a=["REJECTED","CANCELLED","RETURNED"].includes(s);return e.jsxs("div",{className:"group flex flex-col gap-4 px-5 py-4 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between",children:[e.jsx("button",{type:"button",onClick:()=>it(t),className:"min-w-0 flex-1 text-left",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600",children:e.jsx(Be,{size:17})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-black text-slate-900",children:t.borrower_full_name||t.borrowing_organization||"WiFi Request"}),e.jsxs("div",{className:"mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-medium text-slate-400",children:[e.jsx("span",{children:t.request_number||`Request #${t.id}`}),t.office_name&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsx("span",{children:t.office_name})]}),t.created_at&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsx("span",{children:C(t.created_at)})]})]})]})]})}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx($e,{status:t.status}),!a&&e.jsxs(e.Fragment,{children:[s!=="APPROVED"&&e.jsx("button",{type:"button",title:"Approve",onClick:()=>de(t,"Approved"),className:"flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white transition hover:bg-emerald-700",children:e.jsx(te,{size:16})}),s!=="REJECTED"&&e.jsx("button",{type:"button",title:"Reject",onClick:()=>de(t,"Rejected"),className:"flex h-9 w-9 items-center justify-center rounded-xl bg-rose-600 text-white transition hover:bg-rose-700",children:e.jsx(P,{size:16})}),e.jsx("button",{type:"button",title:"Cancel",onClick:()=>de(t,"Cancelled"),className:"flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-100",children:e.jsx(O,{size:16})})]})]})]},t.id)})}),Y.length>8&&e.jsx("div",{className:"border-t border-slate-200 bg-slate-50 px-5 py-3 text-center",children:e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-widest text-slate-400",children:"Showing first 8 requests"})})]})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-blue-600",children:"Equipment Registry"}),e.jsx("h2",{className:"mt-1 text-lg font-black text-slate-900",children:"Starlink Kits"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("div",{className:"relative min-w-[240px]",children:[e.jsx(dt,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),e.jsx("input",{value:ie,onChange:t=>Ge(t.target.value),placeholder:"Search serial, kit ID, office...",className:`${h} pl-9`})]}),e.jsxs("select",{value:W,onChange:t=>He(t.target.value),className:"rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 outline-none focus:border-blue-500",children:[e.jsx("option",{value:"all",children:"All Models"}),Ye.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsxs("select",{value:G,onChange:t=>Je(t.target.value),className:"rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 outline-none focus:border-blue-500",children:[e.jsx("option",{value:"all",children:"All Status"}),et.map(t=>e.jsx("option",{value:t,children:Me(t)},t))]}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{type:"button",onClick:()=>ne(t=>!t),className:"flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50",children:[e.jsx(ct,{size:14}),"Sort"]}),Qe&&e.jsxs("div",{className:"absolute right-0 z-30 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl",children:[e.jsx("button",{type:"button",onClick:()=>{_e("description-asc"),ne(!1)},className:`w-full px-4 py-3 text-left text-xs font-bold ${H==="description-asc"?"bg-blue-50 text-blue-700":"text-slate-600 hover:bg-slate-50"}`,children:"Description A-Z"}),e.jsx("button",{type:"button",onClick:()=>{_e("description-desc"),ne(!1)},className:`w-full px-4 py-3 text-left text-xs font-bold ${H==="description-desc"?"bg-blue-50 text-blue-700":"text-slate-600 hover:bg-slate-50"}`,children:"Description Z-A"})]})]}),e.jsxs("button",{type:"button",onClick:()=>{Ee(),le(!0)},className:`${y} bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700`,children:[e.jsx(pe,{size:17}),"Create Borrow Request"]}),e.jsxs("button",{type:"button",onClick:()=>V(!0),className:`${y} border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700`,children:[e.jsx(me,{size:17}),"Add Starlink"]})]})]}),Ke?e.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white py-20 text-center shadow-sm",children:[e.jsx(se,{size:38,className:"mx-auto animate-spin text-blue-600"}),e.jsx("p",{className:"mt-4 text-sm font-bold text-slate-700",children:"Loading Starlink inventory..."}),e.jsx("p",{className:"mt-1 text-xs text-slate-400",children:"Please wait while the equipment data is loaded."})]}):he?e.jsx("div",{className:"rounded-2xl border border-rose-200 bg-rose-50 p-6",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(xt,{size:22,className:"mt-0.5 shrink-0 text-rose-600"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-black text-rose-900",children:"Unable to load inventory"}),e.jsx("p",{className:"mt-1 text-sm text-rose-700",children:he}),e.jsx("button",{type:"button",onClick:ke,className:"mt-4 rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700",children:"Try Again"})]})]})}):Q.length===0?e.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white py-16 text-center shadow-sm",children:[e.jsx("div",{className:"mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400",children:e.jsx($,{size:25})}),e.jsx("p",{className:"mt-4 text-sm font-black text-slate-600",children:"No Starlink kits found"}),e.jsx("p",{className:"mt-1 text-xs text-slate-400",children:"Try changing your search or filters."})]}):e.jsxs("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full min-w-[950px]",children:[e.jsx("thead",{className:"border-b border-slate-200 bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Equipment"}),e.jsx("th",{className:"px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Serial Number"}),e.jsx("th",{className:"px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Office"}),e.jsx("th",{className:"px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Model"}),e.jsx("th",{className:"px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Status"}),e.jsx("th",{className:"px-5 py-3 text-right text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Action"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:Q.map(t=>e.jsxs("tr",{className:"group transition hover:bg-slate-50",children:[e.jsx("td",{className:"px-5 py-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600",children:e.jsx($,{size:17})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-black text-slate-800",children:t.kit_id||t.name||`Kit #${t.id}`}),e.jsx("p",{className:"mt-0.5 max-w-[260px] truncate text-xs text-slate-400",children:t.description||"Starlink Equipment"})]})]})}),e.jsx("td",{className:"px-5 py-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(mt,{size:14,className:"text-slate-300"}),e.jsx("span",{className:"font-mono text-xs font-bold text-slate-600",children:t.starlink_serial_number||"N/A"})]})}),e.jsx("td",{className:"px-5 py-4",children:e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-slate-600",children:[e.jsx(Pe,{size:14,className:"text-slate-300"}),R(t.office_id)]})}),e.jsx("td",{className:"px-5 py-4",children:e.jsx("span",{className:"rounded-lg bg-slate-100 px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-slate-600",children:t.model_type||"Mini"})}),e.jsx("td",{className:"px-5 py-4",children:e.jsx(Nt,{status:t.status})}),e.jsx("td",{className:"px-5 py-4 text-right",children:e.jsx("button",{type:"button",disabled:ge===t.id,onClick:()=>lt(t),className:"inline-flex h-9 w-9 items-center justify-center rounded-xl border border-rose-100 bg-rose-50 text-rose-500 transition hover:bg-rose-100 hover:text-rose-700 disabled:opacity-50",title:"Delete kit",children:ge===t.id?e.jsx(se,{size:15,className:"animate-spin"}):e.jsx(pt,{size:15})})})]},t.id))})]})}),e.jsxs("div",{className:"flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsx("div",{children:e.jsxs("p",{className:"text-xs font-bold text-slate-600",children:["Showing"," ",e.jsx("span",{className:"font-black text-slate-900",children:Q.length})," ","of"," ",e.jsx("span",{className:"font-black text-slate-900",children:n.length})," ","Starlink kits"]})}),e.jsxs("button",{type:"button",onClick:Re,className:"flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100",children:[e.jsx(xe,{size:14}),"Export Inventory CSV"]})]})]})]})]}),Ue&&e.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm",children:e.jsxs("div",{className:"w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 px-6 py-5",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600",children:e.jsx(me,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-black text-slate-900",children:"Add Starlink Kit"}),e.jsx("p",{className:"text-xs text-slate-500",children:"Register a new Starlink equipment unit."})]})]}),e.jsx("button",{type:"button",onClick:()=>V(!1),className:"flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700",children:e.jsx(P,{size:18})})]}),e.jsxs("form",{onSubmit:rt,className:"space-y-5 p-6",children:[e.jsxs("div",{className:"grid gap-5 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Serial Number *"}),e.jsx("input",{value:w.starlink_serial_number,onChange:t=>q(s=>({...s,starlink_serial_number:t.target.value})),placeholder:"Enter Starlink serial number",className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Kit ID"}),e.jsx("input",{value:w.kit_id,onChange:t=>q(s=>({...s,kit_id:t.target.value})),placeholder:"e.g. Camiguin Starlink 01",className:h})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:f,children:"Description *"}),e.jsx("input",{value:w.description,onChange:t=>q(s=>({...s,description:t.target.value})),placeholder:"Describe the equipment",className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Office *"}),e.jsxs("select",{value:w.office_id,onChange:t=>q(s=>({...s,office_id:t.target.value})),className:h,children:[e.jsx("option",{value:"",children:"Select Office"}),Ze.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Model Type"}),e.jsxs("select",{value:w.model_type,onChange:t=>q(s=>({...s,model_type:t.target.value})),className:h,children:[e.jsx("option",{value:"Mini",children:"Mini"}),e.jsx("option",{value:"Standard",children:"Standard"}),e.jsx("option",{value:"Gen 2",children:"Gen 2"}),e.jsx("option",{value:"Gen 3",children:"Gen 3"}),e.jsx("option",{value:"High Performance",children:"High Performance"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Initial Status"}),e.jsxs("select",{value:w.status,onChange:t=>q(s=>({...s,status:t.target.value})),className:h,children:[e.jsx("option",{value:"Available",children:"Available"}),e.jsx("option",{value:"Reserved",children:"Reserved"}),e.jsx("option",{value:"Maintenance",children:"Maintenance"}),e.jsx("option",{value:"Inactive",children:"Inactive"})]})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 border-t border-slate-200 pt-5",children:[e.jsx("button",{type:"button",onClick:()=>V(!1),className:`${y} border border-slate-200 bg-white text-slate-600 hover:bg-slate-50`,children:"Cancel"}),e.jsxs("button",{type:"submit",disabled:re,className:`${y} bg-blue-600 text-white hover:bg-blue-700`,children:[re?e.jsx(se,{size:16,className:"animate-spin"}):e.jsx(me,{size:16}),re?"Adding...":"Add Starlink Kit"]})]})]})]})}),Ve&&e.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm",children:e.jsxs("div",{className:"flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-7",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20",children:e.jsx(pe,{size:20})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.2em] text-blue-600",children:"New Request"}),e.jsx("h2",{className:"text-lg font-black text-slate-900",children:"Starlink Equipment Borrow Request"}),e.jsx("p",{className:"text-xs text-slate-500",children:"Submit borrow details to generate your slip and submit your request for approval."})]})]}),e.jsx("button",{type:"button",onClick:()=>le(!1),className:"flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700",children:e.jsx(P,{size:19})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto bg-slate-50 p-5 sm:p-7",children:e.jsxs("div",{className:"mx-auto max-w-5xl space-y-5",children:[e.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600",children:e.jsx(Be,{size:17})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-black text-slate-900",children:"Borrower Information"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Basic information about the borrower."})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Office"}),e.jsxs("div",{className:"flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700",children:[e.jsx(Pe,{size:15,className:"text-blue-500"}),R(Number(r.office))]}),e.jsx("p",{className:"mt-1 text-[10px] text-slate-400",children:"Office is automatically based on the logged-in administrator."})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Borrowing Organization *"}),e.jsx("input",{value:r.borrowing_organization,onChange:t=>S("borrowing_organization",t.target.value),placeholder:"Office / Division / Organization",className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Borrower Full Name *"}),e.jsx("input",{value:r.borrower_full_name,onChange:t=>S("borrower_full_name",t.target.value),placeholder:"Enter full name",className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Contact Number *"}),e.jsxs("div",{className:"relative",children:[e.jsx(ut,{size:15,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),e.jsx("input",{value:r.contact_number,onChange:t=>S("contact_number",t.target.value),placeholder:"09XXXXXXXXX",className:`${h} pl-9`})]})]})]})]}),e.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600",children:e.jsx($,{size:17})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-black text-slate-900",children:"Equipment Details"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select the equipment and available Starlink kit."})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Equipment Type Required *"}),e.jsxs("select",{value:r.equipment_type_required,onChange:t=>S("equipment_type_required",t.target.value),className:h,children:[e.jsx("option",{value:"Starlink",children:"Starlink"}),e.jsx("option",{value:"Starlink Kit Only",children:"Starlink Kit Only"}),e.jsx("option",{value:"Starlink Kit with Router & TP-Link AP",children:"Starlink Kit with Router & TP-Link AP"}),e.jsx("option",{value:"Starlink Kit with TP-Link AP",children:"Starlink Kit with TP-Link AP"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Days Required *"}),e.jsx("input",{type:"number",min:"1",value:r.days_required,onChange:t=>S("days_required",t.target.value),placeholder:"Number of days",className:h})]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-[11px] font-black uppercase tracking-widest text-slate-600",children:"Select Starlink Kits *"}),e.jsx("p",{className:"mt-1 text-[10px] text-slate-400",children:"Only Available or Returned kits can be selected."})]}),e.jsxs("span",{className:"rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase text-blue-600",children:[r.selected_kit_ids.length," ","selected"]})]}),Ce.length===0?e.jsxs("div",{className:"rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center",children:[e.jsx($,{size:27,className:"mx-auto text-amber-500"}),e.jsx("p",{className:"mt-3 text-sm font-black text-amber-800",children:"No available Starlink kits"}),e.jsx("p",{className:"mt-1 text-xs text-amber-700",children:"Add or return a kit before creating a borrow request."})]}):e.jsx("div",{className:"grid max-h-72 gap-3 overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 p-3 md:grid-cols-2",children:Ce.map(t=>{const s=r.selected_kit_ids.includes(t.id);return e.jsx("button",{type:"button",onClick:()=>tt(t.id),className:`rounded-xl border p-4 text-left transition ${s?"border-blue-400 bg-blue-50 shadow-sm ring-2 ring-blue-100":"border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40"}`,children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-black text-slate-900",children:t.kit_id||t.starlink_serial_number||`Kit #${t.id}`}),e.jsx("p",{className:"mt-1 truncate text-xs text-slate-500",children:t.description||"Starlink Equipment"}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("span",{className:"rounded-md bg-slate-100 px-2 py-1 text-[9px] font-black uppercase tracking-wide text-slate-500",children:t.model_type||"Mini"}),e.jsx("span",{className:"text-[9px] font-semibold text-slate-400",children:R(t.office_id)})]})]}),e.jsx("div",{className:`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border ${s?"border-blue-600 bg-blue-600 text-white":"border-slate-300 bg-white text-transparent"}`,children:e.jsx(te,{size:13})})]})},t.id)})})]})]}),e.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600",children:e.jsx(Te,{size:17})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-black text-slate-900",children:"Reservation Details"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Set the requested borrowing period."})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Reservation Start *"}),e.jsx("input",{type:"date",value:r.reservation_start_date,onChange:t=>S("reservation_start_date",t.target.value),className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Reservation End *"}),e.jsx("input",{type:"date",min:r.reservation_start_date||void 0,value:r.reservation_end_date,onChange:t=>S("reservation_end_date",t.target.value),className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Expected Return *"}),e.jsx("input",{type:"date",min:r.reservation_end_date||r.reservation_start_date||void 0,value:r.expected_return_date,onChange:t=>S("expected_return_date",t.target.value),className:h})]})]})]}),e.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600",children:e.jsx(qe,{size:17})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-black text-slate-900",children:"Activity Information"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Tell us where and why the equipment will be used."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Name of Activity *"}),e.jsx("input",{value:r.name_of_activity,onChange:t=>S("name_of_activity",t.target.value),placeholder:"Enter activity name",className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Place of Activity *"}),e.jsxs("div",{className:"relative",children:[e.jsx(bt,{size:15,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),e.jsx("input",{value:r.place_of_activity,onChange:t=>S("place_of_activity",t.target.value),placeholder:"Enter activity location",className:`${h} pl-9`})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Primary Purpose"}),e.jsx("textarea",{rows:4,value:r.primary_purpose,onChange:t=>S("primary_purpose",t.target.value),placeholder:"Describe the primary purpose of the Starlink equipment...",className:`${h} resize-none`})]})]})]})]})}),e.jsxs("div",{className:"flex flex-col gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7",children:[e.jsx("button",{type:"button",onClick:Ee,className:`${y} border border-slate-200 bg-white text-slate-600 hover:bg-slate-50`,children:"Clear Form"}),e.jsxs("div",{className:"flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>le(!1),className:`${y} border border-slate-200 bg-white text-slate-600 hover:bg-slate-50`,children:"Close"}),e.jsxs("button",{type:"button",onClick:()=>{oe()&&we(!0)},className:`${y} bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700`,children:[e.jsx(pe,{size:16}),"Preview Form"]})]})]})]})}),Xe&&e.jsx("div",{className:"fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm",children:e.jsxs("div",{className:"flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-slate-100 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col gap-3 border-b border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.2em] text-blue-600",children:"Official Document Preview"}),e.jsx("h2",{className:"text-lg font-black text-slate-900",children:"Starlink Equipment Borrow Request"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("button",{type:"button",onClick:at,className:`${y} border border-slate-200 bg-white text-slate-700 hover:bg-slate-50`,children:[e.jsx(xe,{size:15}),"Download HTML"]}),e.jsxs("button",{type:"button",onClick:st,className:`${y} bg-blue-600 text-white hover:bg-blue-700`,children:[e.jsx(ht,{size:15}),"Print / Save PDF"]}),e.jsx("button",{type:"button",onClick:()=>we(!1),className:"flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-100",children:e.jsx(P,{size:17})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-8",children:e.jsx("div",{className:"mx-auto w-full max-w-[794px] bg-white shadow-xl",children:e.jsxs("div",{className:"p-8 sm:p-[55px]",children:[e.jsxs("div",{className:"flex items-center justify-between border-b-2 border-blue-700 pb-4",children:[e.jsx("div",{className:"flex h-[60px] items-center",children:e.jsx("img",{src:"/dic.png",alt:"DICT Logo",className:"max-h-[55px] max-w-[160px] object-contain"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-[8px] font-semibold uppercase sm:text-[10px]",children:"Republic of the Philippines"}),e.jsx("p",{className:"mt-1 text-[9px] font-bold uppercase sm:text-[11px]",children:"Department of Information Communications Technology"}),e.jsx("p",{className:"mt-1 text-[8px] font-semibold uppercase sm:text-[10px]",children:"Region Office X"})]}),e.jsx("div",{className:"flex h-[60px] items-center",children:e.jsx("img",{src:"/bp.png",alt:"Bagong Pilipinas Logo",className:"max-h-[55px] max-w-[55px] object-contain"})})]}),e.jsxs("div",{className:"py-6 text-center",children:[e.jsx("h1",{className:"text-[15px] font-black tracking-wide text-blue-700 sm:text-[18px]",children:"STARLINK EQUIPMENT BORROW REQUEST"}),e.jsxs("p",{className:"mt-1 text-[8px] text-slate-500 sm:text-[10px]",children:["Submitted on"," ",new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"mb-3 border-b border-blue-700 pb-1.5 text-[10px] font-black uppercase tracking-wider text-blue-700 sm:text-[11px]",children:"Borrower Information"}),e.jsxs("div",{className:"grid gap-x-6 gap-y-4 sm:grid-cols-2",children:[e.jsx(_,{label:"Office",value:R(Number(r.office))}),e.jsx(_,{label:"Borrowing Organization",value:r.borrowing_organization}),e.jsx(_,{label:"Borrower Full Name",value:r.borrower_full_name}),e.jsx(_,{label:"Contact Number",value:r.contact_number})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"mb-3 border-b border-blue-700 pb-1.5 text-[10px] font-black uppercase tracking-wider text-blue-700 sm:text-[11px]",children:"Equipment Details"}),e.jsxs("div",{className:"grid gap-x-6 gap-y-4 sm:grid-cols-2",children:[e.jsx(_,{label:"Equipment Type Required",value:r.equipment_type_required}),e.jsx(_,{label:"Days Required",value:r.days_required})]}),e.jsx("p",{className:"mb-2 mt-5 text-[9px] font-bold uppercase tracking-wide text-slate-700",children:"Selected Starlink Kits"}),e.jsx("div",{className:"overflow-hidden border border-slate-400",children:e.jsxs("table",{className:"w-full border-collapse text-[8px] sm:text-[9px]",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-100",children:[e.jsx("th",{className:"border-b border-slate-400 px-2 py-2 text-left",children:"Kit ID"}),e.jsx("th",{className:"border-b border-slate-400 px-2 py-2 text-left",children:"Serial Number"}),e.jsx("th",{className:"border-b border-slate-400 px-2 py-2 text-left",children:"Model"})]})}),e.jsx("tbody",{children:ee.length>0?ee.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"border-b border-slate-300 px-2 py-2",children:t.kit_id||`Kit #${t.id}`}),e.jsx("td",{className:"border-b border-slate-300 px-2 py-2",children:t.starlink_serial_number}),e.jsx("td",{className:"border-b border-slate-300 px-2 py-2",children:t.model_type||"Mini"})]},t.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:3,className:"px-2 py-3 text-center",children:"No kits selected"})})})]})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"mb-3 border-b border-blue-700 pb-1.5 text-[10px] font-black uppercase tracking-wider text-blue-700 sm:text-[11px]",children:"Reservation Details"}),e.jsxs("div",{className:"grid gap-x-6 gap-y-4 sm:grid-cols-3",children:[e.jsx(_,{label:"Reservation Start",value:C(r.reservation_start_date)}),e.jsx(_,{label:"Reservation End",value:C(r.reservation_end_date)}),e.jsx(_,{label:"Expected Return",value:C(r.expected_return_date)})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"mb-3 border-b border-blue-700 pb-1.5 text-[10px] font-black uppercase tracking-wider text-blue-700 sm:text-[11px]",children:"Activity Information"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(_,{label:"Name of Activity",value:r.name_of_activity}),e.jsx(_,{label:"Place of Activity",value:r.place_of_activity}),r.primary_purpose.trim()&&e.jsx(_,{label:"Primary Purpose",value:r.primary_purpose})]})]}),e.jsxs("div",{className:"mt-12 grid gap-10 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"h-10 border-b border-slate-500"}),e.jsx("p",{className:"mt-2 text-center text-[9px] font-bold uppercase tracking-wide text-slate-600",children:"Borrower's Signature"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"h-10 border-b border-slate-500"}),e.jsx("p",{className:"mt-2 text-center text-[9px] font-bold uppercase tracking-wide text-slate-600",children:"Authorized Representative"})]})]})]})})})]})}),c&&e.jsx("div",{className:"fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm",children:e.jsxs("div",{className:"w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 px-6 py-5",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600",children:e.jsx(ce,{size:19})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.2em] text-blue-600",children:"Request Review"}),e.jsx("h2",{className:"text-lg font-black text-slate-900",children:c.request_number||`Request #${c.id}`})]})]}),e.jsx("button",{type:"button",onClick:()=>{I(null),A(null)},className:"flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700",children:e.jsx(P,{size:18})})]}),e.jsxs("div",{className:"max-h-[70vh] overflow-y-auto p-6",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-slate-400",children:"Current Status"}),e.jsx("div",{className:"mt-2",children:e.jsx($e,{status:c.status})})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-slate-400",children:"Created"}),e.jsx("p",{className:"mt-2 text-xs font-semibold text-slate-700",children:c.created_at?C(c.created_at):"N/A"})]})]}),e.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:[["Borrower",c.borrower_full_name],["Organization",c.borrowing_organization],["Contact Number",c.contact_number],["Equipment",c.equipment_type_required],["Starlink Model",c.starlink_model],["Days Required",(ze=c.days_required)==null?void 0:ze.toString()],["Start Date",c.reservation_start_date?C(c.reservation_start_date):void 0],["End Date",c.reservation_end_date?C(c.reservation_end_date):void 0],["Expected Return",c.expected_return_date?C(c.expected_return_date):void 0],["Activity",c.name_of_activity],["Location",c.place_of_activity]].map(([t,s])=>e.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3",children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400",children:t}),e.jsx("p",{className:"mt-1 text-sm font-bold text-slate-800",children:s||"Not provided"})]},t))}),e.jsxs("div",{className:"mt-3 rounded-xl border border-slate-200 bg-white px-4 py-4",children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400",children:"Purpose"}),e.jsx("p",{className:"mt-2 text-sm leading-relaxed text-slate-700",children:c.primary_purpose||"No purpose provided."})]}),c.starlink_kits&&c.starlink_kits.length>0&&e.jsxs("div",{className:"mt-3 rounded-xl border border-slate-200 bg-white px-4 py-4",children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400",children:"Assigned Starlink Kits"}),e.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:c.starlink_kits.map(t=>{const s=n.find(a=>String(a.id)===String(t));return e.jsx("span",{className:"rounded-lg bg-blue-50 px-3 py-2 text-[10px] font-black text-blue-700",children:(s==null?void 0:s.kit_id)||(s==null?void 0:s.starlink_serial_number)||`Kit #${t}`},String(t))})})]}),b&&e.jsx("div",{className:"mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(ft,{size:19,className:b==="Approved"?"text-emerald-600":b==="Rejected"?"text-rose-600":"text-slate-600"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-black text-slate-800",children:["Confirm"," ",b.toLowerCase()," ","this request?"]}),e.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-500",children:b==="Approved"?"This will approve the request and mark its selected Starlink kits as Released.":b==="Rejected"?"This will reject the borrowing request.":"This will cancel the borrowing request."})]})]})})]}),e.jsxs("div",{className:"flex flex-wrap justify-end gap-2 border-t border-slate-200 bg-slate-50 px-6 py-4",children:[e.jsx("button",{type:"button",disabled:U,onClick:()=>{I(null),A(null)},className:`${y} border border-slate-200 bg-white text-slate-600 hover:bg-slate-100`,children:"Close"}),b?e.jsxs("button",{type:"button",disabled:U,onClick:nt,className:`${y} ${b==="Approved"?"bg-emerald-600 text-white hover:bg-emerald-700":b==="Rejected"?"bg-rose-600 text-white hover:bg-rose-700":"bg-slate-700 text-white hover:bg-slate-800"}`,children:[U?e.jsx(se,{size:16,className:"animate-spin"}):b==="Approved"?e.jsx(te,{size:16}):b==="Rejected"?e.jsx(P,{size:16}):e.jsx(O,{size:16}),U?"Updating...":`Confirm ${b}`]}):!["REJECTED","CANCELLED","RETURNED"].includes(N(c.status))&&e.jsxs(e.Fragment,{children:[N(c.status)!=="APPROVED"&&e.jsxs("button",{type:"button",onClick:()=>A("Approved"),className:`${y} bg-emerald-600 text-white hover:bg-emerald-700`,children:[e.jsx(te,{size:16}),"Approve"]}),e.jsxs("button",{type:"button",onClick:()=>A("Rejected"),className:`${y} bg-rose-600 text-white hover:bg-rose-700`,children:[e.jsx(P,{size:16}),"Reject"]}),e.jsxs("button",{type:"button",onClick:()=>A("Cancelled"),className:`${y} border border-slate-300 bg-white text-slate-700 hover:bg-slate-100`,children:[e.jsx(O,{size:16}),"Cancel"]})]})]})]})})]})}export{Ut as default};

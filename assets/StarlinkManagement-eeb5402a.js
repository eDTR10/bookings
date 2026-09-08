import{c as ce,r as o,j as e,h as Q,a as P,S as m}from"./index-bd4a7264.js";import{C as ie}from"./clipboard-list-7f4be7c1.js";import{C as Y}from"./check-circle-2-b1e8912d.js";import{C as xe,D as ne}from"./download-825c3836.js";import{X as L}from"./x-circle-4ce374d1.js";import{P as Te}from"./package-2ed946fb.js";import{W as T}from"./wifi-95efff1e.js";import{A as Ae}from"./activity-f80e241c.js";import{C as at}from"./chevron-down-8c467ef3.js";import{U as De}from"./user-cbfef0ff.js";import{X as z}from"./x-b6bbce7c.js";import{S as rt}from"./search-432c02e8.js";import{A as lt}from"./arrow-up-down-bed3df1f.js";import{F as oe}from"./file-text-0e94f72e.js";import{P as de}from"./plus-30d63de1.js";import{L as Z}from"./loader-2-40879a16.js";import{B as ze}from"./building-2-64d9a1f2.js";import{T as it}from"./trash-2-7fb667de.js";import{P as nt}from"./phone-90ff533d.js";import{M as ot}from"./map-pin-16a74c4a.js";import{P as dt}from"./printer-8201fe4e.js";import{S as ct}from"./shield-check-8c3b5259.js";const xt=ce("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),qe=ce("CalendarDays",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]),mt=ce("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]),v=a=>String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),k=a=>{if(!a)return"—";const n=new Date(`${a}T00:00:00`);return Number.isNaN(n.getTime())?a:n.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})};function Be(a,n,p){const S=n.length>0?n.map(B=>`
              <tr>
                <td>${v(B.kit_id||B.starlink_serial_number||"—")}</td>
                <td>${v(B.description||"Starlink Equipment")}</td>
                <td>${v(B.model_type||"Mini")}</td>
              </tr>
            `).join(""):`
          <tr>
            <td colspan="3" style="text-align:center;padding:8px;">
              No kits selected
            </td>
          </tr>
        `,q=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return`
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
      border-collapse: collapse;
      margin-top: 5px;
      font-size: 9.5px;
    }

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
      <p>Submitted on ${v(q)}</p>
    </div>

    <div class="form-section">
      <div class="section-title">Borrower Information</div>

     

        <div class="form-group">
          <span class="form-label">Borrowing Organization</span>
          <div class="form-value">${v(a.borrowing_organization)}</div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <span class="form-label">Borrower Full Name</span>
          <div class="form-value">${v(a.borrower_full_name)}</div>
        </div>

        <div class="form-group">
          <span class="form-label">Contact Number</span>
          <div class="form-value">${v(a.contact_number)}</div>
        </div>
      </div>
    </div>

    <div class="form-section">
      <div class="section-title">Equipment Details</div>

      <div class="form-row">
        <div class="form-group">
          <span class="form-label">Equipment Type Required</span>
          <div class="form-value">${v(a.equipment_type_required)}</div>
        </div>

        <div class="form-group">
          <span class="form-label">Days Required</span>
          <div class="form-value">${v(a.days_required)}</div>
        </div>
      </div>

      <div class="table-label">Selected Starlink Kits</div>

      <table class="table">
        <thead>
          <tr>
            <th>Kit ID</th>
            <th>Description</th>
            <th>Model Type</th>
          </tr>
        </thead>
        <tbody>
          ${S}
        </tbody>
      </table>
    </div>

    <div class="form-section">
      <div class="section-title">Reservation Details</div>

      <div class="form-row">
        <div class="form-group">
          <span class="form-label">Reservation Start Date</span>
          <div class="form-value">${v(k(a.reservation_start_date))}</div>
        </div>

        <div class="form-group">
          <span class="form-label">Reservation End Date</span>
          <div class="form-value">${v(k(a.reservation_end_date))}</div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <span class="form-label">Expected Return Date</span>
          <div class="form-value">${v(k(a.expected_return_date))}</div>
        </div>
      </div>
    </div>

    <div class="form-section">
      <div class="section-title">Activity Information</div>

      <div class="form-row full">
        <div class="form-group">
          <span class="form-label">Name of Activity</span>
          <div class="form-value">${v(a.name_of_activity)}</div>
        </div>
      </div>

      <div class="form-row full">
        <div class="form-group">
          <span class="form-label">Place of Activity</span>
          <div class="form-value">${v(a.place_of_activity)}</div>
        </div>
      </div>

      ${a.primary_purpose.trim()?`
            <div class="form-row full">
              <div class="form-group">
                <span class="form-label">Primary Purpose</span>
                <div class="form-value">${v(a.primary_purpose)}</div>
              </div>
            </div>
          `:""}
    </div>

    <div class="signature-section">
      <div class="signature-block">
        <div class="signature-space"></div>
        <div class="signature-line">Borrower Signature</div>
        <div class="signature-name">${v(a.borrower_full_name)}</div>
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
  `}const h="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10",f="mb-2 block text-[11px] font-bold uppercase tracking-[0.08em] text-slate-500",w="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-50";function j(a){return(a||"").trim().toUpperCase()}function Le(a){return a?a.toLowerCase()==="released"?"Borrowed / Not Available":a:"Unknown"}function pt(a){const n=j(a);return n==="APPROVED"||n==="RELEASED"||n==="RETURNED"?"border-emerald-200 bg-emerald-50 text-emerald-700":n==="REJECTED"||n==="CANCELLED"||n==="OVERDUE"?"border-rose-200 bg-rose-50 text-rose-700":"border-amber-200 bg-amber-50 text-amber-700"}function ut(a){const n=j(a);return n==="AVAILABLE"?"border-emerald-200 bg-emerald-50 text-emerald-700":n==="RELEASED"?"border-blue-200 bg-blue-50 text-blue-700":n==="RESERVED"?"border-amber-200 bg-amber-50 text-amber-700":n==="MAINTENANCE"||n==="INACTIVE"?"border-violet-200 bg-violet-50 text-violet-700":n==="RETURNED"?"border-slate-200 bg-slate-50 text-slate-700":n==="OVERDUE"?"border-rose-200 bg-rose-50 text-rose-700":"border-slate-200 bg-slate-50 text-slate-600"}function bt({status:a,small:n=!1}){const p=j(a);let S=Te;return p==="AVAILABLE"||p==="APPROVED"||p==="RETURNED"?S=Y:p.includes("PENDING")||p==="RESERVED"?S=xe:p==="REJECTED"||p==="CANCELLED"||p==="OVERDUE"?S=L:p==="RELEASED"&&(S=T),e.jsxs("span",{className:`inline-flex w-fit items-center gap-1.5 rounded-full border font-bold ${n?"px-2 py-1 text-[9px]":"px-2.5 py-1 text-[10px]"} ${ut(a)}`,children:[e.jsx(S,{size:n?11:12}),Le(a)]})}function Pe({status:a}){const n=j(a);let p=xe;return n==="APPROVED"||n==="RELEASED"||n==="RETURNED"?p=Y:(n==="REJECTED"||n==="CANCELLED")&&(p=L),e.jsxs("span",{className:`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${pt(a)}`,children:[e.jsx(p,{size:12}),a||"Pending Approval"]})}function y({label:a,value:n}){return e.jsxs("div",{children:[e.jsx("p",{className:"text-[9px] font-bold uppercase tracking-widest text-slate-400",children:a}),e.jsx("p",{className:"mt-1 text-sm font-semibold text-slate-800",children:n||"Not provided"})]})}function $t(){var Ee,Re;const[a,n]=o.useState([]),[p,S]=o.useState([]),[q,B]=o.useState([]),[$e,me]=o.useState(!0),[pe,ue]=o.useState(null),[be,he]=o.useState(null),[ee,fe]=o.useState(!1),[M,ge]=o.useState(!1),[Oe,F]=o.useState(!1),[Ie,te]=o.useState(!1),[Me,ve]=o.useState(!1),[c,$]=o.useState(null),[b,E]=o.useState(null),[K,Fe]=o.useState(""),[se,Ke]=o.useState(""),[U,Ue]=o.useState("all"),[V,Ve]=o.useState("all"),[R,je]=o.useState("all"),[X,Ne]=o.useState("description-asc"),[Xe,ae]=o.useState(!1),[l,O]=o.useState({office:"",borrowing_organization:"",borrower_full_name:"",contact_number:"",equipment_type_required:"Starlink",days_required:"",reservation_start_date:"",reservation_end_date:"",expected_return_date:"",name_of_activity:"",place_of_activity:"",primary_purpose:"",selected_kit_ids:[]}),[N,A]=o.useState({starlink_serial_number:"",description:"",office_id:"",model_type:"Mini",status:"Available",kit_id:""});o.useEffect(()=>{var t,s,r,i;try{const x=localStorage.getItem("user");if(!x)return;const d=JSON.parse(x),u=(d==null?void 0:d.office_id)??((t=d==null?void 0:d.office)==null?void 0:t.id)??((s=d==null?void 0:d.user)==null?void 0:s.office_id)??((i=(r=d==null?void 0:d.user)==null?void 0:r.office)==null?void 0:i.id);u!=null&&Fe(String(u))}catch(x){console.error("Failed to resolve admin office:",x)}},[]),o.useEffect(()=>{K&&O(t=>({...t,office:K}))},[K]);const we=async()=>{var t,s;try{me(!0),ue(null);const[r,i,x]=await Promise.all([P.get("starlink-kits/"),P.get("offices/"),P.get("starlink-requests/")]),d=Array.isArray(r.data)?r.data:[],u=Array.isArray(i.data)?i.data:[],g=Array.isArray(x.data)?x.data:[];n(d),B(u),S(g)}catch(r){console.error("Failed to load Starlink data:",r);const i=((s=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:s.detail)||"Failed to load Starlink management data.";ue(i),m.fire({icon:"error",title:"Load Error",text:i,confirmButtonColor:"#2563eb"})}finally{me(!1)}};o.useEffect(()=>{we()},[]);const C=t=>{if(!t)return"N/A";const s=q.find(r=>Number(r.id)===Number(t));return(s==null?void 0:s.name)||"N/A"},We=o.useMemo(()=>q.map(t=>({id:t.id,name:t.name})).sort((t,s)=>t.name.localeCompare(s.name)),[q]),Ge=o.useMemo(()=>{const t=a.map(s=>s.model_type||"Mini").filter(Boolean);return Array.from(new Set(t)).sort((s,r)=>s.localeCompare(r))},[a]),He=o.useMemo(()=>{const t=a.map(s=>s.status||"Unknown").filter(Boolean);return Array.from(new Set(t)).sort((s,r)=>s.localeCompare(r))},[a]),ye=o.useMemo(()=>[...a].sort((t,s)=>{const r=(t.description||t.name||t.kit_id||"").toLowerCase(),i=(s.description||s.name||s.kit_id||"").toLowerCase();return X==="description-desc"?i.localeCompare(r):r.localeCompare(i)}),[a,X]),W=o.useMemo(()=>{const t=se.trim().toLowerCase();return ye.filter(s=>{const r=[s.starlink_serial_number,s.description,s.name,s.kit_id,s.model_type,C(s.office_id)].filter(Boolean).join(" ").toLowerCase(),i=!t||r.includes(t),x=U==="all"||(s.model_type||"Mini")===U,d=V==="all"||(s.status||"Unknown")===V;return i&&x&&d})},[ye,se,U,V,q]),I=o.useMemo(()=>{const t=a.filter(x=>j(x.status)==="AVAILABLE").length,s=a.filter(x=>j(x.status)==="RELEASED").length,r=a.filter(x=>j(x.status)==="RESERVED").length,i=a.filter(x=>j(x.status)==="MAINTENANCE").length;return{total:a.length,available:t,released:s,reserved:r,maintenance:i}},[a]),G=o.useMemo(()=>({total:p.length,confirmed:p.filter(t=>["APPROVED","RELEASED","RETURNED"].includes(j(t.status))).length,pending:p.filter(t=>j(t.status).includes("PENDING")).length,rejected:p.filter(t=>["REJECTED","CANCELLED"].includes(j(t.status))).length}),[p]),H=o.useMemo(()=>R==="all"?p:p.filter(t=>{const s=j(t.status);return R==="confirmed"?["APPROVED","RELEASED","RETURNED"].includes(s):R==="pending"?s.includes("PENDING"):R==="rejected"?["REJECTED","CANCELLED"].includes(s):!0}),[p,R]),_e=o.useMemo(()=>a.filter(t=>{const s=j(t.status);return s==="AVAILABLE"||s==="RETURNED"}),[a]),J=o.useMemo(()=>a.filter(t=>l.selected_kit_ids.includes(t.id)),[a,l.selected_kit_ids]),_=(t,s)=>{O(r=>({...r,[t]:s}))},Je=t=>{O(s=>{const r=s.selected_kit_ids.includes(t);return{...s,selected_kit_ids:r?s.selected_kit_ids.filter(i=>i!==t):[...s.selected_kit_ids,t]}})},ke=()=>{O({office:K,borrowing_organization:"",borrower_full_name:"",contact_number:"",equipment_type_required:"Starlink",days_required:"",reservation_start_date:"",reservation_end_date:"",expected_return_date:"",name_of_activity:"",place_of_activity:"",primary_purpose:"",selected_kit_ids:[]})},re=()=>l.borrowing_organization.trim()?l.borrower_full_name.trim()?l.contact_number.trim()?l.days_required?Number(l.days_required)<=0?(m.fire({icon:"warning",title:"Invalid Days",text:"Days required must be greater than zero.",confirmButtonColor:"#2563eb"}),!1):l.reservation_start_date?l.reservation_end_date?l.reservation_end_date<l.reservation_start_date?(m.fire({icon:"warning",title:"Invalid Reservation",text:"The reservation end date cannot be before the start date.",confirmButtonColor:"#2563eb"}),!1):l.expected_return_date?l.name_of_activity.trim()?l.place_of_activity.trim()?l.selected_kit_ids.length===0?(m.fire({icon:"warning",title:"No Kit Selected",text:"Please select at least one available Starlink kit.",confirmButtonColor:"#2563eb"}),!1):!0:(m.fire({icon:"warning",title:"Place Required",text:"Please enter the place of activity.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Activity Required",text:"Please enter the name of activity.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Return Date Required",text:"Please select the expected return date.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"End Date Required",text:"Please select the reservation end date.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Start Date Required",text:"Please select the reservation start date.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Days Required",text:"Please enter the number of days required.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Contact Number Required",text:"Please enter the contact number.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Borrower Required",text:"Please enter the borrower full name.",confirmButtonColor:"#2563eb"}),!1):(m.fire({icon:"warning",title:"Organization Required",text:"Please enter the borrowing organization.",confirmButtonColor:"#2563eb"}),!1),Qe=()=>{if(!re())return;const t=Be(l,J,C(Number(l.office))),s=window.open("","_blank","width=1000,height=900");if(!s){m.fire({icon:"error",title:"Popup Blocked",text:"Please allow popups for this site before printing.",confirmButtonColor:"#2563eb"});return}s.document.open(),s.document.write(t),s.document.close(),s.onload=()=>{setTimeout(()=>{s.focus(),s.print()},500)}},Ze=()=>{if(!re())return;const t=Be(l,J,C(Number(l.office))),s=new Blob([t],{type:"text/html;charset=utf-8"}),r=URL.createObjectURL(s),i=document.createElement("a"),x=l.borrower_full_name.trim().replace(/[^a-zA-Z0-9]+/g,"-").replace(/^-|-$/g,"")||"borrower";i.href=r,i.download=`starlink-borrow-request-${x}.html`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r),m.fire({icon:"success",title:"Downloaded",text:"The Starlink Borrow Request form has been downloaded.",timer:1600,showConfirmButton:!1})},Se=()=>{const s=`starlink-inventory-${new Date().toISOString().split("T")[0]}.csv`,r=g=>`"${String(g??"").replace(/"/g,'""')}"`,i=[["Serial Number","Kit ID","Description","Office Name","Model Type","Status"].join(","),...W.map(g=>[r(g.starlink_serial_number),r(g.kit_id),r(g.description),r(C(g.office_id)),r(g.model_type),r(g.status)].join(","))],x=new Blob([i.join(`
`)],{type:"text/csv;charset=utf-8;"}),d=URL.createObjectURL(x),u=document.createElement("a");u.href=d,u.download=s,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(d),m.fire({icon:"success",title:"CSV Exported",text:"The filtered Starlink inventory has been exported.",timer:1500,showConfirmButton:!1})},Ye=async t=>{var s,r;if(t.preventDefault(),!N.starlink_serial_number.trim()){m.fire({icon:"warning",title:"Serial Number Required",text:"Please enter the Starlink serial number.",confirmButtonColor:"#2563eb"});return}if(!N.description.trim()){m.fire({icon:"warning",title:"Description Required",text:"Please enter a description.",confirmButtonColor:"#2563eb"});return}if(!N.office_id){m.fire({icon:"warning",title:"Office Required",text:"Please select an office.",confirmButtonColor:"#2563eb"});return}try{fe(!0);const i={starlink_serial_number:N.starlink_serial_number.trim(),description:N.description.trim(),office_id:parseInt(N.office_id,10),model_type:N.model_type,status:N.status,kit_id:N.kit_id.trim()||null},d=(await P.post("starlink-kits/",i)).data;n(u=>[...u,d]),F(!1),A({starlink_serial_number:"",description:"",office_id:"",model_type:"Mini",status:"Available",kit_id:""}),m.fire({icon:"success",title:"Starlink Added",text:"Starlink kit has been added successfully.",confirmButtonColor:"#2563eb",timer:1800,showConfirmButton:!1})}catch(i){console.error("Failed to add Starlink kit:",i),m.fire({icon:"error",title:"Add Error",text:((r=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:r.detail)||"Failed to add Starlink kit. Please try again.",confirmButtonColor:"#2563eb"})}finally{fe(!1)}},et=async t=>{var i,x;const s=C(t.office_id);if((await m.fire({icon:"warning",title:"Delete Starlink Kit?",html:`
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
      `,showCancelButton:!0,confirmButtonText:"Delete",cancelButtonText:"Keep Kit",confirmButtonColor:"#dc2626",cancelButtonColor:"#64748b",reverseButtons:!0})).isConfirmed)try{he(t.id),await P.delete(`starlink-kits/${t.id}/`),n(d=>d.filter(u=>u.id!==t.id)),O(d=>({...d,selected_kit_ids:d.selected_kit_ids.filter(u=>u!==t.id)})),m.fire({icon:"success",title:"Deleted",text:"Starlink kit has been deleted successfully.",timer:1600,showConfirmButton:!1})}catch(d){console.error("Failed to delete Starlink kit:",d),m.fire({icon:"error",title:"Delete Error",text:((x=(i=d==null?void 0:d.response)==null?void 0:i.data)==null?void 0:x.detail)||"Failed to delete Starlink kit. Please try again.",confirmButtonColor:"#2563eb"})}finally{he(null)}},tt=t=>{$(t),E(null)},le=(t,s)=>{$(t),E(s)},st=async()=>{var t,s,r;if(!(!c||!b))try{ge(!0);const i=await P.post(`starlink-requests/${c.id}/status/`,{status:b}),x=((t=i==null?void 0:i.data)==null?void 0:t.status)||b;S(g=>g.map(D=>D.id===c.id?{...D,status:x}:D));const d=new Set((c.starlink_kits||[]).map(g=>String(g))),u=b==="Approved"?"Released":c.status==="Approved"?"Available":null;u&&d.size>0&&n(g=>g.map(D=>d.has(String(D.id))?{...D,status:u}:D)),$(null),E(null),m.fire({icon:"success",title:`Request ${b}`,text:`The WiFi request has been ${b.toLowerCase()}.`,timer:1600,showConfirmButton:!1})}catch(i){console.error("Failed to update request:",i),m.fire({icon:"error",title:"Update Failed",text:((r=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:r.detail)||"The request status could not be updated.",confirmButtonColor:"#2563eb"})}finally{ge(!1)}},Ce=[{key:"all",label:"Total Requests",value:G.total,icon:ie,iconClass:"text-blue-600",bgClass:"bg-blue-50"},{key:"confirmed",label:"Confirmed",value:G.confirmed,icon:Y,iconClass:"text-emerald-600",bgClass:"bg-emerald-50"},{key:"pending",label:"Pending",value:G.pending,icon:xe,iconClass:"text-amber-600",bgClass:"bg-amber-50"},{key:"rejected",label:"Rejected / Cancelled",value:G.rejected,icon:L,iconClass:"text-rose-600",bgClass:"bg-rose-50"}];return e.jsxs("div",{className:"min-h-screen bg-slate-50",children:[e.jsxs("main",{className:"mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8",children:[e.jsxs("section",{className:"mb-7",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-blue-600",children:"Equipment Overview"}),e.jsx("h2",{className:"mt-1 text-lg font-black text-slate-900",children:"Starlink Inventory"})]}),e.jsxs("button",{type:"button",onClick:Se,className:"hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-100 sm:flex",children:[e.jsx(ne,{size:14}),"Export CSV"]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 md:grid-cols-5",children:[e.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600",children:e.jsx(Te,{size:17})}),e.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-slate-400",children:"Total"})]}),e.jsx("p",{className:"mt-4 text-2xl font-black text-slate-900",children:I.total}),e.jsx("p",{className:"mt-1 text-[10px] font-semibold text-slate-500",children:"All equipment"})]}),e.jsxs("div",{className:"rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600",children:e.jsx(Y,{size:17})}),e.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-emerald-600",children:"Ready"})]}),e.jsx("p",{className:"mt-4 text-2xl font-black text-emerald-700",children:I.available}),e.jsx("p",{className:"mt-1 text-[10px] font-semibold text-emerald-700/70",children:"Available"})]}),e.jsxs("div",{className:"rounded-2xl border border-blue-100 bg-blue-50/50 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600",children:e.jsx(T,{size:17})}),e.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-blue-600",children:"Active"})]}),e.jsx("p",{className:"mt-4 text-2xl font-black text-blue-700",children:I.released}),e.jsx("p",{className:"mt-1 text-[10px] font-semibold text-blue-700/70",children:"Released"})]}),e.jsxs("div",{className:"rounded-2xl border border-amber-100 bg-amber-50/50 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-600",children:e.jsx(qe,{size:17})}),e.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-amber-600",children:"Reserved"})]}),e.jsx("p",{className:"mt-4 text-2xl font-black text-amber-700",children:I.reserved}),e.jsx("p",{className:"mt-1 text-[10px] font-semibold text-amber-700/70",children:"Reserved"})]}),e.jsxs("div",{className:"rounded-2xl border border-violet-100 bg-violet-50/50 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-600",children:e.jsx(Ae,{size:17})}),e.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest text-violet-600",children:"Service"})]}),e.jsx("p",{className:"mt-4 text-2xl font-black text-violet-700",children:I.maintenance}),e.jsx("p",{className:"mt-1 text-[10px] font-semibold text-violet-700/70",children:"Maintenance"})]})]})]}),e.jsxs("section",{className:"mb-8",children:[e.jsxs("div",{className:"mb-4 flex items-end justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-blue-600",children:"Request Center"}),e.jsx("h2",{className:"mt-1 text-lg font-black text-slate-900",children:"WiFi Borrow Requests"})]}),e.jsxs("span",{className:"text-xs font-semibold text-slate-400",children:[H.length," displayed"]})]}),e.jsx("div",{className:"grid grid-cols-2 gap-3 lg:grid-cols-4",children:Ce.map(t=>{const s=t.icon,r=R===t.key;return e.jsxs("button",{type:"button",onClick:()=>je(t.key),className:`group rounded-2xl border p-4 text-left transition ${r?"border-blue-300 bg-blue-50 shadow-sm ring-2 ring-blue-100":"border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:`flex h-10 w-10 items-center justify-center rounded-xl ${t.bgClass} ${t.iconClass}`,children:e.jsx(s,{size:18})}),e.jsx(at,{size:15,className:`rotate-[-90deg] transition ${r?"text-blue-500":"text-slate-300 group-hover:text-blue-400"}`})]}),e.jsx("p",{className:"mt-4 text-2xl font-black text-slate-900",children:t.value}),e.jsx("p",{className:"mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400",children:t.label})]},t.key)})}),e.jsxs("div",{className:"mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",children:[e.jsxs("div",{className:"flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-black text-slate-900",children:((Ee=Ce.find(t=>t.key===R))==null?void 0:Ee.label)||"WiFi Requests"}),e.jsx("p",{className:"mt-0.5 text-xs text-slate-500",children:"Review and process borrowing requests."})]}),e.jsx("button",{type:"button",onClick:()=>je("all"),className:"w-fit text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-800",children:"Show All"})]}),H.length===0?e.jsxs("div",{className:"px-6 py-10 text-center",children:[e.jsx(ie,{size:34,className:"mx-auto text-slate-200"}),e.jsx("p",{className:"mt-3 text-sm font-bold text-slate-500",children:"No WiFi requests found"}),e.jsx("p",{className:"mt-1 text-xs text-slate-400",children:"There are no requests in this category."})]}):e.jsx("div",{className:"divide-y divide-slate-100",children:H.slice(0,8).map(t=>{const s=j(t.status),r=["REJECTED","CANCELLED","RETURNED"].includes(s);return e.jsxs("div",{className:"group flex flex-col gap-4 px-5 py-4 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between",children:[e.jsx("button",{type:"button",onClick:()=>tt(t),className:"min-w-0 flex-1 text-left",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600",children:e.jsx(De,{size:17})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-black text-slate-900",children:t.borrower_full_name||t.borrowing_organization||"WiFi Request"}),e.jsxs("div",{className:"mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-medium text-slate-400",children:[e.jsx("span",{children:t.request_number||`Request #${t.id}`}),t.office_name&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsx("span",{children:t.office_name})]}),t.created_at&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsx("span",{children:k(t.created_at)})]})]})]})]})}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(Pe,{status:t.status}),!r&&e.jsxs(e.Fragment,{children:[s!=="APPROVED"&&e.jsx("button",{type:"button",title:"Approve",onClick:()=>le(t,"Approved"),className:"flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white transition hover:bg-emerald-700",children:e.jsx(Q,{size:16})}),s!=="REJECTED"&&e.jsx("button",{type:"button",title:"Reject",onClick:()=>le(t,"Rejected"),className:"flex h-9 w-9 items-center justify-center rounded-xl bg-rose-600 text-white transition hover:bg-rose-700",children:e.jsx(z,{size:16})}),e.jsx("button",{type:"button",title:"Cancel",onClick:()=>le(t,"Cancelled"),className:"flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-100",children:e.jsx(L,{size:16})})]})]})]},t.id)})}),H.length>8&&e.jsx("div",{className:"border-t border-slate-200 bg-slate-50 px-5 py-3 text-center",children:e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-widest text-slate-400",children:"Showing first 8 requests"})})]})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-blue-600",children:"Equipment Registry"}),e.jsx("h2",{className:"mt-1 text-lg font-black text-slate-900",children:"Starlink Kits"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("div",{className:"relative min-w-[240px]",children:[e.jsx(rt,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),e.jsx("input",{value:se,onChange:t=>Ke(t.target.value),placeholder:"Search serial, kit ID, office...",className:`${h} pl-9`})]}),e.jsxs("select",{value:U,onChange:t=>Ue(t.target.value),className:"rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 outline-none focus:border-blue-500",children:[e.jsx("option",{value:"all",children:"All Models"}),Ge.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsxs("select",{value:V,onChange:t=>Ve(t.target.value),className:"rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 outline-none focus:border-blue-500",children:[e.jsx("option",{value:"all",children:"All Status"}),He.map(t=>e.jsx("option",{value:t,children:Le(t)},t))]}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{type:"button",onClick:()=>ae(t=>!t),className:"flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50",children:[e.jsx(lt,{size:14}),"Sort"]}),Xe&&e.jsxs("div",{className:"absolute right-0 z-30 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl",children:[e.jsx("button",{type:"button",onClick:()=>{Ne("description-asc"),ae(!1)},className:`w-full px-4 py-3 text-left text-xs font-bold ${X==="description-asc"?"bg-blue-50 text-blue-700":"text-slate-600 hover:bg-slate-50"}`,children:"Description A-Z"}),e.jsx("button",{type:"button",onClick:()=>{Ne("description-desc"),ae(!1)},className:`w-full px-4 py-3 text-left text-xs font-bold ${X==="description-desc"?"bg-blue-50 text-blue-700":"text-slate-600 hover:bg-slate-50"}`,children:"Description Z-A"})]})]}),e.jsxs("button",{type:"button",onClick:()=>{ke(),te(!0)},className:`${w} bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700`,children:[e.jsx(oe,{size:17}),"Create Borrow Request"]}),e.jsxs("button",{type:"button",onClick:()=>F(!0),className:`${w} border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700`,children:[e.jsx(de,{size:17}),"Add Starlink"]})]})]}),$e?e.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white py-20 text-center shadow-sm",children:[e.jsx(Z,{size:38,className:"mx-auto animate-spin text-blue-600"}),e.jsx("p",{className:"mt-4 text-sm font-bold text-slate-700",children:"Loading Starlink inventory..."}),e.jsx("p",{className:"mt-1 text-xs text-slate-400",children:"Please wait while the equipment data is loaded."})]}):pe?e.jsx("div",{className:"rounded-2xl border border-rose-200 bg-rose-50 p-6",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(xt,{size:22,className:"mt-0.5 shrink-0 text-rose-600"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-black text-rose-900",children:"Unable to load inventory"}),e.jsx("p",{className:"mt-1 text-sm text-rose-700",children:pe}),e.jsx("button",{type:"button",onClick:we,className:"mt-4 rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700",children:"Try Again"})]})]})}):W.length===0?e.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white py-16 text-center shadow-sm",children:[e.jsx("div",{className:"mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400",children:e.jsx(T,{size:25})}),e.jsx("p",{className:"mt-4 text-sm font-black text-slate-600",children:"No Starlink kits found"}),e.jsx("p",{className:"mt-1 text-xs text-slate-400",children:"Try changing your search or filters."})]}):e.jsxs("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full min-w-[950px]",children:[e.jsx("thead",{className:"border-b border-slate-200 bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Equipment"}),e.jsx("th",{className:"px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Serial Number"}),e.jsx("th",{className:"px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Office"}),e.jsx("th",{className:"px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Model"}),e.jsx("th",{className:"px-5 py-3 text-left text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Status"}),e.jsx("th",{className:"px-5 py-3 text-right text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Action"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:W.map(t=>e.jsxs("tr",{className:"group transition hover:bg-slate-50",children:[e.jsx("td",{className:"px-5 py-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600",children:e.jsx(T,{size:17})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-black text-slate-800",children:t.kit_id||t.name||`Kit #${t.id}`}),e.jsx("p",{className:"mt-0.5 max-w-[260px] truncate text-xs text-slate-400",children:t.description||"Starlink Equipment"})]})]})}),e.jsx("td",{className:"px-5 py-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(mt,{size:14,className:"text-slate-300"}),e.jsx("span",{className:"font-mono text-xs font-bold text-slate-600",children:t.starlink_serial_number||"N/A"})]})}),e.jsx("td",{className:"px-5 py-4",children:e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-slate-600",children:[e.jsx(ze,{size:14,className:"text-slate-300"}),C(t.office_id)]})}),e.jsx("td",{className:"px-5 py-4",children:e.jsx("span",{className:"rounded-lg bg-slate-100 px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-slate-600",children:t.model_type||"Mini"})}),e.jsx("td",{className:"px-5 py-4",children:e.jsx(bt,{status:t.status})}),e.jsx("td",{className:"px-5 py-4 text-right",children:e.jsx("button",{type:"button",disabled:be===t.id,onClick:()=>et(t),className:"inline-flex h-9 w-9 items-center justify-center rounded-xl border border-rose-100 bg-rose-50 text-rose-500 transition hover:bg-rose-100 hover:text-rose-700 disabled:opacity-50",title:"Delete kit",children:be===t.id?e.jsx(Z,{size:15,className:"animate-spin"}):e.jsx(it,{size:15})})})]},t.id))})]})}),e.jsxs("div",{className:"flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsx("div",{children:e.jsxs("p",{className:"text-xs font-bold text-slate-600",children:["Showing"," ",e.jsx("span",{className:"font-black text-slate-900",children:W.length})," ","of"," ",e.jsx("span",{className:"font-black text-slate-900",children:a.length})," ","Starlink kits"]})}),e.jsxs("button",{type:"button",onClick:Se,className:"flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100",children:[e.jsx(ne,{size:14}),"Export Inventory CSV"]})]})]})]})]}),Oe&&e.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm",children:e.jsxs("div",{className:"w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 px-6 py-5",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600",children:e.jsx(de,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-black text-slate-900",children:"Add Starlink Kit"}),e.jsx("p",{className:"text-xs text-slate-500",children:"Register a new Starlink equipment unit."})]})]}),e.jsx("button",{type:"button",onClick:()=>F(!1),className:"flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700",children:e.jsx(z,{size:18})})]}),e.jsxs("form",{onSubmit:Ye,className:"space-y-5 p-6",children:[e.jsxs("div",{className:"grid gap-5 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Serial Number *"}),e.jsx("input",{value:N.starlink_serial_number,onChange:t=>A(s=>({...s,starlink_serial_number:t.target.value})),placeholder:"Enter Starlink serial number",className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Kit ID"}),e.jsx("input",{value:N.kit_id,onChange:t=>A(s=>({...s,kit_id:t.target.value})),placeholder:"e.g. Camiguin Starlink 01",className:h})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:f,children:"Description *"}),e.jsx("input",{value:N.description,onChange:t=>A(s=>({...s,description:t.target.value})),placeholder:"Describe the equipment",className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Office *"}),e.jsxs("select",{value:N.office_id,onChange:t=>A(s=>({...s,office_id:t.target.value})),className:h,children:[e.jsx("option",{value:"",children:"Select Office"}),We.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Model Type"}),e.jsxs("select",{value:N.model_type,onChange:t=>A(s=>({...s,model_type:t.target.value})),className:h,children:[e.jsx("option",{value:"Mini",children:"Mini"}),e.jsx("option",{value:"Standard",children:"Standard"}),e.jsx("option",{value:"Gen 2",children:"Gen 2"}),e.jsx("option",{value:"Gen 3",children:"Gen 3"}),e.jsx("option",{value:"High Performance",children:"High Performance"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Initial Status"}),e.jsxs("select",{value:N.status,onChange:t=>A(s=>({...s,status:t.target.value})),className:h,children:[e.jsx("option",{value:"Available",children:"Available"}),e.jsx("option",{value:"Reserved",children:"Reserved"}),e.jsx("option",{value:"Maintenance",children:"Maintenance"}),e.jsx("option",{value:"Inactive",children:"Inactive"})]})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 border-t border-slate-200 pt-5",children:[e.jsx("button",{type:"button",onClick:()=>F(!1),className:`${w} border border-slate-200 bg-white text-slate-600 hover:bg-slate-50`,children:"Cancel"}),e.jsxs("button",{type:"submit",disabled:ee,className:`${w} bg-blue-600 text-white hover:bg-blue-700`,children:[ee?e.jsx(Z,{size:16,className:"animate-spin"}):e.jsx(de,{size:16}),ee?"Adding...":"Add Starlink Kit"]})]})]})]})}),Ie&&e.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm",children:e.jsxs("div",{className:"flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-7",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20",children:e.jsx(oe,{size:20})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.2em] text-blue-600",children:"New Request"}),e.jsx("h2",{className:"text-lg font-black text-slate-900",children:"Starlink Equipment Borrow Request"}),e.jsx("p",{className:"text-xs text-slate-500",children:"Submit borrow details to generate your slip and submit your request for approval."})]})]}),e.jsx("button",{type:"button",onClick:()=>te(!1),className:"flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700",children:e.jsx(z,{size:19})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto bg-slate-50 p-5 sm:p-7",children:e.jsxs("div",{className:"mx-auto max-w-5xl space-y-5",children:[e.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600",children:e.jsx(De,{size:17})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-black text-slate-900",children:"Borrower Information"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Basic information about the borrower."})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Office"}),e.jsxs("div",{className:"flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700",children:[e.jsx(ze,{size:15,className:"text-blue-500"}),C(Number(l.office))]}),e.jsx("p",{className:"mt-1 text-[10px] text-slate-400",children:"Office is automatically based on the logged-in administrator."})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Borrowing Organization *"}),e.jsx("input",{value:l.borrowing_organization,onChange:t=>_("borrowing_organization",t.target.value),placeholder:"Office / Division / Organization",className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Borrower Full Name *"}),e.jsx("input",{value:l.borrower_full_name,onChange:t=>_("borrower_full_name",t.target.value),placeholder:"Enter full name",className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Contact Number *"}),e.jsxs("div",{className:"relative",children:[e.jsx(nt,{size:15,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),e.jsx("input",{value:l.contact_number,onChange:t=>_("contact_number",t.target.value),placeholder:"09XXXXXXXXX",className:`${h} pl-9`})]})]})]})]}),e.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600",children:e.jsx(T,{size:17})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-black text-slate-900",children:"Equipment Details"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select the equipment and available Starlink kit."})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Equipment Type Required *"}),e.jsxs("select",{value:l.equipment_type_required,onChange:t=>_("equipment_type_required",t.target.value),className:h,children:[e.jsx("option",{value:"Starlink",children:"Starlink"}),e.jsx("option",{value:"Starlink Kit Only",children:"Starlink Kit Only"}),e.jsx("option",{value:"Starlink Kit with Router & TP-Link AP",children:"Starlink Kit with Router & TP-Link AP"}),e.jsx("option",{value:"Starlink Kit with TP-Link AP",children:"Starlink Kit with TP-Link AP"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Days Required *"}),e.jsx("input",{type:"number",min:"1",value:l.days_required,onChange:t=>_("days_required",t.target.value),placeholder:"Number of days",className:h})]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-[11px] font-black uppercase tracking-widest text-slate-600",children:"Select Starlink Kits *"}),e.jsx("p",{className:"mt-1 text-[10px] text-slate-400",children:"Only Available or Returned kits can be selected."})]}),e.jsxs("span",{className:"rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase text-blue-600",children:[l.selected_kit_ids.length," ","selected"]})]}),_e.length===0?e.jsxs("div",{className:"rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center",children:[e.jsx(T,{size:27,className:"mx-auto text-amber-500"}),e.jsx("p",{className:"mt-3 text-sm font-black text-amber-800",children:"No available Starlink kits"}),e.jsx("p",{className:"mt-1 text-xs text-amber-700",children:"Add or return a kit before creating a borrow request."})]}):e.jsx("div",{className:"grid max-h-72 gap-3 overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 p-3 md:grid-cols-2",children:_e.map(t=>{const s=l.selected_kit_ids.includes(t.id);return e.jsx("button",{type:"button",onClick:()=>Je(t.id),className:`rounded-xl border p-4 text-left transition ${s?"border-blue-400 bg-blue-50 shadow-sm ring-2 ring-blue-100":"border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40"}`,children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-black text-slate-900",children:t.kit_id||t.starlink_serial_number||`Kit #${t.id}`}),e.jsx("p",{className:"mt-1 truncate text-xs text-slate-500",children:t.description||"Starlink Equipment"}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("span",{className:"rounded-md bg-slate-100 px-2 py-1 text-[9px] font-black uppercase tracking-wide text-slate-500",children:t.model_type||"Mini"}),e.jsx("span",{className:"text-[9px] font-semibold text-slate-400",children:C(t.office_id)})]})]}),e.jsx("div",{className:`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border ${s?"border-blue-600 bg-blue-600 text-white":"border-slate-300 bg-white text-transparent"}`,children:e.jsx(Q,{size:13})})]})},t.id)})})]})]}),e.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600",children:e.jsx(qe,{size:17})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-black text-slate-900",children:"Reservation Details"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Set the requested borrowing period."})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Reservation Start *"}),e.jsx("input",{type:"date",value:l.reservation_start_date,onChange:t=>_("reservation_start_date",t.target.value),className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Reservation End *"}),e.jsx("input",{type:"date",min:l.reservation_start_date||void 0,value:l.reservation_end_date,onChange:t=>_("reservation_end_date",t.target.value),className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Expected Return *"}),e.jsx("input",{type:"date",min:l.reservation_end_date||l.reservation_start_date||void 0,value:l.expected_return_date,onChange:t=>_("expected_return_date",t.target.value),className:h})]})]})]}),e.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600",children:e.jsx(Ae,{size:17})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-black text-slate-900",children:"Activity Information"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Tell us where and why the equipment will be used."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Name of Activity *"}),e.jsx("input",{value:l.name_of_activity,onChange:t=>_("name_of_activity",t.target.value),placeholder:"Enter activity name",className:h})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Place of Activity *"}),e.jsxs("div",{className:"relative",children:[e.jsx(ot,{size:15,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),e.jsx("input",{value:l.place_of_activity,onChange:t=>_("place_of_activity",t.target.value),placeholder:"Enter activity location",className:`${h} pl-9`})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:f,children:"Primary Purpose"}),e.jsx("textarea",{rows:4,value:l.primary_purpose,onChange:t=>_("primary_purpose",t.target.value),placeholder:"Describe the primary purpose of the Starlink equipment...",className:`${h} resize-none`})]})]})]})]})}),e.jsxs("div",{className:"flex flex-col gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7",children:[e.jsx("button",{type:"button",onClick:ke,className:`${w} border border-slate-200 bg-white text-slate-600 hover:bg-slate-50`,children:"Clear Form"}),e.jsxs("div",{className:"flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>te(!1),className:`${w} border border-slate-200 bg-white text-slate-600 hover:bg-slate-50`,children:"Close"}),e.jsxs("button",{type:"button",onClick:()=>{re()&&ve(!0)},className:`${w} bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700`,children:[e.jsx(oe,{size:16}),"Preview Form"]})]})]})]})}),Me&&e.jsx("div",{className:"fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm",children:e.jsxs("div",{className:"flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-slate-100 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col gap-3 border-b border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.2em] text-blue-600",children:"Official Document Preview"}),e.jsx("h2",{className:"text-lg font-black text-slate-900",children:"Starlink Equipment Borrow Request"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("button",{type:"button",onClick:Ze,className:`${w} border border-slate-200 bg-white text-slate-700 hover:bg-slate-50`,children:[e.jsx(ne,{size:15}),"Download HTML"]}),e.jsxs("button",{type:"button",onClick:Qe,className:`${w} bg-blue-600 text-white hover:bg-blue-700`,children:[e.jsx(dt,{size:15}),"Print / Save PDF"]}),e.jsx("button",{type:"button",onClick:()=>ve(!1),className:"flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-100",children:e.jsx(z,{size:17})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-8",children:e.jsx("div",{className:"mx-auto w-full max-w-[794px] bg-white shadow-xl",children:e.jsxs("div",{className:"p-8 sm:p-[55px]",children:[e.jsxs("div",{className:"flex items-center justify-between border-b-2 border-blue-700 pb-4",children:[e.jsx("div",{className:"flex h-[60px] items-center",children:e.jsx("img",{src:"/dic.png",alt:"DICT Logo",className:"max-h-[55px] max-w-[160px] object-contain"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-[8px] font-semibold uppercase sm:text-[10px]",children:"Republic of the Philippines"}),e.jsx("p",{className:"mt-1 text-[9px] font-bold uppercase sm:text-[11px]",children:"Department of Information Communications Technology"}),e.jsx("p",{className:"mt-1 text-[8px] font-semibold uppercase sm:text-[10px]",children:"Region Office X"})]}),e.jsx("div",{className:"flex h-[60px] items-center",children:e.jsx("img",{src:"/bp.png",alt:"Bagong Pilipinas Logo",className:"max-h-[55px] max-w-[55px] object-contain"})})]}),e.jsxs("div",{className:"py-6 text-center",children:[e.jsx("h1",{className:"text-[15px] font-black tracking-wide text-blue-700 sm:text-[18px]",children:"STARLINK EQUIPMENT BORROW REQUEST"}),e.jsxs("p",{className:"mt-1 text-[8px] text-slate-500 sm:text-[10px]",children:["Submitted on"," ",new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"mb-3 border-b border-blue-700 pb-1.5 text-[10px] font-black uppercase tracking-wider text-blue-700 sm:text-[11px]",children:"Borrower Information"}),e.jsxs("div",{className:"grid gap-x-6 gap-y-4 sm:grid-cols-2",children:[e.jsx(y,{label:"Office",value:C(Number(l.office))}),e.jsx(y,{label:"Borrowing Organization",value:l.borrowing_organization}),e.jsx(y,{label:"Borrower Full Name",value:l.borrower_full_name}),e.jsx(y,{label:"Contact Number",value:l.contact_number})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"mb-3 border-b border-blue-700 pb-1.5 text-[10px] font-black uppercase tracking-wider text-blue-700 sm:text-[11px]",children:"Equipment Details"}),e.jsxs("div",{className:"grid gap-x-6 gap-y-4 sm:grid-cols-2",children:[e.jsx(y,{label:"Equipment Type Required",value:l.equipment_type_required}),e.jsx(y,{label:"Days Required",value:l.days_required})]}),e.jsx("p",{className:"mb-2 mt-5 text-[9px] font-bold uppercase tracking-wide text-slate-700",children:"Selected Starlink Kits"}),e.jsx("div",{className:"overflow-hidden border border-slate-400",children:e.jsxs("table",{className:"w-full border-collapse text-[8px] sm:text-[9px]",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-100",children:[e.jsx("th",{className:"border-b border-slate-400 px-2 py-2 text-left",children:"Kit ID"}),e.jsx("th",{className:"border-b border-slate-400 px-2 py-2 text-left",children:"Serial Number"}),e.jsx("th",{className:"border-b border-slate-400 px-2 py-2 text-left",children:"Model"})]})}),e.jsx("tbody",{children:J.length>0?J.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"border-b border-slate-300 px-2 py-2",children:t.kit_id||`Kit #${t.id}`}),e.jsx("td",{className:"border-b border-slate-300 px-2 py-2",children:t.starlink_serial_number}),e.jsx("td",{className:"border-b border-slate-300 px-2 py-2",children:t.model_type||"Mini"})]},t.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:3,className:"px-2 py-3 text-center",children:"No kits selected"})})})]})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"mb-3 border-b border-blue-700 pb-1.5 text-[10px] font-black uppercase tracking-wider text-blue-700 sm:text-[11px]",children:"Reservation Details"}),e.jsxs("div",{className:"grid gap-x-6 gap-y-4 sm:grid-cols-3",children:[e.jsx(y,{label:"Reservation Start",value:k(l.reservation_start_date)}),e.jsx(y,{label:"Reservation End",value:k(l.reservation_end_date)}),e.jsx(y,{label:"Expected Return",value:k(l.expected_return_date)})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"mb-3 border-b border-blue-700 pb-1.5 text-[10px] font-black uppercase tracking-wider text-blue-700 sm:text-[11px]",children:"Activity Information"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(y,{label:"Name of Activity",value:l.name_of_activity}),e.jsx(y,{label:"Place of Activity",value:l.place_of_activity}),l.primary_purpose.trim()&&e.jsx(y,{label:"Primary Purpose",value:l.primary_purpose})]})]}),e.jsxs("div",{className:"mt-12 grid gap-10 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"h-10 border-b border-slate-500"}),e.jsx("p",{className:"mt-2 text-center text-[9px] font-bold uppercase tracking-wide text-slate-600",children:"Borrower's Signature"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"h-10 border-b border-slate-500"}),e.jsx("p",{className:"mt-2 text-center text-[9px] font-bold uppercase tracking-wide text-slate-600",children:"Authorized Representative"})]})]})]})})})]})}),c&&e.jsx("div",{className:"fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm",children:e.jsxs("div",{className:"w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 px-6 py-5",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600",children:e.jsx(ie,{size:19})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.2em] text-blue-600",children:"Request Review"}),e.jsx("h2",{className:"text-lg font-black text-slate-900",children:c.request_number||`Request #${c.id}`})]})]}),e.jsx("button",{type:"button",onClick:()=>{$(null),E(null)},className:"flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700",children:e.jsx(z,{size:18})})]}),e.jsxs("div",{className:"max-h-[70vh] overflow-y-auto p-6",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-slate-400",children:"Current Status"}),e.jsx("div",{className:"mt-2",children:e.jsx(Pe,{status:c.status})})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-slate-400",children:"Created"}),e.jsx("p",{className:"mt-2 text-xs font-semibold text-slate-700",children:c.created_at?k(c.created_at):"N/A"})]})]}),e.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:[["Borrower",c.borrower_full_name],["Organization",c.borrowing_organization],["Contact Number",c.contact_number],["Equipment",c.equipment_type_required],["Starlink Model",c.starlink_model],["Days Required",(Re=c.days_required)==null?void 0:Re.toString()],["Start Date",c.reservation_start_date?k(c.reservation_start_date):void 0],["End Date",c.reservation_end_date?k(c.reservation_end_date):void 0],["Expected Return",c.expected_return_date?k(c.expected_return_date):void 0],["Activity",c.name_of_activity],["Location",c.place_of_activity]].map(([t,s])=>e.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 px-4 py-3",children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400",children:t}),e.jsx("p",{className:"mt-1 text-sm font-bold text-slate-800",children:s||"Not provided"})]},t))}),e.jsxs("div",{className:"mt-3 rounded-xl border border-slate-200 bg-white px-4 py-4",children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400",children:"Purpose"}),e.jsx("p",{className:"mt-2 text-sm leading-relaxed text-slate-700",children:c.primary_purpose||"No purpose provided."})]}),c.starlink_kits&&c.starlink_kits.length>0&&e.jsxs("div",{className:"mt-3 rounded-xl border border-slate-200 bg-white px-4 py-4",children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400",children:"Assigned Starlink Kits"}),e.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:c.starlink_kits.map(t=>{const s=a.find(r=>String(r.id)===String(t));return e.jsx("span",{className:"rounded-lg bg-blue-50 px-3 py-2 text-[10px] font-black text-blue-700",children:(s==null?void 0:s.kit_id)||(s==null?void 0:s.starlink_serial_number)||`Kit #${t}`},String(t))})})]}),b&&e.jsx("div",{className:"mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(ct,{size:19,className:b==="Approved"?"text-emerald-600":b==="Rejected"?"text-rose-600":"text-slate-600"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-black text-slate-800",children:["Confirm"," ",b.toLowerCase()," ","this request?"]}),e.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-500",children:b==="Approved"?"This will approve the request and mark its selected Starlink kits as Released.":b==="Rejected"?"This will reject the borrowing request.":"This will cancel the borrowing request."})]})]})})]}),e.jsxs("div",{className:"flex flex-wrap justify-end gap-2 border-t border-slate-200 bg-slate-50 px-6 py-4",children:[e.jsx("button",{type:"button",disabled:M,onClick:()=>{$(null),E(null)},className:`${w} border border-slate-200 bg-white text-slate-600 hover:bg-slate-100`,children:"Close"}),b?e.jsxs("button",{type:"button",disabled:M,onClick:st,className:`${w} ${b==="Approved"?"bg-emerald-600 text-white hover:bg-emerald-700":b==="Rejected"?"bg-rose-600 text-white hover:bg-rose-700":"bg-slate-700 text-white hover:bg-slate-800"}`,children:[M?e.jsx(Z,{size:16,className:"animate-spin"}):b==="Approved"?e.jsx(Q,{size:16}):b==="Rejected"?e.jsx(z,{size:16}):e.jsx(L,{size:16}),M?"Updating...":`Confirm ${b}`]}):!["REJECTED","CANCELLED","RETURNED"].includes(j(c.status))&&e.jsxs(e.Fragment,{children:[j(c.status)!=="APPROVED"&&e.jsxs("button",{type:"button",onClick:()=>E("Approved"),className:`${w} bg-emerald-600 text-white hover:bg-emerald-700`,children:[e.jsx(Q,{size:16}),"Approve"]}),e.jsxs("button",{type:"button",onClick:()=>E("Rejected"),className:`${w} bg-rose-600 text-white hover:bg-rose-700`,children:[e.jsx(z,{size:16}),"Reject"]}),e.jsxs("button",{type:"button",onClick:()=>E("Cancelled"),className:`${w} border border-slate-300 bg-white text-slate-700 hover:bg-slate-100`,children:[e.jsx(L,{size:16}),"Cancel"]})]})]})]})})]})}export{$t as default};

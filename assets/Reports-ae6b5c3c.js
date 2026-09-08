import{r as d,j as e,M}from"./index-acd96f6d.js";import{h as P,E as S}from"./jspdf.es.min-d5dd38af.js";import"./slicedToArray-b9b46abd.js";function L({bookings:b,offices:w,currentUser:t}){var E,R;const T=((E=t==null?void 0:t.role)==null?void 0:E.toLowerCase())||"",I=((R=t==null?void 0:t.email)==null?void 0:R.toLowerCase())||"",y=T==="super-admin"||I==="superadmin@dict.gov.ph",x=Number((t==null?void 0:t.assignedOfficeId)??(t==null?void 0:t.office_id)),[v,k]=d.useState(!1),f=d.useMemo(()=>w.filter(a=>y?!0:Number.isFinite(x)&&x>0?a.id===x:a.name===(t==null?void 0:t.assignedOffice)),[w,t,y,x]),n=d.useMemo(()=>Array.isArray(b)?b:[],[b]),o=d.useMemo(()=>n.filter(a=>{var r;const s=(r=a.status)==null?void 0:r.toUpperCase();return s==="APPROVED"||s==="CONFIRMED"||s==="READY"}),[n]),z=d.useMemo(()=>n.filter(a=>{var r;const s=(r=a.status)==null?void 0:r.toUpperCase();return s==="PENDING"||s==="TO BE REVIEWED"||s==="NEEDS ACTION"}),[n]),p=d.useMemo(()=>f.map(a=>{var l;const s=((l=a.name)==null?void 0:l.toLowerCase())||"",r=o.filter(m=>{var i;if(m.office!=null&&a.id!=null)return Number(m.office)===Number(a.id);const g=((i=m.venue)==null?void 0:i.toLowerCase())||"";return g.includes(s)||s.includes(g)}).length;return{name:a.name,count:r}}),[f,o]),O=d.useMemo(()=>o.length===0?0:Math.round(o.length/Math.max(n.length,1)*100),[o,n]),N=d.useMemo(()=>p.length===0?null:[...p].sort((a,s)=>s.count-a.count)[0],[p]),D=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),A=async()=>{const a=document.getElementById("report-content");if(a){k(!0);try{await new Promise(u=>setTimeout(u,250));const s=await P(a,{scale:2,useCORS:!0,backgroundColor:"#ffffff",logging:!1}),r=s.toDataURL("image/png"),l=new S("p","mm","a4"),m=210,g=297,i=10,h=m-i*2,c=s.height*h/s.width;if(c<=g-i*2)l.addImage(r,"PNG",i,i,h,c);else{let u=c,j=i;for(l.addImage(r,"PNG",i,j,h,c),u-=g-i*2;u>0;)j=u-c+i,l.addPage(),l.addImage(r,"PNG",i,j,h,c),u-=g-i*2}const C=new Date().getTime();l.save(`DICT_Usage_Report_${C}.pdf`)}catch(s){console.error("PDF export failed:",s)}finally{k(!1)}}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`

                /* =================================================
                   ROOT
                ================================================= */

                .usage-report-page {
                    --ur-bg: #f5f7fb;
                    --ur-card: #ffffff;
                    --ur-border: #e7ebf2;
                    --ur-text: #172033;
                    --ur-muted: #718096;
                    --ur-blue: #2563eb;
                    --ur-blue-dark: #1d4ed8;

                    width: 100%;
                    max-width: 1180px;
                    margin: 0 auto;
                    padding: 28px 24px 50px;

                    color: var(--ur-text);

                    font-family:
                        Inter,
                        -apple-system,
                        BlinkMacSystemFont,
                        "Segoe UI",
                        Roboto,
                        Helvetica,
                        Arial,
                        sans-serif;

                    box-sizing: border-box;
                }

                .dark .usage-report-page {
                    --ur-bg: #0b1220;
                    --ur-card: #111a2a;
                    --ur-border: #243149;
                    --ur-text: #f1f5f9;
                    --ur-muted: #94a3b8;
                    --ur-blue: #3b82f6;
                    --ur-blue-dark: #2563eb;
                }

                /* =================================================
                   PAGE HEADER
                ================================================= */

                .usage-page-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    gap: 20px;
                    margin-bottom: 24px;
                }

                .usage-header-content {
                    min-width: 0;
                }

                .usage-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 8px;

                    margin-bottom: 7px;

                    color: var(--ur-blue);

                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }

                .usage-eyebrow-dot {
                    width: 7px;
                    height: 7px;

                    border-radius: 50%;

                    background: var(--ur-blue);

                    box-shadow:
                        0 0 0 4px
                        rgba(37, 99, 235, 0.10);
                }

                .usage-page-title {
                    margin: 0;

                    color: var(--ur-text);

                    font-size: 27px;
                    line-height: 1.15;
                    font-weight: 850;
                    letter-spacing: -0.8px;
                }

                .usage-page-description {
                    margin: 7px 0 0;

                    color: var(--ur-muted);

                    font-size: 12px;
                    line-height: 1.5;
                    font-weight: 500;
                }

                .usage-header-actions {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    flex-shrink: 0;
                }

                /* =================================================
                   EXPORT BUTTON
                ================================================= */

                .usage-export-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 9px;

                    min-height: 40px;
                    padding: 0 17px;

                    border: 1px solid
                        rgba(37, 99, 235, 0.15);

                    border-radius: 9px;

                    background:
                        linear-gradient(
                            135deg,
                            #2563eb,
                            #1d4ed8
                        );

                    color: #ffffff;

                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;

                    cursor: pointer;

                    box-shadow:
                        0 7px 18px
                        rgba(37, 99, 235, 0.20);

                    transition:
                        transform .18s ease,
                        box-shadow .18s ease,
                        opacity .18s ease;
                }

                .usage-export-button:hover {
                    transform: translateY(-1px);

                    box-shadow:
                        0 10px 24px
                        rgba(37, 99, 235, 0.26);
                }

                .usage-export-button:active {
                    transform: scale(.98);
                }

                .usage-export-button:disabled {
                    opacity: .65;
                    cursor: wait;
                    transform: none;
                }

                .usage-export-button i {
                    font-size: 14px;
                }

                /* =================================================
                   DASHBOARD SUMMARY
                ================================================= */

                .usage-summary {
                    display: grid;

                    grid-template-columns:
                        repeat(4, minmax(0, 1fr));

                    gap: 13px;

                    margin-bottom: 18px;
                }

                .usage-summary-card {
                    position: relative;

                    min-height: 118px;

                    padding: 17px;

                    overflow: hidden;

                    border:
                        1px solid var(--ur-border);

                    border-radius: 13px;

                    background:
                        var(--ur-card);

                    box-shadow:
                        0 5px 18px
                        rgba(15, 23, 42, .045);

                    box-sizing: border-box;
                }

                .dark .usage-summary-card {
                    box-shadow:
                        0 8px 25px
                        rgba(0, 0, 0, .18);
                }

                .usage-summary-card.primary {
                    border-color: transparent;

                    background:
                        linear-gradient(
                            135deg,
                            #3478f6,
                            #1d4ed8
                        );

                    color: #ffffff;

                    box-shadow:
                        0 9px 24px
                        rgba(37, 99, 235, .20);
                }

                .usage-summary-card.success {
                    border-color: transparent;

                    background:
                        linear-gradient(
                            135deg,
                            #17283e,
                            #0f1d30
                        );

                    color: #ffffff;
                }

                .usage-summary-card.warning {
                    background:
                        linear-gradient(
                            135deg,
                            #ffffff,
                            #f8fafc
                        );
                }

                .dark .usage-summary-card.warning {
                    background:
                        linear-gradient(
                            135deg,
                            #111a2a,
                            #151f31
                        );
                }

                .usage-summary-card.info {
                    background:
                        linear-gradient(
                            135deg,
                            #ffffff,
                            #f5f9ff
                        );
                }

                .dark .usage-summary-card.info {
                    background:
                        linear-gradient(
                            135deg,
                            #111a2a,
                            #142039
                        );
                }

                .usage-summary-icon {
                    width: 36px;
                    height: 36px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    margin-bottom: 14px;

                    border-radius: 9px;

                    background: #eef4ff;

                    color: var(--ur-blue);

                    font-size: 14px;
                }

                .primary .usage-summary-icon,
                .success .usage-summary-icon {
                    background:
                        rgba(255,255,255,.13);

                    color: #ffffff;
                }

                .usage-summary-label {
                    margin-bottom: 4px;

                    color: var(--ur-muted);

                    font-size: 9px;
                    font-weight: 800;

                    letter-spacing: .06em;
                    text-transform: uppercase;
                }

                .primary .usage-summary-label,
                .success .usage-summary-label {
                    color:
                        rgba(255,255,255,.72);
                }

                .usage-summary-value {
                    color: var(--ur-text);

                    font-size: 28px;
                    line-height: 1;
                    font-weight: 900;

                    letter-spacing: -1px;
                }

                .primary .usage-summary-value,
                .success .usage-summary-value {
                    color: #ffffff;
                }

                .usage-summary-decoration {
                    position: absolute;

                    right: -13px;
                    bottom: -22px;

                    font-size: 82px;

                    opacity: .055;

                    transform: rotate(-8deg);

                    pointer-events: none;
                }

                .primary .usage-summary-decoration,
                .success .usage-summary-decoration {
                    opacity: .10;
                }

                /* =================================================
                   INSIGHT ROW
                ================================================= */

                .usage-insight-row {
                    display: grid;

                    grid-template-columns:
                        1fr 1fr;

                    gap: 13px;

                    margin-bottom: 18px;
                }

                .usage-insight-card {
                    display: flex;
                    align-items: center;

                    min-height: 76px;

                    padding: 14px 16px;

                    border:
                        1px solid var(--ur-border);

                    border-radius: 12px;

                    background:
                        var(--ur-card);

                    box-shadow:
                        0 4px 15px
                        rgba(15, 23, 42, .035);
                }

                .usage-insight-icon {
                    width: 39px;
                    height: 39px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

                    margin-right: 12px;

                    border-radius: 10px;

                    background: #eff6ff;

                    color: var(--ur-blue);

                    font-size: 14px;
                }

                .usage-insight-content {
                    min-width: 0;
                }

                .usage-insight-label {
                    margin-bottom: 3px;

                    color: var(--ur-muted);

                    font-size: 8px;
                    font-weight: 800;

                    letter-spacing: .07em;
                    text-transform: uppercase;
                }

                .usage-insight-value {
                    color: var(--ur-text);

                    font-size: 14px;
                    font-weight: 850;

                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .usage-insight-value span {
                    color: var(--ur-blue);
                }

                /* =================================================
                   REPORT CONTENT
                ================================================= */

                #report-content {
                    width: 100%;

                    box-sizing: border-box;

                    padding: 24px;

                    border:
                        1px solid var(--ur-border);

                    border-radius: 14px;

                    background: #ffffff;

                    box-shadow:
                        0 8px 28px
                        rgba(15, 23, 42, .055);

                    overflow: hidden;
                }

                /* =================================================
                   REPORT HEADER
                ================================================= */

                .usage-report-header {
                    display: flex;
                    align-items: center;

                    gap: 16px;

                    padding-bottom: 17px;

                    border-bottom:
                        1px solid #e8edf3;

                    margin-bottom: 18px;
                }

                .usage-dict-logo {
                    width: 62px;
                    height: 62px;

                    object-fit: contain;

                    flex-shrink: 0;
                }

                .usage-report-heading {
                    min-width: 0;
                }

                .usage-report-kicker {
                    margin-bottom: 5px;

                    color: #2563eb;

                    font-size: 8px;
                    font-weight: 900;

                    letter-spacing: .12em;
                    text-transform: uppercase;
                }

                .usage-report-title {
                    margin: 0;

                    color: #172235;

                    font-size: 23px;
                    line-height: 1.1;
                    font-weight: 900;

                    letter-spacing: -.55px;

                    text-transform: uppercase;
                }

                .usage-report-subtitle {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 5px;

                    margin: 7px 0 0;

                    color: #718096;

                    font-size: 8px;
                    font-weight: 750;

                    line-height: 1.4;

                    letter-spacing: .06em;
                    text-transform: uppercase;
                }

                .usage-report-divider {
                    color: #cbd5e1;
                }

                /* =================================================
                   REPORT STATISTICS
                ================================================= */

                .usage-stats-grid {
                    display: grid;

                    grid-template-columns:
                        repeat(3, minmax(0, 1fr));

                    gap: 12px;

                    margin-bottom: 21px;
                }

                .usage-stat-card {
                    position: relative;

                    min-height: 108px;

                    padding: 17px;

                    display: flex;
                    align-items: center;

                    overflow: hidden;

                    border-radius: 11px;

                    box-sizing: border-box;
                }

                .usage-stat-total {
                    background:
                        linear-gradient(
                            135deg,
                            #3478f6,
                            #2058e8
                        );

                    color: #ffffff;

                    box-shadow:
                        0 7px 18px
                        rgba(37,99,235,.16);
                }

                .usage-stat-active {
                    background:
                        linear-gradient(
                            135deg,
                            #17283e,
                            #101c2d
                        );

                    color: #ffffff;

                    box-shadow:
                        0 7px 18px
                        rgba(15,23,42,.14);
                }

                .usage-stat-pending {
                    background:
                        linear-gradient(
                            135deg,
                            #ffffff,
                            #f8fafc
                        );

                    color: #172235;

                    border:
                        1px solid #e3e8ef;

                    box-shadow:
                        0 4px 13px
                        rgba(15,23,42,.035);
                }

                .usage-stat-icon {
                    width: 40px;
                    height: 40px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

                    margin-right: 13px;

                    border-radius: 50%;

                    background:
                        rgba(255,255,255,.14);

                    color: #ffffff;

                    font-size: 14px;
                }

                .usage-stat-pending
                .usage-stat-icon {
                    background: #eef2f7;
                    color: #64748b;
                }

                .usage-stat-content {
                    position: relative;

                    z-index: 2;
                }

                .usage-stat-label {
                    margin-bottom: 5px;

                    font-size: 8px;
                    font-weight: 800;

                    letter-spacing: .04em;

                    text-transform: uppercase;
                }

                .usage-stat-total
                .usage-stat-label {
                    color:
                        rgba(255,255,255,.84);
                }

                .usage-stat-active
                .usage-stat-label {
                    color:
                        rgba(255,255,255,.72);
                }

                .usage-stat-pending
                .usage-stat-label {
                    color: #64748b;
                }

                .usage-stat-value {
                    font-size: 31px;

                    line-height: 1;

                    font-weight: 900;

                    letter-spacing: -1px;
                }

                .usage-stat-watermark {
                    position: absolute;

                    right: 15px;
                    bottom: -3px;

                    font-size: 57px;

                    opacity: .09;

                    transform: rotate(-7deg);

                    pointer-events: none;
                }

                .usage-stat-pending
                .usage-stat-watermark {
                    color: #64748b;
                    opacity: .07;
                }

                /* =================================================
                   SECTION HEADER
                ================================================= */

                .usage-breakdown-section {
                    margin-top: 4px;
                }

                .usage-section-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;

                    gap: 12px;

                    margin-bottom: 10px;
                }

                .usage-section-title-wrap {
                    display: flex;
                    align-items: center;

                    gap: 9px;
                }

                .usage-section-title-icon {
                    width: 28px;
                    height: 28px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 7px;

                    background: #eff6ff;

                    color: #2563eb;

                    font-size: 11px;
                }

                .usage-section-title {
                    margin: 0;

                    color: #26354a;

                    font-size: 10px;
                    font-weight: 900;

                    letter-spacing: .05em;

                    text-transform: uppercase;
                }

                .usage-section-caption {
                    color: #94a3b8;

                    font-size: 7px;
                    font-weight: 700;

                    text-transform: uppercase;

                    letter-spacing: .04em;
                }

                /* =================================================
                   VENUE LIST
                ================================================= */

                .usage-venue-list {
                    display: flex;
                    flex-direction: column;

                    gap: 6px;
                }

                .usage-venue-row {
                    display: flex;
                    align-items: center;

                    gap: 12px;

                    min-height: 43px;

                    padding: 7px 10px;

                    border:
                        1px solid #e6eaf0;

                    border-radius: 8px;

                    background:
                        linear-gradient(
                            90deg,
                            #ffffff,
                            #fbfcfe
                        );

                    box-sizing: border-box;

                    transition:
                        border-color .18s ease,
                        box-shadow .18s ease,
                        transform .18s ease;
                }

                .usage-venue-row:hover {
                    border-color: #cdd9ec;

                    box-shadow:
                        0 4px 12px
                        rgba(15,23,42,.045);

                    transform: translateX(1px);
                }

                .usage-venue-name {
                    width: 190px;

                    flex-shrink: 0;

                    color: #334155;

                    font-size: 8px;
                    font-weight: 750;

                    line-height: 1.3;

                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .usage-bar-container {
                    flex: 1;

                    height: 8px;

                    min-width: 40px;

                    overflow: hidden;

                    border-radius: 999px;

                    background: #edf1f5;
                }

                .usage-bar {
                    height: 100%;

                    min-width: 2px;

                    border-radius: 999px;

                    background:
                        linear-gradient(
                            90deg,
                            #3478f6,
                            #6690f5
                        );

                    transition:
                        width .7s ease;
                }

                .usage-booking-info {
                    width: 78px;

                    flex-shrink: 0;

                    display: flex;
                    align-items: baseline;
                    justify-content: flex-end;

                    gap: 5px;
                }

                .usage-booking-number {
                    color: #2563eb;

                    font-size: 12px;
                    font-weight: 900;
                }

                .usage-booking-label {
                    color: #8792a3;

                    font-size: 6px;
                    font-weight: 750;

                    text-transform: uppercase;
                }

                /* =================================================
                   EMPTY
                ================================================= */

                .usage-empty-state {
                    min-height: 100px;

                    display: flex;
                    flex-direction: column;

                    align-items: center;
                    justify-content: center;

                    gap: 7px;

                    color: #94a3b8;

                    font-size: 10px;
                    font-weight: 650;

                    border:
                        1px dashed #dbe2ea;

                    border-radius: 9px;

                    background: #f8fafc;
                }

                .usage-empty-state i {
                    font-size: 20px;
                    opacity: .65;
                }

                /* =================================================
                   RESPONSIVE
                ================================================= */

                @media (max-width: 950px) {

                    .usage-summary {
                        grid-template-columns:
                            repeat(2, minmax(0, 1fr));
                    }

                    .usage-venue-name {
                        width: 155px;
                    }
                }

                @media (max-width: 720px) {

                    .usage-report-page {
                        padding:
                            20px 14px 35px;
                    }

                    .usage-page-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .usage-header-actions {
                        width: 100%;
                    }

                    .usage-export-button {
                        flex: 1;
                    }

                    .usage-summary {
                        grid-template-columns: 1fr;
                    }

                    .usage-insight-row {
                        grid-template-columns: 1fr;
                    }

                    #report-content {
                        padding: 18px 14px 20px;
                    }

                    .usage-stats-grid {
                        grid-template-columns: 1fr;
                    }

                    .usage-report-header {
                        align-items: flex-start;
                    }

                    .usage-report-title {
                        font-size: 19px;
                    }

                    .usage-venue-row {
                        display: grid;

                        grid-template-columns:
                            minmax(0, 1fr)
                            auto;

                        gap: 7px;
                    }

                    .usage-venue-name {
                        width: auto;

                        grid-column:
                            1 / -1;
                    }

                    .usage-bar-container {
                        width: 100%;
                    }

                    .usage-booking-info {
                        width: auto;
                    }
                }

                @media (max-width: 480px) {

                    .usage-report-page {
                        padding:
                            16px 10px 30px;
                    }

                    .usage-page-title {
                        font-size: 23px;
                    }

                    .usage-page-description {
                        font-size: 11px;
                    }

                    .usage-header-actions {
                        flex-direction: column;
                    }

                    .usage-export-button {
                        width: 100%;
                    }

                    #report-content {
                        padding:
                            15px 11px 18px;

                        border-radius: 9px;
                    }

                    .usage-dict-logo {
                        width: 50px;
                        height: 50px;
                    }

                    .usage-report-title {
                        font-size: 16px;
                    }

                    .usage-report-subtitle {
                        font-size: 6px;
                    }

                    .usage-stat-card {
                        min-height: 94px;
                    }

                    .usage-stat-value {
                        font-size: 28px;
                    }

                    .usage-section-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .usage-section-caption {
                        margin-left: 37px;
                    }

                    .usage-venue-row {
                        padding: 8px;
                    }
                }

                /* =================================================
                   PRINT
                ================================================= */

                @media print {

                    .usage-report-page {
                        max-width: none;

                        padding: 0;

                        background: #ffffff !important;
                    }

                    .usage-page-header,
                    .usage-insight-row {
                        display: none;
                    }

                    #report-content {
                        border: none;

                        box-shadow: none;

                        border-radius: 0;

                        padding: 20px;
                    }
                }

            `}),e.jsxs("main",{className:"usage-report-page",children:[e.jsxs("header",{className:"usage-page-header",children:[e.jsxs("div",{className:"usage-header-content",children:[e.jsxs("div",{className:"usage-eyebrow",children:[e.jsx("span",{className:"usage-eyebrow-dot"}),"Facility Analytics"]}),e.jsx("h2",{className:"usage-page-title",children:"Usage Analysis"}),e.jsx("p",{className:"usage-page-description",children:"Operational data and facility utilization metrics."})]}),e.jsxs("div",{className:"usage-header-actions",children:[e.jsx(M,{}),e.jsxs("button",{type:"button",className:"usage-export-button",onClick:A,disabled:v,children:[e.jsx("i",{className:v?"fas fa-spinner fa-spin":"fas fa-file-pdf"}),e.jsx("span",{children:v?"Generating...":"Export Report"})]})]})]}),e.jsxs("section",{className:"usage-summary",children:[e.jsxs("div",{className:"usage-summary-card primary",children:[e.jsx("div",{className:"usage-summary-icon",children:e.jsx("i",{className:"fas fa-file-lines"})}),e.jsx("div",{className:"usage-summary-label",children:"Total Requests"}),e.jsx("div",{className:"usage-summary-value",children:n.length}),e.jsx("div",{className:"usage-summary-decoration",children:e.jsx("i",{className:"fas fa-clipboard-list"})})]}),e.jsxs("div",{className:"usage-summary-card success",children:[e.jsx("div",{className:"usage-summary-icon",children:e.jsx("i",{className:"fas fa-calendar-check"})}),e.jsx("div",{className:"usage-summary-label",children:"Confirmed Missions"}),e.jsx("div",{className:"usage-summary-value",children:o.length}),e.jsx("div",{className:"usage-summary-decoration",children:e.jsx("i",{className:"fas fa-check-circle"})})]}),e.jsxs("div",{className:"usage-summary-card warning",children:[e.jsx("div",{className:"usage-summary-icon",children:e.jsx("i",{className:"fas fa-hourglass-half"})}),e.jsx("div",{className:"usage-summary-label",children:"Pending Review"}),e.jsx("div",{className:"usage-summary-value",children:z.length}),e.jsx("div",{className:"usage-summary-decoration",children:e.jsx("i",{className:"fas fa-clock"})})]}),e.jsxs("div",{className:"usage-summary-card info",children:[e.jsx("div",{className:"usage-summary-icon",children:e.jsx("i",{className:"fas fa-chart-pie"})}),e.jsx("div",{className:"usage-summary-label",children:"Approval Rate"}),e.jsxs("div",{className:"usage-summary-value",children:[O,"%"]}),e.jsx("div",{className:"usage-summary-decoration",children:e.jsx("i",{className:"fas fa-chart-line"})})]})]}),e.jsxs("section",{className:"usage-insight-row",children:[e.jsxs("div",{className:"usage-insight-card",children:[e.jsx("div",{className:"usage-insight-icon",children:e.jsx("i",{className:"fas fa-building"})}),e.jsxs("div",{className:"usage-insight-content",children:[e.jsx("div",{className:"usage-insight-label",children:"Facilities Monitored"}),e.jsxs("div",{className:"usage-insight-value",children:[f.length," ",e.jsx("span",{children:f.length===1?"Facility":"Facilities"})]})]})]}),e.jsxs("div",{className:"usage-insight-card",children:[e.jsx("div",{className:"usage-insight-icon",children:e.jsx("i",{className:"fas fa-ranking-star"})}),e.jsxs("div",{className:"usage-insight-content",children:[e.jsx("div",{className:"usage-insight-label",children:"Highest Utilized Venue"}),e.jsx("div",{className:"usage-insight-value",children:(N==null?void 0:N.name)||"No venue data available"})]})]})]}),e.jsxs("div",{id:"report-content",children:[e.jsxs("div",{className:"usage-report-header",children:[e.jsx("img",{src:"/dict.png",alt:"DICT",className:"usage-dict-logo"}),e.jsxs("div",{className:"usage-report-heading",children:[e.jsx("div",{className:"usage-report-kicker",children:"Department of Information and Communications Technology"}),e.jsx("h1",{className:"usage-report-title",children:"Facility Usage Analysis"}),e.jsxs("p",{className:"usage-report-subtitle",children:["Regional Operational Intelligence",e.jsx("span",{className:"usage-report-divider",children:"|"}),D]})]})]}),e.jsxs("div",{className:"usage-stats-grid",children:[e.jsxs("div",{className:"usage-stat-card usage-stat-total",children:[e.jsx("div",{className:"usage-stat-icon",children:e.jsx("i",{className:"fas fa-file-lines"})}),e.jsxs("div",{className:"usage-stat-content",children:[e.jsx("div",{className:"usage-stat-label",children:"Total Requests"}),e.jsx("div",{className:"usage-stat-value",children:n.length})]}),e.jsx("div",{className:"usage-stat-watermark",children:e.jsx("i",{className:"fas fa-clipboard-list"})})]}),e.jsxs("div",{className:"usage-stat-card usage-stat-active",children:[e.jsx("div",{className:"usage-stat-icon",children:e.jsx("i",{className:"fas fa-check"})}),e.jsxs("div",{className:"usage-stat-content",children:[e.jsx("div",{className:"usage-stat-label",children:"Active Missions (Confirmed)"}),e.jsx("div",{className:"usage-stat-value",children:o.length})]}),e.jsx("div",{className:"usage-stat-watermark",children:e.jsx("i",{className:"fas fa-calendar-check"})})]}),e.jsxs("div",{className:"usage-stat-card usage-stat-pending",children:[e.jsx("div",{className:"usage-stat-icon",children:e.jsx("i",{className:"fas fa-hourglass-half"})}),e.jsxs("div",{className:"usage-stat-content",children:[e.jsx("div",{className:"usage-stat-label",children:"Pending Review"}),e.jsx("div",{className:"usage-stat-value",children:z.length})]}),e.jsx("div",{className:"usage-stat-watermark",children:e.jsx("i",{className:"fas fa-clock"})})]})]}),e.jsxs("section",{className:"usage-breakdown-section",children:[e.jsxs("div",{className:"usage-section-header",children:[e.jsxs("div",{className:"usage-section-title-wrap",children:[e.jsx("div",{className:"usage-section-title-icon",children:e.jsx("i",{className:"fas fa-chart-line"})}),e.jsx("h4",{className:"usage-section-title",children:"Venue Utilization Breakdown"})]}),e.jsx("div",{className:"usage-section-caption",children:"Confirmed bookings by facility"})]}),e.jsx("div",{className:"usage-venue-list",children:p.length===0?e.jsxs("div",{className:"usage-empty-state",children:[e.jsx("i",{className:"fas fa-chart-column"}),e.jsx("span",{children:"No venue data available."})]}):p.map(a=>{const s=a.count/(o.length||1)*100;return e.jsxs("div",{className:"usage-venue-row",children:[e.jsx("div",{className:"usage-venue-name",title:a.name,children:a.name}),e.jsx("div",{className:"usage-bar-container",children:e.jsx("div",{className:"usage-bar",style:{width:`${Math.min(s,100)}%`}})}),e.jsxs("div",{className:"usage-booking-info",children:[e.jsx("span",{className:"usage-booking-number",children:a.count}),e.jsx("span",{className:"usage-booking-label",children:"Bookings"})]})]},a.name)})})]})]})]})]})}export{L as default};

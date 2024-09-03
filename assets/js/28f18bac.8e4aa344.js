"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[36e3],{111411:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>y,contentTitle:()=>j,default:()=>D,frontMatter:()=>b,metadata:()=>k,toc:()=>R});var l=a(785893),r=a(511151),t=a(168562),i=a.n(t),n=(a(69957),a(496463)),o=(a(318438),a(998439)),d=a.n(o),p=a(534168),m=a.n(p),c=a(603655),h=a.n(c),u=a(313503),x=a.n(u),f=a(82479),w=a.n(f),g=a(555199),v=(a(645774),a(424455));const b={id:"get-workflow-session-upload",sidebar_label:"Retrieves the URL of an attachment attribute value from a workflow session",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vt9v4kYQ/ldG89RKJpCEtFdLfUjVtKLq3VUkaR9O6DR4x7AXe9fZHyTI8v9ezRoIOWjanE59AbM76/2+mW++oUXbsKOgrZkozHHB4S/r7srKPlyz99qa26aypDBDxb5wupFQzHHKwWlesYewZLid/g62BDJAIVCxrNkEeXR6HgPDiqrIUDpbA8HD5v3g+wsww0ALj/kH/HzL4yzDhhzVHNhJSIuGasYctUDSgqShsDyAN/lZ8Ag0O//ERYBgwW0gZxAbRYEzsA4UVxwYM3R8H7VjhXlwkTP0xZJrwrzFsG7kRh+cNgvMsLSupoA5xphQ8CPVTSUhp2fj79Sb+fmAirMfBuPR6cXgzenFeKCYxuPzMX1/XhJ2XbZjsUvRx3/hc7Nk0GrL6ViS/18KM7nNN9Z49nLB2WgkX89BXz02XARWsA2VKpCoQcvafWQfMMPCmsAmyHlqmkoXSY7DT15e0h6y6CuKGTZOxBt0DyG66mWqrko5IvXeVOs+R12XYdAhMb91FXadrIyPkfmJFEx7zDCAaGheJT6FlcwFPnkNE2v4fZnk/DmnLZqJSWn6TY6KYP4p7k+JStdcOWedx27Wk7g4RmJiAjtDFVyzW7GDdAYG0hrRGVZgDUSzJKMqVsCPBaeT/lXkXi4Ty5WHyC6hZu9pwdCvz7VZJK338fsSvbbOrcHbmsNSoh6kDx6cNYtUv8Re9uzG0ASC9FSOw63BfNwazLDVqhvG5HHDdr8dO8zQpyz1vpPkhcsQGp8Ph21gQya8o5q7E2MN101l18wnha2H1GjMcEVOi0gS66fwnnpJsRJRUlFzYQ/bPYWDuASQ93ohtRGxRR9szU6IzgRfEZ0O6wRwzuTYXUZh+mG2v30tpelx7AftKiWkcGMX8rsPwmzz8Mu2g27sHRsI8vnj2kbXP4qhoTallTdKunoKpyejk9GeUN9dTd/C5R+To9a23YSCDMwZou/5UlGw90BGQW2VLtcgWbXRi6XY6Ar2oA0kMGxW2lkjrihyrXTBxqd0b8z27eQmYW2sDzWZvZ2vOsyesWuf2uYrj8y+dIEfw7CpSItLbC2wV/vTON2pHTPMk9/H7VDPn02gWYZL64Ocbds5eb51VdfJ8n1kJzKbPek6iU5pL88K85Iqzy+w/2a6mU7fwuuH81G2m0Uy69RtVZRfmOEdr/s/COKbXwTwP03bL8D0LNndrMtwyaTYpVT2IZeFeO7e4QOvlc7e2duvV6LpvwFe6WD4",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Retrieves the URL of an attachment attribute value from a workflow session' (get-workflow-session-upload)"},j=void 0,k={id:"api/nerm/v1/get-workflow-session-upload",title:"get-workflow-session-upload",description:"<Heading",source:"@site/docs/api/nerm/v1/get-workflow-session-upload.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/get-workflow-session-upload",permalink:"/docs/api/nerm/v1/get-workflow-session-upload",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Retrieves the URL of an attachment attribute value from a workflow session' (get-workflow-session-upload)",tags:[],version:"current",frontMatter:{id:"get-workflow-session-upload",sidebar_label:"Retrieves the URL of an attachment attribute value from a workflow session",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vt9v4kYQ/ldG89RKJpCEtFdLfUjVtKLq3VUkaR9O6DR4x7AXe9fZHyTI8v9ezRoIOWjanE59AbM76/2+mW++oUXbsKOgrZkozHHB4S/r7srKPlyz99qa26aypDBDxb5wupFQzHHKwWlesYewZLid/g62BDJAIVCxrNkEeXR6HgPDiqrIUDpbA8HD5v3g+wsww0ALj/kH/HzL4yzDhhzVHNhJSIuGasYctUDSgqShsDyAN/lZ8Ag0O//ERYBgwW0gZxAbRYEzsA4UVxwYM3R8H7VjhXlwkTP0xZJrwrzFsG7kRh+cNgvMsLSupoA5xphQ8CPVTSUhp2fj79Sb+fmAirMfBuPR6cXgzenFeKCYxuPzMX1/XhJ2XbZjsUvRx3/hc7Nk0GrL6ViS/18KM7nNN9Z49nLB2WgkX89BXz02XARWsA2VKpCoQcvafWQfMMPCmsAmyHlqmkoXSY7DT15e0h6y6CuKGTZOxBt0DyG66mWqrko5IvXeVOs+R12XYdAhMb91FXadrIyPkfmJFEx7zDCAaGheJT6FlcwFPnkNE2v4fZnk/DmnLZqJSWn6TY6KYP4p7k+JStdcOWedx27Wk7g4RmJiAjtDFVyzW7GDdAYG0hrRGVZgDUSzJKMqVsCPBaeT/lXkXi4Ty5WHyC6hZu9pwdCvz7VZJK338fsSvbbOrcHbmsNSoh6kDx6cNYtUv8Re9uzG0ASC9FSOw63BfNwazLDVqhvG5HHDdr8dO8zQpyz1vpPkhcsQGp8Ph21gQya8o5q7E2MN101l18wnha2H1GjMcEVOi0gS66fwnnpJsRJRUlFzYQ/bPYWDuASQ93ohtRGxRR9szU6IzgRfEZ0O6wRwzuTYXUZh+mG2v30tpelx7AftKiWkcGMX8rsPwmzz8Mu2g27sHRsI8vnj2kbXP4qhoTallTdKunoKpyejk9GeUN9dTd/C5R+To9a23YSCDMwZou/5UlGw90BGQW2VLtcgWbXRi6XY6Ar2oA0kMGxW2lkjrihyrXTBxqd0b8z27eQmYW2sDzWZvZ2vOsyesWuf2uYrj8y+dIEfw7CpSItLbC2wV/vTON2pHTPMk9/H7VDPn02gWYZL64Ocbds5eb51VdfJ8n1kJzKbPek6iU5pL88K85Iqzy+w/2a6mU7fwuuH81G2m0Uy69RtVZRfmOEdr/s/COKbXwTwP03bL8D0LNndrMtwyaTYpVT2IZeFeO7e4QOvlc7e2duvV6LpvwFe6WD4",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Retrieves the URL of an attachment attribute value from a workflow session' (get-workflow-session-upload)"},sidebar:"nermSideBar",previous:{title:"Update a workflow session by id",permalink:"/docs/api/nerm/v1/patch-workflow-session"},next:{title:"Uploads a new attachment attribute value to a workflow session",permalink:"/docs/api/nerm/v1/post-workflow-session-upload"}},y={},R=[];function z(e){const s={p:"p",...(0,r.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Retrieves the URL of an attachment attribute value from a workflow session"}),"\n",(0,l.jsx)(n.Z,{method:"get",path:"/workflow_sessions/{id}/upload/{attribute_id}"}),"\n",(0,l.jsx)(s.p,{children:"Retrieves the URL of an attachment attribute value from a workflow session"}),"\n",(0,l.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)(m(),{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}}}),(0,l.jsx)(m(),{className:"paramsItem",param:{name:"attribute_id",in:"path",description:"The id of the attachment attribute",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}}})]})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(i(),{label:void 0,id:void 0,children:[(0,l.jsxs)(v.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Expected response to a valid request"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(w(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(x(),{collapsible:!1,name:"url",required:!1,schemaName:"url",qualifierMessage:void 0,schema:{type:"string",format:"url",readOnly:!0}})})]})}),(0,l.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(h(),{responseExample:'{\n  "url": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(v.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Bad Request - unable to complete."})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(w(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,l.jsx)(s.p,{children:"oneOf"})}),(0,l.jsxs)(w(),{children:[(0,l.jsx)(v.default,{label:"InvalidJson",value:"0-item-properties",children:(0,l.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."}})}),(0,l.jsxs)(v.default,{label:"ValidationErrors",value:"1-item-properties",children:[(0,l.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"}}),(0,l.jsx)(x(),{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}}})]})]})]})})]})}),(0,l.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(h(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,l.jsxs)(v.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error - returned on unhandled exceptions."})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(w(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"}})})]})}),(0,l.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(h(),{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json"})})]})})})})]})]})})})]})}function D(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(z,{...e})}):z(e)}}}]);
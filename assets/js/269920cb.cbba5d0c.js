"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[14241],{80585:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=i(785893),r=i(511151);const s={id:"identity-attribute",title:"Identity Attribute",pagination_label:"Identity Attribute",sidebar_label:"Identity Attribute",sidebar_class_name:"identityAttribute",keywords:["transforms","operations","identity","attribute"],description:"Get a user's identity attribute's value.",slug:"/extensibility/transforms/operations/identity-attribute",tags:["Transforms","Transform Operations"]},a=void 0,o={id:"extensibility/transforms/operations/identity-attribute",title:"Identity Attribute",description:"Get a user's identity attribute's value.",source:"@site/docs/extensibility/transforms/operations/identity-attribute.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/identity-attribute",permalink:"/docs/extensibility/transforms/operations/identity-attribute",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/identity-attribute.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,frontMatter:{id:"identity-attribute",title:"Identity Attribute",pagination_label:"Identity Attribute",sidebar_label:"Identity Attribute",sidebar_class_name:"identityAttribute",keywords:["transforms","operations","identity","attribute"],description:"Get a user's identity attribute's value.",slug:"/extensibility/transforms/operations/identity-attribute",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Get Reference Identity Attribute",permalink:"/docs/extensibility/transforms/operations/get-reference-identity-attribute"},next:{title:"Index Of",permalink:"/docs/extensibility/transforms/operations/index-of"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function u(t){const e={admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(e.p,{children:"Use the identity attribute transform to get the value of a user's identity attribute. This transform is often useful within a source's account create or disable profile."}),"\n",(0,n.jsx)(e.admonition,{title:"Other Considerations",type:"note",children:(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["This transform is ",(0,n.jsx)(e.strong,{children:"not"})," intended for use within an another identity profile attribute's calculation. Identity attribute calculations are multi-threaded processes, and there is no guarantee that a specific attribute has current data, or even exists, at the time of calculation within any given transform. ",(0,n.jsx)(e.em,{children:"Referencing identity attributes within another identity attribute's calculation can lead to identity exceptions."})]}),"\n"]})}),"\n",(0,n.jsx)(e.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,n.jsxs)(e.p,{children:["The transform for identity attributes requires the desired identity attribute's system ",(0,n.jsx)(e.code,{children:"name,"})," along with the ",(0,n.jsx)(e.code,{children:"type"})," and ",(0,n.jsx)(e.code,{children:"name"})," attributes:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-json",children:'{\n  "attributes": {\n    "name": "email"\n  },\n  "type": "identityAttribute",\n  "name": "Identity Attribute Transform"\n}\n'})}),"\n",(0,n.jsx)(e.h2,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Required Attributes"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"type"})," - This must always be set to ",(0,n.jsx)(e.code,{children:"identityAttribute"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"attributes.name"})," - The system (camel-cased) name of the identity attribute to bring in."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Optional Attributes"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,n.jsx)(e.code,{children:"true"})," or ",(0,n.jsx)(e.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"input"})," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(e.p,{children:"This transform returns a user's SailPoint User Name attribute."}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-json",children:'{\n  "attributes": {\n    "name": "uid"\n  },\n  "type": "identityAttribute",\n  "name": "Identity Attribute Transform"\n}\n'})}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)("p",{children:"\xa0"}),"\n",(0,n.jsx)(e.p,{children:"This transform returns a user's Employee Number attribute."}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-json",children:'{\n  "attributes": {\n    "name": "identificationNumber"\n  },\n  "type": "identityAttribute",\n  "name": "Identity Attribute Transform"\n}\n'})})]})}function c(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(u,{...t})}):u(t)}}}]);
"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[51524],{293180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=n(785893),r=n(511151),c=n(841282),s=n(476828);const a={id:"service-desk-integration",title:"Service Desk Integration",description:"Service Desk Integration",custom_edit_url:null},o=void 0,l={id:"api/beta/service-desk-integration",title:"Service Desk Integration",description:"Service Desk Integration",source:"@site/docs/api/beta/service-desk-integration.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/service-desk-integration",permalink:"/docs/api/beta/service-desk-integration",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"service-desk-integration",title:"Service Desk Integration",description:"Service Desk Integration",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"Update Segment",permalink:"/docs/api/beta/patch-segment"},next:{title:"List existing Service Desk Integrations",permalink:"/docs/api/beta/get-service-desk-integration-list"}},d={},m=[];function u(e){const t={a:"a",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Use this API to build an integration between Identity Security Cloud and a service desk ITSM (IT service management) solution.\nOnce an administrator builds this integration between Identity Security Cloud and a service desk, users can use Identity Security Cloud to raise and track tickets that are synchronized between Identity Security Cloud and the service desk."}),"\n",(0,i.jsx)(t.p,{children:"In Identity Security Cloud, administrators can create a service desk integration (sometimes also called an SDIM, or Service Desk Integration Module) by going to Admin > Connections > Service Desk and selecting 'Create.'"}),"\n",(0,i.jsxs)(t.p,{children:["To create a Generic Service Desk integration, for example, administrators must provide the required information on the General Settings page, the Connectivity and Authentication information, Ticket Creation information, Status Mapping information, and Requester Source information on the Configure page.\nRefer to ",(0,i.jsx)(t.a,{href:"https://documentation.sailpoint.com/connectors/generic_sd/help/integrating_generic_service_desk/intro.html",children:"Integrating SailPoint with Generic Service Desk"})," for more information about the process of setting up a Generic Service Desk in Identity Security Cloud."]}),"\n",(0,i.jsx)(t.p,{children:"Administrators can create various service desk integrations, all with their own nuances.\nThe following service desk integrations are available:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://documentation.sailpoint.com/connectors/atlassian/jira_cloud/help/integrating_jira_cloud_sd/introduction.html",children:"Atlassian Cloud Jira Service Management"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://documentation.sailpoint.com/connectors/atlassian/jira_server/help/integrating_jira_server_sd/introduction.html",children:"Atlassian Server Jira Service Management"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://documentation.sailpoint.com/connectors/bmc/helix_ITSM_sd/help/integrating_bmc_helix_itsm_sd/intro.html",children:"BMC Helix ITSM Service Desk"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://documentation.sailpoint.com/connectors/bmc/helix_remedyforce_sd/help/integrating_bmc_helix_remedyforce_sd/intro.html",children:"BMC Helix Remedyforce Service Desk"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://documentation.sailpoint.com/connectors/generic_sd/help/integrating_generic_service_desk/intro.html",children:"Generic Service Desk"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://documentation.sailpoint.com/connectors/servicenow/sdim/help/integrating_servicenow_sdim/intro.html",children:"ServiceNow Service Desk"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://documentation.sailpoint.com/connectors/zendesk/help/integrating_zendesk_sd/introduction.html",children:"Zendesk Service Desk"})}),"\n"]}),"\n"]}),"\n","\n",(0,i.jsx)(c.Z,{items:(0,s.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>C});var i=n(667294),r=n(490512),c=n(476828),s=n(370393),a=n(585597),o=n(935096),l=n(633084),d=n(555199);const m={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n(799603),p=n(921702);function h({href:e,children:t}){return i.createElement(s.Z,{href:e,className:(0,r.Z)("card padding--lg",m.cardContainer)},t)}function g({href:e,icon:t,title:n,description:c}){return i.createElement(h,{href:e},i.createElement(d.default,{as:"h2",className:(0,r.Z)("text--truncate",m.cardTitle),title:n},t," ",n),c&&i.createElement("p",{className:(0,r.Z)("text--truncate",m.cardDescription),title:c},c))}function v({item:e}){var t;const n=(0,c.LM)(e),r=function(){const{selectMessage:e}=(0,a.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?i.createElement(g,{href:n,icon:i.createElement(u.G,{icon:p.cC_,className:m.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:r(e.items.length)}):null}function f({item:e}){var t,n;const r=(0,o.Z)(e.href)?i.createElement(u.G,{icon:p.FL8,className:m.docCardIcon}):i.createElement(u.G,{icon:p.wlW,className:m.docCardIcon}),s=(0,c.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(g,{href:e.href,icon:r,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==s?void 0:s.description)&&"<span"!=(null==s?void 0:s.description))?null==s?void 0:s.description:e.label})}function k({item:e}){switch(e.type){case"link":return i.createElement(f,{item:e});case"category":return i.createElement(v,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var _=Object.defineProperty,x=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))j.call(t,n)&&b(e,n,t[n]);if(x)for(var n of x(t))S.call(t,n)&&b(e,n,t[n]);return e};function I({className:e}){const t=(0,c.jA)();return i.createElement(C,{items:t.items,className:e})}function C(e){const{items:t,className:n}=e;if(!t)return i.createElement(I,y({},e));const s=(0,c.MN)(t);return i.createElement("section",{className:(0,r.Z)("row",n)},s.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(k,{item:e})))))}}}]);
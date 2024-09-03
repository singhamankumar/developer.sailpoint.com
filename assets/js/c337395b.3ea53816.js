"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[26040],{983880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(785893),i=r(511151),o=r(841282),a=r(476828);const s={id:"reporting",title:"Reporting",pagination_label:"Reporting",sidebar_label:"Reporting",sidebar_position:1,sidebar_class_name:"reporting",keywords:["reporting"],description:"Collect data reports from ISC.",slug:"/reporting",tags:["reporting"]},c=void 0,l={id:"reporting",title:"Reporting",description:"Collect data reports from ISC.",source:"@site/docs/reporting.md",sourceDirName:".",slug:"/reporting",permalink:"/docs/reporting",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/reporting.md",tags:[{inline:!0,label:"reporting",permalink:"/docs/tags/reporting"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,sidebarPosition:1,frontMatter:{id:"reporting",title:"Reporting",pagination_label:"Reporting",sidebar_label:"Reporting",sidebar_position:1,sidebar_class_name:"reporting",keywords:["reporting"],description:"Collect data reports from ISC.",slug:"/reporting",tags:["reporting"]},sidebar:"openApiSidebar",previous:{title:"ADMIN",permalink:"/docs/tools/community-toolbox"},next:{title:"Access Intelligence Center",permalink:"/docs/reporting/access-intelligence-center"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Discuss",id:"discuss",level:2}];function m(e){const t={a:"a",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Data reporting refers to the process of collecting and presenting data in a structured format that makes the data accessible and easy to understand, which facilitates an organization's data-driven decisions. Identity Security Cloud (ISC) provides different data reporting options you can use to extract data from your tenant and make it presentable."}),"\n","\n",(0,n.jsx)(o.Z,{items:(0,a.jA)().items}),"\n",(0,n.jsx)(t.h2,{id:"discuss",children:"Discuss"}),"\n",(0,n.jsx)(t.p,{children:"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."}),"\n",(0,n.jsxs)(t.p,{children:["To learn more about ISC data reporting and discuss the different options with SailPoint Developer Community members, go to the ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss/c/isc/6",children:"SailPoint Developer Community Forum"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},841282:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(667294),i=r(490512),o=r(476828),a=r(370393),s=r(585597),c=r(935096),l=r(633084),d=r(555199);const p={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=r(799603),u=r(921702);function g({href:e,children:t}){return n.createElement(a.Z,{href:e,className:(0,i.Z)("card padding--lg",p.cardContainer)},t)}function f({href:e,icon:t,title:r,description:o}){return n.createElement(g,{href:e},n.createElement(d.default,{as:"h2",className:(0,i.Z)("text--truncate",p.cardTitle),title:r},t," ",r),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",p.cardDescription),title:o},o))}function h({item:e}){var t;const r=(0,o.LM)(e),i=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?n.createElement(f,{href:r,icon:n.createElement(m.G,{icon:u.cC_,className:p.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:i(e.items.length)}):null}function v({item:e}){var t,r;const i=(0,c.Z)(e.href)?n.createElement(m.G,{icon:u.FL8,className:p.docCardIcon}):n.createElement(m.G,{icon:u.wlW,className:p.docCardIcon}),a=(0,o.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(f,{href:e.href,icon:i,title:e.label,description:(null!=(r=e.description)?r:"<Heading"!=(null==a?void 0:a.description)&&"<span"!=(null==a?void 0:a.description))?null==a?void 0:a.description:e.label})}function b({item:e}){switch(e.type){case"link":return n.createElement(v,{item:e});case"category":return n.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,C=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&x(e,r,t[r]);if(C)for(var r of C(t))_.call(t,r)&&x(e,r,t[r]);return e};function I({className:e}){const t=(0,o.jA)();return n.createElement(j,{items:t.items,className:e})}function j(e){const{items:t,className:r}=e;if(!t)return n.createElement(I,E({},e));const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}}}]);
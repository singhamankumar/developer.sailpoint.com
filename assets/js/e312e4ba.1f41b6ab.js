"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[64744],{907379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var c=n(785893),a=n(511151),i=n(841282),r=n(476828);const s={id:"account-usages",title:"Account Usages",description:"Account Usages",custom_edit_url:null},o=void 0,l={id:"api/v3/account-usages",title:"Account Usages",description:"Account Usages",source:"@site/docs/api/v3/account-usages.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/account-usages",permalink:"/docs/api/v3/account-usages",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"account-usages",title:"Account Usages",description:"Account Usages",custom_edit_url:null},sidebar:"isc_v3_sidebar",previous:{title:"Get an Account Activity",permalink:"/docs/api/v3/get-account-activity"},next:{title:"Returns account usage insights",permalink:"/docs/api/v3/get-usages-by-account-id"}},u={},d=[];function m(e){const t={p:"p",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:"Use this API to implement account usage insight functionality.\nWith this functionality in place, administrators can gather information and insights about how their tenants' source accounts are being used.\nThis allows organizations to get the information they need to start optimizing and securing source account usage."}),"\n","\n",(0,c.jsx)(i.Z,{items:(0,r.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>x});var c=n(667294),a=n(490512),i=n(476828),r=n(370393),s=n(585597),o=n(935096),l=n(633084),u=n(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=n(799603),p=n(921702);function g({href:e,children:t}){return c.createElement(r.Z,{href:e,className:(0,a.Z)("card padding--lg",d.cardContainer)},t)}function f({href:e,icon:t,title:n,description:i}){return c.createElement(g,{href:e},c.createElement(u.default,{as:"h2",className:(0,a.Z)("text--truncate",d.cardTitle),title:n},t," ",n),i&&c.createElement("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:i},i))}function h({item:e}){var t;const n=(0,i.LM)(e),a=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?c.createElement(f,{href:n,icon:c.createElement(m.G,{icon:p.cC_,className:d.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:a(e.items.length)}):null}function v({item:e}){var t,n;const a=(0,o.Z)(e.href)?c.createElement(m.G,{icon:p.FL8,className:d.docCardIcon}):c.createElement(m.G,{icon:p.wlW,className:d.docCardIcon}),r=(0,i.xz)(null!=(t=e.docId)?t:void 0);return c.createElement(f,{href:e.href,icon:a,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==r?void 0:r.description)&&"<span"!=(null==r?void 0:r.description))?null==r?void 0:r.description:e.label})}function y({item:e}){switch(e.type){case"link":return c.createElement(v,{item:e});case"category":return c.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,E=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&N(e,n,t[n]);if(E)for(var n of E(t))_.call(t,n)&&N(e,n,t[n]);return e};function j({className:e}){const t=(0,i.jA)();return c.createElement(x,{items:t.items,className:e})}function x(e){const{items:t,className:n}=e;if(!t)return c.createElement(j,C({},e));const r=(0,i.MN)(t);return c.createElement("section",{className:(0,a.Z)("row",n)},r.map(((e,t)=>c.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},c.createElement(y,{item:e})))))}}}]);
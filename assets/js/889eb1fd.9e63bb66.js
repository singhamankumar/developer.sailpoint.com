"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[3522],{658051:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=i(785893),r=i(511151),a=i(841282),c=i(476828);const o={id:"iiq",title:"IdentityIQ",pagination_label:"IdentityIQ",sidebar_label:"IdentityIQ",sidebar_position:1,sidebar_class_name:"docs",keywords:["docs"],description:"Building extensibility in IdentityIQ",slug:"/iiq",tags:["docs"]},s=void 0,l={id:"iiq",title:"IdentityIQ",description:"Building extensibility in IdentityIQ",source:"@site/docs/iiq.md",sourceDirName:".",slug:"/iiq",permalink:"/docs/iiq",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/iiq.md",tags:[{inline:!0,label:"docs",permalink:"/docs/tags/docs"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,sidebarPosition:1,frontMatter:{id:"iiq",title:"IdentityIQ",pagination_label:"IdentityIQ",sidebar_label:"IdentityIQ",sidebar_position:1,sidebar_class_name:"docs",keywords:["docs"],description:"Building extensibility in IdentityIQ",slug:"/iiq",tags:["docs"]},sidebar:"iiqSideBar",next:{title:"Plugin Developer Guide",permalink:"/docs/iiq/plugin-developer-guide"}},d={},m=[];function u(e){return(0,n.jsx)(a.Z,{items:(0,c.jA)().items})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u()}},841282:(e,t,i)=>{i.d(t,{Z:()=>C});var n=i(667294),r=i(490512),a=i(476828),c=i(370393),o=i(585597),s=i(935096),l=i(633084),d=i(555199);const m={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=i(799603),p=i(921702);function f({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,r.Z)("card padding--lg",m.cardContainer)},t)}function y({href:e,icon:t,title:i,description:a}){return n.createElement(f,{href:e},n.createElement(d.default,{as:"h2",className:(0,r.Z)("text--truncate",m.cardTitle),title:i},t," ",i),a&&n.createElement("p",{className:(0,r.Z)("text--truncate",m.cardDescription),title:a},a))}function b({item:e}){var t;const i=(0,a.LM)(e),r=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?n.createElement(y,{href:i,icon:n.createElement(u.G,{icon:p.cC_,className:m.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:r(e.items.length)}):null}function g({item:e}){var t,i;const r=(0,s.Z)(e.href)?n.createElement(u.G,{icon:p.FL8,className:m.docCardIcon}):n.createElement(u.G,{icon:p.wlW,className:m.docCardIcon}),c=(0,a.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(y,{href:e.href,icon:r,title:e.label,description:(null!=(i=e.description)?i:"<Heading"!=(null==c?void 0:c.description)&&"<span"!=(null==c?void 0:c.description))?null==c?void 0:c.description:e.label})}function I({item:e}){switch(e.type){case"link":return n.createElement(g,{item:e});case"category":return n.createElement(b,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var h=Object.defineProperty,v=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,w=(e,t,i)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,N=(e,t)=>{for(var i in t||(t={}))_.call(t,i)&&w(e,i,t[i]);if(v)for(var i of v(t))E.call(t,i)&&w(e,i,t[i]);return e};function k({className:e}){const t=(0,a.jA)();return n.createElement(C,{items:t.items,className:e})}function C(e){const{items:t,className:i}=e;if(!t)return n.createElement(k,N({},e));const c=(0,a.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",i)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(I,{item:e})))))}}}]);
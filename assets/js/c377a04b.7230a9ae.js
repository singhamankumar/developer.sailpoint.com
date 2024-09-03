"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[46971],{708463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=n(785893),r=n(511151),o=n(841282),a=n(476828);n(365332),n(424455);const s={id:"docs",title:"Identity Security Cloud",pagination_label:"Docs",sidebar_label:"Docs",sidebar_position:1,sidebar_class_name:"docs",keywords:["docs"],description:"The Identity Security Cloud Developer Documentation.",slug:"/",tags:["docs"]},l=void 0,c={id:"docs",title:"Identity Security Cloud",description:"The Identity Security Cloud Developer Documentation.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/index.md",tags:[{inline:!0,label:"docs",permalink:"/docs/tags/docs"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,sidebarPosition:1,frontMatter:{id:"docs",title:"Identity Security Cloud",pagination_label:"Docs",sidebar_label:"Docs",sidebar_position:1,sidebar_class_name:"docs",keywords:["docs"],description:"The Identity Security Cloud Developer Documentation.",slug:"/",tags:["docs"]},sidebar:"openApiSidebar",next:{title:"Extensibility",permalink:"/docs/extensibility"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Discuss",id:"discuss",level:2}];function m(e){const t={a:"a",admonition:"admonition",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.admonition,{title:"What about IdentityNow?",type:"caution",children:(0,i.jsx)(t.p,{children:"Looking for IdentityNow? You're in the right place! IdentityNow has an updated brand in Identity Security Cloud."})}),"\n",(0,i.jsx)(t.p,{children:"Identity Security Cloud (ISC) is a unified, multi-tenant identity governance and security platform. ISC provides organizations with the ability to ensure that their users, known as identities in ISC, have secure access to different data sources, and it makes identity access management fast and easy."}),"\n",(0,i.jsx)(t.p,{children:"The ISC platform out of the box will often meet all your identity governance and security needs, but it's possible that it won't. The beauty of ISC is that even if it doesn't quite meet all your needs, you can extend the platform's functionality and build custom solutions that do!"}),"\n",(0,i.jsx)(t.p,{children:"The SailPoint Developer Documentation provides developers with all the information they need to extend their platforms' functionality and build their desired solutions. The developer documentation is written for developers of all experience levels, from nontechnical users exploring what's possible to advanced developers who live and breathe code."}),"\n",(0,i.jsx)(t.p,{children:"Check out the developer documentation and see what's possible!"}),"\n",(0,i.jsx)(t.admonition,{title:"Are you a partner?",type:"info",children:(0,i.jsxs)(t.p,{children:["The developer documentation is written for customers and partners who already have access to ISC. If you're interested in becoming a partner, go ",(0,i.jsx)(t.a,{href:"https://www.sailpoint.com/partners/become-partner/",children:"here"}),"."]})}),"\n","\n",(0,i.jsx)(o.Z,{items:(0,a.jA)().items}),"\n","\n",(0,i.jsx)(t.h2,{id:"discuss",children:"Discuss"}),"\n",(0,i.jsx)(t.p,{children:"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about ISC and discuss it with SailPoint Developer Community members, go to the ",(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss/c/isc/6",children:"SailPoint Developer Community Forum"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>S});var i=n(667294),r=n(490512),o=n(476828),a=n(370393),s=n(585597),l=n(935096),c=n(633084),d=n(555199);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=n(799603),p=n(921702);function h({href:e,children:t}){return i.createElement(a.Z,{href:e,className:(0,r.Z)("card padding--lg",u.cardContainer)},t)}function b({href:e,icon:t,title:n,description:o}){return i.createElement(h,{href:e},i.createElement(d.default,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:n},t," ",n),o&&i.createElement("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:o},o))}function f({item:e}){var t;const n=(0,o.LM)(e),r=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?i.createElement(b,{href:n,icon:i.createElement(m.G,{icon:p.cC_,className:u.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:r(e.items.length)}):null}function y({item:e}){var t,n;const r=(0,l.Z)(e.href)?i.createElement(m.G,{icon:p.FL8,className:u.docCardIcon}):i.createElement(m.G,{icon:p.wlW,className:u.docCardIcon}),a=(0,o.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(b,{href:e.href,icon:r,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==a?void 0:a.description)&&"<span"!=(null==a?void 0:a.description))?null==a?void 0:a.description:e.label})}function v({item:e}){switch(e.type){case"link":return i.createElement(y,{item:e});case"category":return i.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var g=Object.defineProperty,w=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&I(e,n,t[n]);if(w)for(var n of w(t))C.call(t,n)&&I(e,n,t[n]);return e};function j({className:e}){const t=(0,o.jA)();return i.createElement(S,{items:t.items,className:e})}function S(e){const{items:t,className:n}=e;if(!t)return i.createElement(j,E({},e));const a=(0,o.MN)(t);return i.createElement("section",{className:(0,r.Z)("row",n)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(v,{item:e})))))}},365332:(e,t,n)=>{n.d(t,{Z:()=>x});var i=n(667294),r=n(490512),o=n(8757),a=n(873276),s=n(254939);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&b(e,n,t[n]);return e},y=(e,t)=>d(e,u(t));function v({className:e,block:t,selectedValue:n,selectValue:a,tabValues:s}){const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{const t=e.currentTarget,i=c.indexOf(t),r=s[i].value;r!==n&&(d(t),a(r))},m=e=>{var t,n;let i=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;i=null!=(t=c[n])?t:c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;i=null!=(n=c[t])?n:c[c.length-1];break}}null==i||i.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},s.map((({value:e,label:t,attributes:o})=>i.createElement("li",y(f({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>c.push(e),onKeyDown:m,onClick:u},o),{className:(0,r.Z)("tabs__item",l.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function g({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=(0,a.Y)(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",l.tabList)},i.createElement(v,f(f({},t),e)),i.createElement(g,f(f({},t),e)))}function x(e){const t=(0,s.default)();return i.createElement(w,f({key:String(t)},e),(0,a.h)(e.children))}}}]);
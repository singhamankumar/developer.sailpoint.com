"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[11311],{316570:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=s(785893),c=s(511151),i=s(841282),r=s(476828);const a={id:"access-profiles",title:"Access Profiles",description:"Access Profiles",custom_edit_url:null},o=void 0,l={id:"api/beta/access-profiles",title:"Access Profiles",description:"Access Profiles",source:"@site/docs/api/beta/access-profiles.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/access-profiles",permalink:"/docs/api/beta/access-profiles",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"access-profiles",title:"Access Profiles",description:"Access Profiles",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"Get Access Model Metadata Value",permalink:"/docs/api/beta/get-access-model-metadata-attribute-value"},next:{title:"List Access Profiles",permalink:"/docs/api/beta/list-access-profiles"}},d={},p=[];function u(e){const t={a:"a",li:"li",p:"p",ul:"ul",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Use this API to implement and customize access profile functionality.\nWith this functionality in place, administrators can create access profiles and configure them for use throughout Identity Security Cloud, enabling users to get the access they need quickly and securely."}),"\n",(0,n.jsx)(t.p,{children:"Access profiles group entitlements, which represent access rights on sources."}),"\n",(0,n.jsx)(t.p,{children:"For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, 'Employees,' may represent the access all employees have at the organization, and a second, 'Developers,' may represent the access all developers have at the organization."}),"\n",(0,n.jsx)(t.p,{children:"An administrator can then create a broader set of access in the form of an access profile, 'AD Developers' grouping the 'Employees' entitlement with the 'Developers' entitlement."}),"\n",(0,n.jsx)(t.p,{children:"When users only need Active Directory employee access, they can request access to the 'Employees' entitlement."}),"\n",(0,n.jsx)(t.p,{children:"When users need both Active Directory employee and developer access, they can request access to the 'AD Developers' access profile."}),"\n",(0,n.jsx)(t.p,{children:"Access profiles are the most important units of access in Identity Security Cloud. Identity Security Cloud uses access profiles in many features, including the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Provisioning: When you use the Provisioning Service, lifecycle states and roles both grant access to users in the form of access profiles."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Certifications: You can approve or revoke access profiles in certification campaigns, just like entitlements."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Access Requests: You can assign access profiles to applications, and when a user requests access to the app associated with an access profile and someone approves the request, access is granted to both the application and its associated access profile."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Roles: You can group one or more access profiles into a role to quickly assign access items based on an identity's role."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In Identity Security Cloud, administrators can use the Access drop-down menu and select Access Profiles to view, configure, and delete existing access profiles, as well as create new ones.\nAdministrators can enable and disable an access profile, and they can also make the following configurations:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Manage Entitlements: Manage the profile's access by adding and removing entitlements."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Access Requests: Configure access profiles to be requestable and establish an approval process for any requests that the access profile be granted or revoked.\nDo not configure an access profile to be requestable without first establishing a secure access request approval process for the access profile."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Multiple Account Options: Define the logic Identity Security Cloud uses to provision access to an identity with multiple accounts on the source."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Refer to ",(0,n.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/access/access-profiles.html",children:"Managing Access Profiles"})," for more information about access profiles."]}),"\n","\n",(0,n.jsx)(i.Z,{items:(0,r.jA)().items})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},841282:(e,t,s)=>{s.d(t,{Z:()=>D});var n=s(667294),c=s(490512),i=s(476828),r=s(370393),a=s(585597),o=s(935096),l=s(633084),d=s(555199);const p={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=s(799603),h=s(921702);function m({href:e,children:t}){return n.createElement(r.Z,{href:e,className:(0,c.Z)("card padding--lg",p.cardContainer)},t)}function f({href:e,icon:t,title:s,description:i}){return n.createElement(m,{href:e},n.createElement(d.default,{as:"h2",className:(0,c.Z)("text--truncate",p.cardTitle),title:s},t," ",s),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",p.cardDescription),title:i},i))}function g({item:e}){var t;const s=(0,i.LM)(e),c=function(){const{selectMessage:e}=(0,a.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?n.createElement(f,{href:s,icon:n.createElement(u.G,{icon:h.cC_,className:p.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:c(e.items.length)}):null}function y({item:e}){var t,s;const c=(0,o.Z)(e.href)?n.createElement(u.G,{icon:h.FL8,className:p.docCardIcon}):n.createElement(u.G,{icon:h.wlW,className:p.docCardIcon}),r=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(f,{href:e.href,icon:c,title:e.label,description:(null!=(s=e.description)?s:"<Heading"!=(null==r?void 0:r.description)&&"<span"!=(null==r?void 0:r.description))?null==r?void 0:r.description:e.label})}function b({item:e}){switch(e.type){case"link":return n.createElement(y,{item:e});case"category":return n.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,x=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,w=(e,t,s)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,E=(e,t)=>{for(var s in t||(t={}))j.call(t,s)&&w(e,s,t[s]);if(x)for(var s of x(t))A.call(t,s)&&w(e,s,t[s]);return e};function C({className:e}){const t=(0,i.jA)();return n.createElement(D,{items:t.items,className:e})}function D(e){const{items:t,className:s}=e;if(!t)return n.createElement(C,E({},e));const r=(0,i.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",s)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}}}]);
"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[17147],{531823:(n,t,c)=>{c.r(t),c.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>r,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var e=c(785893),o=c(511151);const a={id:"account-unlock",title:"Account Unlock",pagination_label:"Account Unlock",sidebar_label:"Account Unlock",keywords:["connectivity","connectors","account unlock"],description:"Lock and unlock an account on the source.",slug:"/connectivity/saas-connectivity/commands/account-unlock",tags:["Connectivity","Connector Command"]},i=void 0,s={id:"connectivity/saas-connectivity/connector-commands/account-unlock",title:"Account Unlock",description:"Lock and unlock an account on the source.",source:"@site/docs/connectivity/saas-connectivity/connector-commands/account-unlock.md",sourceDirName:"connectivity/saas-connectivity/connector-commands",slug:"/connectivity/saas-connectivity/commands/account-unlock",permalink:"/docs/connectivity/saas-connectivity/commands/account-unlock",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/account-unlock.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,frontMatter:{id:"account-unlock",title:"Account Unlock",pagination_label:"Account Unlock",sidebar_label:"Account Unlock",keywords:["connectivity","connectors","account unlock"],description:"Lock and unlock an account on the source.",slug:"/connectivity/saas-connectivity/commands/account-unlock",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Read",permalink:"/docs/connectivity/saas-connectivity/commands/account-read"},next:{title:"Account Update",permalink:"/docs/connectivity/saas-connectivity/commands/account-update"}},l={},d=[{value:"Example StdAccountUnlockInput",id:"example-stdaccountunlockinput",level:3},{value:"Example StdAccountUnlockOutput",id:"example-stdaccountunlockoutput",level:3},{value:"Description",id:"description",level:2}];function u(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.table,{children:[(0,e.jsx)(t.thead,{children:(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,e.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,e.jsxs)(t.tbody,{children:[(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{style:{textAlign:"left"},children:"Input"}),(0,e.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountUnlockInput"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,e.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountUnlockOutput"})]})]})]}),"\n",(0,e.jsx)(t.h3,{id:"example-stdaccountunlockinput",children:"Example StdAccountUnlockInput"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-javascript",children:'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n'})}),"\n",(0,e.jsx)(t.h3,{id:"example-stdaccountunlockoutput",children:"Example StdAccountUnlockOutput"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-javascript",children:'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,e.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,e.jsx)(t.p,{children:"The account lock and account unlock commands provide ways to temporarily prevent access to an account. ISC only supports the unlock command, so accounts must be locked on the source level, but they can be unlocked through ISC, and ISC can store the account's status."}),"\n",(0,e.jsxs)(t.p,{children:["To use this command, you must specify this value in the ",(0,e.jsx)(t.code,{children:"commands"})," array: ",(0,e.jsx)(t.code,{children:"std:account:unlock"})]}),"\n",(0,e.jsx)(t.p,{children:"Implementing account unlock is similar to the other commands that update attributes on an account. The following code unlocks an account:"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-javascript",children:".stdAccountUnlock(async (context: Context, input: StdAccountUnlockInput, res: Response<StdAccountUnlockOutput>) => {\n    let account = await airtable.getAccount(input.key)\n    const change: AttributeChange = {\n        op: AttributeChangeOp.Set,\n        attribute: 'locked',\n        value: 'false'\n    }\n    account = await airtable.changeAccount(account, change)\n    res.send(account.toStdAccountUnlockOutput())\n})\n"})})]})}function r(n={}){const{wrapper:t}={...(0,o.a)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(u,{...n})}):u(n)}}}]);
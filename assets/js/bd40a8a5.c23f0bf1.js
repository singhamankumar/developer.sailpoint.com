"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[21867],{715804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var c=n(785893),o=n(511151);const i={id:"account-delete-customizer",title:"Account Delete",pagination_label:"Account Delete",sidebar_label:"Account Delete",keywords:["connectivity","connectors","Account Delete"],description:"Intercept the account delete command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-delete",tags:["Connectivity","Connector Command"]},a=void 0,s={id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-delete-customizer",title:"Account Delete",description:"Intercept the account delete command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-delete.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/account-delete",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-delete",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-delete.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,frontMatter:{id:"account-delete-customizer",title:"Account Delete",pagination_label:"Account Delete",sidebar_label:"Account Delete",keywords:["connectivity","connectors","Account Delete"],description:"Intercept the account delete command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-delete",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Create",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-create"},next:{title:"Account Disable",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-disable"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountDeleteInput",id:"example-stdaccountdeleteinput",level:3},{value:"Example StdAccountDeleteOutput",id:"example-stdaccountdeleteoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-delete command",id:"before-account-delete-command",level:3},{value:"After account-delete command",id:"after-account-delete-command",level:3}];function r(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,c.jsxs)(t.p,{children:["Use these commands to intercept the ",(0,c.jsx)(t.a,{href:"../../commands/account-delete",children:"account-delete"})," command."]}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,c.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:"Input"}),(0,c.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountDeleteInput"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,c.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountDeleteOutput"})]})]})]}),"\n",(0,c.jsx)(t.h3,{id:"example-stdaccountdeleteinput",children:"Example StdAccountDeleteInput"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    }\n}\n'})}),"\n",(0,c.jsx)(t.h3,{id:"example-stdaccountdeleteoutput",children:"Example StdAccountDeleteOutput"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:"{\n}\n"})}),"\n",(0,c.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,c.jsx)(t.h3,{id:"before-account-delete-command",children:"Before account-delete command"}),"\n",(0,c.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:"    .beforeStdAccountDelete(async (context: Context, input: StdAccountDeleteInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n"})}),"\n",(0,c.jsxs)(t.p,{children:["The ",(0,c.jsx)(t.code,{children:"input"})," object can be mutated and returned, but the same data type must still be returned."]}),"\n",(0,c.jsx)(t.h3,{id:"after-account-delete-command",children:"After account-delete command"}),"\n",(0,c.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:"    .afterStdAccountDelete(async (context: Context, output: StdAccountDeleteOutput) => {\n        logger.info(`Running after account delete`)\n        return output\n    })\n"})}),"\n",(0,c.jsxs)(t.p,{children:["The ",(0,c.jsx)(t.code,{children:"output"})," object can be mutated and returned, but the same data type must still be returned."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(r,{...e})}):r(e)}}}]);
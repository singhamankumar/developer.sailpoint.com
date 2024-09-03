"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[1962],{161875:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var s=i(785893),t=i(511151);const c={id:"connectivity-customizers-linking",title:"Linking a customizer to a connector",pagination_label:"Linking to a Source",sidebar_label:"Linking to a Source",sidebar_position:6,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Link connectivity customizers to sources.",slug:"/connectivity/saas-connectivity/customizers/linking",tags:["Connectivity"]},o="Linking a connectivity customizer to a source",a={id:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-linking",title:"Linking a customizer to a connector",description:"Link connectivity customizers to sources.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/link.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers",slug:"/connectivity/saas-connectivity/customizers/linking",permalink:"/docs/connectivity/saas-connectivity/customizers/linking",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/link.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,sidebarPosition:6,frontMatter:{id:"connectivity-customizers-linking",title:"Linking a customizer to a connector",pagination_label:"Linking to a Source",sidebar_label:"Linking to a Source",sidebar_position:6,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Link connectivity customizers to sources.",slug:"/connectivity/saas-connectivity/customizers/linking",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Build and Upload",permalink:"/docs/connectivity/saas-connectivity/customizers/upload"},next:{title:"Testing and Debugging",permalink:"/docs/connectivity/saas-connectivity/customizers/testing"}},r={},l=[{value:"Initial requirements",id:"initial-requirements",level:3},{value:"Link to a source",id:"link-to-a-source",level:3},{value:"Unlink from a source",id:"unlink-from-a-source",level:3}];function u(n){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"linking-a-connectivity-customizer-to-a-source",children:"Linking a connectivity customizer to a source"}),"\n",(0,s.jsx)(e.h3,{id:"initial-requirements",children:"Initial requirements"}),"\n",(0,s.jsx)(e.p,{children:"Before you can link a connector customizer to a source, you must have a SaaS source in Identity Security Cloud, as well as a Customizer built and deployed. You can use the following commands to get a list of valid sources, as well as customizers:"}),"\n",(0,s.jsx)(e.p,{children:"Use this command to find sources:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sail conn instances list\n"})}),"\n",(0,s.jsx)(e.p,{children:"This similar looking list of instances will be returned:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"+--------------------------------------+--------------------------+---------------+\n|                  ID                  |           NAME           | CUSTOMIZER ID |\n+--------------------------------------+--------------------------+---------------+\n| 0327d0a4-5e94-4803-90a6-c0819349ecca | airtable test            |               |\n| 05da3fa2-17f0-4bd4-9e2a-ab93d7dffe68 | Discourse                |               |\n| 069b9398-8ed9-433d-943f-3cb32952524f | github                   |               |\n| 0dbb53b0-2e62-4a8e-9efe-97555755025d | Smartsheet               |               |\n| edfc9bfb-b55c-482f-b1aa-b4d51caf7558 | Discourse-Current-V2     |               |\n+--------------------------------------+--------------------------+---------------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"Use this command to find customizers:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sail conn customizers list\n"})}),"\n",(0,s.jsx)(e.p,{children:"This similar looking list of customizers will be returned:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"+--------------------------------------+---------------------+---------+\n|                  ID                  |        NAME         | VERSION |\n+--------------------------------------+---------------------+---------+\n| 7b968fab-0f40-49f0-b13b-8bf529fc0b82 | airtable-customizer |       1 |\n+--------------------------------------+---------------------+---------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"link-to-a-source",children:"Link to a source"}),"\n",(0,s.jsx)(e.p,{children:"To link a source to a customizer, find the source ID in the instance list and a customizer from the customizer list. Then issue this command:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sail conn customizers link -i edfc9bfb-b55c-482f-b1aa-b4d51caf7558 -c 7b968fab-0f40-49f0-b13b-8bf529fc0b82\n"})}),"\n",(0,s.jsx)(e.p,{children:"The output will indicate that the customizer has succesfully linked to the connector instance:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"+--------------------------------------+----------------------+--------------------------------------+\n|                  ID                  |         NAME         |            CUSTOMIZER ID             |\n+--------------------------------------+----------------------+--------------------------------------+\n| edfc9bfb-b55c-482f-b1aa-b4d51caf7558 | Discourse-Current-V2 | 7b968fab-0f40-49f0-b13b-8bf529fc0b82 |\n+--------------------------------------+----------------------+--------------------------------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"unlink-from-a-source",children:"Unlink from a source"}),"\n",(0,s.jsx)(e.p,{children:"To unlink a customizer from a source, issue the unlink command and pass the source instance ID:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sail conn customizers unlink -i edfc9bfb-b55c-482f-b1aa-b4d51caf7558\n"})})]})}function d(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}}}]);
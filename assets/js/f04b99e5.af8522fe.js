"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[66441],{43141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(785893),a=t(511151);const r={id:"native-change-account-updated",title:"Native Change Account Updated",pagination_label:"Native Change Account Updated",sidebar_label:"Native Change Account Updated",sidebar_class_name:"nativeChangeAccountUpdated",keywords:["account","updated","available"],description:"Fires after an account is updated outside of Identity Security Platform",slug:"/extensibility/event-triggers/triggers/native-change-account-updated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},c=void 0,s={id:"extensibility/event-triggers/available/native-change-account-updated",title:"Native Change Account Updated",description:"Fires after an account is updated outside of Identity Security Platform",source:"@site/docs/extensibility/event-triggers/available/native-change-account-updated.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/native-change-account-updated",permalink:"/docs/extensibility/event-triggers/triggers/native-change-account-updated",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/native-change-account-updated.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{inline:!0,label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{inline:!0,label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,frontMatter:{id:"native-change-account-updated",title:"Native Change Account Updated",pagination_label:"Native Change Account Updated",sidebar_label:"Native Change Account Updated",sidebar_class_name:"nativeChangeAccountUpdated",keywords:["account","updated","available"],description:"Fires after an account is updated outside of Identity Security Platform",slug:"/extensibility/event-triggers/triggers/native-change-account-updated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Native Change Account Deleted",permalink:"/docs/extensibility/event-triggers/triggers/native-change-account-deleted"},next:{title:"Outlier Detected",permalink:"/docs/extensibility/event-triggers/triggers/outlier-detected"}},o={},d=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"event-context",children:"Event Context"}),"\n",(0,i.jsxs)(n.admonition,{title:"Important Setup Steps",type:"info",children:[(0,i.jsx)(n.p,{children:"You must have at least one source configured for Native Change Detection (NCD) before you will receive events from this trigger. There are two ways you can configure a source for NCD:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Invoke the ",(0,i.jsx)(n.a,{href:"https://developer.sailpoint.com/docs/api/beta/put-native-change-detection-config",children:"update native change detection configuration"})," for each source you want to receive events for NCD."]}),"\n",(0,i.jsx)(n.li,{children:"Configure the NCD options on the source in the source configuration UI."}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"The Native Change Account Updated trigger fires after Account Aggregations detects that an account is updated external to Identity Security Platform on sources where:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Native Change Detection is enabled"}),"\n",(0,i.jsx)(n.li,{children:"Account Update operations are monitored"}),"\n",(0,i.jsx)(n.li,{children:"at least one attribute that is selected for monitoring changed."}),"\n"]}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)(n.mermaid,{value:"flowchart TD\n    A[Account updated on source] --\x3e B\n    B[Account aggregation\\ndetected account updates] --\x3e C\n    C[Trigger Native Change Account Updated]"})}),"\n",(0,i.jsx)(n.p,{children:"This event trigger can be used to immediately notify interested parties and remediate accounts that are updated directly on the source. Some examples of how this trigger can be used are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Notify the identity's manager and the source owner of the new account"}),"\n",(0,i.jsx)(n.li,{children:"Create a micro-certification for the identity to review their new account attributes and entitlements"}),"\n",(0,i.jsx)(n.li,{children:"Automatically disable or lock accounts updated directly on a source"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This is an example input from this trigger:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "identity": {\n    "manager": {\n      "name": "Martena Heath",\n      "id": "2c91808378eb9fa30178fb8caf90097f",\n      "type": "IDENTITY",\n      "email": "martena.heath@sample_email.com"\n    },\n    "name": "Ann English",\n    "alias": "Ann.English",\n    "id": "2c91808978eb9fab0178fb8ca6d308fb",\n    "type": "IDENTITY",\n    "email": "ann.english@sample_email.com"\n  },\n  "singleValueAttributeChanges": [\n    {\n      "newValue": "Call Center Representative",\n      "name": "title",\n      "oldValue": "Call Center Manager"\n    }\n  ],\n  "entitlementChanges": [\n    {\n      "removed": [\n        {\n          "owner": null,\n          "name": "AccountsReceivable",\n          "id": "d0470502d73d4c2e8c7543c712f518ca",\n          "value": "CN=AccountsReceivable,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n        }\n      ],\n      "added": [\n        {\n          "owner": null,\n          "name": "Accounts Payable",\n          "id": "2c91808978eb9fab0178fb9482620b71",\n          "value": "CN=AccountsPayable,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n        }\n      ],\n      "attributeName": "memberOf"\n    }\n  ],\n  "eventType": "ACCOUNT_UPDATED",\n  "source": {\n    "owner": {\n      "name": "Aaron Andrew",\n      "id": "2c9180867a7c46d0017a7ca099d50531",\n      "type": "IDENTITY",\n      "email": "aaron.andrew@sample_email.com"\n    },\n    "name": "Active Directory",\n    "alias": "Active Directory [source]",\n    "id": "2c91808a78efc63e0178fb8624b248c5",\n    "type": "SOURCE",\n    "governanceGroup": {\n      "id": "fd0d1393-35fb-47d8-9809-0e385b73f25e",\n      "name": "Active Directory Owners",\n      "type": "GOVERNANCE_GROUP"\n    }\n  },\n  "accountChangeTypes": [\n    "ATTRIBUTES_CHANGED",\n    "ENTITLEMENTS_ADDED",\n    "ENTITLEMENTS_REMOVED"\n  ],\n  "multiValueAttributeChanges": [\n    {\n      "removedValues": [],\n      "addedValues": ["User Account is Disabled"],\n      "name": "accountFlags"\n    }\n  ],\n  "account": {\n    "name": "Ann.English",\n    "id": "2c91808378eb9fa30178fb9481a30afa",\n    "type": "ACCOUNT",\n    "uuid": "{08ee6c6d-7d02-4978-9417-d92ba6a5ed50}",\n    "correlated": true,\n    "nativeIdentity": "CN=Ann English,OU=Call Center,OU=AI,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"identity"})," The identity correlated to this account. If ",(0,i.jsx)(n.code,{children:"account.correlated"})," is ",(0,i.jsx)(n.code,{children:"false"}),", then this will be a system generated identity, not a real identity. For uncorrelated accounts, this system generated identity can be used to revoke entitlements on the account, or in any other API request that requires an identity ID."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"singleValueAttributeChanges"})," Contains a list of account attributes that have changed. During an account updated event, only account attributes that were modified will be listed, and their ",(0,i.jsx)(n.code,{children:"oldValue"})," will contain the previous value before the change.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["it will include ALL account attributes if the config is ",(0,i.jsx)(n.code,{children:'"allNonEntitlementAttributes": true'})]}),"\n",(0,i.jsxs)(n.li,{children:["it will include the enumerated list of attributes contained in ",(0,i.jsx)(n.code,{children:'"selectedNonEntitlementAttributes": []'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"entitlementChanges"})," Contains a list of entitlements that have been added and/or removed on the account."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eventType"})," Will always be ",(0,i.jsx)(n.code,{children:"ACCOUNT_UPDATED"})," for account updated events."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"source"})," The source where this account originated from."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"accountChangeTypes"})," A list of change types you can expect to see in the event input.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Possible values are ",(0,i.jsx)(n.code,{children:"ATTRIBUTES_CHANGED"}),", ",(0,i.jsx)(n.code,{children:"ENTITLEMENTS_ADDED"}),", and ",(0,i.jsx)(n.code,{children:"ENTITLEMENTS_REMOVED"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The above example lists all three change types since attributes were changed and entitlements were added and removed. If an event payload only contains changed attributes, then this list will only contain the ",(0,i.jsx)(n.code,{children:"ATTRIBUTES_CHANGED"})," value. This can be useful when filtering events based on change types, or quickly checking what types of objects changed in the account before continuing to process the input."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"multiValueAttributeChanges"})," List of multivalued attributes that were added and/or removed on the account.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["it will include ALL account attributes if the config is ",(0,i.jsx)(n.code,{children:'"allNonEntitlementAttributes": true'})]}),"\n",(0,i.jsxs)(n.li,{children:["it will include the enumerated list of attributes contained in ",(0,i.jsx)(n.code,{children:'"selectedNonEntitlementAttributes": []'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"account"})," The details of the account as it appears in Identity Security Cloud. This information can be used to query the account API for more information."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Trigger Type"}),": ",(0,i.jsx)(n.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);
"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[84949],{310826:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>g});var s=i(785893),n=i(511151);const r={id:"testing-triggers",title:"Testing Triggers",pagination_label:"Testing Triggers",sidebar_label:"Testing Triggers",sidebar_position:5,sidebar_class_name:"testingTriggers",keywords:["event","trigger","testing"],description:"It is important to test your trigger subscription configuration with your actual subscribing service before enabling your subscription for production use.",slug:"/extensibility/event-triggers/testing-triggers",tags:["Event Triggers"]},o=void 0,a={id:"extensibility/event-triggers/testing-triggers",title:"Testing Triggers",description:"It is important to test your trigger subscription configuration with your actual subscribing service before enabling your subscription for production use.",source:"@site/docs/extensibility/event-triggers/testing-triggers.md",sourceDirName:"extensibility/event-triggers",slug:"/extensibility/event-triggers/testing-triggers",permalink:"/docs/extensibility/event-triggers/testing-triggers",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/testing-triggers.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,sidebarPosition:5,frontMatter:{id:"testing-triggers",title:"Testing Triggers",pagination_label:"Testing Triggers",sidebar_label:"Testing Triggers",sidebar_position:5,sidebar_class_name:"testingTriggers",keywords:["event","trigger","testing"],description:"It is important to test your trigger subscription configuration with your actual subscribing service before enabling your subscription for production use.",slug:"/extensibility/event-triggers/testing-triggers",tags:["Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"Filtering Events",permalink:"/docs/extensibility/event-triggers/filtering-events"},next:{title:"Responding to Response Required Triggers",permalink:"/docs/extensibility/event-triggers/responding-request-response-trigger"}},c={},g=[{value:"Sending Test Invocations",id:"sending-test-invocations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Trigger Service Issues",id:"trigger-service-issues",level:3},{value:"Filter Issues",id:"filter-issues",level:3},{value:"Misconfigured Subscription",id:"misconfigured-subscription",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["It is important to test your trigger subscription configuration with your actual subscribing service (not a test site like ",(0,s.jsx)(t.a,{href:"https://webhook.site",children:"webhook.site"}),") before enabling your subscription for production use. Testing subscriptions ensures that your subscribing service can successfully receive events and that you are receiving the correct events based on the filter you have provided."]}),"\n",(0,s.jsx)(t.h2,{id:"sending-test-invocations",children:"Sending Test Invocations"}),"\n",(0,s.jsxs)(t.p,{children:["The easiest way to send a test event to your subscribing service is to use the ",(0,s.jsx)(t.strong,{children:"Test Subscription"})," command. Go to your subscription in the Event Trigger UI, select ",(0,s.jsx)(t.strong,{children:"Options"})," to the right of the subscription, and select ",(0,s.jsx)(t.strong,{children:"Test Subscription"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"test subscription",src:i(828163).Z+"",width:"2041",height:"344"})}),"\n",(0,s.jsx)(t.p,{children:"Doing so sends a test event to your subscribing service, using the default example payload for the specific trigger you are subscribing to. This is an easy way to validate that your service can receive events, but it lacks the ability to modify the event payload to test your filter against different payloads. However, there is an API endpoint you can use to modify the test payload."}),"\n",(0,s.jsxs)(t.p,{children:["If you want to control the test input to validate your filter against a more robust set of data, you can use the ",(0,s.jsx)(t.a,{href:"/docs/api/beta/start-test-trigger-invocation",children:"test invocation"})," API endpoint. You can use this API to send an input payload with any values that you want. This is an example of an invocation of this API:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"POST `https://{tenant}.api.identitynow.com/beta/trigger-invocations/test`\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "triggerId": "idn:access-request-pre-approval",\n  "input": {\n    "accessRequestId": "2c91808b6ef1d43e016efba0ce470904",\n    "requestedFor": {\n      "type": "IDENTITY",\n      "id": "2c91808568c529c60168cca6f90c1313",\n      "name": "William Wilson"\n    },\n    "requestedItems": [\n      {\n        "id": "2c91808b6ef1d43e016efba0ce470904",\n        "name": "Engineering Access",\n        "description": "Access to engineering database",\n        "type": "ACCESS_PROFILE",\n        "operation": "Add",\n        "comment": "William needs this access to do his job."\n      }\n    ],\n    "requestedBy": {\n      "type": "IDENTITY",\n      "id": "2c91808568c529c60168cca6f90c1314",\n      "name": "Rob Robertson"\n    }\n  },\n  "contentJson": {}\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(t.h3,{id:"trigger-service-issues",children:"Trigger Service Issues"}),"\n",(0,s.jsx)(t.p,{children:"If your subscribing service is not receiving your test invocations, you have a couple of options to debug the issue. Start by viewing the activity log for the subscription in the UI to ensure your test events are actually being sent."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"activity log",src:i(129374).Z+"",width:"2033",height:"316"})}),"\n",(0,s.jsxs)(t.p,{children:["Check the ",(0,s.jsx)(t.strong,{children:"Created"})," date with the time you sent the test events. If they are being sent, check the event details. Look for any errors being reported, and ensure your subscribing service's subscription ID is in the ",(0,s.jsx)(t.code,{children:"subcriptionId"})," the event was sent to."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"debug connection",src:i(277258).Z+"",width:"2560",height:"1328"})}),"\n",(0,s.jsxs)(t.p,{children:["You can also view the activity log by using the ",(0,s.jsx)(t.a,{href:"/docs/api/beta/list-trigger-invocation-status",children:"list latest invocation statuses"})," endpoint."]}),"\n",(0,s.jsx)(t.h3,{id:"filter-issues",children:"Filter Issues"}),"\n",(0,s.jsxs)(t.p,{children:["If you do not see your events in the activity log, it may be a filtering issue. If the filter you configured on the subscription is not matching the test event data, no event will be sent. Double check your filter expression with the test payload in a JSONpath editor to ensure the filter is valid and matches your data. See ",(0,s.jsx)(t.a,{href:"/docs/extensibility/event-triggers/filtering-events",children:"Filtering Events"})," for more information."]}),"\n",(0,s.jsx)(t.h3,{id:"misconfigured-subscription",children:"Misconfigured Subscription"}),"\n",(0,s.jsx)(t.p,{children:"Double check that your subscription configuration is correct."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Ensure the URL you provided is accessible from the public internet. If your subscribing service is hosted internally in your company's intranet, you may be able to access it from your computer, but the trigger service may not be able to."}),"\n",(0,s.jsx)(t.li,{children:"Verify that the authentication details are correct. Verify that the username/password or bearer token is valid."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},129374:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/activity-log-f43d2beda4617ad71ede37afaabd3424.png"},277258:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/debug-connection-842ae82e91d48cdd9c4f2a14d4b4c2a3.png"},828163:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/test-subscription-572f17aa5c34840225f632ae61598fd6.png"}}]);
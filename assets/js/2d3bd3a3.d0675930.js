"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[55782],{532033:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(785893),i=t(511151);const a={id:"api-calls",title:"API Calls",pagination_label:"API Calls",sidebar_label:"API Calls",sidebar_position:1,sidebar_class_name:"apiCalls",keywords:["connectivity","connectors","api calls"],description:"Calling API endpoints sequentially for hundreds or thousands of accounts is slow. If several API calls are required to build a user\u2019s account, then it is recommended that you use asynchronous functions to speed up this task.",slug:"/connectivity/saas-connectivity/in-depth/api-calls",tags:["Connectivity"]},o=void 0,l={id:"connectivity/saas-connectivity/in-depth/api-calls",title:"API Calls",description:"Calling API endpoints sequentially for hundreds or thousands of accounts is slow. If several API calls are required to build a user\u2019s account, then it is recommended that you use asynchronous functions to speed up this task.",source:"@site/docs/connectivity/saas-connectivity/in-depth/api-calls.md",sourceDirName:"connectivity/saas-connectivity/in-depth",slug:"/connectivity/saas-connectivity/in-depth/api-calls",permalink:"/docs/connectivity/saas-connectivity/in-depth/api-calls",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/in-depth/api-calls.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,sidebarPosition:1,frontMatter:{id:"api-calls",title:"API Calls",pagination_label:"API Calls",sidebar_label:"API Calls",sidebar_position:1,sidebar_class_name:"apiCalls",keywords:["connectivity","connectors","api calls"],description:"Calling API endpoints sequentially for hundreds or thousands of accounts is slow. If several API calls are required to build a user\u2019s account, then it is recommended that you use asynchronous functions to speed up this task.",slug:"/connectivity/saas-connectivity/in-depth/api-calls",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Full Example",permalink:"/docs/connectivity/saas-connectivity/customizers/example"},next:{title:"CLI - Advanced",permalink:"/docs/connectivity/saas-connectivity/in-depth/cli-advanced"}},r={},c=[];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Calling API endpoints sequentially for hundreds or thousands of accounts is slow. If several API calls are required to build a user\u2019s account, then it is recommended that you use asynchronous functions to speed up this task. Asynchronous functions allow your program to execute several commands at once, which is especially important for high latency commands like calling API endpoints - each call to an endpoint can take anywhere from several milliseconds to several seconds. The following code snippet from ",(0,n.jsx)(s.a,{href:"https://github.com/sailpoint-oss/discourse-connector-2/blob/main/Discourse/src/discourse-client.ts",children:"discourse-client.ts"})," shows how you can use asynchronous functions to quickly build a list of account profiles for your source\u2019s users:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"async getUsers(): Promise<User[]> {\n        // First, get the members of the group.  This will call a single endpoint to get all the users of a group.\n        const groupMembers = await this.getGroupMembers(this.primaryGroup!)\n\n        // To get the full user representation, we need to invoke a single API call for each user.\n        // Because there can be hundreds, or even thousands of users, this would take several minutes\n        // if run sequentially.  We use Promise.all to execute a list of API calls in parallel.\n        let users = await Promise.all(groupMembers.map(member => this.getUser(member.id!.toString())))\n\n        // Emails aren't included in the above call.  Once again, we need to execute several API calls\n        // in parallel.\n        const emails = await Promise.all(groupMembers.map(member => this.getUserEmailAddress(member.username!)))\n\n        // Finally, we need to update our user accounts with the emails we obtained.  This code\n        // doesn't make network calls, so it doesn't need to use Promise.all.\n        for (let i = 0; i < groupMembers.length; i++) {\n            users[i].email = emails[i]\n        }\n\n        return users\n    }\n\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Line 3 gets all the user IDs for a default group to which all the users you want to track are assigned."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Line 6 gets more attributes for each user present in the group. There can be hundreds of users who need their attributes fetched, so use Promise.all to build and execute the API calls asynchronously, speeding up the operation\u2019s completion time."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Line 9 uses the same strategy as Line 6, except it calls another endpoint that will get each user\u2019s email address, which isn\u2019t present in the previous API call. Use Promise.all again to speed up the operation."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Line 12-14 combines the data you gathered from the preceding calls to complete your user accounts."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"\ud83d\udcd8 As a general guideline, any time you must execute several API calls that all call the same endpoint, it is recommended that you use Promise.all to speed up the operation."}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);
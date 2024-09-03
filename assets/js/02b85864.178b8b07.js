"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[30394],{114110:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=o(785893),r=o(511151);const s={id:"go-sdk-create",title:"Creating resources with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","create"],description:"Learn how to create new resources the Golang SDK in this guide.",slug:"/tools/sdk/go/create",tags:["SDK","Software Development Kit"]},i=void 0,a={id:"tools/sdk/go/go-sdk-create",title:"Creating resources with the Go SDK",description:"Learn how to create new resources the Golang SDK in this guide.",source:"@site/docs/tools/sdk/go/creating-resources.md",sourceDirName:"tools/sdk/go",slug:"/tools/sdk/go/create",permalink:"/docs/tools/sdk/go/create",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/creating-resources.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"},{inline:!0,label:"Software Development Kit",permalink:"/docs/tags/software-development-kit"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,sidebarPosition:2,frontMatter:{id:"go-sdk-create",title:"Creating resources with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","create"],description:"Learn how to create new resources the Golang SDK in this guide.",slug:"/tools/sdk/go/create",tags:["SDK","Software Development Kit"]},sidebar:"openApiSidebar",previous:{title:"Go SDK",permalink:"/docs/tools/sdk/go/getting-started"},next:{title:"Go SDK",permalink:"/docs/tools/sdk/go/update"}},d={},c=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'Here is an example create workgroup script from the beta APIs you can copy into your "sdk.go" instance to try it out:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:"showLineNumbers",children:'package main\n\nimport (\n "context"\n "encoding/json"\n "fmt"\n "os"\n\n sailpoint "github.com/sailpoint-oss/golang-sdk"\n "github.com/sailpoint-oss/golang-sdk/beta"\n)\n\nfunc main() {\n\n ctx := context.TODO()\n configuration := sailpoint.NewDefaultConfiguration()\n apiClient := sailpoint.NewAPIClient(configuration)\n\n resp, _, err := apiClient.V3.PublicIdentitiesApi.GetPublicIdentities(ctx).Limit(1).Execute()\n\n identity := "IDENTITY"\n workgroupName := "DB Access Governance Group"\n workgroupDescription := "Description of the Governance Group"\n\n workgroup := beta.WorkgroupDto{\n  Name:        &workgroupName,\n  Description: &workgroupDescription,\n  Owner: &beta.OwnerDto{\n   Id:   resp[0].Id,\n   Name: resp[0].Name,\n   Type: &identity,\n  },\n }\n\n newWorkgroup, request, errMessage := apiClient.Beta.GovernanceGroupsApi.CreateWorkgroup(ctx).WorkgroupDto(workgroup).Execute()\n\n if errMessage != nil {\n  fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsApi.CreateWorkgroup``: %v\\n", err)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", request)\n }\n\n b, _ := json.MarshalIndent(newWorkgroup, "", "  ")\n fmt.Fprint(os.Stdout, string(b))\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The example uses the ",(0,t.jsx)(n.code,{children:"GetPublicIdentities"})," method from the ",(0,t.jsx)(n.code,{children:"PublicIdentitiesApi"})," to pull an identity needed to be the owner of the Workgroup."]}),"\n",(0,t.jsxs)(n.p,{children:["On lines 20-32 the new workgroup object is initialized and sent to the ",(0,t.jsx)(n.code,{children:"CreateWorkgroup"})," method on line 34."]}),"\n",(0,t.jsx)(n.p,{children:"To run the code, run this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"go run sdk.go\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The WorkGroup is assigned to the ",(0,t.jsx)(n.code,{children:"newWorkgroup"})," variable and the details are printed out:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "created": null,\n  "description": "Description of the Governance Group",\n  "modified": null,\n  "name": "DB Access Governance Group",\n  "owner": {\n    "displayName": "Brian Mendoza",\n    "emailAddress": null,\n    "id": "0003c25c365e492381d4e557b6159f9b",\n    "name": "Brian Mendoza",\n    "type": "IDENTITY"\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);
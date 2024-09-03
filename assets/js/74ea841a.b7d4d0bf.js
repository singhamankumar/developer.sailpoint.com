"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8597],{196013:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=s(785893),i=s(511151);const r={id:"go-sdk-retries",title:"Retries with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Retries",sidebar_position:7,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","retry"],description:"Learn how to paginate results with the Golang SDK in this guide.",slug:"/tools/sdk/go/retries",tags:["SDK","Software Development Kit"]},n=void 0,a={id:"tools/sdk/go/go-sdk-retries",title:"Retries with the Go SDK",description:"Learn how to paginate results with the Golang SDK in this guide.",source:"@site/docs/tools/sdk/go/retries.md",sourceDirName:"tools/sdk/go",slug:"/tools/sdk/go/retries",permalink:"/docs/tools/sdk/go/retries",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/retries.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"},{inline:!0,label:"Software Development Kit",permalink:"/docs/tags/software-development-kit"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,sidebarPosition:7,frontMatter:{id:"go-sdk-retries",title:"Retries with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Retries",sidebar_position:7,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","retry"],description:"Learn how to paginate results with the Golang SDK in this guide.",slug:"/tools/sdk/go/retries",tags:["SDK","Software Development Kit"]},sidebar:"openApiSidebar",previous:{title:"Go SDK",permalink:"/docs/tools/sdk/go/search"},next:{title:"Go SDK",permalink:"/docs/tools/sdk/go/error-handling"}},l={},d=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The SDK uses the ",(0,o.jsx)(t.a,{href:"https://github.com/hashicorp/go-retryablehttp",children:"go-retryablehttp"})," module to support retry logic."]}),"\n",(0,o.jsx)(t.p,{children:"On line 17-18 of the following example, the SDK is set to retry if there is an unexpected error up to 10 times and wait 2 seconds between each retry:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'package main\n\nimport (\n "context"\n "fmt"\n "os"\n\n sailpoint "github.com/sailpoint-oss/golang-sdk"\n)\n\nfunc main() {\n\n ctx := context.TODO()\n configuration := sailpoint.NewDefaultConfiguration()\n apiClient := sailpoint.NewAPIClient(configuration)\n\n configuration.HTTPClient.RetryMax = 10\n configuration.HTTPClient.RetryWaitMax = time.Second * 2\n\n resp, r, err := apiClient.V3.TransformsApi.ListTransforms(ctx).Filters("This is an incorrect string").Execute()\n if err != nil {\n  fmt.Fprintf(os.Stderr, "Error when calling `TransformsApi.ListTransforms``: %v\\n", err)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n }\n // response from `ListAccounts`: []Account\n fmt.Fprintf(os.Stdout, "First response from `TransformsApi.ListTransforms`: %v\\n", resp)\n\n}\n'})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);
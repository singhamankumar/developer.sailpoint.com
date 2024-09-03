"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[7865],{685811:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=i(785893),r=i(511151);const o={id:"python-sdk-error-handling",title:"Error Handling with The Python SDK",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:8,sidebar_class_name:"pythonsdk",keywords:["py","python","sdk","error"],description:"Learn how to configure error handling when using the Python SDK.",slug:"/tools/sdk/python/error-handling",tags:["SDK"]},s=void 0,a={id:"tools/sdk/python/python-sdk-error-handling",title:"Error Handling with The Python SDK",description:"Learn how to configure error handling when using the Python SDK.",source:"@site/docs/tools/sdk/python/error-handling.md",sourceDirName:"tools/sdk/python",slug:"/tools/sdk/python/error-handling",permalink:"/docs/tools/sdk/python/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/error-handling.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,sidebarPosition:8,frontMatter:{id:"python-sdk-error-handling",title:"Error Handling with The Python SDK",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:8,sidebar_class_name:"pythonsdk",keywords:["py","python","sdk","error"],description:"Learn how to configure error handling when using the Python SDK.",slug:"/tools/sdk/python/error-handling",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Retries",permalink:"/docs/tools/sdk/python/retries"},next:{title:"TypeScript SDK",permalink:"/docs/tools/sdk/typescript"}},p={},l=[];function c(n){const e={code:"code",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["The Python SDK returns key exceptions if the request fails. You can find these exceptions at ",(0,t.jsx)(e.code,{children:"sailpoint.v3.exceptions"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Here is an example of the error handling process. In this example, ",(0,t.jsx)(e.code,{children:'name rt "Test"'})," isn't a valid filter, which causes the function to return a 400 'bad request' exception message. Line 11 will catch that 'bad request' response, and you can log the appropriate message. This example will also catch 401 'unauthorized' and 500 'service exception' messages:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:'import sailpoint\nimport sailpoint.v3\nfrom sailpoint.configuration import Configuration\nfrom sailpoint.v3.exceptions import BadRequestException, UnauthorizedException, ServiceException\n\nconfiguration = Configuration()\napi_client = sailpoint.v3.ApiClient(configuration)\n\ntry:\n    transforms = sailpoint.v3.TransformsApi(api_client).list_transforms(filters=\'name rt "Test"\')\nexcept BadRequestException as e:\n    print("Exception when calling TransformsApi->list_transforms: %s\\n" % e)\nexcept UnauthorizedException as e:\n    print("Unauthorized exception when calling TransformsApi->list_transforms: %s\\n" % e)\nexcept ServiceException as e:\n    print("Service exception when calling TransformsApi->list_transforms: %s\\n" % e)\n'})}),"\n",(0,t.jsxs)(e.p,{children:["If you don't want the program to exit for any error response, you can include ",(0,t.jsx)(e.code,{children:"pass"})," in each of your ",(0,t.jsx)(e.code,{children:"except"})," blocks after printing the error message, as you can see in this example:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import sailpoint\nimport sailpoint.v3\nfrom sailpoint.configuration import Configuration\nfrom sailpoint.v3.exceptions import BadRequestException, UnauthorizedException, ServiceException\n\nconfiguration = Configuration()\napi_client = sailpoint.v3.ApiClient(configuration)\n\ntry:\n    transforms = sailpoint.v3.TransformsApi(api_client).list_transforms(filters=\'name rt "Test"\')\nexcept BadRequestException as e:\n    print("Exception when calling TransformsApi->list_transforms: %s\\n" % e)\n    pass\nexcept UnauthorizedException as e:\n    print("Unauthorized exception when calling TransformsApi->list_transforms: %s\\n" % e)\n    pass\nexcept ServiceException as e:\n    print("Service exception when calling TransformsApi->list_transforms: %s\\n" % e)\n    pass\n'})})]})}function d(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}}}]);
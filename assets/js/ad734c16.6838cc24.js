"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[31842],{791602:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>v,contentTitle:()=>g,default:()=>q,frontMatter:()=>j,metadata:()=>y,toc:()=>N});var r=s(785893),i=s(511151),t=s(168562),l=s.n(t),n=(s(69957),s(496463)),c=(s(318438),s(998439)),o=s.n(c),m=(s(534168),s(603655)),d=s.n(m),p=s(313503),u=s.n(p),h=s(82479),f=s.n(h),x=s(555199),b=(s(645774),s(424455));const j={id:"create-form-attribute",sidebar_label:"Create a form attribute",hide_title:!0,hide_table_of_contents:!0,api:"eJztVtuO4zYM/RWBz8q16XZroA/ZYhZIgb1gJu1LECwYmXG0Y0teSc5MYPjfC8rJxLnMYAYo+rR5cGyJNA/Jc2jVkJJXTpdBWwMJzDfaCzJpabUJQqERyhEGEijW1hUCQ3B6VQUCCbYkh+w3SyGB1u6jdcW0YxMw85As4NTZw1KCox8V+fDBpjtI6vioHaWQBFeRBGVNIBN4C8sy1yqGGnz3jLMGrzZUIN+FXUmQgF19JxVAQukYWNDkeZcDfzuifp29TjuGPjhtMpAXlSKhU2HXImwoFgck0CMWZc5eqCaINFz1JqPJsDf5HSc9fD9RvdH43W/vxut0qN6voZFg6IjumbhvfOnLQI+laCTww7c23Ethuxivvv5pV8SXSCBTFdz2M8+VI7yHZSPBupRcJ6o2gTJyIGMDMLRLv4y7OEbXQpfWa368yE9Yc+xM00gIOsRsTijqoYk/pqMvrfEtC8bDIf+dhrt5LEkFSsXBVAQrUGwx17wW2Qw/ifuTuP8lcSX8D7U9G+3Pq6U3ftLL5JpEPmAqblsliJ6oDK7yqBJlGWyg/lv0YQ19WUOyuGT+AdzMRPH9xa6NfN7uH7aKYW6cs85Ds2yT+PVaEjMTyBnMxR25LTkRfURPOAqVM5RygyqzQZPmlAp6VBQ9/ZuSe1nMxCEvkU1FQd5jRqJdX2mTxQa29l1W3FnndsLbgsKGrR7IBPHgrMn2HWwk8J7lb3dp4+QqMWwggcHp6PEgwcdK+NiMyuWQwCaE0ieDQR3IoAmfsaCmb6yhosztjqivbDHAUoOELTrNRIiZHc3b9NZY5SGyuCBlL3kazYXBggR6rzOuPxOq8sEW5DiZJeNTldNhFwGuCB25acXJLJbd7Tsuf4uja/TUDU6Ks41mkOyNWP/x5uNB4XN7T0YEvv6xs5Vrb6NuuNO3x5PNzaEh1wb608h+rYYvZu5rHTvz8ny07QfaiMFrs7YMjHvd1n/UH/aHHSV9vrn9JKZfZ1cHymEznhtXJCrfNguVIu8FmlQUNtXrnWBK2Mrzl9RWTpEX2ohYSTJb7awpyATWU64VGR+rZSJn4NNsHgvNnC3QdHb+fPakegK1Por0TcfdffkCPYZBmaPmkdOKod4rZwHnyllK2LC2kgXU9Qo9/e3ypuHlHxU5puvyqI/IVgkbwtiRRQ33tOO8Wri9efuJ2mJexbl/Pl94ArYeU8Uz6UXbZUf+X7/czZnk+5N4YVP2cfgAMl4TiKf9OOTiUZ3XasjRZBVmbNu+k3//AlqINm4=",sidebar_class_name:"post api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a form attribute' (create-form-attribute)"},g=void 0,y={id:"api/nerm/v1/create-form-attribute",title:"create-form-attribute",description:"<Heading",source:"@site/docs/api/nerm/v1/create-form-attribute.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/create-form-attribute",permalink:"/docs/api/nerm/v1/create-form-attribute",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a form attribute' (create-form-attribute)",tags:[],version:"current",frontMatter:{id:"create-form-attribute",sidebar_label:"Create a form attribute",hide_title:!0,hide_table_of_contents:!0,api:"eJztVtuO4zYM/RWBz8q16XZroA/ZYhZIgb1gJu1LECwYmXG0Y0teSc5MYPjfC8rJxLnMYAYo+rR5cGyJNA/Jc2jVkJJXTpdBWwMJzDfaCzJpabUJQqERyhEGEijW1hUCQ3B6VQUCCbYkh+w3SyGB1u6jdcW0YxMw85As4NTZw1KCox8V+fDBpjtI6vioHaWQBFeRBGVNIBN4C8sy1yqGGnz3jLMGrzZUIN+FXUmQgF19JxVAQukYWNDkeZcDfzuifp29TjuGPjhtMpAXlSKhU2HXImwoFgck0CMWZc5eqCaINFz1JqPJsDf5HSc9fD9RvdH43W/vxut0qN6voZFg6IjumbhvfOnLQI+laCTww7c23Ethuxivvv5pV8SXSCBTFdz2M8+VI7yHZSPBupRcJ6o2gTJyIGMDMLRLv4y7OEbXQpfWa368yE9Yc+xM00gIOsRsTijqoYk/pqMvrfEtC8bDIf+dhrt5LEkFSsXBVAQrUGwx17wW2Qw/ifuTuP8lcSX8D7U9G+3Pq6U3ftLL5JpEPmAqblsliJ6oDK7yqBJlGWyg/lv0YQ19WUOyuGT+AdzMRPH9xa6NfN7uH7aKYW6cs85Ds2yT+PVaEjMTyBnMxR25LTkRfURPOAqVM5RygyqzQZPmlAp6VBQ9/ZuSe1nMxCEvkU1FQd5jRqJdX2mTxQa29l1W3FnndsLbgsKGrR7IBPHgrMn2HWwk8J7lb3dp4+QqMWwggcHp6PEgwcdK+NiMyuWQwCaE0ieDQR3IoAmfsaCmb6yhosztjqivbDHAUoOELTrNRIiZHc3b9NZY5SGyuCBlL3kazYXBggR6rzOuPxOq8sEW5DiZJeNTldNhFwGuCB25acXJLJbd7Tsuf4uja/TUDU6Ks41mkOyNWP/x5uNB4XN7T0YEvv6xs5Vrb6NuuNO3x5PNzaEh1wb608h+rYYvZu5rHTvz8ny07QfaiMFrs7YMjHvd1n/UH/aHHSV9vrn9JKZfZ1cHymEznhtXJCrfNguVIu8FmlQUNtXrnWBK2Mrzl9RWTpEX2ohYSTJb7awpyATWU64VGR+rZSJn4NNsHgvNnC3QdHb+fPakegK1Por0TcfdffkCPYZBmaPmkdOKod4rZwHnyllK2LC2kgXU9Qo9/e3ypuHlHxU5puvyqI/IVgkbwtiRRQ33tOO8Wri9efuJ2mJexbl/Pl94ArYeU8Uz6UXbZUf+X7/czZnk+5N4YVP2cfgAMl4TiKf9OOTiUZ3XasjRZBVmbNu+k3//AlqINm4=",sidebar_class_name:"post api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a form attribute' (create-form-attribute)"},sidebar:"nermSideBar",previous:{title:"Create a form",permalink:"/docs/api/nerm/v1/create-form"}},v={},N=[];function _(e){const a={p:"p",...(0,i.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.default,{as:"h1",className:"openapi__heading",children:"Create a form attribute"}),"\n",(0,r.jsx)(n.Z,{method:"post",path:"/form_attributes"}),"\n",(0,r.jsx)(a.p,{children:"This endpoint can create a form attribute"}),"\n",(0,r.jsx)(x.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(o(),{className:"openapi-tabs__mime",children:(0,r.jsx)(b.default,{label:"application/json",value:"application/json-schema",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,r.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,r.jsx)(a.p,{children:"Body"})}),(0,r.jsx)("strong",{className:"openapi-schema__required",children:(0,r.jsx)(a.p,{children:"required"})})]}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsxs)("span",{className:"openapi-schema__container",children:[(0,r.jsx)("strong",{className:"openapi-schema__property",children:(0,r.jsx)(a.p,{children:"form_attribute"})}),(0,r.jsx)("span",{className:"openapi-schema__name",children:(0,r.jsx)(a.p,{children:"object"})})]})}),(0,r.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(u(),{collapsible:!1,name:"form_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the form",example:"ac4aae0b-4140-49a4-a84c-126762fd0c8f"}}),(0,r.jsx)(u(),{collapsible:!1,name:"ne_attribute_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ac4aae0b-4140-49a4-a84c-126762fd0c8f",description:"The id of the attribute"}}),(0,r.jsx)(u(),{collapsible:!1,name:"attr_type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`ne_attribute`, `break`]",schema:{type:"string",example:"ne_attribute",description:"The attribute type",enum:["ne_attribute","break"]}}),(0,r.jsx)(u(),{collapsible:!1,name:"order",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",example:1,description:"The position of the attribute on the form"}})]})]})})})]})})}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsxs)(l(),{label:void 0,id:void 0,children:[(0,r.jsxs)(b.default,{label:"200",value:"200",children:[(0,r.jsx)("div",{children:(0,r.jsx)(a.p,{children:"Expected response to a valid request"})}),(0,r.jsx)("div",{children:(0,r.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsxs)("span",{className:"openapi-schema__container",children:[(0,r.jsx)("strong",{className:"openapi-schema__property",children:(0,r.jsx)(a.p,{children:"form_attribute"})}),(0,r.jsx)("span",{className:"openapi-schema__name",children:(0,r.jsx)(a.p,{children:"object"})})]})}),(0,r.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(u(),{collapsible:!1,name:"form_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the form",example:"ac4aae0b-4140-49a4-a84c-126762fd0c8f"}}),(0,r.jsx)(u(),{collapsible:!1,name:"ne_attribute_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ac4aae0b-4140-49a4-a84c-126762fd0c8f",description:"The id of the attribute"}}),(0,r.jsx)(u(),{collapsible:!1,name:"attr_type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`ne_attribute`, `break`]",schema:{type:"string",example:"ne_attribute",description:"The attribute type",enum:["ne_attribute","break"]}}),(0,r.jsx)(u(),{collapsible:!1,name:"order",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",example:1,description:"The position of the attribute on the form"}}),(0,r.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"ac4aae0b-4140-49a4-a84c-126762fd0c8f",description:"The id of the form attribute"}})]})]})})})]})}),(0,r.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(d(),{responseExample:'{\n  "form_attribute": {\n    "form_id": "ac4aae0b-4140-49a4-a84c-126762fd0c8f",\n    "ne_attribute_id": "ac4aae0b-4140-49a4-a84c-126762fd0c8f",\n    "attr_type": "ne_attribute",\n    "order": 1,\n    "id": "ac4aae0b-4140-49a4-a84c-126762fd0c8f"\n  }\n}',language:"json"})})]})})})})]}),(0,r.jsxs)(b.default,{label:"400",value:"400",children:[(0,r.jsx)("div",{children:(0,r.jsx)(a.p,{children:"Bad Request - unable to complete."})}),(0,r.jsx)("div",{children:(0,r.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,r.jsx)(a.p,{children:"oneOf"})}),(0,r.jsxs)(f(),{children:[(0,r.jsx)(b.default,{label:"InvalidJson",value:"0-item-properties",children:(0,r.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."}})}),(0,r.jsxs)(b.default,{label:"ValidationErrors",value:"1-item-properties",children:[(0,r.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"}}),(0,r.jsx)(u(),{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}}})]})]})]})})]})}),(0,r.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(d(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,r.jsxs)(b.default,{label:"500",value:"500",children:[(0,r.jsx)("div",{children:(0,r.jsx)(a.p,{children:"Internal Server Error - returned on unhandled exceptions."})}),(0,r.jsx)("div",{children:(0,r.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"}})})]})}),(0,r.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(d(),{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}}}]);
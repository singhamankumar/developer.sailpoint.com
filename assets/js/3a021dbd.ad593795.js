"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77288],{123887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(785893),s=n(511151);const r={id:"powershell-sdk-create",title:"Creating resources with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","create"],description:"Learn how to create new resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/create",tags:["SDK"]},i=void 0,a={id:"tools/sdk/powershell/powershell-sdk-create",title:"Creating resources with the PowerShell SDK",description:"Learn how to create new resources using the PowerShell SDK in this guide.",source:"@site/docs/tools/sdk/powershell/creating-resources.md",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell/create",permalink:"/docs/tools/sdk/powershell/create",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/creating-resources.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,sidebarPosition:2,frontMatter:{id:"powershell-sdk-create",title:"Creating resources with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","create"],description:"Learn how to create new resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/create",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/getting-started"},next:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/update"}},l={},c=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["You can use the SDK to create new resources. These cmdlets will typically start with the ",(0,o.jsx)(t.code,{children:"New"})," keyword."]}),"\n",(0,o.jsx)(t.p,{children:"To see a list of available create cmdlets, run this command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-powershell",children:'Get-Command -Module PSSailpoint | where-object {$_.name -like "*New-*" } | Sort-Object Name | Get-Help | Format-Table Name, Synopsis\n'})}),"\n",(0,o.jsx)(t.p,{children:"The SDK returns this output (all beta endpoints are designated by the Beta prefix):"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-powershell",children:"Name                     Synopsis\n----                     --------\nNew-AccessProfile        Create an Access Profile\nNew-AccessRequest        Submit an Access Request\nNew-Account              Create Account\nNew-AuthOrgNetworkConfig Create security network configuration.\nNew-BetaAccessProfile    Create an Access Profile\nNew-BetaAccessRequest    Submit an Access Request\nNew-BetaAccount          Create Account\nNew-BetaCampaign         Create a campaign\nNew-BetaCampaignTemplate Create a Campaign Template\nNew-BetaCommonAccess     Create common access items\nNew-BetaConnectorRule    Create Connector Rule\nNew-BetaCustomPasswordI\u2026 Create Custom Password Instructions\nNew-BetaDigitToken       Generate a digit token\nNew-BetaDomainDkim       Verify domain address via DKIM\n...\n"})}),"\n",(0,o.jsx)(t.p,{children:"Here is an example create workgroup script from the beta APIs you can copy into your PowerShell instance to try it out:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-powershell",metastring:"showLineNumbers",children:'$Identity = Get-PublicIdentities -Limit 1\n\n$JSON = @"\n{\n    "owner": {\n      "type": "IDENTITY",\n      "id": "$($Identity.id)",\n      "name": "$($Identity.name)"\n    },\n    "name": "DB Access Governance Group",\n    "description": "Description of the Governance Group"\n  }\n"@\n\n$WorkGroup = ConvertFrom-BetaJsonToWorkgroupDto -Json $JSON\n\n$WorkGroup = Initialize-BetaWorkgroupDto -Name "DB Access Governance Group" -Description "Description of the Governance Group" -Owner @{\n    "type" = "IDENTITY"\n    "id" = $Identity.id\n    "name" = $Identity.name\n}\n\nNew-BetaWorkgroup -WorkgroupDto $WorkGroup\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The example uses the ",(0,o.jsx)(t.code,{children:"Get-PublicIdentities -Limit"})," cmdlet to pull an identity needed to be the owner of the Workgroup and shows two ways of creating the new WorkGroup to send with the request."]}),"\n",(0,o.jsxs)(t.p,{children:["The first on lines 3-15 initializes a json string then converts the string into a WorkGroup object with ",(0,o.jsx)(t.code,{children:"ConvertFrom-BetaJsonToWorkgroupDto"})]}),"\n",(0,o.jsx)(t.p,{children:"The second on lines 17-21 initializes the WorkGroup object by passing in each property of the WorkGroup."}),"\n",(0,o.jsx)(t.p,{children:"The WorkGroup will be returned by the SDK:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-powershell",children:"Name                           Value\n----                           -----\ndescription                    Description of the Governance Group\nowner                          {[displayName, Brian Mendoza], [emailAddress, ], [type, IDENTITY], [id, 0003c25c365e492381d4e557b6159f9b]\u2026}\nmemberCount                    0\nconnectionCount                0\nid                             a241d625-d948-4c41-839e-869b790837a1\nname                           DB Access Governance Group\ncreated\nmodified\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);
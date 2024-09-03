"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[31967],{736907:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>d,metadata:()=>r,toc:()=>p});var a=t(785893),s=t(511151);const d={id:"plugin-database-scripts",title:"Database Scripts",pagination_label:"Database Scripts",sidebar_label:"Database Scripts",sidebar_position:4,sidebar_class_name:"plugin_developer_guide_database_scripts",keywords:["plugin"],description:"IdentityIQ Plugin Database Scripts",slug:"/iiq/plugin-developer-guide/database-scripts",tags:["plugin","guide","identityiq"]},n="Database Scripts",r={id:"iiq/plugin-developer-guide/chapter-4/plugin-database-scripts",title:"Database Scripts",description:"IdentityIQ Plugin Database Scripts",source:"@site/docs/iiq/plugin-developer-guide/chapter-4/index.md",sourceDirName:"iiq/plugin-developer-guide/chapter-4",slug:"/iiq/plugin-developer-guide/database-scripts",permalink:"/docs/iiq/plugin-developer-guide/database-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/iiq/plugin-developer-guide/chapter-4/index.md",tags:[{inline:!0,label:"plugin",permalink:"/docs/tags/plugin"},{inline:!0,label:"guide",permalink:"/docs/tags/guide"},{inline:!0,label:"identityiq",permalink:"/docs/tags/identityiq"}],version:"current",lastUpdatedBy:"Tyler Mairose",lastUpdatedAt:1725394054e3,sidebarPosition:4,frontMatter:{id:"plugin-database-scripts",title:"Database Scripts",pagination_label:"Database Scripts",sidebar_label:"Database Scripts",sidebar_position:4,sidebar_class_name:"plugin_developer_guide_database_scripts",keywords:["plugin"],description:"IdentityIQ Plugin Database Scripts",slug:"/iiq/plugin-developer-guide/database-scripts",tags:["plugin","guide","identityiq"]},sidebar:"iiqSideBar",previous:{title:"Build File",permalink:"/docs/iiq/plugin-developer-guide/build-file"},next:{title:"UI Elements",permalink:"/docs/iiq/plugin-developer-guide/ui-elements"}},l={},p=[];function o(e){const i={h1:"h1",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"database-scripts",children:"Database Scripts"}),"\n",(0,a.jsx)(i.p,{children:"Plugins that require persistence of data outside of that allowed by the IdentityIQ object model will require at minimum the creation, updating, and deletion of unique tablespace. For this purpose, the plugin framework introduced in IdentityIQ 7.1 has created a new database, appropriately named 'identityiqPlugin'. The creation of this database is handled by the installation scripts packaged with every download of IdentityIQ in the WEB-INF/database folder. Additionally, a default user 'identityiqPlugin' is also created to perform operations (plugin installation and deletion) on this new database. Similar to the base IdentityIQ username and password, these can be modified and updated in the IdentityIQ 'iiq.properties' file located in WEB-INF/classes/iiq.properties."}),"\n",(0,a.jsx)(i.p,{children:"For plugin creation, create a folder called 'db' in your project directory. Further subdivide this folder into three operation specific folders: install, uninstall, and upgrade."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Database Scripts",src:t(496522).Z+"",width:"355",height:"327"})}),"\n",(0,a.jsx)(i.p,{children:"The scripts placed in these folders automatically run when a plugin is installed or deleted with the UI. It is recommended that developers include scripts for the four major database types supported by IdentityIQ: MySQL, SQLServer, DB2, and Oracle. Otherwise, developers should ensure that they document which databases are supported. The 'upgrade' folder will contain any deltas in table definitions from prior versions of the plugin."})]})}function c(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},496522:(e,i,t)=>{t.d(i,{Z:()=>a});const a=t.p+"assets/images/database_scripts-e5ad792f5056bc95d629f21123cafb73.png"}}]);
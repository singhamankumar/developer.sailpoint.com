"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[76454],{890427:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(667294);const n={container:"container_hkNt",line:"line_KXFO",pulse:"pulse_pBme"};function i(){return r.createElement(r.Fragment,null,r.createElement("div",{className:n.container},r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line})))}},262247:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var r=a(667294),n=a(299927),i=a(811368);const o={featuredGridContainer:"featuredGridContainer_TaPv",gridContainer:"gridContainer_WtV6",center:"center_i0Gw",space:"space_Pc2M",noFound:"noFound_CesU",modal:"modal_cW7P",cardExit:"cardExit_yIkJ",featuredSpinnerCenter:"featuredSpinnerCenter_OmsE",spinnerCenter:"spinnerCenter_VaYI"},c={card:"card_k70r",featuredCard:"featuredCard_j_w2",thumbContainer:"thumbContainer_Emzb",cardText:"cardText_N5Vz",featuredThumbContainer:"featuredThumbContainer_mgWV",featuredCardImage:"featuredCardImage_qwqp",cardImage:"cardImage_pGNb",avatarContainer:"avatarContainer_oOaW",avatar:"avatar_hWqC",featuredTitleContainer:"featuredTitleContainer_Lavl",titleContainer:"titleContainer_sIEZ",featuredCardTitle:"featuredCardTitle_q4ZH",cardTitle:"cardTitle_HIN4",cardBody:"cardBody_aWVp",tag:"tag_tNg2",tags:"tags_JeGd"};var l=a(370393),s=a(725026);function d({featured:e,videoURL:t,thumbnail:a,title:n,body:i,avatar:o,username:d,tags:u}){return r.createElement(l.Z,{to:t},r.createElement("div",{title:d,className:e?c.featuredCard:c.card},r.createElement("div",{className:c.cardText},r.createElement("div",{className:e?c.featuredThumbContainer:c.thumbContainer},r.createElement("img",{className:e?c.featuredCardImage:c.cardImage,src:a})),r.createElement("div",{className:e?c.featuredCardTitle:c.cardTitle},r.createElement("div",{className:c.avatarContainer},r.createElement("img",{title:d,className:c.avatar,src:(0,s.default)(o)})),r.createElement("div",{className:e?c.featuredTitleContainer:c.titleContainer},n)),r.createElement("div",{className:c.tags},null==u?void 0:u.map(((e,t)=>r.createElement("div",{key:e,className:c.tag},e)))))))}var u=a(238767),m=a(890427),g=a(632718);function p({filterCallback:e,limit:t,featured:a}){const[n,i]=r.useState(),[c,l]=r.useState(!0);function s(e){const t=e.split("\n\nDescription\n"),a=t[0].trim(),r=a.split("/").pop().replace(".html","");return{videoUrl:a,description:t.length>1?t[1].trim():"",page:r}}return r.useEffect((()=>{(async()=>{let r=a?["featured"]:e.tags;const n=await(0,g.cz)(r||""),o=[];if(n.topic_list){for(const e of n.topic_list.topics)if(e.tags.length>0){let{videoUrl:t,description:r}=s(e.excerpt),i=t.replace(".html",".jpg"),l="",g="",p="";for(const a of e.posters)if(a.description.includes("Original Poster")){p=a;break}for(const e of n.users)if(e.id===p.user_id){g=e.name,l=f(e.avatar_template);break}r||(i=e.image_url),(a||!a&&!e.tags.includes("featured"))&&o.push({key:e.id,title:(m=e.title,m.length>63?m.substring(0,62)+"...":m),tags:e.tags,body:r|e.excerpt,thumbnail:i,avatar:l,username:g,url:(c=e.slug,d=e.id,(0,u.O$)()+`t/${c}/${d}`)})}}else i(void 0);var c,d,m;i(t?o.slice(0,t):o),l(!1)})(),i(void 0),l(!0)}),[e]),r.createElement("div",{className:a?null:o.center},c?r.createElement("div",{className:a?o.featuredSpinnerCenter:o.spinnerCenter},r.createElement(m.Z,null)):n&&n.length>0?r.createElement("div",{className:a?o.featuredGridContainer:o.gridContainer},n.map((function(e,t){return r.createElement(d,{featured:a,key:e.key,videoURL:e.url,thumbnail:e.thumbnail,title:e.title,body:e.body,avatar:e.avatar,tags:e.tags})}))):r.createElement("div",null,r.createElement("div",{className:o.noFound}," ","Hey there, looks like no integrations match your search criteria. Check out our"," ",r.createElement("a",{href:"https://developer.sailpoint.com/discuss/t/about-the-sailpoint-developer-community-colab/11230"},"getting started guide"),", and consider being the first to contribute this integration!")))}function f(e){return e.includes((0,u.gK)())?"https://"+(0,u.gK)()+e.replace("{size}","120"):e.replace("{size}","120")}const v={sidebar:"sidebar_fkbc",filterBy:"filterBy_xYtu",tagHeader:"tagHeader_rw16",hidden:"hidden_M2Rp",seeAll:"seeAll_BCl0",tagContainer:"tagContainer_p5hB",dropdownContainer:"dropdownContainer_ReO6",videoTypeFilter:"videoTypeFilter_X1Ay",dropdownButton:"dropdownButton_GY6R",dropdownContent:"dropdownContent_BYMj",dropdownItem:"dropdownItem_YCuX"};var h=a(496486),y=a(425108),C=Object.defineProperty,b=Object.defineProperties,E=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,O=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,j=(e,t)=>{for(var a in t||(t={}))w.call(t,a)&&O(e,a,t[a]);if(_)for(var a of _(t))N.call(t,a)&&O(e,a,t[a]);return e},k=(e,t)=>b(e,E(t));function S({filterCallback:e}){const[t,a]=r.useState(),[n,i]=r.useState(),[o,c]=r.useState(!1),[l,s]=r.useState("Filter by Product"),[d,u]=r.useState("Filter by Video Type"),[m,p]=r.useState({}),[f,C]=r.useState(null),b=()=>c(!o),E=t=>{p(k(j({},m),{[t.target.name]:t.target.checked}));let a="";t.target.checked?a=t.target.name:(y.log("productTags",l),y.log("event.target.name",t.target.name),a=l.replace(t.target.name,""),y.log("product",a));let r=[];t.target.checked&&r.push(t.target.name),(0,h.forEach)(m,((e,n)=>{n!==t.target.name&&!0===e&&(r.push(n),a.includes(n)||(a=a+" "+n))})),f&&r.push(f),t.target.checked,s(a),""!==a&&" "!==a||s("Filter by Product"),e({tag:r})},_=t=>{const a=t.target.checked?t.target.name:null;if(C(a),t.target.checked?u(t.target.name):u("Filter by Video Type"),m){let t=[];a&&t.push(a),(0,h.forEach)(m,((e,a)=>{!0===e&&t.push(a)})),e({tag:t})}else e({tag:a})};function w(e){return"identity-security-cloud"===e?"Identity Security Cloud":"access-intelligence-center"===e?"Access Intelligence Center":"developer-days-2023-iiq"===e?"Developer Days 2023 iiq":e}return r.useEffect((()=>{(async()=>{const e=new Set,t=new Set,r=await(0,g.NJ)();if(r.extras.tag_groups)for(const a of r.extras.tag_groups){if("Products"===a.name)for(const t of a.tags)e.add(t.name);if("Video Library"===a.name)for(const e of a.tags)t.add(e.name)}a(Array.from(e)),i(Array.from(t))})()}),[]),t?r.createElement("div",{className:v.tagContainer},r.createElement("div",null,r.createElement("div",{className:v.dropdownContainer},r.createElement("button",{onClick:b,className:v.dropdownButton},l),o&&r.createElement("div",{className:v.dropdownContent},t.map((function(e,t){return r.createElement("div",{className:v.dropdownItem,key:t},r.createElement("input",{type:"checkbox",id:e,name:e,checked:m[e]||!1,onChange:E}),r.createElement("label",{htmlFor:e},w(e)))}))))),r.createElement("div",{className:v.videoTypeFilter},r.createElement("div",{className:v.dropdownContainer},r.createElement("button",{onClick:b,className:v.dropdownButton},d),o&&r.createElement("div",{className:v.dropdownContent},n.map((function(e,t){return r.createElement("div",{className:v.dropdownItem,key:t},r.createElement("input",{type:"checkbox",id:e,name:e,checked:f===e,onChange:_}),r.createElement("label",{htmlFor:e},w(e)))})))))):r.createElement("div",null)}const T={videosCardContainer:"videosCardContainer_OZ04",featuredVideo:"featuredVideo_Xz5U",videosTitle:"videosTitle_lBaH",titleContainer:"titleContainer_o3Pt",mainCard:"mainCard_NWea",featuredGettingStartedText:"featuredGettingStartedText_Ky5Q",gettingStartedText:"gettingStartedText_FHen",gettingStartedOne:"gettingStartedOne_EX3w",gettingStartedTwo:"gettingStartedTwo_AhYF",gettingStartedThree:"gettingStartedThree_qCYC",bold:"bold_qMjr",video:"video_EhLl",contentContainer:"contentContainer_mcA2",carousel:"carousel_icEe",videoSideBar:"videoSideBar_iYib"};function $(){const[e,t]=r.useState({tags:[]}),{siteConfig:a}=(0,i.default)();return r.createElement(n.Z,{description:"The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions."},r.createElement("main",null,r.createElement("div",null,r.createElement("div",{className:T.titleContainer}),r.createElement("div",null,r.createElement("div",{className:T.mainCard},r.createElement("div",{className:T.contentContainer},r.createElement("div",{className:T.gettingStartedText},r.createElement("div",{className:T.gettingStartedOne},"Video Library"),r.createElement("div",{className:T.gettingStartedThree},r.createElement("span",null,"Our video library is a collection of educational videos from our Developer Relations team, live streams, conferences, and other community members.")," ",r.createElement("br",null),r.createElement("br",null),r.createElement("a",{href:"https://developer.sailpoint.com/discuss/new-message?groupname=developer_relations&title=Proposal%20for%20Developer%20Community%20Video&body=Write%20your%20request%20here."},"Contribute to our library \u2192"))),r.createElement("div",{className:T.featuredGettingStartedText},r.createElement("div",{className:T.gettingStartedOne},"Featured"))),r.createElement("div",{className:T.featuredVideo,title:"Featured Video"},r.createElement(p,{filterCallback:e,limit:1,featured:!0}))),r.createElement("div",{className:T.videosCardContainer},r.createElement("div",{className:T.videoSideBar},r.createElement(S,{selectedCategory:e,filterCallback:e=>{t({tags:e.tag})}})),r.createElement(p,{filterCallback:e}))))))}},632718:(e,t,a)=>{a.d(t,{F2:()=>l,FO:()=>m,IN:()=>o,KG:()=>i,NJ:()=>p,RS:()=>g,ZS:()=>c,cz:()=>u,u3:()=>s,vw:()=>d});var r=a(238767),n=a(425108);async function i(){try{const e=await fetch((0,r.O$)()+"top.json");return await e.json()}catch(e){return[]}}async function o(e,t,a){try{if(e){const e=await fetch((0,r.O$)()+"groups/expert_ambassadors/members.json?limit="+t+"&offset="+a);return await e.json()}{const e=await fetch((0,r.O$)()+"groups/ambassadors/members.json?limit="+t+"&offset="+a);return await e.json()}}catch(n){return[]}}async function c(e){try{const t=await fetch((0,r.O$)()+"user-cards.json?user_ids="+e.join(","));return await t.json()}catch(t){return[]}}async function l(){try{const e=await fetch((0,r.O$)()+"leaderboard/14.json");return await e.json()}catch(e){return[]}}async function s(e){let t="",a={users:[],topic_list:{topics:[]}};t=e.length<1?(0,r.O$)()+"c/content/community-blog/125.json":(0,r.O$)()+`tags/c/content/community-blog/${e}.json`;try{let r=0;for(;;){const n=0===r?t:`${t}${e.length>1?"&":"?"}page=${r}`,i=await fetch(n),o=await i.json();if(a.topic_list.topics=a.topic_list.topics.concat(o.topic_list.topics),a.users=a.users.concat(o.users),o.topic_list.topics.length<30)break;r++}return a}catch(n){return[]}}async function d(e){let t=(0,r.O$)()+"g/"+e+".json";try{const e=await fetch(t);return await e.json()}catch(a){return n.log(a),[]}}async function u(e){let t="",a={users:[],topic_list:{topics:[]}};e?(e.length<1&&(t=(0,r.O$)()+"c/content/video-library/127.json"),1===e.length&&(t=(0,r.O$)()+`/tags/c/content/video-library/127/${e}.json`),2===e.length&&(t=(0,r.O$)()+`filter.json?q=category%3Avideo-library%20tag%3A${e[0]}%2B${e[1]}`),3===e.length&&(t=(0,r.O$)()+`filter.json?q=category%3Avideo-library%20tag%3A${e[0]}%2B${e[1]}%2B${e[2]}`)):t=(0,r.O$)()+"c/content/video-library/l/latest.json";try{let r=0;for(;;){const n=0===r?t:`${t}${e.length>1?"&":"?"}page=${r}`,i=await fetch(n),o=await i.json();if(a.topic_list.topics=a.topic_list.topics.concat(o.topic_list.topics),a.users=a.users.concat(o.users),o.topic_list.topics.length<30)break;r++}return a}catch(n){return[]}}async function m(e,t){let a="colab";t&&"colab"!=t&&(a=a+"/"+t);let n="";n=e?(0,r.O$)()+"c/"+a+"/l/latest.json?tags="+e:(0,r.O$)()+"c/"+a+"/l/latest.json";try{const e=await fetch(n);return await e.json()}catch(i){return[]}}async function g(e){try{const t=await fetch((0,r.O$)()+"raw/"+e+".json");return await t.text()}catch(t){return[]}}async function p(){try{const e=await fetch((0,r.O$)()+"tags.json");return await e.json()}catch(e){return[]}}}}]);
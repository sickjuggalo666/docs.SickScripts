"use strict";(self.webpackChunkjuggin=self.webpackChunkjuggin||[]).push([[7639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i=void 0,s={unversionedId:"ESX/SickLockers/Installation",id:"ESX/SickLockers/Installation",title:"Installation",description:"General Info",source:"@site/docs/ESX/SickLockers/Installation.md",sourceDirName:"ESX/SickLockers",slug:"/ESX/SickLockers/Installation",permalink:"/docs/ESX/SickLockers/Installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/docs/ESX/SickJail/Examples"},next:{title:"Events",permalink:"/docs/ESX/SickLockers/Events"}},l={},c=[{value:"General Info",id:"general-info",level:2},{value:"<strong>Menu Options</strong>",id:"menu-options",level:2},{value:"<strong>Utilization</strong>",id:"utilization",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"general-info"},"General Info"),(0,r.kt)("h1",{id:"welcome-to-sicklockers"},"Welcome to ",(0,r.kt)("a",{parentName:"h1",href:"https://github.com/sickjuggalo666/SickEvidenceLockers"},(0,r.kt)("strong",{parentName:"a"},"SickLockers"))),(0,r.kt)("p",null,"Hey there and thanks for checking out my script! I hope you can find many uses for it and will enjoy it as much as me and my cities have! we use MF_Inventory before but have made the move to OX_Inventory!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Below is some General information for the script:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="REQUIREMENTS" showLineNumbers',title:'"REQUIREMENTS"',showLineNumbers:!0},"~ Ox_libs \n\n~ Ox_target\n\n~ ESX\n\n")),(0,r.kt)("h2",{id:"menu-options"},(0,r.kt)("strong",{parentName:"h2"},"Menu Options")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"~ Chief can access any inventory that has been created so long as they \nknow the name or case number for the locker/evidence storage! \n\n~ Lower rank officers can use this to store personal goods on them or \nif they go off duty they can leave their weapons in a safe place! \n\n~ Deletion is in there but will not work at this time until i figure a smooth way to delete they inventories! \nIf you have ideas PLEASE let me know! \n\n~ You can use multiple locations with job based menus and rank based chief menus! \n\n~ Each case has a unique id that can be pulled up from anywhere really!\n")),(0,r.kt)("h2",{id:"utilization"},(0,r.kt)("strong",{parentName:"h2"},"Utilization")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Utilization"',title:'"Utilization"'},"~ Uses OX_libs for context and Dialog \n\n~ Uses OX_Inventory for storage/lockers \n\n~ Webhooks for Creating and Deleting Inventories!\n\n")),(0,r.kt)("admonition",{title:"UPDATES",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"~ it\u2019s known that it seems like the stashs don\u2019t stay. It\u2019s more of an illusion as you will think you are creating a new one but it will open the one already made. Figuring a way to skip that."),(0,r.kt)("p",{parentName:"admonition"},"~ removed stateBags as it seemed some issues but found a way to remove requirement for 1.9.2"),(0,r.kt)("p",{parentName:"admonition"},"~ will be compatible with older esx versions out of box as it no longer uses state bags and I learned how to check for esx export and if nil use event."),(0,r.kt)("p",{parentName:"admonition"},"~ job lockers for other jobs set in config"),(0,r.kt)("p",{parentName:"admonition"},"~ cleaner config with more options")),(0,r.kt)("admonition",{title:"SUPPORT",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you need help with anything or have ideas for this or other scripts please join the Discord with the link below! Discord also has other scripts I have made and will be adding more as we go on! Thank you all again!"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/YCsBGB58eg"},"Discord"))))}m.isMDXComponent=!0}}]);
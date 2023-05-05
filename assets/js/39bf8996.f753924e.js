"use strict";(self.webpackChunkjuggin=self.webpackChunkjuggin||[]).push([[1358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:7,sidebar_label:"Stashes"},i="Jail Stashes",o={unversionedId:"ESX/SickJail/Stashes",id:"ESX/SickJail/Stashes",title:"Jail Stashes",description:"Inside the Prison are THREE Hidden stashes. These stashes can be used to store items for later Prison Sentences!",source:"@site/docs/ESX/SickJail/Stashes.md",sourceDirName:"ESX/SickJail",slug:"/ESX/SickJail/Stashes",permalink:"/docs/ESX/SickJail/Stashes",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Stashes"},sidebar:"tutorialSidebar",previous:{title:"Prison Break",permalink:"/docs/ESX/SickJail/Escape"},next:{title:"Installation",permalink:"/docs/ESX/SickLockers/Installation"}},l={},c=[],p={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jail-stashes"},"Jail Stashes"),(0,a.kt)("p",null,"Inside the Prison are ",(0,a.kt)("strong",{parentName:"p"},"THREE")," Hidden stashes. These stashes can be used to store items for later Prison Sentences! "),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Be Careful as other inmates can find these stashes and possibly take your items! The Risk of being in prison!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Server Side Stash Creation' showLineNumbers",title:"'Server",Side:!0,Stash:!0,"Creation'":!0,showLineNumbers:!0},"local stash1 = {\n    id = 'jailStash1',        \n    invLabel = \"Jail Stash\",                 \n    invWeight = 1000.0,                            \n    invSlots = 10                    \n}\nInventory:RegisterStash(stash1.id, stash1.invLabel, stash1.invSlots, stash1.invWeight, nil, false)\n\nlocal stash2 = {\n    id = 'jailStash2',        \n    invLabel = \"Jail Stash\",                 \n    invWeight = 1000.0,                            \n    invSlots = 10                    \n}\nInventory:RegisterStash(stash2.id, stash2.invLabel, stash2.invSlots, stash2.invWeight, nil, false)\n\nlocal stash3 = {\n    id = 'jailStash3',        \n    invLabel = \"Jail Stash\",                 \n    invWeight = 1000.0,                            \n    invSlots = 10                    \n}\nInventory:RegisterStash(stash3.id, stash3.invLabel, stash3.invSlots, stash3.invWeight, nil, false)\n")))}u.isMDXComponent=!0}}]);
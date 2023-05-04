"use strict";(self.webpackChunkjuggin=self.webpackChunkjuggin||[]).push([[9411],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??d;return b({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,o]),tabValues:o}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},b=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:m},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=p(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>d,toc:()=>b});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162),i=n(452),s=n(5901);const u={sidebar_position:1,sidebar_label:"General Info"},c=void 0,d={unversionedId:"ESX/SickJail/Installation",id:"ESX/SickJail/Installation",title:"Installation",description:"Welcome to SickJail. SickJail is a VERY interactive jail system for your Cities!",source:"@site/docs/ESX/SickJail/Installation.md",sourceDirName:"ESX/SickJail",slug:"/ESX/SickJail/Installation",permalink:"/docs/ESX/SickJail/Installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"General Info"},sidebar:"tutorialSidebar",previous:{title:"Pictures",permalink:"/docs/ESX/SickFines-PEFCL/Pictures"},next:{title:"Exports",permalink:"/docs/ESX/SickJail/Events"}},m={},b=[{value:"SQL",id:"sql",level:2},{value:"Items",id:"items",level:2}],h={toc:b},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to SickJail. SickJail is a VERY interactive jail system for your Cities! "),(0,r.kt)("p",null,"There are lots of different things you are able to do with it. "),(0,r.kt)("p",null,"Ranging from Gang system to legal jobs. "),(0,r.kt)("p",null,"There is a ton of options built in to the jail to give your players more to do while they do hefty sentences!"),(0,r.kt)("h2",{id:"sql"},"SQL"),(0,r.kt)("p",null,"There are a few things you will need to do before using the script!"),(0,r.kt)("admonition",{title:"SQL",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you do this before starting the script! This stores the info you will need while Jail is running")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SQL"',title:'"SQL"'},"CREATE TABLE IF NOT EXISTS `sickPrisonGangs` (\n    `id` int(11) NOT NULL AUTO_INCREMENT,\n    `identifier` varchar(60) DEFAULT NULL,\n    `gang` varchar(250) DEFAULT NULL,\n    `reputation` smallint(6) NOT NULL DEFAULT 0,\n    PRIMARY KEY (`id`) USING BTREE\n) ENGINE=InnoDB AUTO_INCREMENT=304 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;\n\nALTER TABLE users ADD COLUMN 'jail' int(15) NOT NULL DEFAULT 0;\n")),(0,r.kt)("admonition",{title:"Items",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Add all items to Ox_Inventory/data/items.lua")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"items"},"Items"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Items" showLineNumbers',title:'"Items"',showLineNumbers:!0},"Items = {\n    \n    ['prison_meal'] = {\n        label = 'Prison Meal',\n        weight = 150,\n        stack = true,\n        close = true,\n        description = 'Yummm prison food'\n    },\n\n    ['ingredients'] = {\n        label = 'Ingredients',\n        weight = 150,\n        stack = true,\n        close = true,\n        description = 'Idk you figure it out'\n    },\n\n    ['marlborocig'] = {\n        label = 'Marlboro Cig',\n        weight = 150,\n        stack = true,\n        close = true,\n        description = 'Mmmm the burn in your lungs!'\n    },\n\n    ['mud'] = {\n        label = 'Mud',\n        weight = 150,\n        stack = true,\n        close = true,\n        description = 'A NASTY susbstance'\n    },\n\n    ['hooch'] = {\n        label = 'Hooch',\n        weight = 150,\n        stack = true,\n        close = true,\n        description = 'Still Nasty but better'\n    },\n\n    ['rotten_oranges'] = {\n        label = 'Rotten Oranges',\n        weight = 150,\n        stack = true,\n        close = true,\n        description = 'These were left out a little long'\n    },\n\n    ['drugbag'] = {\n        label = 'Drug Bag',\n        weight = 150,\n        stack = true,\n        close = true,\n        description = 'The Ole Prison Wallet'\n    },\n\n    ['plastic'] = {\n        label = 'Plastic Pieces',\n        weight = 150,\n        stack = true,\n        close = true,\n        description = 'I\\'m sure you can find a use'\n    },\n\n    ['wood'] = {\n        label = 'Drug Bag',\n        weight = 150,\n        stack = true,\n        close = true,\n        description = 'Setting fires, making shanks'\n    },\n    \n    ['shovel'] = {\n        label = 'Shovel',\n        weight = 150,\n        stack = true,\n        close = true,\n        description = 'Digging you know'\n    },\n\n    ['cup_of_noodles'] = {\n        label = 'Cup Of Noodles',\n        weight = 150,\n        stack = true,\n        close = true,\n        description = 'Yummmm the Best Ever'\n    },\n}\n")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"legalJobs",label:"Legal Jobs",attributes:{className:s.Z.red},mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"jsx",mdxType:"CodeBlock"},"There is a range of legal jobs you are able to do for money or items \nthat can be used to obtain items not so easily gotten in prison! Adds \nmore to the feel of being in prison but actually being a model inmate!"),(0,r.kt)(i.Z,{languang:"jsk",title:"List of Legal Jobs",showLineNumbers:!0,mdxType:"CodeBlock"},"Cook (Kitchen Position where you cook meals and turn them in for Money or Items)\nElectrician (Fix the boxes around the yard to earn Money)\nInfirmary (Some Crazy inmate made a mess, it sucks but clean it up for a Reward!)\nTrash (Check Barrels and run trash bags and get money and maybe a random item hidden!)\nToilets (Clean the toilets in the unit these people are messy!)\n")),(0,r.kt)(l.Z,{value:"gangJobs",label:"Gang Jobs",attributes:{className:s.Z.red},mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"jsx",mdxType:"CodeBlock"},"Gang jobs will be choosen randomly. Some are easy some are more difficult! \nDo more work for the Gangs and find your self rewarded with more options and better\nitems!"),(0,r.kt)(i.Z,{language:"jsx",title:"List of Illegal Gang Jobs",showLineNumbers:!0,mdxType:"CodeBlock"},"Hooch (Grab the stuff needed to mix and head to the cell and whip up a batch, the Gangs will love this!)\nShiv (Someone hid a Shiv on the yard, find it and there is a nice reward!)\nSnitches (We all know what snitches get, so go handle it!)\nBunks (Everyone out a yard so search the bunks there was talk of a shipment coming in)"))))}g.isMDXComponent=!0},5901:(e,t,n)=>{n.d(t,{Z:()=>a});const a={red:"red_gL4c"}}}]);
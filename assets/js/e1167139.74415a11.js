"use strict";(self.webpackChunkjuggin=self.webpackChunkjuggin||[]).push([[2853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,u=f["".concat(c,".").concat(m)]||f[m]||p[m]||r;return n?i.createElement(u,a(a({ref:t},d),{},{components:n})):i.createElement(u,a({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,sidebar_label:"Usage"},a=void 0,s={unversionedId:"ESX/SickFines-PEFCL/Events",id:"ESX/SickFines-PEFCL/Events",title:"Events",description:"Invoices",source:"@site/docs/ESX/SickFines-PEFCL/Events.md",sourceDirName:"ESX/SickFines-PEFCL",slug:"/ESX/SickFines-PEFCL/Events",permalink:"/docs/ESX/SickFines-PEFCL/Events",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/ESX/SickFines-PEFCL/Installation"},next:{title:"Pictures",permalink:"/docs/ESX/SickFines-PEFCL/Pictures"}},c={},l=[{value:"Invoices",id:"invoices",level:2},{value:"Tickets",id:"tickets",level:2},{value:"Webhooks",id:"webhooks",level:2},{value:"Police Ticket Storage",id:"police-ticket-storage",level:2},{value:"Notifications",id:"notifications",level:2}],d={toc:l},f="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"invoices"},"Invoices"),(0,o.kt)("admonition",{title:"Invoices",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Invoices are sent Directly to the Bank")),(0,o.kt)("p",null,"Using PEFCL (Project Error Financial) you can send the invoice directly to the bank where you will need to pay it or after the time it will attempt to keep paying it until it is settled!"),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Sent Invoice Server Side'",title:"'Sent",Invoice:!0,Server:!0,"Side'":!0},"    Bank:createInvoice(src, {\n        to = PlayerName,                        -- {this is PLAYERS name}\n        toIdentifier = target.identifier,       -- {the Target Players ID}\n        from = OfficerName,                     -- {this is YOUR name}\n        fromIdentifier = xPlayer.identifier,    -- {YOUR ID}\n        amount = amount,                        -- {Amount sent from Client}\n        message = reason,                       --{ Reason Sent from Client}\n        receiverAccountIdentifier = xPlayer.identifier {-- if you dont want personal rewards for tickets put this as { Job } and it will send the money to the job not player!}\n    })\n")),(0,o.kt)("h2",{id:"tickets"},"Tickets"),(0,o.kt)("admonition",{title:"Tickets",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Tickets are sent to Officer and to an Inventory created to store these! ")),(0,o.kt)("p",null,"Tickets can be handed over to Player if you choose to do that or kept for records. There is already a Records system built in that will help you keep track of who does what ticket. This helps if you do something like a quota or bonuses for doing more tickets. As long as officer puts their name they will have a good recording."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example Ticket"',title:'"Example','Ticket"':!0},"    local info = {\n        amount = amount,\n        PlayerName = PlayerName,\n        OfficerName = OfficerName,\n        date = date\n    }\n\n    if Inventory:CanCarryItem(src, 'ticket', 1) then    -- if officer can carry ticket\n        Inventory:AddItem(src, 'ticket', 1, info )      -- add item\n    else                                                -- else if not can carry\n        Inventory:AddItem('police_tickets', 'ticket', 1, info)      -- add item to storage\n    end\n\n    Inventory:AddItem('police_tickets', 'ticket', 1, info)  -- ALWAYS add a copy to storage\n    local message = (('%s Issued a Ticket to %s, \\nReason: %s, \\nAmount $:%s'):format(OfficerName,PlayerName,reason,amount))\n    LetEmKnow(message)\nend)\n\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"webhooks"},"Webhooks"),(0,o.kt)("admonition",{title:"Webhooks",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Webhooks are set up for admin to monitor who does what with the tickets. Easier to maintain")),(0,o.kt)("p",null,"On Server sided lua there is a part for your WebHook! Server side is also where you can check the invoice to decide if you want pd or the person sending the ticket to get the money. There are notes in there to make sure you understand what is happening there!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Server Side"',title:'"Server','Side"':!0},'local Discord_url = \'\' -- server side to protect your webhooks\n\nlocal function LetEmKnow(message, footer)\n    local embed = {\n        {\n            ["color"] = 3085967,\n            ["title"] = "**Sick Ticket System**",\n            ["description"] = message,\n            ["footer"] = {\n                ["text"] = \'New Ticket\',\n            },\n            ["author"] = {\n            ["name"] = \'Made by | SickJuggalo666\',\n            [\'icon_url\'] = \'https://i.imgur.com/arJnggZ.png\'\n            }\n        }\n    }\n      \n    PerformHttpRequest(Discord_url, function(err, text, headers) end, \'POST\', json.encode({username = "Sick Ticket System", embeds = embed}), { [\'Content-Type\'] = \'application/json\' })\nend\n')),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"police-ticket-storage"},"Police Ticket Storage"),(0,o.kt)("admonition",{title:"Police",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is where the other copy goes AUTOMATICALLY after creation")),(0,o.kt)("p",null,"This will be where the tickets go after an officer creates one. This is for keeping records and just knowing whats going on in your Police Department. You can use this to track how many tickets are made by a certain officer and even an amount that is recorded. This Inventory NEEDS to be cleared out Often to avoid tickets being LOST. After Recording you can either dispose of them in any way fit or find something/somewhere to put them for later reference if needed!"),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Inventory Creation"',title:'"Inventory','Creation"':!0},"Citizen.CreateThread(function()\n    for k, v in pairs(Config.Jobs) do\n        local tickets = {\n            id = v.id,\n            label = v.label,\n            slots = v.slots,\n            maxWeight = v.maxWeight,\n            groups = { [v.name] = v.rank }\n        }\n\n        Inventory:RegisterStash(tickets.id, tickets.label, tickets.slots, tickets.maxWeight, nil, tickets.groups)\n        print(('Creating Inventory for %s, Label: %s, Slots: %s, MaxWeight: %s, Groups: %s'):format(tickets.id,tickets.label,tickets.slots,tickets.maxWeight,tickets.groups))\n    end\nend)\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"notifications"},"Notifications"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='Client Notifications'",title:"'Client","Notifications'":!0},"function CNotify(noty_type,message)\n    if noty_type and message then\n        if Config.Notifications.Client == 'esx' then\n            ESX.ShowNotification(message)\n\n        elseif Config.Notifications.Client == 'okok' then\n            if noty_type == 1 then\n                exports['okokNotify']:Alert('Fines', message, 2500, 'success')\n            elseif noty_type == 2 then\n                exports['okokNotify']:Alert('Fines', message, 2500, 'info')\n            elseif noty_type == 3 then\n                exports['okokNotify']:Alert('Fines', message, 2500, 'error')\n            end\n\n        elseif Config.Notifications.Client == 'YOUR_NOTIFICATIONS_HERE' then\n\n        end\n    end\nend\n")))}p.isMDXComponent=!0}}]);
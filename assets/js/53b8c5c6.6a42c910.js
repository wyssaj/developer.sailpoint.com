"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[60935],{224010:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>d});var t=r(785893),o=r(511151);const l={id:"powershell-sdk-retries",title:"Retries with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Retries",sidebar_position:6,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","retry"],description:"Learn how to configure retries using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/retries",tags:["SDK"]},i=void 0,n={id:"tools/sdk/powershell/powershell-sdk-retries",title:"Retries with the PowerShell SDK",description:"Learn how to configure retries using the PowerShell SDK in this guide.",source:"@site/docs/tools/sdk/powershell/retries.md",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell/retries",permalink:"/docs/tools/sdk/powershell/retries",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/retries.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726169183e3,sidebarPosition:6,frontMatter:{id:"powershell-sdk-retries",title:"Retries with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Retries",sidebar_position:6,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","retry"],description:"Learn how to configure retries using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/retries",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/search"},next:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/error-handling"}},a={},d=[];function h(e){const s={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"The SDK supports retry logic in the case of an unexpected error. You have these two retry configuration options:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"MaximumRetryCount - How many times to retry the request. Default is 10 retries."}),"\n",(0,t.jsx)(s.li,{children:"RetryIntervalSeconds - How many seconds to wait between retries. Default is 5 seconds."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The following code will tell the SDK to retry 2 times after an unexpected error and wait 3 seconds between retries."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-powershell",children:"Set-DefaultConfiguration -MaximumRetryCount 2 -RetryIntervalSeconds 3\n"})})]})}function p(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);
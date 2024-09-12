"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[51699],{288318:(i,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>r});var e=t(785893),s=t(511151);const c={id:"saas-connectivity-limits",title:"Limits",pagination_label:"Limits",sidebar_label:"Limits",sidebar_position:6.8,sidebar_class_name:"limits",keywords:["connectivity","connectors","commands","cli"],description:"This describes certain limits that are in place when running a SaaS Connector",slug:"/connectivity/saas-connectivity/limits",tags:["Connectivity"]},o=void 0,a={id:"connectivity/saas-connectivity/saas-connectivity-limits",title:"Limits",description:"This describes certain limits that are in place when running a SaaS Connector",source:"@site/docs/connectivity/saas-connectivity/limits.md",sourceDirName:"connectivity/saas-connectivity",slug:"/connectivity/saas-connectivity/limits",permalink:"/docs/connectivity/saas-connectivity/limits",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/limits.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726169183e3,sidebarPosition:6.8,frontMatter:{id:"saas-connectivity-limits",title:"Limits",pagination_label:"Limits",sidebar_label:"Limits",sidebar_position:6.8,sidebar_class_name:"limits",keywords:["connectivity","connectors","commands","cli"],description:"This describes certain limits that are in place when running a SaaS Connector",slug:"/connectivity/saas-connectivity/limits",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Postman Collection",permalink:"/docs/connectivity/saas-connectivity/postman-collection"},next:{title:"Connector Commands",permalink:"/docs/connectivity/saas-connectivity/connector-commands"}},l={},r=[];function d(i){const n={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...i.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.p,{children:"Below is a list of limits set in SaaS Connectivity:"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Max Run Time"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["The actual run time of a connector is not limited at this time, however a response in the form of ",(0,e.jsx)(n.code,{children:"res.send()"})," must be recieved from a command at least every 3 minutes"]}),"\n",(0,e.jsxs)(n.li,{children:["If you have a long running call, you can use ",(0,e.jsx)(n.code,{children:"res.keepAlive()"})," to send a heartbeat to Identity Security Cloud in between ",(0,e.jsx)(n.code,{children:"res.send()"})," calls to let it know the connector is still running"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Response Size"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["The maximum size of a single ",(0,e.jsx)(n.code,{children:"res.send()"})," call is 256 KiB. Note that some metadata is sent along with the call, so the max size of the payload sent will be slightly less than 256 KiB"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Memory Limits"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"Each instance of a running SaaS connector is limited to 512 MB"}),"\n"]}),"\n"]}),"\n"]})]})}function m(i={}){const{wrapper:n}={...(0,s.a)(),...i.components};return n?(0,e.jsx)(n,{...i,children:(0,e.jsx)(d,{...i})}):d(i)}}}]);
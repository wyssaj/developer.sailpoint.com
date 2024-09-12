"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[86372],{924032:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(785893),t=n(511151);const i={id:"uuid-generator",title:"UUID Generator",pagination_label:"UUID Generator",sidebar_label:"UUID Generator",sidebar_class_name:"uuidGenerator",keywords:["transforms","operations","uuid","generator"],description:"Create a universal unique ID (UUID).",slug:"/extensibility/transforms/operations/uuid-generator",tags:["Transforms","Transform Operations"]},a=void 0,o={id:"extensibility/transforms/operations/uuid-generator",title:"UUID Generator",description:"Create a universal unique ID (UUID).",source:"@site/docs/extensibility/transforms/operations/uuid-generator.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/uuid-generator",permalink:"/docs/extensibility/transforms/operations/uuid-generator",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/uuid-generator.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726169183e3,frontMatter:{id:"uuid-generator",title:"UUID Generator",pagination_label:"UUID Generator",sidebar_label:"UUID Generator",sidebar_class_name:"uuidGenerator",keywords:["transforms","operations","uuid","generator"],description:"Create a universal unique ID (UUID).",slug:"/extensibility/transforms/operations/uuid-generator",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Username Generator",permalink:"/docs/extensibility/transforms/operations/username-generator"},next:{title:"Rules",permalink:"/docs/extensibility/rules"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const r={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(r.p,{children:"Use the UUID generator transform to create a universal unique ID (UUID) in the form of a 36-character string."}),"\n",(0,s.jsx)(r.admonition,{title:"Other Considerations",type:"note",children:(0,s.jsx)(r.p,{children:"There is no uniqueness checking in this transform - the underlying code is written to provide a 1 in 68,719,476,736 chance of creating a string that actually collides with another string within the tenant, so the generated UUID's uniqueness is very likely, but it is not guaranteed."})}),"\n",(0,s.jsx)(r.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,s.jsxs)(r.p,{children:["The UUID generator transform only requires the transform's ",(0,s.jsx)(r.code,{children:"type"})," and ",(0,s.jsx)(r.code,{children:"name"})," attributes:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "type": "uuid",\n  "name": "UUID Generator Transform"\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Required Attributes"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"type"})," - This must always be set to ",(0,s.jsx)(r.code,{children:"uuid"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Optional Attributes"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,s.jsx)(r.code,{children:"true"})," or ",(0,s.jsx)(r.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.p,{children:'This transform produces a UUID such as "f7493c55-f3fc-491a-b352-4664d71f885b".'}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "type": "uuid",\n  "name": "UUID Generator Transform"\n}\n'})})]})}function c(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);
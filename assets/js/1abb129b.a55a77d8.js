"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[2285],{162943:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var r=s(785893),t=s(511151);const i={id:"e164-phone",title:"E.164 Phone",pagination_label:"E.164 Phone",sidebar_label:"E.164 Phone",sidebar_class_name:"e164Phone",keywords:["transforms","operations","e164","phone"],description:"Convert a phone number string into an E.164-compatible number.",slug:"/extensibility/transforms/operations/e164-phone",tags:["Transforms","Transform Operations"]},o=void 0,a={id:"extensibility/transforms/operations/e164-phone",title:"E.164 Phone",description:"Convert a phone number string into an E.164-compatible number.",source:"@site/docs/extensibility/transforms/operations/e164-phone.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/e164-phone",permalink:"/docs/extensibility/transforms/operations/e164-phone",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/e164-phone.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726169183e3,frontMatter:{id:"e164-phone",title:"E.164 Phone",pagination_label:"E.164 Phone",sidebar_label:"E.164 Phone",sidebar_class_name:"e164Phone",keywords:["transforms","operations","e164","phone"],description:"Convert a phone number string into an E.164-compatible number.",slug:"/extensibility/transforms/operations/e164-phone",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Display Name",permalink:"/docs/extensibility/transforms/operations/display-name"},next:{title:"First Valid",permalink:"/docs/extensibility/transforms/operations/first-valid"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Use the E.164 phone transform to convert an incoming phone number string into an E.164-compatible number."}),"\n",(0,r.jsx)(n.admonition,{title:"Other Considerations",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the input string to the transform does not represent a valid phone number, the transform returns null."}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,r.jsxs)(n.p,{children:["The E.164 phone transform only requires the transform's ",(0,r.jsx)(n.code,{children:"type"})," and ",(0,r.jsx)(n.code,{children:"name"})," attributes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "type": "e164phone",\n  "name": "Test E.164Phone Transform"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Required Attributes"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"type"})," - This must always be set to ",(0,r.jsx)(n.code,{children:"E.164phone."})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Optional Attributes"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,r.jsx)(n.code,{children:"true"})," or ",(0,r.jsx)(n.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"input"})," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"defaultRegion"})," - This is an optional attribute used to define the phone number region to format into. If no defaultRegion is provided, the transform takes US as the default country. The format of the country code must be in ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",children:"ISO 3166-1 alpha-2 format"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["This transform transforms a phone number seperated by ",(0,r.jsx)(n.code,{children:"-"})," into the E.164 Phone format."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'Input: "512-777-2222"\nOutput: "+1512459222"\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "512-777-2222"\n      },\n      "type": "static"\n    }\n  },\n  "type": "e164phone",\n  "name": "E.164Phone Transform"\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)("p",{children:"\xa0"}),"\n",(0,r.jsxs)(n.p,{children:["This transform transforms a phone number seperated by ",(0,r.jsx)(n.code,{children:"."})," into the E.164 Phone format."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'Input: "779.284.2727"\nOutput: "+17792842727"\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "779.284.2727"\n      },\n      "type": "static"\n    }\n  },\n  "type": "e164phone",\n  "name": "E.164Phone Transform"\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)("p",{children:"\xa0"}),"\n",(0,r.jsx)(n.p,{children:"This transform transforms a phone number and country region code into the E.164 Phone format."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'Input: "0412345678"\ndefaultRegion: "AU"\n\nOutput: "+61412345678"\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "0412345678"\n      },\n      "type": "static"\n    },\n    "defaultRegion": "AU"\n  },\n  "type": "e164phone",\n  "name": "E.164Phone Transform"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/E.164",children:"https://en.wikipedia.org/wiki/E.164"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",children:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);
"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[53921],{105988:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=n(785893),a=n(511151);const t={id:"cli-transforms",title:"CLI Transforms",pagination_label:"CLI Transforms",sidebar_label:"Transforms",sidebar_position:6,sidebar_class_name:"cli-transforms",keywords:["cli","cli transforms","transforms"],description:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide.",slug:"/tools/cli/transforms",tags:["CLI"]},o="Transforms",i={id:"tools/cli/cli-transforms",title:"CLI Transforms",description:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide.",source:"@site/docs/tools/cli/transforms.md",sourceDirName:"tools/cli",slug:"/tools/cli/transforms",permalink:"/docs/tools/cli/transforms",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/transforms.md",tags:[{inline:!0,label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726169183e3,sidebarPosition:6,frontMatter:{id:"cli-transforms",title:"CLI Transforms",pagination_label:"CLI Transforms",sidebar_label:"Transforms",sidebar_position:6,sidebar_class_name:"cli-transforms",keywords:["cli","cli transforms","transforms"],description:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide.",slug:"/tools/cli/transforms",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI-SPConfig",permalink:"/docs/tools/cli/spconfig"},next:{title:"CLI VA",permalink:"/docs/tools/cli/va"}},l={},d=[{value:"Commands",id:"commands",level:2},{value:"List transforms",id:"list-transforms",level:2},{value:"Download transforms",id:"download-transforms",level:2},{value:"Create transform",id:"create-transform",level:2},{value:"Update transform",id:"update-transform",level:2},{value:"Delete transform",id:"delete-transform",level:2}];function c(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"transforms",children:"Transforms"}),"\n",(0,r.jsx)(e.p,{children:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide."}),"\n",(0,r.jsxs)(e.p,{children:["In Identity Security Cloud (ISC), you can use transforms to manipulate attribute data without writing any code. For more information about transforms, refer to ",(0,r.jsx)(e.a,{href:"/docs/extensibility/transforms",children:"Transforms"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["With the ",(0,r.jsx)(e.code,{children:"transforms"})," command, it's it easy to create, manage, and test transforms in the CLI."]}),"\n",(0,r.jsx)(e.h2,{id:"commands",children:"Commands"}),"\n",(0,r.jsx)(e.p,{children:"To create, manage, and test transforms with the CLI, you can use these commands:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"#transforms",children:"Transforms"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#commands",children:"Commands"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#list-transforms",children:"List transforms"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#download-transforms",children:"Download transforms"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#create-transform",children:"Create transform"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#update-transform",children:"Update transform"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#delete-transform",children:"Delete transform"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"list-transforms",children:"List transforms"}),"\n",(0,r.jsx)(e.p,{children:"To get a list of the transforms available in your tenant, run this command:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"sail transform list\n"})}),"\n",(0,r.jsx)(e.p,{children:"This command produces a table of available transforms."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Transform List",src:n(812869).Z+"",width:"1200",height:"500"})}),"\n",(0,r.jsx)(e.h2,{id:"download-transforms",children:"Download transforms"}),"\n",(0,r.jsxs)(e.p,{children:["To download all the transforms in your tenant and save them as ",(0,r.jsx)(e.code,{children:"json"})," files on your computer, run the following command. By default, this command will save the files in the current working directory. Use the ",(0,r.jsx)(e.code,{children:"-d"})," flag to specify a path to an output directory."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"sail transform download -d transform_files\n"})}),"\n",(0,r.jsxs)(e.p,{children:["By default, this command will save the files in the current working directory. Use the ",(0,r.jsx)(e.code,{children:"-d"})," flag to specify a path to an output directory."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Transform Download",src:n(790014).Z+"",width:"1200",height:"500"})}),"\n",(0,r.jsx)(e.p,{children:"This command will overwrite any existing files with the same name, so be careful when you run this in a directory that has transforms that have been modified but not yet saved."}),"\n",(0,r.jsx)(e.h2,{id:"create-transform",children:"Create transform"}),"\n",(0,r.jsxs)(e.p,{children:["To create a new transform from a ",(0,r.jsx)(e.code,{children:"json"})," file, run the following command. Use the ",(0,r.jsx)(e.code,{children:"-f"})," flag to specify the path to the ",(0,r.jsx)(e.code,{children:"json"})," file."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"sail transform create -f transform.json\n"})}),"\n",(0,r.jsx)(e.h2,{id:"update-transform",children:"Update transform"}),"\n",(0,r.jsxs)(e.p,{children:["To update a transform from a ",(0,r.jsx)(e.code,{children:"json"})," file, run the following command. Use the ",(0,r.jsx)(e.code,{children:"-f"})," flag to specify the path to the ",(0,r.jsx)(e.code,{children:"json"})," file."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"sail transform update -f transform.json\n"})}),"\n",(0,r.jsx)(e.p,{children:"A common workflow is to first download the transforms, then make edits to the transform file, and then use the update command to save those edits in ISC."}),"\n",(0,r.jsx)(e.h2,{id:"delete-transform",children:"Delete transform"}),"\n",(0,r.jsx)(e.p,{children:"To delete a transform, run this command:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"sail transform delete <transform-id>\n"})}),"\n",(0,r.jsx)(e.p,{children:"To delete multiple transforms, use this syntax:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"sail transform delete <transform-id> <transform-id> <transform-id>\n"})}),"\n",(0,r.jsxs)(e.p,{children:["You can use this command in conjunction with the ",(0,r.jsx)(e.code,{children:"ls"})," command to find the ID of the transform you want to delete."]}),"\n",(0,r.jsx)(e.p,{children:"This is an example of how you can find a transform ID and delete it:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"sail transform list\n+--------------------------------------+--------------------------+\n|                  ID                  |           NAME           |\n+--------------------------------------+--------------------------+\n| 03d5187b-ab96-402c-b5a1-40b74285d77a | WIFI Group               |\n| 06d589cf-4d7d-4b40-8617-c221092ceb2c | Remove Diacritical Marks |\n| 1f3a97cf-e58b-4fad-b2f2-0dcc19fb1627 | NETID                    |\n+--------------------------------------+--------------------------+\nsail transform delete 03d5187b-ab96-402c-b5a1-40b74285d77a\n"})})]})}function m(s={}){const{wrapper:e}={...(0,a.a)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(c,{...s})}):c(s)}},790014:(s,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/transform-download-23453d19230ad2708a3389a3a026179f.gif"},812869:(s,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/transform-list-033f4d95c861fda8172582e306ec55e0.gif"}}]);
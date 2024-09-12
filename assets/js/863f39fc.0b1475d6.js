"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[61345],{10417:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var i=n(785893),o=n(511151);const t={id:"cli-spconfig",title:"SP Config",pagination_label:"CLI-SPConfig",sidebar_label:"SPConfig",sidebar_position:5,sidebar_class_name:"cli-spconfig",keywords:["cli","spconfig"],description:"Learn how to use the CLI to SPConfig.",slug:"/tools/cli/spconfig",tags:["CLI"]},l=void 0,d={id:"tools/cli/cli-spconfig",title:"SP Config",description:"Learn how to use the CLI to SPConfig.",source:"@site/docs/tools/cli/spconfig.md",sourceDirName:"tools/cli",slug:"/tools/cli/spconfig",permalink:"/docs/tools/cli/spconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/spconfig.md",tags:[{inline:!0,label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726169183e3,sidebarPosition:5,frontMatter:{id:"cli-spconfig",title:"SP Config",pagination_label:"CLI-SPConfig",sidebar_label:"SPConfig",sidebar_position:5,sidebar_class_name:"cli-spconfig",keywords:["cli","spconfig"],description:"Learn how to use the CLI to SPConfig.",slug:"/tools/cli/spconfig",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI-Set",permalink:"/docs/tools/cli/set"},next:{title:"CLI Transforms",permalink:"/docs/tools/cli/transforms"}},r={},a=[{value:"SPConfig",id:"spconfig",level:2},{value:"Commands",id:"commands",level:2},{value:"Download",id:"download",level:3},{value:"Flags",id:"flags",level:4},{value:"Import",id:"import",level:3},{value:"Flags",id:"flags-1",level:4},{value:"Export",id:"export",level:3},{value:"Flags",id:"flags-2",level:4},{value:"Status",id:"status",level:3},{value:"Flags",id:"flags-3",level:4},{value:"Template",id:"template",level:3},{value:"Flags",id:"flags-4",level:4}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"spconfig",children:"SPConfig"}),"\n",(0,i.jsx)(s.p,{children:"Learn how to use the CLI to import and export configurations."}),"\n",(0,i.jsxs)(s.p,{children:["You can use the ",(0,i.jsx)(s.a,{href:"/docs/api/beta/sp-config",children:"SP Config APIs"})," to import configurations into ISC and export them out."]}),"\n",(0,i.jsxs)(s.p,{children:["With the ",(0,i.jsx)(s.code,{children:"spconfig"})," command, you can access the same functionality."]}),"\n",(0,i.jsx)(s.h2,{id:"commands",children:"Commands"}),"\n",(0,i.jsx)(s.p,{children:"To perform SPConfig operations, you can run these commands:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#spconfig",children:"SPConfig"})}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#commands",children:"Commands"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#download",children:"Download"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#flags",children:"Flags"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#import",children:"Import"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#flags-1",children:"Flags"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#export",children:"Export"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#flags-2",children:"Flags"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#status",children:"Status"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#flags-3",children:"Flags"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#template",children:"Template"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#flags-4",children:"Flags"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"download",children:"Download"}),"\n",(0,i.jsxs)(s.p,{children:["You can use the ",(0,i.jsx)(s.code,{children:"download"})," command to download import and export job results from ISC. The ",(0,i.jsx)(s.code,{children:"download"})," command is specified differently for ",(0,i.jsx)(s.strong,{children:"Linux/Mac"})," and ",(0,i.jsx)(s.strong,{children:"Windows"}),", respectively."]}),"\n",(0,i.jsxs)(s.p,{children:["To download import and export job results from ISC on ",(0,i.jsx)(s.strong,{children:"Linux/Mac"}),", run this command:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"sail spconfig download \\\n  --export {export job ID} \\\n  --export {export job ID}\n"})}),"\n",(0,i.jsxs)(s.p,{children:["To download import and export job results from ISC on ",(0,i.jsx)(s.strong,{children:"Windows"}),", run this command:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"sail spconfig download \\\n  --export {export job ID} \\\n  --import {import job ID}\n"})}),"\n",(0,i.jsx)(s.h4,{id:"flags",children:"Flags"}),"\n",(0,i.jsxs)(s.p,{children:["You can add these flags to the ",(0,i.jsx)(s.code,{children:"download"})," command:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"import"}),": Add this flag to specify the import job ID to download."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"export"}),": Add this flag to specify the export job ID to download."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"folderPath"}),": Add this flag to specify the folder path to save the download in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"import",children:"Import"}),"\n",(0,i.jsx)(s.p,{children:"To begin an import task in ISC, run this command:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"sail spconfig import \\\n  --filePath path/to/the/import/file\n"})}),"\n",(0,i.jsx)(s.h4,{id:"flags-1",children:"Flags"}),"\n",(0,i.jsxs)(s.p,{children:["You can add these flags to the ",(0,i.jsx)(s.code,{children:"import"})," command:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"folderPath"}),": Add this flag to specify the folder path to save the import job in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"export",children:"Export"}),"\n",(0,i.jsx)(s.p,{children:"To begin an export task in ISC, run this command:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:'sail spconfig export \\\n  --include {types to include} \\\n  --exclude {types to exclude} \\\n  --description "optional description for the export job"\n'})}),"\n",(0,i.jsx)(s.h4,{id:"flags-2",children:"Flags"}),"\n",(0,i.jsxs)(s.p,{children:["You can add these flags to the ",(0,i.jsx)(s.code,{children:"export"})," command:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"include"}),": Add this flag to specify the types to include in the export job."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"exclude"}),": Add this flag to specify the types to exclude from the export job."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"description"}),": Add this flag to provide an optional description for the export job."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"folderPath"}),": Use this flag to specify the folder path you want to save the export job in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"wait"}),": Use this boolean to specify whether the CLI should wait for the export job to finish before downloading the results. This flag is false by default. Setting it to true sets the CLI to wait until the job finishes before downloading the results."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"status",children:"Status"}),"\n",(0,i.jsx)(s.p,{children:"To check the status of import and export jobs in ISC, run this command:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"sail spconfig status --import {import job ID to check} --export {export job ID to check}\n"})}),"\n",(0,i.jsx)(s.h4,{id:"flags-3",children:"Flags"}),"\n",(0,i.jsxs)(s.p,{children:["You can add these flags to the ",(0,i.jsx)(s.code,{children:"status"})," command:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"import"}),": Add this flag to specify a list of import job IDs to check the status of. This examples shows how"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"export"}),": Add this flag to specify a list of export job IDs to check the status of."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"template",children:"Template"}),"\n",(0,i.jsx)(s.p,{children:"To begin exporting a template from ISC, run this command:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"sail spconfig template\n"})}),"\n",(0,i.jsx)(s.h4,{id:"flags-4",children:"Flags"}),"\n",(0,i.jsxs)(s.p,{children:["You can add these flags to the ",(0,i.jsx)(s.code,{children:"template"})," command:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"folderPath"}),": Use this flag to specify the folder path you want to save the template in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"wait"}),": Use this boolean to specify whether the CLI should wait for the export job to finish before downloading the results. This flag is false by default. Setting it to true sets the CLI to wait until the job finishes before downloading the results."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);
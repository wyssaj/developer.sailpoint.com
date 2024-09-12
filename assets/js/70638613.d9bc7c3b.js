"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[26393],{625573:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(785893),s=i(511151);const o={id:"cli",title:"Command Line Interface",pagination_label:"Command Line Interface",sidebar_label:"CLI",sidebar_position:1,sidebar_class_name:"cli",keywords:["cli"],description:"Terminal-based tool for interaction with ISC.",slug:"/tools/cli",tags:["CLI"]},a=void 0,r={id:"tools/cli/cli",title:"Command Line Interface",description:"Terminal-based tool for interaction with ISC.",source:"@site/docs/tools/cli/index.md",sourceDirName:"tools/cli",slug:"/tools/cli",permalink:"/docs/tools/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/index.md",tags:[{inline:!0,label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726169183e3,sidebarPosition:1,frontMatter:{id:"cli",title:"Command Line Interface",pagination_label:"Command Line Interface",sidebar_label:"CLI",sidebar_position:1,sidebar_class_name:"cli",keywords:["cli"],description:"Terminal-based tool for interaction with ISC.",slug:"/tools/cli",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"Tools",permalink:"/docs/tools"},next:{title:"CLI Connectors",permalink:"/docs/tools/cli/connectors"}},l={},c=[{value:"Start using the CLI",id:"start-using-the-cli",level:2},{value:"Contents",id:"contents",level:2},{value:"Get the CLI",id:"get-the-cli",level:2},{value:"Windows",id:"windows",level:3},{value:"MacOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3},{value:"Deb Package",id:"deb-package",level:4},{value:"RPM Package",id:"rpm-package",level:4},{value:"Configuration",id:"configuration",level:2},{value:"OAuth Authentication",id:"oauth-authentication",level:3},{value:"PAT Authentication",id:"pat-authentication",level:3},{value:"Environment variable configuration",id:"environment-variable-configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"GitHub",id:"github",level:2},{value:"Contribution",id:"contribution",level:2},{value:"Questions",id:"questions",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"start-using-the-cli",children:"Start using the CLI"}),"\n",(0,t.jsx)(n.p,{children:'The SailPoint CLI is a terminal-based tool you can use to to interact with your Identity Security Cloud (ISC) tenant. The CLI provides a text-based environment you can use to run operations known as "commands" to interact with your tenant however you want.'}),"\n",(0,t.jsx)(n.p,{children:"You can use the CLI to perform many functions you would have otherwise used Postman or custom scripts to perform before. For example, you can use the CLI to call the SailPoint APIs to do whatever you want in your ISC tenant, and you can do all this directly on the command line, with minimal setup."}),"\n",(0,t.jsx)("div",{class:"text--center",children:(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JInlFmABuO8?si=CE8fw3RB1w7qFESv",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,t.jsx)(n.p,{children:"Learn how to use the SailPoint command line interface (CLI) in this guide."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/sailpoint-oss/sailpoint-cli/blob/main/assets/img/vhs/Sail.gif?raw=true",alt:"Sail"})}),"\n",(0,t.jsx)(n.h2,{id:"contents",children:"Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#start-using-the-cli",children:"Start using the CLI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#contents",children:"Contents"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#get-the-cli",children:"Get the CLI"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#windows",children:"Windows"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#macos",children:"MacOS"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#linux",children:"Linux"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#deb-package",children:"Deb Package"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#rpm-package",children:"RPM Package"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#oauth-authentication",children:"OAuth Authentication"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#pat-authentication",children:"PAT Authentication"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#environment-variable-configuration",children:"Environment variable configuration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#github",children:"GitHub"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#contribution",children:"Contribution"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#questions",children:"Questions"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-the-cli",children:"Get the CLI"}),"\n",(0,t.jsxs)(n.p,{children:["To install the SailPoint CLI: use a package manager for the OS of your choice. Prebuilt binaries for OS X, Windows, and Linux are provided in each ",(0,t.jsx)(n.a,{href:"https://github.com/sailpoint-oss/sailpoint-cli/releases",children:"release"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Note this installer is only compatible with 64 bit Windows."})}),"\n",(0,t.jsxs)(n.p,{children:["Download the latest release from the ",(0,t.jsx)(n.a,{href:"https://github.com/sailpoint-oss/sailpoint-cli/releases",children:"releases page"}),". The release should include an MSI file named ",(0,t.jsx)(n.code,{children:"sail_x.x.x_windows_amd64.msi"})," that can be installed on Windows, with ",(0,t.jsx)(n.code,{children:"x.x.x"})," being the version of the most recent release."]}),"\n",(0,t.jsx)(n.p,{children:"To install the MSI file, double click on it and follow the prompts in the installer."}),"\n",(0,t.jsx)(n.h3,{id:"macos",children:"MacOS"}),"\n",(0,t.jsxs)(n.p,{children:["MacOS users can use ",(0,t.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," to install the CLI. Run these commands in your terminal:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew tap sailpoint-oss/tap && brew install sailpoint-cli\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then make sure you can run the ",(0,t.jsx)(n.code,{children:"sail"})," command."]}),"\n",(0,t.jsx)(n.h3,{id:"linux",children:"Linux"}),"\n",(0,t.jsxs)(n.p,{children:["Each release on the ",(0,t.jsx)(n.a,{href:"https://github.com/sailpoint-oss/sailpoint-cli/releases",children:"releases page"})," includes a tarball that can be extracted and run on Linux. Or you can install using the available .deb or .rpm packages."]}),"\n",(0,t.jsx)(n.h4,{id:"deb-package",children:"Deb Package"}),"\n",(0,t.jsx)(n.p,{children:"Download the specific .deb package from the release you wish to install"}),"\n",(0,t.jsxs)(n.p,{children:["Then install it using one of the following commands, with the ",(0,t.jsx)(n.code,{children:"x.x.x"})," being the version of the most recent release."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install ./sail_x.x.x_linux_amd64.deb\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install /path/to/deb/package/sail_x.x.x_linux_amd64.deb\n"})}),"\n",(0,t.jsx)(n.h4,{id:"rpm-package",children:"RPM Package"}),"\n",(0,t.jsx)(n.p,{children:"Download the specific .rpm package from the release you wish to install"}),"\n",(0,t.jsxs)(n.p,{children:["Then install it using one of the following commands, with the ",(0,t.jsx)(n.code,{children:"x.x.x"})," being the version of the most recent release."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo yum localinstall ./sail_x.x.x_linux_amd64.rpm\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo yum localinstall /path/to/rpm/package/sail_x.x.x_linux_amd64.rpm\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"To configure the CLI to connect and authenticate to your ISC tenant, you must do the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Find your tenant name. To learn how to find it, refer to ",(0,t.jsx)(n.a,{href:"/docs/api/getting-started#find-your-tenant-name",children:"Getting Started"}),". The CLI will use this tenant name to connect to your ISC instance."]}),"\n",(0,t.jsx)(n.li,{children:"OAuth"}),"\n",(0,t.jsxs)(n.li,{children:['PAT | Create a personal access token (PAT). Make sure to note the "Client ID" and "Client Secret." The CLI needs this information to authenticate successfully. To learn how to create a PAT, refer to ',(0,t.jsx)(n.a,{href:"/docs/api/authentication#personal-access-tokens",children:"Personal Access Tokens"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To configure your first environment for OAuth run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sail env {environment}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["with ",(0,t.jsx)(n.code,{children:"{environment}"})," being the name of the environment you wish to configure."]}),"\n",(0,t.jsx)(n.p,{children:"You will be prompted for the following information:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The Tenant URL - The web URL used to access your Identity Security Cloud tenant (ex. ",(0,t.jsx)(n.a,{href:"https://tenant.identitynow.com",children:"https://tenant.identitynow.com"}),"), this is used during the OAuth process."]}),"\n",(0,t.jsxs)(n.li,{children:["The API URL - The API URL used to access your Identity Security Cloud tenant (ex. ",(0,t.jsx)(n.a,{href:"https://tenant.api.identitynow.com",children:"https://tenant.api.identitynow.com"}),"), this is used for the api calls made by certain commands."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"oauth-authentication",children:"OAuth Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["With the default environment values populated you can immediately begin using the CLI with OAuth authentication. Just make sure OAuth is your selected authentication method, this can be done by running ",(0,t.jsx)(n.code,{children:"sail set auth oauth"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"pat-authentication",children:"PAT Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["After you have configured your environment, if you want to use PAT authentication, run the ",(0,t.jsx)(n.code,{children:"sail set pat"})," command. You can then provide your PAT client ID and client secret."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/sailpoint-oss/sailpoint-cli/blob/main/assets/img/vhs/configure/configure-pat.gif?raw=true",alt:"Configure PAT"})}),"\n",(0,t.jsxs)(n.p,{children:["Once you have provided your client ID and client secret, you can swap your auth method to PAT using ",(0,t.jsx)(n.code,{children:"sail set auth pat"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"environment-variable-configuration",children:"Environment variable configuration"}),"\n",(0,t.jsx)(n.p,{children:"You can also store your configuration in environment variables. This can be useful when you are using the CLI in an automated environment like a continuous integration and continuous deployment (CI/CD) pipeline. In these types of scenarios, consuming the configuration from environment variables would be easier than creating the configuration file."}),"\n",(0,t.jsxs)(n.p,{children:["To export the environment variables on ",(0,t.jsx)(n.strong,{children:"Linux/Mac"}),", open your terminal app and run these commands:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export SAIL_BASE_URL=https://{tenant}.api.identitynow.com\nexport SAIL_CLIENT_ID={clientID}\nexport SAIL_CLIENT_SECRET={clientSecret}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like ",(0,t.jsx)(n.code,{children:"~/.bash_profile"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To store your configuration in environment variables on ",(0,t.jsx)(n.strong,{children:"Windows"}),", run Powershell as an administrator and run these commands:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"$env:SAIL_BASE_URL=https://{tenant}.api.identitynow.com\n$env:SAIL_CLIENT_ID={clientID}\n$env:SAIL_CLIENT_SECRET={clientSecret}\n"})}),"\n",(0,t.jsx)(n.p,{children:"To get your environment variables to persist across PowerShell sessions, run this command instead:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://{tenant}.api.identitynow.com')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','{clientID}')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','clientSecret}')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Run the ",(0,t.jsx)(n.code,{children:"sail"})," command for an overview of available commands and flags. You can use the ",(0,t.jsx)(n.code,{children:"-h"})," flag with any command to see additional options for each command:"]}),"\n",(0,t.jsx)(n.p,{children:"These commands are available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"connectors"}),": This command is a CLI interface for the SaaS Connectivity platform. The CLI is the best way to create and manage SaaS connectors within your tenant. For more information about the ",(0,t.jsx)(n.code,{children:"connectors"})," command, refer to the CLI ",(0,t.jsx)(n.a,{href:"/docs/tools/cli/connectors",children:"Connectors guide"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"search"}),": Run this command to access ISC search functionality within the CLI. For more information about the ",(0,t.jsx)(n.code,{children:"search"})," command, refer to the CLI ",(0,t.jsx)(n.a,{href:"/docs/tools/cli/search",children:"Search guide"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"set"}),": Run this command to configure your CLI settings. For more information about the ",(0,t.jsx)(n.code,{children:"set"})," command, refer to the CLI ",(0,t.jsx)(n.a,{href:"/docs/tools/cli/set",children:"Set guide"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"spconfig"}),": Run this command to access ISC SP Config functionality. For more information about the ",(0,t.jsx)(n.code,{children:"spconfig"})," command, refer to the CLI ",(0,t.jsx)(n.a,{href:"/docs/tools/cli/spconfig",children:"SPConfig guide"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"transform"}),": This command is a CLI interface that makes it easy to create, manage, and test transforms. For more information about the ",(0,t.jsx)(n.code,{children:"transform"})," command, refer to the CLI ",(0,t.jsx)(n.a,{href:"/docs/tools/cli/transforms",children:"Transforms guide"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"va"}),": Run this command to access VAs connected to your tenant. For more information about the ",(0,t.jsx)(n.code,{children:"va"})," command, refer to the CLI ",(0,t.jsx)(n.a,{href:"/docs/tools/cli/va",children:"VA guide"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cluster"}),": Run this command to access VA clusters connected to your tenant. For more information about the ",(0,t.jsx)(n.code,{children:"cluster"})," command, refer to the CLI ",(0,t.jsx)(n.a,{href:"/docs/tools/cli/cluster",children:"Clusters guide"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"workflow"}),": Run this command to create and manage workflows within the CLI. For more information about the ",(0,t.jsx)(n.code,{children:"workflow"})," command, refer to the CLI ",(0,t.jsx)(n.a,{href:"/docs/tools/cli/workflow",children:"Workflows guide"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"github",children:"GitHub"}),"\n",(0,t.jsxs)(n.p,{children:["You will find the SailPoint GitHub CLI repo here: ",(0,t.jsx)(n.a,{href:"https://github.com/sailpoint-oss/sailpoint-cli",children:"https://github.com/sailpoint-oss/sailpoint-cli"})]}),"\n",(0,t.jsxs)(n.p,{children:["Please use GitHub ",(0,t.jsx)(n.a,{href:"https://github.com/sailpoint-oss/sailpoint-cli/issues",children:"issues"})," to ",(0,t.jsx)(n.a,{href:"https://github.com/sailpoint-oss/sailpoint-cli/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here",children:"submit bugs"})," or make ",(0,t.jsx)(n.a,{href:"https://github.com/sailpoint-oss/sailpoint-cli/issues/new?assignees=&labels=&template=feature-request.md&title=%5BFeature%5D+Your+Feature+Request+Here",children:"feature requests"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"contribution",children:"Contribution"}),"\n",(0,t.jsx)(n.p,{children:"Do you have an idea to help improve the CLI? You can contribute directly!"}),"\n",(0,t.jsxs)(n.p,{children:["Before you contribute, you must sign our ",(0,t.jsx)(n.a,{href:"https://cla-assistant.io/sailpoint-oss/sailpoint-cli",children:"CLA"})," and read the ",(0,t.jsx)(n.a,{href:"https://github.com/sailpoint-oss/developer.sailpoint.com/blob/main/CONTRIBUTING.md",children:"Contribution Guidelines"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"questions",children:"Questions"}),"\n",(0,t.jsxs)(n.p,{children:["If you have questions about the CLI, don't hesitate to reach out on the SailPoint Developer Community forum at ",(0,t.jsx)(n.a,{href:"https://developer.sailpoint.com/discuss",children:"https://developer.sailpoint.com/discuss"}),"!"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);
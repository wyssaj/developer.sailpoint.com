"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[57037],{970669:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(785893),i=t(511151);const s={id:"connectivity-customizers-testing",title:"Testing and Debugging",pagination_label:"Testing and Debugging",sidebar_label:"Testing and Debugging",sidebar_position:6,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Test and debug connectors with customizers.",slug:"/connectivity/saas-connectivity/customizers/testing",tags:["Connectivity"]},c="Testing and debugging",a={id:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-testing",title:"Testing and Debugging",description:"Test and debug connectors with customizers.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/testing.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers",slug:"/connectivity/saas-connectivity/customizers/testing",permalink:"/docs/connectivity/saas-connectivity/customizers/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/testing.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726169183e3,sidebarPosition:6,frontMatter:{id:"connectivity-customizers-testing",title:"Testing and Debugging",pagination_label:"Testing and Debugging",sidebar_label:"Testing and Debugging",sidebar_position:6,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Test and debug connectors with customizers.",slug:"/connectivity/saas-connectivity/customizers/testing",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Linking to a Source",permalink:"/docs/connectivity/saas-connectivity/customizers/linking"},next:{title:"Config Object",permalink:"/docs/connectivity/saas-connectivity/customizers/config"}},r={},d=[{value:"Debug locally",id:"debug-locally",level:3},{value:"Test alongside a custom connector",id:"test-alongside-a-custom-connector",level:3}];function l(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"testing-and-debugging",children:"Testing and debugging"}),"\n",(0,o.jsx)(e.h3,{id:"debug-locally",children:"Debug locally"}),"\n",(0,o.jsxs)(e.p,{children:["Debugging your code locally follows the same process that debugging a ",(0,o.jsx)(e.a,{href:"../in-depth/debugging",children:"connector locally"})," does. The recommended approach is to start a ",(0,o.jsx)(e.a,{href:"https://code.visualstudio.com/docs/editor/debugging",children:"Visual Studio Code debug window"})," and run this command:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"npm run debug\n"})}),"\n",(0,o.jsx)(e.p,{children:"You can then set breakpoints in your code step through processes in your IDE (integrated development environment)."}),"\n",(0,o.jsx)(e.h3,{id:"test-alongside-a-custom-connector",children:"Test alongside a custom connector"}),"\n",(0,o.jsx)(e.p,{children:"If you want to test alongside a SaaS custom connector, the easiest way to do so is to copy the customizer code into the connector code."}),"\n",(0,o.jsx)(e.p,{children:"For example, you want to test this connector:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'export const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const myClient = new MyClient(config)\n\n    return createConnector()\n        .stdTestConnection(async (context: Context, input: undefined, res: Response<StdTestConnectionOutput>) => {\n            logger.info("Running test connection")\n            res.send(await myClient.testConnection())\n        })\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"You can test a customizer by simply appending the customizer code to the end of the file:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"// existing custom connector code\nexport const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const myClient = new MyClient(config)\n\n    return createConnector()\n        .stdTestConnection(async (context: Context, input: undefined, res: Response<StdTestConnectionOutput>) => {\n            logger.info(\"Running test connection\")\n            res.send(await myClient.testConnection())\n        })\n}\n\n// appended customizer code that will also get run\nexport const connectorCustomizer = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    return createConnectorCustomizer()\n        .afterStdTestConnection(async (context: Context, output: StdTestConnectionOutput) => {\n            logger.info('Running after test connection')\n            return output\n        })\n}\n\n"})}),"\n",(0,o.jsx)(e.p,{children:"Now, when you run the test-connection command, the customizer after the test-connection command will also run."})]})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}}}]);
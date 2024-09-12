"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[79393],{38934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var s=n(785893),i=n(511151),r=n(365332),o=n(424455);const a={id:"responding-to-response-required-triggers",title:"Responding to Response Required Triggers",pagination_label:"Responding to Response Required Triggers",sidebar_label:"Responding to Response Required Triggers",sidebar_position:6,sidebar_class_name:"respondingResponseRequiredTriggers",keywords:["event","trigger","request_response"],description:"Specify how your application interacts with response required type trigger services.",slug:"/extensibility/event-triggers/responding-request-response-trigger",tags:["Event Triggers"]},c=void 0,d={id:"extensibility/event-triggers/responding-to-response-required-triggers",title:"Responding to Response Required Triggers",description:"Specify how your application interacts with response required type trigger services.",source:"@site/docs/extensibility/event-triggers/responding-to-a-request-response-trigger.mdx",sourceDirName:"extensibility/event-triggers",slug:"/extensibility/event-triggers/responding-request-response-trigger",permalink:"/docs/extensibility/event-triggers/responding-request-response-trigger",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/responding-to-a-request-response-trigger.mdx",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726169183e3,sidebarPosition:6,frontMatter:{id:"responding-to-response-required-triggers",title:"Responding to Response Required Triggers",pagination_label:"Responding to Response Required Triggers",sidebar_label:"Responding to Response Required Triggers",sidebar_position:6,sidebar_class_name:"respondingResponseRequiredTriggers",keywords:["event","trigger","request_response"],description:"Specify how your application interacts with response required type trigger services.",slug:"/extensibility/event-triggers/responding-request-response-trigger",tags:["Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"Testing Triggers",permalink:"/docs/extensibility/event-triggers/testing-triggers"},next:{title:"Available Event Triggers",permalink:"/docs/extensibility/event-triggers/available"}},l={},p=[{value:"Invocation response modes for response required type triggers",id:"invocation-response-modes-for-response-required-type-triggers",level:2},{value:"Responding to response required triggers",id:"responding-to-response-required-triggers",level:2},{value:"Trigger invocation status",id:"trigger-invocation-status",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"invocation-response-modes-for-response-required-type-triggers",children:"Invocation response modes for response required type triggers"}),"\n",(0,s.jsxs)(t.p,{children:["You can specify how your application interacts with a response required (",(0,s.jsx)(t.code,{children:"REQUEST_RESPONSE"}),") type trigger service by selecting an invocation response mode in the ",(0,s.jsx)(t.strong,{children:"Response Type"})," dropdown when editing or creating a ",(0,s.jsx)(t.code,{children:"REQUEST_RESPONSE"})," subscription. There are three response modes to choose from: ",(0,s.jsx)(t.code,{children:"SYNC"}),", ",(0,s.jsx)(t.code,{children:"ASYNC"}),", and ",(0,s.jsx)(t.code,{children:"DYNAMIC"}),". These response modes are only available when the subscription type is set to ",(0,s.jsx)(t.code,{children:"HTTP"}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Response Modes"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"SYNC"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["This type of response creates a ",(0,s.jsx)(t.em,{children:"synchronous"})," flow between the trigger service and the custom application. Once a trigger has been invoked, the custom application is expected to respond within 10 seconds. If the application takes longer than 10 seconds to respond, the trigger invocation will terminate without making any decisions."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ASYNC"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["This type of response creates an ",(0,s.jsx)(t.em,{children:"asynchronous"})," flow between the trigger service and the custom application. When a trigger is invoked, the custom application does not need to respond immediately. The trigger service will provide a URL and a secret that the custom application can use to complete the invocation at a later time. The application must complete the invocation before the configured deadline on the subscription."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DYNAMIC"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["This type of response gives the custom application the ability to choose whether it handles the invocation request synchronously or asynchronously on a per-event basis. In some cases, the application may choose ",(0,s.jsx)(t.code,{children:"SYNC"})," mode because it is able to respond quickly to the invocation. In other cases, it may choose ",(0,s.jsx)(t.code,{children:"ASYNC"})," because it needs to run a long running task before responding to the invocation."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"responding-to-response-required-triggers",children:"Responding to response required triggers"}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(o.default,{value:"sync",label:"SYNC Response",default:!0,children:[(0,s.jsxs)(t.p,{children:["The custom application responds to the trigger invocation with an appropriate payload. For example, the application may receive a request from the Access Request Dynamic Approver trigger. The application will have ",(0,s.jsx)(t.strong,{children:"10 seconds"})," to analyze the event details and respond with a 200 (OK) status code and a response payload that contains the identity to add to the approval chain. For example, the response may look like this:"]}),(0,s.jsx)(t.p,{children:"200 (OK)"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": "2c91808b6ef1d43e016efba0ce470906",\n  "name": "Adam Adams",\n  "type": "IDENTITY"\n}\n'})})]}),(0,s.jsxs)(o.default,{value:"async",label:"ASYNC Respose",children:[(0,s.jsxs)(t.p,{children:["The custom application only needs to acknowledge that it has received the trigger invocation request by returning an HTTP status of 200 (OK) with an empty JSON object (ex. ",(0,s.jsx)(t.code,{children:"{}"}),") in the response body within ",(0,s.jsx)(t.strong,{children:"10 seconds"})," of receiving the event. It then has until the configured deadline on the subscription to provide a full response to the invocation. For example, the application may receive a request from the Access Request Dynamic Approver trigger. An example of the request payload that the application might receive is as follows:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "_metadata": {\n    "callbackURL": "https://{tenant}.api.identitynow.com/beta/trigger-invocations/e9103ca9-02c4-bb0f-9441-94b3af012345/complete",\n    "responseMode": "async",\n    "secret": "c1c60493-3347-4550-9c00-123cdde",\n    "triggerId": "idn:access-request-dynamic-approver",\n    "triggerType": "requestResponse"\n  },\n  "accessRequestId": "4b4d982dddff4267ab12f0f1e72b5a6d",\n  "requestedBy": {\n    "id": "2c91808b6ef1d43e016efba0ce470906",\n    "name": "Adam Admin",\n    "type": "IDENTITY"\n  },\n  "requestedFor": {\n    "id": "2c91808b6ef1d43e016efba0ce470909",\n    "name": "Ed Engineer",\n    "type": "IDENTITY"\n  },\n  "requestedItems": [\n    {\n      "comment": "Ed needs this access for his day to day job activities",\n      "description": "Engineering Access",\n      "id": "2c91808b6ef1d43e016efba0ce470904",\n      "name": "Engineering Access",\n      "operation": "Add",\n      "type": "ACCESS_PROFILE"\n    }\n  ]\n}\n'})}),(0,s.jsx)(t.p,{children:"The application will immediately respond to the invocation with a 200 (OK) status code and an empty JSON object."}),(0,s.jsx)(t.p,{children:"200 (OK)"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:"{}\n"})}),(0,s.jsxs)(t.p,{children:["Once the application has made a decision about how to respond, it will use the ",(0,s.jsx)(t.code,{children:"callbackURL"})," and ",(0,s.jsx)(t.code,{children:"secret"})," provided in the ",(0,s.jsx)(t.code,{children:"_metadata"})," object from the original request to complete the invocation. An example response might look like this:"]}),(0,s.jsxs)(t.p,{children:["POST ",(0,s.jsx)(t.code,{children:"https://{tenant}.api.identitynow.com/beta/trigger-invocations/e9103ca9-02c4-bb0f-9441-94b3af012345/complete"})]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "secret": "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",\n  "output": {\n    "id": "2c91808b6ef1d43e016efba0ce470906",\n    "name": "Adam Adams",\n    "type": "IDENTITY"\n  }\n}\n'})})]}),(0,s.jsxs)(o.default,{value:"dynamic",label:"DYNAMIC Response",children:[(0,s.jsxs)(t.p,{children:["The custom application determines arbitrarily whether to respond to the trigger invocation as ",(0,s.jsx)(t.code,{children:"SYNC"})," or ",(0,s.jsx)(t.code,{children:"ASYNC"}),". If the application is supposed to respond as ",(0,s.jsx)(t.code,{children:"SYNC"}),", it should follow the ",(0,s.jsx)(t.code,{children:"SYNC"})," response type directions, responding within ",(0,s.jsx)(t.strong,{children:"10 seconds"})," of the invocation. In the case of ",(0,s.jsx)(t.code,{children:"ASYNC"}),", the custom application only needs to acknowledge that it has received the trigger invocation request with a 202 (Accepted) within ",(0,s.jsx)(t.strong,{children:"10 seconds"})," of receiving the event. It must complete the invocation at a later time by using the ",(0,s.jsx)(t.code,{children:"callbackURL"})," and ",(0,s.jsx)(t.code,{children:"secret"})," provided in the ",(0,s.jsx)(t.code,{children:"_metadata"})," object."]}),(0,s.jsx)(t.p,{children:"An example of the request payload that the application might receive is as follows:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "_metadata": {\n    "callbackURL": "https://{tenant}.api.identitynow.com/beta/trigger-invocations/e9103ca9-02c4-bb0f-9441-94b3af012345/complete",\n    "responseMode": "async",\n    "secret": "c1c60493-3347-4550-9c00-123cdde",\n    "triggerId": "idn:access-request-dynamic-approver",\n    "triggerType": "requestResponse"\n  },\n  "accessRequestId": "4b4d982dddff4267ab12f0f1e72b5a6d",\n  "requestedBy": {\n    "id": "2c91808b6ef1d43e016efba0ce470906",\n    "name": "Adam Admin",\n    "type": "IDENTITY"\n  },\n  "requestedFor": {\n    "id": "2c91808b6ef1d43e016efba0ce470909",\n    "name": "Ed Engineer",\n    "type": "IDENTITY"\n  },\n  "requestedItems": [\n    {\n      "comment": "Ed needs this access for his day to day job activities",\n      "description": "Engineering Access",\n      "id": "2c91808b6ef1d43e016efba0ce470904",\n      "name": "Engineering Access",\n      "operation": "Add",\n      "type": "ACCESS_PROFILE"\n    }\n  ]\n}\n'})}),(0,s.jsxs)(t.p,{children:["To respond as ",(0,s.jsx)(t.code,{children:"SYNC"}),", simply respond to the invocation within 10 seconds."]}),(0,s.jsx)(t.p,{children:"200 (OK)"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": "2c91808b6ef1d43e016efba0ce470906",\n  "name": "Adam Adams",\n  "type": "IDENTITY"\n}\n'})}),(0,s.jsxs)(t.p,{children:["To respond as ",(0,s.jsx)(t.code,{children:"ASYNC"}),", start by responding to the invocation with a 202 (Accepted)."]}),(0,s.jsx)(t.p,{children:"202 (Accepted)"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:"{}\n"})}),(0,s.jsxs)(t.p,{children:["Then, use the ",(0,s.jsx)(t.code,{children:"callbackURL"})," and ",(0,s.jsx)(t.code,{children:"secret"})," to send a POST request to the invocation with the decision."]}),(0,s.jsxs)(t.p,{children:["POST ",(0,s.jsx)(t.code,{children:"https://{tenant}.api.identitynow.com/beta/trigger-invocations/e9103ca9-02c4-bb0f-9441-94b3af012345/complete"})]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "secret": "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",\n  "output": {\n    "id": "2c91808b6ef1d43e016efba0ce470906",\n    "name": "Adam Adams",\n    "type": "IDENTITY"\n  }\n}\n'})})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"trigger-invocation-status",children:"Trigger invocation status"}),"\n",(0,s.jsxs)(t.p,{children:["To check the status of a particular trigger invocation, you can use the ",(0,s.jsx)(t.a,{href:"/docs/api/beta/list-trigger-invocation-status",children:"list invocation statuses"})," endpoint. The status endpoint works for both ",(0,s.jsx)(t.code,{children:"REQUEST_RESPONSE"})," and ",(0,s.jsx)(t.code,{children:"FIRE_AND_FORGET"})," triggers. However, the status of ",(0,s.jsx)(t.code,{children:"FIRE_AND_FORGET"})," trigger invocations will contain null values in their ",(0,s.jsx)(t.code,{children:"completeInvocationInput"})," since ",(0,s.jsx)(t.code,{children:"FIRE_AND_FORGET"})," triggers don't need a response to complete."]})]})}function g(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},365332:(e,t,n)=>{n.d(t,{Z:()=>f});var s=n(667294),i=n(490512),r=n(8757),o=n(873276),a=n(254939);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var d=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&m(e,n,t[n]);if(h)for(var n of h(t))u.call(t,n)&&m(e,n,t[n]);return e},x=(e,t)=>l(e,p(t));function y({className:e,block:t,selectedValue:n,selectValue:o,tabValues:a}){const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),p=e=>{const t=e.currentTarget,s=d.indexOf(t),i=a[s].value;i!==n&&(l(t),o(i))},h=e=>{var t,n;let s=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;s=null!=(t=d[n])?t:d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;s=null!=(n=d[t])?n:d[d.length-1];break}}null==s||s.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e)},a.map((({value:e,label:t,attributes:r})=>s.createElement("li",x(b({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>d.push(e),onKeyDown:h,onClick:p},r),{className:(0,i.Z)("tabs__item",c.tabItem,null==r?void 0:r.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function v({lazy:e,children:t,selectedValue:n}){const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function j(e){const t=(0,o.Y)(e);return s.createElement("div",{className:(0,i.Z)("tabs-container",c.tabList)},s.createElement(y,b(b({},t),e)),s.createElement(v,b(b({},t),e)))}function f(e){const t=(0,a.default)();return s.createElement(j,b({key:String(t)},e),(0,o.h)(e.children))}}}]);
"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[80197],{953221:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var s=r(785893),a=r(511151),n=r(841282),o=r(476828);const i={id:"access-request-approvals",title:"Access Request Approvals",description:"Access Request Approvals",custom_edit_url:null},c=void 0,l={id:"api/v2024/access-request-approvals",title:"Access Request Approvals",description:"Access Request Approvals",source:"@site/docs/api/v2024/access-request-approvals.tag.mdx",sourceDirName:"api/v2024",slug:"/api/v2024/access-request-approvals",permalink:"/docs/api/v2024/access-request-approvals",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"access-request-approvals",title:"Access Request Approvals",description:"Access Request Approvals",custom_edit_url:null},sidebar:"isc_2024_sidebar",previous:{title:"Update Access Profile(s) requestable field.",permalink:"/docs/api/v2024/update-access-profiles-in-bulk"},next:{title:"Pending Access Request Approvals List",permalink:"/docs/api/v2024/list-pending-approvals"}},p={},u=[];function d(e){const t={a:"a",br:"br",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Use this API to implement and customize access request approval functionality.\nWith this functionality in place, administrators can delegate qualified users to review users' requests for access or managers' requests to revoke team members' access to applications, entitlements, or roles.",(0,s.jsx)(t.br,{}),"\n","This enables more qualified users to review access requests and the others to spend their time on other tasks."]}),"\n",(0,s.jsxs)(t.p,{children:["In Identity Security Cloud, users can request access to applications, entitlements, and roles, and managers can request that team members' access be revoked.",(0,s.jsx)(t.br,{}),"\n","For applications and entitlements, administrators can set access profiles to require approval from the access profile owner, the application owner, the source owner, the requesting user's manager, or a governance group for access to be granted or revoked.",(0,s.jsx)(t.br,{}),"\n","For roles, administrators can also set roles to allow access requests and require approval from the role owner, the requesting user's manager, or a governance group for access to be granted or revoked.",(0,s.jsx)(t.br,{}),"\n","If the administrator designates a governance group as the required approver, any governance group member can approve the requests."]}),"\n",(0,s.jsx)(t.p,{children:"When a user submits an access request, Identity Security Cloud sends the first required approver in the queue an email notification, based on the access request configuration's approval and reminder escalation configuration."}),"\n",(0,s.jsxs)(t.p,{children:["In Approvals in Identity Security Cloud, required approvers can view pending access requests under the Requested tab and approve or deny them, or the approvers can reassign the requests to different reviewers for approval.",(0,s.jsx)(t.br,{}),"\n","If the required approver approves the request and is the only reviewer required, Identity Security Cloud grants or revokes access, based on the request.",(0,s.jsx)(t.br,{}),"\n","If multiple reviewers are required, Identity Security Cloud sends the request to the next reviewer in the queue, based on the access request configuration's approval reminder and escalation configuration.",(0,s.jsx)(t.br,{}),"\n","The required approver can then view any completed access requests under the Reviewed tab."]}),"\n",(0,s.jsxs)(t.p,{children:["Refer to ",(0,s.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/requests/index.html",children:"Access Requests"})," for more information about access request approvals."]}),"\n","\n",(0,s.jsx)(n.Z,{items:(0,o.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},841282:(e,t,r)=>{r.d(t,{Z:()=>E});var s=r(667294),a=r(490512),n=r(476828),o=r(370393),i=r(585597),c=r(935096),l=r(633084),p=r(555199);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=r(799603),m=r(921702);function v({href:e,children:t}){return s.createElement(o.Z,{href:e,className:(0,a.Z)("card padding--lg",u.cardContainer)},t)}function h({href:e,icon:t,title:r,description:n}){return s.createElement(v,{href:e},s.createElement(p.default,{as:"h2",className:(0,a.Z)("text--truncate",u.cardTitle),title:r},t," ",r),n&&s.createElement("p",{className:(0,a.Z)("text--truncate",u.cardDescription),title:n},n))}function f({item:e}){var t;const r=(0,n.LM)(e),a=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?s.createElement(h,{href:r,icon:s.createElement(d.G,{icon:m.cC_,className:u.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:a(e.items.length)}):null}function q({item:e}){var t,r;const a=(0,c.Z)(e.href)?s.createElement(d.G,{icon:m.FL8,className:u.docCardIcon}):s.createElement(d.G,{icon:m.wlW,className:u.docCardIcon}),o=(0,n.xz)(null!=(t=e.docId)?t:void 0);return s.createElement(h,{href:e.href,icon:a,title:e.label,description:(null!=(r=e.description)?r:"<Heading"!=(null==o?void 0:o.description)&&"<span"!=(null==o?void 0:o.description))?null==o?void 0:o.description:e.label})}function g({item:e}){switch(e.type){case"link":return s.createElement(q,{item:e});case"category":return s.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,y=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,j=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&j(e,r,t[r]);if(y)for(var r of y(t))x.call(t,r)&&j(e,r,t[r]);return e};function I({className:e}){const t=(0,n.jA)();return s.createElement(E,{items:t.items,className:e})}function E(e){const{items:t,className:r}=e;if(!t)return s.createElement(I,A({},e));const o=(0,n.MN)(t);return s.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(g,{item:e})))))}}}]);
"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[6334],{999793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(785893),a=n(511151),r=n(841282),s=n(476828);const o={id:"identities",title:"Identities",description:"Identities",custom_edit_url:null},c=void 0,l={id:"api/beta/identities",title:"Identities",description:"Identities",source:"@site/docs/api/beta/identities.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/identities",permalink:"/docs/api/beta/identities",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"identities",title:"Identities",description:"Identities",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"Delete an icon",permalink:"/docs/api/beta/delete-icon"},next:{title:"Attribute synchronization for single identity.",permalink:"/docs/api/beta/synchronize-attributes-for-identity"}},d={},u=[];function m(e){const t={a:"a",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Use this API to implement identity functionality.\nWith this functionality in place, administrators can synchronize an identity's attributes with its various source attributes."}),"\n",(0,i.jsx)(t.p,{children:"Identity Security Cloud uses identities as users' authoritative accounts. Identities can own other accounts, entitlements, and attributes."}),"\n",(0,i.jsx)(t.p,{children:"An identity has a variety of attributes, such as an account name, an email address, a job title, and more.\nThese identity attributes can be correlated with different attributes on different sources.\nFor example, the identity John.Smith can own an account in the GitHub source with the account name John-Smith-Org, and Identity Security Cloud knows they are the same person with the same access and attributes."}),"\n",(0,i.jsx)(t.p,{children:"In Identity Security Cloud, administrators often set up these synchronizations to get triggered automatically with a change or to run on a schedule.\nTo manually synchronize attributes for an identity, administrators can use the Identities drop-down menu and select Identity List to view the list of identities.\nThey can then select the identity they want to manually synchronize and use the hamburger menu to select 'Synchronize Attributes.'\nDoing so immediately begins the attribute synchronization and analyzes all accounts for the selected identity."}),"\n",(0,i.jsxs)(t.p,{children:["Refer to ",(0,i.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html",children:"Synchronizing Attributes"})," for more information about synchronizing attributes."]}),"\n","\n",(0,i.jsx)(r.Z,{items:(0,s.jA)().items})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>C});var i=n(667294),a=n(490512),r=n(476828),s=n(370393),o=n(585597),c=n(935096),l=n(633084),d=n(555199);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=n(799603),h=n(921702);function p({href:e,children:t}){return i.createElement(s.Z,{href:e,className:(0,a.Z)("card padding--lg",u.cardContainer)},t)}function y({href:e,icon:t,title:n,description:r}){return i.createElement(p,{href:e},i.createElement(d.default,{as:"h2",className:(0,a.Z)("text--truncate",u.cardTitle),title:n},t," ",n),r&&i.createElement("p",{className:(0,a.Z)("text--truncate",u.cardDescription),title:r},r))}function f({item:e}){var t;const n=(0,r.LM)(e),a=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?i.createElement(y,{href:n,icon:i.createElement(m.G,{icon:h.cC_,className:u.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:a(e.items.length)}):null}function b({item:e}){var t,n;const a=(0,c.Z)(e.href)?i.createElement(m.G,{icon:h.FL8,className:u.docCardIcon}):i.createElement(m.G,{icon:h.wlW,className:u.docCardIcon}),s=(0,r.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(y,{href:e.href,icon:a,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==s?void 0:s.description)&&"<span"!=(null==s?void 0:s.description))?null==s?void 0:s.description:e.label})}function g({item:e}){switch(e.type){case"link":return i.createElement(b,{item:e});case"category":return i.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var w=Object.defineProperty,v=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,j=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))I.call(t,n)&&j(e,n,t[n]);if(v)for(var n of v(t))E.call(t,n)&&j(e,n,t[n]);return e};function _({className:e}){const t=(0,r.jA)();return i.createElement(C,{items:t.items,className:e})}function C(e){const{items:t,className:n}=e;if(!t)return i.createElement(_,x({},e));const s=(0,r.MN)(t);return i.createElement("section",{className:(0,a.Z)("row",n)},s.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(g,{item:e})))))}}}]);
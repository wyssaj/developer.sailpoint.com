"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[83175],{345911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=r(785893),n=r(511151),a=r(841282),c=r(476828);const l={id:"alerts",title:"Alerts",description:"Alerts",custom_edit_url:null},o=void 0,s={id:"api/iiq/alerts",title:"Alerts",description:"Alerts",source:"@site/docs/api/iiq/alerts.tag.mdx",sourceDirName:"api/iiq",slug:"/api/iiq/alerts",permalink:"/docs/api/iiq/alerts",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"alerts",title:"Alerts",description:"Alerts",custom_edit_url:null},sidebar:"iiqApiSideBar",previous:{title:"Deletes an existing Account.",permalink:"/docs/api/iiq/delete-account"},next:{title:"Returns all Alert resources.",permalink:"/docs/api/iiq/get-alerts"}},d={},u=[];function m(e){return(0,i.jsx)(a.Z,{items:(0,c.jA)().items})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},841282:(e,t,r)=>{r.d(t,{Z:()=>k});var i=r(667294),n=r(490512),a=r(476828),c=r(370393),l=r(585597),o=r(935096),s=r(633084),d=r(555199);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=r(799603),p=r(921702);function f({href:e,children:t}){return i.createElement(c.Z,{href:e,className:(0,n.Z)("card padding--lg",u.cardContainer)},t)}function h({href:e,icon:t,title:r,description:a}){return i.createElement(f,{href:e},i.createElement(d.default,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:r},t," ",r),a&&i.createElement("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:a},a))}function g({item:e}){var t;const r=(0,a.LM)(e),n=function(){const{selectMessage:e}=(0,l.c)();return t=>e(t,(0,s.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?i.createElement(h,{href:r,icon:i.createElement(m.G,{icon:p.cC_,className:u.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:n(e.items.length)}):null}function v({item:e}){var t,r;const n=(0,o.Z)(e.href)?i.createElement(m.G,{icon:p.FL8,className:u.docCardIcon}):i.createElement(m.G,{icon:p.wlW,className:u.docCardIcon}),c=(0,a.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(h,{href:e.href,icon:n,title:e.label,description:(null!=(r=e.description)?r:"<Heading"!=(null==c?void 0:c.description)&&"<span"!=(null==c?void 0:c.description))?null==c?void 0:c.description:e.label})}function E({item:e}){switch(e.type){case"link":return i.createElement(v,{item:e});case"category":return i.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,y=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))N.call(t,r)&&_(e,r,t[r]);if(y)for(var r of y(t))w.call(t,r)&&_(e,r,t[r]);return e};function A({className:e}){const t=(0,a.jA)();return i.createElement(k,{items:t.items,className:e})}function k(e){const{items:t,className:r}=e;if(!t)return i.createElement(A,C({},e));const c=(0,a.MN)(t);return i.createElement("section",{className:(0,n.Z)("row",r)},c.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(E,{item:e})))))}}}]);
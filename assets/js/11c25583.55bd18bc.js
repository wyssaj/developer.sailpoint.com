"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[36674],{763911:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var l=n(785893),t=n(511151);const s={id:"plugin-ui-elements",title:"UI Elements",pagination_label:"UI Elements",sidebar_label:"UI Elements",sidebar_position:5,sidebar_class_name:"plugin_developer_guide_ui_elements",keywords:["plugin"],description:"IdentityIQ Plugin UI Elements",slug:"/iiq/plugin-developer-guide/ui-elements",tags:["plugin","guide","identityiq"]},o="UI Elements",r={id:"iiq/plugin-developer-guide/chapter-5/plugin-ui-elements",title:"UI Elements",description:"IdentityIQ Plugin UI Elements",source:"@site/docs/iiq/plugin-developer-guide/chapter-5/index.md",sourceDirName:"iiq/plugin-developer-guide/chapter-5",slug:"/iiq/plugin-developer-guide/ui-elements",permalink:"/docs/iiq/plugin-developer-guide/ui-elements",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/iiq/plugin-developer-guide/chapter-5/index.md",tags:[{inline:!0,label:"plugin",permalink:"/docs/tags/plugin"},{inline:!0,label:"guide",permalink:"/docs/tags/guide"},{inline:!0,label:"identityiq",permalink:"/docs/tags/identityiq"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726169183e3,sidebarPosition:5,frontMatter:{id:"plugin-ui-elements",title:"UI Elements",pagination_label:"UI Elements",sidebar_label:"UI Elements",sidebar_position:5,sidebar_class_name:"plugin_developer_guide_ui_elements",keywords:["plugin"],description:"IdentityIQ Plugin UI Elements",slug:"/iiq/plugin-developer-guide/ui-elements",tags:["plugin","guide","identityiq"]},sidebar:"iiqSideBar",previous:{title:"Database Scripts",permalink:"/docs/iiq/plugin-developer-guide/database-scripts"},next:{title:"XML Artifacts",permalink:"/docs/iiq/plugin-developer-guide/xml-artifacts"}},d={},a=[];function c(e){const i={admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"ui-elements",children:"UI Elements"}),"\n",(0,l.jsxs)(i.p,{children:["Most plugins will have some additional UI component that will display in IdentityIQ. You can use images, CSS files, HTML templates, and JavaScript to provide the interactions and views required by the plugin. Plugins using a ",(0,l.jsx)(i.code,{children:"fullPage"})," element will look for a file called ",(0,l.jsx)(i.code,{children:"page.xhtml"})," in the plugin ZIP."]}),"\n",(0,l.jsx)(i.admonition,{type:"info",children:(0,l.jsxs)(i.p,{children:["Any CSS installed with the plugin will apply to all elements in IdentityIQ. For this reason it is recommended that developers keep their CSS classes specific to their plugin. For example, prefix them with the plugin's name, such as ",(0,l.jsx)(i.code,{children:".myPlugin-BoldText"})," instead of ",(0,l.jsx)(i.code,{children:".boldText"}),"."]})}),"\n",(0,l.jsxs)(i.p,{children:["The ",(0,l.jsx)(i.code,{children:"page.xhtml"})," in the ",(0,l.jsx)(i.em,{children:"Todo"})," example is configured to allow for the input of a new Todo and display all current Todos in the system. The Angular controller used in 'page.xhtml' and all the functions available to the controller are defined in ",(0,l.jsx)(i.code,{children:"TodoModule.js"})," (located in the ",(0,l.jsx)(i.code,{children:"/ui/js"})," folder)."]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-javascript",children:"/**\n * Create the module.\n */\nvar todoModule = angular.module('TodoList', ['ui.bootstrap']);\n/**\n * Controller for the todo list.\n */\ntodoModule.controller('TodoController', function(todoService, pageConfigService, $q, $uibModal) {\n    var me = this,\n        promises;\n    /**\n     * @property Array The todos for a user.\n     */\n    me.todos = [];\n/***\n* Lines omitted for clarity\n***/\n/**\n * Shows the flagged users modal dialog.\n */\nme.viewFlaggedUsers = function() {\n    $uibModal.open({\n        animation: false,\n        controller: 'FlaggedUsersCtrl as ctrl',\n        templateUrl: PluginHelper.getPluginFileUrl('TodoPlugin', 'ui/html/flagged-template.html')\n    });\n};\n"})}),"\n",(0,l.jsxs)(i.p,{children:["The 'TodoController' controller (and available methods) can then be referenced in ",(0,l.jsx)(i.code,{children:"page.xhtml"}),"."]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-html",children:'<ui:composition>\n  <div\n    class="container"\n    ng-app="TodoList"\n    ng-controller="TodoController as ctrl">\n    <div class="row m-t" ng-if="ctrl.pageConfig.showFlagged">\n      <button\n        class="btn btn-danger pull-right"\n        ng-click="ctrl.viewFlaggedUsers()">\n        Flagged Users\n      </button>\n    </div>\n    <div class="row m-t"></div></div\n></ui:composition>\n'})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Line 2"})," - shows the angular controller ",(0,l.jsx)(i.code,{children:"ng-controller"})," defined as 'TodoController' from ",(0,l.jsx)(i.strong,{children:"line 8"})," of 'TodoModule.js'."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Line 4"})," - example of accessing controller method ",(0,l.jsx)(i.code,{children:"viewFlaggedUsers"})," from ",(0,l.jsx)(i.strong,{children:"line 21"})," of 'TodoModule.js'."]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["This example demonstrates how to use the Angular concept of the modal within a plugin. In the 'Todo' plugin, if the user clicks the 'Flagged Users' button as defined on the ",(0,l.jsx)(i.code,{children:"fullPage"}),", it will switch context to the page defined by the ui/",(0,l.jsx)(i.code,{children:"html/flagged-template.html"}),", and swap the AngularJS controller to ",(0,l.jsx)(i.code,{children:"FlaggedUserCtrl"}),". The behavior of this modal dialogue is essentially the same as the ",(0,l.jsx)(i.code,{children:"fullPage"})," 'page.xhtml' - it accesses information by the controller, which may rely on backend Java classes to produce data. Notice that to reference the .html template for the flagged users, the example uses the ",(0,l.jsx)(i.code,{children:"PluginHelper"})," classes' method ",(0,l.jsx)(i.code,{children:"getPluginFileUrl"})," - this allows for fetching the plugin resource by a relative path as it would display in the installed .zip archive."]}),"\n",(0,l.jsxs)(i.p,{children:["One last aspect to remember for the ",(0,l.jsx)(i.code,{children:"page.xhtml"})," is the necessity to include references to the JavaScript packages the plugin will use. Use this path to reference the packages: ",(0,l.jsx)(i.code,{children:"#{plugins.requestContextPath}/plugin/<Plugin Name>/path/to/js/files.js"}),"."]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-html",children:'<script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/angular.min.js"><\/script>\n<script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/ui-bootstrap.min.js"><\/script>\n<script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/TodoModule.js"><\/script>\n'})}),"\n",(0,l.jsxs)(i.p,{children:["The path to the page would be the following: ",(0,l.jsx)(i.code,{children:"{serverpath}/plugins/pluginPage.jsf?pn={PluginName}"}),", where ",(0,l.jsx)(i.code,{children:"PluginName"})," is the name of your plugin, as specified in the manifest, and ",(0,l.jsx)(i.code,{children:"serverpath"})," is the path to your server."]})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}}}]);
(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),s=n(4),i=n(1),b=(n(9),n(10),n(11),n(0)),d=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,a=t.tabContent;return Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.title;return Object(b.jsx)("li",{className:n===e?"is-active":"","data-cy":"Tab",onClick:function(){var t;(t=e)!==n&&c(t)},children:Object(b.jsx)("a",{href:"#".concat(e),"data-cy":"TabLink",children:a})},e)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:a})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){var t=Object(i.useState)(o[0].id),e=Object(s.a)(t,2),n=e[0],c=e[1],a="";return n&&(a=o.find((function(t){return t.id===n||null})).content),Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:a}),Object(b.jsx)(d,{tabs:o,selectedTabId:n,onTabSelected:function(t){c(t)},tabContent:a})]})};a.a.render(Object(b.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.4104d3af.chunk.js.map
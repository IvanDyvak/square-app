(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(4),r=a(2),l=a(1);a(14),a(16);var i=function(e){var t=e.id,a=e.isActive;return c.a.createElement("div",{onMouseEnter:Object(n.useCallback)(function(e){e.target.classList.toggle("active")},[a]),className:"squares-list__item",id:t})};var s=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],s=Object(n.useState)(0),u=Object(l.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)([]),b=Object(l.a)(f,2),p=b[0],v=b[1],E=Object(n.useState)(!1),g=Object(l.a)(E,2),j=g[0],O=g[1];return Object(n.useEffect)(function(){fetch("https://demo7919674.mockable.io").then(function(e){return e.json()}).then(function(e){e=[].concat([{name:"Pick mode",field:0}],Object(r.a)(e)),console.log(e),v(e)}).catch(function(e){console.error("Error:",e),v(e)})},[]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:"/images/logo.png",className:"App-logo",alt:"logo"})),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=document.getElementById("modeLevels"),a=Number(t.options[t.selectedIndex].id);d(a)}},c.a.createElement("label",null,c.a.createElement("select",{id:"modeLevels",value:a,onChange:function(e){o(e.target.value)}},p.map(function(e){var t=e.name,a=e.field;return c.a.createElement("option",{value:t,key:t,id:a},t)}))),c.a.createElement("input",{type:"submit",value:"Start",className:"init-btn"})),c.a.createElement("div",{className:"squares-list"},0!==m?Object(r.a)(Array(m*m).keys()).map(function(e){return c.a.createElement(i,{key:e,id:e,onMouseEnter:O,isActive:j})}):null))},u=(a(18),document.getElementById("root"));Object(o.createRoot)(u).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)))},5:function(e,t,a){e.exports=a(20)}},[[5,2,1]]]);
//# sourceMappingURL=main.f664f9cf.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a(1),l=Object(n.createContext)(),i=function(){return Object(n.useContext)(l)},s=function(e){var t=e.children,a=Object(n.useState)(!1),r=Object(o.a)(a,2),i=r[0],s=r[1],u=Object(n.useState)(0),m=Object(o.a)(u,2),d=m[0],v=m[1],f=Object(n.useState)(0),b=Object(o.a)(f,2),p=b[0],E=b[1];return c.a.createElement(l.Provider,{value:{isActiveSquare:i,setIsActiveSquare:s,activeToggle:function(e){s(!i),v(Number(e.target.id)+1),E(Number(e.target.parentNode.id)+1),console.log(d)},colId:d,setColdId:v,rowId:p,setRowdId:E}},t)},u=a(2);a(14),a(16);var m=function(){return c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:"images/logo.png",className:"App-logo",alt:"logo"}))};a(18);var d=function(e){var t=e.id,a=i(),n=a.isActiveSquare,r=a.activeToggle;return c.a.createElement("div",{onMouseEnter:r,className:"squares-list__item ".concat(n?"active":""),id:t})};var v=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),s=Object(o.a)(l,2),v=s[0],f=s[1],b=Object(n.useState)([]),p=Object(o.a)(b,2),E=p[0],j=p[1],O=i(),g=O.colId,N=O.rowId;return Object(n.useEffect)(function(){fetch("https://demo7919674.mockable.io").then(function(e){return e.json()}).then(function(e){var t=[].concat([{name:"Pick mode",field:0}],Object(u.a)(e));console.log(t),j(t)}).catch(function(e){console.error("Error:",e),j(0)})},[]),c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=document.getElementById("modeLevels"),a=Number(t.options[t.selectedIndex].id);f(a)}},c.a.createElement("label",null,c.a.createElement("select",{id:"modeLevels",value:a,onChange:function(e){r(e.target.value)}},E.map(function(e){var t=e.name,a=e.field;return c.a.createElement("option",{value:t,key:t,id:a},t)}))),c.a.createElement("input",{type:"submit",value:"Start",className:"init-btn"})),c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"squares-list"},Object(u.a)(Array(v).keys()).map(function(e){return c.a.createElement("div",{className:"row-items",key:e,id:e},Object(u.a)(Array(v).keys()).map(function(e){return c.a.createElement(d,{key:e,id:e})}))})),c.a.createElement("div",{className:"hovered-items-info-wrap"},c.a.createElement("h2",null,"Hovered squares"),c.a.createElement("div",{className:"hovered-items-info"},c.a.createElement("span",null,"row ",N),c.a.createElement("span",null,"col ",g)))))},f=(a(20),document.getElementById("root"));Object(r.createRoot)(f).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null,c.a.createElement(v,null))))},5:function(e,t,a){e.exports=a(22)}},[[5,2,1]]]);
//# sourceMappingURL=main.6bc19191.chunk.js.map
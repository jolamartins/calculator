(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{11:function(n,e,t){},12:function(n,e,t){},25:function(n,e,t){},26:function(n,e,t){},27:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t.n(r),a=t(4),u=t.n(a),s=(t(11),t(1)),i=t(6),o=(t(12),t(0)),l=function(n){var e=n.children;return Object(o.jsx)("div",{className:"container",children:e})},m=t(5),j=(t(25),function(n){var e=n.value;return Object(o.jsx)(m.Textfit,{className:"display",mode:"single",id:"display",max:80,children:e})}),b=(t(26),function(n){var e=n.children;return Object(o.jsx)("div",{className:"buttonBox",children:e})}),f=(t(27),function(n){var e=n.className,t=n.value,r=n.onClick;return Object(o.jsx)("button",{className:e,onClick:r,children:t})}),O=[["C","^","%","/"],[7,8,9,"X"],[4,5,6,"-"],[1,2,3,"+"],[0,".","="]],d=function(n){return String(n).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g,"$1 ")},v=function(n){return n.toString().replace(/\s/g,"")};var g=function(){var n=Object(r.useState)({sign:"",num:0,res:0}),e=Object(i.a)(n,2),t=e[0],c=e[1],a=function(n){n.preventDefault();var e=n.target.innerHTML;v(t.num).length<16&&c(Object(s.a)(Object(s.a)({},t),{},{num:0===t.num&&"0"===e?"0":v(t.num)%1===0?d(Number(v(t.num+e))):d(t.num+e),res:t.sign?t.res:0}))},u=function(n){n.preventDefault();var e=n.target.innerHTML;c(Object(s.a)(Object(s.a)({},t),{},{num:t.num.toString().includes(".")?t.num:t.num+e}))},m=function(n){n.preventDefault();var e=n.target.innerHTML;c(Object(s.a)(Object(s.a)({},t),{},{sign:e,res:!t.res&&t.num?t.num:t.res,num:0}))},g=function(){if(t.sign&&t.num){c(Object(s.a)(Object(s.a)({},t),{},{res:"0"===t.num&&"/"===t.sign?"Maths Error!":d((n=Number(v(t.res)),e=Number(v(t.num)),r=t.sign,"+"===r?n+e:"-"===r?n-e:"X"===r?n*e:n/e)),sign:"",num:0}))}var n,e,r},p=function(){c(Object(s.a)(Object(s.a)({},t),{},{num:t.num?d(-1*v(t.num)):0,res:t.res?d(-1*v(t.res)):0,sign:""}))},h=function(){var n=t.num?parseFloat(v(t.num)):0,e=t.res?parseFloat(v(t.res)):0;c(Object(s.a)(Object(s.a)({},t),{},{num:n/=Math.pow(100,1),res:e/=Math.pow(100,1),sign:""}))},x=function(){c(Object(s.a)(Object(s.a)({},t),{},{sign:"",num:0,res:0}))};return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(l,{children:[Object(o.jsx)(j,{value:t.num?t.num:t.res}),Object(o.jsx)(b,{children:O.flat().map((function(n,e){return Object(o.jsx)(f,{className:"="===n?"equals":"",value:n,onClick:"C"===n?x:"^"===n?p:"%"===n?h:"="===n?g:"/"===n||"X"===n||"-"===n||"+"===n?m:"."===n?u:a},e)}))})]})})};u.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.986bdca6.chunk.js.map
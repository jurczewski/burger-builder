(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(5),i=n.n(r),b=(n(13),n(14),function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:"Toolbar, SideDrawer, Backdrop"}),Object(c.jsx)("main",{className:"Content",children:e.children})]})}),l=n(6),j=n(7),d=(n(15),function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(c.jsx)("div",{className:"BreadBottom"});break;case"bread-top":t=Object(c.jsxs)("div",{className:"BreadTop",children:[Object(c.jsx)("div",{className:"Seeds1"}),Object(c.jsx)("div",{className:"Seeds2"})]});break;case"meat":t=Object(c.jsx)("div",{className:"Meat"});break;case"cheese":t=Object(c.jsx)("div",{className:"Cheese"});break;case"salad":t=Object(c.jsx)("div",{className:"Salad"});break;case"bacon":t=Object(c.jsx)("div",{className:"Bacon"});break;default:t=null}return t}),o=(n(16),function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(j.a)(Array(e.ingredients[t])).map((function(e,n){return Object(c.jsx)(d,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(c.jsx)("p",{children:"Please start adding ingredients!"})),Object(c.jsxs)("div",{className:"Burger",children:[Object(c.jsx)(d,{type:"bread-top"}),t,Object(c.jsx)(d,{type:"bread-bottom"})]})}),u=(n(17),function(e){return Object(c.jsxs)("div",{className:"BuildControl",children:[Object(c.jsx)("div",{className:"Label",children:e.label}),Object(c.jsx)("button",{type:"button",className:"Less",children:"Less"}),Object(c.jsx)("button",{type:"button",className:"More",children:"More"})]})}),O=(n(18),[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}]),m=function(){return Object(c.jsx)("div",{className:"BuildControls",children:O.map((function(e){return Object(c.jsx)(u,{label:e.label},e.label)}))})},x={ingredients:{salad:0,bacon:0,cheese:0,meat:0}},h=function(){var e=Object(a.useState)(x),t=Object(l.a)(e,2),n=t[0];t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{ingredients:n.ingredients}),Object(c.jsx)(m,{})]})};var p=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(b,{children:Object(c.jsx)(h,{})})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.ba0d1d54.chunk.js.map
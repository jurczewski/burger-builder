(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(6),i=n.n(s),d=(n(14),n(15),function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:"Toolbar, SideDrawer, Backdrop"}),Object(c.jsx)("main",{className:"Content",children:e.children})]})}),l=n(4),b=n(7),o=n(8),j=(n(16),function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(c.jsx)("div",{className:"BreadBottom"});break;case"bread-top":t=Object(c.jsxs)("div",{className:"BreadTop",children:[Object(c.jsx)("div",{className:"Seeds1"}),Object(c.jsx)("div",{className:"Seeds2"})]});break;case"meat":t=Object(c.jsx)("div",{className:"Meat"});break;case"cheese":t=Object(c.jsx)("div",{className:"Cheese"});break;case"salad":t=Object(c.jsx)("div",{className:"Salad"});break;case"bacon":t=Object(c.jsx)("div",{className:"Bacon"});break;default:t=null}return t}),u=(n(17),function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(o.a)(Array(e.ingredients[t])).map((function(e,n){return Object(c.jsx)(j,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(c.jsx)("p",{children:"Please start adding ingredients!"})),Object(c.jsxs)("div",{className:"Burger",children:[Object(c.jsx)(j,{type:"bread-top"}),t,Object(c.jsx)(j,{type:"bread-bottom"})]})}),O=(n(18),function(e){return Object(c.jsxs)("div",{className:"BuildControl",children:[Object(c.jsx)("div",{className:"Label",children:e.label}),Object(c.jsx)("button",{type:"button",className:"Less",onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(c.jsx)("button",{type:"button",className:"More",onClick:e.added,children:"More"})]})}),m=(n(19),[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}]),x=function(e){return Object(c.jsxs)("div",{className:"BuildControls",children:[Object(c.jsxs)("p",{children:["Current Price: ",Object(c.jsxs)("strong",{children:[e.price.toFixed(2)," $"]})]}),m.map((function(t){return Object(c.jsx)(O,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)}))]})},g={salad:.5,cheese:.4,meat:1.3,bacon:.7},h={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4},f=function(){var e=Object(a.useState)(h),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(l.a)({},n.ingredients);return Object.keys(s).forEach((function(e){s[e]=s[e]<=0})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{ingredients:n.ingredients}),Object(c.jsx)(x,{ingredientAdded:function(e){var t=n.ingredients[e]+1,c=Object(l.a)({},n.ingredients);c[e]=t;var a=g[e],s=n.totalPrice;r({totalPrice:s+a,ingredients:c})},ingredientRemoved:function(e){var t=n.ingredients[e];if(!(t<=0)){var c=t-1,a=Object(l.a)({},n.ingredients);a[e]=c;var s=g[e],i=n.totalPrice;r({totalPrice:i-s,ingredients:a})}},disabled:s,price:n.totalPrice})]})};var p=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(d,{children:Object(c.jsx)(f,{})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.7707881f.chunk.js.map
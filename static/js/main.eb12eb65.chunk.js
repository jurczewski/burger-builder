(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),s=n(6),a=n.n(s),d=(n(14),n(15),n.p+"static/media/burger-logo.ec69c7f6.png"),l=(n(16),function(){return Object(c.jsx)("div",{className:"Logo",children:Object(c.jsx)("img",{src:d,alt:"Logo"})})}),o=function(){return Object(c.jsxs)("header",{className:"Toolbar",children:[Object(c.jsx)("div",{children:"MENU"}),Object(c.jsx)(l,{}),Object(c.jsx)("nav",{children:"..."})]})},j=(n(17),function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{}),", SideDrawer, Backdrop",Object(c.jsx)("main",{className:"Content",children:e.children})]})}),b=n(2),u=n(7),O=n(8),h=(n(18),function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(c.jsx)("div",{className:"BreadBottom"});break;case"bread-top":t=Object(c.jsxs)("div",{className:"BreadTop",children:[Object(c.jsx)("div",{className:"Seeds1"}),Object(c.jsx)("div",{className:"Seeds2"})]});break;case"meat":t=Object(c.jsx)("div",{className:"Meat"});break;case"cheese":t=Object(c.jsx)("div",{className:"Cheese"});break;case"salad":t=Object(c.jsx)("div",{className:"Salad"});break;case"bacon":t=Object(c.jsx)("div",{className:"Bacon"});break;default:t=null}return t}),p=(n(19),function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(O.a)(Array(e.ingredients[t])).map((function(e,n){return Object(c.jsx)(h,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(c.jsx)("p",{children:"Please start adding ingredients!"})),Object(c.jsxs)("div",{className:"Burger",children:[Object(c.jsx)(h,{type:"bread-top"}),t,Object(c.jsx)(h,{type:"bread-bottom"})]})}),x=(n(20),function(e){return Object(c.jsxs)("div",{className:"BuildControl",children:[Object(c.jsx)("div",{className:"Label",children:e.label}),Object(c.jsx)("button",{type:"button",className:"Less",onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(c.jsx)("button",{type:"button",className:"More",onClick:e.added,children:"More"})]})}),f=(n(21),[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}]),g=function(e){return Object(c.jsxs)("div",{className:"BuildControls",children:[Object(c.jsxs)("p",{children:["Current Price: ",Object(c.jsxs)("strong",{children:[e.price.toFixed(2)," $"]})]}),f.map((function(t){return Object(c.jsx)(x,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(c.jsx)("button",{type:"button",className:"OrderButton",disabled:!e.purchasable,onClick:e.ordered,children:"ORDER NOW"})]})},m=(n(22),n(23),function(e){return e.show?Object(c.jsx)("div",{className:"Backdrop",onClick:e.clicked}):null}),v=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m,{show:e.show,clicked:e.modalClosed}),Object(c.jsx)("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})},y=(n(24),function(e){return Object(c.jsx)("button",{type:"button",onClick:e.clicked,className:["Button",e.btnType].join(" "),children:e.children})}),N=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.ingredients[t]]},t)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Your Order"}),Object(c.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(c.jsx)("ul",{children:t}),Object(c.jsx)("p",{children:Object(c.jsxs)("strong",{children:["Total price: ",e.price.toFixed(2)," $"]})}),Object(c.jsx)("p",{children:"Continue to checkout?"}),Object(c.jsx)(y,{btnType:"Danger",clicked:e.purchaseCancelled,children:"CANCEL"}),Object(c.jsx)(y,{btnType:"Success",clicked:e.purchaseContinued,children:"CONTINUE"})]})},k={salad:.5,cheese:.4,meat:1.3,bacon:.7},C={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},B=function(){var e=Object(r.useState)(C),t=Object(u.a)(e,2),n=t[0],i=t[1],s=function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);i((function(e){return Object(b.a)(Object(b.a)({},e),{},{purchasable:t>0})}))},a=function(){i((function(e){return Object(b.a)(Object(b.a)({},e),{},{purchasing:!1})}))},d=Object(b.a)({},n.ingredients);return Object.keys(d).forEach((function(e){d[e]=d[e]<=0})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{show:n.purchasing,modalClosed:a,children:Object(c.jsx)(N,{ingredients:n.ingredients,price:n.totalPrice,purchaseCancelled:a,purchaseContinued:function(){alert("You continue")}})}),Object(c.jsx)(p,{ingredients:n.ingredients}),Object(c.jsx)(g,{ingredientAdded:function(e){var t=n.ingredients[e]+1,c=Object(b.a)({},n.ingredients);c[e]=t;var r=k[e],a=n.totalPrice+r;i((function(e){return Object(b.a)(Object(b.a)({},e),{},{totalPrice:a,ingredients:c})})),s(c)},ingredientRemoved:function(e){var t=n.ingredients[e];if(!(t<=0)){var c=t-1,r=Object(b.a)({},n.ingredients);r[e]=c;var a=k[e],d=n.totalPrice-a;i((function(e){return Object(b.a)(Object(b.a)({},e),{},{totalPrice:d,ingredients:r})})),s(r)}},disabled:d,price:n.totalPrice,purchasable:n.purchasable,ordered:function(){i((function(e){return Object(b.a)(Object(b.a)({},e),{},{purchasing:!0})}))}})]})};var w=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j,{children:Object(c.jsx)(B,{})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),F()}],[[25,1,2]]]);
//# sourceMappingURL=main.eb12eb65.chunk.js.map
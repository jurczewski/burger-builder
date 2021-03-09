(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),s=n(6),a=n.n(s),d=(n(14),n(15),function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:"Toolbar, SideDrawer, Backdrop"}),Object(c.jsx)("main",{className:"Content",children:e.children})]})}),l=n(2),o=n(7),b=n(8),j=(n(16),function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(c.jsx)("div",{className:"BreadBottom"});break;case"bread-top":t=Object(c.jsxs)("div",{className:"BreadTop",children:[Object(c.jsx)("div",{className:"Seeds1"}),Object(c.jsx)("div",{className:"Seeds2"})]});break;case"meat":t=Object(c.jsx)("div",{className:"Meat"});break;case"cheese":t=Object(c.jsx)("div",{className:"Cheese"});break;case"salad":t=Object(c.jsx)("div",{className:"Salad"});break;case"bacon":t=Object(c.jsx)("div",{className:"Bacon"});break;default:t=null}return t}),u=(n(17),function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(b.a)(Array(e.ingredients[t])).map((function(e,n){return Object(c.jsx)(j,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(c.jsx)("p",{children:"Please start adding ingredients!"})),Object(c.jsxs)("div",{className:"Burger",children:[Object(c.jsx)(j,{type:"bread-top"}),t,Object(c.jsx)(j,{type:"bread-bottom"})]})}),O=(n(18),function(e){return Object(c.jsxs)("div",{className:"BuildControl",children:[Object(c.jsx)("div",{className:"Label",children:e.label}),Object(c.jsx)("button",{type:"button",className:"Less",onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(c.jsx)("button",{type:"button",className:"More",onClick:e.added,children:"More"})]})}),h=(n(19),[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}]),p=function(e){return Object(c.jsxs)("div",{className:"BuildControls",children:[Object(c.jsxs)("p",{children:["Current Price: ",Object(c.jsxs)("strong",{children:[e.price.toFixed(2)," $"]})]}),h.map((function(t){return Object(c.jsx)(O,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(c.jsx)("button",{type:"button",className:"OrderButton",disabled:!e.purchasable,onClick:e.ordered,children:"ORDER NOW"})]})},x=(n(20),n(21),function(e){return e.show?Object(c.jsx)("div",{className:"Backdrop",onClick:e.clicked}):null}),f=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x,{show:e.show,clicked:e.modalClosed}),Object(c.jsx)("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})},g=(n(22),function(e){return Object(c.jsx)("button",{type:"button",onClick:e.clicked,className:["Button",e.btnType].join(" "),children:e.children})}),m=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.ingredients[t]]},t)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Your Order"}),Object(c.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(c.jsx)("ul",{children:t}),Object(c.jsx)("p",{children:Object(c.jsxs)("strong",{children:["Total price: ",e.price.toFixed(2)," $"]})}),Object(c.jsx)("p",{children:"Continue to checkout?"}),Object(c.jsx)(g,{btnType:"Danger",clicked:e.purchaseCancelled,children:"CANCEL"}),Object(c.jsx)(g,{btnType:"Success",clicked:e.purchaseContinued,children:"CONTINUE"})]})},v={salad:.5,cheese:.4,meat:1.3,bacon:.7},y={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},k=function(){var e=Object(r.useState)(y),t=Object(o.a)(e,2),n=t[0],i=t[1],s=function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);i((function(e){return Object(l.a)(Object(l.a)({},e),{},{purchasable:t>0})}))},a=function(){i((function(e){return Object(l.a)(Object(l.a)({},e),{},{purchasing:!1})}))},d=Object(l.a)({},n.ingredients);return Object.keys(d).forEach((function(e){d[e]=d[e]<=0})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{show:n.purchasing,modalClosed:a,children:Object(c.jsx)(m,{ingredients:n.ingredients,price:n.totalPrice,purchaseCancelled:a,purchaseContinued:function(){alert("You continue")}})}),Object(c.jsx)(u,{ingredients:n.ingredients}),Object(c.jsx)(p,{ingredientAdded:function(e){var t=n.ingredients[e]+1,c=Object(l.a)({},n.ingredients);c[e]=t;var r=v[e],a=n.totalPrice+r;i((function(e){return Object(l.a)(Object(l.a)({},e),{},{totalPrice:a,ingredients:c})})),s(c)},ingredientRemoved:function(e){var t=n.ingredients[e];if(!(t<=0)){var c=t-1,r=Object(l.a)({},n.ingredients);r[e]=c;var a=v[e],d=n.totalPrice-a;i((function(e){return Object(l.a)(Object(l.a)({},e),{},{totalPrice:d,ingredients:r})})),s(r)}},disabled:d,price:n.totalPrice,purchasable:n.purchasable,ordered:function(){i((function(e){return Object(l.a)(Object(l.a)({},e),{},{purchasing:!0})}))}})]})};var C=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(d,{children:Object(c.jsx)(k,{})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),N()}],[[23,1,2]]]);
//# sourceMappingURL=main.8a1b8819.chunk.js.map
(this["webpackJsonpcards-game"]=this["webpackJsonpcards-game"]||[]).push([[0],{12:function(e,t,n){e.exports={active:"Header_active__2DgLn",wrapper:"Header_wrapper__YVqso"}},16:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2j4-_",errorInput:"SuperInputText_errorInput__3onHK",error:"SuperInputText_error__geYwr"}},20:function(e,t,n){e.exports={default:"SuperButton_default__1E02K",red:"SuperButton_red__3SVRd"}},21:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2MmIV",spanClassName:"SuperCheckbox_spanClassName__3WU-E"}},30:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(14),a=n.n(s),j=(n(30),n(31),n(12)),o=n.n(j),i=n(9),u=n(3),b=n(1),d=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},l=function(){return Object(b.jsx)("div",{children:"Login"})},x=function(){return Object(b.jsx)("div",{children:"Profile"})},O=function(){return Object(b.jsx)("div",{children:"Register"})},h=function(){return Object(b.jsx)("div",{children:"NewPassword"})},p=function(){return Object(b.jsx)("div",{children:"PasswordRecovery"})},f=n(8),g=n(11),v=n(16),m=n.n(v),C=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,s=e.error,a=e.className,j=e.spanClassName,o=Object(g.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(m.a.error," ").concat(j||""),u="".concat(s?m.a.errorInput:m.a.superInput," ").concat(a);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(f.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:u},o)),s&&Object(b.jsx)("span",{className:i,children:s})]})},_=n(20),N=n.n(_),I=function(e){var t=e.red,n=e.className,c=Object(g.a)(e,["red","className"]),r="".concat(t?N.a.red:N.a.default," ").concat(n);return Object(b.jsx)("button",Object(f.a)({className:r},c))},w=n(21),y=n.n(w),k=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),s=Object(g.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),a="".concat(y.a.checkbox," ").concat(c||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(f.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:a},s)),r&&Object(b.jsx)("span",{className:y.a.spanClassName,children:r})]})},S=function(){return Object(b.jsxs)("div",{children:["TestPage",Object(b.jsx)(C,{}),Object(b.jsx)(I,{}),Object(b.jsx)(k,{})]})},T="/login",P="/register",E="/profile",L="/password-recovery",F="/new-password",K="/test",B=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(u.a,{to:K})}}),Object(b.jsx)(u.b,{path:T,render:function(){return Object(b.jsx)(l,{})}}),Object(b.jsx)(u.b,{path:P,render:function(){return Object(b.jsx)(O,{})}}),Object(b.jsx)(u.b,{path:L,render:function(){return Object(b.jsx)(p,{})}}),Object(b.jsx)(u.b,{path:F,render:function(){return Object(b.jsx)(h,{})}}),Object(b.jsx)(u.b,{path:E,render:function(){return Object(b.jsx)(x,{})}}),Object(b.jsx)(u.b,{path:K,render:function(){return Object(b.jsx)(S,{})}}),Object(b.jsx)(u.b,{render:function(){return Object(b.jsx)(d,{})}})]})})},R=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:o.a.wrapper,children:[Object(b.jsx)(i.b,{to:T,activeClassName:o.a.active,children:"Login"}),Object(b.jsx)(i.b,{to:K,activeClassName:o.a.active,children:"Test"}),Object(b.jsx)(i.b,{to:P,activeClassName:o.a.active,children:"Register"}),Object(b.jsx)(i.b,{to:E,activeClassName:o.a.active,children:"Profile"})]})})},D=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(R,{}),Object(b.jsx)(B,{})]})})},H=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(D,{})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))},G=n(25),J=n(17),M={isLoggedIn:!1},Y=n(24),q=Object(J.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(f.a)(Object(f.a)({},e),{},{isLoggedIn:t.value});default:return e}}}),A=Object(J.c)(q,Object(J.a)(Y.a)),U=A;window.store=A,a.a.render(Object(b.jsx)(G.a,{store:U,children:Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(H,{})})}),document.getElementById("root")),V()}},[[38,1,2]]]);
//# sourceMappingURL=main.1f107537.chunk.js.map
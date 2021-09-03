(this["webpackJsonpcards-game"]=this["webpackJsonpcards-game"]||[]).push([[0],{110:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(29),s=c.n(r),i=(c(85),c(86),c(26)),o=c.n(i),d=c(8),u=c(7),l=c(1),j=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"404"}),Object(l.jsx)("div",{children:"Page not found!"}),Object(l.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},b=c(3),p=c(20),h=c.n(p),O=c(31),f=c(50),m=c.n(f),x=function(e){var t=e.red,c=e.className,a=Object(O.a)(e,["red","className"]),n="".concat(t?m.a.red:m.a.default," ").concat(c);return Object(l.jsx)("button",Object(b.a)({className:n},a))},g=c(51),v=c.n(g),w=function(e){e.type;var t=e.onChange,c=e.onChangeChecked,a=e.className,n=(e.spanClassName,e.children),r=Object(O.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(v.a.checkbox," ").concat(a||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(b.a)({type:"checkbox",onChange:function(e){t&&t(e),c&&c(e.currentTarget.checked)},className:s},r)),n&&Object(l.jsx)("span",{className:v.a.spanClassName,children:n})]})},P=c(46),C=c.n(P),k=function(e){e.type;var t=e.onChange,c=e.onChangeText,a=e.onKeyPress,n=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(O.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),d="".concat(C.a.error," ").concat(i||""),u="".concat(C.a.superInput," ").concat(r?C.a.errorInput:""," ").concat(s);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(b.a)({type:"text",onChange:function(e){t&&t(e),c&&c(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),n&&"Enter"===e.key&&n()},className:u},o)),r&&Object(l.jsx)("span",{className:d,children:r})]})},S=c(4),_=c(64),N=c.n(_).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),y=function(e,t,c){return N.post("auth/login",{email:e,password:t,rememberMe:c})},E=function(){return N.delete("auth/me")},T=function(e,t){return N.post("/auth/register",{email:e,password:t})},A=function(e,t){return N.post("/auth/forgot",{email:e,message:t})},I=function(e,t){return N.post("/auth/set-new-password",{password:e,resetPasswordToken:t})},R=function(e){var t,c,a,n,r,s=null!==(t=e.min)&&void 0!==t?t:0,i=null!==(c=e.max)&&void 0!==c?c:103,o=null!==(a=e.sortPacks)&&void 0!==a?a:0,d=null!==(n=e.page)&&void 0!==n?n:1,u=null!==(r=e.pageCount)&&void 0!==r?r:"10",l=e.user_id?"&user_id=".concat(e.user_id):"";return N.get("/cards/pack?pageCount=".concat(u,"&min=").concat(s,"&max=").concat(i,"&sortPacks=").concat(o,"&page=").concat(d).concat(l))},D=function(e){return N.post("/cards/pack",{cardsPack:e})},L=function(e){return N.delete("/cards/pack?id=".concat(e))},F=function(e){return N.put("/cards/pack",{cardsPack:e})},K=function(e){var t,c=null!==(t=e.cardsPack_id)&&void 0!==t?t:"612ce7f59f1a7900041d6f3a";return N.get("/cards/card?cardsPack_id=".concat(c))},U=function(e){return N.post("/cards/card",{card:{cardsPack_id:e.cardsPack_id}})},M={status:"idle"},W=function(e){return{type:"APP/SET-STATUS",status:e}},G={isLoggedIn:!1,userData:null,authError:""},q=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},H=function(e){return{type:"login/SET-USER-DATA",payload:e}},Z=function(e){try{E().then((function(){e(q(!1)),e(H(null))}))}catch(t){}},Y=c(30),B=c(67),z=c.n(B),V=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.auth.isLoggedIn})),c=Object(S.c)((function(e){return e.auth.authError})),a=Object(Y.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email is required",e.password||(t.password="Password is required"),t},onSubmit:function(t){e(function(e){return function(t){t(W("loading")),y(e.email,e.password,e.rememberMe).then((function(e){var c={_id:e.data._id,name:e.data.name,email:e.data.email,avatar:e.data.avatar||null,publicCardPacksCount:e.data.publicCardPacksCount};t(H(c)),t(q(!0)),t(W("succeeded"))})).catch((function(e){var c=e.response?e.response.data.error:e.message;t({type:"login/SET-AUTH-ERROR",errorMessage:c}),t(W("failed"))}))}}(t)),a.resetForm()}});return t?Object(l.jsx)(u.a,{to:"/profile"}):Object(l.jsxs)("div",{className:h.a.bgr,children:[Object(l.jsx)("h2",{children:" Login "}),Object(l.jsxs)("form",{onSubmit:a.handleSubmit,className:h.a.form,children:[Object(l.jsx)(k,Object(b.a)({type:"email",placeholder:"E-mail",error:a.touched.email?a.errors.email:null},a.getFieldProps("email"))),Object(l.jsx)(k,Object(b.a)({type:"password",placeholder:"Password",error:a.touched.password?a.errors.password:null},a.getFieldProps("password"))),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)(w,Object(b.a)({},a.getFieldProps("rememberMe"))),"Remember me"]}),Object(l.jsx)("div",{className:z.a.authError,children:c}),Object(l.jsx)(x,{type:"submit",children:"Login"})]}),Object(l.jsx)(d.b,{to:"/forgot-password",children:"Forgot Password"})," ",Object(l.jsx)("br",{}),Object(l.jsx)(d.b,{to:"/register",children:"Sign Up"})]})},$=function(){return Object(S.c)((function(e){return e.auth.isLoggedIn}))?Object(l.jsx)("div",{children:"Profile"}):Object(l.jsx)(V,{})},J={isRegistered:!1},Q=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.register.isRegistered})),c=Object(Y.a)({initialValues:{email:"",password:"",confirmedPassword:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address."):t.email="Email is required",e.password?e.password.length<8&&(t.password="Password must be at least 8 symbols"):t.password="Password is required",e.password&&!e.confirmedPassword?t.confirmedPassword="Confirm your password":e.password!==e.confirmedPassword&&(t.confirmedPassword="You entered two different passwords."),t},onSubmit:function(t){t.password===t.confirmedPassword&&(e(function(e){return function(t){t(W("loading")),T(e.email,e.password).then((function(){t({type:"register/SET-SIGN-UP",isRegistered:!0}),t(W("succeeded"))})).catch((function(e){var t=e.response?e.response.data.error:e.message;alert(t)}))}}(t)),c.resetForm())}});return t?Object(l.jsx)(u.a,{to:"./login"}):Object(l.jsxs)("div",{className:h.a.bgr,children:[Object(l.jsx)("h1",{children:"it-incubator"}),Object(l.jsx)("h2",{children:"Sign In"}),Object(l.jsxs)("form",{onSubmit:c.handleSubmit,className:h.a.form,children:[Object(l.jsx)(k,Object(b.a)({type:"email",placeholder:"Email",error:c.touched.email?c.errors.email:null},c.getFieldProps("email"))),Object(l.jsx)(k,Object(b.a)({type:"password",placeholder:"Password",error:c.touched.password?c.errors.password:null},c.getFieldProps("password"))),Object(l.jsx)(k,Object(b.a)({type:"password",placeholder:"Confirm your password",error:c.touched.confirmedPassword?c.errors.confirmedPassword:null},c.getFieldProps("confirmedPassword"))),Object(l.jsxs)("div",{children:[Object(l.jsx)(d.b,{to:"/login",children:Object(l.jsx)(x,{children:" Cancel "})}),Object(l.jsx)(x,{type:"submit",children:" Register "})]})]})]})},X={isNewPassword:!1},ee=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.setNewPassword.isNewPassword})),c=Object(u.g)().token,a=Object(Y.a)({initialValues:{password:"",confirmPassword:""},validate:function(e){var t={};return e.password?e.password.length<8&&(t.password="Password must be at least 8 symbols"):t.password="Password is required",e.password&&!e.confirmPassword?t.confirmPassword="Confirm your password":e.password!==e.confirmPassword&&(t.confirmPassword="You entered two different passwords."),t},onSubmit:function(t){var n,r;t.password===t.confirmPassword&&(e((n=t.confirmPassword,r=c,function(e){e(W("loading")),I(n,r).then((function(){e({type:"setNewPassword/SET-NEW-PASSWORD"}),e(W("succeeded"))})).catch((function(e){var t=e.response?e.response.data.error:e.message;alert(t)}))})),a.resetForm())}});return t?Object(l.jsx)(u.a,{to:"/login"}):Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:h.a.bgr,children:[Object(l.jsx)("h1",{children:"it-incubator"}),Object(l.jsx)("h2",{children:"Set new password"}),Object(l.jsxs)("form",{onSubmit:a.handleSubmit,className:h.a.form,children:[Object(l.jsx)(k,Object(b.a)({type:"password",placeholder:"New password",error:a.touched.password?a.errors.password:null},a.getFieldProps("password"))),Object(l.jsx)(k,Object(b.a)({type:"password",placeholder:"Confirm your new password",error:a.touched.confirmPassword?a.errors.confirmPassword:null},a.getFieldProps("confirmPassword"))),Object(l.jsx)(x,{type:"submit",children:"Set new password"})]})]})})},te={recoveredPassword:!1},ce=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.forgotPassword.recoveredPassword})),c=Object(Y.a)({initialValues:{email:""},validate:function(e){var t={};return e.email?e.email.length<11&&(t.email="Email should be more 10 symbols"):t.email="Email is required",t},onSubmit:function(t){e(function(e,t){return function(c){c(W("loading")),A(e,t).then((function(){c({type:"recoverPassword/CHANGE-PASSWORD"}),c(W("succeeded"))})).catch((function(e){var t=e.response?e.response.data.error:e.message;alert(t)}))}}(t.email,"<div style=\"background-color: lime; padding: 15px\">\n            password recovery link:\t<a href='https://Peleka.github.io/cards-game/#/new-password/$token$'>link</a>\n            </div>"))}});return Object(l.jsxs)("div",{className:h.a.bgr,children:[Object(l.jsx)("h1",{children:"it-incubator"}),Object(l.jsx)("h2",{children:"Forgot your password?"}),t?Object(l.jsx)(ae,{email:c.values.email}):Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:c.handleSubmit,children:[Object(l.jsx)(k,Object(b.a)({type:"email",placeholder:"Email"},c.getFieldProps("email"))),Object(l.jsx)(x,{type:"submit",children:"Send instructions"})]})})]})},ae=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Check your Email"}),Object(l.jsxs)("span",{children:["click the link in the message in your email ",e.email]})]})},ne=function(){return Object(l.jsxs)("div",{children:["TestPage",Object(l.jsx)(k,{}),Object(l.jsx)(x,{}),Object(l.jsx)(w,{})]})},re=c(129),se={cardPacks:null,totalPacksCount:0,pageSize:10,currentPage:1,userId:""},ie=function(e){return function(t){t(W("loading")),R(e).then((function(e){t({type:"SET-TOTAL-PACKS-COUNT",totalPacks:e.data.cardPacksTotalCount}),t(function(e){return{type:"PACKS/SET-PACKS",data:e}}(e.data.cardPacks)),t(W("succeeded"))})).catch((function(){t(W("failed")),console.log("get packs error")}))}},oe=c(25),de=c.n(oe),ue=function(e){return Object(l.jsxs)("div",{className:de.a.packItem,children:[Object(l.jsx)("div",{className:de.a.packSpecification,children:e.name}),Object(l.jsx)("div",{className:de.a.packSpecification,children:e.cardsCount}),Object(l.jsx)("div",{className:de.a.packSpecification,children:e.updated}),Object(l.jsx)("div",{className:de.a.packSpecification,children:Object(l.jsx)(x,{onClick:function(){e.delPack(e._id)},children:"Delete"})}),Object(l.jsx)("div",{className:de.a.packSpecification,children:Object(l.jsx)(x,{onClick:function(){e.updatePack({_id:e._id,name:"Dima's updated pack"})},children:"Edit"})}),Object(l.jsx)("div",{className:de.a.packSpecification,children:Object(l.jsx)(d.b,{to:"/cards/".concat(e._id),children:"cards"})})]})},le=c(36),je=c.n(le),be=c(130),pe=function(e){var t=e.onChangeRange,c=e.value;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(be.a,{style:{margin:"0",height:"20px"},value:c,onChange:t,valueLabelDisplay:"auto","aria-labelledby":"range-slider",name:"cards count",min:0,max:20})})},he=function(e){var t=e.options,c=e.onChange,a=e.onChangeOption,n=Object(O.a)(e,["options","onChange","onChangeOption"]),r=null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}));return Object(l.jsx)("select",Object(b.a)(Object(b.a)({onChange:function(e){c&&c(e),a&&a(e.currentTarget.value)}},n),{},{children:r}))},Oe=function(){for(var e=Object(S.b)(),t=Object(S.c)((function(e){return e.packs.cardPacks})),c=Object(S.c)((function(e){return e.auth.isLoggedIn})),n=Object(S.c)((function(e){return e.packs.totalPacksCount})),r=Object(S.c)((function(e){return e.packs.pageSize})),s=Object(S.c)((function(e){return e.packs.currentPage})),i=Object(S.c)((function(e){var t;return null===(t=e.auth.userData)||void 0===t?void 0:t._id})),o=Object(a.useCallback)((function(t){e(function(e){return function(t){t(W("loading")),L(e).then((function(){t(W("succeeded")),ie({}),console.log("pack deleted successfully")})).catch((function(){t(W("failed")),console.log("delete pack error")}))}}(t))}),[e]),d=Object(a.useCallback)((function(t){e(function(e){return function(t){t(W("loading")),F(e).then((function(){ie({}),console.log("pack updated successfully"),t(W("succeeded"))})).catch((function(){t(W("failed")),console.log("update pack error")}))}}(t))}),[e]),u=[],j=Math.ceil(n/r),p=1;p<=j;p++)u.push(p);Object(a.useEffect)((function(){e(ie({pageCount:"10",page:1}))}),[e]);var h=t&&t.map((function(e,t){return Object(l.jsx)(ue,Object(b.a)(Object(b.a)({},e),{},{delPack:o,updatePack:d}),t)}));return c?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:je.a.titleParent,children:[Object(l.jsx)("h1",{children:"Packs"}),Object(l.jsxs)("div",{className:je.a.pageCount,children:[Object(l.jsx)(he,{options:["10","5","20","50","100"],onChangeOption:function(t){return e(ie({pageCount:t}))}})," pages displayed"]}),Object(l.jsx)("div",{className:je.a.filter,children:Object(l.jsx)(pe,{value:[0,20],onChangeRange:function(t,c){var a="object"===typeof c?c[0]:3,n="object"===typeof c?c[1]:6;e(ie({min:a,max:n}))}})}),Object(l.jsxs)("div",{className:je.a.paginator,children:[Object(l.jsx)(re.a,{count:j,boundaryCount:1,defaultPage:1,page:s,onChange:function(t,c){return function(t){e({type:"SET-CURRENT-PAGE",pageNumber:t}),e(ie({page:s}))}(c)}}),Object(l.jsx)(x,{onClick:function(){return e(ie({user_id:i}))},children:" show my packs "})]})]}),Object(l.jsxs)("div",{className:"".concat(de.a.packItem," ").concat(je.a.packContents),children:[Object(l.jsx)("div",{children:"name"}),Object(l.jsx)("div",{children:"cards count"}),Object(l.jsx)("div",{children:"last update"}),Object(l.jsx)("div",{children:Object(l.jsx)(x,{onClick:function(){return e((t={name:"Aleks/Dima/Elena pack"},function(e){e(W("loading")),D(t).then((function(){e(ie({pageCount:"10",page:1})),console.log("pack added successfully"),e(W("succeeded"))})).catch((function(){e(W("failed")),console.log("add pack error")}))}));var t},children:"add"})}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]}),h]}):Object(l.jsx)(V,{})},fe=c(22),me=c.n(fe),xe=c(74),ge=c.n(xe),ve=function(e){return Object(l.jsxs)("div",{className:me.a.cardItem,children:[Object(l.jsx)("div",{className:me.a.cardSpecification,children:e.question}),Object(l.jsx)("div",{className:me.a.cardSpecification,children:e.answer}),Object(l.jsx)("div",{className:me.a.cardSpecification,children:e.grade}),Object(l.jsx)("div",{className:me.a.cardSpecification,children:e.updated}),Object(l.jsx)("div",{className:me.a.cardSpecification,children:e.more_id}),Object(l.jsx)("div",{className:me.a.cardSpecification,children:Object(l.jsx)(x,{children:"delete"})}),Object(l.jsx)("div",{className:me.a.cardSpecification,children:Object(l.jsx)(x,{children:"edit"})})]})},we={cards:null},Pe=function(e){return function(t){t(W("loading")),K(e).then((function(e){t(function(e){return{type:"CARDS/SET-CARDS",data:e}}(e.data.cards)),t(W("succeeded"))})).catch((function(){t(W("failed")),console.log("get cards error")}))}},Ce=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.cards.cards})),c=Object(u.g)().packID,n=Object(S.c)((function(e){return e.auth.isLoggedIn}));Object(a.useEffect)((function(){e(Pe({cardsPack_id:c}))}),[e,c]);var r=t&&t.map((function(e,t){return Object(l.jsx)(ve,Object(b.a)({},e),t)})),s=function(t){e(function(e){return function(t){U(e).then((function(){t(Pe(e)),console.log("card added succeeded")})).catch((function(e){var t=e.res?e.res.data.error:"Add card failed: ".concat(e.message,".");alert(t)}))}}(t))};return n?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Cards"})}),Object(l.jsxs)("div",{className:"".concat(me.a.cardItem," ").concat(ge.a.cardContents),children:[Object(l.jsx)("div",{children:"question"}),Object(l.jsx)("div",{children:"answer"}),Object(l.jsx)("div",{children:"grade"}),Object(l.jsx)("div",{children:"last update"}),Object(l.jsx)("div",{children:"url"}),Object(l.jsx)("div",{children:Object(l.jsx)(x,{onClick:function(){return s({cardsPack_id:c})},children:"add"})}),Object(l.jsx)("div",{})]}),r]}):Object(l.jsx)(V,{})},ke="/login",Se="/register",_e="/profile",Ne="/forgot-password",ye="/new-password",Ee="/test",Te="/packs",Ae="/cards/:packID",Ie=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(u.d,{children:[Object(l.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(u.a,{to:Ee})}}),Object(l.jsx)(u.b,{path:ke,render:function(){return Object(l.jsx)(V,{})}}),Object(l.jsx)(u.b,{path:Se,render:function(){return Object(l.jsx)(Q,{})}}),Object(l.jsx)(u.b,{path:Ne,render:function(){return Object(l.jsx)(ce,{})}}),Object(l.jsx)(u.b,{path:ye+"/:token?",render:function(){return Object(l.jsx)(ee,{})}}),Object(l.jsx)(u.b,{path:_e,render:function(){return Object(l.jsx)($,{})}}),Object(l.jsx)(u.b,{path:Ee,render:function(){return Object(l.jsx)(ne,{})}}),Object(l.jsx)(u.b,{path:Te,render:function(){return Object(l.jsx)(Oe,{})}}),Object(l.jsx)(u.b,{path:Ae,render:function(){return Object(l.jsx)(Ce,{})}}),Object(l.jsx)(u.b,{render:function(){return Object(l.jsx)(j,{})}})]})})},Re=function(){var e=Object(S.b)();return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:o.a.wrapper,children:[Object(l.jsx)(d.b,{to:ke,activeClassName:o.a.active,children:"Login"}),Object(l.jsx)(d.b,{to:Ee,activeClassName:o.a.active,children:"Test"}),Object(l.jsx)(d.b,{to:Se,activeClassName:o.a.active,children:"Register"}),Object(l.jsx)(d.b,{to:_e,activeClassName:o.a.active,children:"Profile"}),Object(l.jsx)(d.b,{to:Te,activeClassName:o.a.active,children:"Packs"}),Object(l.jsx)(d.b,{to:Ae,activeClassName:o.a.active,children:"Cards"}),Object(l.jsx)(d.b,{to:Ne,activeClassName:o.a.active,children:"ForgotPassword"}),Object(l.jsx)(d.b,{to:ye,activeClassName:o.a.active,children:"SetNewPassword"}),Object(l.jsx)(x,{onClick:function(){return e(Z)},children:"Log out"})]})})},De=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(Re,{}),Object(l.jsx)(Ie,{})]})})},Le=c(75),Fe=c.n(Le),Ke=function(){return Object(l.jsx)("div",{className:Fe.a.ldsCircle,children:Object(l.jsx)("div",{})})},Ue=function(){var e=Object(S.c)((function(e){return e.app.status}));return Object(l.jsxs)("div",{className:"App",children:["loading"===e&&Object(l.jsx)(Ke,{}),Object(l.jsx)(De,{})]})},Me=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,131)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))},We=c(47),Ge=c(76),qe=Object(We.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(b.a)(Object(b.a)({},e),{},{isLoggedIn:t.value});case"login/SET-USER-DATA":return Object(b.a)(Object(b.a)({},e),{},{userData:t.payload});case"login/SET-AUTH-ERROR":return Object(b.a)(Object(b.a)({},e),{},{authError:t.errorMessage});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register/SET-SIGN-UP":return Object(b.a)(Object(b.a)({},e),{},{isRegistered:t.isRegistered});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});default:return e}},forgotPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"recoverPassword/CHANGE-PASSWORD":return Object(b.a)(Object(b.a)({},e),{},{recoveredPassword:!0});default:return e}},setNewPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setNewPassword/SET-NEW-PASSWORD":return Object(b.a)(Object(b.a)({},e),{},{isNewPassword:!0});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PACKS/SET-PACKS":return Object(b.a)(Object(b.a)({},e),{},{cardPacks:t.data});case"SET-TOTAL-PACKS-COUNT":return Object(b.a)(Object(b.a)({},e),{},{totalPacksCount:t.totalPacks});case"SET-CURRENT-PAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.pageNumber});case"PACKS/DEL-PACK":case"PACKS/UPDATE-PACK":default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARDS/SET-CARDS":return Object(b.a)(Object(b.a)({},e),{},{cards:t.data});default:return e}}}),He=Object(We.c)(qe,Object(We.a)(Ge.a)),Ze=He;window.store=He,s.a.render(Object(l.jsx)(S.a,{store:Ze,children:Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(Ue,{})})}),document.getElementById("root")),Me()},20:function(e,t,c){e.exports={bgr:"styles_bgr__3WPbN",form:"styles_form__ynavo"}},22:function(e,t,c){e.exports={cardItem:"Card_cardItem__3aCl1",cardSpecification:"Card_cardSpecification__m63BW"}},25:function(e,t,c){e.exports={packItem:"Pack_packItem__1sY46",packSpecification:"Pack_packSpecification__3K5dZ"}},26:function(e,t,c){e.exports={active:"Header_active__IYuL5",wrapper:"Header_wrapper__15i8W"}},36:function(e,t,c){e.exports={packContents:"Packs_packContents__1T4hR",titleParent:"Packs_titleParent__2Wtgn",paginator:"Packs_paginator__2y9Yz",filter:"Packs_filter__3sdg0",pageCount:"Packs_pageCount__2d42Q"}},46:function(e,t,c){e.exports={superInput:"SuperInputText_superInput__mWkiI",errorInput:"SuperInputText_errorInput__3yOzh",error:"SuperInputText_error__3KmT8"}},50:function(e,t,c){e.exports={default:"SuperButton_default__1_C4x",red:"SuperButton_red__2yMDL"}},51:function(e,t,c){e.exports={checkbox:"SuperCheckbox_checkbox__1fMZO",spanClassName:"SuperCheckbox_spanClassName__3e5Ho"}},67:function(e,t,c){e.exports={authError:"Login_authError__1a1YH"}},74:function(e,t,c){e.exports={cardContents:"Cards_cardContents__hPMgJ"}},75:function(e,t,c){e.exports={ldsCircle:"Loader_ldsCircle__1RXqo"}},85:function(e,t,c){},86:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.d2456714.chunk.js.map
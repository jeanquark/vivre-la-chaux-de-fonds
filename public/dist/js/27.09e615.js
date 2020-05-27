(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{100:function(n,t,r){"use strict";r.r(t);var e=r(0),a=r.n(e),o=r(5),s=r.n(o);function i(n,t,r,e,a,o,s){try{var i=n[o](s),l=i.value}catch(n){return void r(n)}i.done?t(l):Promise.resolve(l).then(e,a)}var l={metaInfo:function(){return{title:"Login"}},middleware:"guest",layout:"frontend",mounted:function(){console.log("redirect: ",this.$route.query.redirect)},data:function(){return{form:new s.a({email:"admin@example.com",password:"secret"}),remember:!1}},computed:{loading:function(){return this.$store.getters["loading/loading"]}},methods:{login:function(){var n,t=(n=a.a.mark(function n(){var t,r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,this.$store.commit("loading/SET_LOADING",!0),n.next=4,this.form.post("/api/login");case 4:return t=n.sent,r=t.data,console.log("data: ",r),this.$store.dispatch("auth/saveToken",{token:r.token,remember:this.remember}),n.next=10,this.$store.dispatch("auth/fetchUser");case 10:this.$store.commit("loading/SET_LOADING",!1),this.$router.push(this.$route.query.redirect||{name:"index"}),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),this.$store.commit("loading/SET_LOADING",!1),this.$noty.error("Une erreur est survenue lors de la tentative de login.");case 18:case"end":return n.stop()}},n,this,[[0,14]])}),function(){var t=this,r=arguments;return new Promise(function(e,a){var o=n.apply(t,r);function s(n){i(o,e,a,s,l,"next",n)}function l(n){i(o,e,a,s,l,"throw",n)}s(void 0)})});return function(){return t.apply(this,arguments)}}()}},m=(r(306),r(1)),c=Object(m.a)(l,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("b-container",[r("b-row",{staticClass:"justify-content-center fadeInDown"},[r("b-col",{attrs:{cols:"12",md:"8"}},[r("b-card",[r("b-card-body",[r("b-card-title",{staticClass:"text-center mb-4"},[n._v("\n                        Login\n                    ")]),n._v(" "),r("b-card-text",[r("b-form",{on:{submit:function(t){return t.preventDefault(),n.login(t)}}},[r("b-row",[r("b-col",{staticClass:"text-right col-form-label",attrs:{cols:"12",md:"4"}},[r("label",[n._v("E-mail")])]),n._v(" "),r("b-col",{attrs:{cols:"12",md:"6"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:n.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":n.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:n.form.email},on:{input:function(t){t.target.composing||n.$set(n.form,"email",t.target.value)}}}),n._v(" "),r("has-error",{attrs:{form:n.form,field:"email"}})],1)],1),n._v(" "),r("b-row",[r("b-col",{staticClass:"text-right col-form-label",attrs:{cols:"12",md:"4"}},[r("label",[n._v("Mot de passe")])]),n._v(" "),r("b-col",{attrs:{cols:"12",md:"6"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:n.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":n.form.errors.has("password")||n.form.errors.has("email")},attrs:{type:"password",name:"password"},domProps:{value:n.form.password},on:{input:function(t){t.target.composing||n.$set(n.form,"password",t.target.value)}}}),n._v(" "),r("has-error",{attrs:{form:n.form,field:"password"}})],1)],1),n._v(" "),r("b-row",{staticClass:"justify-content-center my-3"},[r("b-button",{attrs:{type:"submit",variant:"primary"}},[n.loading?r("b-spinner",{attrs:{small:"",variant:"primary",label:"Spinning",disabled:n.loading}}):n._e(),n._v("\n                                    Login\n                                ")],1)],1),n._v(" "),r("b-row",{staticClass:"justify-content-center my-3"},[r("b-col",{staticClass:"text-center",attrs:{cols:"12",md:"10"}},[r("router-link",{staticClass:"m-2",attrs:{to:{name:"password.request"}}},[n._v("\n                                        Mot de passe oublié?\n                                    ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,"28eaa03d",null);t.default=c.exports},306:function(n,t,r){"use strict";var e=r(54);r.n(e).a},307:function(n,t,r){(n.exports=r(6)(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* ANIMATIONS */\n.fadeInDown[data-v-28eaa03d] {\r\n    -webkit-animation-name: fadeInDown-data-v-28eaa03d;\r\n    animation-name: fadeInDown-data-v-28eaa03d;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\n}\n@-webkit-keyframes fadeInDown-data-v-28eaa03d {\n0% {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(0, -100%, 0);\r\n        transform: translate3d(0, -100%, 0);\n}\n100% {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\n}\n}\n@keyframes fadeInDown-data-v-28eaa03d {\n0% {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(0, -100%, 0);\r\n        transform: translate3d(0, -100%, 0);\n}\n100% {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\n}\n}\r\n",""])},54:function(n,t,r){var e=r(307);"string"==typeof e&&(e=[[n.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(7)(e,a);e.locals&&(n.exports=e.locals)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{100:function(r,t,s){"use strict";s.r(t);var e=s(0),a=s.n(e),o=s(4),n=s.n(o);function i(r,t,s,e,a,o,n){try{var i=r[o](n),c=i.value}catch(r){return void s(r)}i.done?t(c):Promise.resolve(c).then(e,a)}function c(r){return function(){var t=this,s=arguments;return new Promise(function(e,a){var o=r.apply(t,s);function n(r){i(o,e,a,n,c,"next",r)}function c(r){i(o,e,a,n,c,"throw",r)}n(void 0)})}}var u={layout:"backend",created:function(){},mounted:function(){var r=c(a.a.mark(function r(){return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(this.user){r.next=3;break}return r.next=3,this.$store.dispatch("users/fetchUsers");case 3:this.form.fill(this.user);case 4:case"end":return r.stop()}},r,this)}));return function(){return r.apply(this,arguments)}}(),data:function(){return{form:new n.a({firstname:"",lastname:"",current_password:"",new_password:"",new_password_confirmation:""})}},computed:{loading:function(){return this.$store.getters["loading/loading"]},user:function(){return this.$store.getters["users/users"][this.$route.params.id]}},methods:{updateUser:function(){var r=c(a.a.mark(function r(){return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,this.form.user_id=this.user.id,console.log("this.form: ",this.form),this.$store.commit("loading/SET_LOADING",!0),r.next=6,this.$store.dispatch("users/updateUser",this.form);case 6:this.$store.commit("loading/SET_LOADING",!1),this.$noty.success("Utilisateur modifié avec succès!"),this.$router.push("/admin/users"),r.next=16;break;case 11:r.prev=11,r.t0=r.catch(0),this.$store.commit("loading/SET_LOADING",!1),console.log("error: ",r.t0),this.$noty.error("Une erreur est survenue et l'utillisateur n'a pas pu être modifié.");case 16:case"end":return r.stop()}},r,this,[[0,11]])}));return function(){return r.apply(this,arguments)}}()}},l=s(2),m=Object(l.a)(u,function(){var r=this,t=r.$createElement,s=r._self._c||t;return s("b-container",[s("b-breadcrumb",[s("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/users"}},[s("font-awesome-icon",{attrs:{icon:"users"}}),r._v(" "),s("span",[r._v("Utilisateurs")])],1),r._v(" "),s("b-breadcrumb-item",{attrs:{active:""}},[r._v("Editer")])],1),r._v(" "),r.user?s("h1",{staticClass:"text-center"},[r._v("Editer utilisateur "),s("span",{staticClass:"primary-color"},[r._v(r._s(r.user.firstname)+" "+r._s(r.user.lastname))])]):r._e(),r._v(" "),s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{cols:"12",md:"8",lg:"6"}},[s("b-form",{on:{submit:function(t){return t.preventDefault(),r.updateUser(t)}}},[s("b-row",{staticClass:"justify-content-start my-3 px-3",attrs:{"align-v":"center"}},[s("b-col",{attrs:{cols:"12"}},[s("b-form-group",{attrs:{label:"Prénom:","label-for":"firstname"}},[s("b-form-input",{class:{"is-invalid":r.form.errors.has("firstname")},attrs:{id:"firstname",type:"text"},model:{value:r.form.firstname,callback:function(t){r.$set(r.form,"firstname",t)},expression:"form.firstname"}}),r._v(" "),s("has-error",{attrs:{form:r.form,field:"firstname"}})],1)],1),r._v(" "),s("b-col",{attrs:{cols:"12"}},[s("b-form-group",{attrs:{label:"Nom:","label-for":"lastname"}},[s("b-form-input",{class:{"is-invalid":r.form.errors.has("lastname")},attrs:{id:"lastname",type:"text"},model:{value:r.form.lastname,callback:function(t){r.$set(r.form,"lastname",t)},expression:"form.lastname"}}),r._v(" "),s("has-error",{attrs:{form:r.form,field:"lastname"}})],1)],1),r._v(" "),s("b-col",{attrs:{cols:"12"}},[s("b-form-group",{attrs:{label:"Nouveau mot de passe:","label-for":"newPassword"}},[s("b-form-input",{class:{"is-invalid":r.form.errors.has("new_password")},attrs:{id:"newPassword",type:"password"},model:{value:r.form.new_password,callback:function(t){r.$set(r.form,"new_password",t)},expression:"form.new_password"}}),r._v(" "),s("has-error",{attrs:{form:r.form,field:"new_password"}})],1)],1),r._v(" "),s("b-col",{attrs:{cols:"12"}},[s("b-form-group",{attrs:{label:"Confirmer nouveau mot de passe:","label-for":"newPasswordConfirmation"}},[s("b-form-input",{class:{"is-invalid":r.form.errors.has("new_password_confirmation")},attrs:{id:"newPasswordConfirmation",type:"password"},model:{value:r.form.new_password_confirmation,callback:function(t){r.$set(r.form,"new_password_confirmation",t)},expression:"form.new_password_confirmation"}}),r._v(" "),s("has-error",{attrs:{form:r.form,field:"new_password_confirmation"}})],1)],1),r._v(" "),s("b-col",{attrs:{cols:"12"}},[s("b-form-group",{attrs:{label:"Mot de passe actuel:","label-for":"currentPassword"}},[s("b-form-input",{class:{"is-invalid":r.form.errors.has("currentPassword")},attrs:{type:"password",id:"currentPassword"},model:{value:r.form.current_password,callback:function(t){r.$set(r.form,"current_password",t)},expression:"form.current_password"}}),r._v(" "),s("has-error",{attrs:{form:r.form,field:"current_password"}})],1)],1)],1),r._v(" "),s("b-row",{staticClass:"justify-content-center my-2"},[s("b-button",{attrs:{variant:"primary",disabled:r.loading,type:"submit"}},[r.loading?s("b-spinner",{attrs:{small:"",type:"grow"}}):r._e(),r._v("\n                            Mettre à jour\n                        ")],1)],1)],1)],1)],1)],1)},[],!1,null,"49e11582",null);t.default=m.exports}}]);
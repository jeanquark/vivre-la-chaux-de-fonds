(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{25:function(t,e,r){"use strict";r.r(e);var s=r(0),n=r.n(s),i=r(5),a=r.n(i);function o(t,e,r,s,n,i,a){try{var o=t[i](a),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(s,n)}function c(t){return function(){var e=this,r=arguments;return new Promise(function(s,n){var i=t.apply(e,r);function a(t){o(i,s,n,a,c,"next",t)}function c(t){o(i,s,n,a,c,"throw",t)}a(void 0)})}}var u={layout:"backend",created:function(){var t=c(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(Object.keys(this.$store.getters["users/users"]).length<2)){t.next=6;break}return this.$store.commit("loading/SET_LOADING",!0),t.next=5,this.$store.dispatch("users/fetchUsers");case 5:this.$store.commit("loading/SET_LOADING",!1);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error: ",t.t0),this.$store.commit("loading/SET_LOADING",!1);case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),data:function(){return{form:new a.a({new_role:""}),sortBy:"id",sortDesc:!0,fields:[{key:"id",label:"ID",sortable:!0},{key:"email",label:"E-mail",sortable:!0},{key:"role",label:"Role",sortable:!0},{key:"updated_at",label:"Dernière modification",sortable:!0},{key:"actions",sortable:!1}]}},computed:{loading:function(){return this.$store.getters["loading/loading"]},users:function(){return Object.values(this.$store.getters["users/users"])}},methods:{updateUserRole:function(){var t=c(n.a.mark(function t(e,r){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.form.user_id=e.id,this.form.new_role=r,console.log("updateUserRole: ",this.form),t.next=6,this.$store.dispatch("users/updateUser",this.form);case 6:this.$noty.success("Utilisateur mis à jour avec succès!"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("error: ",t.t0),this.$noty.error("Une erreur est survenue et l'utilisateur n'a pas pu être mis à jour.");case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e,r){return t.apply(this,arguments)}}(),deleteUser:function(){var t=c(n.a.mark(function t(e){var r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$bvModal.msgBoxConfirm("Etes-vous sûr de vouloir supprimer l utilisateur ".concat(e,"?"),{okTitle:"Oui",cancelTitle:"Annuler"});case 3:if(r=t.sent,console.log("value: ",r),!r){t.next=9;break}return t.next=8,this.$store.dispatch("users/deleteUser",{userId:e});case 8:this.$noty.success("Utilisateur supprimée avec succès!");case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("error: ",t.t0),this.$noty.error("Une erreur est survenue et l'utilisateur n'a pas pu être supprimé.");case 15:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}},l=r(2),d=Object(l.a)(u,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-breadcrumb",[r("b-breadcrumb-item",{attrs:{active:""}},[r("font-awesome-icon",{attrs:{icon:"users"}}),t._v(" Utilisateurs")],1)],1),t._v(" "),r("h2",{staticClass:"text-center"},[t._v("Utilisateurs")]),t._v(" "),r("b-button",{staticClass:"my-3",attrs:{variant:"primary",to:"/admin/users/create"}},[t._v("Créer un nouvel utilistateur")]),t._v(" "),t.loading?t._e():r("b-table",{staticClass:"nowrap",attrs:{"show-empty":"",small:"",stacked:"md",items:t.users,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"cell(role)",fn:function(e){return[t._v("\n            "+t._s(e.item.roles[0].name)+"\n        ")]}},{key:"cell(updated_at)",fn:function(e){return[t._v("\n            "+t._s(t._f("moment")(e.item.updated_at,"from","now"))+"\n        ")]}},{key:"cell(actions)",fn:function(e){return["user"===e.item.roles[0].slug?r("b-button",{staticClass:"my-1",attrs:{variant:"info"},on:{click:function(r){return t.updateUserRole(e.item,"admin")}}},[t._v("\n                Devenir Admin\n            ")]):t._e(),t._v(" "),"admin"===e.item.roles[0].slug?r("b-button",{staticClass:"my-1",attrs:{variant:"info"},on:{click:function(r){return t.updateUserRole(e.item,"user")}}},[t._v("\n                Devenir Utilisateur\n            ")]):t._e(),t._v(" "),r("router-link",{staticClass:"btn btn-warning my-1",staticStyle:{display:"inline-block"},attrs:{to:"/admin/users/"+e.item.id}},[r("font-awesome-icon",{attrs:{icon:"eye"}})],1),t._v(" "),r("router-link",{staticClass:"btn btn-success my-1",staticStyle:{display:"inline-block"},attrs:{to:"/admin/users/"+e.item.id+"/edit"}},[r("font-awesome-icon",{attrs:{icon:"edit"}})],1),t._v(" "),r("b-button",{staticClass:"my-1",attrs:{variant:"danger"},on:{click:function(r){return t.deleteUser(e.item.id)}}},[r("font-awesome-icon",{attrs:{icon:"trash"}})],1)]}}],null,!1,955405278)}),t._v(" "),t.loading?r("b-row",{staticClass:"justify-content-center"},[r("b-spinner",{attrs:{variant:"primary",label:"Spinning"}})],1):t._e()],1)},[],!1,null,"d01d54c8",null);e.default=d.exports}}]);
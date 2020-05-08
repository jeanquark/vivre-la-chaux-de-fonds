(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{25:function(t,e,i){"use strict";i.r(e);var n=i(0),s=i.n(n);i(4);function a(t,e,i,n,s,a,r){try{var c=t[a](r),o=c.value}catch(t){return void i(t)}c.done?e(o):Promise.resolve(o).then(n,s)}function r(t){return function(){var e=this,i=arguments;return new Promise(function(n,s){var r=t.apply(e,i);function c(t){a(r,n,s,c,o,"next",t)}function o(t){a(r,n,s,c,o,"throw",t)}c(void 0)})}}var c={layout:"backend",created:function(){var t=r(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Object.keys(this.$store.getters["activities/activities"]).length<2)){t.next=5;break}return this.$store.commit("loading/SET_LOADING",!0),t.next=4,this.$store.dispatch("activities/fetchActivities");case 4:this.$store.commit("loading/SET_LOADING",!1);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{sortBy:"id",sortDesc:!0,fields:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Nom",sortable:!0},{key:"image",label:"Image",sortable:!0},{key:"is_published",label:"Publié?",sortable:!0},{key:"is_on_frontpage",label:"En première page?",sortable:!0},{key:"updated_at",label:"Dernière modification",sortable:!0},{key:"actions",sortable:!1}]}},computed:{loading:function(){return this.$store.getters["loading/loading"]},activitiesArray:function(){return Object.values(this.$store.getters["activities/activities"])}},methods:{deleteActivity:function(){var t=r(s.a.mark(function t(e){var i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$bvModal.msgBoxConfirm("Etes-vous sûr de vouloir supprimer l'activité ".concat(e,"?"),{okTitle:"OK",cancelTitle:"Annuler"});case 3:if(i=t.sent,console.log("value: ",i),!i){t.next=9;break}return t.next=8,this.$store.dispatch("activities/deleteActivity",{activityId:e});case 8:this.$noty.success("Activité supprimée avec succès!");case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("error: ",t.t0),this.$noty.error("Une erreur est survenue et l'activité n'a pas pu être supprimée.");case 15:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}},o=i(2),l=Object(o.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",[i("b-breadcrumb",[i("b-breadcrumb-item",{attrs:{active:""}},[i("font-awesome-icon",{attrs:{icon:"calendar-day"}}),t._v(" Activités")],1)],1),t._v(" "),i("h2",{staticClass:"text-center"},[t._v("Activités")]),t._v(" "),i("router-link",{staticClass:"btn btn-primary my-3",attrs:{to:"/admin/activities/create"}},[t._v("Créer une nouvelle activité")]),t._v(" "),t.loading?t._e():i("b-table",{staticClass:"nowrap",attrs:{"show-empty":"",small:"",stacked:"md",items:t.activitiesArray,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"cell(image)",fn:function(e){return[e.item.image?i("img",{staticStyle:{"max-width":"100px","max-height":"50px"},attrs:{src:"/images/activities/"+e.item.image}}):i("span",[i("i",[t._v("Pas d'image")])])]}},{key:"cell(is_published)",fn:function(e){return[e.item.is_published?i("span",{staticClass:"text-success"},[t._v("\n                    Oui\n                ")]):i("span",{staticClass:"text-danger"},[t._v("\n                    Non\n                ")])]}},{key:"cell(is_on_frontpage)",fn:function(e){return[e.item.is_on_frontpage?i("span",{staticClass:"text-success"},[t._v("\n                    Oui\n                ")]):i("span",{staticClass:"text-danger"},[t._v("\n                    Non\n                ")])]}},{key:"cell(updated_at)",fn:function(e){return[t._v("\n                "+t._s(t._f("moment")(e.item.updated_at,"from","now"))+"\n            ")]}},{key:"cell(actions)",fn:function(e){return[i("router-link",{staticClass:"btn btn-warning my-1",staticStyle:{display:"inline-block"},attrs:{to:"/admin/activities/"+e.item.id}},[i("font-awesome-icon",{attrs:{icon:"eye"}})],1),t._v(" "),i("router-link",{staticClass:"btn btn-success my-1",staticStyle:{display:"inline-block"},attrs:{to:"/admin/activities/"+e.item.id+"/edit"}},[i("font-awesome-icon",{attrs:{icon:"edit"}})],1),t._v(" "),i("b-button",{staticClass:"my-1",attrs:{variant:"danger"},on:{click:function(i){return t.deleteActivity(e.item.id)}}},[i("font-awesome-icon",{attrs:{icon:"trash"}})],1)]}}],null,!1,1561518630)}),t._v(" "),t.loading?i("b-row",{staticClass:"justify-content-center"},[i("b-spinner",{attrs:{variant:"primary",label:"Spinning"}})],1):t._e()],1)},[],!1,null,"eb4978dc",null);e.default=l.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{19:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s);function r(t,e,n,s,a,r,i){try{var o=t[r](i),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(s,a)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(s,a){var i=t.apply(e,n);function o(t){r(i,s,a,o,c,"next",t)}function c(t){r(i,s,a,o,c,"throw",t)}o(void 0)})}}var o={created:function(){var t=i(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(Object.keys(this.$store.getters["pages/pages"]).length<=2)){t.next=6;break}return this.$store.commit("loading/SET_LOADING",!0),t.next=5,this.$store.dispatch("pages/fetchPages");case 5:this.$store.commit("loading/SET_LOADING",!1);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error: ",t.t0),this.$store.commit("loading/SET_LOADING",!1);case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),data:function(){return{sortBy:"id",sortDesc:!0,fields:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Nom",sortable:!0},{key:"slug",label:"Slug",sortable:!0},{key:"sections",label:"Sections",sortable:!1},{key:"content",label:"Contenu",sortable:!1},{key:"is_published",label:"Publié?",sortable:!0},{key:"updated_at",label:"Dernière modification",sortable:!0},{key:"actions",sortable:!1}]}},computed:{loading:function(){return this.$store.getters["loading/loading"]},pages:function(){return this.$store.getters["pages/pages"]},pagesArray:function(){var t=[];for(var e in this.pages)this.pages.hasOwnProperty(e)&&null!=this.pages[e]&&t.push(this.pages[e]);return t}},methods:{deletePage:function(){var t=i(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$bvModal.msgBoxConfirm("Etes-vous sûr de vouloir supprimer la page ".concat(e,"?"),{okTitle:"OK",cancelTitle:"Annuler"});case 3:if(!t.sent){t.next=8;break}return t.next=7,this.$store.dispatch("pages/deletePage",{pageId:e});case 7:this.$noty.success("Page supprimée avec succès!");case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("error: ",t.t0),this.$noty.error("Une erreur est survenue et la page n'a pas pu être supprimée.");case 14:case"end":return t.stop()}},t,this,[[0,10]])}));return function(e){return t.apply(this,arguments)}}()}},c=(n(274),n(2)),l=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-breadcrumb",[n("b-breadcrumb-item",{attrs:{active:""}},[n("font-awesome-icon",{attrs:{icon:"file-alt"}}),t._v(" Pages")],1)],1),t._v(" "),n("h2",{staticClass:"text-center"},[t._v("Gestion des pages")]),t._v(" "),n("b-button",{staticClass:"my-3",attrs:{to:"/admin/pages/create",variant:"primary"}},[t._v("Créer une nouvelle page")]),t._v(" "),n("b-button",{staticClass:"my-3",attrs:{to:"/admin/pages/create_ORIGINAL",variant:"primary"}},[t._v("Créer une nouvelle page ORIGINAL")]),t._v(" "),t.loading?t._e():n("b-table",{staticClass:"nowrap",attrs:{responsive:"sm","show-empty":"",small:"",stacked:"md",items:t.pagesArray,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"cell(sections)",fn:function(e){return t._l(e.item.sections,function(e){return n("div",{key:e.id},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])})}},{key:"cell(content)",fn:function(e){return[t._v("\n\t\t\t\t"+t._s(e.item.content.substring(0,20))+" ...\n\t\t\t")]}},{key:"cell(is_published)",fn:function(e){return[t._v("\n\t\t\t\t"+t._s(e.item.is_published?"Oui":"Non")+"\n\t\t\t")]}},{key:"cell(updated_at)",fn:function(e){return[t._v("\n\t\t\t\t"+t._s(t._f("moment")(e.item.updated_at,"from","now"))+"\n\t\t\t")]}},{key:"cell(actions)",fn:function(e){return[n("router-link",{staticClass:"btn btn-warning",staticStyle:{display:"inline-block"},attrs:{to:"/admin/pages/slug/"+e.item.slug}},[n("font-awesome-icon",{attrs:{icon:"eye"}})],1),t._v(" "),n("router-link",{staticClass:"btn btn-success",staticStyle:{display:"inline-block"},attrs:{to:"/admin/pages/"+e.item.slug+"/edit"}},[n("font-awesome-icon",{attrs:{icon:"edit"}})],1),t._v(" "),n("button",{staticClass:"btn btn-danger",on:{click:function(n){return t.deletePage(e.item.id)}}},[n("font-awesome-icon",{attrs:{icon:"trash"}})],1)]}}],null,!1,1893611466)}),t._v(" "),t.loading?n("b-row",{staticClass:"justify-content-center"},[n("b-spinner",{attrs:{variant:"primary",label:"Spinning"}})],1):t._e()],1)},[],!1,null,"6df48bb8",null);e.default=l.exports},274:function(t,e,n){"use strict";var s=n(39);n.n(s).a},275:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,"\n.table.b-table > thead > tr > [aria-sort][data-v-6df48bb8]:not(.b-table-sort-icon-left) {\n\t\tvertical-align: middle;\n}\n.inline-block[data-v-6df48bb8] {\n\t\tdisplay: inline-block;\n}\n.nowrap[data-v-6df48bb8] {\n        white-space:nowrap;\n}\n",""])},39:function(t,e,n){var s=n(275);"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(8)(s,a);s.locals&&(t.exports=s.locals)}}]);
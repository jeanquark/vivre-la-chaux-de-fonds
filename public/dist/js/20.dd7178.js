(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(t,e,s){"use strict";s.r(e);var i={mounted:function(){this.$store.getters["activities/activities"][this.$route.params.id]||this.$store.dispatch("activities/fetchActivity",{activityId:this.$route.params.id})},data:function(){return{sortBy:"id",sortDesc:!0,fields:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Nom",sortable:!0},{key:"slug",label:"Slug",sortable:!0},{key:"subtitle",label:"Sous-titre",sortable:!0},{key:"content",label:"Contenu",sortable:!0},{key:"start_date",label:"Date de début",sortable:!0},{key:"end_date",label:"Date de fin",sortable:!0},{key:"image",label:"Image",sortable:!1},{key:"is_published",label:"Publié?",sortable:!0},{key:"is_on_frontpage",label:"En première page?",sortable:!0},{key:"sponsors",label:"Sponsors",sortable:!1},{key:"created_at",label:"Date de création",sortable:!0},{key:"updated_at",label:"Dernière modification",sortable:!0}]}},computed:{loading:function(){return this.$store.getters["loading/loading"]},activity:function(){return this.$store.getters["activities/activities"][this.$route.params.id]},activityArray:function(){var t=[];return t.push(this.activity),t}}},a=(s(276),s(1)),n=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-breadcrumb",[s("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/activities"}},[s("font-awesome-icon",{attrs:{icon:"calendar-day"}}),t._v(" "),s("span",[t._v("Activités")])],1),t._v(" "),s("b-breadcrumb-item",{attrs:{active:""}},[t._v("Montrer")])],1),t._v(" "),t.activity?s("h2",{staticClass:"text-center"},[t._v("Activité "),s("span",{staticClass:"primary-color"},[t._v(t._s(t.activity.name))])]):t._e(),t._v(" "),s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{cols:"12"}},[s("b-table",{staticClass:"nowrap",attrs:{"show-empty":"",responsive:"sm",items:t.activityArray,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,stacked:!0},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"cell(image)",fn:function(t){return[s("img",{attrs:{src:"/images/"+t.item.image,width:"200"}})]}},{key:"cell(is_published)",fn:function(e){return[t._v("\n                    "+t._s(e.item.is_published?"Oui":"Non")+"\n                ")]}},{key:"cell(is_on_frontpage)",fn:function(e){return[t._v("\n                    "+t._s(e.item.is_on_frontpage?"Oui":"Non")+"\n                ")]}},{key:"cell(sponsors)",fn:function(e){return t._l(e.item.sponsors,function(e){return s("div",{key:e.id,staticClass:"p-1"},[s("img",{attrs:{src:"/images/"+e.image,width:"100"}}),t._v("\n                        "+t._s(e.name)+"\n                    ")])})}},{key:"cell(created_at)",fn:function(e){return[t._v("\n                    "+t._s(t._f("moment")(e.item.created_at,"Do MMMM YYYY"))+"\n                ")]}},{key:"cell(updated_at)",fn:function(e){return[t._v("\n                    "+t._s(t._f("moment")(e.item.updated_at,"from","now"))+"\n                ")]}}])})],1)],1)],1)},[],!1,null,"ff03f4a0",null);e.default=n.exports},276:function(t,e,s){"use strict";var i=s(39);s.n(i).a},277:function(t,e,s){(t.exports=s(6)(!1)).push([t.i,".primary-color[data-v-ff03f4a0] {\n  color: #2C5CAD;\n}",""])},39:function(t,e,s){var i=s(277);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s(7)(i,a);i.locals&&(t.exports=i.locals)}}]);
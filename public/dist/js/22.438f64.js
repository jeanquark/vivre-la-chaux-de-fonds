(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{119:function(t,e,s){"use strict";s.r(e);var n={mounted:function(){this.$store.getters["pages/pages"][this.$route.params.id]||this.$store.dispatch("pages/fetchPageById",{pageId:this.$route.params.id})},data:function(){return{sortBy:"id",sortDesc:!0,fields:[{key:"id",label:"ID",sortable:!0},{key:"name",label:"Nom",sortable:!0},{key:"slug",label:"Slug",sortable:!0},{key:"sections",label:"Sections",sortable:!1},{key:"content",label:"Contenu (HTML)",sortable:!0},{key:"is_published",label:"Publié?",sortable:!0},{key:"created_at",label:"Date de création",sortable:!0},{key:"updated_at",label:"Dernière modification",sortable:!0}]}},computed:{loading:function(){return this.$store.getters["loading/loading"]},page:function(){return this.$store.getters["pages/pages"][this.$route.params.id]},pageArray:function(){var t=[];return t.push(this.page),t}}},a=(s(292),s(1)),r=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-breadcrumb",[s("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/pages"}},[s("font-awesome-icon",{attrs:{icon:"file"}}),t._v(" "),s("span",[t._v("Pages")])],1),t._v(" "),s("b-breadcrumb-item",{attrs:{active:""}},[t._v("Montrer")])],1),t._v(" "),t.page?s("h2",{staticClass:"text-center"},[t._v('Page "'+t._s(t.page.name)+'"')]):t._e(),t._v(" "),s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{cols:"12"}},[s("b-table",{staticClass:"nowrap",attrs:{"show-empty":"",responsive:"sm",items:t.pageArray,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,stacked:!0},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"cell(sections)",fn:function(e){return t._l(e.item.sections,function(e){return s("div",{key:e.id},[t._v("\n                        "+t._s(e.name)+"\n                    ")])})}},{key:"cell(is_published)",fn:function(e){return[t._v("\n                    "+t._s(e.item.is_published?"Oui":"Non")+"\n                ")]}},{key:"cell(created_at)",fn:function(e){return[t._v("\n                    "+t._s(t._f("moment")(e.item.created_at,"Do MMMM YYYY"))+"\n                ")]}},{key:"cell(updated_at)",fn:function(e){return[t._v("\n                    "+t._s(t._f("moment")(e.item.updated_at,"from","now"))+"\n                ")]}}])})],1)],1),t._v(" "),s("b-row",{staticClass:"my-2",attrs:{"no-gutters":""}},[t._v("\n        Rendu du contenu HTML:"),s("br"),t._v(" "),s("div",{staticClass:"p-3",attrs:{id:"textBox"},domProps:{innerHTML:t._s(t.page?t.page.content:"")}})])],1)},[],!1,null,"4d4d5d2a",null);e.default=r.exports},292:function(t,e,s){"use strict";var n=s(47);s.n(n).a},293:function(t,e,s){(t.exports=s(6)(!1)).push([t.i,"#textBox[data-v-4d4d5d2a] {\n  width: 100%;\n  border: 6px double #E1B124;\n}",""])},47:function(t,e,s){var n=s(293);"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s(7)(n,a);n.locals&&(t.exports=n.locals)}}]);
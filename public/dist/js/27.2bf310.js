(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{104:function(t,e,s){"use strict";s.r(e);var n=s(0),r=s.n(n);function o(t,e,s,n,r,o,i){try{var a=t[o](i),c=a.value}catch(t){return void s(t)}a.done?e(c):Promise.resolve(c).then(n,r)}function i(t){return function(){var e=this,s=arguments;return new Promise(function(n,r){var i=t.apply(e,s);function a(t){o(i,n,r,a,c,"next",t)}function c(t){o(i,n,r,a,c,"throw",t)}a(void 0)})}}var a={layout:"frontend",metaInfo:function(){return{title:"Association"}},created:function(){var t=i(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.$store.commit("loading/SET_LOADING",!0),console.log("abc: ",this.$route.path),!(Object.keys(this.$store.getters["sponsors/sponsors"]).length<2)){t.next=6;break}return t.next=6,this.$store.dispatch("sponsors/fetchSponsors",{is_active:!0});case 6:if(this.page){t.next=9;break}return t.next=9,this.$store.dispatch("pages/fetchPageBySlug",{pageSlug:this.$route.path.substring(1)});case 9:this.selectedSection=this.pageSections[0],this.$store.commit("loading/SET_LOADING",!1),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),this.$store.commit("loading/SET_LOADING",!1);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));return function(){return t.apply(this,arguments)}}(),mounted:function(){var t=i(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{selectedSection:{}}},computed:{loading:function(){return this.$store.getters["loading/loading"]},pages:function(){return this.$store.getters["pages/pages"]},page:function(){var t=this;return Object.values(this.$store.getters["pages/pages"]).find(function(e){return e.slug===t.$route.path.substring(1)})},pageSections:function(){return this.page?this.page.sections:[]},sponsors:function(){return this.$store.getters["sponsors/sponsors"]}},methods:{selectSection:function(t){console.log("selectSection: ",t),this.selectedSection=t}}},c=(s(308),s(1)),l=Object(c.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-row",[s("b-col",{staticClass:"d-none d-md-block",staticStyle:{border:"0px solid blue"},attrs:{cols:"3"}},[s("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{indicators:!1,interval:2e3,fade:"",id:"carousel-fade"}},t._l(t.sponsors,function(t){return s("b-carousel-slide",{key:t.id,attrs:{"img-src":"/images/"+t.image}})}),1)],1),t._v(" "),t.loading?s("b-col",{attrs:{cols:"12",md:"9"}},[s("b-row",{staticClass:"justify-content-center",staticStyle:{height:"15em","background-color":"rgba(0, 0, 0, 0.5)"},attrs:{"no-gutters":"","align-v":"center"}},[s("b-spinner",{attrs:{type:"grow",label:"Loading..."}})],1)],1):s("b-col",{staticStyle:{border:"0px solid green"},attrs:{cols:"12",md:"9"}},[t.page&&t.page.content?s("b-row",{staticClass:"my-3",attrs:{"no-gutters":""}},[s("b-col",{attrs:{cols:"12"}},[s("b-card",[s("b-card-text",{},[s("div",{domProps:{innerHTML:t._s(t.page.content)}})])],1)],1)],1):t._e(),t._v(" "),t.pageSections.length>0?s("b-row",{staticClass:"flex-body",staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)"},attrs:{"no-gutters":""}},[s("b-col",{staticClass:"flex-column p-2",attrs:{cols:"6"}},[s("div",{staticStyle:{"flex-grow":"1"}},t._l(t.pageSections,function(e){return s("div",{key:e.id},[s("b-button",{staticClass:"m-1",class:{active:e.id===t.selectedSection.id},attrs:{pill:"",variant:"primary",size:"sm"},on:{click:function(s){return t.selectSection(e)}}},[t._v(t._s(e.name))])],1)}),0),t._v(" "),s("h2",{staticClass:"text-secondary -0",staticStyle:{border:"0px solid green"}},[t._v(t._s(t.selectedSection.name))])]),t._v(" "),s("b-col",{staticClass:"flex-row",attrs:{cols:"6"}},[s("b-img",{attrs:{right:"",src:"/images/"+t.selectedSection.image,fluid:"",alt:t.selectedSection.name}})],1)],1):t._e(),t._v(" "),t.selectedSection?s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{attrs:{cols:"12"}},[s("b-card",[s("b-card-text",{},[s("div",{domProps:{innerHTML:t._s(t.selectedSection.content)}})])],1)],1)],1):t._e()],1)],1)],1)},[],!1,null,"5b4c6d08",null);e.default=l.exports},308:function(t,e,s){"use strict";var n=s(54);s.n(n).a},309:function(t,e,s){(t.exports=s(6)(!1)).push([t.i,"\n.flex-row[data-v-5b4c6d08] {\r\n    flex-direction: row;\r\n    display: flex;\n}\n.flex-column[data-v-5b4c6d08] {\r\n    flex-direction: column;\r\n    display: flex;\n}\n.flex-body[data-v-5b4c6d08] {\r\n    display: flex;\n}\r\n\r\n\r\n\r\n\r\n\r\n",""])},54:function(t,e,s){var n=s(309);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(7)(n,r);n.locals&&(t.exports=n.locals)}}]);
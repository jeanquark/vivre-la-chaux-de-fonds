(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{86:function(t,e,s){"use strict";s.r(e);var r=s(0),n=s.n(r);function o(t,e,s,r,n,o,i){try{var a=t[o](i),c=a.value}catch(t){return void s(t)}a.done?e(c):Promise.resolve(c).then(r,n)}function i(t){return function(){var e=this,s=arguments;return new Promise(function(r,n){var i=t.apply(e,s);function a(t){o(i,r,n,a,c,"next",t)}function c(t){o(i,r,n,a,c,"throw",t)}a(void 0)})}}var a={layout:"frontend",metaInfo:function(){return{title:"Association"}},created:function(){var t=i(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){var t=i(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("abc: ",this.$route.path),this.$store.getters["pages/pages"][this.$route.path.substring(1)]){t.next=4;break}return t.next=4,this.$store.dispatch("pages/fetchPageBySlug",{slug:this.$route.path.substring(1)});case 4:if(!(Object.keys(this.$store.getters["sponsors/sponsors"]).length<2)){t.next=7;break}return t.next=7,this.$store.dispatch("sponsors/fetchSponsors");case 7:console.log("Done!"),this.selectedSection=this.pageSections[0];case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{selectedSection:{}}},computed:{pages:function(){return this.$store.getters["pages/pages"]},pageSections:function(){return this.$store.getters["pages/pages"][this.$route.path.substring(1)]?this.$store.getters["pages/pages"][this.$route.path.substring(1)].sections:""},sponsors:function(){return this.$store.getters["sponsors/sponsors"]}},methods:{selectSection:function(t){console.log("selectSection: ",t),this.selectedSection=t}}},c=s(2),u=Object(c.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-row",[s("b-col",{staticStyle:{border:"0px solid blue"},attrs:{cols:"3"}},[s("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{indicators:!1,interval:2e3,fade:"",id:"carousel-fade"}},t._l(t.sponsors,function(t){return s("b-carousel-slide",{key:t.id,attrs:{"img-src":"/images/partenaires/"+t.image}})}),1)],1),t._v(" "),s("b-col",{staticStyle:{border:"0px solid green"},attrs:{cols:"9"}},[s("b-row",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)"},attrs:{"no-gutters":""}},[s("b-col",{staticClass:"p-2",staticStyle:{border:"0px solid red"},attrs:{cols:"6"}},[t._l(t.pageSections,function(e){return s("div",{key:e.id},[s("b-button",{staticClass:"m-1",class:{active:e.id===t.selectedSection.id},attrs:{pill:"",variant:"primary",size:"sm"},on:{click:function(s){return t.selectSection(e)}}},[t._v(t._s(e.name))]),s("br")],1)}),t._v(" "),s("h2",{staticClass:"text-secondary",staticStyle:{position:"absolute",bottom:"0"}},[t._v(t._s(t.selectedSection.name))])],2),t._v(" "),s("b-col",{staticStyle:{border:"0px solid orange"},attrs:{cols:"6"}},[s("b-img",{attrs:{right:"",src:"/images/pages/"+t.selectedSection.image,fluid:"",alt:t.selectedSection.name}})],1)],1),t._v(" "),s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{attrs:{cols:"12"}},[s("b-card",[s("b-card-text",{},[s("div",{domProps:{innerHTML:t._s(t.selectedSection.content)}})])],1)],1)],1)],1)],1)],1)},[],!1,null,"74f8ddce",null);e.default=u.exports}}]);
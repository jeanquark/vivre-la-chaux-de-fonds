(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{121:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n.n(r);function o(t,e,n,r,s,o,a){try{var i=t[o](a),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,s)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(r,s){var a=t.apply(e,n);function i(t){o(a,r,s,i,c,"next",t)}function c(t){o(a,r,s,i,c,"throw",t)}i(void 0)})}}var i={layout:"frontend",metaInfo:function(){return{title:"On parle de nous"}},created:function(){var t=a(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.$store.commit("loading/SET_LOADING",!0),!(Object.keys(this.$store.getters["sponsors/sponsors"]).length<2)){t.next=5;break}return t.next=5,this.$store.dispatch("sponsors/fetchSponsors",{is_active:!0});case 5:if(this.page){t.next=8;break}return t.next=8,this.$store.dispatch("pages/fetchPageBySlug",{pageSlug:this.$route.path.substring(1)});case 8:this.selectedSection=this.pageSections[0],this.$store.commit("loading/SET_LOADING",!1),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),this.$store.commit("loading/SET_LOADING",!1);case 15:case"end":return t.stop()}},t,this,[[0,12]])}));return function(){return t.apply(this,arguments)}}(),mounted:function(){var t=a(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{selectedSection:{}}},computed:{loading:function(){return this.$store.getters["loading/loading"]},pages:function(){return this.$store.getters["pages/pages"]},page:function(){var t=this;return Object.values(this.$store.getters["pages/pages"]).find(function(e){return e.slug===t.$route.path.substring(1)})},pageSections:function(){return this.page?this.page.sections:[]},sponsors:function(){return Object.values(this.$store.getters["sponsors/sponsors"]).filter(function(t){return 1==t.is_active})}},methods:{selectSection:function(t){console.log("selectSection: ",t),this.selectedSection=t},goToExternalLink:function(t){window.open(t,"_blank")}}},c=(n(339),n(2)),u=Object(c.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",[n("b-col",{staticClass:"d-none d-md-block",attrs:{cols:"3"}},[n("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{indicators:!1,interval:2e3,fade:"",id:"carousel-fade"}},t._l(t.sponsors,function(e){return n("b-carousel-slide",{key:e.id},[n("img",{class:[e.link?"link":""],attrs:{slot:"img",width:"100%",src:"/images/"+e.image},on:{click:function(n){return t.goToExternalLink(e.link)}},slot:"img"})])}),1)],1),t._v(" "),t.loading?n("b-col",{attrs:{cols:"12",md:"9"}},[n("b-row",{staticClass:"justify-content-center",staticStyle:{height:"15em","background-color":"rgba(0, 0, 0, 0.5)"},attrs:{"no-gutters":"","align-v":"center"}},[n("b-spinner",{attrs:{type:"grow",label:"Loading..."}})],1)],1):n("b-col",{attrs:{cols:"12",md:"9"}},[n("div",{attrs:{role:"tablist"}},[n("b-card",{staticClass:"m-0 p-0",attrs:{"no-body":""}},[n("b-card-body",[n("b-card-text",{domProps:{innerHTML:t._s(t.page?t.page.content:"")}})],1)],1),t._v(" "),t._l(t.pageSections,function(e,r){return n("b-card",{key:e.id,staticClass:"m-0 p-0",attrs:{"no-body":""}},[n("b-card-header",{staticClass:"p-0",attrs:{"header-tag":"header",role:"tab"}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+(r+1),expression:"`accordion-${index + 1}`"}],attrs:{block:"",href:"#",variant:"primary"}},[t._v(t._s(e.name))])],1),t._v(" "),n("b-collapse",{attrs:{id:"accordion-"+(r+1),visible:"",accordion:"my-accordion",role:"tabpanel"}},[n("b-card-body",[n("b-card-text",{domProps:{innerHTML:t._s(e.content)}})],1)],1)],1)})],2)])],1)],1)},[],!1,null,"11a339be",null);e.default=u.exports},339:function(t,e,n){"use strict";var r=n(69);n.n(r).a},340:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"\n.link[data-v-11a339be] {\r\n    cursor: pointer;\n}",""])},69:function(t,e,n){var r=n(340);"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,s);r.locals&&(t.exports=r.locals)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{88:function(t,e,i){"use strict";i.r(e);var s=i(0),n=i.n(s);function a(t,e,i,s,n,a,r){try{var c=t[a](r),u=c.value}catch(t){return void i(t)}c.done?e(u):Promise.resolve(u).then(s,n)}var r={layout:"frontend",metaInfo:function(){return{title:"Actualités"}},created:function(){var t,e=(t=n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Object.keys(this.$store.getters["activities/activities"]).length<2)){t.next=3;break}return t.next=3,this.$store.dispatch("activities/fetchActivities",{is_published:1});case 3:case"end":return t.stop()}},t,this)}),function(){var e=this,i=arguments;return new Promise(function(s,n){var r=t.apply(e,i);function c(t){a(r,s,n,c,u,"next",t)}function u(t){a(r,s,n,c,u,"throw",t)}c(void 0)})});return function(){return e.apply(this,arguments)}}(),data:function(){return{}},computed:{activities:function(){return this.$store.getters["activities/activities"]},publishedActivities:function(){return Object.values(this.activities).filter(function(t){return 1===t.is_published})}}},c=i(2),u=Object(c.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",[i("h1",{staticClass:"text-center"},[t._v("Actualités & Manifestations")]),t._v(" "),i("b-row",{staticClass:"justify-content-center mt-5"},t._l(t.publishedActivities,function(e){return i("b-col",{key:e.id,staticClass:"px-5",attrs:{cols:"12",sm:"6",md:"4",lg:"4"}},[i("b-card",{staticClass:"mb-2",staticStyle:{border:"none"},attrs:{"img-src":"/images/"+e.image,"img-alt":"Image","img-top":"",tag:"article"}},[i("b-card-text",{staticClass:"text-center"},[i("h5",{staticClass:"my-2"},[t._v(t._s(e.name))]),t._v(" "),i("b-button",{staticClass:"my-2",attrs:{variant:"primary",size:"sm",to:{name:"activity",params:{slug:e.slug}}}},[t._v("En savoir plus →")])],1)],1)],1)}),1)],1)},[],!1,null,"4ee26cc6",null);e.default=u.exports}}]);
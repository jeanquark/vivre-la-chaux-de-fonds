(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{110:function(t,e,i){"use strict";i.r(e);var s=i(0),a=i.n(s);function n(t,e,i,s,a,n,r){try{var c=t[n](r),o=c.value}catch(t){return void i(t)}c.done?e(o):Promise.resolve(o).then(s,a)}var r={layout:"frontend",metaInfo:function(){return{title:"Actualités"}},created:function(){var t,e=(t=a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Object.keys(this.$store.getters["activities/activities"]).length<2)){t.next=3;break}return t.next=3,this.$store.dispatch("activities/fetchActivities");case 3:case"end":return t.stop()}},t,this)}),function(){var e=this,i=arguments;return new Promise(function(s,a){var r=t.apply(e,i);function c(t){n(r,s,a,c,o,"next",t)}function o(t){n(r,s,a,c,o,"throw",t)}c(void 0)})});return function(){return e.apply(this,arguments)}}(),data:function(){return{}},computed:{activities:function(){return this.$store.getters["activities/activities"]}}},c=i(2),o=Object(c.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",[i("h1",{staticClass:"text-center"},[t._v("Actualités & Manifestations")]),t._v(" "),i("b-row",{staticClass:"justify-content-center mt-5"},t._l(t.activities,function(e){return i("b-col",{key:e.id,staticClass:"px-5",attrs:{cols:"12",sm:"6",md:"4",lg:"4"}},[i("b-card",{staticClass:"mb-2",staticStyle:{border:"none"},attrs:{"img-src":"/images/activities/"+e.image,"img-alt":"Image","img-top":"",tag:"article"}},[i("b-card-text",{staticClass:"text-center"},[i("h5",{staticClass:"my-2"},[t._v(t._s(e.name))]),t._v(" "),i("b-button",{staticClass:"my-2",attrs:{variant:"primary",size:"sm",to:{name:"activity",params:{slug:e.slug}}}},[t._v("En savoir plus →")])],1)],1)],1)}),1)],1)},[],!1,null,"5449913d",null);e.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{24:function(t,e,s){"use strict";s.r(e);var n=s(0),i=s.n(n),r=s(1),a=s.n(r);function o(t,e,s,n,i,r,a){try{var o=t[r](a),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(n,i)}var c={layout:"frontend",metaInfo:function(){return{title:"Actualités"}},created:function(){var t,e=(t=i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Object.keys(this.$store.getters["activities/activities"]).length<2)){t.next=3;break}return t.next=3,this.$store.dispatch("activities/fetchActivities",{is_published:1});case 3:case"end":return t.stop()}},t,this)}),function(){var e=this,s=arguments;return new Promise(function(n,i){var r=t.apply(e,s);function a(t){o(r,n,i,a,c,"next",t)}function c(t){o(r,n,i,a,c,"throw",t)}a(void 0)})});return function(){return e.apply(this,arguments)}}(),data:function(){return{today:a()().format("YYYY-MM-DD HH:mm:ss")}},computed:{activities:function(){return this.$store.getters["activities/activities"]},futureActivities:function(){var t=this;return Object.values(this.activities).filter(function(e){return e.start_date>=t.today})},pastActivities:function(){var t=this;return Object.values(this.activities).filter(function(e){return e.end_date<t.today})},publishedActivities:function(){return Object.values(this.activities).filter(function(t){return 1===t.is_published})},sponsors:function(){return this.$store.getters["sponsors/sponsors"]}},methods:{goToLink:function(t){this.$router.push("/actualites/".concat(t))}}},u=(s(266),s(2)),l=Object(u.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("h1",{staticClass:"text-center"},[t._v("Actualités & Manifestations")]),t._v(" "),s("b-row",{staticClass:"justify-content-center mt-5"},[s("b-col",{attrs:{cols:"2"}},[s("b-carousel",{attrs:{id:"carousel-1",interval:2e3,fade:!0,controls:!1,indicators:!1}},t._l(t.sponsors,function(t){return s("b-carousel-slide",{key:t.id,attrs:{"img-src":"/images/"+t.image}})}),1)],1),t._v(" "),s("b-col",{attrs:{cols:"10"}},[s("b-row",{staticClass:"justify-content-center",attrs:{"no-gutters":""}},t._l(t.futureActivities,function(e){return s("b-col",{key:e.id,staticClass:"my-3 px-5",attrs:{cols:"12",sm:"6",md:"4"}},[s("b-card",{staticClass:"mb-2",attrs:{"img-src":"/images/"+e.image,"img-alt":"Image","img-top":"",tag:"article"},on:{click:function(s){return t.goToLink(e.slug)}}},[s("b-card-text",{staticClass:"text-center"},[s("h5",{staticClass:"my-2 abc"},[t._v(t._s(e.name))]),t._v(" "),s("p",[t._v("\n                                "+t._s(t._f("moment")(e.start_date,"Do MMMM YYYY"))+"\n                                "),e.end_date&&e.end_date!==e.start_date?s("span",[t._v(" - "),s("br"),t._v(t._s(t._f("moment")(e.end_date,"Do MMMM YYYY")))]):t._e()])])],1)],1)}),1),t._v(" "),s("b-row",{staticClass:"mt-4 mb-4 justify-content-center",attrs:{"no-gutters":""}},[s("b-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("h3",{staticClass:"title"},[t._v("Historique")])])],1),t._v(" "),s("b-row",{attrs:{"no-gutters":""}},t._l(t.pastActivities,function(e){return s("b-col",{key:e.id,staticClass:"my-3 px-5",attrs:{cols:"12",sm:"6",md:"4"}},[s("b-card",{staticClass:"mb-2",attrs:{"img-src":"/images/"+e.image,"img-alt":"Image","img-top":"",tag:"article"},on:{click:function(s){return t.goToLink(e.slug)}}},[s("b-card-text",{staticClass:"text-center"},[s("h5",{staticClass:"my-2"},[t._v(t._s(e.name))]),t._v(" "),s("p",[t._v("\n                                "+t._s(t._f("moment")(e.start_date,"Do MMMM YYYY"))+"\n                                "),e.end_date&&e.end_date!==e.start_date?s("span",[t._v(" - "),s("br"),t._v(t._s(t._f("moment")(e.end_date,"Do MMMM YYYY")))]):t._e()])])],1)],1)}),1)],1)],1)],1)},[],!1,null,"3cb911a9",null);e.default=l.exports},266:function(t,e,s){"use strict";var n=s(37);s.n(n).a},267:function(t,e,s){(t.exports=s(6)(!1)).push([t.i,".title[data-v-3cb911a9] {\n  color: #2C5CAD;\n  padding: 0.5rem 1rem;\n  border-radius: 0.8rem;\n  display: inline-block;\n  border: 0px solid red;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.card[data-v-3cb911a9] {\n  border: none;\n}\n.card[data-v-3cb911a9]:hover {\n  cursor: pointer;\n  border: 3px solid #2C5CAD;\n}",""])},37:function(t,e,s){var n=s(267);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(7)(n,i);n.locals&&(t.exports=n.locals)}}]);
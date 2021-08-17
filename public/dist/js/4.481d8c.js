(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{18:function(t,e,n){"use strict";n.r(e);var s=n(0),r=n.n(s),i=n(1),a=n.n(i);function o(t,e,n,s,r,i,a){try{var o=t[i](a),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(s,r)}var c={layout:"frontend",metaInfo:function(){return{title:"Actualités"}},created:function(){var t,e=(t=r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Object.keys(this.$store.getters["sponsors/sponsors"]).length<2)){t.next=3;break}return t.next=3,this.$store.dispatch("sponsors/fetchSponsors",{is_active:!0,is_partner:!0});case 3:if(!(Object.keys(this.$store.getters["activities/activities"]).length<2)){t.next=6;break}return t.next=6,this.$store.dispatch("activities/fetchActivities",{is_published:1});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(s,r){var i=t.apply(e,n);function a(t){o(i,s,r,a,c,"next",t)}function c(t){o(i,s,r,a,c,"throw",t)}a(void 0)})});return function(){return e.apply(this,arguments)}}(),data:function(){return{today:a()().format("YYYY-MM-DD HH:mm:ss")}},computed:{activities:function(){return this.$store.getters["activities/activities"]},futureActivities:function(){var t=this;return Object.values(this.activities).filter(function(e){return e.start_date>=t.today})},pastActivities:function(){var t=this;return Object.values(this.activities).filter(function(e){return e.end_date<t.today}).sort(function(t,e){return a()(e.start_date)-a()(t.start_date)})},publishedActivities:function(){return Object.values(this.activities).filter(function(t){return 1===t.is_published})},sponsors:function(){return this.$store.getters["sponsors/sponsors"]}},methods:{onMouseover:function(){console.log("onMouseover: ",Math.random())},goToInternalLink:function(t){this.$router.push("/actualites/".concat(t))},goToExternalLink:function(t){t&&window.open(t,"_blank")}}},u=(n(277),n(2)),l=Object(u.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("h1",{staticClass:"text-center"},[t._v("Actualités & Manifestations")]),t._v(" "),n("b-row",{staticClass:"justify-content-center mt-5"},[n("b-col",{attrs:{cols:"3"}},[n("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{indicators:!1,interval:2e3,fade:"",id:"carousel-fade"}},t._l(t.sponsors,function(e){return n("b-carousel-slide",{key:e.id},[n("img",{class:[e.link?"link":""],attrs:{slot:"img",width:"100%",src:"/images/"+e.image},on:{click:function(n){return t.goToExternalLink(e.link)}},slot:"img"})])}),1)],1),t._v(" "),n("b-col",{attrs:{cols:"9"}},[n("b-row",{staticClass:"justify-content-center",attrs:{"no-gutters":""}},[t._v("\n                today: "+t._s(t.today)),n("br"),n("br"),t._v("\n                futureActivities: "+t._s(t.futureActivities)+"\n                "),t._l(t.futureActivities,function(e){return n("b-col",{key:e.id,staticClass:"my-3 px-5",attrs:{cols:"12",sm:"6",md:"4"}},[n("b-card",{staticClass:"mb-2",attrs:{"img-src":"/images/"+e.image,"img-alt":"Image","img-top":"",tag:"article"},on:{click:function(n){return t.goToInternalLink(e.slug)}}},[n("b-card-text",{staticClass:"text-center"},[n("h5",{staticClass:"my-2 abc"},[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v("\n                                "+t._s(t._f("moment")(e.start_date,"Do MMMM YYYY"))+"\n                                "),e.end_date&&e.end_date!==e.start_date?n("span",[t._v(" - "),n("br"),t._v(t._s(t._f("moment")(e.end_date,"Do MMMM YYYY")))]):t._e()])])],1)],1)})],2)],1)],1),t._v(" "),n("b-row",{staticClass:"my-4 justify-content-center",attrs:{"no-gutters":""}},[n("b-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h3",{staticClass:"title"},[t._v("Historique")])])],1),t._v(" "),n("b-row",{attrs:{"no-gutters":""}},t._l(t.pastActivities,function(e){return n("b-col",{key:e.id,staticClass:"my-3 px-5",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[n("b-card",{staticClass:"mb-2",class:[Math.random()<.5?"primary-color":"secondary-color"],attrs:{"img-src":"/images/"+e.image,"img-alt":"Image","img-top":"",tag:"article"},on:{click:function(n){return t.goToInternalLink(e.slug)}}},[n("b-card-text",{staticClass:"text-center"},[n("h5",{staticClass:"my-2"},[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v("\n                        "+t._s(t._f("moment")(e.start_date,"Do MMMM YYYY"))+"\n                        "),e.end_date&&e.end_date!==e.start_date?n("span",[t._v(" - "),n("br"),t._v(t._s(t._f("moment")(e.end_date,"Do MMMM YYYY")))]):t._e()])])],1)],1)}),1)],1)},[],!1,null,"05572398",null);e.default=l.exports},277:function(t,e,n){"use strict";var s=n(40);n.n(s).a},278:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".title[data-v-05572398] {\n  color: #2C5CAD;\n  padding: 0.5rem 1rem;\n  border-radius: 0.8rem;\n  display: inline-block;\n  border: 0px solid red;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n.card[data-v-05572398] {\n  border: none;\n}\n.card[data-v-05572398]:hover {\n  cursor: pointer;\n  color: #fff;\n}\n.primary-color[data-v-05572398]:hover {\n  background: #2C5CAD;\n}\n.secondary-color[data-v-05572398]:hover {\n  background: #E1B124;\n}\n.link[data-v-05572398] {\n  cursor: pointer;\n}",""])},40:function(t,e,n){var s=n(278);"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(7)(s,r);s.locals&&(t.exports=s.locals)}}]);
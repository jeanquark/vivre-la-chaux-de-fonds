(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{25:function(t,i,n){"use strict";n.r(i);var a=n(0),e=n.n(a);function r(t,i,n,a,e,r,s){try{var o=t[r](s),c=o.value}catch(t){return void n(t)}o.done?i(c):Promise.resolve(c).then(a,e)}var s={layout:"frontend",metaInfo:function(){return{title:"Actualité"}},created:function(){var t,i=(t=e.a.mark(function t(){return e.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.activity&&this.activity.images){t.next=3;break}return t.next=3,this.$store.dispatch("activities/fetchActivityBySlug",{activitySlug:this.$route.params.slug});case 3:case"end":return t.stop()}},t,this)}),function(){var i=this,n=arguments;return new Promise(function(a,e){var s=t.apply(i,n);function o(t){r(s,a,e,o,c,"next",t)}function c(t){r(s,a,e,o,c,"throw",t)}o(void 0)})});return function(){return i.apply(this,arguments)}}(),mounted:function(){console.log(this.$route.params.slug)},data:function(){return{slug:this.$route.params.slug}},computed:{activity:function(){var t=this;return Object.values(this.$store.getters["activities/activities"]).find(function(i){return i.slug===t.$route.params.slug})}},methods:{goToExternalLink:function(t){t&&window.open(t,"_blank")}}},o=(n(268),n(2)),c=Object(o.a)(s,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("b-container",[n("b-row",{staticClass:"justify-content-center"},[t.activity?n("b-col",{attrs:{cols:"12",md:"8"}},[n("div",{staticClass:"text-center mb-3"},[n("router-link",{attrs:{to:"/actualites"}},[t._v("← Retour vers les manifestations")])],1),t._v(" "),n("b-card",{staticClass:"mb-2",class:[t.activity.link?"link":""],staticStyle:{border:"none"},attrs:{"img-src":"/images/"+t.activity.image,"img-alt":""+t.activity.name,"img-top":"",tag:"article"},on:{click:function(i){return t.goToExternalLink(t.activity.link)}}},[n("b-card-text",{},[n("h5",{staticClass:"text-center"},[t._v(t._s(t.activity.name))]),t._v(" "),t.activity.link?n("h6",{staticClass:"text-center"},[n("a",{attrs:{href:t.activity.link,target:"_blank"}},[t._v("Plus d'informations →")])]):t._e(),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.activity.content)}}),n("br"),t._v(" "),n("b-row",{staticClass:"mt-4"},t._l(t.activity.images,function(t,i){return n("b-col",{key:i,attrs:{cols:"12",sm:"4",md:"3"}},[n("router-link",{attrs:{to:"/images/"+t,target:"_blank"}},[n("b-img",{attrs:{thumbnail:"",fluid:"",src:"/images/"+t,alt:"Image 1"}})],1)],1)}),1)],1)],1)],1):t._e()],1)],1)},[],!1,null,"7a8e05e5",null);i.default=c.exports},268:function(t,i,n){"use strict";var a=n(37);n.n(a).a},269:function(t,i,n){(t.exports=n(6)(!1)).push([t.i,"\n.link[data-v-7a8e05e5] {\n    cursor: pointer;\n}\n",""])},37:function(t,i,n){var a=n(269);"string"==typeof a&&(a=[[t.i,a,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};n(7)(a,e);a.locals&&(t.exports=a.locals)}}]);
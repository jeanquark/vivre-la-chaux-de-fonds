(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{23:function(t,e,s){"use strict";s.r(e);var a=s(0),i=s.n(a);function n(t,e,s,a,i,n,r){try{var o=t[n](r),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(a,i)}var r={layout:"frontend",created:function(){var t,e=(t=i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.$store.getters["activities/activities"].length<2)){t.next=3;break}return t.next=3,this.$store.dispatch("activities/fetchActivities");case 3:case"end":return t.stop()}},t,this)}),function(){var e=this,s=arguments;return new Promise(function(a,i){var r=t.apply(e,s);function o(t){n(r,a,i,o,c,"next",t)}function c(t){n(r,a,i,o,c,"throw",t)}o(void 0)})});return function(){return e.apply(this,arguments)}}(),data:function(){return{}},computed:{activities:function(){return this.$store.getters["activities/activities"]}}},o=(s(264),s(2)),c=Object(o.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{cols:"12",md:"8"}},[s("b-card",{staticStyle:{"border-radius":"15px","background-color":"rgba(0, 0, 0, .7)"}},[s("b-card-text",{staticClass:"text-center"},[s("h3",{staticClass:"my-2",staticStyle:{color:"#fff"}},[s("span",{staticClass:"secondary-color"},[t._v("L’Association")]),t._v(" Vivre La Chaux-de-Fonds "),s("span",{staticClass:"secondary-color"},[t._v("vous souhaite une cordiale bienvenue")])]),t._v(" "),s("h5",{staticStyle:{color:"#fff"}},[t._v("\n                        Favoriser le développement et l’animation de la ville de La Chaux-de-Fonds, créer des ponts, tisser des liens entre les différents milieux actifs en ville et la population,\n                        tels sont les buts principaux de l’Association Vivre La Chaux-de-Fonds.\n                    ")])])],1)],1)],1),t._v(" "),s("b-row",{staticClass:"justify-content-center"},t._l(t.activities,function(e){return s("b-col",{key:e.id,staticClass:"p-5",attrs:{cols:"12",md:"6",lg:"4"}},[s("b-card",{attrs:{"img-src":"/images/activities/"+e.image,"img-alt":"Card image","img-top":""}},[s("b-card-text",{staticClass:"text-center"},[s("h5",{staticClass:"my-2"},[t._v(t._s(e.name))]),t._v(" "),s("b-button",{staticClass:"my-2",attrs:{variant:"primary",to:{name:"activity",params:{slug:e.slug}}}},[t._v("En savoir plus →")])],1)],1)],1)}),1)],1)},[],!1,null,"022c553e",null);e.default=c.exports},264:function(t,e,s){"use strict";var a=s(40);s.n(a).a},265:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".primary-color[data-v-022c553e] {\n  color: #2C5CAD;\n}\n.secondary-color[data-v-022c553e] {\n  color: #E1B124;\n}",""])},40:function(t,e,s){var a=s(265);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(9)(a,i);a.locals&&(t.exports=a.locals)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{91:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(3),c=e.n(o);e(1);function s(t,n,e,r,a,o,c){try{var s=t[o](c),i=s.value}catch(t){return void e(t)}s.done?n(i):Promise.resolve(i).then(r,a)}function i(t){return function(){var n=this,e=arguments;return new Promise(function(r,a){var o=t.apply(n,e);function c(t){s(o,r,a,c,i,"next",t)}function i(t){s(o,r,a,c,i,"throw",t)}c(void 0)})}}var u={components:{},created:function(){var t=i(a.a.mark(function t(){var n,e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/api/google-analytics-data");case 3:n=t.sent,e=n.data,console.log("data: ",e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error: ",t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),mounted:function(){var t=i(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{}},computed:{},methods:{}},l=e(2),d=Object(l.a)(u,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-container",[e("h2",{staticClass:"text-center"},[t._v("Tableau de bord VLCF")]),t._v(" "),e("p",[t._v("Last deployment: July 16 2021.")]),t._v(" "),e("br"),t._v(" "),e("div",{staticStyle:{display:"none"}},[e("h4",{staticClass:"text-center"},[t._v("Statistiques de fréquentation du site:")]),t._v(" "),e("h6",{staticClass:"text-center"},[t._v("(Les données proviennent de Google Analytics)")])])])},[],!1,null,"4da568da",null);n.default=d.exports}}]);
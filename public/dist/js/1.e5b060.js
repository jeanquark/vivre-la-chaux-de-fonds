(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{20:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o);t(3);function i(e,n,t,o,r,i,a){try{var s=e[i](a),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(o,r)}function a(e){return function(){var n=this,t=arguments;return new Promise(function(o,r){var a=e.apply(n,t);function s(e){i(a,o,r,s,c,"next",e)}function c(e){i(a,o,r,s,c,"throw",e)}s(void 0)})}}var s={layout:"backend",middleware:["admin"],created:function(){var e=a(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Entered created lifecycle hook");case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),mounted:function(){var e=a(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Entered mounted lifecycle hook");case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),data:function(){return{collapsed:!1,menu:[{header:!0,title:"VLCF Admin",hiddenOnCollapse:!0},{href:"/admin/users",title:"Users",icon:{element:"font-awesome-icon",attributes:{icon:"users",size:"xs"}}},{href:"/admin/activities",title:"Activities",icon:{element:"font-awesome-icon",attributes:{icon:"calendar-day",size:"6x"}}},{href:"/admin/sponsors",title:"Sponsors",icon:{element:"font-awesome-icon",attributes:{icon:"briefcase"}}}]}},computed:{loadedUser:function(){return this.$store.getters["auth/user"]}},methods:{onToggleCollapse:function(e){console.log("onToggleCollapse"),console.log(e),this.collapsed=e}}},c=(t(269),t(2)),l=Object(c.a)(s,function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("router-view")],1)},[],!1,null,"05325b00",null);n.default=l.exports},269:function(e,n,t){"use strict";var o=t(41);t.n(o).a},270:function(e,n,t){(e.exports=t(7)(!1)).push([e.i,"\n.collapsed[data-v-05325b00] {\n\tmargin-left: 50px;\n}\n.extended[data-v-05325b00] {\n\tmargin-left: 350px;\n}\n/*>>>.v-sidebar-menu .vsm--link_level-1 .vsm--icon {\n\theight: 16px;\n\tmargin-top: 6px;\n}*/\n\n\n",""])},41:function(e,n,t){var o=t(270);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(8)(o,r);o.locals&&(e.exports=o.locals)}}]);
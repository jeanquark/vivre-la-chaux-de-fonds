(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{252:function(t,e,n){"use strict";var a=n(32);n.n(a).a},253:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,'\n.modal-mask[data-v-48f33c6e] {\n      position: fixed;\n      z-index: 9998;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, .5);\n      display: table;\n      transition: opacity .3s ease;\n}\n.modal-wrapper[data-v-48f33c6e] {\n      display: table-cell;\n      vertical-align: middle;\n}\n.modal-container[data-v-48f33c6e] {\n      width: 500px;\n      margin: 0px auto;\n      padding: 20px 30px;\n      background-color: #fff;\n      border-radius: 2px;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n      transition: all .3s ease;\n      font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3[data-v-48f33c6e] {\n      margin-top: 0;\n      color: #42b983;\n}\n.modal-body[data-v-48f33c6e] {\n      margin: 20px 0;\n}\n.modal-default-button[data-v-48f33c6e] {\n      float: right;\n}\n\n  /*\n  * The following styles are auto-applied to elements with\n  * transition="modal" when their visibility is toggled\n  * by Vue.js.\n  *\n  * You can easily play with the modal transition by editing\n  * these styles.\n  */\n.modal-enter[data-v-48f33c6e] {\n      opacity: 0;\n}\n.modal-leave-active[data-v-48f33c6e] {\n      opacity: 0;\n}\n.modal-enter .modal-container[data-v-48f33c6e],\n  .modal-leave-active .modal-container[data-v-48f33c6e] {\n      -webkit-transform: scale(1.1);\n      transform: scale(1.1);\n}\n.seat[data-v-48f33c6e] {\n}\n[data-v-48f33c6e] .seat:hover {\n      cursor: pointer;\n      fill: yellow;\n}\n',""])},261:function(t,e,n){"use strict";var a=n(38);n.n(a).a},262:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,"\n.table[data-v-724efb2f]:hover {\n        cursor: pointer;\n        fill: yellow;\n}\n",""])},263:function(t,e,n){"use strict";var a=n(39);n.n(a).a},264:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,"\n.top-right[data-v-d3525ca8] {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 18px;\n}\n.title[data-v-d3525ca8] {\r\n  font-size: 85px;\n}\n[data-v-d3525ca8] .table {\r\n  /*fill: yellow;*/\n}\n[data-v-d3525ca8] .table:hover {\r\n  cursor: pointer;\r\n  fill: green;\n}\n[data-v-d3525ca8] circle#325r5qoub {\r\n  fill: pink;\n}\r\n",""])},32:function(t,e,n){var a=n(253);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(8)(a,o);a.locals&&(t.exports=a.locals)},38:function(t,e,n){var a=n(262);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(8)(a,o);a.locals&&(t.exports=a.locals)},39:function(t,e,n){var a=n(264);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(8)(a,o);a.locals&&(t.exports=a.locals)},50:function(t,e,n){"use strict";var a,o=n(0),r=n.n(o),s=n(3),i=n.n(s);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e,n,a,o,r,s){try{var i=t[r](s),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(a,o)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var r=t.apply(e,n);function s(t){c(r,a,o,s,i,"next",t)}function i(t){c(r,a,o,s,i,"throw",t)}s(void 0)})}}var u=(l(a={props:["selectedTable"],created:{},data:function(){return{selectedSeat:""}}},"created",function(){var t=d(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()),l(a,"mounted",function(){console.log("SVG.supported: ",SVG.supported),SVG.supported&&this.selectedTable.seats.forEach(function(t){console.log("seat: ",t);var e=SVG.get(t.svg_seat_id);console.log("element: ",e),e&&t.is_reserved&&(e.fill("#FF0000"),e.removeClass("seat"))})}),l(a,"computed",{loadedUser:function(){return this.$store.getters["auth/user"]}}),l(a,"methods",{selectSeat:function(){var t=d(r.a.mark(function t(){var e,n,a,o,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("selectSeat"),e=event.target.id,this.selectedSeat=e,n=SVG.get(e),a=!1,n&&(a=n.hasClass("seat")),!a){t.next=15;break}return t.next=9,i.a.post("api/reserve-a-seat",{seatId:e});case 9:o=t.sent,s=o.data,console.log("data: ",s),n.fill("#FF0000"),n.removeClass("seat"),this.$store.commit("planSeats/addUserSeat",s.seat);case 15:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),a),v=(n(252),n(2)),f=Object(v.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container",staticStyle:{"overflow-y":"auto","max-height":"400px"}},[n("div",{staticClass:"modal-body",staticStyle:{border:"1px dashed red"}},[n("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("closeModal")}}},[t._v("Close")]),t._v("\n                        selectedTable: "+t._s(t.selectedTable)),n("br"),n("br"),t._v(" "),t._v("\n                        selectedSeat: "+t._s(t.selectedSeat)),n("br"),n("br"),t._v(" "),n("div",{attrs:{id:"drawing"},on:{click:function(e){return t.selectSeat(e)}}},[n("svg-vue",{attrs:{icon:"tables/table_"+t.selectedTable.table.svg_id}})],1)]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("closeModal")}}},[t._v("Close")])])])])])])},[],!1,null,"48f33c6e",null);e.a=f.exports},67:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(3),s=n.n(r),i=n(25),l={data:function(){return{}},methods:{showTable:function(t){console.log("showTable: ",t),this.$emit("showModal")}}},c=(n(261),n(2)),d=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticStyle:{"overflow-x":"auto"},attrs:{width:"100%",viewBox:"0 0 180 110",preserveAspectRatio:"none"}},[n("g",{attrs:{id:"layer1"}},[n("circle",{staticClass:"table",attrs:{id:"path4518",cx:"55.751484",cy:"35.156994",r:"6.614583",fille:"#000000"},on:{click:function(e){return t.showTable("round")}}}),t._v(" "),n("ellipse",{staticClass:"table",attrs:{id:"path4520",cx:"56.601933",cy:"71.820686",rx:"7.6540179",ry:"15.308036",fill:"#000000"},on:{click:function(e){return t.showTable("ellipse")}}}),t._v(" "),n("circle",{staticStyle:{fill:"#000000","stroke-width":"0.26458332"},attrs:{id:"path4518-6",cx:"80.130951",cy:"34.968006",r:"6.6145835"}}),t._v(" "),n("circle",{staticStyle:{fill:"#000000","stroke-width":"0.26458332"},attrs:{id:"path4518-5",cx:"104.49895",cy:"35.078709",r:"6.6145835"}}),t._v(" "),n("ellipse",{staticStyle:{fill:"#000000","stroke-width":"0.26458332"},attrs:{id:"path4520-8",cx:"81.186607",cy:"71.709976",rx:"7.6540179",ry:"15.308036"}}),t._v(" "),n("ellipse",{staticStyle:{fill:"#000000","stroke-width":"0.26458332"},attrs:{id:"path4520-3",cx:"105.65303",cy:"71.670837",rx:"7.6540179",ry:"15.308036"}}),t._v(" "),n("circle",{staticStyle:{fill:"#000000","stroke-width":"0.26458332"},attrs:{id:"path4518-5-8",cx:"127.98607",cy:"35.145535",r:"6.6145835"}}),t._v(" "),n("ellipse",{staticStyle:{fill:"#000000","stroke-width":"0.26458332"},attrs:{id:"path4520-3-4",cx:"128.93297",cy:"71.776794",rx:"7.6540179",ry:"15.308036"}})])])},[],!1,null,"724efb2f",null).exports,u=n(26),v=n.n(u);function f(t,e,n,a,o,r,s){try{var i=t[r](s),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(a,o)}function p(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var r=t.apply(e,n);function s(t){f(r,a,o,s,i,"next",t)}function i(t){f(r,a,o,s,i,"throw",t)}s(void 0)})}}var h={components:{svgTablePlan:d,Modal:n(50).a},metaInfo:function(){return{title:this.$t("home")}},created:function(){var t=p(o.a.mark(function t(){var e,n,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("api/tables");case 2:e=t.sent,n=e.data,console.log("data.tables: ",n.tables),console.log("data.seats: ",n.seats),v.a.supported?(console.log("SVG supported!"),a=v.a.get("0y5a90081"),console.log("element: ",a),a&&a.fill("#00FF00")):alert("SVG not supported");case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){var t=p(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{title:window.config.appName,selectedTable:"",showModal:!1}},computed:Object(i.b)({authenticated:"auth/check"}),methods:{closeModal:function(){console.log("closeModal"),this.modal=!1},clickOnTablePlan:function(t){console.log("clickOnTablePlan: ",t);var e=t.target.id;console.log("elementId: ",e),e&&(this.selectedTable=e,this.showModal=!0)}}},m=(n(263),Object(c.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-right links"},[t.authenticated?[n("router-link",{attrs:{to:{name:"home"}}},[t._v("\n        "+t._s(t.$t("home"))+"\n      ")])]:[n("router-link",{attrs:{to:{name:"login"}}},[t._v("\n        "+t._s(t.$t("login"))+"\n      ")]),t._v(" "),n("router-link",{attrs:{to:{name:"register"}}},[t._v("\n        "+t._s(t.$t("register"))+"\n      ")])]],2),t._v(" "),n("div",{staticClass:"text-center"},[n("div",{staticClass:"title mb-4"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("h3",[t._v("Welcome component page")]),t._v(" "),n("div",{staticClass:"links"},[n("a",{attrs:{href:"https://github.com/cretueusebiu/laravel-vue-spa"}},[t._v("github.com/cretueusebiu/laravel-vue-spa")]),t._v(" "),n("router-link",{attrs:{to:"/admin"}},[t._v("Admin")])],1),t._v(" "),n("h3",[t._v("Réservez votre place en ligne")]),t._v(" "),n("div",{staticStyle:{border:"1px dashed green"},attrs:{id:"canvas"},on:{click:function(e){return t.clickOnTablePlan(e)}}},[n("svg-vue",{staticStyle:{border:"1px solid orange"},attrs:{icon:"tables_plan2"}})],1),t._v(" "),t.showModal?n("modal",{attrs:{tableId:t.selectedTable},on:{closeModal:function(e){t.showModal=!1}}}):t._e()],1)])},[],!1,null,"d3525ca8",null));e.default=m.exports}}]);
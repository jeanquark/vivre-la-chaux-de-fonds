(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{87:function(t,e,s){"use strict";s.r(e);var r=s(0),n=s.n(r);function a(t,e,s,r,n,a,c){try{var i=t[a](c),o=i.value}catch(t){return void s(t)}i.done?e(o):Promise.resolve(o).then(r,n)}var c={layout:"backend",created:function(){var t,e=(t=n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.$store.getters["users/users"].length<1)){t.next=3;break}return t.next=3,this.$store.dispatch("users/fetchUsers");case 3:case"end":return t.stop()}},t,this)}),function(){var e=this,s=arguments;return new Promise(function(r,n){var c=t.apply(e,s);function i(t){a(c,r,n,i,o,"next",t)}function o(t){a(c,r,n,i,o,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}(),data:function(){return{}},computed:{users:function(){return this.$store.getters["users/users"]}},methods:{deleteUser:function(t){console.log("deleteUser: ",t)}}},i=s(2),o=Object(i.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("h1",{staticClass:"text-center"},[t._v("Users")]),t._v(" "),s("br"),s("br"),t._v(" "),s("table",{staticClass:"table"},[t._m(1),t._v(" "),s("tbody",t._l(t.users,function(e){return s("tr",{key:e.id},[s("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[t._v(t._s(e.created_at))]),t._v(" "),s("td",[t._v(t._s(e.updated_at))]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-warning",attrs:{to:"/admin/users/"+e.id}},[s("font-awesome-icon",{attrs:{icon:"eye"}})],1),t._v(" "),s("router-link",{staticClass:"btn btn-success",attrs:{to:"/admin/users/"+e.id+"/edit"}},[s("font-awesome-icon",{attrs:{icon:"edit"}})],1),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(s){return t.deleteUser(e.id)}}},[s("font-awesome-icon",{attrs:{icon:"trash"}})],1)],1)])}),0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[this._v("Users")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("ID")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Email")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Created at")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Updated at")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Actions")])])])}],!1,null,"111135de",null);e.default=o.exports}}]);
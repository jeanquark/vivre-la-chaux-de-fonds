(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{29:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return o});var i=function(){return"undefined"!=typeof window?window:t},o=function(){var t=i();return t&&t.tinymce?t.tinymce:null}}).call(this,n(12))},49:function(t,e,n){"use strict";var i=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],o=function(t){return-1!==i.indexOf(t)},s=function(t,e,n){var i=e.$props.value?e.$props.value:"",s=e.$props.initialValue?e.$props.initialValue:"";n.setContent(i||s),e.$listeners.input&&function(t,e){var n,i=t.$props.modelEvents?t.$props.modelEvents:null,o=Array.isArray(i)?i.join(" "):i;t.$watch("value",function(t,i){e&&"string"==typeof t&&t!==n&&t!==i&&(e.setContent(t),n=t)}),e.on(o||"change keyup undo redo",function(){n=e.getContent(),t.$emit("input",n)})}(e,n),function(t,e,n){Object.keys(e).filter(o).forEach(function(i){var o=e[i];"function"==typeof o&&("onInit"===i?o(t,n):n.on(i.substring(2),function(t){return o(t,n)}))})}(t,e.$listeners,n)},r=0,a=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++r+String(e)},c=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},l=n(29),u={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean},d=function(){return(d=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},p={listeners:[],scriptId:a("tiny-script"),scriptLoaded:!1},v=function(t){return function(){var e,n,i,o=d({},t.$props.init,{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,c(e).concat(c(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",function(n){return s(n,t,e)}),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(i=t.element)&&"textarea"===i.tagName.toLowerCase()&&(t.element.style.visibility=""),Object(l.a)().init(o)}},m={props:u,created:function(){this.elementId=this.$props.id||a("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(l.a)())v(this)();else if(this.element&&this.element.ownerDocument){var t=this.element.ownerDocument,e=this.$props.cloudChannel?this.$props.cloudChannel:"5",n=this.$props.apiKey?this.$props.apiKey:"no-api-key";!function(t,e,n,i){t.scriptLoaded?i():(t.listeners.push(i),e.getElementById(t.scriptId)||function(t,e,n,i){var o=e.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=t,o.addEventListener("load",i),o.src=n,e.head&&e.head.appendChild(o)}(t.scriptId,e,n,function(){t.listeners.forEach(function(t){return t()}),t.scriptLoaded=!0}))}(p,t,"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+e+"/tinymce.min.js",v(this))}},beforeDestroy:function(){null!==Object(l.a)()&&Object(l.a)().remove(this.editor)},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}};e.a=m},95:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),s=(n(3),n(49)),r=n(14),a=n.n(r),c=(n(33),n(15)),l=n.n(c),u=n(16),d=n.n(u);n(34);function p(t,e,n,i,o,s,r){try{var a=t[s](r),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(i,o)}function v(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var s=t.apply(e,n);function r(t){p(s,i,o,r,a,"next",t)}function a(t){p(s,i,o,r,a,"throw",t)}r(void 0)})}}var m={layout:"backend",components:{"tinymce-editor":s.a,VueCtkDateTimePicker:a.a,"p-check":l.a,Multiselect:d.a},created:function(){var t=v(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.getters["sponsors/sponsors"].length<1&&this.$store.dispatch("sponsors/fetchSponsors");case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){var t=v(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=parseInt(this.$route.params.id),console.log("activityId: ",e),t.next=4,this.$store.dispatch("activities/fetchActivity",{activityId:e});case 4:this.$noty.success("Hello world!");case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{tinymce_key:Object({MIX_PUSHER_APP_CLUSTER:"mt1",MIX_PUSHER_APP_KEY:"",NODE_ENV:"production"}).MIX_TINYMCE_KEY,addEndDate:!1,new_image:{}}},computed:{sponsors:function(){return this.$store.getters["sponsors/sponsors"]},activities:function(){return this.$store.getters["activities/activities"]},activity:function(){return this.$store.getters["activities/activity"]}},methods:{uploadImage:function(t){console.log("uploadImage",t),console.log(t.target),console.log(t.target.files[0]),this.new_image=t.target.files[0]},updateActivity:function(){var t=v(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("activities/updateActivity",{activity:this.activity,image:this.new_image});case 3:this.$noty.success("Activité mise à jour avec succès!"),this.$router.push("/admin/activities"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error: ",t.t0),this.$noty.error("Une erreur est survenue et l'activité n'a pas pu être mise à jour.");case 11:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}()}},f=n(2),y=Object(f.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-breadcrumb",[n("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/users"}},[n("font-awesome-icon",{attrs:{icon:"calendar-day"}}),t._v(" "),n("span",[t._v("Activités")])],1),t._v(" "),n("b-breadcrumb-item",{attrs:{active:""}},[t._v("Editer")])],1),t._v(" "),n("h2",{staticClass:"text-center"},[t._v("Editer une activité")]),t._v(" "),t.activity&&t.activity.id?n("form",{on:{submit:function(e){return e.preventDefault(),t.updateActivity(e)}}},[n("div",{staticClass:"row my-2"},[n("div",{staticClass:"col-12 col-md-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"title"}},[t._v("Titre")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.activity.title,expression:"activity.title"}],staticClass:"form-control",attrs:{type:"text",id:"title","aria-describedby":"emailHelp",placeholder:""},domProps:{value:t.activity.title},on:{input:function(e){e.target.composing||t.$set(t.activity,"title",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-12 col-md-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"subtitle"}},[t._v("Sous-titre")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.activity.subtitle,expression:"activity.subtitle"}],staticClass:"form-control",attrs:{type:"textarea",id:"subtitle",placeholder:""},domProps:{value:t.activity.subtitle},on:{input:function(e){e.target.composing||t.$set(t.activity,"subtitle",e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"row my-2"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"image"}},[t._v("Contenu:")]),t._v(" "),n("tinymce-editor",{attrs:{"api-key":t.tinymce_key,init:{plugins:"wordcount"}},model:{value:t.activity.content,callback:function(e){t.$set(t.activity,"content",e)},expression:"activity.content"}})],1)])]),t._v(" "),n("div",{staticClass:"row my-2"},[n("div",{staticClass:"col-12 col-md-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"image"}},[t._v("Image actuelle:")]),n("br"),t._v(" "),t.activity.image?n("img",{attrs:{src:"/images/"+t.activity.image,width:"200"}}):n("span",[n("i",[t._v("Pas d'image")])])])]),t._v(" "),n("div",{staticClass:"col-12 col-md-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"image"}},[t._v("Nouvelle image:")]),n("br"),t._v(" "),n("input",{attrs:{type:"file",id:"image",name:"image",accept:"image/png, image/jpeg"},on:{change:function(e){return t.uploadImage(e)}}})])])]),t._v(" "),n("div",{staticClass:"row align-items-center my-2"},[n("div",{staticClass:"col-12 col-md-6"},[n("VueCtkDateTimePicker",{attrs:{label:"Choisir date et heure de début",format:"YYYY-MM-DD HH:mm:ss",color:"#9ACD32","button-color":"#9ACD32","button-now-translation":"Maintenant"},model:{value:t.activity.start_date,callback:function(e){t.$set(t.activity,"start_date",e)},expression:"activity.start_date"}})],1),t._v(" "),n("div",{staticClass:"col-12 col-md-6"},[n("p-check",{staticClass:"p-curve p-bigger p-jelly",attrs:{name:"check",color:"primary"},model:{value:t.addEndDate,callback:function(e){t.addEndDate=e},expression:"addEndDate"}},[t._v("Ajouter une date de fin")])],1),t._v(" "),n("div",{staticClass:"col-12 col-md-6 my-3"},[t.addEndDate?n("VueCtkDateTimePicker",{attrs:{label:"Choisir date et heure de fin",format:"YYYY-MM-DD HH:mm:ss",color:"#9ACD32","button-color":"#9ACD32","button-now-translation":"Maintenant"},model:{value:t.activity.end_date,callback:function(e){t.$set(t.activity,"end_date",e)},expression:"activity.end_date"}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"row align-items-center my-2"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"image"}},[t._v("Sponsors pour cette activité:")]),n("br"),t._v(" "),n("multiselect",{attrs:{label:"name","track-by":"id",options:t.sponsors,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,"preselect-first":!0,placeholder:"Sélectionner un sponsor",selectLabel:"Appuyer sur Entrée pour sélectionner",selectedLabel:"Sélectionné",deselectLabel:"Appuyer sur entrée pour désélectionner"},model:{value:t.activity.sponsors,callback:function(e){t.$set(t.activity,"sponsors",e)},expression:"activity.sponsors"}})],1)])]),t._v(" "),n("div",{staticClass:"row my-4"},[n("div",{staticClass:"col-12 text-center"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Editer cette activité")])])])]):t._e()],1)},[],!1,null,"6fa3abc2",null);e.default=y.exports}}]);
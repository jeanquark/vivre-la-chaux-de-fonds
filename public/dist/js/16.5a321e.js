(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{12:function(t,e,o){"use strict";var n=o(34),i=o(35),a=o(36),r=o(37),s={components:{ImagesModal:n.a,DocumentsModal:i.a,CreateLinkModal:a.a,ImageProperties:r.a},props:["formContent"],created:function(){},mounted:function(){this.content=this.formContent},data:function(){return{content:"",showHTML:!1,checked:!1,showImagesModal:!1,showDocumentsModal:!1,showCreateLinkModal:!1,selectedImageNode:null,selectedImageProps:{width:0,height:0,style:{}},selectedText:"",focused:!1,selRange:null}},computed:{},methods:{toggleShowHTML:function(){this.showHTML?this.content=document.getElementById("textBox").innerText:this.content=document.getElementById("textBox").innerHTML,this.showHTML=!this.showHTML,this.$emit("toggleShowHTML",this.showHTML)},selectElement:function(t){this.selectedImageNode=null,console.log("selectElement: ",t);var e=t.target.tagName.toLowerCase();console.log("element: ",e),"img"===e&&(console.log("img!"),this.selectedImageNode=t.target,this.selectedImageProps.width=t.target.width,this.selectedImageProps.height=t.target.height,this.selectedImageProps.style["margin-left"]=t.target.style["margin-left"]?t.target.style["margin-left"].match(/\d/g).join(""):0,this.selectedImageProps.style["margin-right"]=t.target.style["margin-right"]?t.target.style["margin-right"].match(/\d/g).join(""):0,this.selectedImageProps.style.float=t.target.style.float)},updateSelectedImageProperties:function(t,e){console.log("updateSelectedImageProperties2: ",t,e),console.log("selectedImageNode: ",this.selectedImageNode),"width"!==e&&"height"!==e||(this.selectedImageNode[e]=t),"marginLeft"===e&&(this.selectedImageNode.style.marginLeft="".concat(t,"px")),"marginRight"===e&&(this.selectedImageNode.style.marginRight="".concat(t,"px")),"float"===e&&(this.selectedImageNode.style.float=t)},openImagesModal:function(){var t=this;console.log("openImagesModal"),this.showImagesModal=!0,setTimeout(function(){t.$bvModal.show("imagesModal")},300)},openDocumentsModal:function(){var t=this;console.log("openDocumentsModal"),this.showDocumentsModal=!0,setTimeout(function(){t.$bvModal.show("documentsModal")},300)},openCreateLinkModal:function(){var t=this;console.log("openCreateLinkModal"),this.selectedText=window.getSelection().toString()||"Lien",this.selRange=this.saveSelection(),this.showCreateLinkModal=!0,setTimeout(function(){t.$bvModal.show("createLinkModal")},300)},insertImage:function(t){console.log("insertImage2: ",t),this.showModal=!1;var e="/images/".concat(t);this.formatDoc("insertImage",e)},insertDocument:function(t,e,o){console.log("insertDocument",t,e,o),this.formatDoc("insertHTML",'<a href="/documents/'.concat(t,'" type="').concat(e,'" title="').concat(o,'" target="_blank">').concat(o,"</a>"))},insertLink:function(t){var e,o=t.linkType,n=t.linkPage;console.log("insertLink",o,n),e="external"===o?'<a href="'.concat(n.external,'">').concat(this.selectedText,"</a>"):'<router-link to="/'.concat(n.internal.slug,'"><span class="link">').concat(this.selectedText,"</span></router-link>"),this.restoreSelection(this.selRange),document.getElementById("textBox").focus(),this.insertTextAtCursor(e)},formatDoc:function(t,e){document.execCommand(t,!1,e)},saveSelection:function(){var t;if(window.getSelection){if((t=window.getSelection()).getRangeAt&&t.rangeCount)return t.getRangeAt(0)}else if(document.selection&&document.selection.createRange)return document.selection.createRange();return null},restoreSelection:function(t){var e;t&&(window.getSelection?((e=window.getSelection()).removeAllRanges(),e.addRange(t)):document.selection&&t.select&&t.select())},insertTextAtCursor:function(t){var e,o;if(window.getSelection){if((e=window.getSelection()).getRangeAt&&e.rangeCount){(o=e.getRangeAt(0)).deleteContents();var n=document.createElement("div");n.innerHTML=t;for(var i,a,r=document.createDocumentFragment();i=n.firstChild;)a=r.appendChild(i);o.insertNode(r),a&&((o=o.cloneRange()).setStartAfter(a),o.collapse(!0),e.removeAllRanges(),e.addRange(o))}}else document.selection&&document.selection.createRange&&((o=document.selection.createRange()).pasteHTML(t),o.select())}}},c=(o(276),o(2)),l=Object(c.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-form-group",{attrs:{label:""}},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Gras"},on:{click:function(e){return e.preventDefault(),t.formatDoc("bold")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"bold"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Italic"},on:{click:function(e){return e.preventDefault(),t.formatDoc("italic")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"italic"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Souligné"},on:{click:function(e){return e.preventDefault(),t.formatDoc("underline")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"underline"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Aligner à gauche"},on:{click:function(e){return e.preventDefault(),t.formatDoc("justifyleft")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"align-left"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Aligner au centre"},on:{click:function(e){return e.preventDefault(),t.formatDoc("justifycenter")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"align-center"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Aligner à droite"},on:{click:function(e){return e.preventDefault(),t.formatDoc("justifyright")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"align-right"}})],1),t._v(" "),o("b-button",{staticClass:"mx-.5",attrs:{variant:"primary",title:"Liste point"},on:{click:function(e){return e.preventDefault(),t.formatDoc("insertUnorderedList")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"list-ul"}})],1),t._v(" "),o("b-button",{staticClass:"mx-.5",attrs:{variant:"primary",title:"Liste nombre"},on:{click:function(e){return e.preventDefault(),t.formatDoc("insertOrderedList")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"list-ol"}})],1),t._v(" "),o("b-button",{staticClass:"mx-.5",attrs:{variant:"primary",title:"Lien"},on:{click:function(e){return e.preventDefault(),t.openCreateLinkModal(e)}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"link"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"secondary",title:"Ajouter image",disabled:!t.focused},on:{mousedown:function(e){e.preventDefault(),t.focused=!0},click:function(e){return e.preventDefault(),t.openImagesModal(e)}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"image"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"secondary",title:"Ajouter PDF",disabled:!t.focused},on:{mousedown:function(e){e.preventDefault(),t.focused=!0},click:function(e){return e.preventDefault(),t.openDocumentsModal(e)}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"file-pdf"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"dark",title:"Afficher le code/afficher le rendu"},on:{click:t.toggleShowHTML}},[t.showHTML?o("font-awesome-icon",{attrs:{size:"1x",icon:["fa","eye"]}}):o("font-awesome-icon",{attrs:{size:"1x",icon:"code"}})],1),t._v(" "),t.selectedImageNode?o("b-row",{staticClass:"justify-content-center my-2",attrs:{"no-gutters":""}},[o("b-col",{attrs:{cols:"12"}},[o("image-properties",{attrs:{selectedImageProps:t.selectedImageProps},on:{updateSelectedImageProperties:t.updateSelectedImageProperties}})],1)],1):t._e(),t._v(" "),t.showHTML?o("div",{staticClass:"mt-1",attrs:{contenteditable:"true",id:"textBox"},on:{focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}},[o("pre",{},[t._v(t._s(t.content))])]):o("div",{staticClass:"mt-1",attrs:{contenteditable:"true",id:"textBox"},domProps:{innerHTML:t._s(t.content)},on:{focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},click:t.selectElement}})],1),t._v(" "),t.showImagesModal?o("images-modal",{on:{insertImage:t.insertImage,closeImagesModal:function(e){t.showImagesModal=!1}}}):t._e(),t._v(" "),t.showDocumentsModal?o("documents-modal",{on:{insertDocument:t.insertDocument,closeDocumentsModal:function(e){t.showDocumentsModal=!1}}}):t._e(),t._v(" "),t.showCreateLinkModal?o("create-link-modal",{attrs:{selectedText:t.selectedText},on:{insertLink:t.insertLink,closeLinkModal:function(e){t.showCreateLinkModal=!1}}}):t._e()],1)},[],!1,null,"78b862e4",null);e.a=l.exports},276:function(t,e,o){"use strict";var n=o(33);o.n(n).a},277:function(t,e,o){(t.exports=o(6)(!1)).push([t.i,"#textBox[data-v-78b862e4] {\n  width: 100%;\n  height: 300px;\n  border: 6px double #E1B124;\n  padding: 12px;\n  overflow: scroll;\n}\n#textBox #sourceText[data-v-78b862e4] {\n  padding: 0;\n  margin: 0;\n  min-width: 498px;\n  min-height: 200px;\n}\n.overlay[data-v-78b862e4] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #008cba;\n}\n[data-v-78b862e4] #textBox img:hover {\n  cursor: pointer;\n  opacity: 0.5;\n  transition: 0.5s ease;\n  background-color: #2C5CAD;\n}\n[data-v-78b862e4] #textBox .link {\n  color: #2c5cad;\n}\n[data-v-78b862e4] #textBox .link:hover {\n  color: #1c3c70;\n  text-decoration: underline;\n}\n#editMode label[data-v-78b862e4] {\n  cursor: pointer;\n}\n.intLink[data-v-78b862e4] {\n  cursor: pointer;\n}\nimg.intLink[data-v-78b862e4] {\n  border: 1px solid #000;\n}\n.disabled[data-v-78b862e4]:hover {\n  cursor: not-allowed;\n  color: #000;\n}\npre[data-v-78b862e4] {\n  overflow-x: auto;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}",""])},293:function(t,e,o){"use strict";var n=o(46);o.n(n).a},294:function(t,e,o){(t.exports=o(6)(!1)).push([t.i,'.primary-color[data-v-b3e43bec] {\n  color: #2C5CAD;\n}\n[data-v-b3e43bec] .header-picker {\n  background-color: #2C5CAD !important;\n}\n[data-v-b3e43bec] .custom-button-content {\n  color: #2C5CAD !important;\n}\n[data-v-b3e43bec] .datepicker-day-effect {\n  background: #2C5CAD !important;\n}\n[data-v-b3e43bec] .datepicker-button-content {\n  color: #2C5CAD !important;\n}\n[data-v-b3e43bec] .datepicker-button svg {\n  fill: #2C5CAD !important;\n}\n[data-v-b3e43bec] .datepicker-button-effect {\n  background: #2C5CAD !important;\n}\n[data-v-b3e43bec] .field-input:focus {\n  border: 1px solid #2C5CAD !important;\n}\n[data-v-b3e43bec] .field-label {\n  color: #2C5CAD !important;\n}\n[data-v-b3e43bec] .time-picker-column-item-effect {\n  background-color: #2C5CAD !important;\n}\n[data-v-b3e43bec] .custom-file-label::after {\n  content: "Parcourir" !important;\n}\n[data-v-b3e43bec] .b-form-file.is-invalid {\n  outline: #dc3545 solid 1px;\n}',""])},33:function(t,e,o){var n=o(277);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(7)(n,i);n.locals&&(t.exports=n.locals)},46:function(t,e,o){var n=o(294);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(7)(n,i);n.locals&&(t.exports=n.locals)},90:function(t,e,o){"use strict";o.r(e);var n=o(0),i=o.n(n),a=o(5),r=o.n(a),s=o(15),c=o.n(s),l=(o(38),o(11)),m=o.n(l),u=o(12);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e,o,n,i,a,r){try{var s=t[a](r),c=s.value}catch(t){return void o(t)}s.done?e(c):Promise.resolve(c).then(n,i)}function g(t){return function(){var e=this,o=arguments;return new Promise(function(n,i){var a=t.apply(e,o);function r(t){f(a,n,i,r,s,"next",t)}function s(t){f(a,n,i,r,s,"throw",t)}r(void 0)})}}var p={layout:"backend",components:{VueCtkDateTimePicker:c.a,Multiselect:m.a,TextEditor:u.a},created:function(){var t=g(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){var t=g(i.a.mark(function t(){var e,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=parseInt(this.$route.params.id),console.log("activityId: ",e),this.activity&&this.activity.images){t.next=5;break}return t.next=5,this.$store.dispatch("activities/fetchActivityById",{activityId:this.$route.params.id});case 5:if(!(Object.keys(this.$store.getters["sponsors/sponsors"]).length<2)){t.next=8;break}return t.next=8,this.$store.dispatch("sponsors/fetchSponsors");case 8:for(console.log("this.activity: ",this.activity),console.log("this.form: ",this.form),this.form.fill(this.activity),this.activitySponsors=this.activity.sponsors,o=0;o<this.form.images.length;o++)"object"===d(this.form.images[o])?this.imagePreviewArray[o]=URL.createObjectURL(this.form.images[o]):this.imagePreviewArray[o]="/images/".concat(this.form.images[o]);case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{form:new r.a({id:"",name:"",subtitle:"",content:"",start_date:"",end_date:"",link:"",image:null,new_image:null,is_published:!1,is_on_frontpage:!1,sponsors:[],images:[]}),activitySponsors:[],imagePreview:null,imagePreviewArray:[],showHTML:!1}},computed:{loading:function(){return this.$store.getters["loading/loading"]},activities:function(){return this.$store.getters["activities/activities"]},activity:function(){return this.$store.getters["activities/activities"][this.$route.params.id]},sponsors:function(){return this.$store.getters["sponsors/sponsors"]},sponsorsArray:function(){var t=this,e=[];return Object.keys(this.sponsors).forEach(function(o){return e.push(t.sponsors[o])}),e}},methods:{toggleShowHTML:function(t){console.log("toggleShowHTML: ",t),this.showHTML=t},selectFile:function(t){this.form.new_image=t.target.files[0],this.imagePreview=URL.createObjectURL(t.target.files[0])},selectFiles:function(t){if(console.log("selectFiles e: ",t),t.target.files.length>0){for(var e=0;e<t.target.files.length;e++)this.form.images.push(t.target.files[e]);this.$refs.fileInput.reset()}for(var o=0;o<this.form.images.length;o++)"object"===d(this.form.images[o])?this.imagePreviewArray[o]=URL.createObjectURL(this.form.images[o]):this.imagePreviewArray[o]="/images/".concat(this.form.images[o])},removeImage:function(t,e){try{console.log("removeImage selectedImageName: ",t),console.log("removeImage index: ",e),console.log("form.images: ",this.form.images),this.form.images.splice(e,1)}catch(t){console.log("error: ",t)}},updateActivity:function(){var t=g(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("updateActivity form: ",this.form),console.log("form.images: ",this.form.images),this.$store.commit("loading/SET_LOADING",!0),e=this.showHTML?document.getElementById("textBox").innerText:document.getElementById("textBox").innerHTML,this.form.content=e,this.form.sponsors=this.activitySponsors.map(function(t){return parseInt(t.id)}),t.next=9,this.$store.dispatch("activities/updateActivity",this.form);case 9:this.$store.commit("loading/SET_LOADING",!1),this.$noty.success("Activité mise à jour avec succès!"),this.$router.push("/admin/activities"),t.next=20;break;case 14:t.prev=14,t.t0=t.catch(0),this.$store.commit("loading/SET_LOADING",!1),console.log("error: ",t.t0),console.log("error.response: ",t.t0.response),this.$noty.error("Une erreur est survenue et l'activité n'a pas pu être mise à jour.");case 20:case"end":return t.stop()}},t,this,[[0,14]])}));return function(){return t.apply(this,arguments)}}()}},v=(o(293),o(2)),h=Object(v.a)(p,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",[o("b-breadcrumb",[o("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/activities"}},[o("font-awesome-icon",{attrs:{icon:"calendar-day"}}),t._v(" "),o("span",[t._v("Activités")])],1),t._v(" "),o("b-breadcrumb-item",{attrs:{active:""}},[t._v("Editer")])],1),t._v(" "),t.activity?o("h2",{staticClass:"text-center"},[t._v("\n        Editer activité "),o("span",{staticClass:"primary-color"},[t._v(t._s(t.activity.name))])]):t._e(),t._v(" "),t.activity?o("p"):t._e(),t._v(" "),o("b-row",{staticClass:"justify-content-center"},[o("b-col",{attrs:{cols:"12",md:"8"}},[o("b-form",{on:{submit:function(e){return e.preventDefault(),t.updateActivity(e)}}},[o("b-row",{staticClass:"justify-content-start my-3 px-3",attrs:{"align-v":"center"}},[o("b-col",{attrs:{cols:"12"}},[o("b-form-group",{attrs:{label:"Nom:","label-for":"name"}},[o("b-form-input",{class:{"is-invalid":t.form.errors.has("name")},attrs:{id:"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"name"}})],1)],1),t._v(" "),o("b-col",{attrs:{cols:"12"}},[o("b-form-group",{attrs:{label:"Sous-titre:","label-for":"subtitle"}},[o("b-form-input",{class:{"is-invalid":t.form.errors.has("subtitle")},attrs:{id:"subtitle"},model:{value:t.form.subtitle,callback:function(e){t.$set(t.form,"subtitle",e)},expression:"form.subtitle"}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"subtitle"}})],1)],1),t._v(" "),t.form&&t.form.content?o("b-col",{attrs:{cols:"12"}},[o("b-form-group",{attrs:{label:"Contenu:","label-for":"content"}},[o("text-editor",{attrs:{formContent:t.form.content},on:{toggleShowHTML:t.toggleShowHTML}})],1)],1):t._e(),t._v(" "),o("b-col",{attrs:{cols:"12",md:"6"}},[o("b-form-group",{attrs:{label:"Date de début:","label-for":"startDate"}},[o("VueCtkDateTimePicker",{attrs:{label:"Cliquer pour choisir une date",format:"YYYY-MM-DD HH:mm:ss",formatted:"YYYY-MM-DD HH:mm:ss","button-now-translation":"Aujourd'hui",id:"startDate"},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}})],1)],1),t._v(" "),o("b-col",{attrs:{cols:"12",md:"6"}},[o("b-form-group",{attrs:{label:"Date de fin:","label-for":"endDate"}},[o("VueCtkDateTimePicker",{attrs:{label:"Cliquer pour choisir une date",format:"YYYY-MM-DD HH:mm:ss",formatted:"YYYY-MM-DD HH:mm:ss","button-now-translation":"Aujourd'hui","only-date":!1,id:"endDate"},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}})],1)],1),t._v(" "),o("b-col",{attrs:{cols:"12"}},[o("b-form-group",{attrs:{label:"Lien vers le site web:","label-for":"link",description:"Doit commencer par http://www."}},[o("b-form-input",{class:{"is-invalid":t.form.errors.has("link")},attrs:{id:"link",name:"link",type:"text"},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"link"}})],1)],1),t._v(" "),o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[o("b-form-checkbox",{attrs:{id:"is_published",name:"is_published",value:"1","unchecked-value":"0"},model:{value:t.form.is_published,callback:function(e){t.$set(t.form,"is_published",e)},expression:"form.is_published"}},[t._v(" Publié? ")])],1),t._v(" "),o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[o("b-form-checkbox",{attrs:{id:"is_on_frontpage",name:"is_on_frontpage",value:"1","unchecked-value":"0"},model:{value:t.form.is_on_frontpage,callback:function(e){t.$set(t.form,"is_on_frontpage",e)},expression:"form.is_on_frontpage"}},[t._v(" En page d'accueil? ")])],1),t._v(" "),t.form.image?o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[o("p",{staticClass:"text-center"},[t._v("Image actuelle:")]),t._v(" "),o("b-img",{attrs:{center:"",src:"/images/"+t.form.image,width:"200"}})],1):t._e(),t._v(" "),t.form.image?o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[t.form.new_image?o("div",{staticStyle:{"text-align":"center","margin-bottom":"20px"},attrs:{id:"preview"}},[o("p",[t._v("Nouvelle image:")]),t._v(" "),t.imagePreview?o("img",{staticStyle:{width:"150px"},attrs:{src:t.imagePreview}}):t._e()]):t._e()]):t._e(),t._v(" "),o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[o("b-form-file",{class:{"is-invalid":t.form.errors.has("new_image")},attrs:{accept:"image/jpeg, image/png",placeholder:"Choisir une nouvelle image...","drop-placeholder":"Placez votre image ici..."},on:{change:t.selectFile}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"new_image"}})],1),t._v(" "),o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[o("b-form-group",{attrs:{label:"Sponsors:"}},[o("multiselect",{attrs:{"tag-placeholder":"Add this as new tag",placeholder:"Search or add a tag",label:"name","track-by":"id",options:t.sponsorsArray,multiple:!0,taggable:!0},model:{value:t.activitySponsors,callback:function(e){t.activitySponsors=e},expression:"activitySponsors"}})],1)],1)],1),t._v(" "),o("b-row",{staticClass:"justify-content-start my-3 px-3"},[o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[t._v("\n                        Gallerie d'images:"),o("br"),t._v(" "),o("b-form-file",{ref:"fileInput",attrs:{accept:"image/jpeg, image/png",placeholder:"Sélectionner de nouvelles images...","drop-placeholder":"Placer vos images ici...",multiple:""},on:{change:t.selectFiles}})],1),t._v(" "),t._l(t.form.images,function(e,n){return o("b-col",{key:n,staticClass:"my-2",attrs:{cols:"12",sm:"4"}},[o("b-card",{staticClass:"mb-2",attrs:{title:"","img-src":t.imagePreviewArray[n],"img-alt":"Image","img-top":"",tag:"article"}},[o("div",{staticClass:"text-center"},[o("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(o){return t.removeImage(e,n)}}},[t._v("Remove")])],1)])],1)})],2),t._v(" "),o("b-row",{staticClass:"justify-content-center my-2"},[o("b-button",{attrs:{variant:"primary",disabled:t.loading,type:"submit"}},[t.loading?o("b-spinner",{attrs:{small:"",type:"grow"}}):t._e(),t._v("\n                        Editer activité\n                    ")],1)],1),t._v(" "),o("b-row",{staticClass:"justify-content-center"},[o("b-alert",{attrs:{variant:"danger",dismissible:"",show:t.form.errors.any()}},[t._v("Erreur lors de l'envoi. Veuillez vérifier la validité des champs.")])],1)],1)],1)],1)],1)},[],!1,null,"b3e43bec",null);e.default=h.exports}}]);
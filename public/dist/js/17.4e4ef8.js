(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{101:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),s=o(5),r=o.n(s),i=o(10),c=o.n(i),l=o(17),m=o(16),d=o(15);function u(e,t,o,n,a,s,r){try{var i=e[s](r),c=i.value}catch(e){return void o(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function p(e){return function(){var t=this,o=arguments;return new Promise(function(n,a){var s=e.apply(t,o);function r(e){u(s,n,a,r,i,"next",e)}function i(e){u(s,n,a,r,i,"throw",e)}r(void 0)})}}var g={components:{Multiselect:c.a,ImagesModal:l.a,DocumentsModal:m.a,ImagePropertiesToast:d.a},created:function(){var e=p(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),mounted:function(){var e=p(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$store.getters["pages/pages"][this.$route.params.id]){e.next=3;break}return e.next=3,this.$store.dispatch("pages/fetchPageById",{pageId:this.$route.params.id});case 3:if(!(Object.keys(this.$store.getters["sections/sections"]).length<2)){e.next=6;break}return e.next=6,this.$store.dispatch("sections/fetchSections");case 6:console.log("this.page: ",this.page),console.log("this.form: ",this.form),this.form.fill(this.page),this.pageSections=this.page.sections;case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),data:function(){return{form:new r.a({id:"",name:"",content:"",is_published:!1}),showHTML:!1,focused:!1,showImagesModal:!1,showDocumentsModal:!1,showImagePropertiesToast:!1,selectedImageNode:null,selectedImageProps:{width:0,height:0,style:{}},pageSections:[]}},computed:{loading:function(){return this.$store.getters["loading/loading"]},sponsors:function(){return this.$store.getters["sponsors/sponsors"]},pages:function(){return this.$store.getters["pages/pages"]},page:function(){return this.$store.getters["pages/pages"][this.$route.params.id]},sections:function(){return this.$store.getters["sections/sections"]},sectionsArray:function(){var e=this,t=[];return Object.keys(this.sections).forEach(function(o){return t.push(e.sections[o])}),t}},methods:{formatDoc:function(e,t){document.execCommand(e,!1,t)},toggleShowHTML:function(){this.showHTML?this.form.content=document.getElementById("textBox").innerText:this.form.content=document.getElementById("textBox").innerHTML,this.showHTML=!this.showHTML},updateSelectedImage:function(e,t){console.log("updateSelectedImage: ",e,t),"width"!==t&&"height"!==t||(this.selectedImageNode[t]=e),"margin"===t&&(this.selectedImageNode.style.margin="".concat(e,"px")),"marginRight"===t&&(this.selectedImageNode.style.marginRight="".concat(e,"px")),"float"===t&&(this.selectedImageNode.style.float=e)},selectedElement:function(e){console.log("event.target: ",e.target);var t=e.target.tagName.toLowerCase();console.log("element: ",t),"img"===t&&(console.log("img!"),this.selectedImageNode=e.target,this.selectedImageProps.width=e.target.width,this.selectedImageProps.height=e.target.height,this.selectedImageProps.style.margin=e.target.style.margin.match(/\d/g).join(""),this.selectedImageProps.style.float=e.target.style.float,this.openImagePropertiesToast())},updateSelectedImageProperties:function(e,t){console.log("updateSelectedImageProperties2: ",e,t),console.log("selectedImageNode: ",this.selectedImageNode),"width"!==t&&"height"!==t||(this.selectedImageNode[t]=e),"margin"===t&&(this.selectedImageNode.style.margin="".concat(e,"px")),"marginRight"===t&&(this.selectedImageNode.style.marginRight="".concat(e,"px")),"float"===t&&(this.selectedImageNode.style.float=e)},openImagesModal:function(){var e=this;console.log("openImagesModal"),this.showImagesModal=!0,setTimeout(function(){e.$bvModal.show("imagesModal")},300)},openDocumentsModal:function(){var e=this;console.log("openDocumentsModal"),this.showDocumentsModal=!0,setTimeout(function(){e.$bvModal.show("documentsModal")},300)},openImagePropertiesToast:function(){var e=this;console.log("openImagePropertiesToast"),this.showImagePropertiesToast=!0,setTimeout(function(){e.$bvToast.show("example-toast")},300)},insertImage:function(e){console.log("insertImage: ",e);var t="/images/".concat(e);document.execCommand("insertImage",!1,t)},insertFile:function(e,t,o){console.log("insertFile",e,t,o),document.execCommand("insertHTML",!1,'<a href="/documents/'.concat(e,'" type="').concat(t,'" title="').concat(o,'" target="_blank">').concat(o,"</a>"))},insertDiv:function(e){document.execCommand("formatBlock",!1,"div"),window.getSelection().focusNode.parentNode.className="col-6"},updatePage:function(){var e=p(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("updatePage: ",this.form),this.$store.commit("loading/SET_LOADING",!0),t=this.showHTML?document.getElementById("textBox").innerText:document.getElementById("textBox").innerHTML,console.log("content: ",t),this.form.content=t,this.form.sections=this.pageSections.map(function(e){return parseInt(e.id)}),console.log("this.form: ",this.form),e.next=10,this.$store.dispatch("pages/updatePage",this.form);case 10:this.$store.commit("loading/SET_LOADING",!1),this.$noty.success("Page mise à jour avec succès!"),this.$router.push("/admin/pages"),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),this.$store.commit("loading/SET_LOADING",!1),console.log("error: ",e.t0),this.$noty.error("Une erreur est survenue et la page n'a pas pu être mise à jour.");case 20:case"end":return e.stop()}},e,this,[[0,15]])}));return function(){return e.apply(this,arguments)}}()}},f=(o(278),o(2)),h=Object(f.a)(g,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",[o("b-breadcrumb",[o("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/pages"}},[o("font-awesome-icon",{attrs:{icon:"folder"}}),e._v(" "),o("span",[e._v("Pages")])],1),e._v(" "),o("b-breadcrumb-item",{attrs:{active:""}},[e._v("Editer")])],1),e._v(" "),e.page?o("h2",{staticClass:"text-center"},[e._v('Editer page "'+e._s(e.page.name)+'"')]):e._e(),e._v(" "),o("b-form",{on:{submit:function(t){return t.preventDefault(),e.updatePage(t)}}},[o("b-row",{staticClass:"justify-content-start my-3 px-3",attrs:{"align-v":"center"}},[o("b-col",{attrs:{cols:"12",md:"6"}},[o("b-form-group",{attrs:{label:"Titre:","label-for":"name"}},[o("b-form-input",{class:{"is-invalid":e.form.errors.has("name")},attrs:{id:"name",name:"name",placeholder:"Titre de la page"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"name"}})],1)],1),e._v(" "),o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[o("b-form-group",{attrs:{label:"Sections:"}},[o("multiselect",{attrs:{"tag-placeholder":"Add this as new tag",placeholder:"Search or add a tag",label:"name","track-by":"id",options:e.sectionsArray,multiple:!0,taggable:!0},model:{value:e.pageSections,callback:function(t){e.pageSections=t},expression:"pageSections"}})],1)],1),e._v(" "),o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[o("b-form-checkbox",{attrs:{id:"is_published",name:"is_published",value:"1","unchecked-value":"0"},model:{value:e.form.is_published,callback:function(t){e.$set(e.form,"is_published",t)},expression:"form.is_published"}},[e._v("\n                    Publié?\n                ")])],1),e._v(" "),o("b-col",{attrs:{cols:"12"}},[o("b-form-group",{attrs:{label:"Contenu de la page:","label-for":"newPageContent"}},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Gras"},on:{click:function(t){return t.preventDefault(),e.formatDoc("bold")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"bold"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Italic"},on:{click:function(t){return t.preventDefault(),e.formatDoc("italic")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"italic"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Souligné"},on:{click:function(t){return t.preventDefault(),e.formatDoc("underline")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"underline"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Aligner à gauche"},on:{click:function(t){return t.preventDefault(),e.formatDoc("justifyleft")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"align-left"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Aligner au centre"},on:{click:function(t){return t.preventDefault(),e.formatDoc("justifycenter")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"align-center"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Aligner à droite"},on:{click:function(t){return t.preventDefault(),e.formatDoc("justifyright")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"align-right"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"secondary",title:"Ajouter image",disabled:!e.focused},on:{mousedown:function(t){t.preventDefault(),e.focused=!0},click:function(t){return t.preventDefault(),e.openImagesModal(t)}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"image"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"secondary",title:"Ajouter PDF",disabled:!e.focused},on:{mousedown:function(t){t.preventDefault(),e.focused=!0},click:function(t){return t.preventDefault(),e.openDocumentsModal(t)}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"file-pdf"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"dark",title:"Voir code"},on:{click:e.toggleShowHTML}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"code"}})],1),e._v(" "),e.showImagePropertiesToast?o("b-row",{staticClass:"justify-content-center my-2"},[o("b-col",{attrs:{cols:"12",md:"6"}},[o("image-properties-toast",{attrs:{selectedImageProps:e.selectedImageProps},on:{updateSelectedImageProperties:e.updateSelectedImageProperties,closeImagePropertiesToast:function(t){e.showImagePropertiesToast=!1}}})],1)],1):e._e(),e._v(" "),e.showHTML?o("div",{staticClass:"mt-1",attrs:{contenteditable:"true",id:"textBox"},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},dblclick:e.selectedElement}},[o("pre",{},[e._v(e._s(e.form.content))])]):o("div",{staticClass:"mt-1",attrs:{contenteditable:"true",id:"textBox"},domProps:{innerHTML:e._s(e.form.content)},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},dblclick:e.selectedElement}})],1)],1)],1),e._v(" "),o("b-row",{staticClass:"justify-content-center my-2"},[o("b-button",{attrs:{variant:"primary",disabled:e.loading,type:"submit"}},[e.loading?o("b-spinner",{attrs:{small:"",type:"grow"}}):e._e(),e._v("\n                Editer la page\n            ")],1)],1)],1),e._v(" "),e.showImagesModal?o("images-modal",{on:{insertFile:e.insertImage,closeImagesModal:function(t){e.showImagesModal=!1}}}):e._e(),e._v(" "),e.showDocumentsModal?o("documents-modal",{on:{insertFile:e.insertFile,closeDocumentsModal:function(t){e.showDocumentsModal=!1}}}):e._e()],1)},[],!1,null,"b4b73ad2",null);t.default=h.exports},278:function(e,t,o){"use strict";var n=o(41);o.n(n).a},279:function(e,t,o){(e.exports=o(7)(!1)).push([e.i,"#textBox[data-v-b4b73ad2] {\n  width: 100%;\n  height: 250px;\n  padding: 12px;\n  overflow: scroll;\n  border: 6px double #E1B124;\n}\n#textBox #sourceText[data-v-b4b73ad2] {\n  padding: 10px;\n  margin: 0;\n  min-width: 498px;\n  min-height: 200px;\n}\n[data-v-b4b73ad2] #textBox img:hover {\n  cursor: pointer;\n  border: 2px solid red;\n}\n#editMode label[data-v-b4b73ad2] {\n  cursor: pointer;\n}\n.intLink[data-v-b4b73ad2] {\n  cursor: pointer;\n}\nimg.intLink[data-v-b4b73ad2] {\n  border: 1px solid #000;\n}\npre[data-v-b4b73ad2] {\n  overflow-x: auto;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}",""])},41:function(e,t,o){var n=o(279);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(8)(n,a);n.locals&&(e.exports=n.locals)}}]);
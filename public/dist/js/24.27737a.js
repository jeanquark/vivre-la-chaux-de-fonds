(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{113:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(5),r=n.n(i),s=n(11),c=n.n(s),l=n(35),d=n(36),u=n(38),m=n(37);function g(e,t,n,o,a,i,r){try{var s=e[i](r),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(o,a)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){var i=e.apply(t,n);function r(e){g(i,o,a,r,s,"next",e)}function s(e){g(i,o,a,r,s,"throw",e)}r(void 0)})}}var p={components:{Multiselect:c.a,ImagesModal:l.a,DocumentsModal:d.a,CreateLinkModal:u.a,ImageProperties:m.a},created:function(){var e=f(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),mounted:function(){var e=f(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Object.keys(this.$store.getters["sections/sections"]).length<2)){e.next=3;break}return e.next=3,this.$store.dispatch("sections/fetchSections");case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),data:function(){return{form:new r.a({name:"",content:""}),showHTML:!1,content:'<img src="/images/favicon.png" style="margin-right: 20px;" /> Lien sur cette page.',checked:!1,showImagesModal:!1,showDocumentsModal:!1,showCreateLinkModal:!1,selectedImageNode:null,selectedImageProps:{width:0,height:0,style:{}},selectedText:"",focused:!1,pageSections:[],selRange:null}},computed:{loading:function(){return this.$store.getters["loading/loading"]},sections:function(){return this.$store.getters["sections/sections"]},sectionsArray:function(){var e=this,t=[];return Object.keys(this.sections).forEach(function(n){return t.push(e.sections[n])}),t}},methods:{toggleShowHTML:function(){this.showHTML?this.content=document.getElementById("textBox").innerText:this.content=document.getElementById("textBox").innerHTML,this.showHTML=!this.showHTML},selectElement:function(e){this.selectedImageNode=null,console.log("selectElement: ",e);var t=e.target.tagName.toLowerCase();console.log("element: ",t),"img"===t&&(console.log("img!"),this.selectedImageNode=e.target,this.selectedImageProps.width=e.target.width,this.selectedImageProps.height=e.target.height,this.selectedImageProps.style["margin-left"]=e.target.style["margin-left"]?e.target.style["margin-left"].match(/\d/g).join(""):0,this.selectedImageProps.style["margin-right"]=e.target.style["margin-right"]?e.target.style["margin-right"].match(/\d/g).join(""):0,this.selectedImageProps.style.float=e.target.style.float)},updateSelectedImageProperties:function(e,t){console.log("updateSelectedImageProperties2: ",e,t),console.log("selectedImageNode: ",this.selectedImageNode),"width"!==t&&"height"!==t||(this.selectedImageNode[t]=e),"marginLeft"===t&&(this.selectedImageNode.style.marginLeft="".concat(e,"px")),"marginRight"===t&&(this.selectedImageNode.style.marginRight="".concat(e,"px")),"float"===t&&(this.selectedImageNode.style.float=e)},openImagesModal:function(){var e=this;console.log("openImagesModal"),this.showImagesModal=!0,setTimeout(function(){e.$bvModal.show("imagesModal")},300)},openDocumentsModal:function(){var e=this;console.log("openDocumentsModal"),this.showDocumentsModal=!0,setTimeout(function(){e.$bvModal.show("documentsModal")},300)},openCreateLinkModal:function(){var e=this;console.log("openCreateLinkModal"),this.selectedText=window.getSelection().toString()||"Lien",this.selRange=this.saveSelection(),this.showCreateLinkModal=!0,setTimeout(function(){e.$bvModal.show("createLinkModal")},300)},insertImage:function(e){console.log("insertImage2: ",e),this.showModal=!1;var t="/images/".concat(e);this.formatDoc("insertImage",t)},insertDocument:function(e,t,n){console.log("insertDocument",e,t,n),this.formatDoc("insertHTML",'<a href="/documents/'.concat(e,'" type="').concat(t,'" title="').concat(n,'" target="_blank">').concat(n,"</a>"))},insertLink:function(e){var t,n=e.linkType,o=e.linkPage;console.log("insertLink",n,o),t="external"===n?'<a href="'.concat(o.external,'">').concat(this.selectedText,"</a>"):'<router-link to="/'.concat(o.internal.slug,'"><span class="link">').concat(this.selectedText,"</span></router-link>"),this.restoreSelection(this.selRange),document.getElementById("textBox").focus(),this.insertTextAtCursor(t)},formatDoc:function(e,t){document.execCommand(e,!1,t)},createNewPage:function(){var e=f(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("createNewPage"),this.$store.commit("loading/SET_LOADING",!0),t=this.showHTML?document.getElementById("textBox").innerText:document.getElementById("textBox").innerHTML,this.form.content=t,console.log("this.form: ",this.form),e.next=8,this.$store.dispatch("pages/createPage",this.form);case 8:this.$store.commit("loading/SET_LOADING",!1),this.$noty.success("Nouvelle page créée avec succès!"),this.$router.push("/admin/pages"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),this.$store.commit("loading/SET_LOADING",!1),this.$noty.error("Une erreur est survenue et la nouvelle page n'a pas pu être créée.");case 17:case"end":return e.stop()}},e,this,[[0,13]])}));return function(){return e.apply(this,arguments)}}(),saveSelection:function(){var e;if(window.getSelection){if((e=window.getSelection()).getRangeAt&&e.rangeCount)return e.getRangeAt(0)}else if(document.selection&&document.selection.createRange)return document.selection.createRange();return null},restoreSelection:function(e){var t;e&&(window.getSelection?((t=window.getSelection()).removeAllRanges(),t.addRange(e)):document.selection&&e.select&&e.select())},insertTextAtCursor:function(e){var t,n;if(window.getSelection){if((t=window.getSelection()).getRangeAt&&t.rangeCount){(n=t.getRangeAt(0)).deleteContents();var o=document.createElement("div");o.innerHTML=e;for(var a,i,r=document.createDocumentFragment();a=o.firstChild;)i=r.appendChild(a);n.insertNode(r),i&&((n=n.cloneRange()).setStartAfter(i),n.collapse(!0),t.removeAllRanges(),t.addRange(n))}}else document.selection&&document.selection.createRange&&((n=document.selection.createRange()).pasteHTML(e),n.select())}}},h=(n(296),n(2)),v=Object(h.a)(p,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-breadcrumb",[n("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/pages"}},[n("font-awesome-icon",{attrs:{icon:"file"}}),e._v(" "),n("span",[e._v("Pages")])],1),e._v(" "),n("b-breadcrumb-item",{attrs:{active:""}},[e._v("Créer")])],1),e._v(" "),n("h2",{staticClass:"text-center"},[e._v("Créer une nouvelle page")]),e._v(" "),n("b-form",{on:{submit:function(t){return t.preventDefault(),e.createNewPage(t)}}},[n("b-row",{staticClass:"justify-content-start my-3 px-3",attrs:{"align-v":"center"}},[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Titre:","label-for":"name"}},[n("b-form-input",{class:{"is-invalid":e.form.errors.has("name")},attrs:{id:"name",name:"name",placeholder:"Titre de la page"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),n("has-error",{attrs:{form:e.form,field:"name"}})],1)],1),e._v(" "),n("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Sections:"}},[n("multiselect",{attrs:{"tag-placeholder":"Add this as new tag",placeholder:"Search or add a tag",label:"name","track-by":"id",options:e.sectionsArray,multiple:!0,taggable:!0},model:{value:e.pageSections,callback:function(t){e.pageSections=t},expression:"pageSections"}})],1)],1),e._v(" "),n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Contenu de la page:","label-for":"newPageContent"}},[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Gras"},on:{click:function(t){return t.preventDefault(),e.formatDoc("bold")}}},[n("font-awesome-icon",{attrs:{size:"1x",icon:"bold"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Italic"},on:{click:function(t){return t.preventDefault(),e.formatDoc("italic")}}},[n("font-awesome-icon",{attrs:{size:"1x",icon:"italic"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Souligné"},on:{click:function(t){return t.preventDefault(),e.formatDoc("underline")}}},[n("font-awesome-icon",{attrs:{size:"1x",icon:"underline"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Aligner à gauche"},on:{click:function(t){return t.preventDefault(),e.formatDoc("justifyleft")}}},[n("font-awesome-icon",{attrs:{size:"1x",icon:"align-left"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Aligner au centre"},on:{click:function(t){return t.preventDefault(),e.formatDoc("justifycenter")}}},[n("font-awesome-icon",{attrs:{size:"1x",icon:"align-center"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Aligner à droite"},on:{click:function(t){return t.preventDefault(),e.formatDoc("justifyright")}}},[n("font-awesome-icon",{attrs:{size:"1x",icon:"align-right"}})],1),e._v(" "),n("b-button",{staticClass:"mx-.5",attrs:{variant:"primary",title:"Liste point"},on:{click:function(t){return t.preventDefault(),e.formatDoc("insertUnorderedList")}}},[n("font-awesome-icon",{attrs:{size:"1x",icon:"list-ul"}})],1),e._v(" "),n("b-button",{staticClass:"mx-.5",attrs:{variant:"primary",title:"Liste nombre"},on:{click:function(t){return t.preventDefault(),e.formatDoc("insertOrderedList")}}},[n("font-awesome-icon",{attrs:{size:"1x",icon:"list-ol"}})],1),e._v(" "),n("b-button",{staticClass:"mx-.5",attrs:{variant:"primary",title:"Lien"},on:{click:function(t){return t.preventDefault(),e.openCreateLinkModal(t)}}},[n("font-awesome-icon",{attrs:{size:"1x",icon:"link"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"secondary",title:"Ajouter image",disabled:!e.focused},on:{mousedown:function(t){t.preventDefault(),e.focused=!0},click:function(t){return t.preventDefault(),e.openImagesModal(t)}}},[n("font-awesome-icon",{attrs:{size:"1x",icon:"image"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"secondary",title:"Ajouter PDF",disabled:!e.focused},on:{mousedown:function(t){t.preventDefault(),e.focused=!0},click:function(t){return t.preventDefault(),e.openDocumentsModal(t)}}},[n("font-awesome-icon",{attrs:{size:"1x",icon:"file-pdf"}})],1),e._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"dark",title:"Voir code"},on:{click:e.toggleShowHTML}},[n("font-awesome-icon",{attrs:{size:"1x",icon:"code"}})],1),e._v(" "),n("router-link",{attrs:{to:"/contact"}},[e._v("Contact")]),e._v(" "),e.selectedImageNode?n("b-row",{staticClass:"justify-content-center my-2",attrs:{"no-gutters":""}},[n("b-col",{attrs:{cols:"12"}},[n("image-properties",{attrs:{selectedImageProps:e.selectedImageProps},on:{updateSelectedImageProperties:e.updateSelectedImageProperties}})],1)],1):e._e(),e._v(" "),e.showHTML?n("div",{staticClass:"mt-1",attrs:{contenteditable:"true",id:"textBox"},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1}}},[n("pre",{},[e._v(e._s(e.content))])]):n("div",{staticClass:"mt-1",attrs:{contenteditable:"true",id:"textBox"},domProps:{innerHTML:e._s(e.content)},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},click:e.selectElement}})],1)],1)],1),e._v(" "),n("b-row",{staticClass:"justify-content-center my-2"},[n("b-button",{attrs:{variant:"primary",disabled:e.loading,type:"submit"}},[e.loading?n("b-spinner",{attrs:{small:"",type:"grow"}}):e._e(),e._v("\n                Créer nouvelle page\n            ")],1)],1)],1),e._v(" "),n("div",{attrs:{id:"textInserter2"}},[n("input",{attrs:{type:"text",id:"textToInsert2"}}),e._v(" "),n("input",{attrs:{type:"button",value:"Insert"},on:{click:function(t){return e.insertText2()}}})]),e._v(" "),e.showImagesModal?n("images-modal",{on:{insertImage:e.insertImage,closeImagesModal:function(t){e.showImagesModal=!1}}}):e._e(),e._v(" "),e.showDocumentsModal?n("documents-modal",{on:{insertDocument:e.insertDocument,closeDocumentsModal:function(t){e.showDocumentsModal=!1}}}):e._e(),e._v(" "),e.showCreateLinkModal?n("create-link-modal",{attrs:{selectedText:e.selectedText},on:{insertLink:e.insertLink,closeLinkModal:function(t){e.showCreateLinkModal=!1}}}):e._e()],1)},[],!1,null,"6155ed8e",null);t.default=v.exports},296:function(e,t,n){"use strict";var o=n(50);n.n(o).a},297:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,"#textBox[data-v-6155ed8e] {\n  width: 100%;\n  height: 250px;\n  border: 6px double #E1B124;\n  padding: 12px;\n  overflow: scroll;\n}\n#textBox #sourceText[data-v-6155ed8e] {\n  padding: 0;\n  margin: 0;\n  min-width: 498px;\n  min-height: 200px;\n}\n[data-v-6155ed8e] #textBox img:hover {\n  cursor: pointer;\n  border: 2px solid #2C5CAD;\n}\n[data-v-6155ed8e] #textBox .link {\n  color: #2c5cad;\n}\n[data-v-6155ed8e] #textBox .link:hover {\n  color: #1c3c70;\n  text-decoration: underline;\n}\n#editMode label[data-v-6155ed8e] {\n  cursor: pointer;\n}\n.intLink[data-v-6155ed8e] {\n  cursor: pointer;\n}\nimg.intLink[data-v-6155ed8e] {\n  border: 1px solid #000;\n}\n.disabled[data-v-6155ed8e]:hover {\n  cursor: not-allowed;\n  color: #000;\n}\npre[data-v-6155ed8e] {\n  overflow-x: auto;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\n\n/*.cke_image_resizer {\n    display: none;\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    bottom: -5px;\n    right: -5px;\n    background: #000;\n    outline: 1px solid #fff;\n    line-height: 0;\n    cursor: se-resize;\n}*/\n[data-v-6155ed8e] #textInserter {\n  display: none;\n}",""])},50:function(e,t,n){var o=n(297);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(7)(o,a);o.locals&&(e.exports=o.locals)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{101:function(e,t,o){"use strict";o.r(t);var n=o(0),s=o.n(n),a=o(5),i=o.n(a),r=o(11),c=o.n(r),l=o(14);function u(e,t,o,n,s,a,i){try{var r=e[a](i),c=r.value}catch(e){return void o(e)}r.done?t(c):Promise.resolve(c).then(n,s)}function d(e){return function(){var t=this,o=arguments;return new Promise(function(n,s){var a=e.apply(t,o);function i(e){u(a,n,s,i,r,"next",e)}function r(e){u(a,n,s,i,r,"throw",e)}i(void 0)})}}var m={components:{Multiselect:c.a,TextEditor:l.a},created:function(){var e=d(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$store.getters["pages/pages"][this.$route.params.id]){e.next=3;break}return e.next=3,this.$store.dispatch("pages/fetchPageById",{pageId:this.$route.params.id});case 3:if(!(Object.keys(this.$store.getters["sections/sections"]).length<2)){e.next=6;break}return e.next=6,this.$store.dispatch("sections/fetchSections");case 6:console.log("this.page: ",this.page),console.log("this.form: ",this.form),this.form.fill(this.page),this.pageSections=this.page.sections;case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),mounted:function(){var e=d(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),data:function(){return{form:new i.a({id:"",name:"",content:"",is_published:!1}),showHTML:!1,pageSections:[]}},computed:{loading:function(){return this.$store.getters["loading/loading"]},sponsors:function(){return this.$store.getters["sponsors/sponsors"]},pages:function(){return this.$store.getters["pages/pages"]},page:function(){return this.$store.getters["pages/pages"][this.$route.params.id]},sections:function(){return this.$store.getters["sections/sections"]},sectionsArray:function(){var e=this,t=[];return Object.keys(this.sections).forEach(function(o){return t.push(e.sections[o])}),t}},methods:{toggleShowHTML:function(e){console.log("toggleShowHTML2: ",e),this.showHTML=e},updatePage:function(){var e=d(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("updatePage: ",this.form),this.$store.commit("loading/SET_LOADING",!0),t=this.showHTML?document.getElementById("textBox").innerText:document.getElementById("textBox").innerHTML,console.log("content: ",t),this.form.content=t,this.form.sections=this.pageSections.map(function(e){return parseInt(e.id)}),console.log("this.form: ",this.form),e.next=10,this.$store.dispatch("pages/updatePage",this.form);case 10:this.$store.commit("loading/SET_LOADING",!1),this.$noty.success("Page mise à jour avec succès!"),this.$router.push("/admin/pages"),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),this.$store.commit("loading/SET_LOADING",!1),console.log("error: ",e.t0),this.$noty.error("Une erreur est survenue et la page n'a pas pu être mise à jour.");case 20:case"end":return e.stop()}},e,this,[[0,15]])}));return function(){return e.apply(this,arguments)}}()}},f=o(1),g=Object(f.a)(m,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",[o("b-breadcrumb",[o("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/pages"}},[o("font-awesome-icon",{attrs:{icon:"file"}}),e._v(" "),o("span",[e._v("Pages")])],1),e._v(" "),o("b-breadcrumb-item",{attrs:{active:""}},[e._v("Editer")])],1),e._v(" "),e.page?o("h2",{staticClass:"text-center"},[e._v('Editer page "'+e._s(e.page.name)+'"')]):e._e(),e._v(" "),o("b-row",{staticClass:"justify-content-center"},[o("b-col",{attrs:{cols:"12",md:"8"}},[o("b-form",{on:{submit:function(t){return t.preventDefault(),e.updatePage(t)}}},[o("b-row",{staticClass:"justify-content-start my-3 px-3",attrs:{"align-v":"center"}},[o("b-col",{attrs:{cols:"12"}},[o("b-form-group",{attrs:{label:"Nom:","label-for":"name"}},[o("b-form-input",{class:{"is-invalid":e.form.errors.has("name")},attrs:{id:"name",name:"name",placeholder:"Nom de la page"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"name"}})],1)],1),e._v(" "),o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[o("b-form-group",{attrs:{label:"Sections:"}},[o("multiselect",{attrs:{"tag-placeholder":"Add this as new tag",placeholder:"Search or add a tag",label:"name","track-by":"id",options:e.sectionsArray,multiple:!0,taggable:!0},model:{value:e.pageSections,callback:function(t){e.pageSections=t},expression:"pageSections"}})],1)],1),e._v(" "),o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[o("b-form-checkbox",{attrs:{id:"is_published",name:"is_published",value:"1","unchecked-value":"0"},model:{value:e.form.is_published,callback:function(t){e.$set(e.form,"is_published",t)},expression:"form.is_published"}},[e._v("\n                            Publié?\n                        ")])],1),e._v(" "),e.page?o("b-col",{attrs:{cols:"12"}},[o("text-editor",{attrs:{formContent:e.page.content},on:{toggleShowHTML:e.toggleShowHTML}})],1):e._e()],1),e._v(" "),o("b-row",{staticClass:"justify-content-center my-2"},[o("b-button",{attrs:{variant:"primary",disabled:e.loading,type:"submit"}},[e.loading?o("b-spinner",{attrs:{small:"",type:"grow"}}):e._e(),e._v("\n                        Editer la page\n                    ")],1)],1),e._v(" "),o("b-row",{staticClass:"justify-content-center"},[o("b-alert",{attrs:{variant:"danger",dismissible:"",show:e.form.errors.any()}},[e._v("Erreur lors de l'envoi. Veuillez vérifier la validité des champs.")])],1)],1)],1)],1)],1)},[],!1,null,"2c6c9587",null);t.default=g.exports},14:function(e,t,o){"use strict";var n=o(34),s=o(35),a=o(32),i=o(33),r={components:{ImagesModal:n.a,DocumentsModal:s.a,CreateLinkModal:a.a,ImageProperties:i.a},props:["formContent"],created:function(){},mounted:function(){this.content=this.formContent},data:function(){return{content:"",showHTML:!1,checked:!1,showImagesModal:!1,showDocumentsModal:!1,showCreateLinkModal:!1,selectedImageNode:null,selectedImageProps:{width:0,height:0,style:{}},selectedText:"",focused:!1,selRange:null}},computed:{},methods:{toggleShowHTML:function(){this.showHTML?this.content=document.getElementById("textBox").innerText:this.content=document.getElementById("textBox").innerHTML,this.showHTML=!this.showHTML,this.$emit("toggleShowHTML",this.showHTML)},selectElement:function(e){this.selectedImageNode=null,console.log("selectElement: ",e);var t=e.target.tagName.toLowerCase();console.log("element: ",t),"img"===t&&(console.log("img!"),this.selectedImageNode=e.target,this.selectedImageProps.width=e.target.width,this.selectedImageProps.height=e.target.height,this.selectedImageProps.style["margin-left"]=e.target.style["margin-left"]?e.target.style["margin-left"].match(/\d/g).join(""):0,this.selectedImageProps.style["margin-right"]=e.target.style["margin-right"]?e.target.style["margin-right"].match(/\d/g).join(""):0,this.selectedImageProps.style.float=e.target.style.float)},updateSelectedImageProperties:function(e,t){console.log("updateSelectedImageProperties2: ",e,t),console.log("selectedImageNode: ",this.selectedImageNode),"width"!==t&&"height"!==t||(this.selectedImageNode[t]=e),"marginLeft"===t&&(this.selectedImageNode.style.marginLeft="".concat(e,"px")),"marginRight"===t&&(this.selectedImageNode.style.marginRight="".concat(e,"px")),"float"===t&&(this.selectedImageNode.style.float=e)},openImagesModal:function(){var e=this;console.log("openImagesModal"),this.showImagesModal=!0,setTimeout(function(){e.$bvModal.show("imagesModal")},300)},openDocumentsModal:function(){var e=this;console.log("openDocumentsModal"),this.showDocumentsModal=!0,setTimeout(function(){e.$bvModal.show("documentsModal")},300)},openCreateLinkModal:function(){var e=this;console.log("openCreateLinkModal"),this.selectedText=window.getSelection().toString()||"Lien",this.selRange=this.saveSelection(),this.showCreateLinkModal=!0,setTimeout(function(){e.$bvModal.show("createLinkModal")},300)},insertImage:function(e){console.log("insertImage2: ",e),this.showModal=!1;var t="/images/".concat(e);this.formatDoc("insertImage",t)},insertDocument:function(e,t,o){console.log("insertDocument",e,t,o),this.formatDoc("insertHTML",'<a href="/documents/'.concat(e,'" type="').concat(t,'" title="').concat(o,'" target="_blank">').concat(o,"</a>"))},insertLink:function(e){var t,o=e.linkType,n=e.linkPage;console.log("insertLink",o,n),t="external"===o?'<a href="'.concat(n.external,'">').concat(this.selectedText,"</a>"):'<router-link to="/'.concat(n.internal.slug,'"><span class="link">').concat(this.selectedText,"</span></router-link>"),this.restoreSelection(this.selRange),document.getElementById("textBox").focus(),this.insertTextAtCursor(t)},formatDoc:function(e,t){document.execCommand(e,!1,t)},saveSelection:function(){var e;if(window.getSelection){if((e=window.getSelection()).getRangeAt&&e.rangeCount)return e.getRangeAt(0)}else if(document.selection&&document.selection.createRange)return document.selection.createRange();return null},restoreSelection:function(e){var t;e&&(window.getSelection?((t=window.getSelection()).removeAllRanges(),t.addRange(e)):document.selection&&e.select&&e.select())},insertTextAtCursor:function(e){var t,o;if(window.getSelection){if((t=window.getSelection()).getRangeAt&&t.rangeCount){(o=t.getRangeAt(0)).deleteContents();var n=document.createElement("div");n.innerHTML=e;for(var s,a,i=document.createDocumentFragment();s=n.firstChild;)a=i.appendChild(s);o.insertNode(i),a&&((o=o.cloneRange()).setStartAfter(a),o.collapse(!0),t.removeAllRanges(),t.addRange(o))}}else document.selection&&document.selection.createRange&&((o=document.selection.createRange()).pasteHTML(e),o.select())}}},c=(o(263),o(1)),l=Object(c.a)(r,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-form-group",{attrs:{label:"Contenu de la page:"}},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Gras"},on:{click:function(t){return t.preventDefault(),e.formatDoc("bold")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"bold"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Italic"},on:{click:function(t){return t.preventDefault(),e.formatDoc("italic")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"italic"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Souligné"},on:{click:function(t){return t.preventDefault(),e.formatDoc("underline")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"underline"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Aligner à gauche"},on:{click:function(t){return t.preventDefault(),e.formatDoc("justifyleft")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"align-left"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Aligner au centre"},on:{click:function(t){return t.preventDefault(),e.formatDoc("justifycenter")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"align-center"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Aligner à droite"},on:{click:function(t){return t.preventDefault(),e.formatDoc("justifyright")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"align-right"}})],1),e._v(" "),o("b-button",{staticClass:"mx-.5",attrs:{variant:"primary",title:"Liste point"},on:{click:function(t){return t.preventDefault(),e.formatDoc("insertUnorderedList")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"list-ul"}})],1),e._v(" "),o("b-button",{staticClass:"mx-.5",attrs:{variant:"primary",title:"Liste nombre"},on:{click:function(t){return t.preventDefault(),e.formatDoc("insertOrderedList")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"list-ol"}})],1),e._v(" "),o("b-button",{staticClass:"mx-.5",attrs:{variant:"primary",title:"Lien"},on:{click:function(t){return t.preventDefault(),e.openCreateLinkModal(t)}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"link"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"secondary",title:"Ajouter image",disabled:!e.focused},on:{mousedown:function(t){t.preventDefault(),e.focused=!0},click:function(t){return t.preventDefault(),e.openImagesModal(t)}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"image"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"secondary",title:"Ajouter PDF",disabled:!e.focused},on:{mousedown:function(t){t.preventDefault(),e.focused=!0},click:function(t){return t.preventDefault(),e.openDocumentsModal(t)}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"file-pdf"}})],1),e._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"dark",title:"Voir code"},on:{click:e.toggleShowHTML}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"code"}})],1),e._v(" "),e.selectedImageNode?o("b-row",{staticClass:"justify-content-center my-2",attrs:{"no-gutters":""}},[o("b-col",{attrs:{cols:"12"}},[o("image-properties",{attrs:{selectedImageProps:e.selectedImageProps},on:{updateSelectedImageProperties:e.updateSelectedImageProperties}})],1)],1):e._e(),e._v(" "),e.showHTML?o("div",{staticClass:"mt-1",attrs:{contenteditable:"true",id:"textBox"},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1}}},[o("pre",{},[e._v(e._s(e.content))])]):o("div",{staticClass:"mt-1",attrs:{contenteditable:"true",id:"textBox"},domProps:{innerHTML:e._s(e.content)},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},click:e.selectElement}})],1),e._v(" "),e.showImagesModal?o("images-modal",{on:{insertImage:e.insertImage,closeImagesModal:function(t){e.showImagesModal=!1}}}):e._e(),e._v(" "),e.showDocumentsModal?o("documents-modal",{on:{insertDocument:e.insertDocument,closeDocumentsModal:function(t){e.showDocumentsModal=!1}}}):e._e(),e._v(" "),e.showCreateLinkModal?o("create-link-modal",{attrs:{selectedText:e.selectedText},on:{insertLink:e.insertLink,closeLinkModal:function(t){e.showCreateLinkModal=!1}}}):e._e()],1)},[],!1,null,"03cf390f",null);t.a=l.exports},263:function(e,t,o){"use strict";var n=o(30);o.n(n).a},264:function(e,t,o){(e.exports=o(7)(!1)).push([e.i,"#textBox[data-v-03cf390f] {\n  width: 100%;\n  height: 350px;\n  border: 6px double #E1B124;\n  padding: 12px;\n  overflow: scroll;\n}\n#textBox #sourceText[data-v-03cf390f] {\n  padding: 0;\n  margin: 0;\n  min-width: 498px;\n  min-height: 200px;\n}\n.overlay[data-v-03cf390f] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #008cba;\n}\n[data-v-03cf390f] #textBox img:hover {\n  cursor: pointer;\n  opacity: 0.5;\n  transition: 0.5s ease;\n  background-color: #2C5CAD;\n}\n[data-v-03cf390f] #textBox .link {\n  color: #2c5cad;\n}\n[data-v-03cf390f] #textBox .link:hover {\n  color: #1c3c70;\n  text-decoration: underline;\n}\n#editMode label[data-v-03cf390f] {\n  cursor: pointer;\n}\n.intLink[data-v-03cf390f] {\n  cursor: pointer;\n}\nimg.intLink[data-v-03cf390f] {\n  border: 1px solid #000;\n}\n.disabled[data-v-03cf390f]:hover {\n  cursor: not-allowed;\n  color: #000;\n}\npre[data-v-03cf390f] {\n  overflow-x: auto;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}",""])},30:function(e,t,o){var n=o(264);"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(8)(n,s);n.locals&&(e.exports=n.locals)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{101:function(t,e,o){"use strict";o.r(e);var n=o(0),s=o.n(n),a=o(5),i=o.n(a),r=o(11),c=o.n(r),l=o(17),m=o(15),u=o(16),d=o(19);function p(t,e,o,n,s,a,i){try{var r=t[a](i),c=r.value}catch(t){return void o(t)}r.done?e(c):Promise.resolve(c).then(n,s)}function f(t){return function(){var e=this,o=arguments;return new Promise(function(n,s){var a=t.apply(e,o);function i(t){p(a,n,s,i,r,"next",t)}function r(t){p(a,n,s,i,r,"throw",t)}i(void 0)})}}var g={components:{Multiselect:c.a,ImagesModal:l.a,DocumentsModal:m.a,CreateLinkModal:u.a,ImageProperties:d.a},created:function(){var t=f(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){var t=f(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$store.getters["pages/pages"][this.$route.params.id]){t.next=3;break}return t.next=3,this.$store.dispatch("pages/fetchPageById",{pageId:this.$route.params.id});case 3:if(!(Object.keys(this.$store.getters["sections/sections"]).length<2)){t.next=6;break}return t.next=6,this.$store.dispatch("sections/fetchSections");case 6:console.log("this.page: ",this.page),console.log("this.form: ",this.form),this.form.fill(this.page),this.pageSections=this.page.sections;case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{form:new i.a({id:"",name:"",content:"",is_published:!1}),showHTML:!1,focused:!1,showImagesModal:!1,showDocumentsModal:!1,selectedImageNode:null,showCreateLinkModal:!1,selectedImageProps:{width:0,height:0,style:{}},pageSections:[]}},computed:{loading:function(){return this.$store.getters["loading/loading"]},sponsors:function(){return this.$store.getters["sponsors/sponsors"]},pages:function(){return this.$store.getters["pages/pages"]},page:function(){return this.$store.getters["pages/pages"][this.$route.params.id]},sections:function(){return this.$store.getters["sections/sections"]},sectionsArray:function(){var t=this,e=[];return Object.keys(this.sections).forEach(function(o){return e.push(t.sections[o])}),e}},methods:{toggleShowHTML:function(){this.showHTML?this.form.content=document.getElementById("textBox").innerText:this.form.content=document.getElementById("textBox").innerHTML,this.showHTML=!this.showHTML},selectElement:function(t){this.selectedImageNode=null,console.log("selectElement: ",t);var e=t.target.tagName.toLowerCase();console.log("element: ",e),"img"===e&&(console.log("img!"),this.selectedImageNode=t.target,this.selectedImageProps.width=t.target.width,this.selectedImageProps.height=t.target.height,this.selectedImageProps.style["margin-left"]=t.target.style["margin-left"]?t.target.style["margin-left"].match(/\d/g).join(""):0,this.selectedImageProps.style["margin-right"]=t.target.style["margin-right"]?t.target.style["margin-right"].match(/\d/g).join(""):0,this.selectedImageProps.style.float=t.target.style.float)},updateSelectedImageProperties:function(t,e){console.log("updateSelectedImageProperties2: ",t,e),console.log("selectedImageNode: ",this.selectedImageNode),"width"!==e&&"height"!==e||(this.selectedImageNode[e]=t),"margin"===e&&(this.selectedImageNode.style.margin="".concat(t,"px")),"marginRight"===e&&(this.selectedImageNode.style.marginRight="".concat(t,"px")),"float"===e&&(this.selectedImageNode.style.float=t)},openImagesModal:function(){var t=this;console.log("openImagesModal"),this.showImagesModal=!0,setTimeout(function(){t.$bvModal.show("imagesModal")},300)},openDocumentsModal:function(){var t=this;console.log("openDocumentsModal"),this.showDocumentsModal=!0,setTimeout(function(){t.$bvModal.show("documentsModal")},300)},openCreateLinkModal:function(){var t=this;console.log("openCreateLinkModal"),this.showCreateLinkModal=!0,setTimeout(function(){t.$bvModal.show("createLinkModal")},300)},insertImage:function(t){console.log("insertImage: ",t);var e="/images/".concat(t);document.execCommand("insertImage",!1,e)},insertDocument:function(t,e,o){console.log("insertDocument",t,e,o),this.formatDoc("insertHTML",'<a href="/documents/'.concat(t,'" type="').concat(e,'" title="').concat(o,'" target="_blank">').concat(o,"</a>"))},insertLink:function(t){console.log("insertLink: ",t),this.formatDoc("createLink",t)},formatDoc:function(t,e){document.execCommand(t,!1,e)},updatePage:function(){var t=f(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("updatePage: ",this.form),this.$store.commit("loading/SET_LOADING",!0),e=this.showHTML?document.getElementById("textBox").innerText:document.getElementById("textBox").innerHTML,console.log("content: ",e),this.form.content=e,this.form.sections=this.pageSections.map(function(t){return parseInt(t.id)}),console.log("this.form: ",this.form),t.next=10,this.$store.dispatch("pages/updatePage",this.form);case 10:this.$store.commit("loading/SET_LOADING",!1),this.$noty.success("Page mise à jour avec succès!"),this.$router.push("/admin/pages"),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),this.$store.commit("loading/SET_LOADING",!1),console.log("error: ",t.t0),this.$noty.error("Une erreur est survenue et la page n'a pas pu être mise à jour.");case 20:case"end":return t.stop()}},t,this,[[0,15]])}));return function(){return t.apply(this,arguments)}}()}},h=(o(281),o(2)),v=Object(h.a)(g,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",[o("b-breadcrumb",[o("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/pages"}},[o("font-awesome-icon",{attrs:{icon:"folder"}}),t._v(" "),o("span",[t._v("Pages")])],1),t._v(" "),o("b-breadcrumb-item",{attrs:{active:""}},[t._v("Editer")])],1),t._v(" "),t.page?o("h2",{staticClass:"text-center"},[t._v('Editer page "'+t._s(t.page.name)+'"')]):t._e(),t._v(" "),o("b-form",{on:{submit:function(e){return e.preventDefault(),t.updatePage(e)}}},[o("b-row",{staticClass:"justify-content-start my-3 px-3",attrs:{"align-v":"center"}},[o("b-col",{attrs:{cols:"12"}},[o("b-form-group",{attrs:{label:"Titre:","label-for":"name"}},[o("b-form-input",{class:{"is-invalid":t.form.errors.has("name")},attrs:{id:"name",name:"name",placeholder:"Titre de la page"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"name"}})],1)],1),t._v(" "),o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[o("b-form-group",{attrs:{label:"Sections:"}},[o("multiselect",{attrs:{"tag-placeholder":"Add this as new tag",placeholder:"Search or add a tag",label:"name","track-by":"id",options:t.sectionsArray,multiple:!0,taggable:!0},model:{value:t.pageSections,callback:function(e){t.pageSections=e},expression:"pageSections"}})],1)],1),t._v(" "),o("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[o("b-form-checkbox",{attrs:{id:"is_published",name:"is_published",value:"1","unchecked-value":"0"},model:{value:t.form.is_published,callback:function(e){t.$set(t.form,"is_published",e)},expression:"form.is_published"}},[t._v("\n                    Publié?\n                ")])],1),t._v(" "),o("b-col",{attrs:{cols:"12"}},[o("b-form-group",{attrs:{label:"Contenu de la page:","label-for":"newPageContent"}},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Gras"},on:{click:function(e){return e.preventDefault(),t.formatDoc("bold")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"bold"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Italic"},on:{click:function(e){return e.preventDefault(),t.formatDoc("italic")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"italic"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Souligné"},on:{click:function(e){return e.preventDefault(),t.formatDoc("underline")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"underline"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Aligner à gauche"},on:{click:function(e){return e.preventDefault(),t.formatDoc("justifyleft")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"align-left"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Aligner au centre"},on:{click:function(e){return e.preventDefault(),t.formatDoc("justifycenter")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"align-center"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"primary",title:"Aligner à droite"},on:{click:function(e){return e.preventDefault(),t.formatDoc("justifyright")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"align-right"}})],1),t._v(" "),o("b-button",{staticClass:"mx-.5",attrs:{variant:"primary",title:"Liste point"},on:{click:function(e){return e.preventDefault(),t.formatDoc("insertUnorderedList")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"list-ul"}})],1),t._v(" "),o("b-button",{staticClass:"mx-.5",attrs:{variant:"primary",title:"Liste nombre"},on:{click:function(e){return e.preventDefault(),t.formatDoc("insertOrderedList")}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"list-ol"}})],1),t._v(" "),o("b-button",{staticClass:"mx-.5",attrs:{variant:"primary",title:"Lien"},on:{click:function(e){return e.preventDefault(),t.openCreateLinkModal(e)}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"link"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"secondary",title:"Ajouter image",disabled:!t.focused},on:{mousedown:function(e){e.preventDefault(),t.focused=!0},click:function(e){return e.preventDefault(),t.openImagesModal(e)}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"image"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"secondary",title:"Ajouter PDF",disabled:!t.focused},on:{mousedown:function(e){e.preventDefault(),t.focused=!0},click:function(e){return e.preventDefault(),t.openDocumentsModal(e)}}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"file-pdf"}})],1),t._v(" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-.5",attrs:{variant:"dark",title:"Voir code"},on:{click:t.toggleShowHTML}},[o("font-awesome-icon",{attrs:{size:"1x",icon:"code"}})],1),t._v(" "),t.selectedImageNode?o("b-row",{staticClass:"justify-content-center my-2",attrs:{"no-gutters":""}},[o("b-col",{attrs:{cols:"12"}},[o("image-properties",{attrs:{selectedImageProps:t.selectedImageProps},on:{updateSelectedImageProperties:t.updateSelectedImageProperties}})],1)],1):t._e(),t._v(" "),t.showHTML?o("div",{staticClass:"mt-1",attrs:{contenteditable:"true",id:"textBox"},on:{focus:function(e){t.focused=!0},blur:function(e){t.focused=!1}}},[o("pre",{},[t._v(t._s(t.form.content))])]):o("div",{staticClass:"mt-1",attrs:{contenteditable:"true",id:"textBox"},domProps:{innerHTML:t._s(t.form.content)},on:{focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},click:t.selectElement}})],1)],1)],1),t._v(" "),o("b-row",{staticClass:"justify-content-center my-2"},[o("b-button",{attrs:{variant:"primary",disabled:t.loading,type:"submit"}},[t.loading?o("b-spinner",{attrs:{small:"",type:"grow"}}):t._e(),t._v("\n                Editer la page\n            ")],1)],1)],1),t._v(" "),t.showImagesModal?o("images-modal",{on:{insertImage:t.insertImage,closeImagesModal:function(e){t.showImagesModal=!1}}}):t._e(),t._v(" "),t.showDocumentsModal?o("documents-modal",{on:{insertDocument:t.insertDocument,closeDocumentsModal:function(e){t.showDocumentsModal=!1}}}):t._e(),t._v(" "),t.showCreateLinkModal?o("create-link-modal",{on:{insertLink:t.insertLink,closeLinkModal:function(e){t.showCreateLinkModal=!1}}}):t._e()],1)},[],!1,null,"dbb64e2e",null);e.default=v.exports},281:function(t,e,o){"use strict";var n=o(43);o.n(n).a},282:function(t,e,o){(t.exports=o(7)(!1)).push([t.i,"#textBox[data-v-dbb64e2e] {\n  width: 100%;\n  height: 250px;\n  padding: 12px;\n  overflow: scroll;\n  border: 6px double #E1B124;\n}\n#textBox #sourceText[data-v-dbb64e2e] {\n  padding: 10px;\n  margin: 0;\n  min-width: 498px;\n  min-height: 200px;\n}\n[data-v-dbb64e2e] #textBox img:hover {\n  cursor: pointer;\n  border: 2px solid #2C5CAD;\n}\n#editMode label[data-v-dbb64e2e] {\n  cursor: pointer;\n}\n.intLink[data-v-dbb64e2e] {\n  cursor: pointer;\n}\nimg.intLink[data-v-dbb64e2e] {\n  border: 1px solid #000;\n}\npre[data-v-dbb64e2e] {\n  overflow-x: auto;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}",""])},43:function(t,e,o){var n=o(282);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(8)(n,s);n.locals&&(t.exports=n.locals)}}]);
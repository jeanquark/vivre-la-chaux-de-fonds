(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{278:function(t,e,r){"use strict";var a=r(41);r.n(a).a},279:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,'[data-v-311828bd] .header-picker {\n  background-color: #2C5CAD !important;\n}\n[data-v-311828bd] .custom-button-content {\n  color: #2C5CAD !important;\n}\n[data-v-311828bd] .datepicker-day-effect {\n  background: #2C5CAD !important;\n}\n[data-v-311828bd] .datepicker-button-content {\n  color: #2C5CAD !important;\n}\n[data-v-311828bd] .datepicker-button svg {\n  fill: #2C5CAD !important;\n}\n[data-v-311828bd] .datepicker-button-effect {\n  background: #2C5CAD !important;\n}\n[data-v-311828bd] .field-input:focus {\n  border: 1px solid #2C5CAD !important;\n}\n[data-v-311828bd] .field-label {\n  color: #2C5CAD !important;\n}\n[data-v-311828bd] .time-picker-column-item-effect {\n  background-color: #2C5CAD !important;\n}\n[data-v-311828bd] .custom-file-label::after {\n  content: "Parcourir" !important;\n}\n[data-v-311828bd] .b-form-file.is-invalid {\n  outline: #dc3545 solid 1px;\n}',""])},41:function(t,e,r){var a=r(279);"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r(7)(a,s);a.locals&&(t.exports=a.locals)},87:function(t,e,r){"use strict";r.r(e);var a=r(0),s=r.n(a),o=(r(4),r(5)),n=r.n(o),i=r(15),l=r.n(i),c=(r(34),r(11)),m=r.n(c);function u(t,e,r,a,s,o,n){try{var i=t[o](n),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(a,s)}function f(t){return function(){var e=this,r=arguments;return new Promise(function(a,s){var o=t.apply(e,r);function n(t){u(o,a,s,n,i,"next",t)}function i(t){u(o,a,s,n,i,"throw",t)}n(void 0)})}}var d={layout:"backend",components:{VueCtkDateTimePicker:l.a,Multiselect:m.a},created:function(){var t=f(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Object.keys(this.$store.getters["sponsors/sponsors"]).length<2)){t.next=3;break}return t.next=3,this.$store.dispatch("sponsors/fetchSponsors");case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){},data:function(){return{form:new n.a({name:"",subtitle:"",content:"",start_date:"",end_date:"",link:"",image:null,is_published:!1,sponsors:[],images:[]}),activitySponsors:[],imagePreview:null,imagePreviewArray:[]}},computed:{loading:function(){return this.$store.getters["loading/loading"]},sponsors:function(){return this.$store.getters["sponsors/sponsors"]},sponsorsArray:function(){var t=this,e=[];return Object.keys(this.sponsors).forEach(function(r){return e.push(t.sponsors[r])}),e}},methods:{selectFile:function(t){this.form.image=t.target.files[0],this.imagePreview=URL.createObjectURL(t.target.files[0])},selectFiles:function(t){if(console.log("selectFiles e: ",t),t.target.files.length>0){for(var e=0;e<t.target.files.length;e++)this.form.images.push(t.target.files[e]);this.$refs.fileInput.reset()}for(var r=0;r<this.form.images.length;r++)this.imagePreviewArray[r]=URL.createObjectURL(this.form.images[r])},removeImage:function(t){console.log("removeImage: ",t),this.form.images=this.form.images.filter(function(e){return e.name!==t})},createActivity:function(){var t=f(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("form: ",this.form),console.log("form.images: ",this.form.images),this.$store.commit("loading/SET_LOADING",!0),this.form.sponsors=this.activitySponsors.map(function(t){return parseInt(t.id)}),t.next=7,this.$store.dispatch("activities/createActivity",this.form);case 7:this.$store.commit("loading/SET_LOADING",!1),this.$noty.success("Nouvelle activité créée avec succès!"),this.$router.push("/admin/activities"),t.next=18;break;case 12:t.prev=12,t.t0=t.catch(0),this.$store.commit("loading/SET_LOADING",!1),console.log("error: ",t.t0),console.log("error.response: ",t.t0.response),this.$noty.error("Une erreur est survenue et l'activité n'a pas pu être créée.");case 18:case"end":return t.stop()}},t,this,[[0,12]])}));return function(){return t.apply(this,arguments)}}()}},b=(r(278),r(2)),p=Object(b.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-breadcrumb",[r("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/activities"}},[r("font-awesome-icon",{attrs:{icon:"calendar-day"}}),t._v(" "),r("span",[t._v("Activités")])],1),t._v(" "),r("b-breadcrumb-item",{attrs:{active:""}},[t._v("Créer")])],1),t._v(" "),r("h2",{staticClass:"text-center"},[t._v("Créer une nouvelle activité")]),t._v(" "),r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{cols:"12",md:"8",lg:"6"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.createActivity(e)}}},[r("b-row",{staticClass:"justify-content-start my-3 px-3",attrs:{"align-v":"center"}},[r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Nom:","label-for":"name"}},[r("b-form-input",{class:{"is-invalid":t.form.errors.has("name")},attrs:{id:"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)],1),t._v(" "),r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Sous-titre:","label-for":"subtitle"}},[r("b-form-input",{class:{"is-invalid":t.form.errors.has("subtitle")},attrs:{id:"subtitle"},model:{value:t.form.subtitle,callback:function(e){t.$set(t.form,"subtitle",e)},expression:"form.subtitle"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"subtitle"}})],1)],1),t._v(" "),r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Contenu:","label-for":"content"}},[r("b-form-textarea",{class:{"is-invalid":t.form.errors.has("content")},attrs:{id:"content",rows:"3","max-rows":"6"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"content"}})],1)],1),t._v(" "),r("b-col",{attrs:{cols:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Date de début:","label-for":"startDate"}},[r("VueCtkDateTimePicker",{attrs:{label:"Cliquer pour choisir une date",format:"YYYY-MM-DD HH:mm:ss",formatted:"YYYY-MM-DD HH:mm:ss","button-now-translation":"Aujourd'hui",id:"startDate"},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}})],1)],1),t._v(" "),r("b-col",{attrs:{cols:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Date de fin:","label-for":"endDate"}},[r("VueCtkDateTimePicker",{attrs:{label:"Cliquer pour choisir une date",format:"YYYY-MM-DD HH:mm:ss",formatted:"YYYY-MM-DD HH:mm:ss","button-now-translation":"Aujourd'hui",id:"endDate"},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}})],1)],1),t._v(" "),r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Lien vers le site web:","label-for":"link",description:"Doit commencer par http://www."}},[r("b-form-input",{class:{"is-invalid":t.form.errors.has("link")},attrs:{id:"link",name:"link",type:"text"},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"link"}})],1)],1),t._v(" "),r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("b-form-checkbox",{attrs:{id:"is_published",name:"is_published",value:"1","unchecked-value":"0"},model:{value:t.form.is_published,callback:function(e){t.$set(t.form,"is_published",e)},expression:"form.is_published"}},[t._v("\n                            Publié?\n                        ")])],1),t._v(" "),r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[t.form.image?r("div",{staticStyle:{"text-align":"center","margin-bottom":"20px"},attrs:{id:"preview"}},[t._v("\n                            Nouvelle image:"),r("br"),t._v(" "),t.imagePreview?r("img",{staticStyle:{width:"150px"},attrs:{src:t.imagePreview}}):t._e()]):t._e(),t._v(" "),r("b-form-file",{class:{"is-invalid":t.form.errors.has("image")},attrs:{accept:"image/jpeg, image/png",placeholder:"Sélectionner une nouvelle image...","drop-placeholder":"Placer votre image ici..."},on:{change:t.selectFile}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"image"}})],1),t._v(" "),r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Sponsors:"}},[r("multiselect",{attrs:{"tag-placeholder":"Ajouter comme nouveau sponsor",placeholder:"Chercher et ajouter un sponsor",label:"name","track-by":"id",options:t.sponsorsArray,multiple:!0,taggable:!0},model:{value:t.activitySponsors,callback:function(e){t.activitySponsors=e},expression:"activitySponsors"}})],1)],1)],1),t._v(" "),r("b-row",{staticClass:"justify-content-center my-3 px-3"},[r("b-col",{staticClass:"my-0",attrs:{cols:"12"}},[t._v("\n                        Gallerie d'images:"),r("br"),t._v(" "),r("b-form-file",{ref:"fileInput",attrs:{accept:"image/jpeg, image/png",placeholder:"Sélectionner de nouvelles images...","drop-placeholder":"Placer vos images ici...",multiple:""},on:{change:t.selectFiles}}),t._v(" "),r("b-row",t._l(t.form.images,function(e,a){return r("b-col",{key:a,attrs:{cols:"12",sm:"4"}},[r("b-card",{staticClass:"mb-2",attrs:{title:"","img-src":t.imagePreviewArray[a],"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",{staticClass:"text-center"},[t._v("\n                                        "+t._s(e.name)+"\n                                    ")]),t._v(" "),r("div",{staticClass:"text-center"},[r("b-button",{attrs:{small:"",variant:"danger"},on:{click:function(r){return t.removeImage(e.name)}}},[t._v("Remove")])],1)],1)],1)}),1)],1)],1),t._v(" "),r("b-row",{staticClass:"justify-content-center my-2"},[r("b-button",{attrs:{variant:"primary",disabled:t.loading,type:"submit"}},[t.loading?r("b-spinner",{attrs:{small:"",type:"grow"}}):t._e(),t._v("\n                        Créer nouvelle activité\n                    ")],1)],1),t._v(" "),r("b-row",{staticClass:"justify-content-center"},[r("b-alert",{attrs:{variant:"danger",dismissible:"",show:t.form.errors.any()}},[t._v("Erreur lors de l'envoi. Veuillez vérifier la validité des champs.")])],1)],1)],1)],1)],1)},[],!1,null,"311828bd",null);e.default=p.exports}}]);
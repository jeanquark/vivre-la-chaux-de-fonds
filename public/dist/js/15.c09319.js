(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{106:function(t,e,a){"use strict";a.r(e);var r=a(0),o=a.n(r),s=a(5),i=a.n(s),n=a(14),c=a.n(n),l=(a(33),a(11)),u=a.n(l);function m(t,e,a,r,o,s,i){try{var n=t[s](i),c=n.value}catch(t){return void a(t)}n.done?e(c):Promise.resolve(c).then(r,o)}function f(t){return function(){var e=this,a=arguments;return new Promise(function(r,o){var s=t.apply(e,a);function i(t){m(s,r,o,i,n,"next",t)}function n(t){m(s,r,o,i,n,"throw",t)}i(void 0)})}}var d={layout:"backend",components:{VueCtkDateTimePicker:c.a,Multiselect:u.a},created:function(){var t=f(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){var t=f(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=parseInt(this.$route.params.id),console.log("activityId: ",e),this.$store.getters["activities/activities"][this.$route.params.id]){t.next=5;break}return t.next=5,this.$store.dispatch("activities/fetchActivityById",{activityId:this.$route.params.id});case 5:if(!(Object.keys(this.$store.getters["sponsors/sponsors"]).length<2)){t.next=8;break}return t.next=8,this.$store.dispatch("sponsors/fetchSponsors");case 8:console.log("this.activity: ",this.activity),console.log("this.form: ",this.form),this.form.fill(this.activity),this.activitySponsors=this.activity.sponsors;case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{form:new i.a({id:"",name:"",subtitle:"",content:"",start_date:"",end_date:"",image:null,new_image:null,is_published:!1,is_on_frontpage:!1,sponsors:[]}),activitySponsors:[]}},computed:{loading:function(){return this.$store.getters["loading/loading"]},activities:function(){return this.$store.getters["activities/activities"]},activity:function(){return this.$store.getters["activities/activities"][this.$route.params.id]},sponsors:function(){return this.$store.getters["sponsors/sponsors"]},sponsorsArray:function(){var t=this,e=[];return Object.keys(this.sponsors).forEach(function(a){return e.push(t.sponsors[a])}),e}},methods:{selectFile:function(t){this.form.new_image=t.target.files[0]},updateActivity:function(){var t=f(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("this.form: ",this.form),this.$store.commit("loading/SET_LOADING",!0),this.form.sponsors=this.activitySponsors.map(function(t){return parseInt(t.id)}),t.next=6,this.$store.dispatch("activities/updateActivity",this.form);case 6:this.$store.commit("loading/SET_LOADING",!1),this.$noty.success("Activité mise à jour avec succès!"),this.$router.push("/admin/activities"),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),this.$store.commit("loading/SET_LOADING",!1),console.log("error: ",t.t0),this.$noty.error("Une erreur est survenue et l'activité n'a pas pu être mise à jour.");case 16:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}()}},p=(a(267),a(2)),v=Object(p.a)(d,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-breadcrumb",[a("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/activities"}},[a("font-awesome-icon",{attrs:{icon:"calendar-day"}}),t._v(" "),a("span",[t._v("Activités")])],1),t._v(" "),a("b-breadcrumb-item",{attrs:{active:""}},[t._v("Editer")])],1),t._v(" "),t.activity?a("h2",{staticClass:"text-center"},[t._v('Editer activité "'+t._s(t.activity.name)+'"')]):t._e(),t._v(" "),a("b-row",{staticClass:"justify-content-center"},[a("b-col",{attrs:{cols:"12",md:"8",lg:"6"}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.updateActivity(e)}}},[a("b-row",{staticClass:"justify-content-start my-3 px-3",attrs:{"align-v":"center"}},[a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{label:"Nom:","label-for":"name"}},[a("b-form-input",{class:{"is-invalid":t.form.errors.has("name")},attrs:{id:"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"name"}})],1)],1),t._v(" "),a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{label:"Sous-titre:","label-for":"subtitle"}},[a("b-form-input",{class:{"is-invalid":t.form.errors.has("subtitle")},attrs:{id:"subtitle"},model:{value:t.form.subtitle,callback:function(e){t.$set(t.form,"subtitle",e)},expression:"form.subtitle"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"subtitle"}})],1)],1),t._v(" "),a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{label:"Contenu:","label-for":"content"}},[a("b-form-textarea",{class:{"is-invalid":t.form.errors.has("content")},attrs:{id:"content",placeholder:"",rows:"3","max-rows":"6"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"content"}})],1)],1),t._v(" "),a("b-col",{attrs:{cols:"12",md:"6"}},[a("b-form-group",{attrs:{label:"Date de début:","label-for":"startDate"}},[a("VueCtkDateTimePicker",{attrs:{label:"Cliquer pour choisir une date",format:"DD-MM-YYYY HH:mm",formatted:"DD-MM-YYYY HH-mm","button-now-translation":"Aujourd'hui",id:"startDate"},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}})],1)],1),t._v(" "),a("b-col",{attrs:{cols:"12",md:"6"}},[a("b-form-group",{attrs:{label:"Date de fin:","label-for":"endDate"}},[a("VueCtkDateTimePicker",{attrs:{label:"Cliquer pour choisir une date",format:"YYYY-MM-DD",formatted:"YYYY-MM-DD","button-now-translation":"Aujourd'hui","only-date":"",id:"endDate"},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}})],1)],1),t._v(" "),a("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[a("b-form-checkbox",{attrs:{id:"is_published",name:"is_published",value:"1","unchecked-value":"0"},model:{value:t.form.is_published,callback:function(e){t.$set(t.form,"is_published",e)},expression:"form.is_published"}},[t._v("\n                            Publié?\n                        ")])],1),t._v(" "),a("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[a("b-form-checkbox",{attrs:{id:"is_on_frontpage",name:"is_on_frontpage",value:"1","unchecked-value":"0"},model:{value:t.form.is_on_frontpage,callback:function(e){t.$set(t.form,"is_on_frontpage",e)},expression:"form.is_on_frontpage"}},[t._v("\n                            En première page?\n                        ")])],1),t._v(" "),a("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[a("p",{staticClass:"text-center"},[t._v("Image actuelle:")]),t._v(" "),a("b-img",{attrs:{center:"",src:"/images/"+t.form.image,width:"200"}})],1),t._v(" "),a("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[a("b-form-file",{class:{"is-invalid":t.form.errors.has("image_new")},attrs:{accept:"image/jpeg, image/png",placeholder:"Choisir un nouveau fichier...","drop-placeholder":"Placez votre fichier ici..."},on:{change:t.selectFile}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"image_new"}})],1),t._v(" "),a("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[a("b-form-group",{attrs:{label:"Sponsors:"}},[a("multiselect",{attrs:{"tag-placeholder":"Add this as new tag",placeholder:"Search or add a tag",label:"name","track-by":"id",options:t.sponsorsArray,multiple:!0,taggable:!0},model:{value:t.activitySponsors,callback:function(e){t.activitySponsors=e},expression:"activitySponsors"}})],1)],1)],1),t._v(" "),a("b-row",{staticClass:"justify-content-center my-2"},[a("b-button",{attrs:{variant:"primary",disabled:t.loading,type:"submit"}},[t.loading?a("b-spinner",{attrs:{small:"",type:"grow"}}):t._e(),t._v("\n                        Editer activité\n                    ")],1)],1)],1)],1)],1)],1)},[],!1,null,"3ab0ca3e",null);e.default=v.exports},267:function(t,e,a){"use strict";var r=a(36);a.n(r).a},268:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,'[data-v-3ab0ca3e] .header-picker {\n  background-color: #2C5CAD !important;\n}\n[data-v-3ab0ca3e] .custom-button-content {\n  color: #2C5CAD !important;\n}\n[data-v-3ab0ca3e] .datepicker-day-effect {\n  background: #2C5CAD !important;\n}\n[data-v-3ab0ca3e] .datepicker-button-content {\n  color: #2C5CAD !important;\n}\n[data-v-3ab0ca3e] .datepicker-button svg {\n  fill: #2C5CAD !important;\n}\n[data-v-3ab0ca3e] .datepicker-button-effect {\n  background: #2C5CAD !important;\n}\n[data-v-3ab0ca3e] .field-input:focus {\n  border: 1px solid #2C5CAD !important;\n}\n[data-v-3ab0ca3e] .field-label {\n  color: #2C5CAD !important;\n}\n[data-v-3ab0ca3e] .time-picker-column-item-effect {\n  background-color: #2C5CAD !important;\n}\n[data-v-3ab0ca3e] .custom-file-label::after {\n  content: "Parcourir" !important;\n}\n[data-v-3ab0ca3e] .b-form-file.is-invalid {\n  outline: #dc3545 solid 1px;\n}',""])},36:function(t,e,a){var r=a(268);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(8)(r,o);r.locals&&(t.exports=r.locals)}}]);
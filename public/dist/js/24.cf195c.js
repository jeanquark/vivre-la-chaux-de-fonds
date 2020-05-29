(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{111:function(t,e,r){"use strict";r.r(e);var s=r(0),o=r.n(s),i=r(5),a=r.n(i),n=r(15),c=r.n(n),l=(r(31),r(11)),u=r.n(l);function m(t,e,r,s,o,i,a){try{var n=t[i](a),c=n.value}catch(t){return void r(t)}n.done?e(c):Promise.resolve(c).then(s,o)}function p(t){return function(){var e=this,r=arguments;return new Promise(function(s,o){var i=t.apply(e,r);function a(t){m(i,s,o,a,n,"next",t)}function n(t){m(i,s,o,a,n,"throw",t)}a(void 0)})}}var f={layout:"backend",components:{VueCtkDateTimePicker:c.a,Multiselect:u.a},created:function(){var t=p(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){var t=p(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=parseInt(this.$route.params.id),console.log("sponsorId: ",e),this.$store.getters["sponsors/sponsors"][this.$route.params.id]){t.next=5;break}return t.next=5,this.$store.dispatch("sponsors/fetchSponsors",{id:this.$route.params.id});case 5:if(!(Object.keys(this.$store.getters["activities/activities"]).length<2)){t.next=8;break}return t.next=8,this.$store.dispatch("activities/fetchActivities");case 8:console.log("this.sponsor: ",this.sponsor),console.log("this.form: ",this.form),this.form.fill(this.sponsor),this.sponsorActivities=this.sponsor.activities;case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{form:new a.a({id:"",name:"",contribution:0,start_date:"",end_date:"",image:null,new_image:null,is_active:!1,activities:[]}),sponsorActivities:[]}},computed:{loading:function(){return this.$store.getters["loading/loading"]},activities:function(){return this.$store.getters["activities/activities"]},sponsors:function(){return this.$store.getters["sponsors/sponsors"]},sponsor:function(){return this.$store.getters["sponsors/sponsors"][this.$route.params.id]},activitiesArray:function(){var t=this,e=[];return Object.keys(this.activities).forEach(function(r){return e.push(t.activities[r])}),e}},methods:{selectFile:function(t){this.form.new_image=t.target.files[0]},updateSponsor:function(){var t=p(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("this.form: ",this.form),this.$store.commit("loading/SET_LOADING",!0),this.form.activities=this.sponsorActivities.map(function(t){return parseInt(t.id)}),t.next=6,this.$store.dispatch("sponsors/updateSponsor",this.form);case 6:this.$store.commit("loading/SET_LOADING",!1),this.$noty.success("Sponsor mis à jour avec succès!"),this.$router.push("/admin/sponsors"),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),this.$store.commit("loading/SET_LOADING",!1),console.log("error: ",t.t0),this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être mise à jour.");case 16:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}()}},d=(r(302),r(1)),v=Object(d.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-breadcrumb",[r("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/sponsors"}},[r("font-awesome-icon",{attrs:{icon:"dollar-sign"}}),t._v(" "),r("span",[t._v("Sponsors")])],1),t._v(" "),r("b-breadcrumb-item",{attrs:{active:""}},[t._v("Editer")])],1),t._v(" "),t.sponsor?r("h2",{staticClass:"text-center"},[t._v("Editer sponsor "),r("span",{staticClass:"primary-color"},[t._v(t._s(t.sponsor.name))])]):t._e(),t._v(" "),t.sponsor?r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{cols:"12",md:"8",lg:"6"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.updateSponsor(e)}}},[r("b-row",{staticClass:"justify-content-start my-3 px-3",attrs:{"align-v":"center"}},[r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Nom:","label-for":"name"}},[r("b-form-input",{class:{"is-invalid":t.form.errors.has("name")},attrs:{id:"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)],1),t._v(" "),r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Contribution (en francs):","label-for":"contribution",description:parseFloat(t.form.contribution).toFixed(2)+" CHF"}},[r("b-form-input",{class:{"is-invalid":t.form.errors.has("contribution")},attrs:{type:"number",id:"contribution",placeholder:""},model:{value:t.form.contribution,callback:function(e){t.$set(t.form,"contribution",e)},expression:"form.contribution"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"contribution"}})],1)],1),t._v(" "),r("b-col",{attrs:{cols:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Date de début:","label-for":"startDate"}},[r("VueCtkDateTimePicker",{attrs:{label:"Cliquer pour choisir une date",format:"YYYY-MM-DD",formatted:"YYYY-MM-DD","button-now-translation":"Aujourd'hui","only-date":"",id:"startDate"},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}})],1)],1),t._v(" "),r("b-col",{attrs:{cols:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Date de fin:","label-for":"endDate"}},[r("VueCtkDateTimePicker",{attrs:{label:"Cliquer pour choisir une date",format:"YYYY-MM-DD",formatted:"YYYY-MM-DD","button-now-translation":"Aujourd'hui","only-date":"",id:"endDate"},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}})],1)],1),t._v(" "),r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("b-form-checkbox",{attrs:{id:"is_active",name:"is_active",value:"1","unchecked-value":"0"},model:{value:t.form.is_active,callback:function(e){t.$set(t.form,"is_active",e)},expression:"form.is_active"}},[t._v("\n                            Actif?\n                        ")])],1),t._v(" "),t.form.image?r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("p",{staticClass:"text-center"},[t._v("Image actuelle:")]),t._v(" "),r("b-img",{attrs:{center:"",src:"/images/"+t.form.image,width:"200"}})],1):t._e(),t._v(" "),r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("b-form-file",{class:{"is-invalid":t.form.errors.has("image_new")},attrs:{accept:"image/jpeg, image/png",placeholder:"Choisir une nouvelle image...","drop-placeholder":"Placez votre image ici..."},on:{change:t.selectFile}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"image_new"}})],1),t._v(" "),r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Activités:"}},[r("multiselect",{attrs:{"tag-placeholder":"Ajouter comme nouveau tag",placeholder:"Chercher et ajouter un tag",label:"name","track-by":"id",options:t.activitiesArray,multiple:!0,taggable:!0},model:{value:t.sponsorActivities,callback:function(e){t.sponsorActivities=e},expression:"sponsorActivities"}})],1)],1)],1),t._v(" "),r("b-row",{staticClass:"justify-content-center my-2"},[r("b-button",{attrs:{variant:"primary",disabled:t.loading,type:"submit"}},[t.loading?r("b-spinner",{attrs:{small:"",type:"grow"}}):t._e(),t._v("\n                        Editer sponsor\n                    ")],1)],1),t._v(" "),r("b-row",{staticClass:"justify-content-center"},[r("b-alert",{attrs:{variant:"danger",dismissible:"",show:t.form.errors.any()}},[t._v("Erreur lors de l'envoi. Veuillez vérifier la validité des champs.")])],1)],1)],1)],1):t._e()],1)},[],!1,null,"1b2145b6",null);e.default=v.exports},302:function(t,e,r){"use strict";var s=r(52);r.n(s).a},303:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".primary-color[data-v-1b2145b6] {\n  color: #2C5CAD;\n}",""])},52:function(t,e,r){var s=r(303);"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(7)(s,o);s.locals&&(t.exports=s.locals)}}]);
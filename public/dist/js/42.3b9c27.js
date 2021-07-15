(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{100:function(t,e,r){"use strict";r.r(e);var o=r(0),a=r.n(o),s=r(5),i=r.n(s),n=r(15),c=r.n(n),l=(r(34),r(11)),u=r.n(l);function m(t,e,r,o,a,s,i){try{var n=t[s](i),c=n.value}catch(t){return void r(t)}n.done?e(c):Promise.resolve(c).then(o,a)}function p(t){return function(){var e=this,r=arguments;return new Promise(function(o,a){var s=t.apply(e,r);function i(t){m(s,o,a,i,n,"next",t)}function n(t){m(s,o,a,i,n,"throw",t)}i(void 0)})}}var f={layout:"backend",components:{VueCtkDateTimePicker:c.a,Multiselect:u.a},created:function(){var t=p(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Object.keys(this.$store.getters["activities/activities"]).length<2)){t.next=3;break}return t.next=3,this.$store.dispatch("activities/fetchActivities");case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){var t=parseInt(this.$route.params.id);console.log("userId: ",t)},data:function(){return{image:{},form:new i.a({name:"",contribution:0,type:"",start_date:"",end_date:"",link:"",image:null,is_active:!1,is_partner:!1,is_supporter:!1,activities:[]}),sponsorActivities:[]}},computed:{loading:function(){return this.$store.getters["loading/loading"]},activities:function(){return this.$store.getters["activities/activities"]},activitiesArray:function(){var t=this,e=[];return Object.keys(this.activities).forEach(function(r){return e.push(t.activities[r])}),e}},methods:{selectFile:function(t){this.form.image=t.target.files[0]},createSponsor:function(){var t=p(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("this.form: ",this.form),this.$store.commit("loading/SET_LOADING",!0),this.form.activities=this.sponsorActivities.map(function(t){return parseInt(t.id)}),t.next=6,this.$store.dispatch("sponsors/createSponsor",this.form);case 6:this.$store.commit("loading/SET_LOADING",!1),this.$noty.success("Sponsor créé avec succès!"),this.$router.push("/admin/sponsors"),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),this.$store.commit("loading/SET_LOADING",!1),console.log("error: ",t.t0),this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être créer.");case 16:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}()}},d=r(2),b=Object(d.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-breadcrumb",[r("b-breadcrumb-item",{staticClass:"navigation",attrs:{to:"/admin/sponsors"}},[r("font-awesome-icon",{attrs:{icon:"dollar-sign"}}),t._v(" "),r("span",[t._v("Sponsors")])],1),t._v(" "),r("b-breadcrumb-item",{attrs:{active:""}},[t._v("Créer")])],1),t._v(" "),r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{cols:"12",md:"8",lg:"6"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.createSponsor(e)}}},[r("b-row",{staticClass:"justify-content-start my-3 px-3",attrs:{"align-v":"center"}},[r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Nom:","label-for":"name"}},[r("b-form-input",{class:{"is-invalid":t.form.errors.has("name")},attrs:{id:"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)],1),t._v(" "),r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Contribution (en francs):","label-for":"contribution",description:parseFloat(t.form.contribution).toFixed(2)+" CHF"}},[r("b-form-input",{class:{"is-invalid":t.form.errors.has("contribution")},attrs:{type:"number",id:"contribution",placeholder:""},model:{value:t.form.contribution,callback:function(e){t.$set(t.form,"contribution",e)},expression:"form.contribution"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"contribution"}})],1)],1),t._v(" "),r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Un sponsor partenaire apparaît globalement sur le site."}},[r("b-form-checkbox",{attrs:{id:"partner",name:"partner",value:1,"unchecked-value":0},model:{value:t.form.is_partner,callback:function(e){t.$set(t.form,"is_partner",e)},expression:"form.is_partner"}},[t._v(" Sponsor partenaire ")])],1)],1),t._v(" "),r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Un sponsor soutien affiche 'Avec le soutien de...' dans la page de la manifestation. Texte uniquement, pas d'image."}},[r("b-form-checkbox",{attrs:{id:"supporter",name:"supporter",value:1,"unchecked-value":0},model:{value:t.form.is_supporter,callback:function(e){t.$set(t.form,"is_supporter",e)},expression:"form.is_supporter"}},[t._v("Sponsor soutien")])],1)],1),t._v(" "),r("b-col",{attrs:{cols:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Date de début:","label-for":"startDate"}},[r("VueCtkDateTimePicker",{attrs:{label:"Cliquer pour choisir une date",format:"YYYY-MM-DD",formatted:"YYYY-MM-DD","button-now-translation":"Aujourd'hui","only-date":"",id:"startDate"},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}})],1)],1),t._v(" "),r("b-col",{attrs:{cols:"12",md:"6"}},[r("b-form-group",{attrs:{label:"Date de fin:","label-for":"endDate"}},[r("VueCtkDateTimePicker",{attrs:{label:"Cliquer pour choisir une date",format:"YYYY-MM-DD",formatted:"YYYY-MM-DD","button-now-translation":"Aujourd'hui","only-date":"",id:"endDate"},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}})],1)],1),t._v(" "),t.form.is_supporter?t._e():r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Image (jpeg ou png, min 300px de largeur):"}},[r("b-form-file",{class:{"is-invalid":t.form.errors.has("image")},attrs:{accept:"image/jpeg, image/png",placeholder:"Choisir une nouvelle image...","drop-placeholder":"Placez votre image ici..."},on:{change:t.selectFile}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"image_new"}})],1)],1),t._v(" "),r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Activités:"}},[r("multiselect",{attrs:{"tag-placeholder":"Ajouter comme nouveau tag",placeholder:"Chercher et ajouter un tag",label:"name","track-by":"id",options:t.activitiesArray,multiple:!0,taggable:!0},model:{value:t.sponsorActivities,callback:function(e){t.sponsorActivities=e},expression:"sponsorActivities"}})],1)],1),t._v(" "),r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Lien vers le site web:","label-for":"link",description:"Doit commencer par http://www."}},[r("b-form-input",{class:{"is-invalid":t.form.errors.has("link")},attrs:{id:"link",name:"link",type:"text"},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"link"}})],1)],1),t._v(" "),r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Le sponsor doit-il s'afficher en ligne? (Un sponsor inactif n'apparaît pas)."}},[r("b-form-checkbox",{attrs:{id:"is_active",name:"is_active",value:1,"unchecked-value":0},model:{value:t.form.is_active,callback:function(e){t.$set(t.form,"is_active",e)},expression:"form.is_active"}},[t._v(" Actif? ")])],1)],1)],1),t._v(" "),r("b-row",{staticClass:"justify-content-center my-2"},[r("b-button",{attrs:{variant:"primary",disabled:t.loading,type:"submit"}},[t.loading?r("b-spinner",{attrs:{small:"",type:"grow"}}):t._e(),t._v("\n                        Créer sponsor\n                    ")],1)],1),t._v(" "),r("b-row",{staticClass:"justify-content-center"},[r("b-alert",{attrs:{variant:"danger",dismissible:"",show:t.form.errors.any()}},[t._v("Erreur lors de l'envoi. Veuillez vérifier les champs.")])],1)],1)],1)],1)],1)},[],!1,null,"331c3e5c",null);e.default=b.exports}}]);
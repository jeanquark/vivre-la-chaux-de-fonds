<template>
	<b-container>
		<b-breadcrumb>
            <b-breadcrumb-item to="/admin/activities" class="navigation">
				<font-awesome-icon icon="calendar-day" />
				<span>Activités</span>
			</b-breadcrumb-item>
            <b-breadcrumb-item active>Créer</b-breadcrumb-item>
        </b-breadcrumb>

		<h2 class="text-center">Créer une nouvelle activité</h2>
		<!-- form: {{ form }}<br /> -->
		<!-- tinymce_key: {{ tinymce_key }}<br /> -->
		<!-- sponsors: {{ sponsors }}<br /> -->

		<b-row class="justify-content-center">
            <b-col cols="12" md="8" lg="6">
                <b-form @submit.prevent="createUser">
                    <b-row align-v="center" class="justify-content-start my-3 px-3">
                        <b-col cols="12" md="6">
                            <b-form-group label="Prénom:" label-for="newUserFirstname">
                                <b-form-input id="newUserFirstname" placeholder="Prénom" :class="{ 'is-invalid': form.errors.has('firstname') }" v-model="form.firstname"></b-form-input>
                                <has-error :form="form" field="firstname" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <b-form-group label="Nom:" label-for="newUserLastname">
                                <b-form-input id="newUserLastname" placeholder="Nom" :class="{ 'is-invalid': form.errors.has('lastname') }" v-model="form.lastname"></b-form-input>
								<has-error :form="form" field="lastname" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <b-form-group  label="E-mail:" label-for="newUserEmail">
                                <b-form-input type="email" id="newUserEmail" placeholder="E-mail" :class="{ 'is-invalid': form.errors.has('email') }" v-model="form.email"></b-form-input>
								<has-error :form="form" field="email" />
                            </b-form-group>
                        </b-col>
                    </b-row>
					<b-row align-v="center" class="justify-content-start px-3">
                        <b-col cols="12">
                            <b-form-group  label="Mot de passe:" label-for="newUserPassword">
                                <b-form-input type="password" id="newUserPassword" placeholder="Mot de passe" :class="{ 'is-invalid': form.errors.has('password') }" v-model="form.password"></b-form-input>
								<has-error :form="form" field="password" />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12">
                            <b-form-group  label="Confirmation mot de passe:" label-for="newUserPasswordConfirmation">
                                <b-form-input type="password" id="newUserPasswordConfirmation" placeholder="Confirmation mot de passe" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" v-model="form.password_confirmation"></b-form-input>
								<has-error :form="form" field="password_confirmation" />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center my-2">
                        <b-button variant="primary" :disabled="loading" type="submit">
                            <b-spinner small type="grow" v-if="loading"></b-spinner>
                            Créer nouvel utilisateur
                        </b-button>
                    </b-row>
                </b-form>
            </b-col>
        </b-row>

		<!--<form @submit.prevent="createActivity">
			<div class="row">
				<div class="col-12 col-md-6">
				  	<div class="form-group">
				    	<label for="title">Titre</label>
				    	<input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="" v-model="form.title">
				  	</div>
				</div>
				<div class="col-12 col-md-6">
				  	<div class="form-group">
					    <label for="subtitle">Sous-titre</label>
				    	<input type="textarea" class="form-control" id="subtitle" placeholder="" v-model="form.subtitle">
				  	</div>
				</div>
			</div>			

			<div class="row">
				<div class="col-12">
				</div>
			</div>

			<div class="row my-3">
				<div class="col-12 col-md-6">
					<div class="form-group">
						<label for="image">Image:</label><br />
						<input type="file" id="image" name="image" accept="image/png, image/jpeg" @change="uploadImage($event)">
					</div>
					<div class="custom-file">
						<label class="custom-file-label" for="new-image">Image</label>
						<input type="file" class="custom-file-input" id="new-image" accept="/image/png, image/jpeg" @change="uploadImage($event)">
					</div>
				</div>
			</div>
			
			<div class="row align-items-center">
				<div class="col-12 col-md-6">
					<VueCtkDateTimePicker label="Choisir date et heure de début" format="YYYY-MM-DD HH:mm:ss" color="#9ACD32" button-color="#9ACD32" button-now-translation="Maintenant" v-model="form.start_date" />
				</div>
				<div class="col-12 col-md-6">
					<p-check class="p-curve p-bigger p-jelly" name="check" color="primary" button-now-translation="Maintenant" v-model="addEndDate">Ajouter une date de fin</p-check>
					
				</div>
				<div class="col-12 col-md-6 my-3">
					<VueCtkDateTimePicker label="Choisir date et heure de fin" format="YYYY-MM-DD HH:mm:ss" color="#9ACD32" button-color="#9ACD32" v-model="form.end_date" v-if="addEndDate" />
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<multiselect 
						label="name"
						track-by="id"
						:options="sponsors"
						:multiple="true"
						:close-on-select="false"
						:clear-on-select="false"
						:preserve-search="true"
						:preselect-first="true"
						placeholder="Sélectionner un sponsor"
						selectLabel="Appuyer sur Entrée pour sélectionner"
						selectedLabel="Sélectionné"
						deselectLabel="Appuyer sur entrée pour désélectionner"
						v-model="form.sponsors"
					>
					</multiselect>
				</div>
			</div>

			<div class="row my-4">
				<div class="col-12 text-center">
		  			<button type="submit" class="btn btn-primary">Créer cette activité</button>
		  		</div>
		  	</div>
		</form>-->

		<br /><br />

	</b-container>
</template>

<script>
	import axios from 'axios'

	// Tinymce Editor
	import Editor from '@tinymce/tinymce-vue'

	// Datepicker
	import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
	import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

	// Pretty checkboxes
	import PrettyCheck from 'pretty-checkbox-vue/check'

	// Multiselect
	import Multiselect from 'vue-multiselect'
	import 'vue-multiselect/dist/vue-multiselect.min.css'

	export default {
		layout: 'backend',
		// middleware: 'admin',
		components: { 
			'tinymce-editor': Editor,
			// 'vue-datetime-picker': vueDatetimePicker,
			VueCtkDateTimePicker,
			'p-check': PrettyCheck,
			Multiselect
		},
		created () {
			if (this.$store.getters['sponsors/sponsors'].length < 1) {
				this.$store.dispatch('sponsors/fetchSponsors')
			}
		},
		mounted () {
		},
		data () {
			return {
				tinymce_key: process.env.MIX_TINYMCE_KEY,
				addEndDate: false,
				form: {
					title: 'New activity',
					subtitle: 'This is my new activity',
					content: '<b>Titre</b><p>Hello everyone</p>',
					start_date: null,
					end_date: null,
					sponsors: []
				},
				image: {}
			}
		},
		computed: {
			sponsors () {
				return this.$store.getters['sponsors/sponsors']
			},
			// sponsorsList () {
			// 	return this.sponsors.
			// }
		},
		methods: {
			uploadImage (event) {
				console.log('uploadImage', event)
				console.log(event.target)
				console.log(event.target.files[0])
				this.image = event.target.files[0]
			},
			async createActivity () {
				try {
					let formData = new FormData();
		            formData.append('image', this.image);
		            formData.append('form', JSON.stringify(this.form))
		            // console.log('formData: ', formData)
					
					await this.$store.dispatch('activities/createActivity', { formData })

	                this.$noty.success('Activité créée avec succès!')
					this.$router.push('/admin/activities')
				} catch (error) {
					console.log('error: ', error)
					this.$noty.error("Une erreur est survenue et l'activité n'a pas pu être créée.")

				}
			}
		}
	}
</script>

<style>

</style>

<style scoped>

</style>
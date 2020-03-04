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

		<form @submit.prevent="createActivity">
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
					<!-- <div class="form-group">
						<label for="image">Contenu:</label>
						<tinymce-editor 
							:api-key="tinymce_key"
							:init="{plugins: 'wordcount'}"
							v-model="form.content"
						></tinymce-editor>
					</div> -->
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
				<!-- <div class="col-12">
					<select multiple size="3" class="custom-select">
						<option selected>Open this select menu</option>
						<option value="1">One</option>
						<option selected value="2">Two</option>
						<option value="3">Three</option>
						<option value="4">Four</option>
						<option value="5">Five</option>
						<option value="6">Six</option>
					</select>
				</div> -->
				<div class="col-12">
					<!-- <multiselect 
						v-model="form.sponsors"
						:options="sponsors"
						label="name"
						:multiple="true"
						track-by="value"
						placeholder="Sélectionner un sponsor"
						selectLabel="Appuyer sur Entrée pour sélectionner"
						selectedLabel="Sélectionné"
						deselectLabel="Appuyer sur entrée pour désélectionner"
					></multiselect> -->
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
    					<!-- <template slot="selection" slot-scope="{ values, search, isOpen }">
    						<span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
    							{{ values.length }} options selected

    						</span>
    					</template> -->
					</multiselect>
				</div>
			</div>

			<div class="row my-4">
				<div class="col-12 text-center">
		  			<button type="submit" class="btn btn-primary">Créer cette activité</button>
		  		</div>
		  	</div>
		</form>

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
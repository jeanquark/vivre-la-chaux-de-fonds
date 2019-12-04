<template>
	<div class="container">
		<nav aria-label="breadcrumb">
		  	<ol class="breadcrumb">
		    	<li class="breadcrumb-item"><router-link to="/admin/activities">Activités</router-link></li>
		    	<li class="breadcrumb-item active" aria-current="page">Créer</li>
		  	</ol>
		</nav>
		<h1 class="text-center">Créer une nouvelle activité</h1>
		form: {{ form }}<br />
		tinymce_key: {{ tinymce_key }}<br />

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
					<div class="form-group">
						<label for="image">Contenu:</label>
						<tinymce-editor 
							:api-key="tinymce_key"
							:init="{plugins: 'wordcount'}"
							v-model="form.content"
						></tinymce-editor>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<div class="form-group">
						<label for="image">Image:</label><br />
						<input type="file" id="image" name="image" accept="image/png, image/jpeg" @change="uploadImage($event)">
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

			<div class="row my-4">
				<div class="col-12 text-center">
		  			<button type="submit" class="btn btn-primary">Créer cette activité</button>
		  		</div>
		  	</div>
		</form>

		<br /><br />

	</div>
</template>

<script>
	import axios from 'axios'
	import Editor from '@tinymce/tinymce-vue'
	// import vueDatetimePicker from 'vue-datetime-picker'
	import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
	import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

	// import PrettyCheckbox from 'pretty-checkbox-vue'
	import PrettyCheck from 'pretty-checkbox-vue/check'

	export default {
		layout: 'backend',
		components: { 
			'tinymce-editor': Editor,
			// 'vue-datetime-picker': vueDatetimePicker,
			VueCtkDateTimePicker,
			'p-check': PrettyCheck,
		},
		created () {
			// console.log('MIX_TINYMCE_KEY: ', process.env.MIX_TINYMCE_KEY)
		},
		mounted () {
			// console.log('MIX_TINYMCE_KEY: ', process.env.MIX_TINYMCE_KEY)
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
					end_date: null
				},
				image: {}
			}
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
					const config = {
	                    headers: { 'content-type': 'multipart/form-data' }
	                }

					let formData = new FormData();
	                formData.append('image', this.image);
	                formData.append('form', JSON.stringify(this.form))
	                console.log('formData: ', formData)

					const { data } = await axios.post('/api/activities', formData, config)
					console.log('data: ', data)
					this.$store.commit('activities/addActivity', data.activity)
					this.$router.push('/admin/activities')
				} catch (error) {
					console.log('error: ', error)
				}
			}
		}
	}
</script>

<style scoped>

</style>
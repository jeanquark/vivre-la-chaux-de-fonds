<template>
	<div class="container">
		<nav aria-label="breadcrumb">
		  	<ol class="breadcrumb">
		    	<li class="breadcrumb-item"><router-link to="/admin/activities">Activités</router-link></li>
		    	<li class="breadcrumb-item active" aria-current="page">Editer</li>
		  	</ol>
		</nav>
		<h2>Editer une activité</h2>
		<!-- loadedActivities: {{ loadedActivities }}<br /><br /> -->
		<!-- loadedActivity: {{ loadedActivity }}<br /><br /> -->
		activityId: {{ activityId }}<br /><br />
		activitiy: {{ activity }}<br /><br />


		<form @submit.prevent="updateActivity" v-if="activity">
			<div class="row">
				<div class="col-12 col-md-6">
				  	<div class="form-group">
				    	<label for="title">Titre</label>
				    	<input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="" v-model="activity.title">
				  	</div>
				</div>
				<div class="col-12 col-md-6">
				  	<div class="form-group">
					    <label for="subtitle">Sous-titre</label>
				    	<input type="textarea" class="form-control" id="subtitle" placeholder="" v-model="activity.subtitle">
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
							v-model="activity.content"
						></tinymce-editor>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-12 col-md-6">
					<div class="form-group">
						<label for="image">Image actuelle:</label><br />
						<img :src="`/images/${activity.image}`" width="200" v-if="activity.image" />
						<span v-else>Pas d'image</span>
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="form-group">
						<label for="image">Nouvelle image:</label><br />
						<input type="file" id="image" name="image" accept="image/png, image/jpeg" @change="uploadImage($event)">
					</div>
				</div>
			</div>
			
			<div class="row align-items-center">
				<div class="col-12 col-md-6">
					<VueCtkDateTimePicker label="Choisir date et heure de début" format="YYYY-MM-DD HH:mm:ss" color="#9ACD32" button-color="#9ACD32" button-now-translation="Maintenant" v-model="activity.start_date" />
				</div>
				<div class="col-12 col-md-6">
					<p-check class="p-curve p-bigger p-jelly" name="check" color="primary" v-model="addEndDate">Ajouter une date de fin</p-check>
					
				</div>
				<div class="col-12 col-md-6 my-3">
					<VueCtkDateTimePicker label="Choisir date et heure de fin" format="YYYY-MM-DD HH:mm:ss" color="#9ACD32" button-color="#9ACD32" button-now-translation="Maintenant" v-model="activity.end_date" v-if="addEndDate" />
				</div>
			</div>

			<div class="row my-4">
				<div class="col-12 text-center">
		  			<button type="submit" class="btn btn-primary">Editer cette activité</button>
		  		</div>
		  	</div>
		</form>

	</div>
</template>

<script>
	import axios from 'axios'
	import Editor from '@tinymce/tinymce-vue'
	import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
	import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
	import PrettyCheck from 'pretty-checkbox-vue/check'

	export default {
		layout: 'backend',
		components: {
			'tinymce-editor': Editor,
			VueCtkDateTimePicker,
			'p-check': PrettyCheck
		},
		async created () {
			// if (this.$store.getters['activities/activities'].length < 1) {
			// 	await this.$store.dispatch('activities/fetchActivities')
			// }
		},
		async mounted () {
			this.activityId = this.$route.params.id
			const activityId = parseInt(this.$route.params.id)
			console.log('activityId: ', activityId)
			const { data } = await axios.get(`/api/activities/${activityId}`)
			console.log('data: ', data)
			this.activity = data.activity
			if (this.activity.end_date) {
				this.addEndDate = true
			}
		},
		data () {
			return {
				activityId: null,
				tinymce_key: process.env.MIX_TINYMCE_KEY,
				addEndDate: false,
				// form: {
				// 	title: 'New activity',
				// 	subtitle: 'This is my new activity',
				// 	content: '<b>Titre</b><p>Hello everyone</p>',
				// 	start_date: null,
				// 	end_date: null
				// },
				activity: {},
				new_image: {}
			}
		},
		computed: {
			activities () {
				return this.$store.getters['activities/activities']
			},
			activity2 () {
				return this.activities.find(activity => activity.id === parseInt(this.activityId))
				// const activityId = this.$route.params.id
				// return this.loadedActivities.find(activity => activity.id === activityId)
			}
		},
		methods: {
			uploadImage (event) {
				console.log('uploadImage', event)
				console.log(event.target)
				console.log(event.target.files[0])
				this.new_image = event.target.files[0]
			},
			async updateActivity () {
				try {
	                await this.$store.dispatch('activities/updateActivity', { activity: this.activity, image: this.new_image })
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
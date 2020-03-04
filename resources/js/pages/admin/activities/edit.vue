<template>
	<b-container>
		<b-breadcrumb>
            <b-breadcrumb-item to="/admin/users" class="navigation">
				<font-awesome-icon icon="calendar-day" />
				<span>Activités</span>
			</b-breadcrumb-item>
            <b-breadcrumb-item active>Editer</b-breadcrumb-item>
        </b-breadcrumb>
		<h2 class="text-center">Editer une activité</h2>
		<!-- activity: {{ activity }}<br /><br /> -->


		<form @submit.prevent="updateActivity" v-if="activity && activity.id">
			<div class="row my-2">
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

			<div class="row my-2">
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

			<div class="row my-2">
				<div class="col-12 col-md-6">
					<div class="form-group">
						<label for="image">Image actuelle:</label><br />
						<img :src="`/images/${activity.image}`" width="200" v-if="activity.image" />
						<span v-else><i>Pas d'image</i></span>
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="form-group">
						<label for="image">Nouvelle image:</label><br />
						<input type="file" id="image" name="image" accept="image/png, image/jpeg" @change="uploadImage($event)">
					</div>
				</div>
			</div>
			
			<div class="row align-items-center my-2">
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
			
			<div class="row align-items-center my-2">
				<div class="col-12">
					<div class="form-group">
						<label for="image">Sponsors pour cette activité:</label><br />
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
							v-model="activity.sponsors"
						>
						</multiselect>
					</div>
				</div>
			</div>

			<div class="row my-4">
				<div class="col-12 text-center">
		  			<button type="submit" class="btn btn-primary">Editer cette activité</button>
		  		</div>
		  	</div>
		</form>

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
		components: {
			'tinymce-editor': Editor,
			VueCtkDateTimePicker,
			'p-check': PrettyCheck,
			Multiselect
		},
		async created () {
			if (this.$store.getters['sponsors/sponsors'].length < 1) {
				this.$store.dispatch('sponsors/fetchSponsors')
			}
		},
		async mounted () {
			// this.activityId = this.$route.params.id
			const activityId = parseInt(this.$route.params.id)
			console.log('activityId: ', activityId)
			await this.$store.dispatch('activities/fetchActivity', { activityId })

			// this.activity = this.$store.getters['activities/activity']

			// const { data } = await axios.get(`/api/activities/${activityId}`)
			// console.log('data: ', data)
			// this.activity = data.activity
			// this.activity['sponsors'] = data.sponsors
			// if (this.activity.end_date) {
			// 	this.addEndDate = true
			// }
			this.$noty.success("Hello world!")


		},
		data () {
			return {
				tinymce_key: process.env.MIX_TINYMCE_KEY,
				addEndDate: false,
				new_image: {}
			}
		},
		computed: {
			sponsors () {
				return this.$store.getters['sponsors/sponsors']
			},
			activities () {
				return this.$store.getters['activities/activities']
			},
			activity () {
				return this.$store.getters['activities/activity']
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
	                this.$noty.success('Activité mise à jour avec succès!')
					this.$router.push('/admin/activities')
				} catch (error) {
					console.log('error: ', error)
					this.$noty.error("Une erreur est survenue et l'activité n'a pas pu être mise à jour.")
				}
			}
		}
	}
</script>

<style scoped>

</style>
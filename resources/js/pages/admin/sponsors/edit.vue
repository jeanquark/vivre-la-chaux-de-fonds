<template>
	<div class="container">
		<nav aria-label="breadcrumb">
		  	<ol class="breadcrumb">
		    	<li class="breadcrumb-item"><router-link to="/admin/sponsors">Sponsors</router-link></li>
		    	<li class="breadcrumb-item active" aria-current="page">Editer</li>
		  	</ol>
		</nav>
		<h2 class="text-center">Editer un sponsor</h2>
		<!-- loadedActivities: {{ loadedActivities }}<br /><br /> -->
		<!-- loadedSponsor: {{ loadedSponsor }}<br /><br /> -->
		<!-- sponsorId: {{ sponsorId }}<br /><br /> -->
		sponsor: {{ sponsor }}<br /><br />


		<form @submit.prevent="updateSponsor" v-if="sponsor">
		  	<div class="form-group">
		    	<label for="name">Nom</label>
		    	<input type="text" class="form-control" id="name" placeholder="" v-model="sponsor.name">
		  	</div>
		  	<div class="form-group">
			    <label for="contribution">Contribution</label>
		    	<input type="textarea" class="form-control" id="contribution" placeholder="" v-model="sponsor.contribution">
		  	</div>

			<div class="row my-2">
				<div class="col-12 col-md-6">
					<div class="form-group">
						<label for="image">Image actuelle:</label><br />
						<img :src="`/images/${sponsors.image}`" width="200" v-if="sponsor.image" />
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

			<div class="form-group">
				<VueCtkDateTimePicker label="Date de fin de sponsoring" only-date format="YYYY-MM-DD" formatted="YYYY-MM-DD" color="#9ACD32" button-color="#9ACD32" button-now-translation="Maintenant" v-model="sponsor.end_date" />
			</div>

			<div class="row align-items-center my-2">
				<div class="col-12">
					<div class="form-group">
						<label for="image">Activités pour ce sponsor:</label><br />
						<multiselect 
							label="title"
							track-by="id"
							:options="activities"
							:multiple="true"
							:close-on-select="false"
							:clear-on-select="false"
							:preserve-search="true"
							:preselect-first="true"
							placeholder="Sélectionner un sponsor"
							selectLabel="Appuyer sur Entrée pour sélectionner"
							selectedLabel="Sélectionné"
							deselectLabel="Appuyer sur entrée pour désélectionner"
							v-model="sponsor.activities"
						>
						</multiselect>
					</div>
				</div>
			</div>

			<div class="col-12 col-md-6">
				<p-check class="p-curve p-bigger p-jelly" name="check" color="primary" button-now-translation="Maintenant" v-model="sponsor.is_active">Actif ?</p-check>
			</div>
			
			<div class="row my-3">
				<div class="col-12 text-center">
		  			<button type="submit" class="btn btn-primary">Editer sponsor</button>
		  		</div>
		  	</div>
		</form>

	</div>
</template>

<script>
	import axios from 'axios'

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
			VueCtkDateTimePicker,
			'p-check': PrettyCheck,
			Multiselect
		},
		async created () {
			// if (this.$store.getters['sponsors/sponsors'].length < 1) {
			// 	await this.$store.dispatch('sponsors/fetchActivities')
			// }
			if (this.$store.getters['activities/activities'].length < 1) {
				this.$store.dispatch('activities/fetchActivities')
			}
		},
		async mounted () {
			// this.sponsorId = this.$route.params.id
			const sponsorId = parseInt(this.$route.params.id)
			console.log('sponsorId: ', sponsorId)
			await this.$store.dispatch('sponsors/fetchSponsor', { sponsorId })

			// this.sponsor = this.$store.getters['sponsors/sponsor']

			// const { data } = await axios.get(`/api/sponsors/${sponsorId}`)
			// console.log('data: ', data)
			// this.sponsor = data.sponsor
			// this.sponsor['sponsors'] = data.sponsors
			// if (this.sponsor.end_date) {
			// 	this.addEndDate = true
			// }
		},
		data () {
			return {
				// sponsorId: null,
				new_image: {}
			}
		},
		computed: {
			activities () {
				return this.$store.getters['activities/activities']
			},
			sponsors () {
				return this.$store.getters['sponsors/sponsors']
			},
			sponsor () {
				return this.$store.getters['sponsors/sponsor']
			}
		},
		methods: {
			uploadImage (event) {
				console.log('uploadImage', event)
				console.log(event.target)
				console.log(event.target.files[0])
				this.new_image = event.target.files[0]
			},
			async updateSponsor () {
				try {
	                await this.$store.dispatch('sponsors/updateSponsor', { sponsor: this.sponsor, image: this.new_image })
	                this.$noty.success('Sponsor mis à jour avec succè!')
					this.$router.push('/admin/sponsors')
				} catch (error) {
					console.log('error: ', error)
					this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être mise à jour.")
				}
			}
		}
	}
</script>

<style scoped>

</style>
<template>
	<div class="container">
		<nav aria-label="breadcrumb">
		  	<ol class="breadcrumb">
		    	<li class="breadcrumb-item"><router-link to="/admin/users">Users</router-link></li>
		    	<li class="breadcrumb-item active" aria-current="page">Create</li>
		  	</ol>
		</nav>
		<h1 class="text-center">Create new user</h1>
		newActivity: {{ newActivity }}<br />
		<form @submit.prevent="createSponsor">
		  	<div class="form-group">
		    	<label for="title">Titre</label>
		    	<input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="" v-model="form.title">
		  	</div>
		  	<div class="form-group">
			    <label for="subtitle">Sous-titre</label>
		    	<input type="textarea" class="form-control" id="subtitle" placeholder="" v-model="form.subtitle">
		  	</div>
		  	<div class="form-group">
				<label for="text">Texte</label>
				<textarea class="form-control" id="text" rows="3" v-model="form.text"></textarea>
			</div>
			<div class="form-group">
				<label for="image">Choisir une image:</label>
				<input type="file" id="image" name="image" accept="image/png, image/jpeg" @change="uploadImage($event)">
			</div>
		  	<button type="submit" class="btn btn-primary">Create sponsor</button>
		</form>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		layout: 'backend',
		async created () {
			const abc = await this.$store.dispatch('sponsors/fetchSponsors')
			console.log('abc: ', abc)
		},
		mounted () {
			const userId = parseInt(this.$route.params.id)
	  		console.log('userId: ', userId)
		},
		data () {
			return {
				image: {},
				form: {
					title: 'New Title',
					subtitle: '',
					text: 'New text',
					content: '',
				}
			}
		},
		methods: {
			uploadImage (event) {
				console.log('uploadImage', event)
				console.log(event.target)
				console.log(event.target.files[0])
				this.image = event.target.files[0]
			},
			async createSponsor () {
				const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }

				let formData = new FormData();
                formData.append('image', this.image);
                formData.append('form', JSON.stringify(this.form))
                // console.log('formData: ', formData)

				const { data } = await axios.post('/api/activities', formData, config)
				console.log('data: ', data)
				this.$store.commit('activities/addActivity', data.activity)
			}
		}
	}
</script>

<style scoped>

</style>
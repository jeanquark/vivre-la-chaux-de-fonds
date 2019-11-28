<template>
	<div class="container">
		<h1>Activities index</h1>
		<h3>All activities</h3>
		loadedActivities: {{ loadedActivities }}<br /><br />
		<div v-if="loadedActivities">
			loadedActivities[0]['content']: <p v-html="loadedActivities[0]['content']" v-if="loadedActivities[0]"></p><br /><br />
		</div>
		
		<div>
			this.form: {{ form }}
		</div>

		<table class="table">
  			<thead>
    			<tr>
      				<th scope="col">ID</th>
      				<th scope="col">Title</th>
      				<th scope="col">Subtitle</th>
      				<!-- <th scope="col">Text</th> -->
      				<!-- <th scope="col">Content</th> -->
      				<th scope="col">Image</th>
      				<th scope="col">Created at</th>
      				<th scope="col">Updated at</th>
      				<th scope="col">Actions</th>
    			</tr>
  			</thead>
  			<tbody>
    			<tr v-for="activity in loadedActivities" :key="activity.id">
      				<th scope="row">{{ activity.id }}</th>
      				<td>{{ activity.title }}</td>
      				<td>{{ activity.subtitle }}</td>
      				<td>{{ activity.image }}</td>
      				<td>{{ activity.created_at }}</td>
      				<td>{{ activity.updated_at }}</td>
      				<td></td>
    			</tr>
  			</tbody>
		</table>

		<form @submit.prevent="createActivity">
		  	<div class="form-group">
		    	<label for="exampleInputEmail1">Titre</label>
		    	<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" v-model="form.title">
		  	</div>
		  	<div class="form-group">
			    <label for="exampleInputPassword1">Sous-titre</label>
		    	<input type="textarea" class="form-control" id="exampleInputPassword1" placeholder="" v-model="form.subtitle">
		  	</div>
		  	<div class="form-group">
				<label for="exampleFormControlTextarea1">Texte</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="form.text"></textarea>
			</div>
			<div class="form-group">
				<label for="image">Choisir une image:</label>
				<input type="file" id="image" name="image" accept="image/png, image/jpeg" @change="uploadImage($event)">
			</div>
		  	<button type="submit" class="btn btn-primary">Create activity</button>
		</form>
		
		<br /><br />
		<tinymce-editor api-key="mvp9jqgiu38hcoig0dkgzvr5v0520jvl6lghgeyi4slwrogf" :init="{plugins: 'wordcount'}" v-model="form.content"></tinymce-editor>

		<br /><br />
		<iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
	</div>
</template>

<script>
	import axios from 'axios'
	import Editor from '@tinymce/tinymce-vue';
	export default {
		layout: 'backend',
		components: { 'tinymce-editor': Editor },
		async created () {
			const abc = await this.$store.dispatch('activities/fetchActivities')
			console.log('abc: ', abc)
		},
		data () {
			return {
				form: {
					title: 'New Title',
					subtitle: '',
					text: 'New text',
					content: '',
				},
				image: {}
			}
		},
		computed: {
			loadedActivities () {
				return this.$store.getters['activities/activities']
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
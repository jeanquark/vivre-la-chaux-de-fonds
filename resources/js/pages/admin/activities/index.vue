<template>
	<div class="container">
		<h1>Activities index</h1>
		<h3>All activities</h3>
		loadedActivities: {{ loadedActivities }}<br /><br />
		<div v-if="loadedActivities">
			loadedActivities[2]['content']: <p v-html="loadedActivities[0]['content']" v-if="loadedActivities[0]"></p><br /><br />
		</div>
		<ul>
			<li v-for="activity in loadedActivities">
				<router-link :to="`/admin/activities/${activity.slug}`">{{ activity.title }}</router-link>
			</li>
		</ul>
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
		  	<button type="submit" class="btn btn-primary">Create activity</button>
		</form>
		
		<br /><br />
		<tinymce-editor api-key="mvp9jqgiu38hcoig0dkgzvr5v0520jvl6lghgeyi4slwrogf" :init="{plugins: 'wordcount'}" v-model="form.content"></tinymce-editor>
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
				newActivity: {
					name: 'ABC',
					slug: 'abc'
				},
				form: {
					title: 'New Title',
					subtitle: '',
					text: 'New text',
					content: ''
				}
			}
		},
		computed: {
			loadedActivities () {
				return this.$store.getters['activities/activities']
			}
		},
		methods: {
			async createActivity () {
				const { data } = await axios.post('/api/activities', this.form)
				console.log('data: ', data)
				this.$store.commit('activities/addActivity', data.activity)
			}
		}
	}
</script>

<style scoped>

</style>
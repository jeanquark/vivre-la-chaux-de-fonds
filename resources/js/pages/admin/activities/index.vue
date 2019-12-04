<template>
	<div class="container">
		<nav aria-label="breadcrumb">
		  	<ol class="breadcrumb">
		    	<li class="breadcrumb-item"><router-link to="/activities">Activités</router-link></li>
		    	<li class="breadcrumb-item active" aria-current="page">Activités</li>
		  	</ol>
		</nav>
		<h2>Activités</h2>
		<router-link to="/admin/activities/create" class="btn btn-primary my-3">Créer une nouvelle activité</router-link>

		<table class="table">
  			<thead>
    			<tr>
      				<th scope="col">ID</th>
      				<th scope="col">Title</th>
      				<th scope="col">Subtitle</th>
      				<th scope="col">Image</th>
      				<th scope="col">En ligne?</th>
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
      				<td>
      					<img :src="`/images/${activity.image}`" style="max-width: 100px; max-height: 50px;" v-if="activity.image" />
      					<span v-else><i>Pas d'image</i></span>
      				</td>
      				<td>{{ activity.is_published }}</td>
      				<td>{{ activity.created_at }}</td>
      				<td>{{ activity.updated_at }}</td>
      				<td>
      					<router-link :to="`/admin/activities/${activity.id}`" class="btn btn-warning">
                            <font-awesome-icon icon="eye" />
                        </router-link>
                        <router-link :to="`/admin/activities/${activity.id}/edit`" class="btn btn-success">
                            <font-awesome-icon icon="edit" />
                        </router-link>
                        <button class="btn btn-danger" @click="deleteActivity(activity.id)">
                            <font-awesome-icon icon="trash" />
                        </button>
      				</td>
    			</tr>
  			</tbody>
		</table>

		
		
		<br /><br />
		<!-- <tinymce-editor api-key="mvp9jqgiu38hcoig0dkgzvr5v0520jvl6lghgeyi4slwrogf" :init="{plugins: 'wordcount'}" v-model="form.content"></tinymce-editor> -->

		<br /><br />
		<!-- <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> -->
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		layout: 'backend',
		// components: { 'tinymce-editor': Editor },
		async created () {
			if (this.$store.getters['activities/activities'].length < 1) {
				await this.$store.dispatch('activities/fetchActivities')
			}
		},
		data () {
			return {
			}
		},
		computed: {
			loadedActivities () {
				return this.$store.getters['activities/activities']
			}
		},
		methods: {
			async deleteActivity (activityId) {
				try {
					const dialog = await this.$dialog.confirm('Voulez-vous vraiment supprimer cette activité?')
					console.log('dialog: ', dialog)
					console.log('deleteActivity: ', activityId)
					await this.$store.dispatch('activities/deleteActivity', { activityId })
				} catch (error) {
					console.log('error from front: ', error)
				}
			}
		}
	}
</script>

<style scoped>

</style>
<template>
	<div class="container">
		<nav aria-label="breadcrumb">
		  	<ol class="breadcrumb">
		    	<li class="breadcrumb-item"><router-link to="/activities">Activités</router-link></li>
		    	<li class="breadcrumb-item active" aria-current="page">Créer</li>
		  	</ol>
		</nav>
		<h1>Create new activity</h1>
		newActivity: {{ newActivity }}<br />
		<button @click="createActivity">Create activity</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		layout: 'backend',
		created () {

		},
		mounted () {
			const userId = parseInt(this.$route.params.id)
	  		console.log('userId: ', userId)
		},
		data () {
			return {
				newActivity: {
					name: 'ABC',
					slug: 'abc'
				}
			}
		},
		methods: {
			async createActivity () {
				const abc = await axios.post('activities/create', newActivity)
				console.log('abc: ', abc)
			}
		}
	}
</script>

<style scoped>

</style>
<template>
	<div>
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
		data: {
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
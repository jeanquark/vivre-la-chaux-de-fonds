<template>
	<b-container>
		<h2 class="text-center">Tableau de bord VLCF</h2>
	</b-container>
</template>

<script>
	import axios from 'axios'
	export default {
		async created () {
			const { data } = await axios.get(`/api/google-analytics-data`)
			console.log('data: ', data)
		}
	}
</script>

<style scoped>

</style>
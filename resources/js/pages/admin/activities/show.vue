<template>
	<div class="container">
		<nav aria-label="breadcrumb">
		  	<ol class="breadcrumb">
		    	<li class="breadcrumb-item"><router-link to="/activities">Activités</router-link></li>
		    	<li class="breadcrumb-item active" aria-current="page">Activité</li>
		  	</ol>
		</nav>
		<h1>Activity show</h1>
	</div>
</template>

<script>
	export default {
		layout: 'backend',
		mounted () {
			const activityId = this.$route.params.id
			console.log('activityId: ', activityId)
		}
	}
</script>

<style scoped>

</style>
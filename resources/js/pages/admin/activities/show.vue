<template>
	<b-container>
		<b-breadcrumb>
            <b-breadcrumb-item to="/admin/activities" class="navigation">
				<font-awesome-icon icon="users" />
				<span>Activités</span>
			</b-breadcrumb-item>
            <b-breadcrumb-item active>Montrer</b-breadcrumb-item>
        </b-breadcrumb>
		<!-- <nav aria-label="breadcrumb">
		  	<ol class="breadcrumb">
		    	<li class="breadcrumb-item"><router-link to="/admin/activities">Activités</router-link></li>
		    	<li class="breadcrumb-item active" aria-current="page">Activité</li>
		  	</ol>
		</nav> -->
		<h2 class="text-center">Activity show</h1>
	</b-container>
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
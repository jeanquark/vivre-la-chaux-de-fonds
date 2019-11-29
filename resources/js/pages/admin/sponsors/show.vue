<template>
	<div class="container">
		<nav aria-label="breadcrumb">
		  	<ol class="breadcrumb">
		    	<li class="breadcrumb-item"><router-link to="/admin/sponsors">Sponsors</router-link></li>
		    	<li class="breadcrumb-item active" aria-current="page">Sponsor</li>
		  	</ol>
		</nav>
		<h1>Sponsor show</h1>
	</div>
</template>

<script>
	export default {
		layout: 'backend',
		mounted () {
			const sponsorId = this.$route.params.id
			console.log('sponsorId: ', sponsorId)
		}
	}
</script>

<style scoped>

</style>
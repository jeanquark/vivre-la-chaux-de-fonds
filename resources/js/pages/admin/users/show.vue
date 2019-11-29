<template>
	<div class="container">
		<nav aria-label="breadcrumb">
		  	<ol class="breadcrumb">
		    	<li class="breadcrumb-item"><router-link to="/admin/users">Users</router-link></li>
		    	<li class="breadcrumb-item active" aria-current="page">User</li>
		  	</ol>
		</nav>
		<h1>User show</h1>
	</div>
</template>

<script>
	export default {
		layout: 'backend',
		created () {

		},
		mounted () {
			const userId = parseInt(this.$route.params.id)
	  		console.log('userId: ', userId)
		}
	}
</script>

<style scoped>

</style>
<template>
	<div>
		<navbar />
		<h1 class="text-center my-3">Contact</h1>
	</div>
</template>

<script>
	import navbar from '../components/Navbar'
	export default {
		metaInfo () {
    		return { title: 'Contact' }
  		},
		components: { navbar }
	}
</script>

<style scoped>
</style>
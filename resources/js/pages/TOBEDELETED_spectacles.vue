<template>
	<div>
		<navbar />
		<h1 class="text-center my-3">Spectacles</h1>
	</div>
</template>

<script>
	import navbar from '../components/Navbar'
	export default {
		metaInfo () {
    		return { title: 'Spectacles' }
  		},
		components: { navbar }
	}
</script>

<style scoped>

</style>
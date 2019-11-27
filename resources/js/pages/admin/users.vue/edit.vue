<template>
	<div>
		<h1>User edit</h1>
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
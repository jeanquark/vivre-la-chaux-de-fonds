<template>
	<div>
		<h1>Activities edit</h1>
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
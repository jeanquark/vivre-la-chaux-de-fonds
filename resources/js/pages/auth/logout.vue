<template>
	<b-container>
		<h1 class="text-center">Logging out...</h1>
	</b-container>
</template>

<script>
	export default {
		layout: 'frontend',
		mounted () {
            this.$store.dispatch('auth/logout')
            this.$router.push({ name: 'index' })
		}
	}
</script>
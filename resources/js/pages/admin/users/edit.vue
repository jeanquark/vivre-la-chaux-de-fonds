<template>
	<b-container>
		<b-breadcrumb>
            <b-breadcrumb-item to="/admin/users" class="navigation">
				<font-awesome-icon icon="file-alt" />
				<span>Utilisateurs</span>
			</b-breadcrumb-item>
            <b-breadcrumb-item active>Editer</b-breadcrumb-item>
        </b-breadcrumb>

		<h1 class="text-center">Editer un utilisateur</h1>
	</b-container>
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
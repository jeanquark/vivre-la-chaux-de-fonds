<template>
	<b-container>
		<b-breadcrumb>
            <b-breadcrumb-item to="/admin/users" class="navigation">
				<font-awesome-icon icon="users" />
				<span>Utilisateurs</span>
			</b-breadcrumb-item>
            <b-breadcrumb-item active>Montrer</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center">Utilisateur {{ user.firstname }} {{ user.lastname }}</h2>
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
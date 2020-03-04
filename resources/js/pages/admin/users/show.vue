<template>
	<b-container>
		<b-breadcrumb>
            <b-breadcrumb-item to="/admin/users" class="navigation">
				<font-awesome-icon icon="users" />
				<span>Utilisateurs</span>
			</b-breadcrumb-item>
            <b-breadcrumb-item active>Montrer</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center" v-if="user">Utilisateur {{ user.firstname }} {{ user.lastname }}</h2>
    </b-container>
</template>

<script>
	export default {
		layout: 'backend',
		async created () {
			if (this.$store.getters['users/users'].length < 1) {
				await this.$store.dispatch('users/fetchUsers')
			}
		},
		computed: {
			users () {
				return this.$store.getters['users/users']
			},
			user () {
				return this.$store.getters['users/users'].find(user => user.id === parseInt(this.$route.params.id))
			},
		}
	}
</script>

<style scoped>

</style>
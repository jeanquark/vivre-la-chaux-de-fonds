<template>
	<div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">Users</li>
            </ol>
        </nav>
		<h1 class="text-center">Users</h1>
    <br /><br />
    <!-- loadedUsers: {{ loadedUsers }}<br /><br /> -->
		<table class="table">
  			<thead>
    			<tr>
      				<th scope="col">ID</th>
      				<th scope="col">Email</th>
      				<th scope="col">Created at</th>
      				<th scope="col">Updated at</th>
      				<th scope="col">Actions</th>
    			</tr>
  			</thead>
  			<tbody>
    			<tr v-for="user in loadedUsers" :key="user.id">
      				<th scope="row">{{ user.id }}</th>
      				<td>{{ user.email }}</td>
      				<td>{{ user.created_at }}</td>
      				<td>{{ user.updated_at }}</td>
      				<td>
                        <router-link :to="`/admin/users/${user.id}`" class="btn btn-warning">
                            <font-awesome-icon icon="eye" />
                        </router-link>
                        <router-link :to="`/admin/users/${user.id}/edit`" class="btn btn-success">
                            <font-awesome-icon icon="edit" />
                        </router-link>
                        <button class="btn btn-danger" @click="deleteUser(user.id)">
                            <font-awesome-icon icon="trash" />
                        </button>
                    </td>
    			</tr>
  			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
        layout: 'backend',
        async created () {
            await this.$store.dispatch('users/fetchUsers')
        },
		data () {
			return {

			}
		},
		computed: {
			loadedUsers () {
				return this.$store.getters['users/users']
			}
		},
        methods: {
            deleteUser (userId) {
                console.log('deleteUser: ', userId)
            }
        }
	}
</script>

<style scoped>

</style>
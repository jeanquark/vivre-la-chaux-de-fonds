<template>
	<div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">Sponsors</li>
            </ol>
        </nav>
		<h1 class="text-center">Sponsors</h1>
        <br /><br />
        <!-- loadedSponsors: {{ loadedSponsors }}<br /><br /> -->
		<table class="table">
  			<thead>
    			<tr>
      				<th scope="col">ID</th>
      				<th scope="col">Name</th>
      				<th scope="col">Slug</th>
      				<!-- <th scope="col">Text</th> -->
      				<!-- <th scope="col">Content</th> -->
      				<th scope="col">Image</th>
      				<th scope="col">Created at</th>
      				<th scope="col">Updated at</th>
      				<th scope="col">Actions</th>
    			</tr>
  			</thead>
  			<tbody>
    			<tr v-for="sponsor in loadedSponsors" :key="sponsor.id">
      				<th scope="row">{{ sponsor.id }}</th>
      				<td>{{ sponsor.name }}</td>
      				<td>{{ sponsor.slug }}</td>
      				<td>{{ sponsor.image }}</td>
      				<td>{{ sponsor.created_at }}</td>
      				<td>{{ sponsor.updated_at }}</td>
      				<td>
                        <router-link :to="`/admin/sponsors/${sponsor.id}`" class="btn btn-warning">
                            <font-awesome-icon icon="eye" />
                        </router-link>
                        <router-link :to="`/admin/sponsors/${sponsor.id}/edit`" class="btn btn-success">
                            <font-awesome-icon icon="edit" />
                        </router-link>
                        <button class="btn btn-danger" @click="deleteSponsor(sponsor.id)">
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
            await this.$store.dispatch('sponsors/fetchSponsors')
        },
		data () {
			return {

			}
		},
		computed: {
			loadedSponsors () {
				return this.$store.getters['sponsors/sponsors']
			}
		},
        methods: {
            deleteSponsor (sponsorId) {
                console.log('deleteSponsor: ', sponsorId)
            }
        }
	}
</script>

<style scoped>

</style>
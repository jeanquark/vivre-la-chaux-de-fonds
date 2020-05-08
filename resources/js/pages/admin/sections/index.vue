<template>
	<b-container>
		<b-breadcrumb>
            <b-breadcrumb-item active><font-awesome-icon icon="file-alt" />&nbsp;Sections</b-breadcrumb-item>
        </b-breadcrumb>
		<h2 class="text-center">Gestion des sections</h2>

		<!-- sections: {{ sections }}<br /><br /> -->
		<!-- contentsArray: {{ contentsArray }}<br /><br /> -->

		<b-button to="/admin/sections/create" variant="primary" class="my-3">Créer une nouvelle section</b-button>

		<b-table
	      responsive="sm"
		  show-empty
		  small
		  stacked="md"
	      :items="sectionsArray"
	      :fields="fields"
	      :sort-by.sync="sortBy"
	      :sort-desc.sync="sortDesc"
	      class="nowrap"
	      v-if="!loading"
	    >
			<template v-slot:cell(page_id)="row">
				<span v-if="row.item.page">
					<router-link :to="`/admin/pages/${row.item.page.id}/edit`">{{ row.item.page.name }}</router-link>
				</span>
				<span v-else>-</span>
			</template>

	    	<template v-slot:cell(content)="row">
				{{ row.item.content ? `${row.item.content.substring(0, 20)} ...` : '-' }}
			</template>

			<template v-slot:cell(is_published)="row">
				<!-- {{ row.item.is_published ? 'Oui' : 'Non' }} -->
				<span class="text-success" v-if="row.item.is_published" >
                    Oui
                </span>
                <span class="text-danger" v-else>
                    Non
                </span>
			</template>

	    	<template v-slot:cell(updated_at)="row">
				{{ row.item.updated_at | moment('from', 'now') }}
			</template>

			<template v-slot:cell(actions)="data">
				<!-- <router-link :to="`/admin/sections/slug/${data.item.slug}`" class="btn btn-warning" style="display: inline-block;"> -->
				<router-link :to="`/admin/sections/${data.item.id}`" class="btn btn-warning" style="display: inline-block;">
                    <font-awesome-icon icon="eye" />
                </router-link>
                <!-- <router-link :to="`/admin/sections/${data.item.slug}/edit`" class="btn btn-success" style="display: inline-block;"> -->
                <router-link :to="`/admin/sections/${data.item.id}/edit`" class="btn btn-success" style="display: inline-block;">
                    <font-awesome-icon icon="edit" />
                </router-link>
                <button class="btn btn-danger" @click="deleteSection(data.item)">
                    <font-awesome-icon icon="trash" />
                </button>
			</template>
		</b-table>
		<b-row class="justify-content-center" v-if="loading">
			<b-spinner variant="primary" label="Spinning"></b-spinner>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		// layout: 'backend',
		async created () {
			try {
				if (Object.keys(this.$store.getters['sections/sections']).length <= 2) {
					this.$store.commit('loading/SET_LOADING', true)
					await this.$store.dispatch('sections/fetchSections')
					this.$store.commit('loading/SET_LOADING', false)
				}
			} catch (error) {
				console.log('error: ', error)
				this.$store.commit('loading/SET_LOADING', false)
			}
		},
		data () {
			return {
				sortBy: 'id',
				sortDesc: true,
				fields: [
					{ key: 'id', label: 'ID', sortable: true },
					{ key: 'name', label: 'Nom' ,sortable: true },
					// { key: 'slug', label: 'Slug', sortable: true },
					{ key: 'page_id', label: 'Page', sortable: false },
					{ key: 'content', label: 'Contenu', sortable: false },
					{ key: 'updated_at', label: 'Dernière modification', sortable: true },
					{ key: 'actions', sortable: false }
				]
			}
		},
		computed: {
			loading () {
				return this.$store.getters['loading/loading']
			},
			sections () {
				return this.$store.getters['sections/sections']
			},
			sectionsArray () {
				const array = []
				for (let key in this.sections) {
					if (this.sections.hasOwnProperty(key) && this.sections[key] != null) {
						array.push(this.sections[key])
					}
				}
				return array			
			}
		},
		methods: {
			async deleteSection (section) {
				try {
					const value = await this.$bvModal.msgBoxConfirm(`Etes-vous sûr de vouloir supprimer la section ${section.name}?`, {
							okTitle: 'OK',
							cancelTitle: 'Annuler',
						}
					)
			        // console.log('value: ', value)
			        if (value) {
			        	await this.$store.dispatch('sections/deleteSection', { sectionId: section.id })
			        	this.$noty.success('Section supprimée avec succès!')
			        }
		    	} catch (error) {
		    		console.log('error: ', error)
					this.$noty.error("Une erreur est survenue et la section n'a pas pu être supprimée.")
		    	}
			}
		}
	}
</script>

<style scoped>
	.table.b-table > thead > tr > [aria-sort]:not(.b-table-sort-icon-left) {
		vertical-align: middle;
	}
	.inline-block {
		display: inline-block;
	}
	.nowrap {
        white-space:nowrap;
    }
</style>
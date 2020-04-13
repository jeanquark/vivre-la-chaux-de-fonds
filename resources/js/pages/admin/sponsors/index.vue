<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item active><font-awesome-icon icon="dollar-sign" />&nbsp;Sponsors</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center">Sponsors</h2>
        <b-button variant="primary" class="my-3" to="/admin/sponsors/create">Créer un nouvel sponsor</b-button>

        <b-table show-empty small stacked="md" :items="sponsorsArray" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" class="nowrap" v-if="!loading">
            <template v-slot:cell(image)="row">
                <img :src="`/images/sponsors2/${row.item.image}`" style="max-width: 100px; max-height: 50px;" v-if="row.item.image" />
                <span v-else><i>Pas d'image</i></span>
            </template>

            <template v-slot:cell(is_active)="row">
                {{ row.item.is_active ? 'Oui' : 'Non' }}
            </template>

            <template v-slot:cell(updated_at)="row">
                {{ row.item.updated_at | moment('from', 'now') }}
            </template>
            <template v-slot:cell(actions)="data">
                <router-link :to="`/admin/sponsors/${data.item.id}`" class="btn btn-warning my-1" style="display: inline-block;">
                    <font-awesome-icon icon="eye" />
                </router-link>
                <router-link :to="`/admin/sponsors/${data.item.id}/edit`" class="btn btn-success my-1" style="display: inline-block;">
                    <font-awesome-icon icon="edit" />
                </router-link>
                <b-button variant="danger" @click="deleteSponsor(data.item.id)" class="my-1">
                    <font-awesome-icon icon="trash" />
                </b-button>
            </template>
        </b-table>
        <b-row class="justify-content-center" v-if="loading">
            <b-spinner variant="primary" label="Spinning"></b-spinner>
        </b-row>
    </b-container>
</template>

<script>
export default {
    layout: 'backend',
    async created() {
        if (Object.keys(this.$store.getters['sponsors/sponsors']).length < 2) {
            this.$store.commit('loading/SET_LOADING', true)
            await this.$store.dispatch('sponsors/fetchSponsors')
            this.$store.commit('loading/SET_LOADING', false)
        }
    },
    data() {
        return {
            sortBy: 'id',
            sortDesc: true,
            fields: [
                { key: 'id', label: 'ID', sortable: true },
                { key: 'name', label: 'Nom', sortable: true },
                { key: 'image', label: 'Image', sortable: true },
                { key: 'is_active', label: 'Actif?', sortable: true },
                { key: 'updated_at', label: 'Dernière modification', sortable: true },
                { key: 'actions', sortable: false }
            ]
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        sponsorsArray() {
            return Object.values(this.$store.getters['sponsors/sponsors'])
        }
    },
    methods: {
        async deleteSponsor(sponsorId) {
            try {
                const value = await this.$bvModal.msgBoxConfirm(`Etes-vous sûr de vouloir supprimer le sponsor ${sponsorId}?`, {
                    okTitle: 'OK',
                    cancelTitle: 'Annuler'
                })
                console.log('value: ', value)
                if (value) {
                    await this.$store.dispatch('sponsors/deleteSponsors', { activityId })
                    this.$noty.success('Sponsor supprimé avec succès!')
                }
            } catch (error) {
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être supprimé.")
            }
        }
    }
}
</script>

<style scoped></style>

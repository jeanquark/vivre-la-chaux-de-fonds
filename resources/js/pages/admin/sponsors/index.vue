<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item active><font-awesome-icon icon="dollar-sign" />&nbsp;Sponsors</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center">Sponsors</h2>
        <b-button variant="primary" class="my-3" to="/admin/sponsors/create">Créer un nouvel sponsor</b-button>

        <b-table show-empty small stacked="md" :items="sponsorsArray" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" class="nowrap" v-if="!loading">
            <template v-slot:cell(image)="row">
                <img :src="`/images/${row.item.image}`" style="max-width: 100px; max-height: 50px" v-if="row.item.image" />
                <span v-else><i>Pas d'image</i></span>
            </template>

            <template v-slot:cell(is_active)="row">
                <span class="text-success" v-if="row.item.is_active"> Oui </span>
                <span class="text-danger" v-else> Non </span>
            </template>

            <template v-slot:cell(is_partner)="row">
                <span class="text-success" v-if="row.item.is_partner"> Oui </span>
                <span class="text-danger" v-else> Non </span>
            </template>

            <template v-slot:cell(updated_at)="row">
                {{ row.item.updated_at | moment('from', 'now') }}
            </template>
            <template v-slot:cell(actions)="data">
                <router-link :to="`/admin/sponsors/${data.item.id}`" class="btn btn-warning my-1" style="display: inline-block">
                    <font-awesome-icon icon="eye" />
                </router-link>
                <router-link :to="`/admin/sponsors/${data.item.id}/edit`" class="btn btn-success my-1" style="display: inline-block">
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
                { key: 'id', label: 'ID', sortable: true, thClass: 'align-middle' },
                { key: 'name', label: 'Nom', sortable: true, thClass: 'align-middle' },
                { key: 'image', label: 'Image', sortable: true, thClass: 'align-middle' },
                { key: 'is_active', label: 'Actif?', sortable: true, thClass: 'align-middle' },
                { key: 'is_partner', label: 'Partenaire?', sortable: true, thClass: 'align-middle' },
                // { key: 'is_supporter', label: 'Support seulement?', sortable: true },
                { key: 'updated_at', label: 'Dernière modification', sortable: true, thClass: 'align-middle' },
                { key: 'actions', sortable: false, thClass: 'align-middle' },
            ],
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        sponsorsArray() {
            return Object.values(this.$store.getters['sponsors/sponsors'])
        },
    },
    methods: {
        async deleteSponsor(sponsorId) {
            try {
                const value = await this.$bvModal.msgBoxConfirm(`Etes-vous sûr de vouloir supprimer le sponsor ${sponsorId}?`, {
                    okTitle: 'Oui',
                    cancelTitle: 'Annuler',
                })
                console.log('value: ', value)
                if (value) {
                    await this.$store.dispatch('sponsors/deleteSponsor', { sponsorId })
                    this.$noty.success('Sponsor supprimé avec succès!')
                }
            } catch (error) {
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être supprimé.")
            }
        },
    },
}
</script>

<style scoped>

</style>

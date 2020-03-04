<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item active><font-awesome-icon icon="users" />&nbsp;Utilisateurs</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center">Utilisateurs</h2>
        <!-- users: {{ users }}<br /><br /> -->
        <b-button variant="primary" class="my-3" to="/admin/users/create">Créer un nouvel utilistateur</b-button>

        <b-table show-empty small stacked="md" responsive="sm" :items="users" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" class="nowrap" v-if="!loading">
            <template v-slot:cell(role)="row">
                <!-- {{ row.item.roles }} -->
                {{ row.item.roles[0].name }}
            </template>

            <template v-slot:cell(updated_at)="row">
                {{ row.item.updated_at | moment('from', 'now') }}
            </template>
            <template v-slot:cell(actions)="data">
                <b-button variant="info" @click="updateUserRole(data.item, 'admin')" v-if="data.item.roles[0].slug === 'user'" class="my-1">
                    Devenir Admin
                </b-button>
                <b-button variant="info" @click="updateUserRole(data.item, 'user')" v-if="data.item.roles[0].slug === 'admin'" class="my-1">
                    Devenir Utilisateur
                </b-button>
                <router-link :to="`/admin/users/${data.item.id}`" class="btn btn-warning my-1" style="display: inline-block;">
                    <font-awesome-icon icon="eye" />
                </router-link>
                <router-link :to="`/admin/users/${data.item.id}/edit`" class="btn btn-success my-1" style="display: inline-block;">
                    <font-awesome-icon icon="edit" />
                </router-link>
                <b-button variant="danger" @click="deleteUser(data.item.id)" class="my-1">
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
        if (this.$store.getters['users/users'].length < 1) {
            this.$store.commit('loading/SET_LOADING', true)
            await this.$store.dispatch('users/fetchUsers')
            this.$store.commit('loading/SET_LOADING', false)
        }
    },
    data() {
        return {
            sortBy: 'id',
            sortDesc: true,
            fields: [
                { key: 'id', label: 'ID', sortable: true },
                { key: 'email', label: 'Email', sortable: true },
                { key: 'role', label: 'Role', sortable: true },
                // { key: 'created_at', label: 'Date de création', sortable: true },
                { key: 'updated_at', label: 'Dernière modification', sortable: true },
                { key: 'actions', sortable: false }
            ]
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        users() {
            return this.$store.getters['users/users']
        }
    },
    methods: {
        async updateUserRole(user, newRole) {
            try {
                console.log('updateUserRole: ', user, newRole)
                await this.$store.dispatch('users/updateUser', { user, newRole })
                this.$noty.success('Utilisateur mis à jour avec succès!')
            } catch (error) {
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et l'utilisateur n'a pas pu être mis à jour.")
            }
        },
        async deleteUser(userId) {
            try {
                const value = await this.$bvModal.msgBoxConfirm(`Etes-vous sûr de vouloir supprimer l utilisateur ${userId}?`, {
                    okTitle: 'OK',
                    cancelTitle: 'Annuler'
                })
                console.log('value: ', value)
                if (value) {
                    await this.$store.dispatch('users/deleteUser', { userId })
                    this.$noty.success('Utilisateur supprimée avec succès!')
                }
            } catch (error) {
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et l'utilisateur n'a pas pu être supprimé.")
            }
            // try {
            //  const dialog = await this.$dialog.confirm('Voulez-vous vraiment supprimer cet utilisateur?')
            //  console.log('dialog: ', dialog)
            //  console.log('deleteUser: ', userId)
            //  await this.$store.dispatch('users/deleteUser', { userId })
            // } catch (error) {
            //  console.log('error from front: ', error)
            // }
        }
    }
}
</script>

<style scoped></style>

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

        <!-- user: {{ user }}<br /><br /> -->
        <b-row class="justify-content-center" v-if="user">
            <b-col cols="12">
                <b-table show-empty responsive="sm" :items="usersArray" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" class="nowrap" :stacked="true">
                    <template v-slot:cell(role)="row">
                        {{ row.item.roles[0] ? row.item.roles[0].name : '' }}
                    </template>
                    <template v-slot:cell(created_at)="row">
                        {{ row.item.created_at | moment('Do MMMM YYYY') }}
                    </template>
                    <template v-slot:cell(updated_at)="row">
                        {{ row.item.updated_at | moment('from', 'now') }}
                    </template>
                </b-table>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    layout: 'backend',
    async created() {
        // if (this.$store.getters['users/users'].length < 1) {
        // 	await this.$store.dispatch('users/fetchUsers')
        // }
        if (!this.user) {
            // await this.$store.dispatch('users/fetchUserById', { userId: this.$route.params.id })
            await this.$store.dispatch('users/fetchUsers')
        }
    },
    data () {
        return {
            sortBy: 'id',
            sortDesc: true,
            fields: [
                { key: 'id', label: 'ID', sortable: true },
                { key: 'firstname', label: 'Prénom', sortable: true },
                { key: 'lastname', label: 'Nom', sortable: true },
                { key: 'email', label: 'Email', sortable: true },
                { key: 'role', label: 'Role', sortable: true },
                { key: 'created_at', label: 'Date de création', sortable: true },
                { key: 'updated_at', label: 'Dernière modification', sortable: true }
            ]
        }
    },
    computed: {
        loading () {
            return this.$store.getters['loading/loading']
        },
        users() {
            return this.$store.getters['users/users']
        },
        user() {
            return this.$store.getters['users/users'][parseInt(this.$route.params.id)]
        },
        usersArray() {
            const array = []
            array.push(this.user)
            return array
        }
    }
}
</script>

<style scoped></style>

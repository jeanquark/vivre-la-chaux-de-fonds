<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item active><font-awesome-icon icon="envelope" />&nbsp;Newsletters</b-breadcrumb-item>
        </b-breadcrumb>

        <h2 class="text-center">Newsletters</h2>
        <!-- newsletters: {{ newsletters }}<br /><br /> -->

        <b-table
            ref="selectableTable"
            selectable
            select-mode="multi"
            :items="newsletters"
            :fields="fields"
            responsive="sm"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            @row-selected="onRowSelected"
        >
            <!-- Example scoped slot for select state illustrative purposes -->
            <template v-slot:cell(selected)="{ rowSelected }">
                <template v-if="rowSelected">
                <span aria-hidden="true">&check;</span>
                <span class="sr-only">Selected</span>
                </template>
                <template v-else>
                <span aria-hidden="true">&nbsp;</span>
                <span class="sr-only">Not selected</span>
                </template>
            </template>

            <template v-slot:cell(is_active)="row">
                <span class="text-success" v-if="row.item.is_active">
                    Oui
                </span>
                <span class="text-danger" v-else>
                    Non
                </span>
            </template>
            
            <template v-slot:cell(updated_at)="row">
                {{ row.item.updated_at | moment('from', 'now') }}
            </template>
        </b-table>
        <p>
            <b-button size="sm" @click="selectAllRows">Tout sélectionner</b-button>
            <b-button size="sm" @click="clearSelected">Tout désélectionner</b-button>
        </p>
        <p>
            Selected Rows:<br>
            {{ selected }}
        </p>

    </b-container>
</template>

<script>
import axios from 'axios'
export default {
    layout: 'backend',
    async created() {
        try {
            // if (Object.keys(this.$store.getters['newsletters/newsletters']).length < 2) {
                this.$store.commit('loading/SET_LOADING', true)
                await this.$store.dispatch('newsletters/fetchNewsletters')
                this.$store.commit('loading/SET_LOADING', false)
            // }
        } catch (error) {
            console.log('error: ', error)
            this.$store.commit('loading/SET_LOADING', false)
        }
    },
    data() {
        return {
            sortBy: 'id',
            sortDesc: true,
            fields: [
                { key: 'id', label: 'ID', sortable: true },
                { key: 'selected', label: 'Sélectionné?', sortable: true },
                { key: 'email', label: 'E-mail', sortable: true },
                { key: 'is_active', label: 'Est actif?', sortable: true },
                { key: 'emails_sent', label: "Nb. d'e-mails envoyés", sortable: true },
                // { key: 'last_sent_email', label: 'Dernier e-mail envoyé', sortable: true },
                { key: 'updated_at', label: 'Dernière modification', sortable: true },
                { key: 'actions', sortable: false }
            ],
            items: [
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
            ],
            selected: []
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        newsletters() {
            return Object.values(this.$store.getters['newsletters/newsletters'])
        }
        // activitiesArray() {
        //     return Object.values(this.$store.getters['activities/activities'])
        // }
    },
    methods: {
        onRowSelected(items) {
            this.selected = items
        },
        selectAllRows() {
            this.$refs.selectableTable.selectAllRows()
        },
        clearSelected() {
            this.$refs.selectableTable.clearSelected()
        },
        async deleteActivity(activityId) {
            try {
                const value = await this.$bvModal.msgBoxConfirm(`Etes-vous sûr de vouloir supprimer l'activité ${activityId}?`, {
                    okTitle: 'Oui',
                    cancelTitle: 'Annuler'
                })
                console.log('value: ', value)
                if (value) {
                    await this.$store.dispatch('activities/deleteActivity', { activityId })
                    this.$noty.success('Activité supprimée avec succès!')
                }
            } catch (error) {
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et l'activité n'a pas pu être supprimée.")
            }
        }
    }
}
</script>

<style scoped></style>

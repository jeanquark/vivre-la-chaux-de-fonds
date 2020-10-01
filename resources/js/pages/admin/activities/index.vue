<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item active><font-awesome-icon icon="calendar-day" />&nbsp;Activités</b-breadcrumb-item>
        </b-breadcrumb>

        <h2 class="text-center">Activités</h2>
        <router-link to="/admin/activities/create" class="btn btn-primary my-3">Créer une nouvelle activité</router-link>
        <!-- activities: {{ activities }}<br /><br /> -->

        <b-table show-empty small stacked="md" :items="activities" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" class="nowrap" v-if="!loading">
        <!-- <b-table show-empty small stacked="md" :items="activities" :fields="fields" class="nowrap" v-if="!loading"> -->
            <template v-slot:cell(image)="row">
                <img :src="`/images/${row.item.image}`" style="max-width: 100px; max-height: 50px;" v-if="row.item.image" />
                <span v-else><i>Pas d'image</i></span>
            </template>

            <template v-slot:cell(is_published)="row">
                <span class="text-success" v-if="row.item.is_published">
                    Oui
                </span>
                <span class="text-danger" v-else>
                    Non
                </span>
            </template>

            <template v-slot:cell(is_on_frontpage)="row">
                <span class="text-success" v-if="row.item.is_on_frontpage">
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
                <router-link :to="`/admin/activities/${data.item.id}`" class="btn btn-warning my-1" style="display: inline-block;">
                    <font-awesome-icon icon="eye" />
                </router-link>

                <router-link :to="`/admin/activities/${data.item.id}/edit`" class="btn btn-success my-1" style="display: inline-block;">
                    <font-awesome-icon icon="edit" />
                </router-link>
                <b-button variant="danger" @click="deleteActivity(data.item.id)" class="my-1">
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
import axios from 'axios'
export default {
    layout: 'backend',
    async created() {
        try {
            if (Object.keys(this.$store.getters['activities/activities']).length < 2) {
                this.$store.commit('loading/SET_LOADING', true)
                await this.$store.dispatch('activities/fetchActivities')
                this.$store.commit('loading/SET_LOADING', false)
            }
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
                { key: 'name', label: 'Nom', sortable: true },
                { key: 'image', label: 'Image', sortable: true },
                { key: 'is_published', label: 'Publié?', sortable: true },
                { key: 'is_on_frontpage', label: "En page d'accueil?", sortable: true },
                { key: 'updated_at', label: 'Dernière modification', sortable: true },
                { key: 'actions', sortable: false }
            ]
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        activities() {
            return Object.values(this.$store.getters['activities/activities'])
        }
        // activitiesArray() {
        //     return Object.values(this.$store.getters['activities/activities'])
        // }
    },
    methods: {
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

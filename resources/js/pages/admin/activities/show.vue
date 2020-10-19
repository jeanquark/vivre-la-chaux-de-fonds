<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/activities" class="navigation">
                <font-awesome-icon icon="calendar-day" />
                <span>Activités</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Montrer</b-breadcrumb-item>
        </b-breadcrumb>

        <!-- activity: {{ activity }}<br /><br /> -->
        <!-- activityArray: {{ activityArray }}<br /><br /> -->
        <h2 class="text-center" v-if="activity">
            Activité <span class="primary-color">{{ activity.name }}</span>
        </h2>

        <b-row class="justify-content-center" v-if="activity">
            <b-col cols="12">
                <b-table show-empty responsive="sm" :items="activityArray" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" class="nowrap" :stacked="true">
                    <template v-slot:cell(image)="row">
                        <img :src="`/images/${row.item.image}`" width="200" />
                    </template>
                    <template v-slot:cell(is_published)="row">
                        {{ row.item.is_published ? 'Oui' : 'Non' }}
                    </template>
                    <template v-slot:cell(is_on_frontpage)="row">
                        {{ row.item.is_on_frontpage ? 'Oui' : 'Non' }}
                    </template>
                    <template v-slot:cell(sponsors)="row">
                        <div v-for="sponsor in row.item.sponsors" :key="sponsor.id" class="p-1">
                            <img :src="`/images/${sponsor.image}`" width="100" />
                            {{ sponsor.name }}
                        </div>
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
    // layout: 'backend',
    mounted() {
        if (!this.$store.getters['activities/activities'][this.$route.params.id]) {
            // this.$store.dispatch('activities/fetchActivityById', { activityId: this.$route.params.id })
            this.$store.dispatch('activities/fetchActivities', { id: this.$route.params.id })
        }
    },
    data() {
        return {
            sortBy: 'id',
            sortDesc: true,
            fields: [
                { key: 'id', label: 'ID', sortable: true },
                { key: 'name', label: 'Nom', sortable: true },
                { key: 'slug', label: 'Slug', sortable: true },
                { key: 'subtitle', label: 'Sous-titre', sortable: true },
                { key: 'content', label: 'Contenu', sortable: true },
                { key: 'start_date', label: 'Date de début', sortable: true },
                { key: 'end_date', label: 'Date de fin', sortable: true },
                { key: 'image', label: 'Image', sortable: false },
                { key: 'is_published', label: 'Publié?', sortable: true },
                { key: 'is_on_frontpage', label: 'En première page?', sortable: true },
                { key: 'sponsors', label: 'Sponsors', sortable: false },
                { key: 'created_at', label: 'Date de création', sortable: true },
                { key: 'updated_at', label: 'Dernière modification', sortable: true }
            ]
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        activity() {
            return this.$store.getters['activities/activities'][this.$route.params.id]
        },
        activityArray() {
            const array = []
            array.push(this.activity)
            return array
        }
    }
}
</script>

<style lang="scss" scoped>
@import './resources/sass/_variables.scss';
.primary-color {
    color: $primary;
}
</style>

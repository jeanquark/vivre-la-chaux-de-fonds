<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/sponsors" class="navigation">
                <font-awesome-icon icon="dollar-sign" />
                <span>Sponsors</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Montrer</b-breadcrumb-item>
        </b-breadcrumb>

        <h2 class="text-center" v-if="sponsor">Sponsor {{ sponsor.name }}</h2>

        <b-row class="justify-content-center">
            <b-col cols="12">
                <b-table show-empty responsive="sm" :items="sponsorArray" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" class="nowrap" :stacked="true">
                    <template v-slot:cell(image)="row">
                        <img :src="`/images/sponsors2/${row.item.image}`" width="200" />
                    </template>
                    <template v-slot:cell(is_active)="row">
                        {{ row.item.is_active ? 'Oui' : 'Non' }}
                    </template>
                    <template v-slot:cell(activities)="row">
                        <div v-for="activity in row.item.activities" :key="activity.id" class="p-1">
                            <img :src="`/images/activities/${activity.image}`" width="100" />
                            {{ activity.name }}
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
    layout: 'backend',
    mounted() {
        if (!this.$store.getters['sponsors/sponsors'][this.$route.params.id]) {
            this.$store.dispatch('sponsors/fetchSponsor', { sponsorId: this.$route.params.id })
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
                { key: 'image', label: 'Image', sortable: false },
                { key: 'contribution', label: 'Contribution', sortable: true },
                { key: 'end_date', label: 'Date de fin', sortable: true },
                { key: 'is_active', label: 'actif?', sortable: true },
                { key: 'activities', label: 'Activités', sortable: false },
                { key: 'created_at', label: 'Date de création', sortable: true },
                { key: 'updated_at', label: 'Dernière modification', sortable: true }
            ]
        }
    },
    computed: {
        sponsor() {
            return this.$store.getters['sponsors/sponsors'][this.$route.params.id]
        },
        sponsorArray() {
            const array = []
            array.push(this.sponsor)
            return array
        }
    }
}
</script>

<style scoped></style>

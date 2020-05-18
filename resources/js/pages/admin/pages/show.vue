<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/pages" class="navigation">
                <font-awesome-icon icon="file" />
                <span>Pages</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Montrer</b-breadcrumb-item>
        </b-breadcrumb>

        <!-- page: {{ page }}<br /><br /> -->
        <!-- pageArray: {{ pageArray }}<br /><br /> -->
        <h2 class="text-center" v-if="page">Page "{{ page.name }}"</h2>

        <b-row class="justify-content-center">
            <b-col cols="12">
                <b-table show-empty responsive="sm" :items="pageArray" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" class="nowrap" :stacked="true">
                    <template v-slot:cell(sections)="row">
                        <div v-for="section in row.item.sections" :key="section.id">
                            {{ section.name }}
                        </div>
                    </template>
                    <template v-slot:cell(is_published)="row">
                        {{ row.item.is_published ? 'Oui' : 'Non' }}
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

        <b-row no-gutters class="my-2">
            Rendu du contenu HTML:<br />
            <div v-html="page ? page['content'] : ''" id="textBox" class="p-3" style=""></div>
        </b-row>
    </b-container>
</template>

<script>
export default {
    mounted() {
        if (!this.$store.getters['pages/pages'][this.$route.params.id]) {
            this.$store.dispatch('pages/fetchPageById', { pageId: this.$route.params.id })
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
                { key: 'sections', label: 'Sections', sortable: false },
                { key: 'content', label: 'Contenu', sortable: true },
                { key: 'is_published', label: 'Publié?', sortable: true },
                { key: 'created_at', label: 'Date de création', sortable: true },
                { key: 'updated_at', label: 'Dernière modification', sortable: true }
            ]
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        page() {
            return this.$store.getters['pages/pages'][this.$route.params.id]
        },
        pageArray() {
            // return this.page
            // return Object.values(this.$store.getters['pages/pages'])
            // return Object.entries(this.page)

            // Convert object to array
            const array = []
            array.push(this.page)
            return array
        }
    }
}
</script>

<style lang="scss" scoped>
@import './resources/sass/_variables.scss';
#textBox {
    width: 100%;
    border: 6px double $secondary;
}
</style>

<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/sections" class="navigation">
                <font-awesome-icon icon="columns" />
                <span>Sections</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Montrer</b-breadcrumb-item>
        </b-breadcrumb>

        <!-- section: {{ section }}<br /><br /> -->
        <!-- sectionArray: {{ sectionArray }}<br /><br /> -->
        <h2 class="text-center" v-if="section">Section <span class="primary-color">{{ section.name }}</span></h2>

        <b-row no-gutters class="justify-content-center">
            <b-col cols="12" v-if="section">
                <b-table show-empty responsive="sm" :items="sectionArray" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" class="nowrap" :stacked="true">
                    
                    <template v-slot:cell(image)="row">
                        <img :src="`/images/${row.item.image}`" width="200" v-if="row.item.image" />
                        <span v-else>-</span>
                    </template>

                    <template v-slot:cell(pages)="row">
                        <div v-for="page in row.item.pages" :key="page.id">
                            {{ page.name }}
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

        <b-row no-gutters class="my-2">
            <b-col cols="12" class="">
                <div v-html="section ? section['content'] : ''" id="textBox" class="p-3" style=""></div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    async created() {
        if (!this.$store.getters['sections/sections'][this.$route.params.id]) {
            await this.$store.dispatch('sections/fetchSectionById', { sectionId: this.$route.params.id })
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
                { key: 'pages', label: 'Pages', sortable: false },
                { key: 'content', label: 'Contenu (HTML)', sortable: true },
                { key: 'created_at', label: 'Date de création', sortable: true },
                { key: 'updated_at', label: 'Dernière modification', sortable: true }
            ]
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        section() {
            return this.$store.getters['sections/sections'][this.$route.params.id]
        },
        sectionArray() {
            // Convert object to array
            const array = []
            array.push(this.section)
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
.primary-color {
    color: $primary;
}
</style>

<template>
    <b-container>
        <h1 class="text-center">On parle de nous</h1>

        <b-row class="mt-5">
            <b-col cols="3">
                <b-carousel :indicators="false" :interval="2000" fade id="carousel-fade" style="text-shadow: 0px 0px 2px #000">
                    <b-carousel-slide :img-src="`/images/partenaires/${sponsor.image}`" v-for="sponsor in sponsors" :key="sponsor.id"></b-carousel-slide>
                </b-carousel>
            </b-col>
            <b-col cols="9">
                <div role="tablist">
                    <!-- pageSections: {{ pageSections }} -->
                    <b-card no-body class="m-0 p-0">
                        <b-card-body>
                            <b-card-text v-html="page ? page['content'] : ''"></b-card-text>
                        </b-card-body>
                    </b-card>

                    <b-card no-body class="m-0 p-0" v-for="(section, index) in pageSections" :key="section.id">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="#" v-b-toggle="`accordion-${index + 1}`" variant="primary">{{ section.name }}</b-button>
                        </b-card-header>
                        <b-collapse :id="`accordion-${index + 1}`" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text v-html="section['content']"></b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    layout: 'frontend',
    metaInfo() {
        return { title: 'On parle de nous' }
    },
    async created() {
        
    },
    async mounted() {
        if (!this.$store.getters['pages/pages'][this.$route.path.substring(1)]) {
            await this.$store.dispatch('pages/fetchPageBySlug', { slug: this.$route.path.substring(1) })
        }
        if (Object.keys(this.$store.getters['sponsors/sponsors']).length < 2) {
            await this.$store.dispatch('sponsors/fetchSponsors')
        }
        this.selectedSection = this.pageSections[0]
        console.log('Done!')
    },
    data() {
        return {
            selectedSection: {}
        }
    },
    computed: {
        pages() {
            return this.$store.getters['pages/pages']
        },
        page() {
            return this.$store.getters['pages/pages'][this.$route.path.substring(1)]
        },
        sponsors() {
            return this.$store.getters['sponsors/sponsors']
        },
        pageSections() {
            return this.$store.getters['pages/pages'][this.$route.path.substring(1)] ? this.$store.getters['pages/pages'][this.$route.path.substring(1)]['sections'] : ''
            // if (this.$store.getters['pages/pages'][this.$route.path.substring(1)]) {
            //     return this.$store.getters['pages/pages'][this.$route.path.substring(1)]['sections']
            // }
            // return
        }
    },
    methods: {
        selectSection(section) {
            console.log('selectSection: ', section)
            this.selectedSection = section
        }
    }
}
</script>

<style scoped></style>

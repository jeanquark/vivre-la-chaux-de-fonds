<template>
    <b-container>
        <!-- <h1 class="text-center">On parle de nous</h1> -->

        <b-row>
            <b-col cols="3" class="d-none d-md-block">
                <!-- <b-carousel :indicators="false" :interval="2000" fade id="carousel-fade" style="text-shadow: 0px 0px 2px #000">
                    <b-carousel-slide :img-src="`/images/${sponsor.image}`" v-for="sponsor in sponsors" :key="sponsor.id"></b-carousel-slide>
                </b-carousel> -->
                <b-carousel :indicators="false" :interval="2000" fade id="carousel-fade" style="text-shadow: 0px 0px 2px #000">
                    <b-carousel-slide v-for="sponsor in sponsors" :key="sponsor.id">
                        <img slot="img" :src="`/images/${sponsor.image}`" :class="[sponsor.link ? 'link' : '']"  @click="goToExternalLink(sponsor.link)" />
                    </b-carousel-slide>
                </b-carousel>
            </b-col>
            <!-- Loading spinner -->
            <b-col cols="12" md="9" v-if="loading">
                <b-row no-gutters align-v="center" class="justify-content-center" style="height: 15em; background-color:rgba(0, 0, 0, 0.5);">
                    <b-spinner type="grow" label="Loading..."></b-spinner>
                </b-row>
            </b-col>

            <b-col cols="12" md="9" v-else>
                <div role="tablist">
                    <b-card no-body class="m-0 p-0">
                        <b-card-body>
                            <b-card-text v-html="page ? page['content'] : ''"></b-card-text>
                            <!-- <b-table hover :items="items"></b-table> -->
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
        try {
            this.$store.commit('loading/SET_LOADING', true)
            if (Object.keys(this.$store.getters['sponsors/sponsors']).length < 2) {
                await this.$store.dispatch('sponsors/fetchSponsors', { is_active: true })
            }
            if (!this.page) {
                await this.$store.dispatch('pages/fetchPageBySlug', { pageSlug: this.$route.path.substring(1) })
            }
            this.selectedSection = this.pageSections[0]
            this.$store.commit('loading/SET_LOADING', false)
        } catch (error) {
            this.$store.commit('loading/SET_LOADING', false)
        }
    },
    async mounted() {},
    data() {
        return {
            selectedSection: {},
            // items: [
            //     { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            //     { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            //     {
            //         age: 89,
            //         first_name: 'Geneva',
            //         last_name: 'Wilson',
            //         _rowVariant: 'danger'
            //     },
            //     {
            //         age: 40,
            //         first_name: 'Thor',
            //         last_name: 'MacDonald',
            //         _cellVariants: { age: 'info', first_name: 'warning' }
            //     },
            //     { age: 29, first_name: 'Dick', last_name: 'Dunlap' }
            // ]
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        pages() {
            return this.$store.getters['pages/pages']
        },
        page() {
            return Object.values(this.$store.getters['pages/pages']).find(page => page.slug === this.$route.path.substring(1))
        },

        pageSections() {
            return this.page ? this.page['sections'] : []
        },
        sponsors() {
            return Object.values(this.$store.getters['sponsors/sponsors']).filter(sponsor => sponsor.is_active == true)
        }
    },
    methods: {
        selectSection(section) {
            console.log('selectSection: ', section)
            this.selectedSection = section
        },
        goToExternalLink(link) {
            window.open(link, '_blank')
        }
    }
}
</script>

<style scoped>
.link {
    cursor: pointer;
}</style>

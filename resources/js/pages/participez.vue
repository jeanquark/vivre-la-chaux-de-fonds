<template>
    <b-container>
        <b-row>
            <b-col cols="3" style="border: 0px solid blue;">
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

            <b-col cols="9" style="border: 0px solid green;" v-else>
                <!-- <b-row no-gutters style="background-color:rgba(0, 0, 0, 0.5);">
                    <b-col cols="6" class="p-2" style="border: 0px solid red;">
                        <div v-for="section in pageSections" :key="section.id">
                            <b-button pill variant="primary" size="sm" class="m-1" @click="selectSection(section)" :class="{ active: section.id === selectedSection.id }">{{ section.name }}</b-button
                            ><br />
                        </div>
                        <div style="position: absolute; bottom: 0;">
                            <h2 class="text-secondary" style="">{{ selectedSection.name }}</h2>
                        </div>
                    </b-col>

                    <b-col cols="6" style="border: 0px solid orange;">
                        <b-img right :src="`/images/${selectedSection.image}`" fluid :alt="selectedSection.name" class=""></b-img>
                    </b-col>
                </b-row> -->
                <b-row no-gutters class="flex-body" style="background-color:rgba(0, 0, 0, 0.5);" v-if="pageSections.length > 0">
                    <b-col cols="6" class="flex-column p-2">
                        <div style="flex-grow: 1;">
                        <div v-for="section in pageSections" :key="section.id" >
                            <b-button pill variant="primary" size="sm" class="m-1" @click="selectSection(section)" :class="{ active: section.id === selectedSection.id }">{{ section.name }}</b-button>
                        </div>
                        </div>
                        <h2 class="text-secondary m-0" style="border: 0px solid green;">{{ selectedSection.name }}</h2>
                    </b-col>
                    <b-col cols="6" class="flex-row">
                        <b-img right :src="`/images/${selectedSection.image}`" fluid :alt="selectedSection.name" class=""></b-img>
                    </b-col>
                </b-row>

                <b-row no-gutters>
                    <b-col cols="12">
                        <b-card>
                            <b-card-text class="">
                                <div v-html="selectedSection['content']"></div>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    layout: 'frontend',
    metaInfo() {
        return { title: 'Participez!' }
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
            selectedSection: {}
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
            return this.$store.getters['sponsors/sponsors']
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
.flex-row {
    flex-direction: row;
    display: flex;
}

.flex-column {
    flex-direction: column;
    display: flex;
}

.flex-body {
    display: flex;
}
.link {
    cursor: pointer;
}
</style>

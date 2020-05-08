<template>
    <b-container>
        <b-row>
            <b-col cols="3" style="border: 0px solid blue;">
                <b-carousel :indicators="false" :interval="2000" fade id="carousel-fade" style="text-shadow: 0px 0px 2px #000">
                    <b-carousel-slide :img-src="`/images/partenaires/${sponsor.image}`" v-for="sponsor in sponsors" :key="sponsor.id"></b-carousel-slide>
                </b-carousel>
            </b-col>
            <b-col cols="9" style="border: 0px solid green;">
                <!-- {{ pages }} -->
                <!-- page: {{ page }}<br /><br /> -->
                <!-- pageSections: {{ pageSections }}<br /><br /> -->
                <!-- {{ sponsors }} -->
                <!-- selectedPage: {{ selectedPage }}<br /> -->
                <!-- selectedSection: {{ selectedSection }}<br /><br /> -->
                <b-row no-gutters class="my-3" v-if="page && page['content']">
                    <b-col cols="12">
                        <b-card>
                            <b-card-text class="">
                                <div v-html="page['content']"></div>
                            </b-card-text>
                        </b-card>
                    </b-col>
                    </b-row>
                <b-row no-gutters style="background-color:rgba(0, 0, 0, 0.5);" v-if="pageSections.length > 0">
                    <b-col cols="6" class="p-2" style="border: 0px solid red;">
						
                        <div v-for="section in pageSections" :key="section.id">
                            <b-button pill variant="primary" size="sm" class="m-1" @click="selectSection(section)" :class="{'active': section.id === selectedSection.id}">{{ section.name }}</b-button
                            ><br />
                        </div>
						<h2 class="text-secondary" style="position: absolute; bottom: 0;">{{ selectedSection.name }}</h2>
                    </b-col>

                    <b-col cols="6" style="border: 0px solid orange;">
                        <b-img right :src="`/images/pages/${selectedSection.image}`" fluid :alt="selectedSection.name" class=""></b-img>
                    </b-col>
                </b-row>
                <b-row no-gutters v-if="selectedSection">
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
        return { title: 'Association' }
    },
    async created() {
        console.log('abc: ', this.$route.path)
        // if (!this.$store.getters['pages/pages'][this.$route.path.substring(1)]) {
        if (!this.page) {
            await this.$store.dispatch('pages/fetchPageBySlug', { pageSlug: this.$route.path.substring(1) })
        }
		
		if (Object.keys(this.$store.getters['sponsors/sponsors']).length < 2) {
			await this.$store.dispatch('sponsors/fetchSponsors')
		}
		console.log('Done!')
	
        this.selectedSection = this.pageSections[0]
	},
	async mounted () {
        
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
        page () {
            // return this.$store.getters['pages/pages'][this.$route.path.substring(1)]
            // return this.$store.getters['pages/pages'][1]
            // return Object.entries(this.$store.getters['pages/pages']).find(pageId => pageId.slug === 'association');
            return Object.values(this.$store.getters['pages/pages']).find(page => page.slug === this.$route.path.substring(1));
        },
        pageSections () {
            // return this.$store.getters['pages/pages'][this.$route.path.substring(1)] ? this.$store.getters['pages/pages'][this.$route.path.substring(1)]['sections'] : []
            // return this.$store.getters['pages/pages'][1] ? this.$store.getters['pages/pages'][1]['sections'] : []
            return this.page ? this.page['sections'] : []
        },
		sponsors () {
			return this.$store.getters['sponsors/sponsors']
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

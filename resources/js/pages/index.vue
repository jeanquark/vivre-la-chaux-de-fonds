<template>
    <b-container fluid>
        <b-row class="justify-content-center">
            <b-col cols="12" md="6" lg="4" xl="3" v-if="page && page.sections" style="border: 0px solid orange;">
                <b-card class="card mb-3" v-for="section in page.sections" :key="section.id">
                    <b-card-text v-html="section.content"> </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="12" md="6" lg="8" xl="9" class="p-5" style="" v-for="activity in currentActivities" :key="activity.id">
                <b-row class="justify-content-center">
                    <b-col cols="12" md="6" lg="4">
                        <b-card :img-src="`/images/${activity.image}`" :img-alt="`${activity.name}`" img-top style="border: none; ">
                            <b-card-text class="text-center">
                                <h5 class="my-2">{{ activity.name }}</h5>
                                <b-button variant="primary" size="sm" class="my-2" :to="`/actualites/${activity.slug}`">En savoir plus &rarr;</b-button>
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
    async created() {
        console.log('this.$route.path: ', this.$route.path)
        console.log('this.$route.path.substring(1): ', this.$route.path.substring(1))
        if (!this.page) {
            await this.$store.dispatch('pages/fetchPageBySlug', { pageSlug: this.$route.path.substring(1) })
        }
        if (Object.keys(this.$store.getters['activities/activities']).length < 2) {
            await this.$store.dispatch('activities/fetchActivities')
        }
    },
    data() {
        return {}
    },
    computed: {
        screenWidth() {
            return window.innerWidth
        },
        pages() {
            return this.$store.getters['pages/pages']
        },
        page() {
            return Object.values(this.$store.getters['pages/pages']).find(page => page.slug === 'accueil')
        },
        pageSections() {
            return this.page ? this.page['sections'] : []
        },
        currentActivities() {
            return Object.values(this.$store.getters['activities/activities']).filter(activity => activity.is_on_frontpage == true)
        }
    }
}
</script>

<style lang="scss" scoped>
@import './resources/sass/_variables.scss';
.primary-color {
    color: $primary;
}
.secondary-color {
    color: $secondary;
}
.card {
    border: none;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.9);
}
</style>

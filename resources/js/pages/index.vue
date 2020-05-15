<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="12" md="8" v-if="page && page.sections">
                <!-- page: {{ page }}<br /> -->
                <b-card class="card mb-3" v-for="section in page.sections" :key="section.id" >
                    <b-card-text v-html="section.content">
                    </b-card-text>
                </b-card>
                <!-- <b-card style="border: none; border-radius: 15px; background-color: rgba(255, 255, 255, .8);">
                    <b-card-text class="text-center">
                        <h3 class="my-2" style=""><span class="secondary-color">L’Association</span> Vivre La Chaux-de-Fonds <span class="secondary-color">vous souhaite une cordiale bienvenue</span></h3>
                        <h5 style="">
                            Favoriser le développement et l’animation de la ville de La Chaux-de-Fonds, créer des ponts, tisser des liens entre les différents milieux actifs en ville et la population,
                            tels sont les buts principaux de l’Association Vivre La Chaux-de-Fonds.
                        </h5>
                    </b-card-text>
                </b-card> -->
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="12" md="6" lg="4" class="p-5" style="" v-for="activity in activities" :key="activity.id">
                <b-card :img-src="`/images/${activity.image}`" :img-alt="`${activity.name}`" img-top style="border: none;">
                    <b-card-text class="text-center">
                        <h5 class="my-2">{{ activity.name }}</h5>
                        <b-button variant="primary" size="sm" class="my-2" :to="{ name: 'activity', params: { slug: activity.slug } }">En savoir plus &rarr;</b-button>
                    </b-card-text>
                </b-card>
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
        pages() {
            return this.$store.getters['pages/pages']
        },
        page () {
            return Object.values(this.$store.getters['pages/pages']).find(page => page.slug === 'accueil');
        },
        pageSections () {
            return this.page ? this.page['sections'] : []
        },
        activities() {
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
    border: none; border-radius: 15px; background-color: rgba(255, 255, 255, .8)
}
</style>

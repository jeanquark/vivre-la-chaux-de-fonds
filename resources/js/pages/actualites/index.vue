<template>
    <b-container>
        <h1 class="text-center">Actualités & Manifestations</h1>
        <!-- activities: {{ activities }}<br /><br /> -->
        <!-- sponsors: {{ sponsors }}<br /><br /> -->
        <!-- publishedActivities: {{ publishedActivities }}<br /><br /> -->
        <!-- today: {{ today }}<br /><br /> -->
        <b-row class="justify-content-center mt-5">
            <b-col cols="2">
                <!-- <b-card :img-src="`/images/${sponsor.image}`" img-alt="Image" img-top tag="article" class="mb-2" style="border: none;" v-for="sponsor in sponsors" :key="sponsor.id">
                </b-card> -->
                <b-carousel
                    id="carousel-1"
                    :interval="2000"
                    :fade="true"
                    :controls="false"
                    :indicators="false"
                    style=""
                >
                    <b-carousel-slide :img-src="`/images/${sponsor.image}`" v-for="sponsor in sponsors" :key="sponsor.id"></b-carousel-slide>
                </b-carousel>
            </b-col>
            <b-col cols="10">
                <b-row no-gutters class="justify-content-center">
                    
                    <b-col cols="12" sm="6" md="4" class="my-3 px-5" v-for="activity in futureActivities" :key="activity.id">
                        <b-card :img-src="`/images/${activity.image}`" img-alt="Image" img-top tag="article" class="mb-2" style="border: none;">
                            <b-card-text class="text-center">
                                <h5 class="my-2">{{ activity.name }}</h5>
                                <!-- <b-button variant="primary" size="sm" class="my-2" :to="{ name: 'activity', params: { slug: activity.slug } }">En savoir plus &rarr;</b-button> -->
                                <b-button variant="primary" size="sm" class="my-2" :to="`/actualites/${activity.slug}`">En savoir plus &rarr;</b-button>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <b-row no-gutters>
                    <b-col cols="12">
                        <h3 class="text-center">Historique</h3>
                    </b-col>
                    <b-col cols="12" sm="6" md="4" class="my-3 px-5" v-for="activity in pastActivities" :key="activity.id">
                        <b-card :img-src="`/images/${activity.image}`" img-alt="Image" img-top tag="article" class="mb-2" style="border: none;">
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
import moment from 'moment'
export default {
    layout: 'frontend',
    metaInfo() {
        return { title: 'Actualités' }
    },
    async created() {
        if (Object.keys(this.$store.getters['activities/activities']).length < 2) {
            // await this.$store.dispatch('activities/fetchActivities')
            await this.$store.dispatch('activities/fetchActivities', { is_published: 1 })
            // await this.$store.dispatch('activities/fetchActivities', { id: 1 })
            // await this.$store.dispatch('activities/fetchActivities', { slug: 'ola-portugal' })
        }
    },
    data() {
        return {
            today: moment().format('YYYY-MM-DD HH:mm:ss')
        }
    },
    computed: {
        activities() {
            return this.$store.getters['activities/activities']
        },
        futureActivities() {
            return Object.values(this.activities).filter(activity => activity.start_date > this.today)
        },
        pastActivities() {
            return Object.values(this.activities).filter(activity => activity.end_date < this.today)
        },
        publishedActivities() {
            return Object.values(this.activities).filter(activity => activity.is_published === 1)
        },
        sponsors() {
            return this.$store.getters['sponsors/sponsors']
        }
    }
}
</script>

<style scoped></style>

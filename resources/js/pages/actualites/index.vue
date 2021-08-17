<template>
    <b-container>
        <h1 class="text-center">Actualités & Manifestations</h1>
        <b-row class="justify-content-center mt-5">
            <b-col cols="3">
                <b-carousel :indicators="false" :interval="2000" fade id="carousel-fade" style="text-shadow: 0px 0px 2px #000">
                    <b-carousel-slide v-for="sponsor in sponsors" :key="sponsor.id">
                        <img slot="img" width="100%" :src="`/images/${sponsor.image}`" :class="[sponsor.link ? 'link' : '']" @click="goToExternalLink(sponsor.link)" />
                    </b-carousel-slide>
                </b-carousel>
            </b-col>
            <b-col cols="9">
                <b-row no-gutters class="justify-content-center">
                    <!-- activities: {{ activities }}<br /> -->
                    <!-- pastActivities: {{ pastActivities }} -->
                    today: {{ today }}<br /><br />
                    futureActivities: {{ futureActivities }}
                    <b-col cols="12" sm="6" md="4" class="my-3 px-5" v-for="activity in futureActivities" :key="activity.id">
                        <b-card :img-src="`/images/${activity.image}`" img-alt="Image" img-top tag="article" class="mb-2" style="" @click="goToInternalLink(activity.slug)">
                            <b-card-text class="text-center">
                                <h5 class="my-2 abc" style="">{{ activity.name }}</h5>
                                <p>
                                    {{ activity.start_date | moment('Do MMMM YYYY') }}
                                    <span v-if="activity.end_date && activity.end_date !== activity.start_date"> - <br />{{ activity.end_date | moment('Do MMMM YYYY') }}</span>
                                </p>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row no-gutters class="my-4 justify-content-center">
            <b-col cols="12" class="text-center">
                <h3 class="title">Historique</h3>
            </b-col>
        </b-row>
        <b-row no-gutters>
            <b-col cols="12" sm="6" md="4" lg="3" class="my-3 px-5" v-for="activity in pastActivities" :key="activity.id">
                <b-card
                    :img-src="`/images/${activity.image}`"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-2"
                    :class="[Math.random() < 0.5 ? 'primary-color' : 'secondary-color']"
                    @click="goToInternalLink(activity.slug)"
                >
                    <b-card-text class="text-center">
                        <h5 class="my-2">{{ activity.name }}</h5>
                        <p>
                            {{ activity.start_date | moment('Do MMMM YYYY') }}
                            <span v-if="activity.end_date && activity.end_date !== activity.start_date"> - <br />{{ activity.end_date | moment('Do MMMM YYYY') }}</span>
                        </p>
                    </b-card-text>
                </b-card>
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
        if (Object.keys(this.$store.getters['sponsors/sponsors']).length < 2) {
            await this.$store.dispatch('sponsors/fetchSponsors', { is_active: true, is_partner: true })
        }
        if (Object.keys(this.$store.getters['activities/activities']).length < 2) {
            await this.$store.dispatch('activities/fetchActivities', { is_published: 1 })
        }
    },
    data() {
        return {
            today: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
    },
    computed: {
        activities() {
            return this.$store.getters['activities/activities']
        },
        futureActivities() {
            return Object.values(this.activities).filter((activity) => activity.start_date >= this.today)
        },
        pastActivities() {
            return Object.values(this.activities)
                .filter((activity) => activity.end_date < this.today)
                .sort((a, b) => moment(b.start_date) - moment(a.start_date))
        },
        publishedActivities() {
            return Object.values(this.activities).filter((activity) => activity.is_published === 1)
        },
        sponsors() {
            return this.$store.getters['sponsors/sponsors']
        },
    },
    methods: {
        onMouseover() {
            console.log('onMouseover: ', Math.random())
        },
        goToInternalLink(link) {
            this.$router.push(`/actualites/${link}`)
        },
        goToExternalLink(link) {
            if (link) {
                window.open(link, '_blank')
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import './resources/sass/_variables.scss';
.title {
    color: $primary;
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
    display: inline-block;
    border: 0px solid red;
    background-color: rgba(255, 255, 255, 0.9);
}
.card {
    border: none;
}
.card:hover {
    cursor: pointer;
    color: #fff;
    // background: $secondary;
}
.primary-color:hover {
    background: $primary;
}
.secondary-color:hover {
    background: $secondary;
}
.link {
    cursor: pointer;
}
</style>

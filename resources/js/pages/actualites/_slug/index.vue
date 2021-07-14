<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="12" md="8" v-if="activity">
                <!-- activity: {{ activity }}<br /><br /> -->
                <!-- activity.link: {{ activity.link }}<br /><br /> -->
                <!-- sponsorPartners: {{ sponsorPartners }}<br /><br /> -->
                <!-- sponsorNotPartners: {{ sponsorNotPartners }}<br /><br /> -->
                <div class="text-center mb-3">
                    <router-link to="/actualites">&larr; Retour vers les manifestations</router-link>
                </div>
                <b-card :img-src="`/images/${activity.image}`" :img-alt="`${activity.name}`" img-top tag="article" class="mb-2" :class="[activity.link ? 'link' : '']" style="border: none">
                    <b-card-text class="">
                        <h5 class="text-center">{{ activity.name }}</h5>
                        <h6 class="text-center" v-if="activity.link"><a :href="activity.link" target="_blank">Plus d'informations &rarr;</a></h6>
                        <span v-html="activity.content"></span><br />
                        <!-- activity.images: {{ activity.images }} -->
                        <b-row class="mt-4">
                            <b-col cols="12" sm="4" md="3" v-for="(imagePath, index) in activity.images" :key="index">
                                <router-link :to="`/images/${imagePath}`" target="_blank">
                                    <b-img thumbnail fluid :src="`/images/${imagePath}`" alt="Image 1"></b-img>
                                </router-link>
                            </b-col>
                        </b-row>
                        <b-row align-v="center" class="mt-4">
                            <b-col cols="12" sm="4" md="3" class="my-3" v-for="sponsor in sponsorPartners" :key="sponsor.id">
                                <div>
                                    <a :href="sponsor.link" target="_blank">
                                        <b-img :src="`/images/${sponsor.image}`" fluid :alt="sponsor.name"></b-img>
                                    </a>
                                </div>
                            </b-col>
                            <b-col cols="12" sm="4" md="3" class="my-3" v-for="sponsor in sponsorNotPartners" :key="sponsor.id">
                                <div v-if="sponsor.is_supporter">
                                    <i
                                        >Avec le soutient de <b>{{ sponsor.name }}</b></i
                                    >
                                </div>
                                <div v-else>
                                    <a :href="sponsor.link" target="_blank">
                                        <b-img :src="`/images/${sponsor.image}`" fluid :alt="sponsor.name"></b-img>
                                    </a>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    layout: 'frontend',
    metaInfo() {
        return { title: 'Actualité' }
    },
    async created() {
        if (!this.activity || !this.activity.images) {
            await this.$store.dispatch('activities/fetchActivityBySlug', { activitySlug: this.$route.params.slug })
        }
    },
    mounted() {
        console.log(this.$route.params.slug)
    },
    data() {
        return {
            slug: this.$route.params.slug,
        }
    },
    computed: {
        activity() {
            return Object.values(this.$store.getters['activities/activities']).find((activity) => activity.slug === this.$route.params.slug)
        },
        sponsorPartners() {
            return this.activity.sponsors.filter((sponsor) => sponsor.is_partner == true)
        },
        sponsorNotPartners() {
            return this.activity.sponsors.filter((sponsor) => sponsor.is_partner == false).sort((a, b) => a.is_supporter - b.is_supporter)
        },
    },
    methods: {
        goToExternalLink(link) {
            if (link) {
                window.open(link, '_blank')
            }
        },
    },
}
</script>

<style scoped>
.link {
    /* cursor: pointer; */
}
</style>

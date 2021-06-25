<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="12" md="8" v-if="activity">
                <!-- activity: {{ activity }}<br /><br /> -->
                <!-- activity.link: {{ activity.link }}<br /><br /> -->
                <div class="text-center mb-3">
                    <router-link to="/actualites">&larr; Retour vers les manifestations</router-link>
                </div>
                <b-card :img-src="`/images/${activity.image}`" :img-alt="`${activity.name}`" img-top tag="article" class="mb-2" :class="[activity.link ? 'link' : ''] " style="border: none;">
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
                        <b-row class="mt-4">
                            <b-col cols="12" sm="4" md="3" v-for="sponsor in activity.sponsors" :key="sponsor.id">
                                <a :href="sponsor.link" target="_blank">
                                    <b-img :src="`/images/${sponsor.image}`" fluid :alt="sponsor.name"></b-img>
                                </a>
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
            slug: this.$route.params.slug
        }
    },
    computed: {
        activity() {
            return Object.values(this.$store.getters['activities/activities']).find(activity => activity.slug === this.$route.params.slug)
        }
    },
    methods: {
        goToExternalLink(link) {
            if (link) {
                window.open(link, '_blank')
            }
        }
    }

}
</script>

<style scoped>
    .link {
        /* cursor: pointer; */
    }
</style>

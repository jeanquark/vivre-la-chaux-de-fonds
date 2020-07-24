<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="12" md="8" v-if="activity">
                <!-- activity: {{ activity }}<br /><br /> -->
                <b-card :img-src="`/images/${activity.image}`" :img-alt="`${activity.name}`" img-top tag="article" class="mb-2" style="border: none;" >
                    <b-card-text class="text-center">
                        <h5>{{ activity.name }}</h5>
                        <span v-html="activity.content"></span><br />
                        <!-- activity.images: {{ activity.images }} -->
                        <b-row class="mt-4">
                            <b-col cols="12" sm="4" md="3" v-for="(imagePath, index) in activity.images" :key="index">
                              <b-img thumbnail fluid :src="`/images/${imagePath}`" alt="Image 1"></b-img>
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
    async created () {
        // if (!this.$store.getters['activities/activities'][this.$route.params.slug]) {
        if (!this.activity || !this.activity.images) {
            // console.log('load')
            await this.$store.dispatch('activities/fetchActivityBySlug', { activitySlug: this.$route.params.slug })
            // await this.$store.dispatch('activities/fetchActivities', { slug: this.$route.params.slug })
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
            // return this.$store.getters['activities/activities'][this.$route.params.slug]
            // .find(activity => activity.slug === this.$route.params.slug)
            // return Object.values(this.$store.getters['activities/activities'][1])
            return Object.values(this.$store.getters['activities/activities']).find(activity => activity.slug === this.$route.params.slug)
        }
    }
}
</script>

<style scoped></style>

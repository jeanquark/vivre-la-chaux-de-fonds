<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="12" md="8">
                <b-card :img-src="`/images/activities/${activity.image}`" img-alt="Image" img-top tag="article" style="" class="mb-2">
                    <b-card-text class="text-center">
                        <h5>{{ activity.name }}</h5>
                        {{ activity }}
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
        return { title: 'Activité' }
    },
    mounted() {
        console.log(this.$route.params.slug)
        if (!this.$store.getters['activities/activities'][this.$route.params.slug]) {
            this.$store.dispatch('activities/fetchActivity', { activitySlug: this.$route.params.slug })
        }
    },
    data() {
        return {
            slug: this.$route.params.slug
        }
    },
    computed: {
        activity() {
            return this.$store.getters['activities/activities'][this.$route.params.slug]
            // .find(activity => activity.slug === this.$route.params.slug)
        }
    }
}
</script>

<style scoped></style>

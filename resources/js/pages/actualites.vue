<template>
    <b-container>
        <b-row class="justify-content-center">
            <h1 class="my-5">Actualités & Manifestations</h1>
        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="12" md="6" lg="5" class="p-5" v-for="activity in activities" :key="activity.id">
                <b-card :img-src="`/images/activities/${activity.image}`" img-alt="Image" img-top tag="article" style="" class="mb-2">
                    <b-card-text class="text-center">
                        <h5 class="my-2">{{ activity.name }}</h5>
                        <b-button variant="primary" class="my-2" :to="{ name: 'activity', params: { slug: activity.slug } }">En savoir plus &rarr;</b-button>
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
        return { title: 'Actualités' }
    },
    created() {
        this.$store.dispatch('activities/fetchActivities')
    },
    data() {
        return {}
    },
    computed: {
        activities() {
            return this.$store.getters['activities/activities']
        }
    }
}
</script>

<style scoped></style>

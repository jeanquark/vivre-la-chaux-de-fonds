<template>
    <b-container>
        <h1 class="text-center">Actualités & Manifestations</h1>
        <!-- activities: {{ activities }}<br /><br /> -->
        <!-- publishedActivities: {{ publishedActivities }}<br /><br /> -->
        <b-row class="justify-content-center mt-5">
            <b-col cols="12" sm="6" md="4" lg="4" class="px-5" v-for="activity in publishedActivities" :key="activity.id">
                <b-card :img-src="`/images/${activity.image}`" img-alt="Image" img-top tag="article" class="mb-2" style="border: none;">
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
        return {}
    },
    computed: {
        activities() {
            return this.$store.getters['activities/activities']
        },
        publishedActivities () {
            return Object.values(this.activities).filter(activity => activity.is_published === 1)
        }
    }
}
</script>

<style scoped></style>

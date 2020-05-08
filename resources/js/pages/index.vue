<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="12" md="8">
                <b-card style="border: none; border-radius: 15px; background-color: #FFFFFF90;">
                    <b-card-text class="text-center">
                        <h3 class="my-2" style=""><span class="secondary-color">L’Association</span> Vivre La Chaux-de-Fonds 2 <span class="secondary-color">vous souhaite une cordiale bienvenue</span></h3>
                        <h5 style="">
                            Favoriser le développement et l’animation de la ville de La Chaux-de-Fonds, créer des ponts, tisser des liens entre les différents milieux actifs en ville et la population,
                            tels sont les buts principaux de l’Association Vivre La Chaux-de-Fonds.
                        </h5>
                    </b-card-text>
                </b-card>
                <!-- <b-card style="border: none; border-radius: 15px; background-color: rgba(0, 0, 0, .7);">
                    <b-card-text class="text-center">
                        <h3 class="my-2" style="color: #fff;"><span class="secondary-color">L’Association</span> Vivre La Chaux-de-Fonds 2 <span class="secondary-color">vous souhaite une cordiale bienvenue</span></h3>
                        <h5 style="color: #fff;">
                            Favoriser le développement et l’animation de la ville de La Chaux-de-Fonds, créer des ponts, tisser des liens entre les différents milieux actifs en ville et la population,
                            tels sont les buts principaux de l’Association Vivre La Chaux-de-Fonds.
                        </h5>
                    </b-card-text>
                </b-card> -->
            </b-col>
        </b-row>
        <!-- activities: {{ activities }} -->
        <b-row class="justify-content-center">
            <b-col cols="12" md="6" lg="4" class="p-5" style="" v-for="activity in activities" :key="activity.id">
                <b-card :img-src="`/images/activities/${activity.image}`" img-alt="Card image" img-top style="border: none;">
                    <b-card-text class="text-center">
                        <h5 class="my-2">{{ activity.name }}</h5>
                        <b-button variant="primary" size="sm" class="my-2" :to="{ name: 'activity', params: { slug: activity.slug } }">En savoir plus &rarr;</b-button>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>

        <!-- <b-row class="justify-content-center">
        	<b-col cols="12" md="4">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://lorempixel.com/640/480/?48980" class="d-block w-100" alt="">
                        </div>
                            <div class="carousel-item">
                            <img src="https://lorempixel.com/640/480/?48980" class="d-block w-100" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="https://lorempixel.com/640/480/?48980" class="d-block w-100" alt="">
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row> -->
    </b-container>
</template>

<script>
export default {
    layout: 'frontend',
    async created() {
        if (Object.keys(this.$store.getters['activities/activities']).length < 2) {
            await this.$store.dispatch('activities/fetchActivities')
        }
    },
    data() {
        return {}
    },
    computed: {
        activities() {
            // return this.$store.getters['activities/activities']
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
</style>

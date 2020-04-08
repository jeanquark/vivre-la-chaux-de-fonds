<template>
	<b-container>
		<b-row class="justify-content-center">
			<b-col cols="12" md="8">
				<h2 class="text-center px-2 my-5">L’Association Vivre La Chaux-de-Fonds vous souhaite une cordiale bienvenue.</h2>
                    <h4 class="text-center">Favoriser le développement et l’animation de la ville de La Chaux-de-Fonds, créer des ponts, tisser des liens entre les différents milieux actifs en ville et la population, tels sont les buts principaux de l’Association Vivre La Chaux-de-Fonds.</h4>
			</b-col>
		</b-row>

		<b-row class="justify-content-center">

			<b-col cols="6" class="p-5" v-for="activity in activities" :key="activity.id">
                <b-card :img-src="`/images/activities/${activity.image}`" img-alt="Card image" img-top>
                	<b-card-text class="text-center">
                        <h5 class="my-2">{{ activity.name }}</h5>
                        <b-button variant="primary" class="my-2" :to="{ name: 'activity', params: { slug: activity.slug}}">En savoir plus &rarr;</b-button>
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
		async created () {
			if (this.$store.getters['activities/activities'].length < 2) {
				await this.$store.dispatch('activities/fetchActivities')
			}
		},
		data () {
			return {

			}
		},
		computed: {
			activities () {
                return this.$store.getters['activities/activities'].slice(0, 4)
            }
		}

	}
</script>

<style scoped>

</style>
<template>
  	<div>
        
        
        <!-- loadedActivities: {{ loadedActivities }}<br /> -->

        <div class="container-fluid" id="" style="border: 2px solid red;">
            <div class="row justify-content-center py-5" style="border: 2px solid orange;">
                <div class="col-12 col-md-8">
                    <h2 class="text-center px-2 my-5">L’Association Vivre La Chaux-de-Fonds vous souhaite une cordiale bienvenue.</h2>
                    <h4 class="text-center">Favoriser le développement et l’animation de la ville de La Chaux-de-Fonds, créer des ponts, tisser des liens entre les différents milieux actifs en ville et la population, tels sont les buts principaux de l’Association Vivre La Chaux-de-Fonds.</h4>
                </div>
            </div>
            <div class="row justify-content-center py-5" id="activities" style="border: 2px solid green;">
                <div class="col-12 col-md-8 col-lg-6">
                    <div class="row">
                        <div class="col-6 p-5" v-for="activity in loadedActivities" :key="activity.id">
                            <div class="card" style="">
                                <img :src="activity.image" class="card-img-top" alt="Annonce">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-center">St-Nicolas 2019</h5>
                                    <router-link :to="`/activities/${activity.slug}`" class="text-center btn btn-primary">En savoir plus</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 col-md-4">
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
                </div>
            </div>
        </div>


        <div class="d-flex align-items-end flex-column" id="footer" style="border: 2px solid green; height: 200px; color: #000;">
            <div class="mt-auto p-2">
                <div class="mb-2 mr-2">
                    <router-link to="/login" style="color: #000; font-size: 2em;">Login</router-link><br />
                    <router-link to="/admin" style="color: #000; font-size: 2em;">Admin</router-link>
                    <span>Facebook</span>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
    // import { Slide, Bubble } from 'vue-burger-menu'
	export default {
		// components: { Slide, Bubble },
  		metaInfo () {
    		return { title: 'Accueil' }
  		},
        layout: 'frontend',
        async created () {
            await this.$store.dispatch('activities/fetchActivities')
        },
  		data () {
  			return {

  			}
  		},
        computed: {
            loadedActivities () {
                return this.$store.getters['activities/activities'].slice(0, 4)
            }
        },
  		methods: {
  		}
	}
</script>

<style>
    
    
    
</style>
<style scoped>
    
    .container {
        text-align: center;
        width: 60%;
        margin: 110px auto;
        /*height: 1000px;*/
        background: url('/images/svg/city.svg') no-repeat;
        background-size: cover;
    }
    .container2 {
        text-align: center;
        margin: 110px auto;
        min-height: 600px;
        background: url('/images/svg/city.svg') no-repeat;
        background-size: cover;
    }
    .container p {
        font-size: 1.3em;
        line-height: 1.4em;
    }
    #activities {
        background: url('/images/svg/city.svg') no-repeat;
        background-size: cover;
    }
    #footer {
        /*position: absolute;*/
        /*height: 450px;*/
        /*bottom: 0;*/
        width: 100%;
        background: url('/images/svg/footer-bg2.svg') no-repeat;
        /*background-repeat: no-repeat;*/
        background-size: cover;
    }
    h1 {
        font-size: 3.5em;
    }
    #logo {
        font-size: 2em;
    }
    #left {
        position: absolute;
        top: 60%;
    }
    #right {
        position: absolute;
        top: 20%;
        right: 0;
        z-index: 1;
    }
    #abc {
        /*background: url('/images/svg/background.svg') center;*/
        background: url('/images/svg/bg.svg') center;
        background-repeat: no-repeat;
        background-size: cover;
    }


    


    
</style>
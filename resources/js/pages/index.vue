<template>
	<div id="body" style="border: 0px solid red;">
		<vue-navigation-bar :options="navbarOptions" />
		<h1 class="text-center my-5">Association Vivre La-Chaux-de-Fonds</h1>
		<div class="container">
			<div class="row justify-content-center">
					<div class="col-6">
						<h1 class="text-center my-3">L'Association Vivre La Chaux-de-fonds vous souhaite une cordiale bienvenue.</h1>
						<h3 class="text-center my-3">Que faisons-nous?</h3>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-8">
						<h3 class="text-center my-3">Favoriser le développement et l’animation de la ville de La Chaux-de-Fonds, créer des ponts, tisser des liens entre les différents milieux actifs en ville et la population, tels sont les buts principaux de l’Association Vivre La Chaux-de-Fonds.</h3>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-4" v-for="i in 6" :key="i">
						<div class="card" style="">
				  			<img src="/images/annonce_saint_nicolas_2019.jpg" class="card-img-top" alt="Annonce">
				  			<div class="card-body text-center">
				    			<h5 class="card-title text-center">St-Nicolas 2019</h5>
				    			<router-link to="/" class="text-center btn btn-primary">En savoir plus</router-link>
				  			</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import "vue-navigation-bar/dist/vue-navigation-bar.css";
	import VueNavigationBar from "vue-navigation-bar";

	export default {
		components: { VueNavigationBar },
		data () {
			return {
				navbarOptions: {
		            elementId: 'main-navbar',
		            isUsingVueRouter: true,
		            mobileBreakpoint: 992,
		            brandImagePath: './',
		            // brandImage: require('images/logo.png'),
		            brandImage: require('../../../public/images/logo.png'),
		            // brandImage: require('../../../../logo.png'),
		            brandImageAltText: 'brand-image',
		            // collapseButtonImageOpen: require('../src/assets/images/collapse-menu-dark.png'),
		            // collapseButtonImageClose: require('../src/assets/images/times.png'),
		            showBrandImageInMobilePopup: true,
		            ariaLabelMainNav: 'Main Navigation',
		            tooltipAnimationType: 'shift-away',
		            menuOptionsLeft: [
		            	{
		                	type: 'link',
		                	text: 'Actualités & Manifestations',
		                	path: './pricing',
		                	iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
		              	},
		              	{
			                type: 'link',
			                text: 'Association',
			                subMenuOptions: [
			                  	{
			                    	isLinkAction: true,
			                    	type: "link",
			                    	text: "Présentation",
			                    	subText: "Stupid corporate wet blankets. Like booze ever killed anyone.",
			                    	path: "./about",
			                    	iconLeft: '<i class="fa fa-star fa-fw"></i>'
			                  	},
			                  	{
				                    type: 'hr',
			                  	},
			                  	{
				                    type: 'link',
			                    	text: 'Statuts',
			                    	subText: 'You\'re a presentation tool!',
			                    	path: './locations',
			                  	},
			                  	{
				                    type: 'hr',
			                  	},
			                  	{
				                    type: 'link',
			                    	text: 'Le Comité',
			                    	path: './blog',
			                  	},
			                  	{
				                    type: 'link',
			                    	text: 'Cotisations annuelles',
			                    	path: './blog',
			                  	},
			                  	{
				                    type: 'link',
			                    	text: 'Historique',
			                    	path: './blog',
			                  	},
			                ]
						},
						{
		                	type: 'link',
		                	text: 'Participez!',
		                	path: './pricing',
		                	iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
		              	},
		              	{
		                	type: 'link',
		                	text: 'On parle de nous',
		                	path: './pricing',
		                	iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
		              	},
		              	{
		                	type: 'link',
		                	text: 'Contact',
		                	path: './contact',
		                	iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
		              	},
		              	{
		                	type: 'link',
		                	text: 'S\'enregister',
		                	path: './enregistrement',
		                	iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
		              	},
		              	{
		                	type: 'link',
		                	text: 'Login',
		                	path: './login',
		                	iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
		              	},
		              	{
		                	type: 'link',
		                	text: 'Admin',
		                	path: './admin',
		                	iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
		              	}
		            ],
		            menuOptionsRight: [
		            	{
			                type: 'button',
		                	text: 'Signup',
		                	path: './signup',
		                	class: 'button-red'
		              	},
		              	{
			                type: 'button',
		                	text: 'Login',
		                	path: './login',
		                	iconRight: '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
		              	}
		            ]
		        }
			}
		}
	}
</script>

<style scoped>
	#body {
		/*background: url('/images/svg/background.svg') center;
	    background-repeat: no-repeat;
	    background-size: cover;*/
	}
</style>
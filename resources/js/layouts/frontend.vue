<template>
	<div>
		<vue-navigation-bar :options="navbarOptions" />
		<!-- <div class="center"></div> -->
		<child />
	</div>
</template>

<script>
import VueNavigationBar from "vue-navigation-bar";
import "vue-navigation-bar/dist/vue-navigation-bar.css";

export default {
	name: 'FrontendLayout',
	components: { VueNavigationBar },
	created () {
		console.log('Using frontend layout!')
	},
	data () {
		return {
			collapsed: false,
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
		            	path: './',
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
		            		path: './',
		            	},
		            	{
		            		type: 'hr',
		            	},
		            	{
		            		type: 'link',
		            		text: 'Le Comité',
		            		path: './',
		            	},
		            	{
		            		type: 'link',
		            		text: 'Cotisations annuelles',
		            		path: './',
		            	},
		            	{
		            		type: 'link',
		            		text: 'Historique',
		            		path: './',
		            	},
		            	]
		            },
		            {
		            	type: 'link',
		            	text: 'Participez!',
		            	path: './',
		            	iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
		            },
		            {
		            	type: 'link',
		            	text: 'On parle de nous',
		            	path: './',
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
		},
		methods: {

		}
	}
</script>

<style scoped>
	/*html,body {
    	height: 100%;
	}*/
	/*.center {
		width: 100px;
		height: 100px;
		background-color: red;
	
		position: absolute;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
	  	
		margin: auto;
	}*/
	/*.center-flex {
		width: 100px;
		height: 100px;
		background-color: red;
	  	align-items: center;
	  	display: flex;
	  	justify-content: center;
	}*/
 </style>
<template>
	<div>
		<!-- <vue-navigation-bar :options="navbarOptions" /> -->

		<!-- Navigation large screens -->
		<nav class="d-none d-lg-block" style="padding-bottom: 100px;">
            <router-link to="/" id="logo">
                <img src="/images/logo.png" width="150px" />
            </router-link>
            <ul>
                <li>
                    <router-link to="/association">Association</router-link>
                </li>
                <li>
                    <router-link to="/actualites">
                        Actualités &
                        Manifestations
                    </router-link>
                </li>
                <li>
                    <router-link to="/on-parle-de-nous">On parle de nous</router-link>
                </li>
                <!-- <li>
                    <router-link to="/participez">Participez!</router-link>
                </li> -->
                <li>
                    <div class="dropdown">
                        <div class="dropbtn">Participez! <font-awesome-icon icon="chevron-down" /></div>
                        <div class="dropdown-content">
                            <router-link to="/accueil">Devenir bénévole</router-link>
                            <router-link to="/accueil">Devenir membre</router-link>
                            <router-link to="/accueil">Partenariat</router-link>
                        </div>
                    </div>
                </li>
                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>
        </nav>

		<!-- Navigation small screens -->
        <Bubble class="d-lg-none">
            <router-link to="/accueil" id="home">
                <span>Accueil</span>
            </router-link>
            <router-link to="/association" id="home">
                <span>Association</span>
            </router-link>
            <router-link to="/actualites" id="home">
                <span>Actualités</span>
            </router-link>
            <router-link to="/on-parle-de-nous" id="home">
                <span>On parle de nous</span>
            </router-link>
            <router-link to="/participez" id="home">
                <span>Participez!</span>
            </router-link>
            <router-link to="/contact" id="home">
                <span>Contact</span>
            </router-link>
        </Bubble>
		<child />
	</div>
</template>

<script>
	// import VueNavigationBar from "vue-navigation-bar";
	// import "vue-navigation-bar/dist/vue-navigation-bar.css";

    import { Slide, Bubble } from 'vue-burger-menu'
	export default {
		name: 'FrontendLayout',
		components: { Slide, Bubble },
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

<style>
	body, html {
        height: 100%;
        margin: 0;
        color: #fff;
    }
	body {
        background: url('/images/svg/bg_small.svg') no-repeat;
        background-size: cover;
    }

    @media only screen and (min-width: 992px) {
        body {
            background: url('/images/svg/bg.svg') no-repeat;
            background-size: cover;
        }
    }
</style>

<style scoped>
	nav {
        padding: 50px;
    }
    nav ul {
        list-style-type: none;
        float: right;
    }
    nav ul li {
        float: left;
    }
    nav ul li a {
        color: #000;
        padding: 0 16px;
        font-size: 2.4em;
        text-align: center;
    }
    nav ul li a:hover {
        color: yellow;
    }
    a {
        color: #fff;
        text-decoration: none;
    }

    .dropbtn {
        /*background-color: #4CAF50;*/
        color: #000;
        /*padding: 16px;*/
        /*font-size: 16px;*/
        border: none;
        padding: 0 16px;
    }
    .dropbtn:hover {
        cursor: pointer;
        color: yellow;
    }
    .dropbtn:active {
        color: red;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #fff;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {
    	background-color: transparent; color: yellow;
    }

    .dropdown:hover .dropdown-content {
    	display: block;
    }

    .dropdown:hover .dropbtn {
    	background-color: transparent;
    }

    /* Small devices (phones) */
    @media only screen and (min-width: 576px) {
        nav ul li a {
            font-size: 1em;
        }
        .dropbtn {
            font-size: 1em;
        }
    }
    /* Medium devices (tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        nav ul li a {
            font-size: 1em;
        }
        .dropbtn {
            font-size: 1em;
        }
    }
    /* Large devices (desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        nav ul li a {
            font-size: 1em;
        }
        .dropbtn {
            font-size: 1em;
        }
    }
    /* Extra large devices (large desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        nav ul li a {
            font-size: 1.1em;
        }
        .dropbtn {
            font-size: 1.1em;
        }
    }

    @media only screen and (min-width: 1600px) {
        nav ul li a {
            font-size: 1.4em;
        }
        .dropbtn {
            font-size: 1.4em;
        }
    }

    @media only screen and (min-width: 1980px) {
        nav ul li a {
            font-size: 1.8em;
        }
        .dropbtn {
            font-size: 1.8em;
        }
    }
 </style>
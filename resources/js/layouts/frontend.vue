<template>
    <div>
        <!-- <vue-navigation-bar :options="navbarOptions" /> -->

        <!-- Navigation large screens -->
        <nav class="d-none d-lg-block" style="">
            <router-link to="/" id="logo">
                <img src="/images/logo.png" width="150px" />
            </router-link>
            <ul>
                <li>
                    <router-link to="/" exact>Accueil</router-link>
                </li>
                <li>
                    <router-link to="/association">Association</router-link>
                </li>
                <li>
                    <router-link to="/actualites">
                        Actualités & Manifestations
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
                        <div class="dropbtn" :class="this.$route.path === '/participez' ? 'primary-color' : ''">
                            Participez! <font-awesome-icon icon="chevron-down" />
                        </div>
                        <div class="dropdown-content">
                            <router-link to="/participez">Devenir bénévole</router-link>
                            <router-link to="/participez">Devenir membre</router-link>
                            <router-link to="/participez">Partenariat</router-link>
                        </div>
                    </div>
                </li>
                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
                <li v-if="!authUser">
                    <router-link to="/login">Login</router-link>
                </li>
                <li v-if="authUser && authUser.roles.includes('admin')">
                    <router-link to="/admin">Admin</router-link>
                </li>
                <li v-if="authUser">
                    <router-link to="/logout">Logout</router-link>
                </li>
            </ul>
        </nav>

        <!-- Navigation small screens -->
        <Bubble class="d-lg-none d-block" style="padding-bottom: 100px;">
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

        <!-- <p class="text-center">authUser: {{ authUser }}<br /><br /></p> -->

        <child />

        <!-- <Footer /> -->
        <!-- <div style="border: 2px solid green;">
            <h2>Footer</h2>
        </div> -->
        <footer>
            <h5 class="text-center my-0 py-2">vlcf.ch &copy;{{ new Date().getFullYear() }}</h5>
        </footer>
    </div>
</template>

<script>
// import VueNavigationBar from "vue-navigation-bar";
// import "vue-navigation-bar/dist/vue-navigation-bar.css";

import { Slide, Bubble } from 'vue-burger-menu'
import Footer from '~/components/Footer'
export default {
    name: 'FrontendLayout',
    components: { Slide, Bubble, Footer },
    created() {
        console.log('Using frontend layout!')
    },
    mounted() {},
    data() {
        return {}
    },
    computed: {
        authUser() {
            return this.$store.getters['auth/user']
        }
    },
    methods: {}
}
</script>

<style>
body {
    background: url('/images/svg/la_chaux_de_fonds_without_background_without_trees.svg') no-repeat;
    background-size: cover;
    min-height: 100vh;
    position: relative;
    margin: 0;
    padding-bottom: 100px;
}
@media only screen and (min-width: 992px) {
    body {
        background: url('/images/svg/la_chaux_de_fonds_without_background_without_trees.svg') no-repeat;
        background-size: cover;
        min-height: 100vh;
        position: relative;
        margin: 0;
        padding-bottom: 100px;
    }
}
</style>
<style lang="scss" scoped>
@import './resources/sass/_variables.scss';
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
    color: $primary;
    text-decoration: none;
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
    color: $primary;
    text-decoration: none;
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
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: transparent;
    color: $primary;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: transparent;
}
a.router-link-active {
    color: $primary;
}
.primary-color {
    color: $primary;
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

footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #FFF;
    opacity: .7;
    // border-top: 4px solid $primary;
}
</style>

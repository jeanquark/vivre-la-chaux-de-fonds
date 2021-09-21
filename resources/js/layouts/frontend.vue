<template>
    <div>
        <!-- <b-container fluid> -->
        <!-- Navigation large screens -->
        <b-row no-gutters align-h="center" align-v="center" class="mb-4" style="">
            <b-col cols="2" style="border: 0px solid red;">
                <router-link to="/">
                    <img src="/images/logo.svg" width="100%" class="p-2" style="border: 0px solid green;" />
                </router-link>
                <div class="d-md-none" style="text-align: center;">
                    <img src="/images/svg/hamburger-menu.svg" width="35%" v-b-toggle.sidebar-1 class="hamburger-menu" />
                </div>
            </b-col>
            <b-col cols="8" xs="6" md="9" class="" style="border: 0px solid orange; text-align: center;">
                <nav class="d-none d-md-block">
                    <ul class="">
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

                        <li>
                            <div class="dropdown">
                                <div class="dropbtn" :class="this.$route.path === '/participez' ? 'primary-color' : ''">Participez! <font-awesome-icon icon="chevron-down" /></div>
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
            </b-col>
            <b-col cols="2" xs="4" md="1" class="" style="border: 0px dashed orange; text-align: center;">
                <a href="https://www.facebook.com/VivreCDF/" target="_blank">
                    <img src="/images/svg/facebook.svg" width="35%" style="padding: 0 0em;" />
                </a>
                <!-- <router-link to="/">
                    <img src="/images/svg/twitter.svg" width="35%" style="padding: 0 0em;" />
                </router-link> -->
            </b-col>
        </b-row>

        <!-- Navigation small screens -->
        <b-sidebar id="sidebar-1" title="VLCF Menu" shadow>
            <ul style="list-style-type: none; padding-left: 1em;">
                <li class="menu-small-screen" style="">
                    <router-link to="/" exact>
                        <span>Accueil</span>
                    </router-link>
                </li>
                <li class="menu-small-screen" style="">
                    <router-link to="/association">
                        <span>Association</span>
                    </router-link>
                </li>
                <li class="menu-small-screen" style="">
                    <router-link to="/actualites">
                        <span>Actualités</span>
                    </router-link>
                </li>
                <li class="menu-small-screen" style="">
                    <router-link to="/on-parle-de-nous">
                        <span>On parle de nous</span>
                    </router-link>
                </li>
                <li class="menu-small-screen" style="">
                    <router-link to="/participez">
                        <span>Participez!</span>
                    </router-link>
                </li>
                <li class="menu-small-screen" style="">
                    <router-link to="/contact">
                        <span>Contact</span>
                    </router-link>
                </li>
            </ul>
        </b-sidebar>

        <b-row no-gutters class="mt-1" style="">
            <child />
        </b-row>

        <footer>
            <h5 class="text-center my-0 py-2">vlcf.ch &copy;{{ new Date().getFullYear() }}</h5>
        </footer>
    </div>
    <!-- </b-container> -->
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
    name: 'FrontendLayout',
    components: { Slide },
    async created() {
        console.log('Using frontend layout!')
        // if (Object.keys(this.$store.getters['sponsors/sponsors']).length < 2) {
        //     await this.$store.dispatch('sponsors/fetchSponsors')
        // }
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
    background: url('/images/svg/la_chaux_de_fonds_without_background_without_trees_with_transparency_80percent.svg') no-repeat;
    background-size: cover;
    min-height: 100vh;
    position: relative;
    margin: 0;
    padding-bottom: 100px;
}
@media only screen and (min-width: 992px) {
    body {
        background: url('/images/svg/la_chaux_de_fonds_without_background_without_trees_with_transparency_80percent.svg') no-repeat;
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
.menu-small-screen {
    display: block;
    padding: 0.8em 0em;
}
.menu-small-screen a {
    color: $dark;
}
nav {
    padding: 0px;
}
nav ul {
    list-style-type: none;
    padding: 0px;
    margin-bottom: 0px;
}
nav ul li {
    display: inline-block;
    padding: 10px 0px;
}
nav ul li a {
    color: #000;
    padding: 0px 8px;
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
    color: #000;
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
.hamburger-menu:hover {
    cursor: pointer;
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
    background: #fff;
    opacity: 0.7;
    // border-top: 4px solid $primary;
}
</style>

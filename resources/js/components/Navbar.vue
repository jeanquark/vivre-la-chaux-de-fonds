<template>
    <div>
        <div class="row">
        	<ul class="snip1189">
                <li :class="this.$route.path === '/accueil' ? 'current' : ''">
                    <span class="logo" style="letter-spacing: 10px; font-size: 1.3em">
                        <router-link to="/accueil">
                            <span style="color: black">LA</span>
                            <span style="color: yellowgreen">
                                P
                                <span style="letter-spacing: 0">
                                    A
                                </span>
                            </span></br>
                            <span style="color: yellowgreen">
                                REN
                                <span style="letter-spacing: 0">
                                    T
                                </span>
                            </span></br>
                            <span style="color: yellowgreen">
                                HES
                                <span style="letter-spacing: 0">
                                    E
                                </span>
                            </span>
                        </router-link>
                    </span>
                </li>
                <li :class="this.$route.path === '/qui-sommes-nous' ? 'current' : ''">
                    <router-link to="/qui-sommes-nous"></br></br>
                        QUI SOMMES-NOUS ?</br>
                        <span style="font-weight: 300; font-size: 12px; color: yellowgreen">
                            Histoire et membres
                        </span>
                    </router-link>
                </li>
                <li :class="this.$route.path === '/spectacles' ? 'current' : ''">
                    <router-link to="/spectacles">
                        <span class="yellowgreen"><br /><br />
                            SPECTACLES<br />
                            <span style="font-weight: 300; font-size: 12px; color: yellowgreen">
                                A venir et archives
                            </span>
                        </span>
                    </router-link>
                </li>
                <li :class="this.$route.path === '/reservation' ? 'current' : ''">
                    <router-link to="/reservation"><br /><br /><br />
                        RESERVATION
                    </router-link>
                </li>
                <li :class="this.$route.path === '/admin' ? 'current' : ''" v-if="loadedUser && loadedUser.roles">
                    <div v-if="loadedUser.roles.includes('admin')">
                        <router-link to="/admin"><br /><br /><br />
                            ADMIN
                        </router-link>
                    </div>
                    <div v-if="loadedUser.roles.includes('user')">
                        <router-link to="/mes-reservations"><br /><br /><br />
                            MES RESERVATIONS
                        </router-link>
                    </div>
                </li>
                <li v-if="loadedUser">
                    <router-link to="/logout"><br /><br /><br />
                        LOGOUT
                    </router-link>
                </li>
                <li v-if="!loadedUser">
                    <router-link to="/login"><br /><br /><br />
                        LOGIN
                    </router-link>
                </li>
                <li v-if="!loadedUser">
                    <router-link to="/enregistrement"><br /><br /><br />
                        S'ENREGISTRER
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="row my-5">
            <div class="col-12" style="border: 1px dashed green;">
                loadedUser: {{ loadedUser }}<br />
                <div v-if="loadedUser">
                    <router-link to="/mes-reservations">Mes réservations</router-link><br />
                    <button @click="logout">Logout</button>
                </div>
                <div v-else>      
                    <router-link to="/enregistrement">S'enregistrer</router-link><br />
                    <router-link to="/login">Login</router-link><br />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                currentRoute: this.$route.path
            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['auth/user']
            }
        },
        methods: {
            async logout () {
                await this.$store.dispatch('auth/logout')
                // console.log('abc: ', abc)
            }
        }
    }
</script>

<style scoped>
    /*.router-link-exact-active {
        background-color: red;
        color: black;
    }
    .router-link-exact-active span:before,
    .router-link-exact-active span:after {
        -webkit-transform: translate(0%, 0%);
        transform: translate(0%, 0%);
        opacity: 1;
    }*/

	.snip1189 {
        font-family: 'Raleway', Arial, sans-serif;
        text-align: center;
        text-transform: uppercase;
        font-weight: 500;
        height: 100px;
    }
    .snip1189 * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
    }
    .snip1189 li {
        display: inline-block;
        list-style: outside none none;
        margin: 0 1em;
        padding: 0;
        font-weight: bold;
        height: 100px;
        color: black;
        }
    .snip1189 a {
        padding: 0.5em 0.5em;
        margin: 0.2em 0;
        display: block;
        color: yellowgreen;
        position: relative;
        text-decoration: none;
    }
    .snip1189 a:before,
    .snip1189 a:after {
        height: 113px;
        width: 10px;
        position: absolute;
        content: '';
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
        opacity: 0;
        color: black;
    }
    .snip1189 a:before {
        left: 0;
        top: 0;
        border-left: 5px solid black;
        border-top: 5px solid black;
        border-bottom: 5px solid black;
        -webkit-transform: translate(100%, 50%);
        transform: translate(100%, 50%);
    }
    .snip1189 a:after {
        right: 0;
        bottom: 0;
        border-right: 5px solid black;
        border-bottom: 5px solid black;
        border-top: 5px solid black;
        -webkit-transform: translate(-100%, -50%);
        transform: translate(-100%, -50%);
    }
    .snip1189 a:hover,
    .snip1189 .current a,
    .snip1189 .nocurrent a {
        color: black;
    }
    .snip1189 a:hover:before,
    .snip1189 .current a:before,
    .snip1189 a:hover:after,
    .snip1189 .current a:after {
        -webkit-transform: translate(0%, 0%);
        transform: translate(0%, 0%);
        opacity: 1;
    }
</style>
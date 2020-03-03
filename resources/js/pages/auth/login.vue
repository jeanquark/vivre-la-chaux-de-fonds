<template>
    <b-container>
        <b-row class="justify-content-center fadeInDown">
            <b-col cols="12" md="8">
                <b-card>
                    <b-card-body>
                        <b-card-title class="text-center mb-4">
                            Login
                        </b-card-title>
                        <b-card-text>
                            <b-form @submit.prevent="login">
                                <!-- Email -->
                                <b-row>
                                    <b-col cols="12" md="4" class="text-right col-form-label">
                                        <label>E-mail</label>
                                    </b-col>
                                    <b-col cols="12" md="6">
                                        <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email" />
                                        <has-error :form="form" field="email" />
                                    </b-col>
                                </b-row>

                                <!-- Password -->
                                <b-row>
                                    <b-col cols="12" md="4" class="text-right col-form-label">
                                        <label>Mot de passe</label>
                                    </b-col>
                                    <b-col cols="12" md="6">
                                        <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password" />
                                        <has-error :form="form" field="password" />
                                    </b-col>
                                </b-row>


                                <b-row class="justify-content-center my-3">
                                    <b-button type="submit" variant="primary">
                                        <b-spinner small variant="primary" label="Spinning" :disabled="loading" v-if="loading"></b-spinner>
                                        Login
                                    </b-button>
                                </b-row>
                                
                                <b-row class="justify-content-center my-3">
                                    <b-col cols="12" md="10" class="text-center">
                                        <router-link :to="{ name: 'password.request' }" class="m-2">
                                            Mot de passe oublié?
                                        </router-link>
                                        <router-link :to="{ name: 'register' }" class="m-2">
                                            S'enregistrer &rarr;
                                        </router-link>
                                    </b-col>
                                </b-row>
                            </b-form>
                        </b-card-text>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Form from 'vform'

export default {
    metaInfo() {
        return { title: 'Login' }
    },
    middleware: 'guest',
    layout: 'frontend',
    mounted() {
        console.log('redirect: ', this.$route.query.redirect)
    },
    data: () => ({
        form: new Form({
            email: 'admin@example.com',
            password: 'secre'
        }),
        remember: false
    }),
    computed: {
        loading () {
            return this.$store.getters['loading/loading']
        }
    },
    methods: {
        async login() {
            try {
                // Submit the form.
                this.$store.commit('loading/SET_LOADING', true)
                const { data } = await this.form.post('/api/login')
                console.log('data: ', data)

                // Save the token.
                this.$store.dispatch('auth/saveToken', {
                    token: data.token,
                    remember: this.remember
                })

                // Fetch the user.
                await this.$store.dispatch('auth/fetchUser')

                // Redirect home.
                // this.$router.push({ name: 'accueil' })
                this.$store.commit('loading/SET_LOADING', false)
                this.$router.push(this.$route.query.redirect || { name: 'index' })
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.error('Une erreur est survenue lors de la tentative de login.')
            }
        }
    }
}
</script>

<style scoped>
    /* ANIMATIONS */
  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
</style>
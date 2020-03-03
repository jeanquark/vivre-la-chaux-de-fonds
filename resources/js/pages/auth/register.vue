<template>
    <b-container>
        <b-row class="justify-content-center fadeInDown">
            <b-col cols="12" md="6">
                <b-card class="">
                    <b-card-body>
                        <b-card-title class="text-center mb-4">
                            S'enregistrer
                        </b-card-title>
                        <b-card-text>
                            <b-form @submit.prevent="register">
                                <b-row>
                                    <b-col cols="4" md="4" class="text-right col-form-label">
                                        <label>Prénom</label>
                                    </b-col>
                                    <b-col cols="8" md="8">
                                        <input type="text" name="firstname" class="form-control" :class="{ 'is-invalid': form.errors.has('firstname') }" v-model="form.firstname" />
                                        <has-error :form="form" field="firstname" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col cols="4" md="4" class="text-right col-form-label">
                                        <label>Nom</label>
                                    </b-col>
                                    <b-col cols="8" md="8">
                                        <input type="text" name="lastname" class="form-control" :class="{ 'is-invalid': form.errors.has('lastname') }" v-model="form.lastname" />
                                        <has-error :form="form" field="lastname" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col cols="4" md="4" class="text-right col-form-label">
                                        <label>E-mail</label>
                                    </b-col>
                                    <b-col cols="8" md="8">
                                        <input type="email" name="email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" v-model="form.email" />
                                        <has-error :form="form" field="email" />
                                    </b-col>
                                </b-row>
                                <b-row align-v="center">
                                    <b-col cols="6" md="4" class="text-right col-form-label">
                                        <label>Mot de passe</label>
                                    </b-col>
                                    <b-col cols="6" md="8">
                                        <input type="password" name="password" class="form-control" v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" />
                                        <has-error :form="form" field="password" />
                                    </b-col>
                                </b-row>
                                <b-row align-v="center">
                                    <b-col cols="6" md="4" class="text-right col-form-label">
                                        <label>Confirmer mot de passe</label>
                                    </b-col>
                                    <b-col cols="6" md="8">
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            class="form-control"
                                            :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
                                            v-model="form.password_confirmation"
                                        />
                                        <has-error :form="form" field="password_confirmation" />
                                    </b-col>
                                </b-row>
                                
                                <b-row class="justify-content-center my-2">
                                    <b-button type="submit" variant="primary" :disabled="loading">
                                        <b-spinner small variant="primary" label="Spinning" v-if="loading"></b-spinner>
                                        S'enregistrer
                                    </b-button>
                                </b-row>

                                <b-row class="justify-content-center my-2">
                                    <router-link :to="{ name: 'login' }" class="m-2">Aller au login &rarr;</router-link>
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
        return { title: "S'enregistrer" }
    },
    middleware: 'guest',
    components: {},
    layout: 'frontend',
    data: () => ({
        form: new Form({
            firstname: 'John',
            lastname: 'Doe',
            email: 'john.doe@example.com',
            password: 'secret',
            password_confirmation: 'secre'
        }),
        mustVerifyEmail: false
    }),
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        }
    },
    methods: {
        async register() {
            try {
                // Register the user.
                this.$store.commit('loading/SET_LOADING', true)
                const { data } = await this.form.post('/api/register')
                this.$noty.success('Enregistrement avec succès!')

                // Must verify email fist.
                if (data.status) {
                    this.$store.commit('loading/SET_LOADING', false)
                    this.mustVerifyEmail = true
                } else {
                    // Log in the user.
                    const {
                        data: { token }
                    } = await this.form.post('/api/login')

                    // Save the token.
                    this.$store.dispatch('auth/saveToken', { token })

                    // Update the user.
                    await this.$store.dispatch('auth/updateUser', { user: data })

                    // Fetch the user.
                    await this.$store.dispatch('auth/fetchUser')

                    // Redirect home.
                    this.$store.commit('loading/SET_LOADING', false)
                    this.$router.push({ name: 'index' })
                }
            } catch (error) {
                console.log('error: ', error)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.error("Une erreur est survenue et l'enregistrement a échoué.")
                const { message } = error
                console.log('message: ', message)
                // this.form.errors = message.errors
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
<template>
    <div class="container">
        <div class="row justify-content-center align-items-center" style="border: 0px solid green;">
            <div class="col-lg-8 m-auto">
                <card title="Login">
                    <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                        <!-- Email -->
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">E-mail</label>
                            <div class="col-md-7">
                                <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
                                <has-error :form="form" field="email" />
                            </div>
                        </div>

                        <!-- Password -->
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">Mot de passe</label>
                            <div class="col-md-7">
                                <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
                                <has-error :form="form" field="password" />
                            </div>
                        </div>

                        <!-- Remember Me -->
                        <div class="form-group row">
                            <div class="col-md-3" />
                            <div class="col-md-7 d-flex">
                                <checkbox v-model="remember" name="remember">
                                    Se souvenir de moi
                                </checkbox>

                                <router-link :to="{ name: 'password.request' }" class="small ml-auto my-auto">
                                    Mot de passe oublié
                                </router-link>
                                <router-link :to="{ name: 'register' }" class="small ml-auto my-auto">
                                    S'enregistrer
                                </router-link>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-7 offset-md-3 d-flex">
                                <!-- Submit Button -->
                                <v-button :loading="form.busy">
                                    Login
                                </v-button>
                            </div>
                        </div>
                    </form>
                </card>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from 'vform'
    export default {
        middleware: 'guest',
        layout: 'frontend',
        metaInfo () {
            return { title: 'Login' }
        },

        data: () => ({
            form: new Form({
                email: '',
                password: ''
            }),
            remember: false
        }),

        methods: {
            async login () {
                // Submit the form.
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
                this.$router.push({ name: 'accueil' })
            }
        }
    }
</script>

<style scoped>
    /*.center {
        width: 600px;
        height: 400px;
    
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        
        margin: auto;
    }*/
    
    /* ANIMATIONS */

    /* Simple CSS3 Fade-in-down Animation */
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

<template>
    <!-- <div class="wrapper fadeInDown">
        <div id="formContent">

        <div class="fadeIn first">
            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
        </div>

        <form>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="login">
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="password">
            <input type="submit" class="fadeIn fourth" value="Log In">
        </form>

        <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
        </div>

    </div>
</div> -->
    <div class="container">
        <div class="row justify-content-center align-items-center fadeInDown" style="">
            <div class="col-lg-8 m-auto">
                <card v-if="mustVerifyEmail" title="Enregistrement">
                    <div class="alert alert-success" role="alert">
                        {{ $t('verify_email_address') }}
                    </div>
                </card>
                <card v-else title="S'enregistrer">
                    <form @submit.prevent="register" @keydown="form.onKeydown($event)">
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">Nom</label>
                            <div class="col-md-7">
                                <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
                                <has-error :form="form" field="name" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">E-mail</label>
                            <div class="col-md-7">
                                <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
                                <has-error :form="form" field="email" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">Mot de passe</label>
                            <div class="col-md-7">
                                <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
                                <has-error :form="form" field="password" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">Confirmer mot de passe</label>
                            <div class="col-md-7">
                                <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation">
                                <has-error :form="form" field="password_confirmation" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-7 offset-md-3 d-flex">
                                <v-button :loading="form.busy">
                                    S'enregistrer
                                </v-button>
        
                                <!-- <login-with-github /> -->
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
    // import LoginWithGithub from '~/components/LoginWithGithub'

    export default {
        middleware: 'guest',
        layout: 'frontend',
        components: {
            // LoginWithGithub
        },
        metaInfo () {
            return { title: "S'enregistrer" }
        },

        data: () => ({
            form: new Form({
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }),
            mustVerifyEmail: false
        }),

        methods: {
            async register () {
                // Register the user.
                const { data } = await this.form.post('/api/register')

                // Must verify email fist.
                if (data.status) {
                    this.mustVerifyEmail = true
                } else {
                    // Log in the user.
                    const { data: { token } } = await this.form.post('/api/login')

                    // Save the token.
                    this.$store.dispatch('auth/saveToken', { token })

                    // Update the user.
                    await this.$store.dispatch('auth/updateUser', { user: data })

                    // Fetch the user.
                    await this.$store.dispatch('auth/fetchUser')

                    // Redirect home.
                    this.$router.push({ name: 'accueil' })
                }
            }
        }
    }
</script>

<style scoped>
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

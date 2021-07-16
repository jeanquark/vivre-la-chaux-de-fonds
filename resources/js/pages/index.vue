<template>
    <b-container fluid>
        <b-row class="justify-content-center">
            <b-col cols="12" md="6" lg="4" xl="3" v-if="page && page.sections" style="border: 0px solid orange">
                <b-card class="card mb-3" v-for="section in page.sections" :key="section.id">
                    <b-card-text v-html="section.content"> </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="12" md="6" lg="8" xl="9" class="p-5" style="">
                <b-row class="justify-content-center">
                    <b-col cols="12" md="6" lg="6" xl="4" v-for="activity in currentActivities" :key="activity.id">
                        <b-card :img-src="`/images/${activity.image}`" :img-alt="`${activity.name}`" img-top style="border: none">
                            <b-card-text class="text-center">
                                <h5 class="my-2">{{ activity.name }}</h5>
                                <b-button variant="primary" size="sm" class="my-2" :to="`/actualites/${activity.slug}`">En savoir plus &rarr;</b-button>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="justify-content-start">
            <b-col cols="12" md="12" lg="4" xl="4">
                <b-card class="card mb-3" style="" v-if="authUser">
                    <b-card-text>
                        <b-form @submit.prevent="joinNewsletter">
                            <b-form-group id="email" description="Nous ne partagerons pas votre adresse avec quiconque et ne vous enverront des messages qu'en lien avec nos activités futures.">
                                <label for="email">N'oubliez pas de <b>rejoindre notre newsletter</b> pour être mis au courant de nos prochaines activités:</label>
                                <b-form-input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="Entrer votre adresse e-mail"
                                    :class="{ 'is-invalid': form.errors.has('email') }"
                                    v-model="form.email"
                                ></b-form-input>
                                <has-error :form="form" field="email" />
                            </b-form-group>
                            <div class="text-center">
                                <vue-recaptcha
                                    ref="recaptcha"
                                    sitekey="6LcB1dcZAAAAAIzF3xET3bbnJuDpb8nizKpJeA_H"
                                    :loadRecaptchaScript="true"
                                    @verify="onCaptchaVerified"
                                    @expired="onCaptchaExpired"
                                ></vue-recaptcha
                                ><br />
                                <b-button type="submit" variant="primary" :disabled="loading" class=""> <b-spinner small type="grow" v-if="loading"></b-spinner>S'inscrire à la newsletter</b-button>
                            </div>
                        </b-form>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Form from 'vform'
import { objectToFormData } from 'object-to-formdata'
import VueRecaptcha from 'vue-recaptcha'
export default {
    components: { VueRecaptcha },
    layout: 'frontend',
    async created() {
        console.log('this.$route.path: ', this.$route.path)
        console.log('this.$route.path.substring(1): ', this.$route.path.substring(1))
        if (!this.page) {
            await this.$store.dispatch('pages/fetchPageBySlug', { pageSlug: this.$route.path.substring(1) })
        }
        if (Object.keys(this.$store.getters['activities/activities']).length < 2) {
            await this.$store.dispatch('activities/fetchActivities')
        }
    },
    data() {
        return {
            form: new Form({
                email: '',
            }),
            captchaIsVerified: false,
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        authUser() {
            return this.$store.getters['auth/user']
        },
        screenWidth() {
            return window.innerWidth
        },
        pages() {
            return this.$store.getters['pages/pages']
        },
        page() {
            return Object.values(this.$store.getters['pages/pages']).find((page) => page.slug === 'accueil')
        },
        pageSections() {
            return this.page ? this.page['sections'] : []
        },
        currentActivities() {
            return Object.values(this.$store.getters['activities/activities']).filter((activity) => activity.is_on_frontpage == true)
        },
    },
    methods: {
        onCaptchaVerified() {
            console.log('onCaptchaVerified')
            this.captchaIsVerified = true
        },
        onCaptchaExpired() {
            console.log('onCaptchaExpired')
            this.captchaIsVerified = false
        },
        async joinNewsletter() {
            try {
                // this.$refs.invisibleRecaptcha.execute()
                if (!this.captchaIsVerified) {
                    this.$noty.warning('Veuillez cocher la case "Je ne suis pas un robot".')
                    return
                }

                console.log('form: ', this.form)
                this.$store.commit('loading/SET_LOADING', true)
                const { data } = await this.form.submit('post', '/api/send-newsletter-form', {
                    transformRequest: [
                        function (data, headers) {
                            return objectToFormData(data)
                        },
                    ],
                })
                console.log('data: ', data)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Merci pour votre inscription! Vous allez recevoir un e-mail de confirmation.')
            } catch (error) {
                console.log('error: ', error)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.error("Une erreur est survenue et votre inscription à la newsletter n'a pas aboutie. Veuillez vérifier les éventuels messages d'erreur.")
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import './resources/sass/_variables.scss';
.primary-color {
    color: $primary;
}
.secondary-color {
    color: $secondary;
}
.card {
    border: none;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.9);
}
</style>

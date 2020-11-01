<template>
    <b-container fluid>
        <h1 class="text-center mb-5">Se désinscrire à la newsletter</h1>
        <b-row class="justify-content-center">
            <b-col cols="12" md="6">
                <b-card>
                    <b-card-text class="">
                        <!-- email_encoded: {{ email_encoded }}<br /> -->
                        <p>
                            Votre email: <b>{{ newsletter.email }}</b><br />
                            Inscrit le: <b>{{ newsletter.created_at | moment('DD MMMM YYYY') }}</b><br />
                            <span v-if="newsletter.last_sent_email">Dernier envoi le: <b>{{ newsletter.last_sent_email | moment('DD MMMM YYYY') }}</b></span><br />
                        </p>
                        <p>Cliquez sur le bouton pour confirmer que vous ne souhaitez plus recevoir notre newsletter.</p>
                        <div class="text-center">
                            <b-button class="" @click="unsubscribe">Me désabonner</b-button>
                        </div>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Form from 'vform'
import { objectToFormData } from 'object-to-formdata'
export default {
    layout: 'frontend',
    async created() {},
    async mounted() {
        console.log('this.$route.path: ', this.$route.path)
        console.log('this.$route.params: ', this.$route.params)
        console.log('this.$route.params.email_encoded: ', this.$route.params.email_encoded)
        this.email_encoded = this.$route.params.email_encoded
        // this.email_decoded = atob(this.$route.params.email_encoded)
        await this.$store.dispatch('newsletters/fetchNewsletterByEmail', { newsletterEmail: atob(this.$route.params.email_encoded) })
    },
    data() {
        return {
            email_encoded: '',
            // email_decoded: ''
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        authUser() {
            return this.$store.getters['auth/user']
        },
        newsletter() {
            return this.$store.getters['newsletters/newsletter']
        }
    },
    methods: {
        async unsubscribe() {
            try {
                await this.$store.dispatch('newsletters/deleteSubscriptionByEmail', { newsletterEncodedEmail: this.$route.params.email_encoded })
                this.$noty.success('Votre désinscription a bien été enregistrée.')
                this.$router.push('/')
            } catch (error) {
                console.log('error: ', error)
                this.$noty.error('Le processus de désinscription n\'a pas pu aboutir. En cas d\'erreurs récurrentes, veuillez nous contacter via le formulaire de contact.')
            }
        }
    }
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
</style>

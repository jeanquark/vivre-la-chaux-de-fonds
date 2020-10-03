<template>
    <b-container>
        <h1 class="text-center mb-5">Contact</h1>

        <b-row align-v="start" class="justify-content-center">
            <b-col cols="12" md="6">
                <b-card style="">
                    <b-card-text class="text-center">
                        <p class="text-left" style="font-size: 1.15em;">
                            Association Vivre La Chaux-de-Fonds<br />
                            Case postale 38<br />
                            2301 La Chaux-de-Fonds<br />
                        </p>
                        <p class="text-left">
                            <a href="contact@vlcf.ch">contact@vlcf.ch</a>
                        </p>
						
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="12" md="6" style="">
                <b-card class="card-right" style="">
                    <b-card-text class="">
                        <b-form @submit.prevent="sendContactForm">
                            <b-row align-v="center" class="justify-content-start my-3 px-3">
                                <b-col cols="12">
                                    <b-form-group label="Votre nom:" label-for="name">
                                        <b-form-input id="name" :class="{ 'is-invalid': form.errors.has('name') }" v-model="form.name"></b-form-input>
                                        <has-error :form="form" field="name" />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12">
                                    <b-form-group label="Votre adresse de courriel:" label-for="email">
                                        <b-form-input id="email" :class="{ 'is-invalid': form.errors.has('email') }" v-model="form.email"></b-form-input>
                                        <has-error :form="form" field="email" />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12">
                                    <b-form-group label="Objet:" label-for="object">
                                        <b-form-input id="object" :class="{ 'is-invalid': form.errors.has('object') }" v-model="form.object"></b-form-input>
                                        <has-error :form="form" field="object" />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12">
                                    <b-form-group label="Message:" label-for="message">
                                        <b-form-textarea id="message" rows="6" max-rows="12" :class="{ 'is-invalid': form.errors.has('message') }" v-model="form.message"></b-form-textarea>
                                        <has-error :form="form" field="message" />
                                    </b-form-group>
									
                                </b-col>
                            </b-row>
                            <b-row class="justify-content-center my-2">
                                <b-button variant="primary" :disabled="loading" type="submit">
                                    <b-spinner small type="grow" v-if="loading"></b-spinner>
                                    Envoyer le message
                                </b-button>
                            </b-row>
                        </b-form>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios'
import Form from 'vform'

export default {
    layout: 'frontend',
    metaInfo() {
        return { title: 'Contact' }
    },
    data() {
        return {
            form: new Form({
                name: '',
                email: '',
                object: '',
                message: ''
            })
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        }
    },
    methods: {
        async sendContactForm() {
            try {
                console.log('sendContactForm: ', this.form)
                console.log('sendContactForm2: ', this.form['originalData'])
                this.$store.commit('loading/SET_LOADING', true)
                const data = await this.form.post('/api/send-contact-form')
                console.log('data: ', data)
                this.$noty.success('Votre message a bien été envoyé!')
                this.form.reset()
                this.$store.commit('loading/SET_LOADING', false)
            } catch (error) {
                console.log('error: ', error)
                this.$noty.error('Votre message n\'a pas été envoyé. Veuillez vérifier les champs.')
                this.$store.commit('loading/SET_LOADING', false)
            }
        }
    }
}
</script>

<style scoped>
.card {
    border-radius: 10px;
}
.card-right {
    background-color: rgba(255, 255, 255, 0.78);
}
</style>

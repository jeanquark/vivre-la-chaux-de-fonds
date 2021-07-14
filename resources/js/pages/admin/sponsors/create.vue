<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/sponsors" class="navigation">
                <font-awesome-icon icon="dollar-sign" />
                <span>Sponsors</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Créer</b-breadcrumb-item>
        </b-breadcrumb>

        <b-row class="justify-content-center">
            <b-col cols="12" md="8" lg="6">
                <b-form @submit.prevent="createSponsor">
                    <b-row align-v="center" class="justify-content-start my-3 px-3">
                        <b-col cols="12">
                            <b-form-group label="Nom:" label-for="name">
                                <b-form-input id="name" :class="{ 'is-invalid': form.errors.has('name') }" v-model="form.name"></b-form-input>
                                <has-error :form="form" field="name" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12">
                            <b-form-group label="Contribution (en francs):" label-for="contribution" :description="`${parseFloat(form.contribution).toFixed(2)} CHF`">
                                <b-form-input type="number" id="contribution" placeholder="" :class="{ 'is-invalid': form.errors.has('contribution') }" v-model="form.contribution"></b-form-input>
                                <has-error :form="form" field="contribution" />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-group label="Un sponsor partenaire apparaît globalement sur le site.">
                                <b-form-checkbox id="partner" name="partner" :value="1" :unchecked-value="0" v-model="form.is_partner"> Sponsor partenaire </b-form-checkbox>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-group label="Un sponsor soutien affiche 'Avec le soutien de...' dans la page de la manifestation. Texte uniquement, pas d'image.">
                                <b-form-checkbox id="supporter" name="supporter" :value="1" :unchecked-value="0" v-model="form.is_supporter">Sponsor soutien</b-form-checkbox>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="6">
                            <b-form-group label="Date de début:" label-for="startDate">
                                <VueCtkDateTimePicker
                                    label="Cliquer pour choisir une date"
                                    format="YYYY-MM-DD"
                                    formatted="YYYY-MM-DD"
                                    button-now-translation="Aujourd'hui"
                                    only-date
                                    id="startDate"
                                    v-model="form.start_date"
                                />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="6">
                            <b-form-group label="Date de fin:" label-for="endDate">
                                <VueCtkDateTimePicker
                                    label="Cliquer pour choisir une date"
                                    format="YYYY-MM-DD"
                                    formatted="YYYY-MM-DD"
                                    button-now-translation="Aujourd'hui"
                                    only-date
                                    id="endDate"
                                    v-model="form.end_date"
                                />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" class="my-2" v-if="!form.is_supporter">
                            <b-form-group label="Image (jpeg ou png, min 300px de largeur):">
                                <b-form-file
                                    accept="image/jpeg, image/png"
                                    placeholder="Choisir une nouvelle image..."
                                    drop-placeholder="Placez votre image ici..."
                                    :class="{ 'is-invalid': form.errors.has('image') }"
                                    @change="selectFile"
                                ></b-form-file>
                                <has-error :form="form" field="image_new" />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-group label="Activités:">
                                <multiselect
                                    tag-placeholder="Ajouter comme nouveau tag"
                                    placeholder="Chercher et ajouter un tag"
                                    label="name"
                                    track-by="id"
                                    :options="activitiesArray"
                                    :multiple="true"
                                    :taggable="true"
                                    v-model="sponsorActivities"
                                ></multiselect>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-group label="Lien vers le site web:" label-for="link" description="Doit commencer par http://www.">
                                <b-form-input id="link" name="link" type="text" :class="{ 'is-invalid': form.errors.has('link') }" v-model="form.link"></b-form-input>
                                <has-error :form="form" field="link" />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-group label="Le sponsor doit-il s'afficher en ligne? (Un sponsor inactif n'apparaît pas).">
                                <b-form-checkbox id="is_active" name="is_active" :value="1" :unchecked-value="0" v-model="form.is_active"> Actif? </b-form-checkbox>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center my-2">
                        <!-- form.errors: {{ form.errors }}<br /> -->
                        <!-- form.errors.any(): {{ form.errors.any() }} -->
                        <b-button variant="primary" :disabled="loading" type="submit">
                            <b-spinner small type="grow" v-if="loading"></b-spinner>
                            Créer sponsor
                        </b-button>
                    </b-row>
                    <b-row class="justify-content-center">
                        <b-alert variant="danger" dismissible :show="form.errors.any()">Erreur lors de l'envoi. Veuillez vérifier les champs.</b-alert>
                    </b-row>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Form from 'vform'

// Datepicker
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

// Multiselect
import Multiselect from 'vue-multiselect'

export default {
    layout: 'backend',
    components: {
        VueCtkDateTimePicker,
        Multiselect,
    },
    async created() {
        if (Object.keys(this.$store.getters['activities/activities']).length < 2) {
            await this.$store.dispatch('activities/fetchActivities')
        }
    },
    mounted() {
        const userId = parseInt(this.$route.params.id)
        console.log('userId: ', userId)
    },
    data() {
        return {
            image: {},
            form: new Form({
                name: '',
                contribution: 0,
                type: '',
                start_date: '',
                end_date: '',
                link: '',
                image: null,
                is_active: false,
                is_partner: false,
                is_supporter: false,
                activities: [],
            }),
            sponsorActivities: [],
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        activities() {
            return this.$store.getters['activities/activities']
        },
        activitiesArray() {
            var arr = []
            Object.keys(this.activities).forEach((key) => arr.push(this.activities[key]))
            return arr
        },
    },
    methods: {
        // uploadImage(event) {
        //     console.log('uploadImage', event)
        //     console.log(event.target)
        //     console.log(event.target.files[0])
        //     this.image = event.target.files[0]
        // },
        selectFile(e) {
            this.form.image = e.target.files[0]
        },

        async createSponsor() {
            try {
                console.log('this.form: ', this.form)
                return
                this.$store.commit('loading/SET_LOADING', true)
                this.form['activities'] = this.sponsorActivities.map((activity) => parseInt(activity.id))
                // const { data } = await axios.post('/api/users', this.form)
                // console.log('data: ', data)
                await this.$store.dispatch('sponsors/createSponsor', this.form)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Sponsor créé avec succès!')
                this.$router.push('/admin/sponsors')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être créer.")
            }
        },
        // async createSponsor2() {
        //     try {
        //         let formData = new FormData()
        //         formData.append('image', this.image)
        //         formData.append('form', JSON.stringify(this.form))
        //         // console.log('formData: ', formData)

        //         await this.$store.dispatch('sponsors/createSponsor', { formData })
        //         this.$noty.success('Sponsor créé avec succès!')
        //         this.$router.push('/admin/sponsors')
        //     } catch (error) {
        //         console.log('error: ', error)
        //         this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être créé.")
        //     }
        // },
        // async createSponsor3() {
        //     try {
        //         await this.$store.dispatch('sponsors/createSponsor', { sponsor: this.form, image })
        //         this.$noty.success('Sponsor créé avec succès!')
        //         this.$router.push('/admin/sponsors')
        //     } catch (error) {
        //         console.log('error: ', error)
        //         this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être créé.")
        //     }
        // },
        // async createSponsor4() {
        //     try {
        //         const config = {
        //             headers: { 'content-type': 'multipart/form-data' }
        //         }

        //         let formData = new FormData()
        //         formData.append('image', this.image)
        //         formData.append('form', JSON.stringify(this.form))
        //         console.log('formData: ', formData)

        //         const { data } = await axios.post('/api/sponsors', formData, config)
        //         console.log('data: ', data)
        //         this.$noty.success('Sponsor créé avec succès!')
        //         this.$router.push('/admin/sponsors')
        //     } catch (error) {
        //         console.log('error: ', error)
        //         this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être créé.")
        //     }
        // }
    },
}
</script>

<style scoped></style>

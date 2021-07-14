<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/sponsors" class="navigation">
                <font-awesome-icon icon="dollar-sign" />
                <span>Sponsors</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Editer</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center" v-if="sponsor">Editer sponsor <span class="primary-color">{{ sponsor.name }}</span></h2>

        <!-- sponsor: {{ sponsor }}<br /><br /> -->
        <b-row class="justify-content-center">
            <b-col cols="12" md="8" lg="6">
                <b-form @submit.prevent="updateSponsor">
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
                                <b-form-checkbox id="is_partner" name="is_partner" :value="1" :unchecked-value="0" v-model="form.is_partner"> Sponsor partenaire </b-form-checkbox>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-group label="Un sponsor soutient affiche 'Avec le soutient de...' dans la page de la manifestation. Texte uniquement, pas d'image.">
                                <b-form-checkbox id="is_supporter" name="is_supporter" :value="1" :unchecked-value="0" v-model="form.is_supporter">Sponsor soutient</b-form-checkbox>
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

                        <b-col cols="12">
                            <b-form-group label="Lien vers le site web:" label-for="link" description="Doit commencer par http://www.">
                                <b-form-input id="link" name="link" type="text" :class="{ 'is-invalid': form.errors.has('link') }" v-model="form.link"></b-form-input>
                                <has-error :form="form" field="link" />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-checkbox id="is_active" name="is_active" value="1" unchecked-value="0" v-model="form.is_active">
                                Actif?
                            </b-form-checkbox>
                        </b-col>

                        <b-col cols="12" class="my-2" v-if="form.image">
                            <p class="text-center">Image actuelle:</p>
                            <b-img center :src="`/images/${form.image}`" width="200" class=""></b-img>
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-group label="Nouvelle image (jpeg ou png, min 300px de largeur)">
                                <b-form-file
                                    accept="image/jpeg, image/png"
                                    placeholder="Choisir une nouvelle image..."
                                    drop-placeholder="Placez votre image ici..."
                                    :class="{ 'is-invalid': form.errors.has('new_image') }"
                                    @change="selectFile"
                                ></b-form-file>
                                <has-error :form="form" field="new_image" />
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
                    </b-row>
                    <b-row class="justify-content-center my-2">
                        <b-button variant="primary" :disabled="loading" type="submit">
                            <b-spinner small type="grow" v-if="loading"></b-spinner>
                            Editer sponsor
                        </b-button>
                    </b-row>
                    <b-row class="justify-content-center">
                <b-alert variant="danger" dismissible :show="form.errors.any()">Erreur lors de l'envoi. Veuillez vérifier la validité des champs.</b-alert>
            </b-row>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
// vform
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
        Multiselect
    },
    async created() {},
    async mounted() {
        const sponsorId = parseInt(this.$route.params.id)
        console.log('sponsorId: ', sponsorId)

        if (!this.$store.getters['sponsors/sponsors'][this.$route.params.id]) {
            await this.$store.dispatch('sponsors/fetchSponsors', { id: this.$route.params.id })
        }

        if (Object.keys(this.$store.getters['activities/activities']).length < 2) {
            await this.$store.dispatch('activities/fetchActivities')
        }

        console.log('this.sponsor: ', this.sponsor)
        console.log('this.form: ', this.form)
        this.form.fill(this.sponsor)
        this.sponsorActivities = this.sponsor.activities
    },
    data() {
        return {
            form: new Form({
                id: '',
                name: '',
                contribution: 0,
                start_date: '',
                end_date: '',
                link: '',
                image: null,
                new_image: null,
                is_partner: false,
                is_supporter: false,
                is_active: false,
                activities: []
            }),
            sponsorActivities: []
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        activities() {
            return this.$store.getters['activities/activities']
        },
        sponsors() {
            return this.$store.getters['sponsors/sponsors']
        },
        sponsor() {
            return this.$store.getters['sponsors/sponsors'][this.$route.params.id]
        },
        activitiesArray() {
            var arr = []
            Object.keys(this.activities).forEach(key => arr.push(this.activities[key]))
            return arr
        }
    },
    methods: {
        selectFile(e) {
            this.form.new_image = e.target.files[0]
        },
        async updateSponsor() {
            try {
                console.log('this.form: ', this.form)
                this.$store.commit('loading/SET_LOADING', true)
                this.form['activities'] = this.sponsorActivities.map(activity => parseInt(activity.id))
                await this.$store.dispatch('sponsors/updateSponsor', this.form)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Sponsor mis à jour avec succès!')
                this.$router.push('/admin/sponsors')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                console.log('error: ', error)
                console.log('error.response: ', error.response)
                this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être mise à jour.")
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
</style>

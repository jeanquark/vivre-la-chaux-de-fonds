<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/sponsors" class="navigation">
                <font-awesome-icon icon="dollar-sign" />
                <span>Sponsors</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Editer</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center" v-if="sponsor">Editer sponsor "{{ sponsor.name }}"</h2>

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
                            <b-form-group label="Contribution:" label-for="contribution">
                                <b-form-input type="number" id="contribution" placeholder="" :class="{ 'is-invalid': form.errors.has('contribution') }" v-model="form.contribution"></b-form-input>
                                <has-error :form="form" field="contribution" />
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

                        <b-col cols="12" class="my-2">
                            <b-form-checkbox id="is_active" name="is_active" value="1" unchecked-value="0" v-model="form.is_active">
                                Actif?
                            </b-form-checkbox>
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <p class="text-center">Image actuelle:</p>
                            <b-img center :src="`/images/partenaires/${form.image}`" width="200" class=""></b-img>
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-file
                                accept="image/jpeg, image/png"
                                placeholder="Choisir un nouveau fichier..."
                                drop-placeholder="Placez votre fichier ici..."
                                :class="{ 'is-invalid': form.errors.has('image_new') }"
                                @change="selectFile"
                            ></b-form-file>
                            <has-error :form="form" field="image_new" />
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <!-- <b-form-group label="Activités:">
                                <b-form-select multiple value-field="id" text-field="name" v-model="form.activities" :options="activities" size="sm" class=""></b-form-select>
                            </b-form-group> -->
                            <b-form-group label="Activités:">
                                <multiselect
                                    tag-placeholder="Add this as new tag"
                                    placeholder="Search or add a tag"
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
    async created() {      
    },
    async mounted() {
        const sponsorId = parseInt(this.$route.params.id)
        console.log('sponsorId: ', sponsorId)

        if (!this.$store.getters['sponsors/sponsors'][this.$route.params.id]) {
            await this.$store.dispatch('sponsors/fetchSponsorById', { sponsorId: this.$route.params.id })
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
                end_date: '',
                image: null,
                new_image: null,
                is_active: false,
                activities: []
            }),
            sponsorActivities: []
        }
    },
    computed: {
        loading () {
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
        activitiesArray () {
            var arr = []
            Object.keys(this.activities).forEach(key => arr.push(this.activities[key]))
            return arr
        }
    },
    methods: {
        uploadImage(event) {
            console.log('uploadImage', event)
            console.log(event.target)
            console.log(event.target.files[0])
            this.new_image = event.target.files[0]
        },
        selectFile(e) {
            this.form.new_image = e.target.files[0]
        },
        async updateSponsor () {
            try {
                console.log('this.form: ', this.form)
                // return
                this.$store.commit('loading/SET_LOADING', true)
                this.form['activities'] = this.sponsorActivities.map(activity => parseInt(activity.id))
                // const { data } = await axios.post('/api/users', this.form)
                // console.log('data: ', data)
                await this.$store.dispatch('sponsors/updateSponsor', this.form)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Sponsor mis à jour avec succès!')
                this.$router.push('/admin/sponsors')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être mise à jour.")
            }
        },
        async updateSponsor2() {
            try {
                await this.$store.dispatch('sponsors/updateSponsor', { sponsor: this.sponsor, image: this.new_image })
                this.$noty.success('Sponsor mis à jour avec succè!')
                this.$router.push('/admin/sponsors')
            } catch (error) {
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être mise à jour.")
            }
        }
    }
}
</script>

<style scoped></style>

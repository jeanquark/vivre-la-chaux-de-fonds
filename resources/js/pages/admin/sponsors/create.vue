<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/sponsors" class="navigation">
                <font-awesome-icon icon="dollar-sign" />
                <span>Sponsors</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Montrer</b-breadcrumb-item>
        </b-breadcrumb>
        <form @submit.prevent="createSponsor">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <label for="name">Nom</label>
                        <input type="text" class="form-control" id="name" placeholder="" v-model="form.name" />
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <label for="contribution">Contribution</label>
                        <input type="textarea" class="form-control" id="contribution" placeholder="" v-model="form.contribution" />
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <label for="image">Choisir une image:</label>
                        <input type="file" id="image" name="image" accept="image/png, image/jpeg" @change="uploadImage($event)" />
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <VueCtkDateTimePicker
                            label="Choisir une date de fin"
                            only-date
                            format="YYYY-MM-DD"
                            formatted="YYYY-MM-DD"
                            color="#9ACD32"
                            button-color="#9ACD32"
                            button-now-translation="Maintenant"
                            v-model="form.end_date"
                        />
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <multiselect
                            label="title"
                            track-by="id"
                            :options="activities"
                            :multiple="true"
                            :close-on-select="false"
                            :clear-on-select="false"
                            :preserve-search="true"
                            :preselect-first="true"
                            placeholder="Sélectionner un sponsor"
                            selectLabel="Appuyer sur Entrée pour sélectionner"
                            selectedLabel="Sélectionné"
                            deselectLabel="Appuyer sur entrée pour désélectionner"
                            v-model="form.activities"
                        >
                        </multiselect>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <p-check class="p-curve p-bigger p-jelly" name="check" color="primary" button-now-translation="Maintenant" v-model="form.is_active">Actif ?</p-check>
                    </div>
                </div>
            </div>

            <div class="row my-3">
                <div class="col-12 text-center">
                    <button type="submit" class="btn btn-primary">Créer sponsor</button>
                </div>
            </div>
        </form>
    </b-container>
</template>

<script>
import axios from 'axios'

// Datepicker
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

// Pretty checkboxes
import PrettyCheck from 'pretty-checkbox-vue/check'

// Multiselect
import Multiselect from 'vue-multiselect'

export default {
    layout: 'backend',
    components: {
        VueCtkDateTimePicker,
        'p-check': PrettyCheck,
        Multiselect
    },
    async created() {
        if (this.$store.getters['activities/activities'].length < 1) {
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
            form: {
                name: '',
                contribution: '',
                end_date: '',
                is_active: false,
                activities: []
            },
            image: {}
        }
    },
    computed: {
        activities() {
            return this.$store.getters['activities/activities']
        }
    },
    methods: {
        uploadImage(event) {
            console.log('uploadImage', event)
            console.log(event.target)
            console.log(event.target.files[0])
            this.image = event.target.files[0]
        },

        async createSponsor() {
            try {
                let formData = new FormData()
                formData.append('image', this.image)
                formData.append('form', JSON.stringify(this.form))
                // console.log('formData: ', formData)

                await this.$store.dispatch('sponsors/createSponsor', { formData })
                this.$noty.success('Sponsor créé avec succès!')
                this.$router.push('/admin/sponsors')
            } catch (error) {
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être créé.")
            }
        },
        async createSponsor2() {
            try {
                await this.$store.dispatch('sponsors/createSponsor', { sponsor: this.form, image })
                this.$noty.success('Sponsor créé avec succès!')
                this.$router.push('/admin/sponsors')
            } catch (error) {
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être créé.")
            }
        },
        async createSponsor3() {
            try {
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }

                let formData = new FormData()
                formData.append('image', this.image)
                formData.append('form', JSON.stringify(this.form))
                console.log('formData: ', formData)

                const { data } = await axios.post('/api/sponsors', formData, config)
                console.log('data: ', data)
                this.$noty.success('Sponsor créé avec succès!')
                this.$router.push('/admin/sponsors')
            } catch (error) {
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et le sponsor n'a pas pu être créé.")
            }
        }
    }
}
</script>

<style scoped></style>

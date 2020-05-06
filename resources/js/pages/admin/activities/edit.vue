<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/activities" class="navigation">
                <font-awesome-icon icon="calendar-day" />
                <span>Activités</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Editer</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center" v-if="activity">Editer activité "{{ activity.name }}"</h2>
        <!-- activity: {{ activity }}<br /><br /> -->
        <!-- activity.sponsors: {{ activity.sponsors }}<br /><br /> -->
        <!-- form.sponsors: {{ form.sponsors }}<br /><br /> -->

        <b-row class="justify-content-center">
            <b-col cols="12" md="8" lg="6">
                <b-form @submit.prevent="updateActivity">
                    <!-- form.id: {{ form.id }}<br /><br /> -->
                    <!-- form.image: {{ form.image }}<br /><br /> -->
                    <b-row align-v="center" class="justify-content-start my-3 px-3">
                        <b-col cols="12">
                            <b-form-group label="Nom:" label-for="name">
                                <b-form-input id="name" :class="{ 'is-invalid': form.errors.has('name') }" v-model="form.name"></b-form-input>
                                <has-error :form="form" field="name" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12">
                            <b-form-group label="Sous-titre:" label-for="subtitle">
                                <b-form-input id="subtitle" :class="{ 'is-invalid': form.errors.has('subtitle') }" v-model="form.subtitle"></b-form-input>
                                <has-error :form="form" field="subtitle" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12">
                            <b-form-group label="Contenu:" label-for="content">
                                <b-form-textarea id="content" placeholder="" rows="3" max-rows="6" :class="{ 'is-invalid': form.errors.has('content') }" v-model="form.content"></b-form-textarea>
                                <has-error :form="form" field="content" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <b-form-group label="Date de début:" label-for="startDate">
                                <VueCtkDateTimePicker
                                    label="Cliquer pour choisir une date"
                                    format="DD-MM-YYYY HH:mm"
                                    formatted="DD-MM-YYYY HH-mm"
                                    button-now-translation="Aujourd'hui"
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

                        <b-col cols="12" class="my-2">
                            <b-form-checkbox id="is_published" name="is_published" value="1" unchecked-value="0" v-model="form.is_published">
                                Publié?
                            </b-form-checkbox>
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <p class="text-center">Image actuelle:</p>
                            <b-img center :src="`/images/activities/${form.image}`" width="200" class=""></b-img>
                        </b-col>
                        <b-col cols="12" class="my-2">
                            <b-form-file
                                accept="image/jpeg, image/png"
                                placeholder="Choisir un nouveau fichier..."
                                drop-placeholder="Placez votre fichier ici..."
                                @change="selectFile"
                                :class="{ 'is-invalid': form.errors.has('image_new') }"
                            ></b-form-file>
                            <!-- <div class="mt-3">Selected file: {{ form.file ? form.file.name : '' }}</div> -->
                            <has-error :form="form" field="image_new" />
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-group label="Sponsors:">
                                <b-form-select multiple value-field="id" text-field="name" v-model="form.sponsors" :options="sponsors" size="sm" class=""></b-form-select>
                            </b-form-group>
                            <!-- <multiselect
                                label="name"
                                track-by="id"
                                :options="sponsors"
                                :multiple="true"
                                :close-on-select="false"
                                :clear-on-select="false"
                                :preserve-search="true"
                                :preselect-first="true"
                                placeholder="Sélectionner un sponsor"
                                selectLabel="Appuyer sur Entrée pour sélectionner"
                                selectedLabel="Sélectionné"
                                deselectLabel="Appuyer sur entrée pour désélectionner"
                                v-model="form.sponsors"
                            >
                            </multiselect> -->
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center my-2">
                        <b-button variant="primary" :disabled="loading" type="submit">
                            <b-spinner small type="grow" v-if="loading"></b-spinner>
                            Editer activité
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
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
    layout: 'backend',
    components: {
        VueCtkDateTimePicker,
        Multiselect
    },
    async created() {},
    async mounted() {
        const activityId = parseInt(this.$route.params.id)
        console.log('activityId: ', activityId)

        if (!this.$store.getters['activities/activities'][this.$route.params.id]) {
            await this.$store.dispatch('activities/fetchActivityById', { activityId: this.$route.params.id })
        }

        if (Object.keys(this.$store.getters['sponsors/sponsors']).length < 2) {
            await this.$store.dispatch('sponsors/fetchSponsors')
        }

        console.log('this.activity: ', this.activity)
        console.log('this.form: ', this.form)
        this.form.fill(this.activity)
        this.form.sponsors = this.activity.sponsors.map(sponsor => sponsor.id)
    },
    data() {
        return {
            form: new Form({
                id: '',
                name: '',
                subtitle: '',
                content: '',
                start_date: '',
                end_date: '',
                image: null,
                new_image: null,
                is_published: false,
                sponsors: []
            })
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        sponsors() {
            return this.$store.getters['sponsors/sponsors']
        },
        activities() {
            return this.$store.getters['activities/activities']
        },
        activity() {
            return this.$store.getters['activities/activities'][this.$route.params.id]
        }
    },
    methods: {
        selectFile(e) {
            this.form.new_image = e.target.files[0]
        },
        async updateActivity() {
            try {
                console.log('this.form: ', this.form)
                // return
                this.$store.commit('loading/SET_LOADING', true)
                // const { data } = await axios.post('/api/users', this.form)
                // console.log('data: ', data)
                await this.$store.dispatch('activities/updateActivity', this.form)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Activité mise à jour avec succès!')
                this.$router.push('/admin/activities')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et l'activité n'a pas pu être mise à jour.")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './resources/sass/_variables.scss';
// Datetime picker style
::v-deep .header-picker {
    background-color: $primary !important;
}
::v-deep .custom-button-content {
    color: $primary !important;
}
::v-deep .datepicker-day-effect {
    background: $primary !important;
}
::v-deep .datepicker-button-content {
    color: $primary !important;
}
::v-deep .datepicker-button svg {
    fill: $primary !important;
}
::v-deep .datepicker-button-effect {
    background: $primary !important;
}
::v-deep .field-input:focus {
    border: 1px solid $primary !important;
}
::v-deep .field-label {
    color: $primary !important;
}
::v-deep .time-picker-column-item-effect {
    background-color: $primary !important;
}

// Image upload
::v-deep .custom-file-label::after {
    content: 'Parcourir' !important;
}
::v-deep .b-form-file.is-invalid {
    outline: #dc3545 solid 1px;
}
</style>

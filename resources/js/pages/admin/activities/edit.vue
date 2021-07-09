<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/activities" class="navigation">
                <font-awesome-icon icon="calendar-day" />
                <span>Activités</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Editer</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center" v-if="activity">
            Editer activité <span class="primary-color">{{ activity.name }}</span>
        </h2>

        <p v-if="activity">
            <!-- activity: {{ activity }}<br /><br /> -->
            <!-- activity.sponsors: {{ activity.sponsors }}<br /><br /> -->
            <!-- form.sponsors: {{ form.sponsors }}<br /><br /> -->
            <!-- activity.images: {{ activity.images }}<br /><br /> -->
            <!-- form.images: {{ form.images }}<br /><br /> -->
        </p>

        <b-row class="justify-content-center">
            <b-col cols="12" md="8">
                <b-form @submit.prevent="updateActivity">
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
                                    format="YYYY-MM-DD HH:mm:ss"
                                    formatted="YYYY-MM-DD HH:mm:ss"
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
                                    format="YYYY-MM-DD HH:mm:ss"
                                    formatted="YYYY-MM-DD HH:mm:ss"
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
                            <b-form-checkbox id="is_published" name="is_published" value="1" unchecked-value="0" v-model="form.is_published">
                                Publié?
                            </b-form-checkbox>
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-checkbox id="is_on_frontpage" name="is_on_frontpage" value="1" unchecked-value="0" v-model="form.is_on_frontpage">
                                En page d'accueil?
                            </b-form-checkbox>
                        </b-col>
                    <!-- </b-row>

                    <b-row align-v="center" class="justify-content-start"> -->
                        <b-col cols="12" class="my-2" v-if="form.image">
                            <p class="text-center">Image actuelle:</p>
                            <b-img center :src="`/images/${form.image}`" width="200" class=""></b-img>
                        </b-col>
                        <b-col cols="12" class="my-2" v-if="form.image">
                            <div id="preview" style="text-align: center; margin-bottom: 20px;" v-if="form.new_image">
                                <p>Nouvelle image:</p>
                                <img v-if="imagePreview" :src="imagePreview" style="width: 150px;" />
                            </div>
                        </b-col>
                        <b-col cols="12" class="my-2">
                            <b-form-file
                                accept="image/jpeg, image/png"
                                placeholder="Choisir une nouvelle image..."
                                drop-placeholder="Placez votre image ici..."
                                :class="{ 'is-invalid': form.errors.has('new_image') }"
                                @change="selectFile"
                            ></b-form-file>
                            <!-- <div class="mt-3">Selected file: {{ form.file ? form.file.name : '' }}</div> -->
                            <has-error :form="form" field="new_image" />
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-group label="Sponsors:">
                                <multiselect
                                    tag-placeholder="Add this as new tag"
                                    placeholder="Search or add a tag"
                                    label="name"
                                    track-by="id"
                                    :options="sponsorsArray"
                                    :multiple="true"
                                    :taggable="true"
                                    v-model="activitySponsors"
                                ></multiselect>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <!-- <b-row class="justify-content-start my-2 px-3">
                        <b-col cols="12">
                            <h4 class="text-center">Gallerie d'images</h4>
                        </b-col>
                        <b-col cols="12" sm="3" v-for="(image, index) in activity.images" :key="index">
                            <b-card
                                title=""
                                :img-src="`/images/${image}`"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style=""
                                class="mb-2"
                            >
                                <div class="text-center">
                                    <b-button small variant="danger" @click="removeImage(image)">Remove</b-button>
                                </div>
                            </b-card>
                        </b-col>
                    </b-row> -->

                    <b-row class="justify-content-start my-3 px-3">
                        <b-col cols="12" class="my-2">
                            Gallerie d'images:<br />
                            <!-- form.images: {{ form.images }}<br /> -->
                            <!-- imagePreviewArray: {{ imagePreviewArray }}<br /> -->
                            <b-form-file
                                accept="image/jpeg, image/png"
                                placeholder="Sélectionner de nouvelles images..."
                                drop-placeholder="Placer vos images ici..."
                                multiple
                                ref="fileInput"
                                @change="selectFiles"
                            ></b-form-file>
                        </b-col>

                        form.images: {{ form.images }}<br />
                        imagePreviewArray: {{ imagePreviewArray }}
                        <b-col cols="12" sm="4" class="my-2" v-for="(image, index) in form.images" :key="index">
                            <b-card title="" :img-src="imagePreviewArray[index]" img-alt="Image" img-top tag="article" style="" class="mb-2">
                                <!-- <b-card-text class="text-center">
                                    {{ image }}
                                </b-card-text> -->
                                <div class="text-center">
                                    <b-button size="sm" variant="danger" @click="removeImage(image, index)">Remove</b-button>
                                </div>
                            </b-card>
                        </b-col>
                    </b-row>

                    <b-row class="justify-content-center my-2">
                        <b-button variant="primary" :disabled="loading" type="submit">
                            <b-spinner small type="grow" v-if="loading"></b-spinner>
                            Editer activité
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
        const activityId = parseInt(this.$route.params.id)
        console.log('activityId: ', activityId)

        // if (!this.$store.getters['activities/activities'][this.$route.params.id] || !!this.$store.getters['activities/activities'][this.$route.params.id]['images']) {
        if (!this.activity || !this.activity.images) {
            await this.$store.dispatch('activities/fetchActivityById', { activityId: this.$route.params.id })
        }

        if (Object.keys(this.$store.getters['sponsors/sponsors']).length < 2) {
            await this.$store.dispatch('sponsors/fetchSponsors')
        }

        console.log('this.activity: ', this.activity)
        console.log('this.form: ', this.form)
        this.form.fill(this.activity)
        this.activitySponsors = this.activity.sponsors

        for (let i = 0; i < this.form.images.length; i++) {
            if (typeof this.form.images[i] === 'object') {
                this.imagePreviewArray[i] = URL.createObjectURL(this.form.images[i])
            } else {
                this.imagePreviewArray[i] = `/images/${this.form.images[i]}`
            }
        }
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
                link: '',
                image: null,
                new_image: null,
                is_published: false,
                is_on_frontpage: false,
                sponsors: [],
                images: []
            }),
            activitySponsors: [],
            imagePreview: null,
            imagePreviewArray: []
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        activities() {
            return this.$store.getters['activities/activities']
        },
        activity() {
            return this.$store.getters['activities/activities'][this.$route.params.id]
        },
        sponsors() {
            return this.$store.getters['sponsors/sponsors']
        },
        sponsorsArray() {
            var arr = []
            Object.keys(this.sponsors).forEach(key => arr.push(this.sponsors[key]))
            return arr
        }
    },
    methods: {
        selectFile(e) {
            this.form.new_image = e.target.files[0]
            this.imagePreview = URL.createObjectURL(e.target.files[0])
        },
        selectFiles(e) {
            console.log('selectFiles e: ', e)
            if (e.target.files.length > 0) {
                for (let i = 0; i < e.target.files.length; i++) {
                    this.form.images.push(e.target.files[i])
                }
                this.$refs.fileInput.reset()
            }
            for (let i = 0; i < this.form.images.length; i++) {
                if (typeof this.form.images[i] === 'object') {
                    this.imagePreviewArray[i] = URL.createObjectURL(this.form.images[i])
                } else {
                    this.imagePreviewArray[i] = `/images/${this.form.images[i]}`
                }
            }
        },
        removeImage(selectedImageName, index) {
            try {
                console.log('removeImage selectedImageName: ', selectedImageName)
                console.log('removeImage index: ', index)
                console.log('form.images: ', this.form.images)
                // this.form.images = this.form.images.filter(image => image.name !== selectedImageName)
                this.form.images.splice(index, 1)
            } catch (error) {
                console.log('error: ', error)
            }
        },
        async updateActivity() {
            try {
                console.log('updateActivity form: ', this.form)
                console.log('form.images: ', this.form.images)
                this.$store.commit('loading/SET_LOADING', true)
                this.form['sponsors'] = this.activitySponsors.map(sponsor => parseInt(sponsor.id))
                await this.$store.dispatch('activities/updateActivity', this.form)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Activité mise à jour avec succès!')
                this.$router.push('/admin/activities')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                console.log('error: ', error)
                console.log('error.response: ', error.response)
                this.$noty.error("Une erreur est survenue et l'activité n'a pas pu être mise à jour.")
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

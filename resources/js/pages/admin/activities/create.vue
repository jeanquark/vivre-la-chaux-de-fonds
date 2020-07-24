<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/activities" class="navigation">
                <font-awesome-icon icon="calendar-day" />
                <span>Activités</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Créer</b-breadcrumb-item>
        </b-breadcrumb>

        <h2 class="text-center">Créer une nouvelle activité</h2>
        <!-- sponsors: {{ sponsors }}<br /><br /> -->
        <!-- form: {{ form }}<br /><br /> -->
        <!-- form.sponsors: {{ form.sponsors }}<br /><br /> -->

        <b-row class="justify-content-center">
            <b-col cols="12" md="8" lg="6">
                <b-form @submit.prevent="createActivity">
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
                                <b-form-textarea id="content" rows="3" max-rows="6" :class="{ 'is-invalid': form.errors.has('content') }" v-model="form.content"></b-form-textarea>
                                <has-error :form="form" field="content" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <b-form-group label="Date de début:" label-for="startDate">
                                <VueCtkDateTimePicker
                                    label="Cliquer pour choisir une date"
                                    format="YYYY-MM-DD HH:mm"
                                    formatted="YYYY-MM-DD HH:mm"
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
                                    format="YYYY-MM-DD HH:mm"
                                    formatted="YYYY-MM-DD HH:mm"
                                    button-now-translation="Aujourd'hui"
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
                            form.image: {{ form.image }}
                            <div id="preview">
    <img v-if="url" :src="url" style="width: 150px;" />
  </div>
                            <b-form-file
                                accept="image/jpeg, image/png"
                                placeholder="Sélectionner une nouvelle image..."
                                drop-placeholder="Placer votre image ici..."
                                @change="selectFile"
                                :class="{ 'is-invalid': form.errors.has('image') }"
                            ></b-form-file>
                            <has-error :form="form" field="image" />
                        </b-col>

                        <b-col cols="12" class="my-2">
                            <b-form-group label="Sponsors:">
                                <multiselect
                                    tag-placeholder="Ajouter comme nouveau sponsor"
                                    placeholder="Chercher et ajouter un sponsor"
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

                    <b-row class="justify-content-center my-3 px-3">
                        <b-col cols="12" class="my-0">
                            Gallerie d'images:
                            images: {{ images }}<br />
                            form.images: {{ form.images }}<br />
                            url2: {{ url2 }}<br />
                            <div v-for="(image, index) in form.images" :key="index">
                                {{ image.name }}
                            </div>
                            <!-- <vue-upload-multiple-image
                                dragText="Drag"
                                browseText="Browse"
                                primaryText=""
                                markIsPrimaryText=""
                                popupText=""
                                dropText=""
                                :maxImage="10"
                                :data-images="form.images"
                                @upload-success="uploadImageSuccess"
                                @before-remove="beforeRemove"
                                @edit-image="editImage"
                            ></vue-upload-multiple-image> -->
                            <b-form-file
                                accept="image/jpeg, image/png"
                                placeholder="Sélectionner de nouvelles images..."
                                drop-placeholder="Placer vos images ici..."
                                multiple
                                @change="selectFiles"
                                :class="{ 'is-invalid': form.errors.has('image') }"
                            ></b-form-file>



<div v-for="(image, key) in form.images" style="border: 1px dashed red;">
    <div>
        <img class="preview" v-bind:ref="'image' +parseInt( key )" /> 
        {{ image.name }}
    </div>
</div>

                        </b-col>
                    </b-row>

                    <b-row class="justify-content-center my-2">
                        <b-button variant="primary" :disabled="loading" type="submit">
                            <b-spinner small type="grow" v-if="loading"></b-spinner>
                            Créer nouvelle activité
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
import axios from 'axios'
import Form from 'vform'

// Datepicker
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

// Multiselect
import Multiselect from 'vue-multiselect'

// Multiple image upload
// import VueUploadMultipleImage from 'vue-upload-multiple-image'

export default {
    layout: 'backend',
    components: {
        VueCtkDateTimePicker,
        Multiselect,
        // VueUploadMultipleImage
    },
    async created() {
        if (Object.keys(this.$store.getters['sponsors/sponsors']).length < 2) {
            await this.$store.dispatch('sponsors/fetchSponsors')
        }
        
    },
    mounted() {},
    data() {
        return {
            form: new Form({
                name: 'abc',
                subtitle: '',
                content: '',
                start_date: '',
                end_date: '',
                image: null,
                is_published: false,
                sponsors: [],
                images: [],
            }),
            activitySponsors: [],
            images: [],
                url: null,
                url2: []
            // formNewImage: new Form({
            //     image: null,
            //     path: ''
            // }),
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
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
            this.form.image = e.target.files[0]
            this.url = URL.createObjectURL(e.target.files[0])
        },
        selectFiles (e) {
            console.log('e: ', e.target.files)
            this.form.images = e.target.files
            


            // var selectedFiles = e.target.files;
            // for (var i=0; i < selectedFiles.length; i++){
            //     this.form.images.push(selectedFiles[i]);
            // }

            // for (var i=0; i<this.form.images.length; i++){
            //     let reader = new FileReader(); //instantiate a new file reader
            //     reader.addEventListener('load', function(){
            //       this.$refs['image' + parseInt( i )][0].src = reader.result;
            //     }.bind(this), false);  //add event listener

            //     reader.readAsDataURL(this.form.images[i]);
            // }



        },
        // uploadImageSuccess(formData, index, fileList) {
        //     console.log('data', formData, index, fileList)
        //     console.log('formData', formData)
        //     // this.form.images = fileList
        //     this.images = fileList

        //   // this.form.images.push(formData)
        //   // Upload image api
        //   // axios.post('http://your-url-upload', formData).then(response => {
        //   //   console.log(response)
        //   // })
        // },
        // beforeRemove (index, done, fileList) {
        //     console.log('index', index, fileList)
        //     var r = confirm("remove image")
        //     if (r == true) {
        //         done()
        //     } else {
        //     }
        // },
        // editImage (formData, index, fileList) {
        //   console.log('edit data', formData, index, fileList)
        // },
        async createActivity() {
            try {
                console.log('this.form: ', this.form)
                // this.form.images = this.form.images.map(image => image.path)
                // console.log('form.images: ', this.form.images)
                console.log('images: ', this.images)
                // return

                this.$store.commit('loading/SET_LOADING', true)
                this.form['sponsors'] = this.activitySponsors.map(sponsor => parseInt(sponsor.id))
                await this.$store.dispatch('activities/createActivity', this.form)

                // let formData = new FormData()
                // for( var i = 0; i < this.images.length; i++ ){
                //     let file = this.images[i];

                //     formData.append('files[' + i + ']', file);
                // }
                // console.log('formData: ', formData)
                // // return

                // const abc = await axios.post('/api/images', formData, {
                //     headers: {
                //         'Content-Type': 'multipart/form-data'
                //     }
                // })
                // console.log('abc: ', abc)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Nouvelle activité créée avec succès!')
                this.$router.push('/admin/activities')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                console.log('error: ', error)
                console.log('error.response: ', error.response)
                this.$noty.error("Une erreur est survenue et l'activité n'a pas pu être créée.")
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

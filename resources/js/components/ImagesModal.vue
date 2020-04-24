<template>
    <b-modal size="xl" title="Gestion des images" id="imagesModal" ok-disabled no-close-on-esc no-close-on-backdrop @close="closeModal">
        showSidebar: {{ showSidebar }}<br /><br />
        selectedFile: {{ selectedFile }}<br /><br />
        files: {{ files }}<br /><br />

        <b-tabs content-class="mt-3">
            <b-tab title="Gallerie d'images" active>
                <b-sidebar aria-controls="details" title="Détails" shadow v-model="showSidebar">
                    <div class="px-3 py-2" v-if="selectedFile">
                        <!-- selectedImageWidth: {{ selectedImageWidth }}<br /> -->
                        <b-img :src="`/images/${selectedFile[0]}`" fluid thumbnail ref="selectedImage" class="mb-3" @load="onImageLoad"></b-img>
                        <!-- selectedImage: {{ selectedImage.currentSrc }}<br /><br /> -->
                        <p class="text-white">
                            Taille: {{ selectedFile[2]/1000 }} Ko<br />
                            Dernière modification: {{ selectedFile[3] | moment('DD-MM-YYYY HH:mm') }}<br />
                        <!-- <p>Dernière modification: {{ selectedFile[3] }}</p> -->
                            Largeur: {{ selectedImageWidth }} px<br />
                            Hauteur: {{ selectedImageHeight }} px
                        </p>

                        <div class="text-center">
                            <b-button variant="primary" @click="insertFile(selectedFile[0])">Insérer Image</b-button>
                        </div>
                    </div>
                    <template v-slot:footer="{ hide }">
                        <div class="d-flex bg-dark text-light justify-content-center align-items-center px-3 py-2">
                            <b-button size="sm" @click="hide">Fermer</b-button>
                        </div>
                    </template>
                </b-sidebar>
                <!-- <b-button @click="showSidebar = !showSidebar">Toggle Sidebar</b-button> -->
                <b-row class="justify-content-center my-3">
                    <b-col cols="6" md="3" lg="2" v-for="(file, index) of files" :key="index" @click="selectFile(file)">
                        <b-img thumbnail fluid :src="`/images/${file[0]}`" class="image"></b-img>
                        <p class="text-center" style="word-break: break-word;">{{ formatImageName(file[0]) }}</p>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title="Uploader une image">
                <b-row class="justify-content-center my-3">
                    <b-col cols="12" md="6" lg="4">
                        <b-form-file accept=".jpg, .png, .gif" placeholder="Choisir un fichier..." drop-placeholder="Placer le fichier ici..." :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange"></b-form-file>
                        <has-error :form="form" field="image" />
                        <div id="preview">
                            <img v-if="url" :src="url" />
                        </div>

                    </b-col>
                </b-row>
                <b-row class="justify-content-center my-3">
                    <b-button variant="primary" @click.prevent="uploadImage">Uploader</b-button>
                </b-row>
            </b-tab>
        </b-tabs>
        <template v-slot:modal-footer>
            <div class="w-100">
                <b-button
                    variant="primary"
                    size="md"
                    class="float-right"
                    @click="closeModal"
                >
                    Fermer
                </b-button>
            </div>
        </template>
    </b-modal>
</template>

<script>
	import Form from 'vform'
	import axios from 'axios'
    import { objectToFormData } from 'object-to-formdata'
	export default {
		async created() {},
		async mounted() {
			console.log('FilesModal mounted!')
			const { data } = await axios.get('/api/list-all-images')
			console.log('data: ', data)
			this.files = data.files
		},
		data() {
			return {
				showSidebar: false,
				selectedFile: null,
                files: [],
                form: new Form({
                    image: null
                }),
                selectedImageHeight: null,
                selectedImageWidth: null,
                url: null
			}
		},
		computed: {},
		methods: {
            onFileChange(e) { // Image preview
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);
                this.form.image = file
            },
			// selectFile2(e) {
			// 	this.form.image = e.target.files[0]
			// },
			selectFile(file) {
				console.log('selectFile: ', file)
				this.showSidebar = true
				this.selectedFile = file
                // this.selectedImage.src = file
               //  this.selectedImage.onload = () => {
               //      console.log('abc:', this.selectedImage.naturalWidth)
               //     // here you got the width and height
               //     // width = this.width;
               //     // height = this.height;
               // };
               
			},
			insertFile(file) {
				this.$emit('insertImage', file)
                this.showSidebar = false
                this.$bvModal.hide('filesModal')

			},
			formatImageName(file) {
				const index = file.lastIndexOf('/')
				return file.substring(index + 1)
			},
            async uploadImage () {
                console.log('this.form: ', this.form)

                // const { data } = await axios.post('/api/pages/upload-image', this.form.image)
                // console.log('data: ', data)
                // const { data } = await this.form.submit('post', '/api/pages/upload-image', {
                //     transformRequest: [
                //         function(data, headers) {
                //             return objectToFormData(data)
                //         }
                //     ]
                // })
                // console.log('data: ', data)

                const { data } = await this.form.submit('post', '/api/pages/upload-image', {
                    transformRequest: [
                        function(data, headers) {
                            return objectToFormData(data)
                        }
                    ]
                })
                console.log('data: ', data)
                this.$noty.success('Image ajoutée avec succès.')

                // const { all } = await axios.get('/api/list-all-files')
                // this.files = data.files
                this.files.unshift(data.newImageArray)
            },
            onImageLoad (e) {
                console.log('onImageLoad: ', e)
                // const abc = document.getElementById('selectedImage')
                const abc = this.$refs.selectedImage
                console.log('naturalWidth: ', abc.naturalWidth)
                console.log('naturalHeight: ', abc.naturalHeight)
                this.selectedImageWidth = abc.naturalWidth
                this.selectedImageHeight = abc.naturalHeight
            },
            closeModal () {
                console.log('closeModal')
                this.$emit('closeImagesModal', false)
                this.$bvModal.hide('imagesModal')
            }
		}
	}
</script>

<style lang="scss" scoped>
	@import './resources/sass/_variables.scss';
	.image:hover {
		cursor: pointer;
		border: 2px solid $primary;
	}
    #preview {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1em;
    }

    #preview img {
      max-width: 50%;
      max-height: 200px;
    }
</style>

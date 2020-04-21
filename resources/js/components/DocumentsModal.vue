<template>
    <b-modal size="xl" title="Documents Manager" id="documentsModal" ok-disabled no-close-on-esc no-close-on-backdrop @close="closeModal">
        <!-- showDocumentsModal: {{ showDocumentsModal }}<br /><br /> -->
        showSidebar: {{ showSidebar }}<br /><br />
        selectedFile: {{ selectedFile }}<br /><br />
        files: {{ files }}<br /><br />

        <b-tabs content-class="mt-3">
            <b-tab title="Documents" active>
                <b-sidebar aria-controls="details" title="Détails" shadow v-model="showSidebar">
                    <div class="px-3 py-2" v-if="selectedFile">
                        <b-img src="/images/icons/pdf-icon.png" fluid thumbnail ref="selectedImage" class="mb-3"></b-img>
                        <p class="text-white">
                            Taille: {{ selectedFile[2]/1000 }} Ko<br />
                            Dernière modification: {{ selectedFile[3] | moment('DD-MM-YYYY HH:mm') }}<br />
                        </p>

                        <div class="text-center">
                            <b-button variant="primary" @click="insertFile(selectedFile[0])">Insérer Document</b-button>
                        </div>
                    </div>
                    <template v-slot:footer="{ hide }">
                        <div class="d-flex bg-dark text-light justify-content-center align-items-center px-3 py-2">
                            <b-button size="sm" @click="hide">Fermer</b-button>
                        </div>
                    </template>
                </b-sidebar>
                <b-row class="justify-content-center my-3">
                    <b-col cols="6" md="3" lg="2" v-for="(file, index) of files" :key="index" @click="selectFile(file)">
                        <b-img thumbnail fluid src="/images/icons/pdf-icon.png" class="image"></b-img>
                        <p class="text-center" style="word-break: break-word;">{{ formatFileName(file[0]) }}</p>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title="Uploader un document">
                <b-row class="justify-content-center my-3">
                    <b-col cols="12" md="6" lg="4">
                        <b-form-file accept=".pdf" placeholder="Choisir un fichier..." drop-placeholder="Placer le fichier ici..." :class="{ 'is-invalid': form.errors.has('image') }"></b-form-file>
                        <has-error :form="form" field="image" />
                    </b-col>
                </b-row>
                <b-row class="justify-content-center my-3">
                    <b-button variant="primary" @click.prevent="uploadDocument">Uploader</b-button>
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
		// props: ['showDocumentsModal'],
		async created() {},
		async mounted() {
			console.log('DocumentsModal mounted!')
			const { data } = await axios.get('/api/list-all-documents')
			console.log('data: ', data)
			this.files = data.files
		},
		data() {
			return {
				files: [],
                showSidebar: false,
                selectedFile: null,
                form: new Form({
                    image: null
                })
			}
		},
		computed: {},
		methods: {
            // onFileChange(e) { // Image preview
            //     const file = e.target.files[0];
            //     this.url = URL.createObjectURL(file);
            //     this.form.image = file
            // },
			selectFile(file) {
				console.log('selectFile: ', file)
				this.showSidebar = true
				this.selectedFile = file
			},
			insertFile(file) {
                this.$emit('closeDocumentsModal', false)
				this.$emit('insertFile', file)
                this.showSidebar = false
                this.$bvModal.hide('filesModal')

			},
			formatFileName(file) {
				const index = file.lastIndexOf('/')
				return file.substring(index + 1)
			},
            async uploadDocument () {
                console.log('this.form: ', this.form)

                const { data } = await this.form.submit('post', '/api/pages/upload-document', {
                    transformRequest: [
                        function(data, headers) {
                            return objectToFormData(data)
                        }
                    ]
                })
                console.log('data: ', data)
                this.$noty.success('Document ajouté avec succès.')
                this.files.unshift(data.newDocumentArray)
            },
            // onFileLoad (e) {
            //     console.log('onFileLoad: ', e)
            //     // const abc = document.getElementById('selectedImage')
            //     const abc = this.$refs.selectedFile
            //     console.log('naturalWidth: ', abc.naturalWidth)
            //     console.log('naturalHeight: ', abc.naturalHeight)
            //     this.selectedImageWidth = abc.naturalWidth
            //     this.selectedImageHeight = abc.naturalHeight
            // },
            closeModal () {
                console.log('closeModal')
                this.$emit('closeDocumentsModal', false)
                this.$bvModal.hide('documentsModal')
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

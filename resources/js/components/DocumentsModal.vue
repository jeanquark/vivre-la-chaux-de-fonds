<template>
    <b-modal size="xl" id="documentsModal" ok-disabled no-close-on-esc no-close-on-backdrop @close="closeModal">
        <template v-slot:modal-title>
            <span class="unselectable">Manager Documents</span>
        </template>
        <!-- showDocumentsModal: {{ showDocumentsModal }}<br /><br /> -->
        <!-- showSidebar: {{ showSidebar }}<br /><br /> -->
        <!-- selectedFile: {{ selectedFile }}<br /><br /> -->
        <!-- files: {{ files }}<br /><br /> -->

        <b-tabs content-class="mt-3">
            <b-tab title="Documents" active>
                <b-sidebar aria-controls="details" title="Détails" shadow width="420px" class="unselectable" v-model="showSidebar">
                    <div class="px-3 py-2 text-white" v-if="selectedFile">
                        <div class="text-center">
                            <b-img src="/images/icons/pdf-icon.png" fluid thumbnail ref="selectedImage" class="mb-3"></b-img>
                        </div>
                        <p class="">
                            Nom: <b>{{ selectedFile[0] }}</b><br />
                            Type: <b>{{ formatFileName(selectedFile[1]) }}</b><br />
                            Taille: <b>{{ selectedFile[2]/1000 }} Ko</b><br />
                            Dernière modification: <b>{{ selectedFile[3] | moment('DD-MM-YYYY HH:mm') }}</b><br />
                        </p>

                        <div class="text-center">
                            <b-button variant="primary" @click="insertFile(selectedFile[0], selectedFile[1])">Insérer document</b-button>
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
                        <p class="text-center unselectable" style="word-break: break-word;">{{ formatFileName(file[0]) }}</p>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title="Uploader un document">
                <b-row class="justify-content-center my-3">
                    <b-col cols="12" md="6" lg="4">
                        <b-form-file accept=".pdf" placeholder="Choisir un fichier..." drop-placeholder="Placer le fichier ici..." :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange"></b-form-file>
                        <has-error :form="form" field="document" />
                    </b-col>
                </b-row>
                <b-row class="justify-content-center my-3">
                    <b-button variant="primary" :disabled="loading" @click.prevent="uploadDocument"><b-spinner small type="grow" v-if="loading"></b-spinner> Uploader</b-button>
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
                    document: null
                }),
			}
		},
		computed: {
            loading () {
                return this.$store.getters['loading/loading']
            }
        },
		methods: {
            onFileChange(e) { // Image preview
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);
                this.form.document = file
            },
			selectFile(file) {
				console.log('selectFile: ', file)
                // this.fileName = this.formatRemoveFileExtension(file[0])
				this.showSidebar = true
				this.selectedFile = file
			},
			insertFile(filePath, fileType) {
                const fileName = this.formatRemoveFileExtension(filePath)
                console.log('insertFile: ', filePath, fileType, fileName)
                // return
                this.$emit('closeDocumentsModal', false)
                this.$emit('insertFile', filePath, fileType, fileName)
                this.showSidebar = false
                this.$bvModal.hide('filesModal')
            },
            formatFileName(file) {
                const index = file.lastIndexOf('/')
                return file.substring(index + 1)
            },
            formatRemoveFileExtension(file) {
                const index = file.lastIndexOf('.')
                return file.substring(0, index)
            },
            async uploadDocument () {
                try {
                    console.log('this.form: ', this.form)
                    this.$store.commit('loading/SET_LOADING', true)

                    const { data } = await this.form.submit('post', '/api/pages/upload-document', {
                        transformRequest: [
                            function(data, headers) {
                                return objectToFormData(data)
                            }
                        ]
                    })
                    console.log('data: ', data)
                    // this.files.unshift(data.newDocumentArray)
                    this.$store.commit('loading/SET_LOADING', false)
                    this.$noty.success('Document ajouté avec succès.')
                } catch (error) {
                    console.log('error: ', error)
                    this.$noty.error('Nous sommes désolés. Une erreur est survenue et le document n\'a pas pu être uploadé.')
                    this.$store.commit('loading/SET_LOADING', false)

                }
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
    .unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>

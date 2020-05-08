<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/sections" class="navigation">
                <font-awesome-icon icon="file-alt" />
                <span>Sections</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Editer</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center" v-if="section">Editer section "{{ section.name }}"</h2>
        <!-- section: {{ section }}<br /><br /> -->
        <!-- sections: {{ sections }}<br /><br /> -->

        <b-form @submit.prevent="updatePage">
            <b-row align-v="center" class="justify-content-start my-3 px-3">
                <b-col cols="12" md="6">
                    <b-form-group label="Titre:" label-for="name">
                        <b-form-input id="name" name="name" placeholder="Titre de la section" :class="{ 'is-invalid': form.errors.has('name') }" v-model="form.name"></b-form-input>
                        <has-error :form="form" field="name" />
                    </b-form-group>
                </b-col>

                <b-col cols="12" class="">
                    <b-form-group label="Contenu de la section:" label-for="newPageContent">
                        <b-button variant="primary" v-b-tooltip.hover title="Gras" @click.prevent="formatDoc('bold')">
                            <font-awesome-icon size="1x" icon="bold" class="" />
                        </b-button>

                        <b-button variant="primary" v-b-tooltip.hover title="Italic" @click.prevent="formatDoc('italic')">
                            <font-awesome-icon size="1x" icon="italic" class="" />
                        </b-button>

                        <b-button variant="primary" v-b-tooltip.hover title="Souligné" @click.prevent="formatDoc('underline')">
                            <font-awesome-icon size="1x" icon="underline" class="" />
                        </b-button>

                        <b-button variant="primary" v-b-tooltip.hover title="Aligner à gauche" @click.prevent="formatDoc('justifyleft')">
                            <font-awesome-icon size="1x" icon="align-left" class="" />
                        </b-button>

                        <b-button variant="primary" v-b-tooltip.hover title="Aligner au centre" @click.prevent="formatDoc('justifycenter')">
                            <font-awesome-icon size="1x" icon="align-center" class="" />
                        </b-button>

                        <b-button variant="primary" v-b-tooltip.hover title="Aligner à droite" @click.prevent="formatDoc('justifyright')">
                            <font-awesome-icon size="1x" icon="align-right" class="" />
                        </b-button>

                        <b-button variant="secondary" v-b-tooltip.hover title="Ajouter image" :disabled="!focused" @mousedown.prevent="focused = true" @click.prevent="openImagesModal">
                            <font-awesome-icon size="1x" icon="image" class="" />
                        </b-button>

                        <b-button variant="secondary" v-b-tooltip.hover title="Ajouter PDF" :disabled="!focused" @mousedown.prevent="focused = true" @click.prevent="openDocumentsModal">
                            <font-awesome-icon size="1x" icon="file-pdf" class="" />
                        </b-button>

                        <b-button variant="dark" v-b-tooltip.hover title="Voir code" @click="toggleShowHTML">
                            <font-awesome-icon size="1x" icon="code" />
                        </b-button>

                        <!-- <button @click.prevent="insertDiv('12')">Insert div</button> -->

                        <b-row class="justify-content-center my-2" v-if="showImagePropertiesToast">
                            <b-col cols="12" md="6">
                                <image-properties-toast
                                    :selectedImageProps="selectedImageProps"
                                    @updateSelectedImageProperties="updateSelectedImageProperties"
                                    @closeImagePropertiesToast="showImagePropertiesToast = false"
                                    style=""
                                />
                            </b-col>
                        </b-row>

                        <div contenteditable="true" id="textBox" v-html="form.content" @focus="focused = true" @blur="focused = false" @dblclick="selectedElement" class="mt-1" v-if="!showHTML"></div>

                        <div contenteditable="true" id="textBox" @focus="focused = true" @blur="focused = false" @dblclick="selectedElement" class="mt-1" v-else>
                            <pre style="">{{ form.content }}</pre>
                        </div>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row class="justify-content-center my-2">
                <b-button variant="primary" :disabled="loading" type="submit">
                    <b-spinner small type="grow" v-if="loading"></b-spinner>
                    Editer la section
                </b-button>
            </b-row>
        </b-form>
    </b-container>
</template>

<script>
// vForm
import Form from 'vform'

// Multiselect
import Multiselect from 'vue-multiselect'
// import 'vue-multiselect/dist/vue-multiselect.min.css'

import ImagesModal from '~/components/ImagesModal'
import DocumentsModal from '~/components/DocumentsModal'
import ImagePropertiesToast from '~/components/ImagePropertiesToast'

export default {
    components: {
        Multiselect,
        ImagesModal,
        DocumentsModal,
        ImagePropertiesToast
    },
    async created() {},
    async mounted() {
        if (!this.$store.getters['sections/sections'][this.$route.params.id]) {
            await this.$store.dispatch('sections/fetchSectionById', { sectionId: this.$route.params.id })
        }

        // if (Object.keys(this.$store.getters['sections/sections']).length < 2) {
        //     await this.$store.dispatch('sections/fetchSections')
        // }

        console.log('this.section: ', this.section)
        console.log('this.form: ', this.form)
        this.form.fill(this.section)
        this.sectionSections = this.section.sections
    },
    data() {
        return {
            form: new Form({
                id: '',
                name: '',
                content: '',
                is_published: false
            }),
            showHTML: false,
            focused: false,
            showImagesModal: false,
            showDocumentsModal: false,
            showImagePropertiesToast: false,
            selectedImageNode: null,
            selectedImageProps: {
                width: 0,
                height: 0,
                style: {}
            },
            sectionSections: [],
            options: [{ name: 'Vue.js', code: 'vu' }, { name: 'Javascript', code: 'js' }, { name: 'Open Source', code: 'os' }]
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        sponsors() {
            return this.$store.getters['sponsors/sponsors']
        },
        sections() {
            return this.$store.getters['sections/sections']
        },
        section() {
            return this.$store.getters['sections/sections'][this.$route.params.id]
        },
        sections() {
            return this.$store.getters['sections/sections']
        },
        sectionsArray() {
            var arr = []
            Object.keys(this.sections).forEach(key => arr.push(this.sections[key]))
            return arr
        }
    },
    methods: {
        toggleShowHTML() {
            if (!this.showHTML) {
                this.content = document.getElementById('textBox').innerHTML
            } else {
                this.content = document.getElementById('textBox').innerText
            }
            this.showHTML = !this.showHTML
        },
        updateSelectedImage(value, type) {
            console.log('updateSelectedImage: ', value, type)
            if (type === 'width' || type === 'height') {
                this.selectedImageNode[type] = value
            }
            if (type === 'margin') {
                this.selectedImageNode.style.margin = `${value}px`
            }
            if (type === 'marginRight') {
                this.selectedImageNode.style.marginRight = `${value}px`
            }
            if (type === 'float') {
                this.selectedImageNode.style.float = value
            }
        },
        selectedElement(event) {
            console.log('event.target: ', event.target)
            const element = event.target.tagName.toLowerCase()
            console.log('element: ', element)
            if (element === 'img') {
                console.log('img!')

                this.selectedImageNode = event.target
                this.selectedImageProps['width'] = event.target.width
                this.selectedImageProps['height'] = event.target.height
                this.selectedImageProps['style']['margin'] = event.target.style.margin.match(/\d/g).join('')
                this.selectedImageProps['style']['float'] = event.target.style.float
                this.openImagePropertiesToast()
            }
        },
        updateSelectedImageProperties(value, type) {
            console.log('updateSelectedImageProperties2: ', value, type)
            console.log('selectedImageNode: ', this.selectedImageNode)
            // this.selectedImageProps[type] = value
            // this.selectedImageNode[type] = value
            if (type === 'width' || type === 'height') {
                this.selectedImageNode[type] = value
            }
            if (type === 'margin') {
                this.selectedImageNode.style.margin = `${value}px`
            }
            if (type === 'marginRight') {
                this.selectedImageNode.style.marginRight = `${value}px`
            }
            if (type === 'float') {
                this.selectedImageNode.style.float = value
            }
        },
        openImagesModal() {
            console.log('openImagesModal')
            this.showImagesModal = true
            setTimeout(() => {
                this.$bvModal.show('imagesModal')
            }, 300)
        },
        openDocumentsModal() {
            console.log('openDocumentsModal')
            this.showDocumentsModal = true
            setTimeout(() => {
                this.$bvModal.show('documentsModal')
            }, 300)
        },
        openImagePropertiesToast() {
            console.log('openImagePropertiesToast')
            this.showImagePropertiesToast = true
            setTimeout(() => {
                this.$bvToast.show('example-toast')
            }, 300)
        },
        insertImage(value) {
            console.log('insertImage: ', value)
            // this.showModal = false
            // const image = 'http://dummyimage.com/160x90'
            const image = `/images/${value}`
            document.execCommand('insertImage', false, image)
        },
        insertFile(filePath, fileType, fileName) {
            console.log('insertFile', filePath, fileType, fileName)
            // const abc = fileName
            // document.execCommand('insertHTML', false, `<a href="/documents/38959262-real3d-flipbook-jquery-plugin-license.pdf" type="application/pdf" title="abc" target="_blank">Mon Fichier</a>`)
            // document.execCommand('insertHTML', false, `<a href="/documents/${filePath}" type="${fileType}" title="abc" target="_blank">abc</a>`)
            document.execCommand('insertHTML', false, `<a href="/documents/${filePath}" type="${fileType}" title="${fileName}" target="_blank">${fileName}</a>`)
        },
        insertDiv(value) {
            document.execCommand('formatBlock', false, 'div')
            const selectedElement = window.getSelection().focusNode.parentNode
            selectedElement.className = 'col-6'
        },
        async updatePage() {
            try {
                console.log('updatePage: ', this.form)
                // console.log('this.form: ', this.form)
                // return

                this.$store.commit('loading/SET_LOADING', true)
                const content = document.getElementById('textBox').innerHTML
                // console.log('content: ', content)
                this.form['content'] = content
                this.form['sections'] = this.sectionSections.map(section => parseInt(section.id))
                console.log('this.form: ', this.form)
                // return

                // const { data } = await axios.post('/api/users', this.form)
                await this.$store.dispatch('sections/updatePage', this.form)
                // console.log('data: ', data)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Page mise à jour avec succès!')
                // this.$router.push('/admin/sections')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et la section n'a pas pu être mise à jour.")
            }
        }
    }
}
</script>

<!--<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>-->
<style lang="scss" scoped>
@import './resources/sass/_variables.scss';
#textBox {
    width: 100%;
    height: 250px;
    padding: 12px;
    overflow: scroll;
    border: 6px double $secondary;
}
#textBox #sourceText {
    padding: 10px;
    margin: 0;
    min-width: 498px;
    min-height: 200px;
}
::v-deep #textBox img:hover {
    cursor: pointer;
    border: 2px solid red;
}
#editMode label {
    cursor: pointer;
}
.intLink {
    cursor: pointer;
}
img.intLink {
    border: 1px solid #000;
}

pre {
    overflow-x: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
}
</style>

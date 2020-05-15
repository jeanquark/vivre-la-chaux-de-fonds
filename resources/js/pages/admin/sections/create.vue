<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/sections" class="navigation">
                <font-awesome-icon icon="file-alt" />
                <span>Sections</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Créer</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center">Créer une nouvelle section</h2>

        <b-form @submit.prevent="createNewSection">
            <b-row align-v="center" class="justify-content-start my-3 px-3">
                <b-col cols="12">
                    <b-form-group label="Nom:" label-for="name">
                        <b-form-input id="name" name="name" placeholder="Titre de la section" :class="{ 'is-invalid': form.errors.has('name') }" v-model="form.name"></b-form-input>
                        <has-error :form="form" field="name" />
                    </b-form-group>
                </b-col>
                <b-col cols="12" class="my-2">
                    <b-form-group label="Image:" label-for="image">
                        <b-form-file
                            name="image"
                            accept="image/jpeg, image/png"
                            placeholder="Choisir un fichier..."
                            drop-placeholder="Placer le fichier ici..."
                            @change="selectFile"
                            :class="{ 'is-invalid': form.errors.has('image') }"
                        ></b-form-file>
                        <has-error :form="form" field="image" />
                    </b-form-group>
                </b-col>
                <b-col cols="12" class="">
                    <b-form-group label="Contenu de la section:" label-for="newSectionContent">
                        <b-button variant="primary" v-b-tooltip.hover title="Gras" class="mx-.5" @click.prevent="formatDoc('bold')">
                            <font-awesome-icon size="1x" icon="bold" class="" />
                        </b-button>

                        <b-button variant="primary" v-b-tooltip.hover title="Italic" class="mx-.5" @click.prevent="formatDoc('italic')">
                            <font-awesome-icon size="1x" icon="italic" class="" />
                        </b-button>

                        <b-button variant="primary" v-b-tooltip.hover title="Souligné" class="mx-.5" @click.prevent="formatDoc('underline')">
                            <font-awesome-icon size="1x" icon="underline" class="" />
                        </b-button>

                        <b-button variant="primary" v-b-tooltip.hover title="Aligner à gauche" class="mx-.5" @click.prevent="formatDoc('justifyleft')">
                            <font-awesome-icon size="1x" icon="align-left" class="" />
                        </b-button>

                        <b-button variant="primary" v-b-tooltip.hover title="Aligner au centre" class="mx-.5" @click.prevent="formatDoc('justifycenter')">
                            <font-awesome-icon size="1x" icon="align-center" class="" />
                        </b-button>

                        <b-button variant="primary" v-b-tooltip.hover title="Aligner à droite" class="mx-.5" @click.prevent="formatDoc('justifyright')">
                            <font-awesome-icon size="1x" icon="align-right" class="" />
                        </b-button>

                        <b-button variant="primary" title="Liste point" class="mx-.5" @click.prevent="formatDoc('insertUnorderedList')">
                            <font-awesome-icon size="1x" icon="list-ul" />
                        </b-button>

                        <b-button variant="primary" title="Liste nombre" class="mx-.5" @click.prevent="formatDoc('insertOrderedList')">
                            <font-awesome-icon size="1x" icon="list-ol" />
                        </b-button>

                        <b-button variant="primary" title="Lien" class="mx-.5" @click.prevent="openCreateLinkModal">
                            <font-awesome-icon size="1x" icon="link" />
                        </b-button>

                        <b-button variant="secondary" v-b-tooltip.hover title="Ajouter image" :disabled="!focused" @mousedown.prevent="focused = true" class="mx-.5" @click.prevent="openImagesModal">
                            <font-awesome-icon size="1x" icon="image" class="" />
                        </b-button>

                        <b-button variant="secondary" v-b-tooltip.hover title="Ajouter PDF" :disabled="!focused" @mousedown.prevent="focused = true" class="mx-.5" @click.prevent="openDocumentsModal">
                            <font-awesome-icon size="1x" icon="file-pdf" class="" />
                        </b-button>

                        <b-button variant="dark" v-b-tooltip.hover title="Voir code" class="mx-.5" @click="toggleShowHTML">
                            <font-awesome-icon size="1x" icon="code" />
                        </b-button>

                        <!-- Link - Number list - Bullet point list - Citation - Styles - Format -->

                        <b-row no-gutters class="justify-content-center my-2" v-if="selectedImageNode">
                            <b-col cols="12">
                                <image-properties :selectedImageProps="selectedImageProps" @updateSelectedImageProperties="updateSelectedImageProperties" />
                            </b-col>
                        </b-row>
                        

                        <div contenteditable="true" id="textBox" v-html="content" @focus="focused = true" @blur="focused = false" @click="selectElement" class="mt-1" v-if="!showHTML"></div>

                        <div contenteditable="true" id="textBox" @focus="focused = true" @blur="focused = false" class="mt-1" v-else>
                            <pre style="">{{ content }}</pre>
                        </div>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row class="justify-content-center my-2">
                <b-button variant="primary" :disabled="loading" type="submit">
                    <b-spinner small type="grow" v-if="loading"></b-spinner>
                    Créer nouvelle section
                </b-button>
            </b-row>
        </b-form>

        <!-- <images-modal @insertFile="insertImage" @closeImagesModal="showImagesModal = false" v-if="showImagesModal" />
        <documents-modal @insertFile="insertFile" @closeDocumentsModal="showDocumentsModal = false" v-if="showDocumentsModal" /> -->

        <images-modal @insertImage="insertImage" @closeImagesModal="showImagesModal = false" v-if="showImagesModal" />
        <documents-modal @insertDocument="insertDocument" @closeDocumentsModal="showDocumentsModal = false" v-if="showDocumentsModal" />
        <create-link-modal @insertLink="insertLink" @closeLinkModal="showCreateLinkModal = false" v-if="showCreateLinkModal" />
    </b-container>
</template>

<script>
import Form from 'vform'

// Multiselect
import Multiselect from 'vue-multiselect'

import ImagesModal from '~/components/ImagesModal'
import DocumentsModal from '~/components/DocumentsModal'
import CreateLinkModal from '~/components/CreateLinkModal'
import ImageProperties from '~/components/ImageProperties'

export default {
    components: {
        Multiselect,
        ImagesModal,
        DocumentsModal,
        CreateLinkModal,
        ImageProperties
    },
    async created() {
        if (Object.keys(this.$store.getters['sections/sections']).length < 2) {
            await this.$store.dispatch('sections/fetchSections')
        }
    },
    async mounted() {},
    data() {
        return {
            form: new Form({
                name: '',
                content: '',
                image: null
            }),
            showHTML: false,
            content: '',
            checked: false,
            showImagesModal: false,
            showDocumentsModal: false,
            showCreateLinkModal: false,
            selectedImageNode: null,
            // showImagePropertiesToast: false,
            selectedImageProps: {
                width: 0,
                height: 0,
                style: {}
            },
            focused: false
            // sectionSections: []
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
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
        selectFile(e) {
            this.form.image = e.target.files[0]
        },
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
        selectElement(event) {
            this.selectedImageNode = null
            console.log('selectElement: ', event)
            const element = event.target.tagName.toLowerCase()
            console.log('element: ', element)
            if (element === 'img') {
                console.log('img!')
                this.selectedImageNode = event.target
                this.selectedImageProps['width'] = event.target.width
                this.selectedImageProps['height'] = event.target.height
                this.selectedImageProps['style']['margin-left'] = event.target.style['margin-left'] ? event.target.style['margin-left'].match(/\d/g).join('') : 0
                this.selectedImageProps['style']['margin-right'] = event.target.style['margin-right'] ? event.target.style['margin-right'].match(/\d/g).join('') : 0
                this.selectedImageProps['style']['float'] = event.target.style.float
                // this.openImagePropertiesToast()
            }
        },
        // selectedElement(event) {
        //     console.log('event.target: ', event.target)
        //     const element = event.target.tagName.toLowerCase()
        //     console.log('element: ', element)
        //     if (element === 'img') {
        //         console.log('img!')
        //         this.selectedImageNode = event.target
        //         this.selectedImageProps['width'] = event.target.width
        //         this.selectedImageProps['height'] = event.target.height
        //         this.selectedImageProps['style']['margin'] = event.target.style.margin.match(/\d/g).join('')
        //         this.selectedImageProps['style']['float'] = event.target.style.float
        //         this.openImagePropertiesToast()
        //     }
        // },
        updateSelectedImageProperties(value, type) {
            console.log('updateSelectedImageProperties2: ', value, type)
            console.log('selectedImageNode: ', this.selectedImageNode)
            if (type === 'width' || type === 'height') {
                this.selectedImageNode[type] = value
            }
            if (type === 'marginLeft') {
                this.selectedImageNode.style.marginLeft = `${value}px`
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
        openCreateLinkModal() {
            console.log('openCreateLinkModal')
            this.showCreateLinkModal = true
            setTimeout(() => {
                this.$bvModal.show('createLinkModal')
            }, 300)
        },
        // openImagePropertiesToast() {
        //     console.log('openImagePropertiesToast')
        //     this.showImagePropertiesToast = true
        //     setTimeout(() => {
        //         this.$bvToast.show('example-toast')
        //     }, 300)
        // },
        insertImage(filePath) {
            console.log('insertImage2: ', filePath)

            this.showModal = false
            // const image = 'http://dummyimage.com/160x90'
            const image = `/images/${filePath}`
            this.formatDoc('insertImage', image)
        },
        insertDocument(filePath, fileType, fileName) {
            console.log('insertDocument', filePath, fileType, fileName)
            this.formatDoc('insertHTML', `<a href="/documents/${filePath}" type="${fileType}" title="${fileName}" target="_blank">${fileName}</a>`)
        },
        insertLink(url) {
            console.log('insertLink: ', url)
            this.formatDoc('createLink', url)
        },
        // insertDiv(value) {
        //     document.execCommand('formatBlock', false, 'div')
        //     const selectedElement = window.getSelection().focusNode.parentNode
        //     selectedElement.className = 'col-6'
        // },
        formatDoc(sCmd, sValue) {
            // console.log('sCmd: ', sCmd)
            // console.log('sValue: ', sValue)
            // console.log('document.compForm: ', document.compForm)
            document.execCommand(sCmd, false, sValue)
        },
        // setDocMode(bToSource) {
        //     console.log('bToSource: ', bToSource)
        //     console.log('this.checked: ', this.checked)
        //     var oDoc = document.getElementById('textBox')
        //     console.log('oDoc: ', oDoc)
        //     // return
        //     var oContent
        //     if (bToSource) {
        //         oContent = document.createTextNode(oDoc.innerHTML)
        //         console.log('oContent: ', oContent)
        //         oDoc.innerHTML = ''
        //         var oPre = document.createElement('pre')
        //         oDoc.contentEditable = false
        //         oPre.id = 'sourceText'
        //         oPre.contentEditable = true
        //         oPre.appendChild(oContent)
        //         oDoc.appendChild(oPre)
        //         document.execCommand('defaultParagraphSeparator', false, 'div')
        //     } else {
        //         if (document.all) {
        //             oDoc.innerHTML = oDoc.innerText
        //         } else {
        //             oContent = document.createRange()
        //             oContent.selectNodeContents(oDoc.firstChild)
        //             oDoc.innerHTML = oContent.toString()
        //         }
        //         oDoc.contentEditable = true
        //     }
        //     oDoc.focus()
        // },

        async createNewSection() {
            try {
                // console.log('document.getElementById("textBox").innerHTML2: ', document.getElementById('textBox').innerHTML)
                this.$store.commit('loading/SET_LOADING', true)
                const content = document.getElementById('textBox').innerHTML
                // console.log('content: ', content)
                this.form['content'] = content
                console.log('this.form: ', this.form)
                // return
                await this.$store.dispatch('sections/createSection', this.form)
                // await this.$store.dispatch('activities/createActivity', this.form)

                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Nouvelle section créée avec succès!')
                this.$router.push('/admin/sections')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.error("Une erreur est survenue et la nouvelle section n'a pas pu être créée.")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './resources/sass/_variables.scss';
#textBox {
    width: 100%;
    height: 250px;
    border: 6px double $secondary;
    padding: 12px;
    overflow: scroll;
}
#textBox #sourceText {
    padding: 0;
    margin: 0;
    min-width: 498px;
    min-height: 200px;
}
::v-deep #textBox img:hover {
    cursor: pointer;
    border: 2px solid $primary;
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
// .button2:hover {
//     cursor: pointer;
//     color: orange;
// }
.disabled:hover {
    cursor: not-allowed;
    color: #000;
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

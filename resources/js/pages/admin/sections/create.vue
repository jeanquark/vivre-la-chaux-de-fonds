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

        <b-row class="justify-content-center" v-if="showImagesModal" style="border: 1px solid #000;">
            <b-col cols="6" md="3" lg="2">
                <b-form-group label="Largeur (px)" label-for="width">
                    <b-form-input type="number" min="0" id="width" v-model="selectedImageProps['width']" @update="updateSelectedImage($event, 'width')"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <label for="height">Hauteur (px):</label>
                <b-form-input type="number" min="0" id="height" v-model="selectedImageProps['height']" @update="updateSelectedImage($event, 'height')"></b-form-input>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <label for="margin">Marges (px):</label>
                <b-form-input type="number" id="margin" v-model="selectedImageProps['style']['margin']" @update="updateSelectedImage($event, 'margin')"></b-form-input>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <label for="marginRight">Marge droite (px):</label>
                <b-form-input type="number" id="marginRight" v-model="selectedImageProps['style']['marginRight']" @update="updateSelectedImage($event, 'marginRight')"></b-form-input>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <label for="float">Float:</label>
                <b-form-select :options="['left', 'center', 'right']" id="float" v-model="selectedImageProps['style']['float']" @change="updateSelectedImage($event, 'float')"></b-form-select>
            </b-col>
        </b-row>

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

                        Link - Number list - Bullet point list - Citation - Styles - Format

                        <b-row class="justify-content-center my-2" v-if="showImagePropertiesToast">
                            <b-col cols="12" md="6">
                                <image-properties
                                    :selectedImageProps="selectedImageProps"
                                    @updateSelectedImageProperties="updateSelectedImageProperties"
                                    @closeImagePropertiesToast="showImagePropertiesToast = false"
                                    style=""
                                />
                            </b-col>
                        </b-row>

                        <div contenteditable="true" id="textBox" v-html="content" @focus="focused = true" @blur="focused = false" @dblclick="selectedElement" class="mt-1" v-if="!showHTML"></div>

                        <div contenteditable="true" id="textBox" @focus="focused = true" @blur="focused = false" @dblclick="selectedElement" class="mt-1" v-else>
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

        <images-modal @insertFile="insertImage" @closeImagesModal="showImagesModal = false" v-if="showImagesModal" />
        <documents-modal @insertFile="insertFile" @closeDocumentsModal="showDocumentsModal = false" v-if="showDocumentsModal" />
    </b-container>
</template>

<script>
import Form from 'vform'

// Multiselect
import Multiselect from 'vue-multiselect'

import ImagesModal from '~/components/ImagesModal'
import DocumentsModal from '~/components/DocumentsModal'
import ImageProperties from '~/components/ImageProperties'

export default {
    components: {
        Multiselect,
        ImagesModal,
        DocumentsModal,
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
            showImagePropertiesToast: false,
            selectedImageNode: null,
            selectedImageProps: {
                width: 0,
                height: 0,
                style: {}
            },
            focused: false,
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
            // console.log('document.activeElement: ', document.activeElement)
            // return
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
        formatDoc(sCmd, sValue) {
            console.log('sCmd: ', sCmd)
            console.log('sValue: ', sValue)
            console.log('document.compForm: ', document.compForm)
            // document.execCommand('defaultParagraphSeparator', false, "p");
            // if (sCmd === 'justifyleft') {
            //     return
            // }
            document.execCommand(sCmd, false, sValue)

            // if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }
        },
        setDocMode(bToSource) {
            console.log('bToSource: ', bToSource)
            console.log('this.checked: ', this.checked)
            var oDoc = document.getElementById('textBox')
            console.log('oDoc: ', oDoc)
            // return
            var oContent
            if (bToSource) {
                oContent = document.createTextNode(oDoc.innerHTML)
                console.log('oContent: ', oContent)
                oDoc.innerHTML = ''
                var oPre = document.createElement('pre')
                oDoc.contentEditable = false
                oPre.id = 'sourceText'
                oPre.contentEditable = true
                oPre.appendChild(oContent)
                oDoc.appendChild(oPre)
                document.execCommand('defaultParagraphSeparator', false, 'div')
            } else {
                if (document.all) {
                    oDoc.innerHTML = oDoc.innerText
                } else {
                    oContent = document.createRange()
                    oContent.selectNodeContents(oDoc.firstChild)
                    oDoc.innerHTML = oContent.toString()
                }
                oDoc.contentEditable = true
            }
            oDoc.focus()
        },

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
.resizable {
    display: inline-block;
    background: red;
    resize: both;
    overflow: hidden;
    line-height: 0;
}

.resizable img {
    width: 100%;
    height: 100%;
}
.button2:hover {
    cursor: pointer;
    color: orange;
}
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

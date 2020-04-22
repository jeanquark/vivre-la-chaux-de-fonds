<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/pages" class="navigation">
                <font-awesome-icon icon="file-alt" />
                <span>Plans</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Créer</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center">Ajouter une nouvelle page</h2>
        
        showImagesModal: {{ showImagesModal }} <b-button size="sm" @click="showImagesModal = false">Fermer</b-button><br /><br />
        showDocumentsModal: {{ showDocumentsModal }} <b-button size="sm" @click="showDocumentsModal = false">Fermer</b-button><br /><br />
        selectedImageNode: {{ selectedImageNode }}<br /><br />
        selectedImageProps: {{ selectedImageProps }}<br /><br />
        focused: {{ focused }}<br /><br />

        <a href="/documents/38959262-real3d-flipbook-jquery-plugin-license.pdf" type="application/pdf" title="38959262-real3d-flipbook-jquery-plugin-license" target="_blank">38959262-real3d-flipbook-jquery-plugin-license</a>
        <a href="/documents/38959262-real3d-flipbook-jquery-plugin-license.pdf" type="application/pdf" title="abc">Mon Fichier</a>

        <b-row class="justify-content-center" v-if="showImagesModal" style="border: 1px solid #000;">
            <b-col cols="6" md="3" lg="2">
                <!-- <label for="width">Largeur (px):</label>
                <b-form-input type="number" min="0" id="width" v-model="selectedImageProps['width']" @update="updateSelectedImage($event, 'width')"></b-form-input> -->
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
                <b-form-input type="number"id="margin" v-model="selectedImageProps['style']['margin']" @update="updateSelectedImage($event, 'margin')"></b-form-input>
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

        <b-form @submit.prevent="createNewPage">
            <b-row align-v="center" class="justify-content-start my-3 px-3">
                <b-col cols="12" md="6">
                    <b-form-group label="Entrer un titre pour cette page:" label-for="newPageTitle">
                        <b-form-input id="newPageTitle" placeholder="Titre de la page" v-model="newPage.title"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12" class="">
                    <b-form-group label="Contenu de la page:" label-for="newPageContent">
                        <!-- <img
                            class="intLink"
                            title="Bold"
                            @click="formatDoc('bold')"
                            src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAInhI+pa+H9mJy0LhdgtrxzDG5WGFVk6aXqyk6Y9kXvKKNuLbb6zgMFADs="
                            style="border: 1px solid #000;"
                        /> -->
                        <b-button variant="primary" v-b-tooltip.hover title="Gras" @click.prevent="formatDoc('bold')">
                            <font-awesome-icon size="1x" icon="bold" class="" />
                        </b-button>

                        <!-- <img
                            class="intLink"
                            title="Italic"
                            @click="formatDoc('italic')"
                            src="data:image/gif;base64,R0lGODlhFgAWAKEDAAAAAF9vj5WIbf///yH5BAEAAAMALAAAAAAWABYAAAIjnI+py+0Po5x0gXvruEKHrF2BB1YiCWgbMFIYpsbyTNd2UwAAOw=="
                        /> -->
                        <b-button variant="primary" v-b-tooltip.hover title="Italic" @click.prevent="formatDoc('italic')">
                            <font-awesome-icon size="1x" icon="italic" class="" />
                        </b-button>

                        <!-- <img
                            class="intLink"
                            title="Underline"
                            @click="formatDoc('underline')"
                            src="data:image/gif;base64,R0lGODlhFgAWAKECAAAAAF9vj////////yH5BAEAAAIALAAAAAAWABYAAAIrlI+py+0Po5zUgAsEzvEeL4Ea15EiJJ5PSqJmuwKBEKgxVuXWtun+DwxCCgA7"
                        /> -->
                        <b-button variant="primary" v-b-tooltip.hover title="Souligné" @click.prevent="formatDoc('underline')">
                            <font-awesome-icon size="1x" icon="underline" class="" />
                        </b-button>

                        <!-- <img class="intLink" title="Left align" @click="formatDoc('justifyleft');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JMGELkGYxo+qzl4nKyXAAAOw==" /> -->
                        <b-button variant="primary" v-b-tooltip.hover title="Aligner à gauche" @click.prevent="formatDoc('justifyleft')">
                            <font-awesome-icon size="1x" icon="align-left" class="" />
                        </b-button>
                        <!-- <img class="intLink" title="Center align" @click="formatDoc('justifycenter');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIfhI+py+0Po5y02ouz3jL4D4JOGI7kaZ5Bqn4sycVbAQA7" /> -->
                        <b-button variant="primary" v-b-tooltip.hover title="Aligner au centre" @click.prevent="formatDoc('justifycenter')">
                            <font-awesome-icon size="1x" icon="align-center" class="" />
                        </b-button>
                        <!-- <img class="intLink" title="Right align" @click="formatDoc('justifyright');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JQGDLkGYxouqzl43JyVgAAOw==" /> -->
                        <b-button variant="primary" v-b-tooltip.hover title="Aligner à droite" @click.prevent="formatDoc('justifyright')">
                            <font-awesome-icon size="1x" icon="align-right" class="" />
                        </b-button>

                        <!-- <img class="intLink" title="Underline" @click.prevent="formatDoc('insertImage', 'http://dummyimage.com/160x90')" src="/images/icon-image.png" width="30" /> -->
                        <!-- <img class="intLink" title="Underline" @click.prevent="openImagesModal" src="/images/icons/image.png" width="30" /> -->

                        <b-button variant="primary" v-b-tooltip.hover title="Ajouter image" :disabled="!focused" @mousedown.prevent="focused = true" @click.prevent="openImagesModal">
                            <font-awesome-icon size="1x" icon="image" class="" />
                        </b-button>
                        <!-- <img class="intLink" title="Underline" @click.prevent="openDocumentsModal" src="/images/icons/pdf.png" width="30" /> -->

                        <b-button variant="primary" v-b-tooltip.hover title="Ajouter PDF" :disabled="!focused" @mousedown.prevent="focused = true" @click.prevent="openDocumentsModal">
                            <font-awesome-icon size="1x" icon="file-pdf" class="" />
                        </b-button>

                        <button @click.prevent="insertDiv('12')">Insert div</button>

                        <div contenteditable="true" id="textBox" v-html="content" @focus="focused = true" @blur="focused = false" @dblclick="selectedElement" class="mt-1" v-if="!showHTML"></div>
                        <div contenteditable="true" id="textBox" @focus="focused = true" @blur="focused = false" @dblclick="selectedElement" class="mt-1" v-else><pre>{{ content }}</pre></div>

                        <button @click="showHTML = !showHTML">Show HTML</button>
                        <!-- <p id="editMode"><input type="checkbox" name="switchMode" id="switchBox" v-model="checked" @click="setDocMode(checked)" /> <label for="switchBox">Show HTML</label></p> -->
                        <p id="editMode"><input type="checkbox" name="switchMode" id="switchBox" @change="setDocMode(checked);" /> <label for="switchBox">Show HTML</label></p>
                        <!-- checked: {{ checked }}<br /><br /> -->
                        <!-- content: {{ content }} -->
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row class="justify-content-center my-2">
                <b-button variant="primary" :disabled="loading" type="submit">
                    <b-spinner small type="grow" v-if="loading"></b-spinner>
                    Créer nouvelle page
                </b-button>
            </b-row>
        </b-form>



        <!-- <div class="resizable">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pigeon_Point_Lighthouse_%282016%29.jpg/220px-Pigeon_Point_Lighthouse_%282016%29.jpg" alt="" />
        </div> -->

        <!-- <b-modal id="filesModal">Hello From My Modal2!</b-modal> -->
        <images-modal :@insertFile="insertImage" @closeImagesModal="showImagesModal = false" v-if="showImagesModal" />
        <!-- hoveredElement: {{ hoveredElement }} -->
        <documents-modal @insertFile="insertFile" @closeDocumentsModal="showDocumentsModal = false" v-if="showDocumentsModal" />
    </b-container>
</template>

<script>
// import CKEditor from 'ckeditor4-vue'
import ImagesModal from '~/components/ImagesModal'
import DocumentsModal from '~/components/DocumentsModal'

export default {
    components: {
        // ckeditor: CKEditor.component
        ImagesModal,
        DocumentsModal
    },
    async created() {},
    mounted() {
    },
    data() {
        return {
            // editorConfig: {
            //     extraPlugins: ['justify', 'image2'],
            //     filebrowserBrowseUrl: '/ckfinder/browser',
            //     filebrowserUploadUrl: '/userfiles'
            // },
            newPage: {},
            showHTML: false,
            content: '<p>Ceci est mon texte en <b>gras</b>.</p><img src="/images/logo.png" width="100" style="margin: 20px; float: right;" />',
            checked: false,
            // showModal: false,
            showImagesModal: false,
            showDocumentsModal: false,
            selectedImageNode: null,
            // selectedImageWidth: 0,
            // selectedImageHeight: 0,
            // selectedImageMargin: 0,
            selectedImageProps: {
                width: 0,
                height: 0,
                style: {}
            },
            focused: false
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        // abc () {
        //     // return '<b>abc</b>'
        //     console.log(document.getElementById('textBox'))
        //     return document.getElementById('textBox').innerHTML
        // }    
    },
    methods: {
        abc () {
            console.log('abc')
        },
        onFocus ($event) {
            console.log('onFocus', $event)
        },
        updateSelectedImage (value, type) {
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
            // console.log('event: ', event)
            console.log('event.target: ', event.target)
            // console.log('event.type: ', event.type)
            // console.log('event.currentTarget: ', event.currentTarget)
            // console.log('event.target.tagName: ', event.target.tagName)
            // console.log('event.target.nodeName: ', event.target.nodeName.toLowerCase())
            const element = event.target.tagName.toLowerCase()
            console.log('element: ', element)
            if (element === 'img') {
                this.showImageModal = true
                this.selectedImageNode = event.target
                this.selectedImageProps['width'] = event.target.width
                this.selectedImageProps['height'] = event.target.height
                this.selectedImageProps['style']['margin'] = event.target.style.margin.match(/\d/g).join('')
                this.selectedImageProps['style']['float'] = event.target.style.float
                // event.target.width = 200
                // this.selectedImage.width = 400
            }
        },
        openImagesModal() {
            console.log('openImagesModal')
            this.showImagesModal = true
            setTimeout(() => {
                this.$bvModal.show('imagesModal')
            }, 300)
        },
        openDocumentsModal () {
            console.log('openDocumentsModal')
            // console.log('document.activeElement: ', document.activeElement)
            // return
            this.showDocumentsModal = true
            setTimeout(() => {
                this.$bvModal.show('documentsModal')
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
        // showHTML() {},
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
        async createNewPage() {
            try {
                console.log('document.getElementById("textBox").innerHTML: ', document.getElementById('textBox').innerHTML)
                return
                this.$store.commit('loading/SET_LOADING', true)
                await this.$store.dispatch('pages/createPage', { newPage: this.newPage })
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Nouvelle page créée avec succès!')
                this.$router.push('/admin/pages')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.error("Une erreur est survenue et la nouvelle page n'a pas pu être créée.")
            }
        }
    }
}
</script>

<style scoped>
#textBox {
    width: 100%;
    height: 250px;
    border: 1px #000000 solid;
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

/*.cke_image_resizer {
    display: none;
    position: absolute;
    width: 10px;
    height: 10px;
    bottom: -5px;
    right: -5px;
    background: #000;
    outline: 1px solid #fff;
    line-height: 0;
    cursor: se-resize;
}*/
</style>

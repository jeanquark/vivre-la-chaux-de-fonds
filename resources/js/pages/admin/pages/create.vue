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

        <a href="/documents/38959262-real3d-flipbook-jquery-plugin-license.pdf" type="application/pdf" title="38959262-real3d-flipbook-jquery-plugin-license" target="_blank">38959262-real3d-flipbook-jquery-plugin-license</a>

        <!-- <b-row class="justify-content-center" v-if="showImagesModal" style="border: 1px solid #000;">
            <b-col cols="6" md="3" lg="2">
                <label for="width">Largeur (px):</label>
                <b-form-input type="number" min="0" id="width" v-model="selectedImageProps['width']" @update="updateSelectedImage($event, 'width')"></b-form-input>
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
        </b-row> -->

        <b-form @submit.prevent="createNewPage">
            <b-row align-v="center" class="justify-content-start my-3 px-3">
                <b-col cols="12" md="6">
                    <b-form-group label="Entrer un titre pour cette page:" label-for="newPageTitle">
                        <b-form-input id="newPageTitle" placeholder="Titre de la page" v-model="newPage.title"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="12">
                    <b-form-group label="Contenu de la page:" label-for="newPageContent">
                        <img
                            class="intLink"
                            title="Bold"
                            @click="formatDoc('bold')"
                            src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAInhI+pa+H9mJy0LhdgtrxzDG5WGFVk6aXqyk6Y9kXvKKNuLbb6zgMFADs="
                            style="border: 1px solid #000;"
                        />
                        <img
                            class="intLink"
                            title="Italic"
                            @click="formatDoc('italic')"
                            src="data:image/gif;base64,R0lGODlhFgAWAKEDAAAAAF9vj5WIbf///yH5BAEAAAMALAAAAAAWABYAAAIjnI+py+0Po5x0gXvruEKHrF2BB1YiCWgbMFIYpsbyTNd2UwAAOw=="
                        />
                        <img
                            class="intLink"
                            title="Underline"
                            @click="formatDoc('underline')"
                            src="data:image/gif;base64,R0lGODlhFgAWAKECAAAAAF9vj////////yH5BAEAAAIALAAAAAAWABYAAAIrlI+py+0Po5zUgAsEzvEeL4Ea15EiJJ5PSqJmuwKBEKgxVuXWtun+DwxCCgA7"
                        />
                        <img class="intLink" title="Left align" @click="formatDoc('justifyleft');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JMGELkGYxo+qzl4nKyXAAAOw==" />
                        <img class="intLink" title="Center align" @click="formatDoc('justifycenter');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIfhI+py+0Po5y02ouz3jL4D4JOGI7kaZ5Bqn4sycVbAQA7" />
                        <img class="intLink" title="Right align" @click="formatDoc('justifyright');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JQGDLkGYxouqzl43JyVgAAOw==" />

                        <!-- <img class="intLink" title="Underline" @click.prevent="formatDoc('insertImage', 'http://dummyimage.com/160x90')" src="/images/icon-image.png" width="30" /> -->
                        <img class="intLink" title="Underline" @click.prevent="openImagesModal" src="/images/icons/image.png" width="30" />
                        <img class="intLink" title="Underline" @click.prevent="openDocumentsModal" src="/images/icons/pdf.png" width="30" />
                        <button @click.prevent="insertDiv('12')">Insert div</button>

                        <div contenteditable="true" id="textBox" v-html="content" @dblclick="selectedElement"></div>

                        <button @click="showHTML">Show HTML</button>
                        <!-- <p id="editMode"><input type="checkbox" name="switchMode" id="switchBox" v-model="checked" @click="setDocMode(checked)" /> <label for="switchBox">Show HTML</label></p> -->
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
            content: '<p>Ceci est mon texte en <b>gras</b>.</p><img src="/images/logo.png" width="100" style="margin: 20px; float: right;" />',
            // checked: false,
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
            }
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        }        
    },
    methods: {
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
            console.log('openFilesModal')
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
        insertFile(value) {
            console.log('insertFile', value)
            document.execCommand('insertHTML', false, `<a href="/documents/${value}" type="application/pdf" title="${value}">${value}</a>`)

        },
        insertDiv(value) {
            document.execCommand('formatBlock', false, 'div')
            const selectedElement = window.getSelection().focusNode.parentNode
            selectedElement.className = 'col-6'
        },
        showHTML() {},
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

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
                        <!-- <img class="intLink" title="Underline" @click.prevent="formatDoc('insertImage', 'http://dummyimage.com/160x90')" src="/images/icon-image.png" width="30" /> -->
                        <img class="intLink" title="Underline" @click.prevent="openFilesModal()" src="/images/icon-image.png" width="30" />
                        <button @click.prevent="insertDiv('12')">Insert div</button>
                        <div contenteditable="true" id="textBox" v-html="content" ref="abc" @mouseover="selectedElement"></div>
                        <button @click="showHTML">Show HTML</button>
                        <p id="editMode"><input type="checkbox" name="switchMode" id="switchBox" v-model="checked" @click="setDocMode(checked)" /> <label for="switchBox">Show HTML</label></p>
                        checked: {{ checked }}<br /><br />
                        content: {{ content }}
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
        <files-modal :showModal="showModal" @insertFile="insertFile" />
        showModal: {{ showModal }}<br /><br />
        <!-- hoveredElement: {{ hoveredElement }} -->
    </b-container>
</template>

<script>
// import CKEditor from 'ckeditor4-vue'
import FilesModal from '~/components/FilesModal'

export default {
    components: {
        // ckeditor: CKEditor.component
        FilesModal
    },
    async created() {},
    mounted() {
        // let oDoc = document.getElementById('textBox')
        // let sDefTxt = oDoc.innerHTML
        // if (document.compForm.switchMode.checked) {
        //     setDocMode(true)
        // }
    },
    data() {
        return {
            // editorConfig: {
            //     extraPlugins: ['justify', 'image2'],
            //     filebrowserBrowseUrl: '/ckfinder/browser',
            //     filebrowserUploadUrl: '/userfiles'
            // },
            newPage: {},
            content: '<p>Ceci est mon texte en <b>gras</b>.</p><img src="/images/logo.png" width="100" />',
            checked: false,
            showModal: false
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        // hoveredElement() {
        //     return document.parentElement.querySelector(':hover')
        // }
        
    },
    methods: {
        selectedElement(event) {
            console.log('selectedElement: ', event.target)
            event.target.width="200"
        },
        openFilesModal() {
            console.log('openFilesModal: ')
            // this.$bvModal.show('filesModal')
            this.showModal = !this.showModal
        },
        insertDiv(value) {
            document.execCommand('formatBlock', false, 'div')
            const selectedElement = window.getSelection().focusNode.parentNode
            selectedElement.className = 'col-6'
        },
        insertFile(value) {
            console.log('insertFile: ', value)
            // const image = 'http://dummyimage.com/160x90'
            const image = `/images/${value}`
            document.execCommand('insertImage', false, image)
        },
        showHTML() {},
        formatDoc(sCmd, sValue) {
            console.log('sCmd: ', sCmd)
            console.log('sValue: ', sValue)
            console.log('document.compForm: ', document.compForm)
            // document.execCommand('defaultParagraphSeparator', false, "p");
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
                console.log('this.abc: ', this.$refs.abc)
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
    width: 540px;
    height: 200px;
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
    border: 2px solid red;
    resize: both;
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
</style>

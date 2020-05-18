<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/sections" class="navigation">
                <font-awesome-icon icon="columns" />
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

                <b-col cols="12" md="6" class="my-2" v-if="form.image">
                    <p class="text-center">Image actuelle:</p>
                    <b-img center :src="`/images/${form.image}`" width="200" class=""></b-img>
                </b-col>

                <b-col cols="12" md="6" class="my-2">
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

                <b-col cols="12" class="my-2" v-if="section.page">
                    Lié à la page: <router-link :to="`/admin/pages/${section.page.id}/edit`">{{ section.page.name }}</router-link>
                </b-col>

                <b-col cols="12" class="">
                    <b-form-group label="Contenu de la section:" label-for="newPageContent">
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

                        <b-button variant="secondary" v-b-tooltip.hover title="Ajouter image" :disabled="!focused" class="mx-.5" @mousedown.prevent="focused = true" @click.prevent="openImagesModal">
                            <font-awesome-icon size="1x" icon="image" class="" />
                        </b-button>

                        <b-button variant="secondary" v-b-tooltip.hover title="Ajouter PDF" :disabled="!focused" class="mx-.5" @mousedown.prevent="focused = true" @click.prevent="openDocumentsModal">
                            <font-awesome-icon size="1x" icon="file-pdf" class="" />
                        </b-button>

                        <b-button variant="dark" v-b-tooltip.hover title="Voir code" class="mx-.5" @click="toggleShowHTML">
                            <font-awesome-icon size="1x" icon="code" />
                        </b-button>

                        <!-- <button @click.prevent="insertDiv('12')">Insert div</button> -->

                        <b-row class="justify-content-center my-2" v-if="selectedImageNode">
                            <b-col cols="12">
                                <image-properties :selectedImageProps="selectedImageProps" @updateSelectedImageProperties="updateSelectedImageProperties" />
                            </b-col>
                        </b-row>

                        <div contenteditable="true" id="textBox" v-html="form.content" @focus="focused = true" @blur="focused = false" @click="selectElement" class="mt-1" v-if="!showHTML"></div>

                        <div contenteditable="true" id="textBox" @focus="focused = true" @blur="focused = false" class="mt-1" v-else>
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
        CreateLinkModal
    },
    async created() {},
    async mounted() {
        if (!this.$store.getters['sections/sections'][this.$route.params.id]) {
            await this.$store.dispatch('sections/fetchSectionById', { sectionId: this.$route.params.id })
        }
        this.form.fill(this.section)
        // this.sectionSections = this.section.pages
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
            showCreateLinkModal: false,
            selectedImageNode: null,
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
                this.form.content = document.getElementById('textBox').innerHTML
            } else {
                this.form.content = document.getElementById('textBox').innerText
            }
            this.showHTML = !this.showHTML
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
        insertImage(value) {
            console.log('insertImage: ', value)
            // const image = 'http://dummyimage.com/160x90'
            const image = `/images/${value}`
            document.execCommand('insertImage', false, image)
        },
        insertDocument(filePath, fileType, fileName) {
            console.log('insertDocument', filePath, fileType, fileName)
            this.formatDoc('insertHTML', `<a href="/documents/${filePath}" type="${fileType}" title="${fileName}" target="_blank">${fileName}</a>`)
        },
        insertLink(url) {
            console.log('insertLink: ', url)
            this.formatDoc('createLink', url)
        },
        formatDoc(sCmd, sValue) {
            document.execCommand(sCmd, false, sValue)
        },
        async updatePage() {
            try {
                console.log('updatePage: ', this.form)
                this.$store.commit('loading/SET_LOADING', true)
                let content
                if (!this.showHTML) {
                    content = document.getElementById('textBox').innerHTML
                } else {
                    content = document.getElementById('textBox').innerText
                }
                this.form['content'] = content
                console.log('this.form: ', this.form)
                await this.$store.dispatch('sections/updateSection', this.form)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Section mise à jour avec succès!')
                this.$router.push('/admin/sections')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et la section n'a pas pu être mise à jour.")
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

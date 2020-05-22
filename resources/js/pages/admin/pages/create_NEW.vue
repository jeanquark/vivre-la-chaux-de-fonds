<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/pages" class="navigation">
                <font-awesome-icon icon="file" />
                <span>Pages</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Créer</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center">Créer une nouvelle page</h2>

        <b-form @submit.prevent="createNewPage">
            <b-row align-v="center" class="justify-content-start my-3 px-3">
                <b-col cols="12">
                    <b-form-group label="Titre:" label-for="name">
                        <b-form-input id="name" name="name" placeholder="Titre de la page" :class="{ 'is-invalid': form.errors.has('name') }" v-model="form.name"></b-form-input>
                        <has-error :form="form" field="name" />
                    </b-form-group>
                </b-col>
                <b-col cols="12" class="my-2">
                    <b-form-group label="Sections:">
                        <multiselect
                            tag-placeholder="Add this as new tag"
                            placeholder="Search or add a tag"
                            label="name"
                            track-by="id"
                            :options="sectionsArray"
                            :multiple="true"
                            :taggable="true"
                            v-model="pageSections"
                        ></multiselect>
                    </b-form-group>
                </b-col>
                <b-col cols="12" class="">
                    <b-form-group label="Contenu de la page:" label-for="newPageContent">
                        <!-- <b-row no-gutters class="justify-content-start"> -->
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

                        <!-- <b-button variant="light" title="Couper" @click.prevent="formatDoc('cut')">
                            <font-awesome-icon size="1x" icon="cut" />
                        </b-button>

                        <b-button variant="light" title="Coller" @click.prevent="formatDoc('copy')">
                            <font-awesome-icon size="1x" icon="copy" />
                        </b-button> -->

                        <b-button variant="secondary" v-b-tooltip.hover title="Ajouter image" :disabled="!focused" @mousedown.prevent="focused = true" class="mx-.5" @click.prevent="openImagesModal">
                            <font-awesome-icon size="1x" icon="image" class="" />
                        </b-button>

                        <b-button variant="secondary" v-b-tooltip.hover title="Ajouter PDF" :disabled="!focused" @mousedown.prevent="focused = true" class="mx-.5" @click.prevent="openDocumentsModal">
                            <font-awesome-icon size="1x" icon="file-pdf" class="" />
                        </b-button>

                        <b-button variant="dark" v-b-tooltip.hover title="Voir code" class="mx-.5" @click="toggleShowHTML">
                            <font-awesome-icon size="1x" icon="code" />
                        </b-button>

                        <router-link to="/contact">Contact</router-link>
                        <!-- <button @click.prevent="insertDiv('12')">Insert div</button> -->
                        <!-- <button @click.prevent="insertInternalLink()">Insert internal link</button> -->
                        <!-- {{ selectedText }} -->
                        <!-- <button @click.prevent="displayTextInserter2()">Insert link</button> -->

                        <!-- Citation - Styles - Format - Cut - Copy -->
                        <!-- </b-row> -->
                        <b-row no-gutters class="justify-content-center my-2" v-if="selectedImageNode">
                            <b-col cols="12">
                                <image-properties :selectedImageProps="selectedImageProps" @updateSelectedImageProperties="updateSelectedImageProperties" />
                            </b-col>
                        </b-row>

                        <!-- <div contenteditable="true" id="textBox" v-html="content" @focus="focused = true" @blur="focused = false" @dblclick="selectedElement" class="mt-1" v-if="!showHTML"></div> -->
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
                    Créer nouvelle page
                </b-button>
            </b-row>
        </b-form>

        <!-- <div id="test" contenteditable="true">Some editable text</div>
        <input type="button" unselectable="on" @click="displayTextInserter()" value="Insert text" />
        <div id="textInserter">
            <input type="text" id="textToInsert" />
            <input type="button" @click="insertText()" value="Insert" />
        </div> -->

        <div id="textInserter2">
            <input type="text" id="textToInsert2" />
            <input type="button" @click="insertText2()" value="Insert" />
        </div>

        <images-modal @insertImage="insertImage" @closeImagesModal="showImagesModal = false" v-if="showImagesModal" />
        <documents-modal @insertDocument="insertDocument" @closeDocumentsModal="showDocumentsModal = false" v-if="showDocumentsModal" />
        <create-link-modal :selectedText="selectedText" @insertLink="insertLink" @closeLinkModal="showCreateLinkModal = false" v-if="showCreateLinkModal" />
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
    async created() {},
    async mounted() {
        if (Object.keys(this.$store.getters['sections/sections']).length < 2) {
            await this.$store.dispatch('sections/fetchSections')
        }
    },
    data() {
        return {
            form: new Form({
                name: '',
                content: ''
            }),
            showHTML: false,
            content: '<img src="/images/favicon.png" style="margin-right: 20px;" /> Lien sur cette page.',
            checked: false,
            showImagesModal: false,
            showDocumentsModal: false,
            // showImagePropertiesToast: false,
            showCreateLinkModal: false,
            selectedImageNode: null,
            selectedImageProps: {
                width: 0,
                height: 0,
                style: {}
            },
            selectedText: '',
            focused: false,
            pageSections: [],
            selRange: null
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
        toggleShowHTML() {
            if (!this.showHTML) {
                this.content = document.getElementById('textBox').innerHTML
            } else {
                this.content = document.getElementById('textBox').innerText
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
            this.selectedText = window.getSelection().toString() || 'Lien'
            this.selRange = this.saveSelection()
            this.showCreateLinkModal = true
            setTimeout(() => {
                this.$bvModal.show('createLinkModal')
            }, 300)
        },
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
        insertLink({ linkType, linkPage }) {
            console.log('insertLink', linkType, linkPage)
            let link
            if (linkType === 'external') {
                link = `<a href="${linkPage.external}">${this.selectedText}</a>`

            } else {
                link = `<router-link to="/${linkPage.internal.slug}"><span class="link">${this.selectedText}</span></router-link>`
            }
            this.restoreSelection(this.selRange)
            document.getElementById('textBox').focus()
            this.insertTextAtCursor(link)
        },
        // insertLink({ linkType, linkPage, linkText }) {
        // insertLink2(url) {
        //     // console.log('insertLink: ', linkType, linkPage, linkText)
        //     this.formatDoc('createLink', url)
        //     return
        //     if (linkType === 'external') {
        //         console.log('External link!: ', this.selectedText)
        //         // this.formatDoc('createLink', linkPage.external)
        //         document.execCommand('createLink', false, 'http://google.ch')
        //         // this.formatDoc('insertHTML', `<a href="${linkPage.external}">${this.selectedText}</a>`)
        //         // this.formatDoc('insertHTML', `<a href="${linkPage}">${linkText}</a>`)
        //     } else {
        //         console.log('Internal link!')
        //         // this.formatDoc('insertHTML', `<a href="http://google.ch">${this.selectedText}</a>`)

        //         this.formatDoc('insertHTML', `<router-link to="/${linkPage.internal.slug}"><span class="link">${this.selectedText}</span></router-link>`)
        //         // document.execCommand('insertHTML', false, `<router-link to="${linkPage.internal.slug}">${linkPage.internal.name}</router-link>`)
        //         // const link = '/contact'
        //         // const name = 'Contact'
        //         // document.execCommand('insertHTML', false, `<router-link to="${link}">${name}</router-link>`)
        //     }
        // },
        // insertDiv(value) {
        //     document.execCommand('formatBlock', false, 'div')
        //     const selectedElement = window.getSelection().focusNode.parentNode
        //     selectedElement.className = 'col-6'
        // },
        // insertInternalLink(value) {
        //     console.log('insertInternalLink')
        //     // this.toggleShowHTML()
        //     // this.content = document.getElementById('textBox').innerHTML
        //     // this.showHTML = true
        //     // document.execCommand('insertText', false, '<router-link to="/contact">Contact</router-link>')
        //     // document.execCommand('insertText', false, '<a href="/contact">Contact</a>')
        //     // this.toggleShowHTML()
        //     // document.execCommand('insertText', false, 'ghi')
        //     // document.execCommand('formatBlock', false, '<blockquote>')
        //     // document.execCommand('formatBlock', false, '<router-link>')
        //     // document.execCommand('insertHTML', false, '<a href="/contact">Contact</a>')
        //     const link = '/contact'
        //     const name = 'Contact'
        //     document.execCommand('insertHTML', false, `<router-link to="${link}">${name}</router-link>`)
        // },
        formatDoc(sCmd, sValue) {
            document.execCommand(sCmd, false, sValue)
        },

        async createNewPage() {
            try {
                console.log('createNewPage')
                this.$store.commit('loading/SET_LOADING', true)
                let content
                if (!this.showHTML) {
                    content = document.getElementById('textBox').innerHTML
                } else {
                    content = document.getElementById('textBox').innerText
                }
                // const content = document.getElementById('textBox').innerHTML
                // console.log('content: ', content)
                this.form['content'] = content
                console.log('this.form: ', this.form)
                // return
                await this.$store.dispatch('pages/createPage', this.form)
                // await this.$store.dispatch('activities/createActivity', this.form)

                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Nouvelle page créée avec succès!')
                this.$router.push('/admin/pages')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.error("Une erreur est survenue et la nouvelle page n'a pas pu être créée.")
            }
        },

        // saveSelection() {
        //     if (window.getSelection) {
        //         let sel
        //         sel = window.getSelection()
        //         if (sel.getRangeAt && sel.rangeCount) {
        //             return sel.getRangeAt(0)
        //         }
        //     } else if (document.selection && document.selection.createRange) {
        //         return document.selection.createRange()
        //     }
        //     return null
        // },

        // restoreSelection(range) {
        //     if (range) {
        //         if (window.getSelection) {
        //             let sel
        //             sel = window.getSelection()
        //             sel.removeAllRanges()
        //             sel.addRange(range)
        //         } else if (document.selection && range.select) {
        //             range.select()
        //         }
        //     }
        // },

        // insertTextAtCursor(text) {
        //     let sel, range, html
        //     if (window.getSelection) {
        //         sel = window.getSelection()
        //         if (sel.getRangeAt && sel.rangeCount) {
        //             range = sel.getRangeAt(0)
        //             range.deleteContents()
        //             var textNode = document.createTextNode(text)
        //             range.insertNode(textNode)
        //             sel.removeAllRanges()
        //             range = range.cloneRange()
        //             range.selectNode(textNode)
        //             range.collapse(false)
        //             sel.addRange(range)
        //         }
        //     } else if (document.selection && document.selection.createRange) {
        //         range = document.selection.createRange()
        //         range.pasteHTML(text)
        //         range.select()
        //     }
        // },

        // displayTextInserter() {
        //     this.selRange = this.saveSelection()
        //     document.getElementById('textInserter').style.display = 'block'
        //     document.getElementById('textToInsert').focus()
        // },

        // insertText() {
        //     var text = document.getElementById('textToInsert').value
        //     document.getElementById('textInserter').style.display = 'none'
        //     this.restoreSelection(this.selRange)
        //     document.getElementById('test').focus()
        //     this.insertTextAtCursor(text)
        // },

        // #2
        saveSelection() {
            if (window.getSelection) {
                let sel
                sel = window.getSelection()
                if (sel.getRangeAt && sel.rangeCount) {
                    return sel.getRangeAt(0)
                }
            } else if (document.selection && document.selection.createRange) {
                return document.selection.createRange()
            }
            return null
        },

        restoreSelection(range) {
            if (range) {
                if (window.getSelection) {
                    let sel
                    sel = window.getSelection()
                    sel.removeAllRanges()
                    sel.addRange(range)
                } else if (document.selection && range.select) {
                    range.select()
                }
            }
        },

        insertTextAtCursor(text) {
            let sel, range, html
            if (window.getSelection) {
                sel = window.getSelection()
                if (sel.getRangeAt && sel.rangeCount) {
                    range = sel.getRangeAt(0)
                    range.deleteContents()

                    var el = document.createElement('div')
                    el.innerHTML = text
                    var frag = document.createDocumentFragment(),
                        node,
                        lastNode
                    while ((node = el.firstChild)) {
                        lastNode = frag.appendChild(node)
                    }
                    range.insertNode(frag)

                    // Preserve the selection
                    if (lastNode) {
                        range = range.cloneRange()
                        range.setStartAfter(lastNode)
                        range.collapse(true)
                        sel.removeAllRanges()
                        sel.addRange(range)
                    }
                }
            } else if (document.selection && document.selection.createRange) {
                range = document.selection.createRange()
                range.pasteHTML(text)
                range.select()
            }
        },

        // displayTextInserter2() {
        //     this.selectedText = window.getSelection().toString()
        //     this.selRange = this.saveSelection2()
        //     // document.getElementById('textInserter2').style.display = 'block'
        //     // document.getElementById('textToInsert2').focus()
        //     this.showCreateLinkModal = true
        //     setTimeout(() => {
        //         this.$bvModal.show('createLinkModal')
        //     }, 300)
        // },

        // insertText2() {
        //     var text = document.getElementById('textToInsert2').value
        //     document.getElementById('textInserter2').style.display = 'none'
        //     this.restoreSelection2(this.selRange)
        //     document.getElementById('textBox').focus()
        //     this.insertTextAtCursor2(text)
        // }
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
::v-deep #textBox .link {
    color: #2c5cad;
}
::v-deep #textBox .link:hover {
    // cursor: pointer;
    color: #1c3c70;
    text-decoration: underline;
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
::v-deep #textInserter {
    display: none;
}
</style>

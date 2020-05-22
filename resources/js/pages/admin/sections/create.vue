<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/sections" class="navigation">
                <font-awesome-icon icon="columns" />
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
                <b-col cols="12" class="my-2">
                    <b-form-group label="Pages:">
                        <multiselect
                            tag-placeholder="Add this as new tag"
                            placeholder="Search or add a tag"
                            label="name"
                            track-by="id"
                            :options="pagesArray"
                            :multiple="true"
                            :taggable="true"
                            v-model="form.pages"
                        ></multiselect>
                            <!-- v-model="pageSections" -->
                    </b-form-group>
                </b-col>
                <b-col cols="12" class="">
                    <text-editor />
                </b-col>
            </b-row>
            <b-row class="justify-content-center my-2">
                <b-button variant="primary" :disabled="loading" type="submit">
                    <b-spinner small type="grow" v-if="loading"></b-spinner>
                    Créer nouvelle section
                </b-button>
            </b-row>
            <b-row class="justify-content-center">
                <b-alert variant="danger" dismissible :show="form.errors.any()">Erreur lors de l'envoi. Veuillez vérifier la validité des champs.</b-alert>
            </b-row>
        </b-form>
    </b-container>
</template>

<script>
import Form from 'vform'

// Multiselect
import Multiselect from 'vue-multiselect'
import TextEditor from '~/components/TextEditor'


export default {
    components: {
        Multiselect,
        TextEditor
    },
    async created() {
        if (Object.keys(this.$store.getters['pages/pages']).length < 2) {
            await this.$store.dispatch('pages/fetchPages')
        }
    },
    async mounted() {},
    data() {
        return {
            form: new Form({
                name: '',
                content: '',
                image: null
            })
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        pages() {
            return this.$store.getters['pages/pages']
        },
        pagesArray() {
            var arr = []
            Object.keys(this.pages).forEach(key => arr.push(this.pages[key]))
            return arr
        }
    },
    methods: {
        selectFile(e) {
            this.form.image = e.target.files[0]
        },
        async createNewSection() {
            try {
                this.$store.commit('loading/SET_LOADING', true)
                let content
                if (!this.showHTML) {
                    content = document.getElementById('textBox').innerHTML
                } else {
                    content = document.getElementById('textBox').innerText
                }
                this.form['content'] = content
                this.form['pages'] = this.form.pages.map(page => parseInt(page.id))
                // console.log('this.form: ', this.form)
                await this.$store.dispatch('sections/createSection', this.form)

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

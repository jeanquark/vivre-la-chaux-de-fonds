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
        <!-- sectionPages: {{ sectionPages }}<br /><br /> -->
        <!-- sections: {{ sections }}<br /><br /> -->
        <!-- pagesArray: {{ pagesArray }}<br /><br /> -->

        <b-row class="justify-content-center">
            <b-col cols="12" md="8">
                <b-form @submit.prevent="updatePage">
                    <b-row align-v="center" class="justify-content-start my-3 px-3">
                        <b-col cols="12" md="12">
                            <b-form-group label="Titre:" label-for="name">
                                <b-form-input id="name" name="name" placeholder="Titre de la section" :class="{ 'is-invalid': form.errors.has('name') }" v-model="form.name"></b-form-input>
                                <has-error :form="form" field="name" />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="12" class="my-2" v-if="form.image">
                            <p class="text-center">Image actuelle:</p>
                            <b-img center :src="`/images/${form.image}`" width="200" class=""></b-img>
                        </b-col>

                        <b-col cols="12" md="12" class="my-2">
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
                            <b-form-group label="Page(s):">
                                <multiselect
                                    tag-placeholder="Add this as new tag"
                                    placeholder="Search or add a tag"
                                    label="name"
                                    track-by="id"
                                    :options="pagesArray"
                                    :multiple="true"
                                    :taggable="true"
                                    v-model="sectionPages"
                                ></multiselect>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" class="">
                            <text-editor :formContent="section.content" />
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center my-2">
                        <b-button variant="primary" :disabled="loading" type="submit">
                            <b-spinner small type="grow" v-if="loading"></b-spinner>
                            Editer la section
                        </b-button>
                    </b-row>
                    <b-row class="justify-content-center">
                        <b-alert variant="danger" dismissible :show="form.errors.any()">Erreur lors de l'envoi. Veuillez vérifier la validité des champs.</b-alert>
                    </b-row>
                </b-form>
            </b-col>
        </b-row>
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
        if (!this.$store.getters['sections/sections'][this.$route.params.id]) {
            await this.$store.dispatch('sections/fetchSectionById', { sectionId: this.$route.params.id })
        }

        if (Object.keys(this.$store.getters['pages/pages']).length < 2) {
            await this.$store.dispatch('pages/fetchPages')
        }

        this.form.fill(this.section)
        this.sectionPages = this.section.pages
    },
    async mounted() {},
    data() {
        return {
            form: new Form({
                id: '',
                name: '',
                content: '',
                is_published: false
            }),
            sectionPages: []
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
                this.form['pages'] = this.sectionPages.map(page => parseInt(page.id))
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

</style>

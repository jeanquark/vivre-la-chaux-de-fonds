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
                    <b-form-group label="Nom:" label-for="name">
                        <b-form-input id="name" name="name" placeholder="Nom de la page" :class="{ 'is-invalid': form.errors.has('name') }" v-model="form.name"></b-form-input>
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
                            v-model="form.sections"
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
                    Créer nouvelle page
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
            })
            // pageSections: [],
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
                this.form['sections'] = this.form.sections.map(section => parseInt(section.id))
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
        }
    }
}
</script>

<style lang="scss" scoped></style>

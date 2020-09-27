<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/pages" class="navigation">
                <font-awesome-icon icon="file" />
                <span>Pages</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Editer</b-breadcrumb-item>
        </b-breadcrumb>
        <h2 class="text-center" v-if="page">Editer page "{{ page.name }}"</h2>
        <!-- page: {{ page }}<br /><br /> -->
        <!-- sections: {{ sections }}<br /><br /> -->
        <!-- form.content: {{ form.content }}<br /><br /> -->

        <b-row class="justify-content-center">
            <b-col cols="12" md="8">
                <b-form @submit.prevent="updatePage">
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
                                    v-model="pageSections"
                                ></multiselect>
                            </b-form-group>
                        </b-col>

                        

                        <b-col cols="12" class="my-2">
                            <b-form-checkbox id="is_published" name="is_published" value="1" unchecked-value="0" v-model="form.is_published">
                                Publié?
                            </b-form-checkbox>
                        </b-col>
                        <!-- <b-col cols="12" class="" v-if="form && form.content"> -->
                        <b-col cols="12" class="" v-if="page">
                            <text-editor @toggleShowHTML="toggleShowHTML" :formContent="page.content" />
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center my-2">
                        <b-button variant="primary" :disabled="loading" type="submit">
                            <b-spinner small type="grow" v-if="loading"></b-spinner>
                            Editer la page
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
        if (!this.$store.getters['pages/pages'][this.$route.params.id]) {
            await this.$store.dispatch('pages/fetchPageById', { pageId: this.$route.params.id })
        }

        if (Object.keys(this.$store.getters['sections/sections']).length < 2) {
            await this.$store.dispatch('sections/fetchSections')
        }

        console.log('this.page: ', this.page)
        console.log('this.form: ', this.form)
        this.form.fill(this.page)
        this.pageSections = this.page.sections
        // this.showContent = true
    },
    async mounted() {
        // if (!this.$store.getters['pages/pages'][this.$route.params.id]) {
        //     await this.$store.dispatch('pages/fetchPageById', { pageId: this.$route.params.id })
        // }
        // if (Object.keys(this.$store.getters['sections/sections']).length < 2) {
        //     await this.$store.dispatch('sections/fetchSections')
        // }
        // console.log('this.page: ', this.page)
        // console.log('this.form: ', this.form)
        // this.form.fill(this.page)
        // this.pageSections = this.page.sections
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
            pageSections: []
            // showContent: false
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        sponsors() {
            return this.$store.getters['sponsors/sponsors']
        },
        pages() {
            return this.$store.getters['pages/pages']
        },
        page() {
            return this.$store.getters['pages/pages'][this.$route.params.id]
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
        toggleShowHTML(value) {
            console.log('toggleShowHTML2: ', value)
            this.showHTML = value
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
                console.log('content: ', content)

                this.form['content'] = content
                this.form['sections'] = this.pageSections.map(section => parseInt(section.id))
                console.log('this.form: ', this.form)
                // return

                // const { data } = await axios.post('/api/users', this.form)
                await this.$store.dispatch('pages/updatePage', this.form)
                // console.log('data: ', data)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Page mise à jour avec succès!')
                this.$router.push('/admin/pages')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et la page n'a pas pu être mise à jour.")
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>

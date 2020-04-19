<template>
    <b-modal size="xl" id="modal-1" title="Médias Manager">
        showModal: {{ showModal }}<br /><br />
        files: {{ files }}<br /><br />

        <b-tabs content-class="mt-3">
            <b-tab title="Gallerie" active>
                <b-sidebar id="sidebar-1" title="Sidebar" shadow>
                    <div class="px-3 py-2">
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
                    </div>
                </b-sidebar>
                <b-row class="justify-content-center my-3">
                    <b-col cols="6" md="3" lg="2" v-for="(file, index) of files" :key="index" @click="selectFile(file)">
                        <!-- {{ file }} -->
                        <b-img thumbnail fluid :src="`/images/${file[0]}`" class="image"></b-img>
                        <p class="text-center">{{ formatImageName(file[0]) }}</p>
                    </b-col>
                </b-row>
                <b-row class="justify-content-center my-3">
                    <b-col cols="12" md="6" lg="4">
                        <b-form-file
                            accept="image/jpeg, image/png"
                            placeholder="Choisir un fichier..."
                            drop-placeholder="Placer le fichier ici..."
                            @change="selectFile2"
                            :class="{ 'is-invalid': form.errors.has('image') }"
                        ></b-form-file>
                        <has-error :form="form" field="image" />
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title="Upload Image">
                <b-row class="justify-content-center my-3">
                    <b-button variant="primary">Uploader un document / une image</b-button>
                </b-row>
            </b-tab>
        </b-tabs>
    </b-modal>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
export default {
    props: ['showModal'],
    async created() {},
    async mounted() {
        console.log('mounted')
        const { data } = await axios.get('/api/list-all-files')
        console.log('data: ', data)
        this.files = data.files
    },
    data() {
        return {
            form: new Form({
                image: null,
            }),
            files: []
        }
    },
    computed: {
    },
    methods: {
        selectFile2(e) {
            this.form.image = e.target.files[0]
        },
        selectFile (file) {
            console.log('selectFile: ', file)
            // this.$emit('insertFile', file)
        },
        formatImageName (file) {
            const index = file.lastIndexOf('/')
            return file.substring(index + 1)
        }
    },
    watch: {
        showModal(newVal, oldVal) {
            // watch it
            console.log('Prop changed: ', newVal, ' | was: ', oldVal)
            if (newVal) {
                this.$bvModal.show('modal-1')
            } else {
                this.$bvModal.hide('modal-1')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './resources/sass/_variables.scss';
    .image:hover {
        cursor: pointer;
        border: 2px solid $primary;
    }
</style>

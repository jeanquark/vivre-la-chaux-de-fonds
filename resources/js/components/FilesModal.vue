<template>
    <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
        showModal: {{ showModal }}<br /><br />
        files: {{ files }}
        <div v-for="(file, index) of files" :key="index" @click="selectFile(file)">
            <!-- {{ file }} -->
            <img :src="`/images/${file}`" width="100" class="image" />
        </div>
    </b-modal>
</template>

<script>
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
            files: []
        }
    },
    computed: {},
    methods: {
        selectFile (file) {
            console.log('selectFile: ', file)
            this.$emit('insertFile', file)
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
        border: 2px solid $primary;
    }
</style>

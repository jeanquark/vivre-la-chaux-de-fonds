<template>
    <b-modal size="md" id="createLinkModal" title="Créer un lien" ok-disabled no-close-on-esc no-close-on-backdrop @close="closeModal">
        <template v-slot:modal-title>
            <span class="unselectable">Lien</span>
        </template>
        <!-- url: {{ url }}<br /><br /> -->

        <b-form-group label="URL:" label-for="url">
            <b-form-input id="url" name="url" placeholder="Url du lien" v-model="url"></b-form-input>
        </b-form-group>

        <template v-slot:modal-footer>
            <b-row class="">
                <!-- <div > -->
                    <b-button variant="dark" size="md" class="float-right mr-2" @click="closeModal">
                        Fermer
                    </b-button>
                    <b-button variant="primary" size="md" class="float-right" @click="insertLink">
                        Insérer
                    </b-button>
                <!-- </div> -->
            </b-row>
        </template>
    </b-modal>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import { objectToFormData } from 'object-to-formdata'
export default {
    async created() {},
    async mounted() {
        console.log('CreateLinkModal mounted!')
    },
    data() {
        return {
            url: 'http://google.ch'
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        }
    },
    methods: {
        insertLink() {
            this.$emit('insertLink', this.url)
            this.$bvModal.hide('createLinkModal')
        },
        closeModal() {
            console.log('closeModal')
            this.$emit('closeLinkModal', false)
            this.$bvModal.hide('createLinkModal')
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
#preview {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
}

#preview img {
    max-width: 50%;
    max-height: 200px;
}
.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
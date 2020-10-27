<template>
    <b-container fluid>
        <h1 class="text-center mb-5">Se désinscrire à la newsletter</h1>
        <b-row class="justify-content-center">
            <b-col cols="12">
                <b-card>
                    <b-card-text class="">
                        {{ email_encoded }}<br />
                        {{ email_decoded }}
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Form from 'vform'
import { objectToFormData } from 'object-to-formdata'
export default {
    layout: 'frontend',
    async created() {},
    mounted() {
        console.log('this.$route.path: ', this.$route.path)
        console.log('this.$route.params: ', this.$route.params)
        console.log('this.$route.params.email_encoded: ', this.$route.params.email_encoded)
        this.email_encoded = this.$route.params.email_encoded
        this.email_decoded = atob(this.$route.params.email_encoded)
        // this.email_decoded = encodeURI('jm.kleger@web-toucan.com')
    },
    data() {
        return {
            email_encoded: '',
            email_decoded: '',
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        authUser() {
            return this.$store.getters['auth/user']
        },
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
@import './resources/sass/_variables.scss';
.primary-color {
    color: $primary;
}
.secondary-color {
    color: $secondary;
}
</style>

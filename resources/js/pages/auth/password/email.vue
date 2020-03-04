<template>
    <b-container>
        <b-row class="justify-content-center fadeInDown">
            <b-col cols="8">
                <b-card>
                    <b-card-body>
                        <b-card-title class="text-center mb-4">
                            {{ $t('reset_password') }}
                        </b-card-title>
                        <b-card-text>
                            <b-form @submit.prevent="send">
                                <b-row>
                                    <alert-success :form="form" :message="status" />

                                    <!-- Email -->
                                    <b-col cols="12" md="6" class="text-right col-form-label">
                                        <label>E-mail</label>
                                    </b-col>
                                    <b-col cols="12" md="6">
                                        <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email" />
                                        <has-error :form="form" field="email" />
                                    </b-col>
                                </b-row>

                                <b-row class="justify-content-center my-3">
                                    <!-- <b-button type="submit" variant="primary" :disabled="loading">
                                        <b-spinner small variant="primary" label="Spinning" v-if="loading"></b-spinner>
                                        {{ $t('send_password_reset_link') }}
                                    </b-button> -->
                                    <b-button type="submit" variant="primary" :disabled="loading">
                                        <b-spinner small variant="primary" label="Spinning" :disabled="loading" v-if="loading"></b-spinner>
                                        {{ $t('send_password_reset_link') }}
                                    </b-button>
                                </b-row>
                            </b-form>
                        </b-card-text>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Form from 'vform'

export default {
    middleware: 'guest',
    layout: 'frontend',

    metaInfo() {
        return { title: this.$t('reset_password') }
    },

    data: () => ({
        status: '',
        form: new Form({
            email: ''
        })
    }),
    computed: {
        loading () {
            return this.$store.getters['loading/loading']
        }
    },
    methods: {
        async send() {
            const { data } = await this.form.post('/api/password/email')

            this.status = data.status

            this.form.reset()
        }
    }
}
</script>

<style scoped>
    /* ANIMATIONS */
.fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}
</style>

<template>
    <b-container>
        <b-row class="justify-content-center fadeInDown">
            <b-col cols="12" md="8">
                <b-card>
                    <b-card-body>
                        <b-card-title class="text-center mb-4">
                            Définir un nouveau mot de passe
                        </b-card-title>
                        <b-card-text>
                            <b-form @submit.prevent="resetPassword">
                                <!-- Password -->
                                <b-row no-gutters>
                                    <alert-success :form="form" :message="status" />
                                </b-row>
                                <b-row>
                                    <b-col cols="12" md="4" class="text-right col-form-label">
                                        <label>{{ $t('password') }}</label>
                                    </b-col>
                                    <b-col cols="12" md="6">
                                        <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password" />
                                        <has-error :form="form" field="password" />
                                    </b-col>
                                </b-row>

                                <!-- Password confirmation -->
                                <b-row>
                                    <b-col cols="12" md="4" class="text-right col-form-label">
                                        <label>{{ $t('confirm_password') }}</label>
                                    </b-col>
                                    <b-col cols="12" md="6">
                                        <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('confirm_password') }" class="form-control" type="password" name="password_confirmation" />
                                        <has-error :form="form" field="password_confirmation" />
                                    </b-col>
                                </b-row>

                                <!-- Submit Button -->
                                <b-row class="justify-content-center my-3">
                                    <b-button type="submit" variant="primary" :loading="form.busy">
                                        <b-spinner small variant="primary" label="Spinning" :disabled="loading" v-if="loading"></b-spinner>
                                        {{ $t('reset_password') }}
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
    created() {
        this.form.email = this.$route.query.email
        this.form.token = this.$route.params.token
    },
    data: () => ({
        status: '',
        form: new Form({
            token: '',
            email: '',
            password: '',
            password_confirmation: ''
        })
    }),
    computed: {
        loading () {
            return this.$store.getters['loading/loading']
        }
    },
    methods: {
        async resetPassword() {
            try {
                this.$store.commit('loading/SET_LOADING', true)
                const { data } = await this.form.post('/api/password/reset')

                this.status = data.status

                this.form.reset()
                this.$store.commit('loading/SET_LOADING', false)
            } catch (error) {
                console.log('error: ', error)
                this.$store.commit('loading/SET_LOADING', false)
            }
        }
    }
}
</script>

<style scoped>
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

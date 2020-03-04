<template>
	<b-container>
		<b-row class="text-content-center fadeInDown">
			 <b-col cols="12" md="8">
                <b-card>
                    <b-card-body>
                        <b-card-title class="text-center mb-4">
                            Login
                        </b-card-title>
                        <b-card-text>
                            <b-form @submit.prevent="login">
                                <!-- Email -->
                                <b-row>
                                    <b-col cols="12" md="4" class="text-right col-form-label">
                                        <label>E-mail</label>
                                    </b-col>
                                    <b-col cols="12" md="6">
                                        <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email" />
                                        <has-error :form="form" field="email" />
                                    </b-col>
                                </b-row>

								<!-- Password -->
                                <b-row>
                                    <b-col cols="12" md="4" class="text-right col-form-label">
                                        <label>{{ $t('password') }}</label>
                                    </b-col>
                                    <b-col cols="12" md="6">
                                        <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password" />
                                        <has-error :form="form" field="password" />
                                    </b-col>
                                </b-row>

								<!-- Password confirmation -->
                                <b-row>
                                    <b-col cols="12" md="4" class="text-right col-form-label">
                                        <label>{{ $t('confirm_password') }}</label>
                                    </b-col>
                                    <b-col cols="12" md="6">
                                        <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('confirm_password') }" class="form-control" type="password" name="password_confirmation" />
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

    metaInfo() {
        return { title: this.$t('reset_password') }
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

    created() {
        this.form.email = this.$route.query.email
        this.form.token = this.$route.params.token
    },

    methods: {
        async reset() {
            const { data } = await this.form.post('/api/password/reset')

            this.status = data.status

            this.form.reset()
        }
    }
}
</script>

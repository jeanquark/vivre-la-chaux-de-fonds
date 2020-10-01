<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/users" class="navigation">
                <font-awesome-icon icon="users" />
                <span>Utilisateurs</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Editer</b-breadcrumb-item>
        </b-breadcrumb>

        <h1 class="text-center" v-if="user">Editer utilisateur <span class="primary-color">{{ user.firstname }} {{ user.lastname }}</span></h1>

		<!-- user: {{ user }}<br /><br /> -->

        <b-row class="justify-content-center">
            <b-col cols="12" md="8" lg="6">
                <b-form @submit.prevent="updateUser">
                    <b-row align-v="center" class="justify-content-start my-3 px-3">
                        <b-col cols="12">
                            <b-form-group label="Prénom:" label-for="firstname">
                                <b-form-input id="firstname" type="text" :class="{ 'is-invalid': form.errors.has('firstname') }" v-model="form.firstname"></b-form-input>
                                <has-error :form="form" field="firstname" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12">
                            <b-form-group label="Nom:" label-for="lastname">
                                <b-form-input id="lastname" type="text" :class="{ 'is-invalid': form.errors.has('lastname') }" v-model="form.lastname"></b-form-input>
                                <has-error :form="form" field="lastname" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12">
                            <b-form-group label="Nouveau mot de passe:" label-for="newPassword">
                                <b-form-input id="newPassword" type="password" :class="{ 'is-invalid': form.errors.has('new_password') }" v-model="form.new_password"></b-form-input>
                                <has-error :form="form" field="new_password" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12">
                            <b-form-group label="Confirmer nouveau mot de passe:" label-for="newPasswordConfirmation">
                                <b-form-input
                                    id="newPasswordConfirmation"
									type="password"
                                    :class="{ 'is-invalid': form.errors.has('new_password_confirmation') }"
                                    v-model="form.new_password_confirmation"
                                ></b-form-input>
                                <has-error :form="form" field="new_password_confirmation" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12">
                            <b-form-group label="Mot de passe actuel:" label-for="currentPassword">
                                <b-form-input type="password" id="currentPassword" :class="{ 'is-invalid': form.errors.has('currentPassword') }" v-model="form.current_password"></b-form-input>
                                <has-error :form="form" field="current_password" />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center my-2">
                        <b-button variant="primary" :disabled="loading" type="submit">
                            <b-spinner small type="grow" v-if="loading"></b-spinner>
                            Mettre à jour
                        </b-button>
                    </b-row>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Form from 'vform'
export default {
    layout: 'backend',
    created() {},
    async mounted() {
        // const userId = parseInt(this.$route.params.id)
		// console.log('userId: ', userId)
		if (!this.user) {
            // await this.$store.dispatch('users/fetchUserById', { userId: this.$route.params.id })
            await this.$store.dispatch('users/fetchUsers')
        }
        this.form.fill(this.user)
    },
    data() {
        return {
            form: new Form({
                firstname: '',
                lastname: '',
                current_password: '',
                new_password: '',
                new_password_confirmation: ''
            })
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
		},
		user() {
			return this.$store.getters['users/users'][this.$route.params.id]
        },
    },
    methods: {
        async updateUser() {
            try {
				this.form.user_id = this.user.id
				console.log('this.form: ', this.form)
				// return
                this.$store.commit('loading/SET_LOADING', true)
                // const { data } = await this.form.post('/api/users')
				// console.log('data: ', data)
                // await this.$store.dispatch('users/updateUser', { user: this.user, newPassword: this.form })
                await this.$store.dispatch('users/updateUser', this.form)
                this.$store.commit('loading/SET_LOADING', false)
                this.$noty.success('Utilisateur modifié avec succès!')
                this.$router.push('/admin/users')
            } catch (error) {
                this.$store.commit('loading/SET_LOADING', false)
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et l'utillisateur n'a pas pu être modifié.")
            }
        }
    }
}
</script>

<style scoped></style>

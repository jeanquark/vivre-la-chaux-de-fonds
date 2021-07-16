<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/users" class="navigation">
                <font-awesome-icon icon="users" />
                <span>Utilisateurs</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Créer</b-breadcrumb-item>
        </b-breadcrumb>

        <h1 class="text-center">Créer un nouvel utilisateur</h1>

        <b-row class="justify-content-center">
            <b-col cols="12" md="8" lg="6">
                <b-form @submit.prevent="createUser">
                    <b-row align-v="center" class="justify-content-start my-3 px-3">
                        <b-col cols="12" md="6">
                            <b-form-group label="Prénom:" label-for="newUserFirstname">
                                <b-form-input id="newUserFirstname" placeholder="Prénom" :class="{ 'is-invalid': form.errors.has('firstname') }" v-model="form.firstname"></b-form-input>
                                <has-error :form="form" field="firstname" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <b-form-group label="Nom:" label-for="newUserLastname">
                                <b-form-input id="newUserLastname" placeholder="Nom" :class="{ 'is-invalid': form.errors.has('lastname') }" v-model="form.lastname"></b-form-input>
								<has-error :form="form" field="lastname" />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <b-form-group  label="E-mail:" label-for="newUserEmail">
                                <b-form-input type="email" id="newUserEmail" placeholder="E-mail" :class="{ 'is-invalid': form.errors.has('email') }" v-model="form.email"></b-form-input>
								<has-error :form="form" field="email" />
                            </b-form-group>
                        </b-col>
                    </b-row>
					<b-row align-v="center" class="justify-content-start px-3">
                        <b-col cols="12">
                            <b-form-group  label="Mot de passe:" label-for="newUserPassword">
                                <b-form-input type="password" id="newUserPassword" placeholder="Mot de passe" :class="{ 'is-invalid': form.errors.has('password') }" v-model="form.password"></b-form-input>
								<has-error :form="form" field="password" />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12">
                            <b-form-group  label="Confirmation mot de passe:" label-for="newUserPasswordConfirmation">
                                <b-form-input type="password" id="newUserPasswordConfirmation" placeholder="Confirmation mot de passe" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" v-model="form.password_confirmation"></b-form-input>
								<has-error :form="form" field="password_confirmation" />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-center my-2">
                        <b-button variant="primary" :disabled="loading" type="submit">
                            <b-spinner small type="grow" v-if="loading"></b-spinner>
                            Créer nouvel utilisateur
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
    async created() {},
    mounted() {},
    data() {
        return {
            form: new Form({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                password_confirmation: ''
            })
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        }
    },
    methods: {
        async createUser() {
            try {
                console.log('this.form: ', this.form)
				this.$store.commit('loading/SET_LOADING', true)
				// const { data } = await this.form.post('/api/users')
				// console.log('data: ', data)
                await this.$store.dispatch('users/createUser', this.form)
				this.$store.commit('loading/SET_LOADING', false)
				this.$noty.success('Nouvel utilisateur créé avec succès!')
				this.$router.push('/admin/users')
            } catch (error) {
				this.$store.commit('loading/SET_LOADING', false)
				console.log('error: ', error)
				this.$noty.error("Une erreur est survenue et l'utillisateur n'a pas pu être créé.")
            }
        }
    }
}
</script>

<style scoped></style>

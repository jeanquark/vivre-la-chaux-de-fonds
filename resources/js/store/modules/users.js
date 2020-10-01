import Vue from 'vue'
import axios from 'axios'
import { objectToFormData } from 'object-to-formdata'

// state
export const state = {
    users: {},
    user: {}
}

// getters
export const getters = {
    users: state => state.users,
    user: state => state.user
}

// mutations
export const mutations = {
    // SET_USERS (state, payload) {
    //     console.log('Set users mutation: ', payload)
    //     state.users = payload
    // },
    SET_USERS (state, payload) {
        console.log('SET_USERS mutation', payload)
        payload.forEach(user => {
            state.users = Object.assign({}, state.users, {
                [user.id]: user
            })
        })
    },
    SET_USER (state, payload) {
        // console.log('Set user mutation: ', payload)
        // state.user = payload
        console.log('SET_USER mutation', payload)
        state.users = Object.assign({}, state.users, {
            [payload.id]: payload
        })
    },
    // ADD_USER (state, payload) {
    //     console.log('ADD_USER mutation: ', payload)
    //     state.users.push(payload)
    // },
    UPDATE_USER (state, payload) {
        // const userId = parseInt(payload.id)
        // const index = state.users.findIndex(user => user.id === userId)
        // Vue.set(state.users, index, payload)

        state.users = Object.assign({}, state.users, {
            [payload.id]: payload
        })
    },
    DELETE_USER (state, payload) {
        console.log('DELETE_USER: ', payload)
        // const userId = parseInt(payload)
        // console.log('userId: ', userId)
        // const index = state.users.findIndex(user => user.id === userId)
        // console.log('index: ', index)
        // console.log('state.users: ', state.users)
        // state.users.splice(index, 1)

        const { userId } = payload
        console.log('userId: ', userId)
        Vue.delete(state.users, userId)
    }
}

// actions
export const actions = {
    async fetchUsers ({ commit }) {
        try {
            console.log('fetchUsers action')
            const { data } = await axios.get('/api/users')
            console.log('data: ', data)
            commit('SET_USERS', data)
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async fetchUserById ({ commit }, payload) {
        try {
            console.log('fetchUser action: ', payload)
            const { userId } = payload
            const { data } = await axios.get(`/api/users/${userId}`)
            console.log('data: ', data)
            commit('SET_USER', data.user)
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async createUser ({ commit }, form) {
        try {
            console.log('payload: ', form)

            const { data } = await form.post('/api/users')
            console.log('data: ', data)
            commit('SET_USER', data.newUser)

            // const config = {
            //     headers: { 'content-type': 'multipart/form-data' }
            // }

            // let formData = new FormData();
            // formData.append('image', payload.image);
            // formData.append('form', JSON.stringify(payload.user))
            // console.log('formData: ', formData)

            // const { data } = await axios.post('/api/users', formData, config)
            // console.log('data: ', data)
            // commit('ADD_USER', data.newUser)
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    },
    async updateUser ({ commit }, form) {
        try {
            console.log('updateUser: ', form)
            // const { data } = await axios.put(`/api/users/${payload.user.id}`, payload)
            const { data } = await form.submit('post', `/api/users/${form.user_id}`, {
                transformRequest: [
                    function(data, headers) {
                        data['_method'] = 'PUT'
                        return objectToFormData(data)
                    }
                ]
            })

            console.log('data: ', data)
            commit('UPDATE_USER', data.updatedUser)
        } catch (error) {
            console.log('error: ', error)
            throw error
        }
    },
    // async updateUser2 ({ commit }, payload) {
    //     try {
    //         const config = {
    //             headers: { 'content-type': 'multipart/form-data' }
    //         }
    //         console.log('payload: ', payload)
    //         let formData = new FormData();
    //         formData.append('new_image', payload.new_image)
    //         // console.log('this.user: ', this.user)
    //         formData.append('form', JSON.stringify(payload.user))
    //         console.log('formData: ', formData)

    //         formData.append('_method', 'PUT')

    //         const { data } = await axios.post(`/api/users/${payload.user.id}`, formData, config)
    //         console.log('data: ', data)
    //         commit('UPDATE_USER', data.user)
    //     } catch (error) {
    //         console.log('error from vuex: ', error)
    //         throw error
    //     }
    // },
    async deleteUser ({ commit }, payload) {
        try {
            const { userId } = payload 
            console.log('userId: ', userId)
            const user = await axios.delete(`/api/users/${userId}`)
            console.log('user: ', user)
            commit('DELETE_USER', { userId })
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    }
}

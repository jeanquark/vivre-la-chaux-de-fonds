import axios from 'axios'
// import * as types from '../mutation-types'

// state
export const state = {
    users: []
}

// getters
export const getters = {
    users: state => state.users
}

// mutations
export const mutations = {
    setUsers (state, payload) {
        console.log('Set users mutation: ', payload)
        state.users = payload
    },
    addUser (state, payload) {
        console.log('Add user mutation: ', payload)
        state.users.push(payload)
    }
}

// actions
export const actions = {
    async fetchUsers ({ commit }) {
        try {
            console.log('fetchUsers action')
            const { data } = await axios.get('/api/users')
            console.log('data: ', data)
            commit('setUsers', data)
        } catch (error) {
            console.log('vuex error: ', error)
        }
    }
}

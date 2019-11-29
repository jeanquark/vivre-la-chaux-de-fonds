import axios from 'axios'
// import * as types from '../mutation-types'

// state
export const state = {
    sponsors: []
}

// getters
export const getters = {
    sponsors: state => state.sponsors
}

// mutations
export const mutations = {
    setSponsors (state, payload) {
        console.log('Set activities mutation: ', payload)
        state.sponsors = payload
    },
    addSponsor (state, payload) {
        console.log('Add activity mutation: ', payload)
        state.sponsors.push(payload)
    }
}

// actions
export const actions = {
    async fetchSponsors ({ commit }) {
        try {
            console.log('fetchSponsors action')
            const { data } = await axios.get('/api/sponsors')
            console.log('data: ', data)
            commit('setSponsors', data)
        } catch (error) {
            console.log('vuex error: ', error)
        }
    }
}

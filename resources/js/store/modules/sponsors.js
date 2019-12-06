import axios from 'axios'
// import * as types from '../mutation-types'

// state
export const state = {
    sponsors: [],
    sponsor: {}
}

// getters
export const getters = {
    sponsors: state => state.sponsors,
    sponsor: state => state.sponsor
}

// mutations
export const mutations = {
    setSponsors (state, payload) {
        console.log('setSponsors mutation: ', payload)
        state.sponsors = payload
    },
    setSponsor (state, payload) {
        console.log('setSponsor mutation: ', payload)
        state.sponsor = payload
    },
    addSponsor (state, payload) {
        console.log('Add sponsor mutation: ', payload)
        state.sponsors.push(payload)
    },
    updateSponsor (state, payload) {
        console.log('Update sponsor mutation: ', payload)
        const sponsorId = parseInt(payload.id)
        const index = state.sponsors.findIndex(sponsor => sponsor.id === sponsorId)
        console.log('index: ', index)
        state.sponsors[index] = payload
    },
    deleteSponsor (state, payload) {
        const sponsorId = parseInt(payload)
        console.log('sponsorId: ', sponsorId)
        const index = state.sponsors.findIndex(sponsor => sponsor.id === sponsorId)
        console.log('index: ', index)
        console.log('state.sponsors: ', state.sponsors)
        state.sponsors.splice(index, 1)
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
            throw error
        }
    },
    async fetchSponsor ({ commit }, payload) {
        try {
            console.log('fetchSponsor action: ', payload)
            const { sponsorId } = payload
            const { data } = await axios.get(`/api/sponsors/${sponsorId}`)
            console.log('data: ', data)
            commit('setSponsor', data.sponsor)
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async createSponsor ({ commit }, payload) {
        try {
            console.log('payload: ', payload)
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            const { formData } = payload
            // console.log('formData: ', formData)

            const { data } = await axios.post('/api/sponsors', formData, config)
            console.log('data: ', data)
            commit('addSponsor', data.sponsor)
        } catch (error) {
            console.log('error')
            throw error
        }
    },
    async updateSponsor ({ commit }, payload) {
        try {
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }

            let formData = new FormData();
            console.log('payload: ', payload)

            formData.append('new_image', payload.new_image)
            formData.append('form', JSON.stringify(payload.sponsor))
            console.log('formData: ', formData)

            formData.append('_method', 'PUT')

            const { data } = await axios.post(`/api/sponsors/${payload.sponsor.id}`, formData, config)
            console.log('data: ', data)
            commit('updateSponsor', data.sponsor)
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    },
    async deleteSponsor ({ commit }, payload) {
        try {
            const { sponsorId } = payload 
            console.log('sponsorId: ', sponsorId)
            const sponsor = await axios.delete(`/api/sponsors/${sponsorId}`)
            console.log('sponsor: ', sponsor)
            commit('deleteSponsor', sponsorId)
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    }
}

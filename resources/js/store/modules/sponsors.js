import axios from 'axios'
// import * as types from '../mutation-types'
import { objectToFormData } from 'object-to-formdata'

// state
export const state = {
    // sponsors: [],
    sponsors: {},
    sponsor: {}
}

// getters
export const getters = {
    sponsors: state => state.sponsors,
    sponsor: state => state.sponsor
}

// mutations
export const mutations = {
    SET_SPONSORS (state, payload) {
        // console.log('setSponsors mutation: ', payload)
        // state.sponsors = payload
        console.log('SET_SPONSORS mutation', payload)
        // state.activities = payload
        payload.forEach(sponsor => {
            state.sponsors = Object.assign({}, state.sponsors, {
                [sponsor.id]: sponsor
            })
        })
    },
    SET_SPONSOR (state, payload) {
        // console.log('setSponsor mutation: ', payload)
        // state.sponsor = payload
        console.log('SET_SPONSOR mutation', payload)
        state.sponsors = Object.assign({}, state.sponsors, {
            [payload.id]: payload
        })
    },
    // addSponsor (state, payload) {
    //     console.log('Add sponsor mutation: ', payload)
    //     state.sponsors.push(payload)
    // },
    UPDATE_SPONSOR (state, payload) {
        // console.log('Update sponsor mutation: ', payload)
        // const sponsorId = parseInt(payload.id)
        // const index = state.sponsors.findIndex(sponsor => sponsor.id === sponsorId)
        // console.log('index: ', index)
        // state.sponsors[index] = payload
        console.log('UPDATE_SPONSOR mutation: ', payload)
        state.sponsors = Object.assign({}, state.sponsors, {
            [payload.id]: payload
        })
    },
    DELETE_SPONSOR (state, payload) {
        // const sponsorId = parseInt(payload)
        // console.log('sponsorId: ', sponsorId)
        // const index = state.sponsors.findIndex(sponsor => sponsor.id === sponsorId)
        // console.log('index: ', index)
        // console.log('state.sponsors: ', state.sponsors)
        // state.sponsors.splice(index, 1)
        console.log('DELETE_SPONSOR: ', payload)
        const { sponsorId } = payload
        console.log('sponsorId: ', sponsorId)
        Vue.set(state.sponsors, sponsorId, null)
    }
}

// actions
export const actions = {
    async fetchSponsors ({ commit }) {
        try {
            console.log('fetchSponsors action')
            const { data } = await axios.get('/api/sponsors')
            console.log('data: ', data)
            commit('SET_SPONSORS', data)
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async fetchSponsorById ({ commit }, payload) {
        try {
            console.log('fetchSponsorById action: ', payload)
            const { sponsorId } = payload
            const { data } = await axios.get(`/api/sponsors/${sponsorId}`)
            console.log('data: ', data)
            commit('SET_SPONSOR', data.sponsor)
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async fetchSponsorBySlug({ commit }, payload) {
        try {
            console.log('fetchSponsorBySlug action: ', payload)
            const { sponsorSlug } = payload
            const { data } = await axios.get(`/api/sponsors/slug/${sponsorSlug}`)
            console.log('data: ', data)
            commit('SET_SPONSOR', data.sponsor)
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
            commit('SET_SPONSOR', data.sponsor)
        } catch (error) {
            console.log('error')
            throw error
        }
    },
    async updateSponsor ({ commit }, form) {
        try {
            console.log('updateSponsor form: ', form)
            // const config = {
            //     headers: { 'content-type': 'multipart/form-data' }
            // }

            // let formData = new FormData();
            // console.log('payload: ', payload)

            // formData.append('new_image', payload.new_image)
            // formData.append('form', JSON.stringify(payload.sponsor))
            // console.log('formData: ', formData)

            // formData.append('_method', 'PUT')

            // const { data } = await axios.post(`/api/sponsors/${form.id}`, formData, config)
            const { data } = await form.submit('post', `/api/sponsors/${form.id}`, {
                transformRequest: [
                    function(data, headers) {
                        data['_method'] = 'PUT'
                        return objectToFormData(data)
                    }
                ]
            })
            console.log('data: ', data)
            commit('UPDATE_SPONSOR', data.updatedSponsor)
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
            commit('DELETE_SPONSOR', sponsorId)
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    }
}

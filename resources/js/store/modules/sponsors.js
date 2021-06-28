import Vue from 'vue'
import axios from 'axios'
import { objectToFormData } from 'object-to-formdata'

// state
export const state = {
    sponsors: {}
}

// getters
export const getters = {
    sponsors: state => state.sponsors
}

// mutations
export const mutations = {
    SET_SPONSORS(state, payload) {
        console.log('SET_SPONSORS mutation', payload)
        payload.forEach(sponsor => {
            state.sponsors = Object.assign({}, state.sponsors, {
                [sponsor.id]: sponsor
            })
        })
    },
    SET_SPONSOR(state, payload) {
        console.log('SET_SPONSOR mutation', payload)
        state.sponsors = Object.assign({}, state.sponsors, {
            [payload.id]: payload
        })
    },
    UPDATE_SPONSOR(state, payload) {
        console.log('UPDATE_SPONSOR mutation: ', payload)
        state.sponsors = Object.assign({}, state.sponsors, {
            [payload.id]: payload
        })
    },
    DELETE_SPONSOR(state, payload) {
        console.log('DELETE_SPONSOR: ', payload)
        const { sponsorId } = payload
        console.log('sponsorId: ', sponsorId)
        Vue.delete(state.sponsors, sponsorId)
    }
}

// actions
export const actions = {
    async fetchSponsors({ commit }, payload) {
        try {
            console.log('fetchSponsors: ', payload)
            let queryString = ''
            if (payload) {
                queryString = Object.keys(payload).map(key => key + '=' + payload[key]).join('&');

            }
            console.log('queryString: ', queryString)

            const { data } = await axios.get(`/api/sponsors?${queryString}`)

            // return
            // const { data } = await axios.get(`/api/sponsors`)
            // const { data } = await axios.get(`/api/sponsors?is_active=true&slug=axa&id=2`)
            // const { data } = await axios.get(`/api/sponsors?is_active=true&slug=axa`)
            // const { data } = await axios.get(`/api/sponsors?is_active=true`)
            console.log('data: ', data)
            commit('SET_SPONSORS', data)
            
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async fetchSponsorById({ commit }, payload) {
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
    async createSponsor({ commit }, form) {
        try {
            console.log('createSponsor action: ', form)
            const { data } = await form.submit('post', `/api/sponsors`, {
                transformRequest: [
                    function(data, headers) {
                        return objectToFormData(data)
                    }
                ]
            })
            console.log('data: ', data)
            commit('SET_SPONSOR', data.newSponsor)
        } catch (error) {
            console.log('error: ', error)
            throw error
        }
    },
    async updateSponsor({ commit, dispatch }, form) {
        try {
            console.log('[VUEX sponsors] @updateSponsor form: ', form)
            const { data } = await form.submit('post', `/api/sponsors/${form.id}`, {
                transformRequest: [
                    function(data, headers) {
                        data['_method'] = 'PUT'
                        return objectToFormData(data)
                    }
                ]
            })
            console.log('data3: ', data)
            commit('UPDATE_SPONSOR', data.updatedSponsor)
            dispatch('activities/fetchActivities', {}, { root: true })
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    },
    async deleteSponsor({ commit, dispatch }, payload) {
        try {
            const { sponsorId } = payload
            console.log('sponsorId: ', sponsorId)
            const sponsor = await axios.delete(`/api/sponsors/${sponsorId}`)
            console.log('sponsor: ', sponsor)
            commit('DELETE_SPONSOR', { sponsorId })
            dispatch('activities/fetchActivities', {}, { root: true })
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    }
}

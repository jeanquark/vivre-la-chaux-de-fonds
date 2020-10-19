import Vue from 'vue'
import axios from 'axios'
import { objectToFormData } from 'object-to-formdata'

// state
export const state = {
    newsletters: {}
}

// getters
export const getters = {
    newsletters: state => state.newsletters
}

// mutations
export const mutations = {
    SET_NEWSLETTERS(state, payload) {
        console.log('SET_NEWSLETTERS mutation', payload)
        payload.forEach(newsletter => {
            state.newsletters = Object.assign({}, state.newsletters, {
                [newsletter.id]: newsletter
            })
        })
    },
    SET_NEWSLETTER(state, payload) {
        console.log('SET_NEWSLETTER mutation', payload)
        state.newsletters = Object.assign({}, state.newsletters, {
            [payload.id]: payload
        })
    },
    UPDATE_NEWSLETTER(state, payload) {
        console.log('UPDATE_NEWSLETTER mutation: ', payload)
        state.newsletters = Object.assign({}, state.newsletters, {
            [payload.id]: payload
        })
    },
    DELETE_NEWSLETTER(state, payload) {
        console.log('DELETE_NEWSLETTER mutation: ', payload)
        const { newsletterId } = parseInt(payload)
        console.log('newsletterId: ', newsletterId)
        Vue.delete(state.newsletters, newsletterId)
    }
}

// actions
export const actions = {
    async fetchNewsletters({ commit }, payload) {
        try {
            console.log('fetchNewsletters vuex action')
            const { data } = await axios.get(`/api/newsletters`)
            console.log('data: ', data)
            commit('SET_NEWSLETTERS', data)
        } catch (error) {
            console.log('error: ', error)
            throw error
        }
    },
    async fetchNewsletterById({ commit }, payload) {
        try {
            console.log('fetchNewsletterById action: ', payload)
            const { newsletterId } = payload
            const { data } = await axios.get(`/api/newsletters/${newsletterId}`)
            console.log('data2: ', data)
            commit('SET_NEWSLETTER', data.newsletter)
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async fetchNewsletterBySlug({ commit }, payload) {
        try {
            console.log('fetchNewsletterBySlug action: ', payload)
            const { newsletterSlug } = payload
            const { data } = await axios.get(`/api/newsletters/slug/${newsletterSlug}`)
            console.log('data: ', data)
            commit('SET_NEWSLETTER', data.newsletter)
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async createNewsletter({ commit }, form) {
        try {
            const { data } = await form.submit('post', '/api/newsletters', {
                transformRequest: [
                    function(data, headers) {
                        return objectToFormData(data)
                    }
                ]
            })
            console.log('data: ', data)
            commit('SET_NEWSLETTER', data.newNewsletter)
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    },
    async updateNewsletter({ commit, dispatch }, form) {
        try {
            console.log('form2: ', form)
            const { data } = await form.submit('post', `/api/newsletters/${form.id}`, {
                transformRequest: [
                    function(data, headers) {
                        data['_method'] = 'PUT'
                        return objectToFormData(data)
                    }
                ]
            })
            console.log('data from vuex updateNewsletter: ', data)
            commit('UPDATE_NEWSLETTER', data.updatedNewsletter)
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    },
    async deleteNewsletter({ commit, dispatch }, payload) {
        try {
            const { newsletterId } = payload
            console.log('newsletterId: ', newsletterId)
            const newsletter = await axios.delete(`/api/newsletters/${newsletterId}`)
            console.log('newsletter: ', newsletter)
            commit('DELETE_NEWSLETTER', { newsletterId })
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    }
}

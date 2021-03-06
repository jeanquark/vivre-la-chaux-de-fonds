import Vue from 'vue'
import axios from 'axios'
import { objectToFormData } from 'object-to-formdata'

// state
export const state = {
    newsletter: {},
    newsletters: {}
}

// getters
export const getters = {
    newsletter: state => state.newsletter,
    newsletters: state => state.newsletters
}

// mutations
export const mutations = {
    SET_NEWSLETTER(state, payload) {
        console.log('SET_NEWSLETTER mutation', payload)
        state.newsletter = payload
    },
    SET_NEWSLETTERS(state, payload) {
        console.log('SET_NEWSLETTERS mutation', payload)
        payload.forEach(newsletter => {
            state.newsletters = Object.assign({}, state.newsletters, {
                [newsletter.id]: newsletter
            })
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
        const { newsletterId } = payload
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
    async fetchNewsletterByEmail({ commit }, payload) {
        try {
            console.log('fetchNewsletterByEmail action: ', payload)
            const { newsletterEmail } = payload
            const { data } = await axios.post(`/api/newsletters/emails`, { newsletterEmail })
            console.log('data: ', data)
            commit('SET_NEWSLETTER', data.newsletter)
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async sendNewsletter({ commit }, payload) {
        try {
            console.log('payload: ', payload)
            const { data } = await axios.post('/api/newsletters', payload)
            console.log('data: ', data)
        } catch (error) {
            console.log('error: ', error)
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
    async deleteSubscription({ commit }, payload) {
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
    },
    async deleteSubscriptionByEmail({ commit }, payload) {
        try {
            const { newsletterEncodedEmail } = payload
            console.log('newsletterEncodedEmail: ', newsletterEncodedEmail)
            const { data } = await axios.delete(`/api/newsletters/emails/${newsletterEncodedEmail}`)
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    },
}

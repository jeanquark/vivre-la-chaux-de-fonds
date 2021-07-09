import Vue from 'vue'
import axios from 'axios'
// import * as types from '../mutation-types'
import { objectToFormData } from 'object-to-formdata'

// state
export const state = {
    activities: {}
}

// getters
export const getters = {
    activities: state => state.activities,
}

// mutations
export const mutations = {
    SET_ACTIVITIES (state, payload) {
        console.log('SET_ACTIVITIES mutation', payload)
        payload.forEach(activity => {
            state.activities = Object.assign({}, state.activities, {
                [activity.id]: activity
            })
        })
    },
    SET_ACTIVITY (state, payload) {
        console.log('SET_ACTIVITY mutation', payload)
        state.activities = Object.assign({}, state.activities, {
            [payload.id]: payload
        })
    },
    UPDATE_ACTIVITY(state, payload) {
        console.log('UPDATE_ACTIVITY mutation: ', payload)
        state.activities = Object.assign({}, state.activities, {
            [payload.id]: payload
        })
    },
    DELETE_ACTIVITY(state, payload) {
        console.log('DELETE_ACTIVITY mutation: ', payload)
        const { activityId } = payload
        console.log('activityId: ', activityId)
        Vue.delete(state.activities, activityId)
    }
}

// actions
export const actions = {
    // async fetchActivities({ commit }) {
    async fetchActivities({ commit }, payload) {
        try {
            console.log('fetchActivities: ', payload)
            let queryString = ''
            if (payload) {
                queryString = Object.keys(payload).map(key => key + '=' + payload[key]).join('&');

            }
            console.log('queryString: ', queryString)

            const { data } = await axios.get(`/api/activities?${queryString}`)

            // return
            // const { data } = await axios.get(`/api/sponsors`)
            // const { data } = await axios.get(`/api/sponsors?is_active=true&slug=axa&id=2`)
            // const { data } = await axios.get(`/api/sponsors?is_active=true&slug=axa`)
            // const { data } = await axios.get(`/api/sponsors?is_active=true`)
            console.log('data: ', data)
            commit('SET_ACTIVITIES', data)


            // console.log('fetchActivities')
            // const { data } = await axios.get('/api/activities')
            // console.log('data: ', data)
            // commit('SET_ACTIVITIES', data)
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async fetchActivityById({ commit }, payload) {
        try {
            console.log('fetchActivityById action: ', payload)
            const { activityId } = payload
            const { data } = await axios.get(`/api/activities/${activityId}`)
            console.log('data2: ', data)
            commit('SET_ACTIVITY', data.activity)
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async fetchActivityBySlug({ commit }, payload) {
        try {
            console.log('fetchActivityBySlug action: ', payload)
            const { activitySlug } = payload
            const { data } = await axios.get(`/api/activities/slug/${activitySlug}`)
            console.log('data: ', data)
            commit('SET_ACTIVITY', data.activity)
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async createActivity({ commit }, form) {
        try {
            const { data } = await form.submit('post', '/api/activities', {
                transformRequest: [
                    function(data, headers) {
                        return objectToFormData(data)
                    }
                ]
            })
            console.log('data: ', data)
            commit('SET_ACTIVITY', data.newActivity)
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    },
    async updateActivity({ commit, dispatch }, form) {
        try {
            console.log('form2: ', form)
            const { data } = await form.submit('post', `/api/activities/${form.id}`, {
                transformRequest: [
                    function(data, headers) {
                        data['_method'] = 'PUT'
                        return objectToFormData(data)
                    }
                ]
            })
            console.log('data from vuex updateActivity: ', data)
            commit('UPDATE_ACTIVITY', data.updatedActivity)
            dispatch('sponsors/fetchSponsors', {}, { root: true })
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    },
    async deleteActivity({ commit, dispatch }, payload) {
        try {
            const { activityId } = payload
            console.log('activityId: ', activityId)
            const activity = await axios.delete(`/api/activities/${activityId}`)
            console.log('activity: ', activity)
            commit('DELETE_ACTIVITY', { activityId })
            dispatch('sponsors/fetchSponsors', {}, { root: true })
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    }
}

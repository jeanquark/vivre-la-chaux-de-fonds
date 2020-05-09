import Vue from 'vue'
import axios from 'axios'
// import * as types from '../mutation-types'
import { objectToFormData } from 'object-to-formdata'

// state
export const state = {
    // activities: [],
    activities: {}
    // activity: {}
}

// getters
export const getters = {
    activities: state => state.activities,
    // activity: state => state.activity
}

// mutations
export const mutations = {
    SET_ACTIVITIES (state, payload) {
        console.log('SET_ACTIVITIES mutation', payload)
        // state.activities = payload
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
    // setActivities(state, payload) {
    //     console.log('Set activities mutation: ', payload)
    //     state.activities = payload
    // },
    // setActivity(state, payload) {
    //     console.log('Set activity mutation: ', payload)
    //     state.activity = payload
    // },
    // ADD_ACTIVITY(state, payload) {
    //     console.log('Add activity mutation: ', payload)
    //     state.activities.push(payload)
    // },
    UPDATE_ACTIVITY(state, payload) {
        console.log('UPDATE_ACTIVITY mutation: ', payload)
        state.activities = Object.assign({}, state.activities, {
            [payload.id]: payload
        })

        // const activityId = parseInt(payload.id)
        // const index = state.activities.findIndex(activity => activity.id === activityId)
        // console.log('index: ', index)
        // state.activities[index] = payload
    },
    DELETE_ACTIVITY(state, payload) {
        // const activityId = parseInt(payload)
        // console.log('activityId: ', activityId)
        // const index = state.activities.findIndex(activity => activity.id === activityId)
        // console.log('index: ', index)
        // console.log('state.activities: ', state.activities)
        // state.activities.splice(index, 1)
        console.log('DELETE_ACTIVITY mutation: ', payload)
        const { activityId } = payload
        console.log('activityId: ', activityId)
        Vue.set(state.activities, activityId, null)
    }
}

// actions
export const actions = {
    async fetchActivities({ commit }) {
        try {
            console.log('fetchActivities action')
            const { data } = await axios.get('/api/activities')
            console.log('data: ', data)
            commit('SET_ACTIVITIES', data)
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
            console.log('data: ', data)
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
            // const { data } = await form.post('/api/activities', {
                transformRequest: [
                    function(data, headers) {
                        return objectToFormData(data)
                    }
                ]
            })
            console.log('data: ', data)
            commit('ADD_ACTIVITY', data.newActivity)
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    },
    async updateActivity({ commit, dispatch }, form) {
        try {
            console.log('form2: ', form)
            // const { data } = await form.post(`/api/activities/${form.id}`, {
            const { data } = await form.submit('post', `/api/activities/${form.id}`, {
            // const { data } = await form.submit('put', `/api/activities/${form.id}`, {
                transformRequest: [
                    function(data, headers) {
                        data['_method'] = 'PUT'
                        return objectToFormData(data)
                    }
                ]
            })
            console.log('data: ', data)
            commit('UPDATE_ACTIVITY', data.updatedActivity)
            dispatch('sponsors/fetchSponsors', {}, { root: true })
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    },
    async deleteActivity({ commit }, payload) {
        try {
            const { activityId } = payload
            console.log('activityId: ', activityId)
            const activity = await axios.delete(`/api/activities/${activityId}`)
            console.log('activity: ', activity)
            commit('DELETE_ACTIVITY', activityId)
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    }
}

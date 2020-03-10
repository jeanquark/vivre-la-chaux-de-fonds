import axios from 'axios'
// import * as types from '../mutation-types'
import { objectToFormData } from 'object-to-formdata'

// state
export const state = {
    activities: [],
    activity: {}
}

// getters
export const getters = {
    activities: state => state.activities,
    activity: state => state.activity
}

// mutations
export const mutations = {
    setActivities(state, payload) {
        console.log('Set activities mutation: ', payload)
        state.activities = payload
    },
    setActivity(state, payload) {
        console.log('Set activity mutation: ', payload)
        state.activity = payload
    },
    ADD_ACTIVITY(state, payload) {
        console.log('Add activity mutation: ', payload)
        state.activities.push(payload)
    },
    UPDATE_ACTIVITY(state, payload) {
        console.log('Update activity mutation: ', payload)
        const activityId = parseInt(payload.id)
        const index = state.activities.findIndex(activity => activity.id === activityId)
        console.log('index: ', index)
        state.activities[index] = payload
    },
    deleteActivity(state, payload) {
        const activityId = parseInt(payload)
        console.log('activityId: ', activityId)
        const index = state.activities.findIndex(activity => activity.id === activityId)
        console.log('index: ', index)
        console.log('state.activities: ', state.activities)
        state.activities.splice(index, 1)
    }
}

// actions
export const actions = {
    async fetchActivities({ commit }) {
        try {
            console.log('fetchActivities action')
            const { data } = await axios.get('/api/activities')
            console.log('data: ', data)
            commit('setActivities', data)
        } catch (error) {
            console.log('vuex error: ', error)
            throw error
        }
    },
    async fetchActivity({ commit }, payload) {
        try {
            console.log('fetchActivity action: ', payload)
            const { activityId } = payload
            const { data } = await axios.get(`/api/activities/${activityId}`)
            console.log('data: ', data)
            commit('setActivity', data.activity)
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
    async updateActivity({ commit }, form) {
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
            commit('deleteActivity', activityId)
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    }
}

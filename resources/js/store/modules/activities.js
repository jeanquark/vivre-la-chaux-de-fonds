import axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
    activities: []
}

// getters
export const getters = {
    activities: state => state.activities
}

// mutations
export const mutations = {
    setActivities (state, payload) {
        console.log('Set activities mutation: ', payload)
        state.activities = payload
    },
    addActivity (state, payload) {
        console.log('Add activity mutation: ', payload)
        state.activities.push(payload)
    },
    updateActivity (state, payload) {
        console.log('Update activity mutation: ', payload)
        const activityId = parseInt(payload.id)
        const index = state.activities.findIndex(activity => activity.id === activityId)
        console.log('index: ', index)
        state.activities[index] = payload
    },
    deleteActivity (state, payload) {
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
    async fetchActivities ({ commit }) {
        try {
            console.log('fetchActivities action')
            const { data } = await axios.get('/api/activities')
            console.log('data: ', data)
            commit('setActivities', data)
        } catch (error) {
            console.log('vuex error: ', error)
        }
    },
    async updateActivity ({ commit }, payload) {
        try {
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }

            let formData = new FormData();
            formData.append('new_image', payload.new_image)
            // console.log('this.activity: ', this.activity)
            formData.append('form', JSON.stringify(payload.activity))
            console.log('formData: ', formData)

            formData.append('_method', 'PUT')

            const { data } = await axios.post(`/api/activities/${payload.activity.id}`, formData, config)
            console.log('data: ', data)
            commit('updateActivity', data.activity)
        } catch (error) {
            console.log('error from vuex: ', error)
            throw error
        }
    },
    async deleteActivity ({ commit }, payload) {
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

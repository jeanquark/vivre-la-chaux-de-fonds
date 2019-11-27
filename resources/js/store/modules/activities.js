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
    }
}

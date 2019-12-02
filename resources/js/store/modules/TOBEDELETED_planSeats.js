import axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
    planSeats: [],
    userSeats: []
}

// getters
export const getters = {
    planSeats: state => state.planSeats,
    userSeats: state => state.userSeats
}

// mutations
export const mutations = {
    [types.FETCH_PLAN_SEATS] (state, payload) {
        console.log('Plan Seats mutation: ', payload)
        state.planSeats = payload
    },
    [types.FETCH_USER_SEATS] (state, payload) {
        console.log('User Seats mutation: ', payload)
        state.userSeats = payload
    },
    // [types.ADD_USER_SEAT] (state, payload) {
    //     console.log('Add user seat mutation: ', payload)
    //     state.userSeats.push(payload)
    // },
    addUserSeat (state, payload) {
        console.log('Add user seat mutation: ', payload)
        state.userSeats.push(payload)
    }
}

// actions
export const actions = {
    async fetchPlanSeats ({ commit }) {
        try {
            console.log('fetchPlanSeats action')
            const { data } = await axios.get('/api/plan-seats')
            console.log('data: ', data)
            commit(types.FETCH_PLAN_SEATS, data)
        } catch (error) {
            console.log('vuex error: ', error)
            // commit(types.FETCH_USER_FAILURE)
        }
    },
    async fetchUserSeats ({ commit }, payload) {
        try {
            console.log('fetchUserSeats action: ', payload)
            const { userId } = payload
            const { data } = await axios.get(`/api/plan-seats/${userId}`)
            console.log('data: ', data)
            commit(types.FETCH_USER_SEATS, data)
        } catch (error) {
            console.log('vuex error: ', error)
            // commit(types.FETCH_USER_FAILURE)
        }
    }
}

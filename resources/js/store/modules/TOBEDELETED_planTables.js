import axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
    planTables: [],
    tableSeats: {}
}

// getters
export const getters = {
    planTables: state => state.planTables,
    tableSeats: state => state.tableSeats
}

// mutations
export const mutations = {
    [types.FETCH_PLAN_TABLES] (state, payload) {
        console.log('Plan Tables mutation: ', payload)
        state.planTables = payload
    },
    [types.FETCH_SEATS_BY_TABLE] (state, payload) {
        console.log('Mutation fetch seats by tables: ', payload)
        state.tableSeats = Object.assign({}, state.tableSeats, {
            [payload.table.svg_id]: payload.seats
        })
    },
}

// actions
export const actions = {
    async fetchPlanTables ({ commit }) {
        try {
            console.log('fetchPlanTables action')
            const { data } = await axios.get('/api/plan-tables')
            console.log('data: ', data)
            commit(types.FETCH_PLAN_TABLES, data)
        } catch (error) {
            console.log('vuex error: ', error)
            // commit(types.FETCH_USER_FAILURE)
        }
    },
    async fetchSeatsByTable ({ commit }, payload) {
        try {
            console.log('fetchSeatsByTable action: ', payload)
            const svgId = payload.svgId
            const { data } = await axios.get(`/api/plan-tables/${svgId}`)
            console.log('data: ', data)
            commit(types.FETCH_SEATS_BY_TABLE, data)
        } catch (error) {
            console.log('vuex error: ', error)
            // commit(types.FETCH_USER_FAILURE)
        }
    }
}

import axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
    tables: []
}

// getters
export const getters = {
    tables: state => state.tables
}

// mutations
export const mutations = {
    [types.FETCH_TABLES] (state, payload) {
        console.log('Tables mutation: ', payload)
        state.tables = payload
    }
}

// actions
export const actions = {
    async fetchTables ({ commit }) {
        try {
            console.log('fetchTables action')
            const { data } = await axios.get('/api/tables')
            console.log('data: ', data)
            commit(types.FETCH_TABLES, data)
        } catch (error) {
            console.log('vuex error: ', error)
            const { status, data } = error.response 
            console.log('status: ', status)
            console.log('data.message: ', data.message)
            // throw new Error({ status, message: data.message })
            throw new Error(data.message)
            // commit(types.FETCH_USER_FAILURE)
        }
    }
}

import axios from 'axios'
// state
export const state = {
	pages: {}
}

// getters
export const getters = {
	pages: state => state.pages
}

// mutations
export const mutations = {
	SET_PAGES (state, payload) {
		state.pages = payload
	}
}

// actions
export const actions = {

}

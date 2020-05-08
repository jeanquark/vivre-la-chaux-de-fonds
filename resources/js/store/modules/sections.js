import Vue from 'vue'
import axios from 'axios'
import { objectToFormData } from 'object-to-formdata'
// state
export const state = {
	sections: {}
}

// getters
export const getters = {
	sections: state => state.sections
}

// mutations
export const mutations = {
	SET_SECTIONS (state, payload) {
		console.log('SET_SECTIONS: ', payload)
		payload.forEach(section => {
            state.sections = Object.assign({}, state.sections, {
                [section.id]: section
            })
        })
	},
	SET_SECTION (state, payload) {
		console.log('SET_SECTION: ', payload)
		state.sections = Object.assign({}, state.sections, {
            [payload.id]: payload
        })
	},
	DELETE_SECTION (state, payload) {
        console.log('DELETE_SECTION: ', payload)
        const { sectionId } = payload
        console.log('sectionId: ', sectionId)
        Vue.set(state.sections, sectionId, null)
    }
}

// actions
export const actions = {
	async fetchSections ({ commit }) {
		try {
			console.log('fetchSections vuex action')
			const { data } = await axios.get(`/api/sections`)
			console.log('data: ', data)
			commit('SET_SECTIONS', data)
		} catch (error) {
			console.log('error: ', error)
			throw error
		}
	},
	async fetchSectionById ({ commit }, payload) {
		try {
			console.log('fetchSectionById vuex action: ', payload)
			const { sectionId } = payload
			const { data } = await axios.get(`/api/sections/${sectionId}`)
			console.log('data: ', data)
			commit('SET_SECTION', data.section)
		} catch (error) {
			console.log('error: ', error)
			throw error
		}
	},
	async fetchSectionBySlug ({ commit }, payload) {
		try {
			console.log('fetchSectionBySlug vuex action: ', payload)
			const { sectionSlug } = payload
			const { data } = await axios.get(`/api/sections/slug/${sectionSlug}`)
			console.log('data: ', data)
			commit('SET_SECTION', data.section)
		} catch (error) {
			console.log('error: ', error)
			throw error
		}
    },
    async fetchSectionsByPageId ({ commit }, payload) {
        try {
            console.log('fetchSectionsByPageId vuex action: ', payload)
            const { pageId } = payload
            const { data } = await axios.get(`/api/sections/page/${pageId}`)
            console.log('data: ', data)
            commit('SET_SECTIONS', data.sections)
        } catch (error) {
            console.log('error: ', error)
            throw error
        }
    },
	async createSection ({ commit }, form) {
        try {
        	console.log('createSection action: ', form)

        	const { data } = await form.submit('post', '/api/sections', {
                transformRequest: [
                    function(data, headers) {
                        return objectToFormData(data)
                    }
                ]
            })
            console.log('data: ', data)
            commit('SET_SECTION', data.newSection)
        } catch (error) {
            console.log('error: ', error)
            throw error
        }
	},
	async updateSection ({ commit }, form) {
		try {
			console.log('updatedSection vuex action: ', form)
			const updatedSection = form
			console.log('updatedSection: ', updatedSection)

			const { data } = await form.submit('post', `/api/sections/${updatedSection.id}`, {
                transformRequest: [
                    function(data, headers) {
                    	data['_method'] = 'PUT'
                        return objectToFormData(data)
                    }
                ]
            })

			// const { data } = await axios.put(`/api/sections/${updatedSection.id}`, { updatedSection })
			console.log('data3: ', data)
			commit('SET_SECTION', data.updatedSection)
		} catch (error) {
			console.log('error: ', error)
			throw error
		}
	},
	async deleteSection ({ commit }, payload) {
        try {
            const { sectionId } = payload
            console.log('sectionId: ', sectionId)
            const { data } = await axios.delete(`/api/sections/${sectionId}`)
            console.log('data2: ', data)
            commit('DELETE_SECTION', { sectionId })
        } catch (error) {
        	console.log('error: ', error)
            throw error
        }
    }
}

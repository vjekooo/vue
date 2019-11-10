
import { api } from '../../constants'
import { getPostOptions } from '../../helpers'

const state = {
    messages: [],
    responseMessage: ''
}

const getters = {
    allMessages: (state) => state.messages,
    responseMessage: (state) => state.responseMessage
}

const actions = {
    async fetchMessages({ commit }) {
        const response = await fetch(`${api}/contacts`)

        const data = await response.json()

        commit('setMessages', data)
    },
    async sendContact({ commit, dispatch }, contact) {
        try {
            const response = await fetch(`${api}/contact`, getPostOptions(contact))

            const data = await response.json()

            const responseMessage = data.success || data.error

            if (data) {
                commit('setResponseMessage', responseMessage)
                dispatch('handleResponseMessage')
            }

            if (!data.error) dispatch('fetchMessages')

        } catch (error) {
            console.log(error)
        }
    },
    handleResponseMessage({ commit }) {
        setTimeout(() => {
            commit('setResponseMessage', '')
        }, 4000)
    }
}

const mutations = {
    setMessages: (state, messages) => (state.messages = messages),
    setResponseMessage: (state, message) => (state.responseMessage = message)
}

export default {
    state,
    getters,
    actions,
    mutations
}
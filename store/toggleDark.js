export const state = () => ({
  theme: localStorage.getItem('theme') || 'light'
})

export const getters = {
  theme: (state) => state.theme
}

export const mutations = {
  SET_THEME(state, theme) {
    state.theme = theme
  }
}

export const actions = {
  updateClass({ commit }, { theme }) {
    window.localStorage.setItem('theme', theme)
    commit('SET_THEME', theme)
  }
}

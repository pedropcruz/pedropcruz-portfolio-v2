export const state = () => ({
  theme: 'light'
})

export const getters = {
  theme: (state) => state.theme
}

export const mutations = {
  SET_DARK_MODE(state, theme) {
    state.theme = theme
  }
}

export const actions = {
  updateClass({ commit }, { theme }) {
    document.cookie = `theme=${theme}`
    commit('SET_DARK_MODE', theme)
  }
}

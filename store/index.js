export const actions = {
  nuxtClientInit({ commit }) {
    const theme = window.localStorage.getItem('theme') || 'light'
    commit('toggleDark/SET_THEME', theme)
  }
}

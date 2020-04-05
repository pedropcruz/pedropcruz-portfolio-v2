import { cookieFromRequest } from '~/utils'
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    const theme = cookieFromRequest(req, 'theme') || 'light'
    commit('toggleDark/SET_DARK_MODE', theme)
  }
}

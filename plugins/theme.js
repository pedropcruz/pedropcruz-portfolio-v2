export default ({ store }) => {
  store.commit('SET_THEME', localStorage.getItem('theme') || 'light')
}

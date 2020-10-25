export default {
  ssr: false,
  router: {
    base: '/'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Home | pedropcruz.pt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: '/image/x-icon', href: '/favicon.ico' }]
  },
  components: true,
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/style.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  pulgins: [{ src: '~/plugins/theme', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  styleResources: ['~assets/scss/abstracts/_variables.scss'],

  googleAnalytics: {
    id: 'UA-116283572-1',
    dev: false
  },

  sitemap: {
    hostname: 'https://www.pedropcruz.pt'
  },

  modern: true,
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    fallback: true
  }
}

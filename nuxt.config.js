import global from './utils/index'
import getMeta from './utils/meta'

const meta = getMeta()

export default {
  ssr: false,
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en-GB'
    },
    title: 'pedropcruz.pt - Frontend Developer from Portugal 🇵🇹',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
      {
        'http-equiv': 'Content-Type',
        content: 'text/html; charset=ISO-8859-1'
      },
      { name: 'robots', content: 'index, follow' },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || ''
      },
      { property: 'og:site_name', content: global.siteName || '' },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || ''
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: global.siteName || '' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: global.siteUrl
      }
    ]
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
  plugins: ['~/plugins/disqus'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/date-fns'
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
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    '@nuxtjs/robots',
    '@nuxtjs/prismic',
    'vue-social-sharing/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  prismic: {
    endpoint: process.env.API_URL
  },

  dateFns: {},
  /*
   ** Build configuration
   */
  styleResources: ['~assets/scss/abstracts/_variables.scss'],

  googleAnalytics: {
    id: 'UA-116283572-1',
    dev: false
  },

  sitemap: {
    hostname: process.env.CLIENT_URL,
    gzip: true
  },

  robots: [
    {
      UserAgent: '*',
      Disallow: '/_nuxt/'
    },
    {
      sitemap: process.env.CLIENT_URL + '/sitemap.xml'
    }
  ],

  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'nuxt-color-mode'
  },

  modern: true,
  build: {},
  generate: {
    fallback: true
  }
}

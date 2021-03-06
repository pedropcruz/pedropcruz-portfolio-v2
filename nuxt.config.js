import global from './utils/index'
import getMeta from './utils/meta'

const meta = getMeta()

export default {
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
  components: [
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
    '~/components/atoms/**/*',
    '~/components/molecules/**/*',
    '~/components/organisms/**/*'
  ],
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
  plugins: [
    '~/plugins/disqus',
    { src: '~plugins/expandable-image', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/date-fns',
    '@aceforth/nuxt-optimized-images',
    '@/modules/sitemapRouteGenerator'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-i18n',
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
    'vue-social-sharing/nuxt',
    [
      'nuxt-highlightjs',
      {
        style: 'qtcreator_dark'
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en'
  },

  prismic: {
    endpoint: process.env.API_URL,
    apiOptions: {
      routes: [
        {
          type: 'blog',
          path: '/blog/:id'
        }
      ]
    }
  },

  optimizedImages: {
    optimizeImages: true
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
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    exclude: ['/_nuxt/']
  },

  env: {
    CLIENT_URL: process.env.CLIENT_URL,
    API_URL: process.env.API_URL
  },

  robots: [
    {
      UserAgent: '*',
      Disallow: process.env.NODE_ENV === 'production' ? '/_nuxt/' : '/'
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

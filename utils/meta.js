import global from './index'

export default (meta) => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || global.siteDesc
    },
    {
      property: 'og:site_name',
      content: 'pedropcruz.pt'
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || global.siteType
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.url) || global.siteUrl
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || global.siteTitle
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || global.siteDesc
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: (meta && meta.img) || global.img
    },
    {
      hid: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: (meta && meta.img) || global.img
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: (meta && meta.url) || global.siteUrl
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || global.siteTitle
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || global.siteDesc
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: (meta && meta.img) || global.img
    }
  ]
}

<template>
  <main class="container">
    <Introduction />
    <Projects :projects="projects" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Home | pedropcruz.pt',
      description: 'Check out what projects I made and check my Resume!',
      projects: [
        {
          responsibility: 'Fullstack | UI/UX Designer',
          title: 'ERISING - Efficiency Rising',
          skills: ['React', 'Bulma', 'Sass', 'Nodejs'],
          to: 'https://www.erising.pt/',
          image: '/images/erising.svg',
          className: 'erising'
          // '#63A163'
        },
        {
          responsibility: 'Frontend Developer',
          title: 'freeCodeCamp Lisbon',
          skills: ['Nuxt', 'Bulma', 'Adonisjs', 'MySQL'],
          to: 'https://www.freecodecamplisbon.org',
          image: '/images/fcc.svg',
          className: 'fcc'
          // '#0a0a23'
        }
      ]
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'www.pedropcruz.pt'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: '/images/imageForSEO.jpg'
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: '/images/imageForSEO.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

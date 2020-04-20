<template>
  <main class="container">
    <Introduction />
    <Projects :projects="projects" />
  </main>
</template>

<script>
import Projects from '~/components/molecules/Projects'
import Introduction from '~/components/molecules/Introduction'
import erisingImg from '~/assets/images/erising.svg'
import fccImg from '~/assets/images/fcc.svg'

export default {
  components: {
    Projects,
    Introduction
  },
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
          image: erisingImg,
          className: 'erising'
          // '#63A163'
        },
        {
          responsibility: 'Frontend Developer',
          title: 'freeCodeCamp Lisbon',
          skills: ['Nuxt', 'Bulma', 'Adonisjs', 'MySQL'],
          to: 'https://www.freecodecamplisbon.org',
          image: fccImg,
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
          hid: 'og:image',
          property: 'og:image',
          content: require('~/assets/images/imageForSEO.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

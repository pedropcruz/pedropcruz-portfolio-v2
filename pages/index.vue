<template>
  <main class="container">
    <Introduction />
    <Projects :projects="projects" />
  </main>
</template>

<script>
import getMeta from '@/utils/meta'

export default {
  data: () => ({
    title: 'Home | pedropcruz.pt',
    description: 'Check out what projects I made and check my Resume!',
    projects: [
      {
        responsibility: 'Frontend Developer | UI/UX Developer',
        title: 'Fidgrove - Flowing Lap Engineering',
        skills: ['Nuxt', 'Bulma', 'Sass', 'Strapi'],
        to: 'https://www.fidgrove.com/',
        image: '/images/fidgrove.svg',
        className: 'fidgrove'
        // '#15223f'
      },
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
        title: 'freeCodeCamp Lisbon - dev events based in Lisbon',
        skills: ['Nuxt', 'Buefy', 'Netlify', 'Netlify Functions'],
        to: 'https://www.freecodecamplisbon.org',
        image: '/images/fcc.svg',
        className: 'fcc'
        // '#0a0a23'
      }
    ]
  }),
  head() {
    return {
      title: 'Home | pedropcruz.pt',
      meta: getMeta({
        description: 'Check out what projects I made and check my Resume!'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>

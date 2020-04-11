<template>
  <div>
    <navbar />
    <nuxt />
    <Footer :data="sociallinks" />
  </div>
</template>

<style lang="scss"></style>

<script>
import Navbar from '~/components/organisms/Navbar.vue'
import Footer from '~/components/organisms/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      sociallinks: [
        {
          name: 'facebook',
          to: 'https://www.facebook.com/pedropcruzthe1'
        },
        {
          name: 'twitter',
          to: 'https://twitter.com/pedropcruzthe1'
        },
        {
          name: 'linkedin',
          to: 'https://www.linkedin.com/in/pedropcruz/'
        },
        {
          name: 'instagram',
          to: 'https://www.instagram.com/pedropcruzthe1/'
        },
        {
          name: 'github',
          to: 'https://github.com/pedropcruz'
        },
        {
          name: 'dribbble',
          to: 'https://dribbble.com/pedropcruzthe1'
        },
        {
          name: 'twitch',
          to: 'https://www.twitch.tv/pedropcruz'
        },
        {
          name: 'youtube',
          to: 'https://www.youtube.com/c/PedroCruz1991'
        }
        /* {
          name: 'freecodecamp',
          to: 'https://www.freecodecamp.org/pedropcruz'
        } */
      ]
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.toggleDark.theme
      }
    }
  },
  created() {
    this.sociallinks.map((item) => {
      item.url = {
        dark: require(`~/assets/images/${item.name}.svg`),
        light: require(`~/assets/images/${item.name}_light.svg`)
      }
    })
  }
}
</script>

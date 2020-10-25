<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer :data="sociallinks" />
  </div>
</template>

<script>
export default {
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
        },
        {
          name: 'freecodecamp',
          to: 'https://www.freecodecamp.org/pedropcruz'
        }
      ]
    }
  },
  created() {
    this.sociallinks.map((item) => {
      item.url = {
        dark: `/images/${item.name}.svg`,
        light: `/images/${item.name}_light.svg`
      }
    })
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ],
      bodyAttrs: {
        class: this.$store.state.toggleDark.theme
      }
    }
  }
}
</script>

<template>
  <div class="navbar-brand">
    <nuxt-link :to="logoItem.href" :class="logoItem.class">
      <img :src="image" alt="logo" />
    </nuxt-link>
  </div>
</template>

<script>
// import Anchor from '../atoms/Anchor'

export default {
  data() {
    return {
      logoItem: {
        isAnchor: false,
        class: 'navbar-item is-paddingless animated slow slideInDown',
        href: '/'
      },
      image: null
    }
  },
  computed: {
    getTheme() {
      return this.$store.getters['toggleDark/theme']
    }
  },
  watch: {
    getTheme: {
      immediate: true,
      handler(val) {
        if (val) this.image = require(`~/assets/images/logo_${val}.svg`)
      }
    }
  }
}
</script>

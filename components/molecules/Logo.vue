<template>
  <div class="navbar-brand">
    <nuxt-link :to="logoItem.href" :class="logoItem.class">
      <img :src="image" alt="logo" />
    </nuxt-link>
  </div>
</template>

<script>
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
      return this.$colorMode.value === 'dark' ? 'dark' : 'light'
    }
  },
  watch: {
    getTheme: {
      immediate: true,
      handler(val) {
        if (val) this.image = `/images/logo_${val}.svg`
      }
    }
  }
}
</script>

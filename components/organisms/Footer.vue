<template>
  <footer class="footer">
    <div class="container has-text-centered">
      <div class="content is-flex is-justify-content-center is-flex-wrap-wrap">
        <a
          v-for="(social, index) in data"
          :key="index"
          :href="social.to"
          target="_blank"
          rel="noopener noreferrer"
          class="m-3"
        >
          <figure class="image is-24x24 mx-0">
            <img
              :class="getTheme + `-img`"
              :src="social.url[getTheme]"
              :alt="social.name"
            />
          </figure>
        </a>
      </div>
      <p>© {{ getDate }} designed and coded by Pedro Cruz</p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    getDate() {
      return new Date().getFullYear()
    },
    getTheme() {
      return this.$colorMode.value === 'dark' ? 'light' : 'dark'
    }
  },
  methods: {
    constructAnchor(social) {
      return {
        isAnchor: true,
        href: social.to
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  &:hover {
    opacity: 0.7;
  }
}
</style>

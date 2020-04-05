<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <ul class="is-flex navbar-menu">
        <li v-for="(social, index) in data" :key="index" class="navbar-item">
          <Anchor :item="constructAnchor(social)">
            <img :class="getTheme + `-img`" :src="social.url[getTheme]" />
          </Anchor>
        </li>
      </ul>
      <p>© {{ getDate }} designed and coded by Pedro Cruz</p>
    </div>
  </footer>
</template>

<script>
import Anchor from '~/components/atoms/Anchor'

export default {
  components: {
    Anchor
  },
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
      return this.$store.getters['toggleDark/theme'] === 'light'
        ? 'dark'
        : 'light'
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

<style lang="scss" scoped></style>

<template>
  <header
    :class="{ hidden: !showNavBar }"
    class="navbar is-fixed-top container pt-5 pb-5"
    role="navigation"
    aria-label="main navigation"
  >
    <Logo />
    <Menu :items="items" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      showNavBar: true,
      lastScrollPosition: 0,
      items: [
        {
          isAnchor: false,
          href: '/',
          class: 'navbar-item',
          name: 'work'
        },
        {
          isAnchor: false,
          href: '/about',
          class: 'navbar-item',
          name: 'about'
        },
        {
          isAnchor: false,
          href: '/blog',
          class: 'navbar-item',
          name: 'blog'
        },
        // {
        //   isAnchor: false,
        //   href: '/services',
        //   class: 'navbar-item',
        //   name: 'services'
        // },
        {
          isAnchor: false,
          href: '/contact',
          class: 'navbar-item',
          name: 'contact'
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const getCurrentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop

      if (getCurrentScrollPos < 0) return

      this.showNavBar = getCurrentScrollPos < this.lastScrollPosition

      this.lastScrollPosition = getCurrentScrollPos
    }
  }
}
</script>

<style lang="scss" scoped></style>

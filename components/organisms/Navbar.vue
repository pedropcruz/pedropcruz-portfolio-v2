<template>
  <header
    class="navbar container pt-5 pb-5"
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
  }
}
</script>

<style lang="scss" scoped></style>

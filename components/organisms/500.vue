<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container content">
        <h1>Oops! Something went wrong</h1>
        <p>
          I'm sorry. This was unexpected
        </p>
        <Anchor :item="item"> Go Back </Anchor>
      </div>
    </div>
  </section>
</template>
<script>
import Anchor from '~/components/atoms/Anchor.vue'

export default {
  name: 'Error500',
  components: {
    Anchor
  },
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      item: {
        isAnchor: false,
        href: '/',
        class: 'link'
      }
    }
  }
}
</script>

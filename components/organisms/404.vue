<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container content">
        <h1>This page doesn't exist</h1>
        <p>
          The link you clicked on may be broken or no longer exist.
        </p>
        <Anchor :item="item"> Go Back </Anchor>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Error404',
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

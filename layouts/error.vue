<template>
  <div class="nuxt-error container">
    <!-- eslint-disable-next-line vue/require-component-is -->
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import error404 from '~/components/organisms/404.vue'
import error500 from '~/components/organisms/500.vue'
export default {
  name: 'Error',
  layout: 'default', // optional
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404
      }
      return error500
    }
  }
}
</script>

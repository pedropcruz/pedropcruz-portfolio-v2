<template>
  <div>
    <a
      v-if="item.isAnchor"
      :href="item.href"
      :class="item.class"
      target="_blank"
      ><slot
    /></a>
    <nuxt-link v-if="!item.isAnchor" :to="item.href" :class="item.class"
      ><slot
    /></nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>

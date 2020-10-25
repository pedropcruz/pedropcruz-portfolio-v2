<template>
  <div :class="`${className} media-content`">
    <strong class="is-size-7 is-uppercase is-inline-block">{{ name }}</strong>
    <slot name="div"></slot>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

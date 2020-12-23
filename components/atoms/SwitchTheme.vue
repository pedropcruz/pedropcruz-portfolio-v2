<template>
  <li class="is-inline-block animated faster slideInDown">
    <input
      id="switch"
      @change="setTheme"
      :checked="getTheme !== 'light'"
      type="checkbox"
    />
    <label for="switch">toggle</label>
  </li>
</template>

<script>
export default {
  data() {
    return {
      toggleBtn: true
    }
  },
  computed: {
    getTheme() {
      return this.$colorMode.value
    }
  },
  methods: {
    setTheme() {
      this.toggleBtn = !this.toggleBtn
      this.$colorMode.value =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

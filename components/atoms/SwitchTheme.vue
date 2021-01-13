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
  computed: {
    getTheme() {
      return this.$colorMode.value
    }
  },
  methods: {
    setTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

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
      return this.$store.getters['toggleDark/theme']
    }
  },
  methods: {
    setTheme() {
      this.toggleBtn = !this.toggleBtn
      this.$store.dispatch('toggleDark/updateClass', {
        theme: this.getTheme === 'dark' ? 'light' : 'dark'
      })
    }
  }
}
</script>

<template>
  <nav class="navbar-menu is-active">
    <ul class="navbar-end">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="is-inline-block animated faster slideInDown"
      >
        <Anchor :item="item">{{ item.name }}</Anchor>
      </li>
      <SwitchTheme />
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

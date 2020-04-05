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
import Anchor from '../atoms/Anchor'
import SwitchTheme from '../atoms/switchTheme'

export default {
  components: {
    Anchor,
    SwitchTheme
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

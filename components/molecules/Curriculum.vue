<template>
  <HeadingCV :name="name" :className="name">
    <template #div v-if="checkInsideData">
      <div
        v-for="(item, key) in data"
        :key="key"
        class="content is-family-secondary"
      >
        <p
          v-if="item.title || item.company"
          class="is-size-5 has-text-weight-bold is-spaced is-inline-block"
        >
          {{ item.title || item.company }}
        </p>
        <p v-if="item.position" class="is-size-6 is-inline-block">
          {{ item.position }}
        </p>
        <p
          v-if="item.from && item.to"
          class="is-size-7 is-uppercase is-marginless"
        >
          {{ `${item.from} - ${item.to}` }}
        </p>
        <p v-if="item.date" class="is-size-7">{{ item.date }}</p>
        <p v-if="item.description" class="is-size-5">
          {{ item.description }}
        </p>
        <ul
          v-if="item.courses || item.responsabilities"
          :class="item.courses ? `is-marginless` : ''"
        >
          <li
            v-for="(course, index) in item.courses || item.responsabilities"
            :key="index"
          >
            {{ course }}
          </li>
        </ul>
      </div>
    </template>
    <template #div v-else>
      <ul class="content is-marginless">
        <li v-for="(item, index) in data" :key="index">{{ item }}</li>
      </ul>
    </template>
  </HeadingCV>
</template>

<script>
import HeadingCV from '~/components/atoms/HeadingCV'

export default {
  components: {
    HeadingCV
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    },
    isWorkExperience: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkInsideData() {
      return this.data.some((item) => typeof item === 'object')
    }
  }
}
</script>

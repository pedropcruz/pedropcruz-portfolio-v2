<template>
  <section class="section project">
    <h1 class="title is-size-1">Projects ❤️</h1>
    <div
      v-for="(project, index) in projects"
      :key="index"
      :class="project.className"
      class="box"
    >
      <article class="media">
        <div class="media-content">
          <div class="content">
            <h1 class="title">{{ project.title }}</h1>
            <h2 class="subtitle">{{ project.responsibility }}</h2>
            <ul>
              <li
                v-for="(skill, idx) in project.skills"
                :key="idx"
                class="is-size-4"
              >
                {{ skill }}
              </li>
            </ul>
            <nav class="level">
              <div class="level-left">
                <h2 class="subtitle">
                  <Anchor
                    :item="{
                      isAnchor: true,
                      href: project.to,
                      class: 'level-item'
                    }"
                  >
                    See More →
                  </Anchor>
                </h2>
              </div>
            </nav>
          </div>
        </div>
        <div class="media-left">
          <figure class="image">
            <img :alt="project.title" :src="project.image" />
          </figure>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import Anchor from '~/components/atoms/Anchor'

export default {
  components: {
    Anchor
  },
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

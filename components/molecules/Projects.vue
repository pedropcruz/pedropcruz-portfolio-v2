<template>
  <section class="section project">
    <h1 class="title is-size-1">Projects 💻</h1>
    <div
      v-for="(project, index) in projects"
      :key="index"
      :class="project.className"
      class="box"
    >
      <article class="media is-justify-content-center is-align-items-center">
        <div class="media-content">
          <div class="content">
            <h1 class="title">{{ project.title }}</h1>
            <h2 class="subtitle is-5 mt-3">{{ project.responsibility }}</h2>
            <div class="tags">
              <span
                v-for="(skill, idx) in project.skills"
                :key="idx"
                class="tag is-large is-rounded"
              >
                {{ skill }}
              </span>
            </div>
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
          <a :href="project.to" target="_blank" rel="noopener noreferrer">
            <figure class="image is-200x200">
              <img :alt="project.title" :src="project.image" />
            </figure>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.is-200x200 img {
  width: 200px;
  height: 200px;
}
</style>

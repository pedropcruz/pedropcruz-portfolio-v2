<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <ul class="is-marginless">
          <li v-for="post in posts" :key="post.id">
            <div class="content">
              <h1>{{ post.title }}</h1>
              <h3>{{ post.summary }}</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // data() {
  //   return {
  //     categories: []
  //   }
  // }
  asyncData(ctx) {
    return ctx.app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'blog/'
      })
      .then((res) => {
        return {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.title,
              summary: bp.content.summary,
              thumbnail: bp.content.thumbnail
            }
          })
        }
      })
  }
}
</script>

<style lang="scss" scoped></style>

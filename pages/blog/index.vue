<template>
  <main class="hero is-medium">
    <div class="hero-body">
      <section class="section">
        <div class="columns is-multiline">
          <div
            v-for="article in articles.results"
            class="column is-6-tablet is-4-widescreen"
          >
            <div class="card p-6 has-background-white-ter">
              <div class="card-image">
                <figure class="image">
                  <img
                    :src="article.data.image.thumbnail.url"
                    :width="article.data.image.thumbnail.dimensions.width"
                    :height="article.data.image.thumbnail.dimensions.height"
                    :alt="article.data.image.thumbnail.alt"
                  />
                </figure>
              </div>
              <div class="card-content px-0">
                <time
                  datetime="2016-1-1"
                  class="is-capitalized has-text-weight-bold is-size-6 is-block mb-5"
                  >{{ parsedDate(article.data.date) }}</time
                >
                <nuxt-link :to="`/blog/${article.uid}`">
                  <h4 class="title is-2 has-text-primary mb-5">
                    {{ $prismic.asText(article.data.title) }}
                  </h4>
                </nuxt-link>
                <h5 class="subtitle is-5 has-text-primary">
                  {{ $prismic.asText(article.data.description) }}
                </h5>
              </div>
              <div class="card-footer">
                <p class="card-footer-item is-justify-content-flex-end">
                  <nuxt-link
                    :to="`/blog/${article.uid}`"
                    class="button is-primary has-text-weight-medium"
                  >
                    CONTINUA A LER
                  </nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import getMeta from '@/utils/meta'
import { pt } from 'date-fns/locale'

export default {
  async asyncData({ $prismic, params, error }) {
    try {
      const articles = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'blog'),
        { orderings: '[my.blog.date desc]' }
      )

      return { articles }
    } catch (_err) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  methods: {
    parsedDate(date) {
      return (
        date &&
        this.$dateFns.format(new Date(date), 'MMMM d, yyyy', {
          locale: pt
        })
      )
    }
  },
  head() {
    return {
      title: 'Blog | pedropcruz.pt',
      meta: getMeta({
        description:
          'Want to know my thoughts? The blog is in portuguese, check it now!'
      }),
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.CLIENT_URL}/blog`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  margin-top: 6rem;
  .card {
    overflow: initial;
    display: flex;
    flex-direction: column;
    height: 100%;

    .card-image {
      margin-top: -6rem;
      box-shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.1);

      img {
        border-radius: 5px;
      }
    }
    .card-content {
      height: 100%;
    }
  }
}
</style>

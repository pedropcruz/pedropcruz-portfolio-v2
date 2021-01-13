<template>
  <main>
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="card p-6 has-background-white-ter">
          <div class="card-image">
            <figure class="image">
              <img :src="article.image.url" :alt="article.image.alt" />
            </figure>
          </div>
          <div class="card-content p-0 mt-5">
            <div class="content is-medium has-text-primary">
              <nav class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <nuxt-link to="/blog">View all articles</nuxt-link>
                  </div>
                </div>
                <div class="level-right social-share is-mobile">
                  <ShareNetwork
                    v-for="social in socialShare"
                    :key="social.name"
                    :network="social.name"
                    :url="getUrl"
                    :title="$prismic.asText(article['og-title'])"
                    :description="$prismic.asText(article['og-description'])"
                    :quote="$prismic.asText(article['og-description'])"
                    :media="article.image.url"
                    twitter-user="pedropcruzthe1"
                    class="level-item p-3 has-background-primary"
                    hashtags="pedropcruz,frontend,portuguesedeveloper"
                  >
                    <figure class="image is-24x24 mx-0">
                      <img
                        :src="`/images/${social.name}_light.svg`"
                        :alt="social.name"
                      />
                    </figure>
                  </ShareNetwork>
                </div>
              </nav>
              <hr class="hr has-background-primary" />
              <article class="has-text-primary my-6">
                <time
                  :datetime="article.date"
                  class="is-capitalized has-text-weight-bold is-size-6"
                >
                  {{ articleDate }}
                </time>
                <h1 class="title is-size-1 has-text-primary">
                  {{ $prismic.asText(article.title) }}
                </h1>
                <p
                  v-for="(slice, index) in article.body"
                  :key="`slice-${index}`"
                >
                  <template v-if="slice.slice_type === 'text'">
                    <div
                      class="is-secondary"
                      v-html="$prismic.asHtml(slice.primary.text)"
                    ></div>
                  </template>
                  <template
                    v-else-if="slice.slice_type === 'image_with_caption'"
                  >
                    <figure class="image no-margin">
                      <img
                        :src="slice.primary.image.url"
                        :alt="slice.primary.image.alt"
                        :width="slice.primary.image.dimensions.width"
                        :height="slice.primary.image.dimensions.height"
                      />
                      <figcaption>
                        {{ $prismic.asText(slice.primary.caption) }}
                      </figcaption>
                    </figure>
                  </template>
                  <template v-else-if="slice.slice_type === 'code'">
                    <pre>
                      <code>
                        {{ $prismic.asText(slice.primary.coding) }}
                      </code>
                    </pre>
                  </template>
                  <template v-else-if="slice.slice_type === 'quote'">
                    <blockquote class="has-text-centered" cite="alguém do além">
                      <h3 class="is-italic has-text-weight-bold mb-0">
                        {{ $prismic.asText(slice.primary.text) }}
                      </h3>
                      <cite
                        v-if="slice.primary.cite"
                        class="is-size-6 is-italic has-text-weight-light"
                        v-html="$prismic.asHtml(slice.primary.cite)"
                      ></cite>
                    </blockquote>
                  </template>
                  <template v-else-if="slice.slice_type === 'video'">
                    <figure class="image is-16by9 m-0">
                      <iframe
                        :src="slice.primary.embed.url"
                        class="has-ratio"
                        width="640"
                        height="360"
                        allowfullscreen
                      ></iframe>
                    </figure>
                  </template>
                </p>
              </article>
              <hr class="hr has-background-primary my-6" />
              <div class="is-block mt-6">
                <Disqus :pageConfig="pageConfig" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import getMeta from '@/utils/meta'
import { pt } from 'date-fns/locale'

export default {
  data: () => ({
    id: '',
    url: process.env.CLIENT_URL,
    socialShare: [
      {
        name: 'facebook'
      },
      {
        name: 'twitter'
      },
      { name: 'linkedin' }
    ]
  }),
  computed: {
    getUrl() {
      return `${this.url}/blog/${this.id}`
    },
    getTheme() {
      return this.$colorMode.value === 'dark' ? 'light' : 'dark'
    },
    changeColorText() {
      return `has-text-${this.getTheme === 'dark' ? 'info' : 'primary'}`
    },
    articleDate() {
      return (
        this.article.date &&
        this.$dateFns.format(new Date(this.article.date), 'MMMM d, yyyy', {
          locale: pt
        })
      )
    },
    pageConfig() {
      return {
        title: this.article.title,
        category_id: 'development'
      }
    }
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const article = (await $prismic.api.getByUID('blog', params.id)).data
      return {
        article,
        id: params.id
      }
    } catch (_e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    const meta = {
      title: `✍️ pedropcruz.pt - ${this.$prismic.asText(
        this.article['title-tag']
      )}`,
      meta: getMeta({
        img: this.article['og-image'].url,
        description: this.$prismic.asText(this.article['og-description']),
        title: this.$prismic.asText(this.article['og-title']),
        url: this.getUrl
      })
    }

    return meta
  }
}
</script>

<style lang="scss">
.card {
  margin-top: 6rem;
  overflow: inherit;
  .card-image .image img {
    margin-top: -6rem;
    border-radius: 4px;
  }

  .social-share .level-item {
    border-radius: 50%;
    figure {
      display: flex;
      align-content: center;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  .content {
    hr {
      opacity: 0.3;
    }
    time {
      opacity: 0.6;
    }
  }
}

div.is-secondary {
  p,
  strong {
    color: #22313f;
  }
}
</style>

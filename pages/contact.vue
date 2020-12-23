<template>
  <main class="container">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="content is-medium has-text-centered">
            <strong>
              For work inquires please email me:
              <br />
              <a href="mailto:pedropcruz@outlook.pt">me@pedropcruz.pt</a>
            </strong>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import getMeta from '@/utils/meta'

export default {
  head() {
    return {
      title: 'Contact | pedropcruz.pt',
      meta: getMeta({
        description: 'Need help? Contact me!'
      })
    }
  }
}
</script>

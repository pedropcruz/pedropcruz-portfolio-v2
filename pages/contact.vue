<template>
  <main class="container">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="content is-medium has-text-centered">
            <strong>
              For work inquires please email me:
              <br />
              <a href="mailto:pedropcruz@outlook.pt">pedropcruz@outlook.pt</a>
            </strong>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Contact | pedropcruz.pt',
      description: 'Need help? Contact me!'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  }
}
</script>

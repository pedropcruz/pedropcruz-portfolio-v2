<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <Curriculum :data="education" name="education" />
          <Curriculum :data="skills" name="skills" />
          <Curriculum :data="tools" name="tools" />
          <Title :name="pdfBtn.name" :className="pdfBtn.class">
            <template v-slot:div>
              <Anchor :item="{ isAnchor: true, href: pdfBtn.url }">
                {{ pdfBtn.name }}
              </Anchor>
            </template>
          </Title>
        </div>
        <div class="column is-8">
          <Curriculum
            :data="workExperience"
            :isWorkExperience="true"
            name="workExperience"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    education: {
      type: Array,
      default: () => []
    },
    skills: {
      type: Array,
      default: () => []
    },
    tools: {
      type: Array,
      default: () => []
    },
    workExperience: {
      type: Array,
      default: () => []
    },
    pdfBtn: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

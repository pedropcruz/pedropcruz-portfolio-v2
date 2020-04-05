<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <Education :data="education" name="education" />
          <Skills :data="skills" name="skills"></Skills>
          <Tools :data="tools" name="tools"></Tools>
          <Heading :name="pdfBtn.name" :className="pdfBtn.class">
            <template v-slot:div>
              <Anchor :item="{ isAnchor: true, href: pdfBtn.url }">
                {{ pdfBtn.name }}
              </Anchor>
            </template>
          </Heading>
        </div>
        <div class="column is-8">
          <WorkExperience
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
import HeadingCV from '~/components/atoms/HeadingCV'
import Anchor from '~/components/atoms/Anchor'
import Curriculum from '~/components/molecules/Curriculum'

export default {
  components: {
    Anchor,
    Heading: HeadingCV,
    Education: Curriculum,
    Skills: Curriculum,
    Tools: Curriculum,
    WorkExperience: Curriculum
  },
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

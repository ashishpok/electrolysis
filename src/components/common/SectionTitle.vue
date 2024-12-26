<template>
  <section :id="sectionId" class="section section-narrow">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const sectionId = computed(() => {
      return props.id || `section-${props.title.toLowerCase().replace(/\s+/g, '-')}`
    })

    return {
      sectionId
    }
  }
}
</script> 
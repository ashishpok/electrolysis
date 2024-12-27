<template>
  <!-- This component doesn't render anything visually -->
</template>

<script>
export default {
  name: 'SeoManager',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    keywords: {
      type: Array,
      default: () => []
    },
    og: {
      type: Object,
      default: () => ({})
    },
    twitter: {
      type: Object,
      default: () => ({})
    }
  },
  created() {
    this.updateMetaTags()
  },
  methods: {
    updateMetaTags() {
      // Update title
      document.title = this.title

      // Update or create meta description
      this.updateMetaTag('description', this.description)

      // Update or create meta keywords
      if (this.keywords.length > 0) {
        this.updateMetaTag('keywords', this.keywords.join(', '))
      }

      // Update OpenGraph tags
      if (this.og) {
        this.updateMetaTag('og:title', this.og.title)
        this.updateMetaTag('og:description', this.og.description)
        this.updateMetaTag('og:image', this.og.image)
        this.updateMetaTag('og:url', this.og.url)
      }

      // Update Twitter Card tags
      if (this.twitter) {
        this.updateMetaTag('twitter:card', this.twitter.card)
        this.updateMetaTag('twitter:title', this.twitter.title)
        this.updateMetaTag('twitter:description', this.twitter.description)
        this.updateMetaTag('twitter:image', this.twitter.image)
      }
    },
    updateMetaTag(name, content) {
      if (!content) return

      let meta = document.querySelector(`meta[name="${name}"]`) ||
                 document.querySelector(`meta[property="${name}"]`)
      
      if (meta) {
        meta.setAttribute('content', content)
      } else {
        meta = document.createElement('meta')
        meta.setAttribute(name.startsWith('og:') ? 'property' : 'name', name)
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    }
  },
  // Update meta tags when props change
  watch: {
    title() { this.updateMetaTags() },
    description() { this.updateMetaTags() },
    keywords() { this.updateMetaTags() },
    og: {
      handler() { this.updateMetaTags() },
      deep: true
    },
    twitter: {
      handler() { this.updateMetaTags() },
      deep: true
    }
  }
}
</script> 
<template>
  <div class="sidebar">
    <div class="widgets-container">
      <!-- Categories Widget -->
      <div class="categories-widget widget-item">
        <h3 class="widget-title">{{ title }}</h3>
        <ul class="mt-3">
          <li v-for="item in navItems" :key="item.id">
            <a :href="item.href" class="border-bottom" style="text-decoration: none;">{{ item.text }}</a>
          </li>
        </ul>
      </div><!--/Categories Widget -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    title: {
      type: String,
      required: true
    },
    navItems: {
      type: Array,
      required: true
    }
  }
}
</script> 
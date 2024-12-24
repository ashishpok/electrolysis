<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="/" class="logo d-flex align-items-center me-auto">
        <img src="/media/logo.png" alt="">
        <h1 class="sitename">Electrolysis Associates</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <template v-for="item in navigation.mainNav" :key="item.text">
            <li :class="{ 'dropdown': item.items, 'listing-dropdown': item.type === 'listing' }">
              <!-- Regular menu item -->
              <a :href="item.link" v-if="!item.items && !item.columns">{{ item.text }}</a>
              
              <!-- Regular dropdown -->
              <template v-else-if="item.items">
                <a href="#"><span>{{ item.text }}</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <template v-for="subItem in item.items" :key="subItem.text">
                    <li :class="{ 'dropdown': subItem.items }">
                      <a :href="subItem.link" v-if="!subItem.items">{{ subItem.text }}</a>
                      <template v-else>
                        <a href="#"><span>{{ subItem.text }}</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                          <li v-for="deepItem in subItem.items" :key="deepItem.text">
                            <a :href="deepItem.link">{{ deepItem.text }}</a>
                          </li>
                        </ul>
                      </template>
                    </li>
                  </template>
                </ul>
              </template>

              <!-- Listing dropdown with columns -->
              <template v-else-if="item.columns">
                <a href="#"><span>{{ item.text }}</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li v-for="(column, index) in item.columns" :key="index">
                    <template v-for="link in column.links" :key="link.text">
                      <a :href="link.link">{{ link.text }}</a>
                    </template>
                  </li>
                </ul>
              </template>
            </li>
          </template>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<script>
import { onMounted, ref } from 'vue';
import navigationData from '@/data/navigation.json';

export default {
  name: 'AppNavbar',
  setup() {
    const navigation = ref(navigationData);

    onMounted(() => {
      // Theme JS initialization will go here
    });

    return {
      navigation
    };
  }
};
</script>
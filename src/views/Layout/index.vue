<script setup>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'
import HeaderFixed from './components/HeaderFixed.vue'
</script>

<template>
  <AppNav />
  <HeaderFixed />
  <AppHeader />
  <router-view />
  <div class="test"></div>
  <AppFooter />
</template>

<style scoped>
.test {
  height: 1200px;
}
</style>

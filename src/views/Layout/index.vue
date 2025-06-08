<script setup>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'
</script>

<template>
  <AppNav />
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<style scoped></style>

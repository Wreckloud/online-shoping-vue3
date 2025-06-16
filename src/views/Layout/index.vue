<script setup>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'
import HeaderFixed from './components/HeaderFixed.vue'
import { useCategoriesStore } from '@/stores/categories'
import { onMounted } from 'vue'

const categories = useCategoriesStore()
onMounted(() => {
  categories.fetchCategoryList()
})
</script>

<template>
  <AppNav />
  <HeaderFixed />
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<style scoped></style>

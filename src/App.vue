<script setup>
import { onMounted } from 'vue'
import { getCategoryServer } from './api/test'
onMounted(async () => {
  const res = await getCategoryServer()
  console.log(res)
})
</script>

<template>
  <el-button type="primary">Primary</el-button>
</template>

<style scoped></style>

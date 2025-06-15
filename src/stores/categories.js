import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryServer } from '@/api/layout'

export const useCategoriesStore = defineStore('categories', () => {
  const categoryList = ref([])
  // 负责拉取数据
  const fetchCategoryList = async () => {
    const res = await getCategoryServer()
    categoryList.value = res.result
  }

  return {
    categoryList,
    fetchCategoryList
  }
})

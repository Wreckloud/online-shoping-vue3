import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getLayoutCategoryServer } from '@/api/layout'

export const useCategoriesStore = defineStore('categories', () => {
  const categoryList = ref([])
  // 负责拉取数据
  const fetchCategoryList = async () => {
    const res = await getLayoutCategoryServer()
    categoryList.value = res.result
  }

  return {
    categoryList,
    fetchCategoryList
  }
})

import { getSubCategoryServer } from '@/api/categories'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useSubCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getSubCategory = async (id = route.params.id) => {
    const res = await getSubCategoryServer(id)
    categoryData.value = res.result
  }

  onMounted(() => {
    getSubCategory()
  })

  onBeforeRouteUpdate((to) => {
    getSubCategory(to.params.id)
  })
  return {
    categoryData
  }
}

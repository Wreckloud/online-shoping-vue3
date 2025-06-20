import request from '@/utils/request'

// 获取二级分类列表
export function getCategoryServer(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}
// 获取分类筛选条件
export function getCategoryFilterServer(id) {
  return request({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}
/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryServer = (data) => {
  return request({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}

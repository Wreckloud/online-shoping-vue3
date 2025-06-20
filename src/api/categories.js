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

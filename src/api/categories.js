import request from '@/utils/request'

// 获取二级分类列表
export function getSubCategoryServer(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}

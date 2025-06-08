import request from '@/utils/request'

export function getCategoryServer() {
  return request({ url: 'home/category/head' })
}

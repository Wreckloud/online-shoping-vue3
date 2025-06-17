import request from '@/utils/request'

// 获取首页导航栏数据
export function getCategoryServer() {
  return request({ url: 'home/category/head' })
}

// 获取首页轮播图
export function getBannerServer() {
  return request({ url: 'home/banner' })
}

// 获取首页新品推荐
export function getNewServer() {
  return request({ url: 'home/new' })
}

// 获取首页人气推荐
export function getHotServer() {
  return request({ url: 'home/hot' })
}

// 获取获取所有商品模块
export function getGoodsServer() {
  return request({ url: 'home/goods' })
}

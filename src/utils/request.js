import axios from 'axios'

// 创建实例
const request = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net', // 接口基础路径
  timeout: 5000 // 超时时间，单位毫秒
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 可以在这统一加 token
    // config.headers.Authorization = `Bearer xxx`
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
request.interceptors.response.use(
  (res) => res.data, // 只返回 data 部分
  (error) => {
    // 错误统一处理
    console.error('请求失败：', error)
    return Promise.reject(error)
  }
)

export default request

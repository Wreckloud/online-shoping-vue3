import request from '@/utils/request'

export const getDetailServer = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

import request from '@/service/request'

// 获取高性价比房源
export const getEntireList = (data = { offset: 0, size: 10 }) => {
  return request.get({
    url: '/entire/list',
    data
  })
}

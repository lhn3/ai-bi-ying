import request from "@/service/request";

//获取高性价比房源
export const getGoodPrice = () => {
  return request.get({
    url: '/home/goodprice'
  })
}

//获取高评分房源
export const getHighScore = () => {
  return request.get({
    url: '/home/highscore'
  })
}

//获取热门目的地
export const getHotArea = () => {
  return request.get({
    url: '/home/discount'
  })
}

//获取推荐目的地
export const getRecommend = () => {
  return request.get({
    url: '/home/hotrecommenddest'
  })
}

//获取向往目的地
export const getLongFor = () => {
  return request.get({
    url: '/home/longfor'
  })
}

//获取plus数据
export const getPlusData = () => {
  return request.get({
    url: '/home/plus'
  })
}



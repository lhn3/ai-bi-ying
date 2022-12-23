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



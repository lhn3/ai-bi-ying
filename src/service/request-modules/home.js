import request from "@/service/request";

export const getHighScore = () => {
  return request.get({
    url: '/home/highscore'
  })
}



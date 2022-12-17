import request from "@/service/request";

export const getGoodPrice = () => {
  return request.get({
    url: '/home/goodprice'
  })
}



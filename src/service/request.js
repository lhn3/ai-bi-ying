import axios from "axios";

class MyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    //拦截器
    // this.instance.interceptors.request.use()
    this.instance.interceptors.response.use(res => {
      return res.data
    }, error => {
      console.log(error)
    })
  }


  get(config) {
    return this.instance.request({...config, method: 'GET', params: config.data || {}})
  }

  post(config) {
    return this.instance.request({...config, method: 'POST'})
  }

}


const baseURL = 'http://codercba.com:1888/airbnb/api'
const timeout = 30000
export default new MyRequest(baseURL, timeout)
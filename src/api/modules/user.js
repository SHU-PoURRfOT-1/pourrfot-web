import request from '../request'
import config from '../config'

export default {
  login: function(data) {
    return request({
      url: config.LOGIN,
      method: 'post',
      data,
      config: {
        loading: document.body,
      },
    })
  },
  getInfo: function(token) {
    return request({
      url: config.GET_USER_INFO,
      method: 'get',
      params: { token },
    })
  },
}

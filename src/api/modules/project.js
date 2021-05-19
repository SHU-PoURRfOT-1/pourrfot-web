import request from '../request'
import config from '../config'

export default {
  getProject: function(data) {
    return request({
      url: config.GET_PROJECT_DATA,
      method: 'get',
      data,
      config: {
        loading: '.loading-area',
      },
    })
  },
}

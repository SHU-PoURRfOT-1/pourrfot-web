import request from '../request'
import config from '../config'

export default {
  getGroup: function(id, query) {
    return request({
      url: `${config.MAIN_GROUP_URL}/${id}/groups/page`,
      method: 'get',
      params: query,
      config: {
        loading: '.loading-area',
      },
    })
  },
}

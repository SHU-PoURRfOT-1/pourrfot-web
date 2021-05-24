import request from '../request'
import config from '../config'

export default {
  getCourse: function(data) {
    return request({
      url: config.GET_COURSE_DATA,
      method: 'get',
      data,
      config: {
        loading: '.main',
      },
    })
  },
  deleteCourse: function(id) {
    return request({
      url: `${config.DELETE_COURSE_DATA}/${id}`,
      method: 'post',
      config: {
        loading: document.body,
      },
    })
  },
  updateCourse: function(id, data) {
    return request({
      url: `${config.UPDATE_COURSE_DATA}/${id}`,
      method: 'post',
      data,
      config: {
        loading: document.body,
      },
    })
  },
  createCourse: function(data) {
    return request({
      url: config.CREATE_COURSE_DATA,
      method: 'post',
      data,
      config: {
        loading: document.body,
      },
    })
  },
}

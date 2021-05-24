import request from '../request'
import config from '../config'

export default {
  getFile: function(query) {
    return request({
      url: config.GET_FILE_DATA,
      method: 'get',
      params: query,
      config: {
        loading: '.loading-area',
      },
    })
  },
  downloadFile: function(id) {
    return request({
      url: `${config.DOWNLOAD_FILE_DATA}/${id}/stream`,
      method: 'get',
      responseType: 'arraybuffer',
    })
  },
  deleteFile: function(id) {
    return request({
      url: `${config.DELETE_FILE_DATA}/${id}`,
      method: 'post',
      config: {
        loading: '.main',
      },
    })
  },
  preUploadFile: function(data) {
    return request({
      url: config.PRE_UPLOAD_FILE,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
      method: 'post',
      config: {
        loading: '.main',
      },
    })
  },
  uploadFile: function(data) {
    return request({
      url: config.UPLOAD_FILE,
      method: 'post',
      data,
      config: {
        loading: '.main',
      },
    })
  },
}

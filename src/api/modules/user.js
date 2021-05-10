import request from '../request'
import config from '../config'

export function login(data) {
  return request({
    url: config.LOGIN,
    method: 'post',
    data,
  })
}

export function getInfo(token) {
  return request({
    url: config.GET_USER_INFO,
    method: 'get',
    params: { token },
  })
}

export function logout() {
  return request({
    url: config.LOGOUT,
    method: 'post',
  })
}

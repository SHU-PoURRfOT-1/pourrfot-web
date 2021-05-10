const BASE_URL = process.env.VUE_APP_BASE_API // url = base url + request url

const user = {
  LOGIN: `${BASE_URL}'/vue-admin-template/user/login'`,
  LOGOUT: `${BASE_URL}/vue-admin-template/user/logout`,
  GET_USER_INFO: `${BASE_URL}/vue-admin-template/user/info`,
}

const config = {
  ...user,
}

export default config

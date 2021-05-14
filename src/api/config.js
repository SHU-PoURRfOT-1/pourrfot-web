const BASE_URL = process.env.NODE_ENV === 'development' ? '/shu' : '/'

const user = {
  LOGIN: `${BASE_URL}/oauth/password-token`,
  LOGOUT: `${BASE_URL}/vue-admin-template/user/logout`,
  GET_USER_INFO: `${BASE_URL}/vue-admin-template/user/info`,
}

const config = {
  ...user,
}

export default config

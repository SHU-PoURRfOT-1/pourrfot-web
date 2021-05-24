const BASE_URL = process.env.NODE_ENV === 'development' ? '/shu' : '/'

const user = {
  LOGIN: `${BASE_URL}/cas/api/oauth/password-token`,
  GET_USER_INFO: `${BASE_URL}/vue-admin-template/user/info`,
}

const course = {
  GET_COURSE_DATA: `${BASE_URL}/api/courses/page`,
  DELETE_COURSE_DATA: `${BASE_URL}/api/courses/delete`,
  CREATE_COURSE_DATA: `${BASE_URL}/api/courses/create`,
  UPDATE_COURSE_DATA: `${BASE_URL}/api/courses/update`,
}

const group = {
  MAIN_GROUP_URL: `${BASE_URL}/api/courses`,
}

const project = {
  GET_PROJECT_DATA: `${BASE_URL}/api/projects/page`,
}

const file = {
  GET_FILE_DATA: `${BASE_URL}/api/files/page`,
  DOWNLOAD_FILE_DATA: `${BASE_URL}/api/files/detail`,
  DELETE_FILE_DATA: `${BASE_URL}/api/files/delete`,
  PRE_UPLOAD_FILE: `${BASE_URL}/api/files/cache`,
  UPLOAD_FILE: `${BASE_URL}/api/files/create`,
}

const config = {
  ...user,
  ...course,
  ...group,
  ...project,
  ...file,
}

export default config

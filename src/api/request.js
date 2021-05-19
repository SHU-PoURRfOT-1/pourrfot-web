import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { showLoading, hideLoading } from '@/utils/loading'
import router from '@/router'

// create an axios instance
const instance = axios.create({
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})
instance.defaults.headers.post['Content-Type'] = 'application/json'
// request interceptor
instance.interceptors.request.use(
  config => {
    // do something before request is sent

    /* show loading when request */
    if (config && config.config.loading) {
      showLoading(config.config.loading)
    }

    if (store.state.user.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
instance.interceptors.response.use(
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    /* hide loading when request finished*/
    const { config } = response.config
    if (config && config.loading) {
      hideLoading()
    }

    const res = response.data

    // if the custom code is not 2xx, it is judged as an error.
    if (res.code.toString().indexOf('2') !== 0) {
      Message({
        message: res.message || 'failed',
        type: 'error',
        duration: 3 * 1000,
      })
    }
    return res
  },
  error => {
    const { config } = error.response.config
    if (config && config.loading) {
      hideLoading()
    }
    const { status } = error.response
    // 401: Unauthorized; 403: Forbidden; 404: Not Found;
    if (status === 401 || status === 403 || status === 404) {
      // to re-login
      MessageBox.confirm(
        'You have been logged out or missed the page, you can cancel to stay on this page, or log in again',
        'Confirm logout',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning',
        }
      ).then(() => {
        store.dispatch('resetToken').then(() => {
          // location.reload()
          router.push({ path: '/login' })
        })
      })
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000,
      })
    }
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default instance

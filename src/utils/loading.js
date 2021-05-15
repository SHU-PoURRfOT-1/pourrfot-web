import { Loading } from 'element-ui'

let loading

function startLoading(target) {
  loading = Loading.service({
    lock: true,
    text: 'Loading....',
    background: 'hsla(0,0%,100%,.9)',
    target: target,
  })
}

function endLoading() {
  loading && loading.close()
}

let needLoadingRequestCount = 0

export function showLoading(target) {
  if (needLoadingRequestCount === 0) {
    startLoading(target)
  }
  needLoadingRequestCount++
}

export function hideLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

import file from '@/api/modules/file'

const state = () => ({
  fileList: [],
  originOssUrl: '',
})

const actions = {
  getFile({ commit }, payload) {
    return new Promise((resolve, reject) => {
      file
        .getFile(payload)
        .then(response => {
          console.log(response)
          const { data } = response
          commit('SET_FILE_DATA', data.records)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  downloadFile({ commit }, id) {
    return new Promise((resolve, reject) => {
      file
        .downloadFile(id)
        .then(response => {
          console.log(response)
          const { data } = response
          commit('SET_FILE_DATA', data.records)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  deleteFile({ commit }, payload) {
    const { index, id } = payload
    return new Promise((resolve, reject) => {
      file
        .deleteFile(id)
        .then(response => {
          console.log(response)
          commit('DELETE_FILE_DATA', index)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  preUploadFile({ commit }, payload) {
    return new Promise((resolve, reject) => {
      file
        .preUploadFile(payload)
        .then(response => {
          console.log(response)
          const { data } = response
          commit('SET_FILE_URL', data)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  uploadFile({ commit }, payload) {
    return new Promise((resolve, reject) => {
      file
        .uploadFile(payload)
        .then(response => {
          console.log(response)
          const { data } = response
          commit('CHANGE_FILE_LIST', data)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}

const mutations = {
  SET_FILE_DATA: (state, fileList) => {
    state.fileList = [...fileList]
  },
  SET_FILE_URL: (state, url) => {
    state.originOssUrl = url
  },
  CHANGE_FILE_LIST: (state, data) => {
    state.fileList.push(data)
  },
  DELETE_FILE_DATA: (state, index) => {
    state.fileList.splice(index, 1)
  },
}

export default {
  state,
  actions,
  mutations,
}

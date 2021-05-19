import course from '@/api/modules/course'

const state = () => ({
  courseList: [],
  courseId: null,
})

const actions = {
  getCourse({ commit }, payload) {
    return new Promise((resolve, reject) => {
      course
        .getCourse(payload)
        .then(response => {
          console.log(response)
          const { data } = response
          commit('SET_COURSE_DATA', data.records)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  updateCourse({ commit }, payload) {
    const { index, data } = payload
    const { id } = data
    return new Promise((resolve, reject) => {
      course
        .updateCourse(id, data)
        .then(response => {
          const { data } = response
          commit('UPDATE_COURSE_DATA', { index, data })
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  createCourse({ commit }, payload) {
    return new Promise((resolve, reject) => {
      course
        .createCourse(payload)
        .then(response => {
          console.log(response)
          const { data } = response
          commit('CREATE_COURSE_DATA', data)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  deleteCourse({ commit }, payload) {
    const { index, id } = payload
    return new Promise((resolve, reject) => {
      course
        .deleteCourse(id)
        .then(response => {
          console.log(response)
          commit('DELETE_COURSE_DATA', index)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}

const mutations = {
  SET_COURSE_DATA: (state, courseList) => {
    state.courseList = [...courseList]
  },
  UPDATE_COURSE_DATA: (state, result) => {
    const { index, data } = result
    state.courseList.splice(index, 1, data)
  },
  CREATE_COURSE_DATA: (state, data) => {
    state.courseList.push(data)
  },
  DELETE_COURSE_DATA: (state, index) => {
    state.courseList.splice(index, 1)
  },
  SET_COURSE_ID: (state, id) => {
    state.courseId = id
  },
}

export default {
  state,
  actions,
  mutations,
}

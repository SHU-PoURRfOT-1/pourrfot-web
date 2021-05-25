import project from '@/api/modules/project'

const state = () => ({
  projectList: [],
})

const actions = {
  getProject({ commit }, payload) {
    return new Promise((resolve, reject) => {
      project
        .getProject(payload)
        .then(response => {
          console.log(response)
          const { data } = response
          commit('GET_PROJECT_DATA', data.records)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}

const mutations = {
  GET_PROJECT_DATA: (state, projectList) => {
    state.projectList = projectList
  },
}

export default {
  state,
  actions,
  mutations,
}

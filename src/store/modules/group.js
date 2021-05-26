import group from '@/api/modules/group'

const state = () => ({
  groupList: [],
  totalGroups: 0,
})

const actions = {
  getGroup({ commit }, payload) {
    const { courseId, query } = payload
    return new Promise((resolve, reject) => {
      group
        .getGroup(courseId, query)
        .then(response => {
          console.log(response)
          const { data } = response
          commit('SET_GROUP_DATA', data.records)
          commit('SET_TOTAL_GROUP_COUNT', data.total)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  createGroup({ commit }, payload) {
    const { courseId } = payload
    return new Promise((resolve, reject) => {
      group
        .createGroup(courseId, payload)
        .then(response => {
          console.log(response)
          const { data } = response
          commit('CREATE_GROUP_DATA', data)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}

const mutations = {
  SET_GROUP_DATA: (state, groupList) => {
    state.groupList = [...groupList]
  },
  SET_TOTAL_GROUP_COUNT: (state, num) => {
    state.totalGroups = num
  },
  CREATE_GROUP_DATA: (state, group) => {
    state.groupList = [...state.groupList, group]
  },
}

export default {
  state,
  actions,
  mutations,
}

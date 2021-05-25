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
}

const mutations = {
  SET_GROUP_DATA: (state, groupList) => {
    state.groupList = [...groupList]
  },
  SET_TOTAL_GROUP_COUNT: (state, num) => {
    state.totalGroups = num
  },
}

export default {
  state,
  actions,
  mutations,
}

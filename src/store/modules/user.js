import user from '@/api/modules/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo: JSON.parse(localStorage.getItem('userInfo')),
    roles: hasRole(),
  }
}

const hasRole = function() {
  const info = JSON.parse(localStorage.getItem('userInfo'))
  if (info && Object.values(info).length > 0 && info.role) {
    return [info.role]
  } else {
    return []
  }
}

const state = getDefaultState()

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      user
        .login(userInfo)
        .then(response => {
          const { data } = response
          const { token, user } = data
          commit('SET_TOKEN', token)
          setToken(token)
          commit('SET_USER_INFO', user)
          commit('SET_ROLES', user.role)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('RESET_ROLES', [])
      removeToken() // must remove  token  first
      resetRouter()
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  },

  //dynamically modify permissions
  // async changeRoles({ commit, dispatch }, role) {
  //   const token = role + '-token'

  //   commit('SET_TOKEN', token)
  //   setToken(token)

  //   const { roles } = await dispatch('getInfo')

  //   resetRouter()

  //   // generate accessible routes map based on roles
  //   const accessRoutes = await dispatch('generateRoutes', roles)
  //   // dynamically add accessible routes
  //   router.addRoute(accessRoutes)
  // },
}

const mutations = {
  RESET_STATE: state => {
    localStorage.removeItem('userInfo')
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_INFO: (state, info) => {
    state.userInfo = info
    localStorage.setItem('userInfo', JSON.stringify(info))
  },
  SET_ROLES: (state, roles) => {
    state.roles = [roles]
  },
  RESET_ROLES: (state, roles) => {
    state.roles = roles
  },
}

export default {
  state,
  mutations,
  actions,
}

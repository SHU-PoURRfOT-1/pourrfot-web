import Cookies from 'js-cookie'

const state = () => ({
  sidebar: {
    opened: Cookies.get('sidebarStatus')
      ? !!+Cookies.get('sidebarStatus')
      : true,
    withoutAnimation: false,
  },
  device: 'desktop',
  size: Cookies.get('size') || 'medium',
  fontSize: Cookies.get('fontSize') || 1,
  bgColor: Cookies.get('color') || '#304156',
})

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  },
  setFontSize({ commit }, fontSize) {
    commit('SET_FONTSIZE', fontSize)
  },
  setColor({ commit }, color) {
    commit('SET_COLOR', color)
  },
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  },
  SET_FONTSIZE: (state, fontSize) => {
    state.fontSize = fontSize
    Cookies.set('fontSize', fontSize)
  },
  SET_COLOR: (state, color) => {
    state.bgColor = color
    Cookies.set('color', color)
  },
}

export default {
  state,
  mutations,
  actions,
}

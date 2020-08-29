import Cookies from 'js-cookie'
import DeviceUtils from "@/utlis/deviceUtils";

const state = {
  lang:  Cookies.get('LANG') || 'zh' ,
  device: DeviceUtils.initDevice()
};

const mutations = {
  SET_DEVICE: (state, device) => {
    state.device = device
  },
  SET_LANG: (state, lang) => {
    state.lang = lang
  }
};

const actions = {
  toggleDevice({ commit }, data){
    commit('SET_DEVICE', data)
  },
  setLanguage({ commit }, data) {
    Cookies.set('LANG', data)
    commit('SET_LANG', data)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

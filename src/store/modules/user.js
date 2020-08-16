import { login, logout, getInfo, refreshToken } from '@/api/login'
import { getToken, getRefreshToken, setToken, setRefreshToken, setExpiresIn, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    refresh_token: getRefreshToken(),
    name: '',
    avatar: '',
    roles: [],
    permissions: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_EXPIRES_IN: (state, time) => {
      state.expires_in = time
    },
    SET_REFRESH_TOKEN: (state, token) => {
      state.refresh_token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      const code = userInfo.code
      const uuid = userInfo.uuid
      return new Promise((resolve, reject) => {
        login(username, password, code, uuid).then(res => {
          setToken(res.access_token)
          commit('SET_TOKEN', res.access_token)
          setRefreshToken(res.refresh_token)
          commit('SET_REFRESH_TOKEN', res.refresh_token)
          setExpiresIn(res.expires_in)
          commit('SET_EXPIRES_IN', res.expires_in)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(res => {
          const user = res.data.user
          const avatar = user.avatar == "" ? require("@/assets/image/avatar.png") : process.env.VUE_APP_OSS_API + user.avatar;
          if (res.data.roles && res.data.roles.length > 0) { // 验证返回的roles是否是一个非空数组 
            commit('SET_ROLES', res.data.roles)
            commit('SET_PERMISSIONS', res.data.permissions)
          } else {
            commit('SET_ROLES', ['ROLE_DEFAULT'])
          }
          commit('SET_NAME', user.userName)
          commit('SET_AVATAR', avatar)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    
    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_PERMISSIONS', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 刷新token
    RefreshToken({commit, state}) {
      return new Promise((resolve, reject) => {
        refreshToken(state.refresh_token).then(res => {
          setToken(res.access_token)
          commit('SET_TOKEN', res.access_token)
          setRefreshToken(res.refresh_token)
          commit('SET_REFRESH_TOKEN', res.refresh_token)
          setExpiresIn(res.expires_in)
          commit('SET_EXPIRES_IN', res.expires_in)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user

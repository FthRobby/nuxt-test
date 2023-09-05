import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user',{
  state: () => ({
    token: null,
    userData: null,
    userRole: null,
    isLoggedIn: false
  }),
  actions: {
    setUserData(data: any) {
      this.userData = data
    },
    setUserRole(role: any) {
      this.userRole = role
    },
    setUserToken(token: any) {
      this.token = token
    },
    setIsLoggedIn(status: boolean) {
      this.isLoggedIn = status
    }
  }
})
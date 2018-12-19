import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user_name:"",
  showAlert: false,
  alertText: "",
}
const action = {

}
const mutations = {
  showAlerttext(state,altertext){
    state.showAlert = true
    state.alertText = altertext
  },
  closeAlert(state){
    state.showAlert = false
    state.alertText = ""   
  },
  setuserinfo(state,user){
    state.user_name = user.user_name
  },

}
export default new Vuex.Store({
  state,
  action,
  mutations,
})

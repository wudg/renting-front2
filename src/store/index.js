import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: { 
    count: 0,
    user: null
  },
  mutations: { 
    increment (state) { 
      state.count++ 
    },
    setUser (state, user) {
        state.user = user
    }
  },
  getters: { 
    getCount: state => state.count 
  },
})
 
export default store
// store/index.js
import { createStore } from 'vuex'
import store from './store'

const store = createStore({
  modules: {
    store
    // Add more modules as needed
  }
})

export default store

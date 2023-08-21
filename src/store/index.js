import { createStore } from 'vuex'
import storeModule from './store'

export default function () {
  // eslint-disable-next-line new-cap
  const Store = new createStore({
    modules: {
      store: storeModule
    }
  })

  return Store
}

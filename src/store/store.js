import app from 'boot/firebase' // firebaseDb
// import { firebaseAuth } from 'boot/firebase'
import { get, getDatabase, ref, set, update } from 'firebase/database'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const auth = getAuth(app)
const Db = getDatabase()
const state = {
  userDetails: {}
}
const mutations = {
  setUserDetails (state, payload) {
    state.userDetails = payload
  }
}
const actions = {
  async RegisterUser (context, info) {
    // console.log(info)
    createUserWithEmailAndPassword(auth, info.email, info.password)
      .then(res => {
        console.log(res)
        const userId = auth.currentUser.uid
        console.log(userId)
        const dataRef = ref(Db, `/users/${userId}`)

        const data = {
          name: info.name,
          email: info.email,
          online: true
        }
        set(dataRef, data)
          .then(() => {
            console.log('Data has been set successfully')
          })
          .catch((error) => {
            console.error('Error setting data:', error)
          })
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  async loginUser (context, info) {
    // console.log(info)
    signInWithEmailAndPassword(auth, info.email, info.password)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  async logoutUser () {
    await signOut(auth)
      .then(result => console.log(result))
      .catch(error => console.log(error))
  },
  async handleAuthStateChange ({ commit, dispatch, state }) {
    const router = useRouter()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = auth.currentUser.uid
        console.log(userId)
        const dataRef = ref(Db, `/users/${userId}`)
        dispatch('firebaseUpdateUser', {
          userId: userId,
          updates: {
            online: true
          }
        })
        get(dataRef).then(snapshot => {
          const userDetails = snapshot.val()
          commit('setUserDetails', {
            name: userDetails.name,
            email: userDetails.email,
            userId
          })
          // console.log('snapshot', snapshot)
        }).catch(error => {
          console.error('Error fetching data:', error)
        })
        router.push('/')
      } else {
        dispatch('firebaseUpdateUser', {
          userId: state.userDetails.userId,
          updates: {
            online: false
          }
        })
        commit('setUserDetails', {})
        router.replace('/auth')
      }
    })
  },
  firebaseUpdateUser (context, payload) {
    const dataRef = ref(Db, `/users/${payload.userId}`)
    update(dataRef, payload.updates)
      .then(() => {
        console.log('Data updated successfully')
      })
      .catch((error) => {
        console.error('Error updating data:', error)
      })
  }

}
const getters = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

import app from 'boot/firebase' // firebaseDb
// import { firebaseAuth } from 'boot/firebase'
import { getDatabase, ref, set } from 'firebase/database'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app)
const Db = getDatabase()
const state = {

}
const mutations = {

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
        // getDatabase.ref('users/' + userId).set({
        //   name: info.name,
        //   email: info.email,
        //   online: true
        // })
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

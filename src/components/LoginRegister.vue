<template lang="">
    <q-form @submit="submitForm">
        <q-input v-if="tab=='register'" class="q-mb-md" outlined v-model="formData.name" label="Name" :dense="dense" />
        <q-input class="q-mb-md" outlined v-model="formData.email" label="Email" :dense="dense" />
        <q-input type="password" class="q-mb-md" outlined v-model="formData.password" label="Password" :dense="dense" />
        <div class="row">
            <q-space></q-space>
            <q-btn type="submit" color="primary" :label="tab"></q-btn>
        </div>
    </q-form>
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    tab: String
  },
  setup (props) {
    const tab = props.tab
    const store = useStore() // Get the store instance

    // Use ref for reactive properties
    const formData = ref({
      name: '',
      email: '123@gmail.com',
      password: '123123123'
    })

    // Destructure the action directly
    // const { RegisterUser } = mapActions('store1', ['RegisterUser'])

    const submitForm = () => {
      if (tab === 'login') {
        store.dispatch('myStore/loginUser', formData.value)
      } else {
        store.dispatch('myStore/RegisterUser', formData.value) // Use store instance to dispatch action
      }
    }

    return {
      formData,
      submitForm
    }
  }
}
</script>
<style lang="">
</style>

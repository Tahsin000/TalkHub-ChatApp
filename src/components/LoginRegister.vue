<template lang="">
    <q-form @submit="submitForm">
        <q-input v-if="tab=='register'" class="q-mb-md" outlined v-model="userData.name" label="Name" :dense="dense" />
        <q-input class="q-mb-md" outlined v-model="userData.email" label="Email" :dense="dense" />
        <q-input class="q-mb-md" outlined v-model="userData.name" label="Name" :dense="dense" />
        <div class="row">
            <q-space></q-space>
            <q-btn type="submit" color="primary" :label="tab"></q-btn>
        </div>
    </q-form>
</template>
<script>
import { ref } from 'vue'
export default {
  props: {
    tab: String
  },
  setup (props) {
    const tab = props.tab
    const userData = ref({
      name: '',
      email: '',
      password: ''
    })
    const submitForm = () => {
      if (tab === 'login') {
        console.log('Login the user')
      } else {
        console.log('register the user')
      }
    }
    return {
      userData, submitForm
    }
  }
}
</script>
<style lang="">
</style>

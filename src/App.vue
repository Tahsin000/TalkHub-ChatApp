<template>
  <router-view />
</template>

<script>
import { useStore } from 'vuex'

// import { defineComponent } from 'vue'

export default {
  setup () {
    const store = useStore()
    store.dispatch('myStore/handleAuthStateChange')
  }
}
</script>

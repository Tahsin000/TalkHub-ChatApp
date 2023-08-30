<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="route.fullPath.includes('/chat')"
          flat
          to="/"
          dense
          icon="arrow_back"
          label="Back"
        />

        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
        <q-btn
          v-if="!userAuhSate.userId"
          dense
          flat
          no-caps
          class="absolute-right q-pr-sm"
          icon="account_circle"
          label="Login"
        />
        <q-btn
          v-else
          @click="logoutUser"
          dense
          flat
          no-caps
          to="/auth"
          class="absolute-right q-pr-sm"
          icon="account_circle">
          Logout <br>{{ userAuhSate.name }}
        </q-btn>

      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const userAuthState = ref([])
    const route = useRoute()
    const title = ref('')
    const page = ref(route)
    const userAuhSate = computed(() => {
      return store.state.myStore.userDetails
    })
    const logoutUser = () => {
      store.dispatch('myStore/logoutUser')
    }
    const updatePageTitle = () => {
      userAuthState.value = store.state.myStore.userDetails
      if (route.fullPath === '/') title.value = 'TalkHub'
      else if (route.fullPath === '/chat') title.value = 'Chat'
      else if (route.fullPath === '/auth') title.value = 'Auth'
    }
    const handleBackBtn = () => {
      page.value.go(-1)
    }
    onMounted(updatePageTitle)

    watch(() => route.fullPath, updatePageTitle)
    return {
      title,
      userAuhSate,
      logoutUser,
      userAuthState,
      route,
      handleBackBtn
    }
  }
}
</script>
<style scoped>
.q-toolbar .q-btn{
    line-height: 1.2;
  }
</style>

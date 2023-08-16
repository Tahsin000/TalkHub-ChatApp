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
          dense
          flat
          no-caps
          to="/auth"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          label="Login"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const route = useRoute()
    const title = ref('')
    const page = ref(route)
    const updatePageTitle = () => {
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
      route,
      handleBackBtn
    }
  }
}
</script>
<style lang="">
</style>

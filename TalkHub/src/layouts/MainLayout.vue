<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
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
    const updatePageTitle = () => {
      if (route.fullPath === '/') title.value = 'TalkHub'
      else if (route.fullPath === '/chat') title.value = 'Chat'
      else if (route.fullPath === '/auth') title.value = 'Auth'
    }
    onMounted(updatePageTitle)

    watch(() => route.fullPath, updatePageTitle)
    return {
      title
    }
  }
}
</script>
<style lang="">
</style>

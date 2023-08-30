<template>
  <q-page class="flex q-pa-md">
    <q-list
    separator
    class="full-width">
      <q-item
        v-for="(user, key) in users"
        :key="key"
        clickable
        v-ripple
        to="/chat"
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user && user.name ? user.name.charAt(0) : '' }}
            <!-- {{ user.name.charAt(0) }} -->
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge :color="user.online ? 'light-green-5':'grey-4'">
            {{ user.online ? 'Online' : 'Offline' }}
          </q-badge>
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { computed } from 'vue'

import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const users = computed(() => {
      return store.getters['myStore/users'] // Replace with your actual getter name
    })
    return {
      users
    }
  }
}
</script>

<style>
</style>

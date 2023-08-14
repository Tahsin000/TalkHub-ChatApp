<template>
  <q-banner class="text-white bg-red text-center">
      user is offline
    </q-banner>
  <q-page class="flex column">
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from =='me'? true: false"
      />
    </div>
    <q-footer elevated class="full-width">
        <q-toolbar>
          <q-form @submit="sendMessage" class="q-flex q-pa-sm">
            <q-input v-model="newMessage" bg-color="white" class="full-width" rounded outlined label="Message" dense>
            </q-input>
            <q-btn round dense flat type="submit" color="white" icon="send" />

          </q-form>
        </q-toolbar>
      </q-footer>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const newMessage = ref('')
    const messages = ref([
      {
        text: 'Hey Jim, How Are You?',
        from: 'me'
      },
      {
        text: 'Good thanks, Danny',
        from: 'them'
      },
      {
        text: '',
        from: 'me'
      }
    ])

    const sendMessage = () => {
      console.log(newMessage.value)
      messages.value.push({
        text: newMessage.value,
        from: 'me'
      })
    }

    return {
      messages,
      sendMessage,
      newMessage
    }
  }
}
</script>
<style>
.q-flex{
  display: flex;
  width: 100%;
}
</style>

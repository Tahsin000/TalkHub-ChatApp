<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p class="display_100" :style="{color: $store.state.colorCode}">count is {{ $store.state.count }}</p>
    <div class="count-squared">
      {{ $store.state.count }}
      <sup>2</sup> = {{ $store.getters.counterSqre }}
    </div>
    <div class="_flex">
      <button type="button" @click="$store.dispatch('decreaseCounter')">-</button>
      <button type="button" @click="$store.dispatch('increaseCounter')">+</button>
    </div>
  </div>
  <input placeholder="Enter color code" v-model="$store.state.colorCode" type="text">
</template>

<script>

import { ref } from "vue";
export default {
  props:{
    msg: String
  },
  computed:{
    colorCode:{
      get(){
        return this.$store.state.colorCode
      },
      set(newValue){
        this.$store.dispatch('setColorCode', newValue)
      }
    }
  }
}

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
._flex {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.display_100 {
  font-size: 3rem;
  font-weight: 300;
}
</style>

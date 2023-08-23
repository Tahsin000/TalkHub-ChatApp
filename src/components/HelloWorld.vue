<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p class="display_100">count is {{ $store.state.count }}</p>
    <div class="_flex">
      <button type="button" @click="$store.state.count--">-</button>
      <button type="button" @click="$store.state.count++">+</button>
    </div>
  </div>
</template>

<script>

import { ref } from "vue";
export default {
  props:{
    msg: String
  },
  setup(){
  
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

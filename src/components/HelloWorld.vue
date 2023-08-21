<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p class="display_100">count is {{ count }}</p>
    <div class="_flex">
      <button type="button" @click="count--">-</button>
      <button type="button" @click="count++">+</button>
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
  
  const count = ref(0);
    return{
      count
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

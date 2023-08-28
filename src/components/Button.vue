<template lang="">
  <div class="_flex">
    <button type="button" @click="$store.dispatch('decreaseCounter')">-</button>
    <button type="button" @click="$store.dispatch('increaseCounter')">+</button>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>

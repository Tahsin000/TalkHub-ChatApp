<template>
  <div class="count-squared">
    {{ $store.state.count }}
    <sup>2</sup> = {{ $store.getters.counterSqre }}
  </div>
</template>

<script>
export default {};
</script>

<style></style>
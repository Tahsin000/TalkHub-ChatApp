<template lang="">
  <input
    placeholder="Enter color code"
    v-model="$store.state.colorCode"
    type="text"
  />
</template>
<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
};
</script>
<style lang=""></style>

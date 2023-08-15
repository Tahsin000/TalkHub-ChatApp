<template lang="">
    <q-form>
        <q-input outlined v-model="text" label="Label" :dense="dense" />
    </q-form>
</template>
<script>
export default {
  props: {
    tab: String
  }
}
</script>
<style lang="">
</style>

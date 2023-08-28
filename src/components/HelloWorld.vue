<template>
  <h1>{{ msg }}</h1>
  <Counter />
  <div class="card">
    <CounterSquar/>
    <Btn />
  </div>
  <ColorCode />
</template>

<script>
import Counter from "./Counter.vue"; // Import the Counter component directly
import CounterSquar from "./CounterSquar.vue"; // Import the Counter component directly
import Btn from "./Button.vue"; // Import the Counter component directly
import ColorCode from "./ColorCode.vue"; // Import the Counter component directly

export default {
  props: {
    msg: String,
  },
  components: {
    Counter,
    CounterSquar,
    ColorCode,
    Btn
  },
};
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

<template>
  <div class="greetings">
    <h2 v-change-color="'red'" class="text-center">Червоний</h2>
    <h2 v-change-color="'green'" class="text-center">Зелений</h2>
    <h2 v-change-color="'blue'" class="text-center">Синій</h2>
  </div>
</template>

<script>
import ChangeColor from '@/directives/ColorDirective.js'
export default {
  name: "BasicDirective",
  directives: {
    ChangeColor
  }
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

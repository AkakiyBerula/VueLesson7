<template>
  <div class="greetings">
    <h1 class="green text-center">Директиви</h1>
    <BaseDirective />
    <TextDirective />
  </div>
</template>

<script>
import BaseDirective from './directive-components/BaseDirective.vue'
import TextDirective from './directive-components/TextDirective.vue'
export default {
  name: "Directives",
  components: {
    BaseDirective,
    TextDirective
  }
}
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

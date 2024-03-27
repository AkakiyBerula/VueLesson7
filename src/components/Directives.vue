<template>
  <div class="greetings">
    <h1 class="green text-center">Директиви</h1>
    <BaseDirective />
    <TextDirective />
    <TooltipDirective />
    <DragDirective />
  </div>
</template>

<script>
import BaseDirective from './directive-components/BaseDirective.vue'
import DragDirectiveVue from './directive-components/DragDirective.vue';
import TextDirective from './directive-components/TextDirective.vue'
import TooltipDirective from './directive-components/TooltipDirective.vue';
import DragDirective from "./directive-components/DragDirective.vue"

export default {
  name: "Directives",
  components: {
    BaseDirective,
    TextDirective,
    TooltipDirective,
    DragDirective
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

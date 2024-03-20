<template>
  <div class="greetings">
    <h1 class="green  text-center">Міксіни</h1>
    <BaseMixin />
  </div>
</template>

<script>
import BaseMixin from "../components/mixin-components/BaseMixin.vue"

export default {
  name: "Mixins",
  components: {
    BaseMixin
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

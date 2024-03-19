<template>
  <div class="text-container text-center">
    <v-container fluid class="bg-info">
      <v-card-text class="text">
        <p> Перший компонент </p>
      </v-card-text>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'FirstBaseComp'
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

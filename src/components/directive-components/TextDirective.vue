<template>
  <div class="greetings">
    <p v-text-style="{ bold: false, italic: false }" class="text-center">Normal</p>
    <p v-text-style="{ bold: true, italic: false }" class="text-center">Bold</p>
    <p v-text-style="{ bold: false, italic: true }" class="text-center">Italic</p>
    <p v-text-style="{ bold: true, italic: true }" class="text-center">Bold Italic</p>
  </div>
</template>

<script>
import TextStyle from '@/directives/TextDirective.js'
export default {
  name: "TextDirective",
  directives: {
    TextStyle
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

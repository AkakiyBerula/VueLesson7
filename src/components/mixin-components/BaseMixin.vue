<template>
  <v-app>
    <v-container class="text-center">
      <h2>Лічильник: {{ counter }}</h2>
      <p> Повідомлення: {{ message }}</p>
      <p> Довжина рядка: {{ countLength }}</p>

      <v-btn @click="decrement" color="danger">-</v-btn>
      <v-btn @click="increment" color="success">+</v-btn>
      <v-text-field v-model="message" label="New Message"></v-text-field>
    </v-container>
  </v-app>
</template>

<script>
import { counterMixin } from '../mixins/counterMixin.js';

export default {
  name: 'Counter',
  mixins: [counterMixin],
};
</script>



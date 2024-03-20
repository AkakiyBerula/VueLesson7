<template>
  <v-app>
    <v-container class="text-center">
      <h2>Лічильник: {{ counter }}</h2>
      <p> Повідомлення: {{ message }}</p>
      <p> Довжина рядка: {{ countLength }}</p>

      <v-btn @click="decrement" color="danger">-</v-btn>
      <v-btn @click="increment" color="success">+</v-btn>
      <v-text-field v-model="message" label="New Message"></v-text-field>
      <v-btn @click="destroyComponent" color="danger">Знищити компонент</v-btn>
    </v-container>
  </v-app>
</template>

<script>
import { counterMixin } from '../mixins/counterMixin.js';
import { lifeCycleMixin } from '../mixins/lifeCycleMixin.js'

export default {
  name: 'Counter',
  mixins: [counterMixin, lifeCycleMixin],
  methods: {
    destroyComponent() {
      const parent = this.$el.parentNode;
      if (parent) {
        parent.removeChild(this.$el);
      }
      this.$destroy();
    }
  }
};
</script>



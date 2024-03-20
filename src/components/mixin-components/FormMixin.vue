<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="formData.name" label="Електронна пошта" required :error-messages="errors.email"></v-text-field>
      <v-text-field v-model="formData.email" label="Пароль" required :error-messages="errors.password"></v-text-field>
      <v-btn type="submit" color="primary">Надіслати</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { formMixin } from '../mixins/formMixin.js';

export default {
  name: "Login",
  mixins: [formMixin]
};
</script>

<style>

</style>



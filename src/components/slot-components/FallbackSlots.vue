<template>
  <v-card>
    <div class="header">
      <slot name="header">
        <v-card-title class="headline">Визначіть контент для header</v-card-title>
      </slot>
    </div>
    <div class="content">
      <slot name="content">
        <v-card-text>Визначіть контент для content</v-card-text>
      </slot>
    </div>
    <div class="footer">
      <slot name="footer">
        <v-card-actions>
          <v-card-text>Визначіть контент для footer</v-card-text>
        </v-card-actions>
      </slot>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'NamedSlots'
}
</script>

<style scoped>
.header, .content, .footer {
  margin-bottom: 10px;
  text-align: center;
}
</style>


<template>
  <v-card>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
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


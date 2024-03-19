<template>
    <v-card>
      <v-card-title>
        <slot name="header"></slot>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <slot name="content"></slot>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <slot name="footer"></slot>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: 'ModalSlots',
  props: ["header", "content", "footer"]
}
</script>

<style scoped>
.header, .content, .footer {
  margin-bottom: 10px;
  text-align: center;
}
</style>




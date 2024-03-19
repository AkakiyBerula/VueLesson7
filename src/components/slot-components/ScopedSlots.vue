<template>
  <div class="bg-success text-center">
    <slot :data="message"></slot>
  </div>
</template>

<script>
export default {  
  name: 'ScopedSlots',
  data() {
    return {
      message: 'Дані з дочірнього компонента!!!'
    }
  }
}
</script>

<style scoped>
.header, .content, .footer {
  margin-bottom: 10px;
  text-align: center;
}
</style>


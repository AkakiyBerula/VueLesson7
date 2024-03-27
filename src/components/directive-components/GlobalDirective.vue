<template>
  <div>
    <div v-green-bg class="global">
      <p>Блок з глобальною директивою зеленого фону</p>
    </div>
    <div class="global">
      <p>Звичайний блок</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "GlobalDirective"
};
</script>


<style>
.global {
  width: 150px;
  height: 100px;
  background-color: red;
  position: relative;
  margin-bottom: 15px
}

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

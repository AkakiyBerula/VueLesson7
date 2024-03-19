<template>
  <div class="greetings">
    <h1 class="green text-center">Слоти</h1>
    <SingleSlot>
      <template v-slot:default>
        <FirstBaseComp />
      </template>
    </SingleSlot>

    <div class="spacer"></div>

    <SingleSlot>
      <template v-slot:default>
        <SecondBaseComp />
      </template>
    </SingleSlot>
  </div>
</template>

<script>
import SingleSlot from '../components/slot-components/SingleSlot.vue';
import FirstBaseComp from '../components/slot-components/FirstBaseComp.vue';
import SecondBaseComp from '../components/slot-components/SecondBaseComp.vue';

export default {
  name: "Slots",
  components: {
    SingleSlot,
    FirstBaseComp,
    SecondBaseComp
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.spacer {
  height: 20px; /* Встановіть висоту відступу за вашими потребами */
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

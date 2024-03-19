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

    <div>
    <NamedSlots>
      <template v-slot:header>
        <v-card-title class="headline">Header</v-card-title>
      </template>
      <template v-slot:content>
        <v-card-text>Довільний вміст</v-card-text>
      </template>
      <template v-slot:footer>
        <v-card-text>Footer</v-card-text>
      </template>
    </NamedSlots>
  </div>
  </div>
</template>

<script>
import SingleSlot from '../components/slot-components/SingleSlot.vue';
import FirstBaseComp from '../components/slot-components/FirstBaseComp.vue';
import SecondBaseComp from '../components/slot-components/SecondBaseComp.vue';
import NamedSlots from '../components/slot-components/NamedSlots.vue'

export default {
  name: "Slots",
  components: {
    SingleSlot,
    FirstBaseComp,
    SecondBaseComp,
    NamedSlots
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

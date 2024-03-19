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

    <div>
      <FallbackSlots>
        <template v-slot:header>
          <h2>Заголовок визначено</h2>
        </template>
        <template v-slot:content>
        </template>
        <template v-slot:footer>
          <p>Підвал визначено</p>
        </template>
      </FallbackSlots>
    </div>
    <div>
      <ScopedSlots >
        <template v-slot="message">
          <div><p>{{ message.data }}</p></div>
        </template>
      </ScopedSlots>
    </div>
  </div>
</template>

<script>
import SingleSlot from '../components/slot-components/SingleSlot.vue';
import FirstBaseComp from '../components/slot-components/FirstBaseComp.vue';
import SecondBaseComp from '../components/slot-components/SecondBaseComp.vue';
import NamedSlots from '../components/slot-components/NamedSlots.vue'
import FallbackSlots from '../components/slot-components/FallbackSlots.vue'
import ScopedSlots from '../components/slot-components/ScopedSlots.vue'

export default {
  name: "Slots",
  data() {
    return {
      childData: ''
    }
  },
  components: {
    SingleSlot,
    FirstBaseComp,
    SecondBaseComp,
    NamedSlots,
    FallbackSlots,
    ScopedSlots
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
  height: 20px;
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

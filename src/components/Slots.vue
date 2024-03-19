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
    <div>
      <v-text-field label="Header" v-model="header"></v-text-field>
      <v-text-field label="Content" v-model="content"></v-text-field>
      <v-text-field label="Footer" v-model="footer"></v-text-field>
      <ModalSlots :header="header" :content="content" :footer="footer" ref="namedSlotsModal">
        <template v-slot:header>
          <v-card-title class="headline">Header: {{ header }}</v-card-title>
        </template>
        <template v-slot:content>
          <v-card-text>Content: {{ content }}</v-card-text>
        </template>
        <template v-slot:footer>
          <v-card-actions>
            <v-card-text>Footer: {{ footer }}</v-card-text>
          </v-card-actions>
        </template>
      </ModalSlots>
    </div>
  </div>
</template>

<script>
import SingleSlot from '../components/slot-components/SingleSlot.vue';
import FirstBaseComp from '../components/slot-components/FirstBaseComp.vue';
import SecondBaseComp from '../components/slot-components/SecondBaseComp.vue';
import NamedSlots from '../components/slot-components/NamedSlots.vue'
import FallbackSlots from '../components/slot-components/FallbackSlots.vue'
import ScopedSlots from '../components/slot-components/ScopedSlots.vue';
import ModalSlots from './slot-components/ModalSlots.vue';

export default {
  name: "Slots",
  data() {
    return {
      childData: '',
      isModalVisible: false,
      header: '',
      content: '',
      footer: ''
    }
  },
  components: {
    SingleSlot,
    FirstBaseComp,
    SecondBaseComp,
    NamedSlots,
    FallbackSlots,
    ScopedSlots,
    ModalSlots
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

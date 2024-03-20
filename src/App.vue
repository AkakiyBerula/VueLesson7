<template>
  <div>
    <v-tabs
      v-model="tab"
      align-tabs="end"
      color="deep-purple-accent-4"
    >
      <div @click="redirectTo('hello')">
        <v-tab :value="1">Hello User</v-tab>
      </div>
      <div @click="redirectTo('slots')">
        <v-tab :value="2">Slots</v-tab>
      </div>
      <div @click="redirectTo('mixins')">
        <v-tab :value="3">Mixins</v-tab>
      </div>
      <div @click="redirectTo('directives')">
        <v-tab :value="4">Directives</v-tab>
      </div>
    </v-tabs>
    
    <router-view/>
    
  </div>
</template>

<script>
import { lifeCycleMixin } from '@/components/mixins/lifeCycleMixin.js'

export default {
  name: 'App',
  mixins: [lifeCycleMixin],
  methods: {
    redirectTo(nameRoute) {
      const routeExists = this.$router.hasRoute(nameRoute);
      if (routeExists) {
        this.$router.push({ name: nameRoute });
      } else {
        this.$router.push({ name: 'not-found' });
      }
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

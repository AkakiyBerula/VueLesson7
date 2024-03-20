

export const lifeCycleMixin = {
    created() {
        console.log('Component created:', this.$options.name);
    },
    destroyed() {
        console.log('Component destroyed:', this.$options.name);
    }
  };
  
<template>
  <div>
    <div v-tooltip class="tool">Наведіть курсор миші
      <div><p>Прихований вміст. Ви знайшли його. </p></div>
    </div>
  </div>
</template>

<script>
import Tooltip from '@/directives/TooltipDirective.js';

export default {
  name: "TooltipDirective",
  directives: {
    Tooltip
  }
};
</script>


<style>
.tool {
  width: 150px;
  height: 100px;
  background-color: green;
  color: yellow;
  position: relative;
  margin-bottom: 15px
}

.tooltip {
  position: absolute;
  background-color: black;
  color: white;
  visibility: hidden;
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

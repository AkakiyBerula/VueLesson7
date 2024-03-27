<template>
  <div>
    <div class="not-drag">Блок не перетягнути</div>
    <div class="drag" v-drag-element>Блок для перетягування</div>
  </div>
  
  
</template>

<script>
import DragElement from "@/directives/DragDirective";

export default {
  name: "DragElement",
  directives: {
    DragElement
  }
};
</script>

<style scoped>
.not-drag {
  width: 150px;
  height: 100px;
  background-color: burlywood;
}
.drag {
  width: 150px;
  height: 100px;
  background-color: lightblue;
  border: 1px solid black;
  cursor: move;
  position: relative;
}
</style>


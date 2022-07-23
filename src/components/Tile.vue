<template>
  <div class="border border-white aspect-square" :class="chooseBackground(props.color)" @click="swapWithClick(props.id)"></div>
</template>

<script setup lang="ts">
import { inject } from 'vue';


const props = defineProps({
  color: {
    type: String,
    default: "black"
  },
  id: {
    type: Number,
    required: true
  }
});

const swapWithClick = inject<Function>('swapWithClick', () => {});

const chooseBackground = (color: string) => {
  switch (color) {
    case "black":
      return "bg-black";
    case "yellow":
      return "bg-solwr-yellow";
    case "white":
      return "bg-white";
    default:
      return "bg-solwr-black";
  }
};
</script>

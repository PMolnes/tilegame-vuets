<template>
  <div class="border aspect-square" :class="chooseBackground(props.color)"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: "black",
  },
});

const chooseBackground = (color: string) => {
  switch (color) {
    case "black":
      return "bg-black";
    case "yellow":
      return "bg-solwr-yellow";
    default:
      return "bg-solwr-black";
  }
};
</script>

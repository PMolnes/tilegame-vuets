<template>
  <div class="grid grid-cols-7">
    <Tile v-for="tile in tiles" :color="tile"/>
  </div>
</template>

<script setup lang="ts">
import Tile from "./Tile.vue";

const tiles = [
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
  "yellow",
  "yellow",
  "yellow",
  "yellow",
  "black",
  "black",
  "yellow",
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
  "yellow",
  "yellow",
  "yellow",
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
  "yellow",
  "black",
  "black",
  "yellow",
  "yellow",
  "yellow",
  "yellow",
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
];
</script>

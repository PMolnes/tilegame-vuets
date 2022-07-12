<template>
  <div class="grid grid-cols-7 max-w-lg">
    <TileVue :key="tile.id" v-for="tile in props.tiles" :color="tile.color"/>
  </div>
</template>

<script setup lang="ts">
import type { Tile } from "src/types/tile";
import TileVue from "./Tile.vue";

const props = defineProps<{
  tiles: Tile[];
}>();
setTimeout(() => { console.log(props.tiles) }, 5000)
</script>

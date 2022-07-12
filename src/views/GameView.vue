<template>
  <div class="flex flex-col items-center gap-8">
    <SolveTimer />
    <TileBoard class="mb-2 w-full" :tiles="tiles" />
    <button
      @click="shuffle"
      class="bg-solwr-yellow text-black p-2 px-4 w-full max-w-lg"
    >
      SHUFFLE
    </button>
  </div>
</template>

<script setup lang="ts">
import TileBoard from "../components/TileBoard.vue";
import SolveTimer from "../components/SolveTimer.vue";
import { useGameCounterStore } from "../stores/gameCounter";
import { ref } from "vue";
import type { Tile } from "src/types/tile";

let gameCounter: any;
const running = ref(false);

gameCounter = useGameCounterStore();

const shuffle = () => {
  if (running.value) return;
  getLastTile().color = "white";
  let array = tiles.value;
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  tiles.value = array;
  running.value = true;
  gameCounter.startTimer(running);
};

const yellowTileIndices = [9, 10, 11, 12, 15, 23, 24, 25, 33, 36, 37, 38, 39];

const createTiles = () => {
  const originalTiles: Tile[] = [];
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if (yellowTileIndices.includes(i * 7 + j)) {
        originalTiles.push({
          id: i * 7 + j,
          color: "yellow",
        });
      } else {
        originalTiles.push({
          id: i * 7 + j,
          color: "black",
        });
      }
    }
  }
  return originalTiles;
};

let tiles = ref<Tile[]>(createTiles());

const getLastTile = () => {
  return tiles.value[tiles.value.length - 1];
};
</script>

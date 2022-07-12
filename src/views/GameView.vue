<template>
  <div class="flex flex-col items-center">
    <SolveTimer />
    <TileBoard class="mb-2 w-full" :tiles="tiles2" />
    <button
      @click="shuffle"
      class="bg-solwr-yellow text-black p-2 px-4 w-full"
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
  let array = tiles2;
  for (let i = 50 - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  tiles2 = array;
  console.log(tiles)
  running.value = true;
  gameCounter.startTimer(running);
}

let tiles2 = <Tile[]>([
  {
    index: 1,
    color: "black",
  },
  {
    index: 2,
    color: "black",
  },
  {
    index: 3,
    color: "black",
  },
  {
    index: 4,
    color: "black",
  },
  {
    index: 5,
    color: "black",
  },
  {
    index: 6,
    color: "black",
  },
  {
    index: 7,
    color: "black",
  },
  {
    index: 8,
    color: "black",
  },
  {
    index: 9,
    color: "black",
  },
  {
    index: 10,
    color: "yellow",
  },
  {
    index: 11,
    color: "yellow",
  },
  {
    index: 12,
    color: "yellow",
  },
  {
    index: 13,
    color: "yellow",
  },
  {
    index: 14,
    color: "black",
  },
  {
    index: 15,
    color: "black",
  },
  {
    index: 16,
    color: "yellow",
  },
  {
    index: 17,
    color: "black",
  },
  {
    index: 18,
    color: "black",
  },
  {
    index: 19,
    color: "black",
  },
  {
    index: 20,
    color: "black",
  },
  {
    index: 21,
    color: "black",
  },
  {
    index: 22,
    color: "black",
  },
  {
    index: 23,
    color: "black",
  },
  {
    index: 24,
    color: "yellow",
  },
  {
    index: 25,
    color: "yellow",
  },
  {
    index: 26,
    color: "yellow",
  },
  {
    index: 27,
    color: "black",
  },
  {
    index: 28,
    color: "black",
  },
  {
    index: 29,
    color: "black",
  },
  {
    index: 30,
    color: "black",
  },
  {
    index: 31,
    color: "black",
  },
  {
    index: 32,
    color: "black",
  },
  {
    index: 33,
    color: "black",
  },
  {
    index: 34,
    color: "yellow",
  },
  {
    index: 35,
    color: "black",
  },
  {
    index: 36,
    color: "black",
  },
  {
    index: 37,
    color: "yellow",
  },
  {
    index: 38,
    color: "yellow",
  },
  {
    index: 39,
    color: "yellow",
  },
  {
    index: 40,
    color: "yellow",
  },
  {
    index: 41,
    color: "black",
  },
  {
    index: 42,
    color: "black",
  },
  {
    index: 43,
    color: "black",
  },
  {
    index: 44,
    color: "black",
  },
  {
    index: 45,
    color: "black",
  },
  {
    index: 46,
    color: "black",
  },
  {
    index: 47,
    color: "black",
  },
  {
    index: 48,
    color: "black",
  },
  {
    index: 49,
    color: "black",
  },
]);

let tiles = ref([
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
]);

</script>

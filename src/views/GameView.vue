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
  let array = tiles2.value;
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  tiles2.value = [...array];
  running.value = true;
  gameCounter.startTimer(running);
}

const createTile = () => {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      tiles2.value.push({
        id: i * 7 + j,
        color: "black",
      });
    }
  }
}

let tiles2 = ref<Tile[]>([
  {
    id: 1,
    color: 'black'
  },
  {
    id: 2,
    color: 'black'
  },
  {
    id: 3,
    color: 'black'
  },
  {
    id: 4,
    color: 'black'
  },
  {
    id: 5,
    color: 'black'
  },
  {
    id: 6,
    color: 'black'
  },
  {
    id: 7,
    color: 'black'
  },
  {
    id: 8,
    color: 'black'
  },
  {
    id: 9,
    color: 'black'
  },
  {
    id: 10,
    color: 'yellow'
  },
  {
    id: 11,
    color: 'yellow'
  },
  {
    id: 12,
    color: 'yellow'
  },
  {
    id: 13,
    color: 'yellow'
  },
  {
    id: 14,
    color: 'black'
  },
  {
    id: 15,
    color: 'black'
  },
  {
    id: 16,
    color: 'yellow'
  },
  {
    id: 17,
    color: 'black'
  },
  {
    id: 18,
    color: 'black'
  },
  {
    id: 19,
    color: 'black'
  },
  {
    id: 20,
    color: 'black'
  },
  {
    id: 21,
    color: 'black'
  },
  {
    id: 22,
    color: 'black'
  },
  {
    id: 23,
    color: 'black'
  },
  {
    id: 24,
    color: 'yellow'
  },
  {
    id: 25,
    color: 'yellow'
  },
  {
    id: 26,
    color: 'yellow'
  },
  {
    id: 27,
    color: 'black'
  },
  {
    id: 28,
    color: 'black'
  },
  {
    id: 29,
    color: 'black'
  },
  {
    id: 30,
    color: 'black'
  },
  {
    id: 31,
    color: 'black'
  },
  {
    id: 32,
    color: 'black'
  },
  {
    id: 33,
    color: 'black'
  },
  {
    id: 34,
    color: 'yellow'
  },
  {
    id: 35,
    color: 'black'
  },
  {
    id: 36,
    color: 'black'
  },
  {
    id: 37,
    color: 'yellow'
  },
  {
    id: 38,
    color: 'yellow'
  },
  {
    id: 39,
    color: 'yellow'
  },
  {
    id: 40,
    color: 'yellow'
  },
  {
    id: 41,
    color: 'black'
  },
  {
    id: 42,
    color: 'black'
  },
  {
    id: 43,
    color: 'black'
  },
  {
    id: 44,
    color: 'black'
  },
  {
    id: 45,
    color: 'black'
  },
  {
    id: 46,
    color: 'black'
  },
  {
    id: 47,
    color: 'black'
  },
  {
    id: 48,
    color: 'black'
  },
  {
    id: 49,
    color: 'black'
  }
]);

</script>

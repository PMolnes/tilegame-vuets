<template>
  <div class="flex flex-col items-center">
    <SolveTimer />
    <TileBoard class="mb-2 w-full" />
    <button
      @click="gameCounter.startTimer(running)"
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
import { onMounted, ref } from "vue";

let gameCounter: any;
const running = ref(true);

gameCounter = useGameCounterStore();
</script>

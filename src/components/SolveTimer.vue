<template>
  <div class="text-center my-4">
    <p>MOVES: {{ gameCounter.moveCounter }}</p>
    <TimeDisplay :time="gameCounter.timeCounter" />
  </div>
</template>

<script setup lang="ts">
import { useGameCounterStore } from '../stores/gameCounter';
import TimeDisplay from './TimeDisplay.vue';

const gameCounter = useGameCounterStore();
</script>

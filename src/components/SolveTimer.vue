<template>
  <div class="text-center">
    <p>MOVES: {{ gameCounter.moveCounter }}</p>
    <span>{{("0" + Math.floor((gameCounter.timeCounter / 60000) % 60)).slice(-2)}}:</span>
    <span>{{("0" + Math.floor((gameCounter.timeCounter / 1000) % 60)).slice(-2)}}:</span>
    <span>{{("0" + ((gameCounter.timeCounter / 10) % 100)).slice(-2)}}</span>
  </div>
</template>

<script setup lang="ts">
import { useGameCounterStore } from '../stores/gameCounter';

const gameCounter = useGameCounterStore();
</script>

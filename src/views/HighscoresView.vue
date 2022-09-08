<template>
 <div class="w-full h-full justify-evenly flex flex-col items-center gap-2">
  <HighscoreTable :data="topFiveByMoves" measure="score" title="MOVES" />
  <HighscoreTable :data="topFiveByTime" measure="time" title="TIME" />
 </div>
</template>

<script setup lang="ts">
import { getTopFive } from '../database';
import HighscoreTable from '../components/HighscoreTable.vue';

let topFiveByMoves = getTopFive('score');
let topFiveByTime = getTopFive('time');
</script>
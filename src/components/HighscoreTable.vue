<template>
  <div class="flex flex-col items-center">
    <h3 class="text-3xl underline underline-offset-4">LEAST {{ title }}</h3>
    <ol>
      <li :key="index" v-for="(userScore, index) in data">
        <div v-if="measure === 'score'">{{ index + 1 }}. {{ userScore.name }} | {{ userScore.score }}</div>
        <div v-else>{{ index + 1 }}. {{ userScore.name }} | <TimeDisplay :time="userScore.time" /></div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import type { UserScore } from "src/types/userScore";
import TimeDisplay from "./TimeDisplay.vue";

const props = defineProps<{
  measure: string;
  title: string;
  data: UserScore[]
}>();
</script>

<!-- 
  pass in data as UserScore[]
 -->

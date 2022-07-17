<template>
  <button v-if="!props.solved" class="bg-solwr-yellow text-black p-2 px-4 w-full max-w-lg">{{ buttonText }}</button>
  <div v-else-if="props.solved" class="flex flexcol gap-2">
    <button class="bg-solwr-yellow text-black p-2 px-4 w-full max-w-lg">{{ buttonText }}</button>
    <button class="bg-solwr-yellow text-black p-2 px-4 w-full max-w-lg">SAVE HIGHSCORE</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps([
  'solved'
])

const buttonText = computed(() => {
  if (props.solved.value) return "PLAY AGAIN";
  return "SHUFFLE";
});
</script>
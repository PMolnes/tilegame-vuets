<template>
  <button
    v-if="props.solved"
    class="bg-solwr-yellow text-black p-2 px-4 w-full max-w-lg"
    @click="toggleModal"
  >
    SAVE HIGHSCORE
  </button>
  <div v-if="isOpen" class="flex justify-center items-center w-full h-full bg-black fixed top-0 left-0 opacity-75 z-10">
    <dialog class="bg-white w-3/4 h-4/5" open v-if="isOpen">
      <h1>Hello</h1>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let isOpen = ref(false);

const toggleModal = () => {
  isOpen.value = !isOpen.value;
}

const props = defineProps<{
  solved: boolean | undefined
}>()
</script>

<template>
  <div v-if="isOpen"
    class="flex justify-center items-center w-full h-full bg-black fixed top-0 left-0 bg-opacity-75 z-10">
    <dialog class="flex flex-col gap-4 bg-solwr-yellow opacity-95 max-w-lg w-3/4 h-2/5" open v-if="isOpen">
      <button class="self-end" @click="closeModal">
        &#x2715
      </button>
      <input @input="name = name.toUpperCase()" v-model="name" maxlength="3" placeholder="NAME" id="name" type="text"
        class="text-7xl h-1/2 text-center bg-white border border-black rounded-sm focus:outline-none" />
      <button @click="saveHighscore" class="h-1/2 border border-black bg-white text-black text-7xl">SAVE</button>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useGameCounterStore } from '../stores/gameCounter';
import router from '../router';

let name = ref('');
const gameStore = useGameCounterStore();

const emit = defineEmits<{
  (e: 'close'): void 
}>();

const props = defineProps<{
  isOpen: boolean
}>();

const closeModal = () => {
  emit("close");
};

const saveHighscore = () => {
  axios.post('https://solwrsolwr-2a286-default-rtdb.europe-west1.firebasedatabase.app/highscores.json', {
    name: name.value,
    score: gameStore.moveCounter,
    time: gameStore.timeCounter
  }).then(response => {
    if (response.status === 200) {
      router.push('highscores');
    }
  })
}
</script>

<template>
  <div class="flex flex-col items-center">
    <SolveTimer />
    <div class="w-full max-w-lg flex flex-col items-center">
      <transition
        mode="out-in"
        enter-active-class="duration-500 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-500 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
      >
        <TileBoard v-if="!showLogo" class="w-full" :tiles="tiles" />
        <TileBoard v-else class="w-full" :tiles="originalTiles" />
      </transition>
      <EyeIcon @click="toggleLogo" :open="showLogo" />
    </div>
    <div class="flex flex-col gap-2 w-full items-center">
      <BaseButton @click="shuffle">
        {{ buttonText }}
      </BaseButton>
      <BaseTransition>
        <BaseButton v-if="solved" @click="toggleSaveHighscoreModal">
          SAVE HIGHSCORE
        </BaseButton>
      </BaseTransition>
      <SaveHighscore @close="toggleSaveHighscoreModal" :isOpen="showSaveHighscoreModal" :solved="solved"/>
    </div>
    <HowToPlayButton />
  </div>
</template>

<script setup lang="ts">
import TileBoard from "../components/TileBoard.vue";
import SolveTimer from "../components/SolveTimer.vue";
import { useGameCounterStore } from "../stores/gameCounter";
import { computed, provide, ref, watch } from "vue";
import type { Tile } from "src/types/tile";
import EyeIcon from "../components/EyeIcon.vue";
import SaveHighscore from "../components/SaveHighscore.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseTransition from "../components/BaseTransition.vue";
import HowToPlayButton from "../components/HowToPlayButton.vue";

let gameCounter = useGameCounterStore();
let solved = ref<boolean>();
let showLogo = ref(false);
let showSaveHighscoreModal = ref(false);

const buttonText = computed(() => {
  if (solved.value) return "PLAY AGAIN";
  return "SHUFFLE";
});

const toggleSaveHighscoreModal = () => {
  showSaveHighscoreModal.value = !showSaveHighscoreModal.value;
}

const shuffle = () => {
  showLogo.value = false;
  if (solved.value === false) return;
  gameCounter.resetCounters();
  solved.value = false;
  getLastTile().color = "white";
  let array = tiles.value;
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  tiles.value = array;
  gameCounter.startTimer();
};

window.addEventListener("keydown", event => {
  if (event.key === 'e') toggleLogo();
});

window.addEventListener("keydown", (event) => {
  swapWithKeys(event.key);
});

const swap = (whiteTileIndex: number, tileToSwapIndex: number) => {
  if (
    (whiteTileIndex % 7 === 6 && tileToSwapIndex === whiteTileIndex + 1) ||
    (whiteTileIndex % 7 === 0 && tileToSwapIndex === whiteTileIndex - 1) ||
    tileToSwapIndex < 0 ||
    tileToSwapIndex > tiles.value.length - 1 ||
    solved.value
  )
    return;
  let arr = tiles.value;
  let temp = arr[tileToSwapIndex];
  arr[tileToSwapIndex] = arr[whiteTileIndex];
  arr[whiteTileIndex] = temp;
  tiles.value = arr;
  gameCounter.incrementMoveCounter();
};

const swapWithKeys = (key: string) => {
  const whiteTileIndex = tiles.value.findIndex(
    (tile) => tile.color === "white"
  );
  switch (key) {
    case "ArrowLeft":
      swap(whiteTileIndex, whiteTileIndex - 1);
      break;
    case "ArrowUp":
      swap(whiteTileIndex, whiteTileIndex - 7);
      break;
    case "ArrowRight":
      swap(whiteTileIndex, whiteTileIndex + 1);
      break;
    case "ArrowDown":
      swap(whiteTileIndex, whiteTileIndex + 7);
      break;
    default:
      break;
  }
};

function swapWithClick(tileId: number) {
  const pressedTileIndex = tiles.value.findIndex((elem) => elem.id === tileId);
  const openTile = getWhiteTile();
  if (openTile !== undefined) {
    const openTileIndex = tiles.value.findIndex(
      (tile) => tile.id === openTile.id
    );
    if (canSwap(openTileIndex, pressedTileIndex)) {
      swap(openTileIndex, pressedTileIndex);
    }
  }
}

function canSwap(openTileIndex: number, pressedTileIndex: number) {
  return (
    pressedTileIndex + 1 === openTileIndex ||
    pressedTileIndex - 1 === openTileIndex ||
    pressedTileIndex + 7 === openTileIndex ||
    pressedTileIndex - 7 === openTileIndex
  );
}

provide("swapWithClick", swapWithClick);

const yellowTileIndices = [9, 10, 11, 12, 15, 23, 24, 25, 33, 36, 37, 38, 39];

const createTiles = () => {
  const originalTiles: Tile[] = [];
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if (yellowTileIndices.includes(i * 7 + j)) {
        originalTiles.push({
          id: i * 7 + j,
          color: "yellow",
        });
      } else {
        originalTiles.push({
          id: i * 7 + j,
          color: "black",
        });
      }
    }
  }
  return originalTiles;
};

let tiles = ref<Tile[]>(createTiles());
const originalTiles = ref(createTiles());

const toggleLogo = () => {
  if (!solved.value && solved.value !== undefined) {
    showLogo.value = !showLogo.value;
  }
};

const isSolved = () => {
  for (const element of yellowTileIndices) {
    if (tiles.value[element].color !== "yellow") {
      return false;
    }
  }
  return true;
};

watch(tiles.value, () => {
  if (isSolved()) {
    gameCounter.stopTimer();
    solved.value = true;
    const whiteTile = getWhiteTile();
    if (whiteTile != null) {
      whiteTile.color = "black";
    }
  }
});

const getWhiteTile = () => {
  return tiles.value.find((tile) => tile.color === "white");
};

const getLastTile = () => {
  return tiles.value[tiles.value.length - 1];
};
</script>

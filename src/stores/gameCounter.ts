import { defineStore } from "pinia";
import { watch } from "vue";

export const useGameCounterStore = defineStore({
  id: "gameCounter",
  state: () => ({
    timeCounter: 0,
    moveCounter: 0,
  }),
});

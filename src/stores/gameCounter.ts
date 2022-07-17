import { defineStore } from "pinia";

export const useGameCounterStore = defineStore({
  id: "gameCounter",
  state: () => ({
    timeCounter: 0,
    moveCounter: 0,
    interval: 0,
  }),
  actions: {
    startTimer() {
      this.interval = setInterval(() => {
        this.timeCounter = this.timeCounter + 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.interval);
    },
    incrementMoveCounter() {
      this.moveCounter++;
    },
    incrementTimeCounter() {
      this.timeCounter = this.timeCounter + 10;
    },
    resetCounters() {
      this.timeCounter = 0;
      this.moveCounter = 0;
    }
  },
});

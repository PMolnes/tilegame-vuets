import { defineStore } from "pinia";

export const useGameCounterStore = defineStore({
  id: "gameCounter",
  state: () => ({
    timeCounter: 0,
    moveCounter: 0,
    running: false,
  }),
  actions: {
    startTimer(running: boolean) {
      let interval: number | undefined;
      if (this.running) {
        interval = setInterval(() => {
          this.timeCounter = this.timeCounter + 10;
        }, 10);
      } else if (!this.running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    },
    incrementMoveCounter() {
      this.moveCounter++;
    },
    setRunning() {
      this.running = !this.running;
    }
  }
});

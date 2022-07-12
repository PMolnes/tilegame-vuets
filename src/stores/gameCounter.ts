import { defineStore } from "pinia";

export const useGameCounterStore = defineStore({
  id: "gameCounter",
  state: () => ({
    timeCounter: 0,
    moveCounter: 0,
  }),
  actions: {
    startTimer(running: boolean) {
      let interval: number | undefined;
      if (running) {
        interval = setInterval(() => {
          this.timeCounter = this.timeCounter + 10;
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }
});

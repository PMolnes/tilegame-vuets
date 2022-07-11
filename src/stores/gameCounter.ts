import { defineStore } from 'pinia'

export const useGameCounterStore = defineStore({
  id: 'gameCounter',
  state: () => ({
    timeCounter: 0,
    moveCounter: 0
  }),
})

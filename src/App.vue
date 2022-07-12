<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="p-4 flex flex-col">
    <nav class="flex justify-between">
      <RouterLink to="/">GAME</RouterLink>
      <RouterLink to="/highscores">HIGHSCORES</RouterLink>
    </nav>
    <h1 class="flex self-center h-full items-center text-3xl">SOLWR SOLWR</h1>
  </header>
  <body class="bg-black p-4">
    <RouterView />
  </body>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 10rem 1fr;
  font-family: 'Fira Code', monospace;
  background-color: black;
  color: #EBFF00;
}
</style>

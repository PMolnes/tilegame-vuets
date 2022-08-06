<template>
  <img v-if="props.open" class="self-start my-4 hover:cursor-pointer" src="/images/openeye.png" alt="eye-icon" />
  <img v-else class="self-start my-4 hover:cursor-pointer" src="/images/closedeye.png" alt="eye-icon" />
</template>

<script setup lang="ts">
const props = defineProps(['open'])
</script>

<script setup lang="ts">
	import { ref } from "vue";

	const checked = ref(false);

	const emit = defineEmits<{
		checked: [value: boolean];
	}>();
</script>

<template>
	<label class="relative inline-block min-w-[48px] h-[24px]">
		<input type="checkbox" class="hidden" v-model="checked" @change="$emit('checked', checked)" />
		<span
			:class="[
				'slider block absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition duration-400',
				checked ? 'bg-solwr-yellow' : 'bg-white',
			]"
		></span>
		<span
			:class="[
				'dot absolute left-1 bottom-1 bg-black w-4 h-4  transition transform duration-400',
				checked ? 'translate-x-6' : '',
			]"
		></span>
	</label>
</template>

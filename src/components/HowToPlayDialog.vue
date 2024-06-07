<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import SlidingToggle from "./SlidingToggle.vue";

	const dialog = ref<HTMLDialogElement | null>(null);
	const permanentlyHideDialog = ref(localStorage.getItem("hideDialog") === "true");

	onMounted(() => {
		if (permanentlyHideDialog.value === false) {
			dialog?.value?.showModal();
		}
	});

	function closeDialog() {
		if (dialog.value) {
			dialog.value.close();
		}
	}

	function handleHideInstructions(value: boolean) {
		localStorage.setItem("hideDialog", String(value));
	}
</script>

<template>
	<dialog ref="dialog" class="w-3/4 lg:w-1/2 h-1/2 bg-black border-solwr-yellow border-2 text-white">
		<div class="flex flex-col min-h-full items-center relative">
			<div class="w-full flex justify-center gap-2">
				<h1 class="md:text-4xl pt-8 text-xl mb-16 font-bold mx-auto">HOW TO PLAY</h1>
				<button @click="closeDialog" autofocus class="top-4 right-4 flex-shrink-0 bg-solwr-yellow w-12 h-12 text-black">
					X
				</button>
			</div>
			<ol class="list-decimal list-inside mb-16">
				<li>Press play</li>
				<li>Move tiles using the arrow keys</li>
				<li>Make the Solwr logo surface</li>
			</ol>
			<h2 class="text-sm text-gray-400">Hint: Press the eye-icon to see the solved puzzle</h2>
			<div class="flex items-center gap-2 absolute bottom-0 left-0 text-xs">
				<SlidingToggle @checked="(e: boolean) => handleHideInstructions(e)" />
				<p>Toggle to not show instructions again.</p>
			</div>
		</div>
	</dialog>
</template>

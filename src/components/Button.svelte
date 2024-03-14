<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let buttonLabel: string;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('buttonClick');
	}
</script>

<button
	class="border-2 border-blue-700 rounded-2xl bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-nowrap m-2 p-2 w-40"
	on:click={handleClick}>{buttonLabel}</button
>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	export let showContent: boolean;

	const dispatch = createEventDispatcher();

	const onToggleClick = () => {
		dispatch('toggle');
	};
</script>

<div class="flex mobile:justify-start tablet:justify-start desktop:justify-end m-4">
	<label for="content-toggle" class="flex relative items-center mb-4 cursor-pointer">
		<input
			type="checkbox"
			id="content-toggle"
			class="sr-only"
			on:click={onToggleClick}
			checked={showContent}
		/>
		<div
			class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"
		/>
		<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
			Content: <strong>{showContent ? 'Visible' : 'Hidden'}</strong>
		</span>
	</label>
</div>

{#if showContent}
	<div transition:fade>
		<slot />
	</div>
{/if}

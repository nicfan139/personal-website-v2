<script lang="ts">
	import Box from '../components/Box.svelte';

	export let name: string;
	export let imgSrc = '';
	export let imgAlt = '';
	export let iconClass = '';
</script>

<Box className="flex items-center py-2 px-4 hover:bg-white hover:text-black duration-300">
	{#if imgSrc}
		<img src={imgSrc} alt={imgAlt} class="h-9 w-9" />
	{/if}
	{#if iconClass}
		<i class={`${iconClass} text-4xl`} />
	{/if}
	<span class="ml-3">
		{name}
	</span>
</Box>

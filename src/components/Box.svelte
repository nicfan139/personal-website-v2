<script lang="ts">
	export let className = '';
	export let white = false;
</script>

<div
	class={`rounded-md p-4 transition-all ${
		white ? 'bg-white bg-opacity-40 hover:bg-opacity-50 hover:shadow-2xl' : ''
	} ${className}`}
>
	<slot />
</div>

<script lang="ts">
	export let className = '';
	export let white = false;
</script>

<div class={`rounded-md p-4 ${white ? 'bg-white bg-opacity-50' : ''} ${className}`}>
	<slot />
</div>

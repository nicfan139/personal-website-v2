<script>
	import { fly } from 'svelte/transition';
	export let refresh = '';
</script>

{#key refresh}
	<div in:fly={{ y: -30, duration: 500, delay: 500 }} out:fly={{ y: 30, duration: 500 }}>
		<slot />
	</div>
{/key}

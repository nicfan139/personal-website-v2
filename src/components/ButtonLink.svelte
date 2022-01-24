<script lang="ts">
	export let href: string;
	export let className = '';
</script>

<a
	{href}
	target="_blank"
	rel="external noopener noreferrer"
	class={`flex justify-between items-center border rounded border-black py-1 px-2 font-bold no-underline hover:text-white hover:bg-black duration-300 ${className}`}
>
	<slot />
</a>

<script>
	import { NAVBAR_LINKS } from '../constants';
</script>

<nav class="flex justify-center mobile:p-0 desktop:p-4 mobile:bg-black">
	{#each NAVBAR_LINKS as link}
		<a
			href={link.href}
			class="rounded-md p-4 no-underline hover:text-black hover:bg-white duration-300"
		>
			{link.label}
		</a>
	{/each}
</nav>

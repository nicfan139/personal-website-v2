<script lang="ts">
	import { Box } from '../components';
	import { SOCIAL_LINKS } from '../constants';
</script>

<Box>
	<h1>Nic Fan</h1>

	<p class="text-xl mb-8">Web Developer with expertise in React, TypeScript, Next.js and more!</p>

	<div
		class="mobile:max-w-xs flex mobile:flex-col desktop:flex-row mobile:mx-auto mobile:space-y-4 desktop:space-x-4"
	>
		{#each SOCIAL_LINKS as link}
			<a
				href={link.href}
				target="_blank"
				rel="external noopener noreferrer"
				title={link.tooltip}
				class="no-underline flex items-center"
			>
				<i class={`${link.className} text-4xl`} />
				<span class="desktop:hidden mx-4 text-left">
					{link.tooltip}
				</span>
			</a>
		{/each}
	</div>
</Box>

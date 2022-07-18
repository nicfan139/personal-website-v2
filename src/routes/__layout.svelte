<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script lang="ts">
	import '../app.css';
	import { Navbar, PageTransition } from '../components';

	export let key: string;
</script>

<svelte:head>
	<title>Nic Fan - Web Developer</title>
	<meta
		name="description"
		content="Experienced Web Developer specializing in React, TypeScript, and Next.js"
	/>
</svelte:head>
<div class="content overflow-y-scroll">
	<div
		class="max-h-screen max-w-4xl mx-auto font-sans text-white mobile:text-center desktop:text-left"
	>
		<div
			class="z-10 mobile:shadow-sm mobile:fixed mobile:top-0 mobile:left-0 mobile:right-0 desktop:relative"
		>
			<Navbar />
		</div>

		<div class="mobile:pt-20">
			<PageTransition refresh={key}>
				<slot />
			</PageTransition>
		</div>
	</div>
</div>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Box, ButtonLink, ContentToggle } from '../components';
	import { PROJECT_LIST } from '../constants';

	let showContent = true;
	let selectedProjectIndex = 0;
	// eslint-disable-next-line
	let modalContent: Project | null = null;

	const toggleContent = () => {
		showContent = !showContent;
	};

	const changeSelectedProject = (newIndex: number) => {
		selectedProjectIndex = newIndex;
	};

	const showModal = (index: number) => {
		modalContent = PROJECT_LIST[index];
	};

	const hideModal = () => {
		modalContent = null;
	};
</script>

<svelte:head>
	<title>Projects | Nicolas Fan - Web Developer</title>
</svelte:head>

<ContentToggle {showContent} on:toggle={toggleContent}>
	<Box className="mb-6">
		<h1>Projects</h1>

		<!-- Project list view - Desktop -->
		<div
			class="mobile:hidden tablet:flex desktop:flex min-h-12 w-full mb-10 rounded-lg bg-white bg-opacity-50"
		>
			<div class="w-60">
				{#each PROJECT_LIST as project, i}
					<div
						class={`project-link flex items-center p-4 hover:cursor-pointer duration-300 ${
							selectedProjectIndex === i ? 'bg-white text-black shadow-xl' : ''
						}`}
						on:click={() => changeSelectedProject(i)}
					>
						<i
							class={`fas fa-caret-right text-xl ${
								selectedProjectIndex === i ? 'visible' : 'invisible'
							}`}
						/>
						<span class="ml-4 font-semibold">
							{project.name}
						</span>
					</div>
				{/each}
			</div>

			<div class="min-h-12 w-full rounded-r-lg p-6 text-black bg-white">
				<h2 class="mb-4">
					{PROJECT_LIST[selectedProjectIndex].name}
				</h2>
				<div
					contenteditable="false"
					bind:innerHTML={PROJECT_LIST[selectedProjectIndex].desc}
					class="mb-6"
				/>
				<div class="flex">
					<img
						src={PROJECT_LIST[selectedProjectIndex].imgSrc}
						alt={PROJECT_LIST[selectedProjectIndex].imgSrc}
						class="h-full w-full max-w-md mb-4 bg-cover bg-center border object-cover"
					/>

					<div class="w-52 flex flex-col items-start ml-6">
						<div class="w-full flex flex-col justify-between items-start">
							{#if PROJECT_LIST[selectedProjectIndex].siteUrl}
								<ButtonLink
									href={PROJECT_LIST[selectedProjectIndex].siteUrl}
									className="w-full mb-4"
								>
									<div class="text-lg">
										<i class="fas fa-eye mr-1" />
										<span>View site</span>
									</div>
									<i class="fas fa-arrow-right" />
								</ButtonLink>
							{/if}

							{#if PROJECT_LIST[selectedProjectIndex].repoUrl}
								<ButtonLink href={PROJECT_LIST[selectedProjectIndex].repoUrl} className="w-full">
									<div class="text-lg">
										<i class="fab fa-github mr-1" />
										<span>View repo</span>
									</div>
									<i class="fas fa-arrow-right" />
								</ButtonLink>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Project list view - Mobile -->
		<div class="mobile:block tablet:hidden desktop:hidden">
			{#each PROJECT_LIST as project, i}
				<div
					class="rounded my-8 p-4 font-bold text-black bg-white hover:cursor-pointer"
					on:click={() => showModal(i)}
				>
					{project.name}
				</div>
			{/each}
		</div>

		{#if modalContent}
			<div
				class="z-20 fixed top-0 left-0 right-0 bottom-0 text-black bg-white overflow-y-auto"
				transition:fade
			>
				<div class="fixed top-2 right-4 text-3xl hover:cursor-pointer" on:click={hideModal}>
					<i class="fas fa-times" />
				</div>
				<div class="py-12 px-6">
					<h2 class="mb-4 text-4xl">{modalContent.name}</h2>

					<img
						src={modalContent.imgSrc}
						alt={modalContent.imgSrc}
						class="h-full w-full mb-4 bg-cover bg-center object-cover"
					/>

					<div contenteditable="false" bind:innerHTML={modalContent.desc} class="mb-4" />

					<div class="flex flex-col">
						{#if modalContent.siteUrl}
							<ButtonLink href={modalContent.siteUrl} className="justify-center my-4 px-8 py-4">
								<div class="text-lg">
									<i class="fas fa-eye mr-1" />
									<span>View site</span>
								</div>
								<i class="fas fa-arrow-right" />
							</ButtonLink>
						{/if}

						{#if modalContent.repoUrl}
							<ButtonLink href={modalContent.repoUrl} className="justify-center px-8 py-4">
								<div class="text-lg">
									<i class="fab fa-github mr-1" />
									<span>View repo</span>
								</div>
								<i class="fas fa-arrow-right" />
							</ButtonLink>
						{/if}
					</div>
				</div>
			</div>
		{/if}
	</Box>
</ContentToggle>

<style lang="postcss">
	.project-link:first-of-type {
		border-top-left-radius: 8px;
	}

	.project-img {
		height: 200px;
		width: 400px;
	}
</style>

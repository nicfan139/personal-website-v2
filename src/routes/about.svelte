<script lang="ts">
	import { Box, ContentToggle, LangIcon } from '../components';
	import { SKILLS } from '../constants';

	let showContent = true;

	const toggleContent = () => {
		showContent = !showContent;
	};

	const getYears = () => {
		const currentYear = new Date().getFullYear();
		return currentYear - 2018;
	};
</script>

<svelte:head>
	<title>About Me | Nic Fan - Web Developer</title>
</svelte:head>

<ContentToggle {showContent} on:toggle={toggleContent}>
	<Box className="mb-6">
		<h1>About</h1>

		<Box white className="mobile:text-black mobile:bg-white mobile:bg-opacity-90">
			<p class="mb-6">
				Hi! I'm a Full-Stack Web Developer with a preference for the Front-End side, with {getYears()}+
				years of experience in building highly-interactive software. Ranging from existing
				enterprise-level applications to completely new software from scratch. I've worked in
				various industries from startups to fast-growing companies - including currency exchange, HR
				tech, as well as real estate fintech.
			</p>
			<div class="flex mobile:flex-col items-center mb-6">
				<p class="mobile:mb-2 desktop:mr-2">A Canadian currently based in Vancouver, BC</p>
				<img src="/icons/flag-ca.svg" alt="flag-ca" class="h-8 w-10 mr-2" />
				<p class="mobile:mb-2 desktop:mr-2">- though I love to travel while working remotely!</p>
			</div>
			<div class="mb-6">
				<p class="mb-2">
					Origingally, I come form a diverse background - having previously lived in Malaysia, Hong
					Kong, Australia, and England.
				</p>
				<div class="flex space-x-2 mobile:justify-center">
					<img src="/icons/flag-my.svg" alt="flag-my" class="max-h-none h-8 max-w-none w-10" />
					<img src="/icons/flag-hk.svg" alt="flag-hk" class="max-h-none h-8 max-w-none w-10" />
					<img src="/icons/flag-au.svg" alt="flag-au" class="max-h-none h-8 max-w-none w-10" />
					<img src="/icons/flag-en.svg" alt="flag-en" class="max-h-none h-8 max-w-none w-10" />
				</div>
			</div>
			<p class="mb-6">
				When I'm not coding you'll probably find me playing soccer, bass guitar, indulging in video
				games, discovering new restaurants and bars, thinking of my next travel destination, or
				aimlessly surfing through the internet.
			</p>
			<p>
				I'm always open to exploring new opportunities to enhance my skills as a software developer!
			</p>
		</Box>
	</Box>

	<Box className="mb-6">
		<h2 class="mb-4">Skills & Expertise</h2>
		<Box white className="mobile:text-black mobile:bg-white mobile:bg-opacity-90">
			<div class="mb-6">
				<h3 class="mb-2">Primary Languages</h3>
				<div class="flex flex-wrap mobile:justify-center">
					{#each SKILLS.PRIMARY as skill}
						<LangIcon {...skill} />
					{/each}
				</div>
			</div>

			<div class="mb-6">
				<h3 class="mb-2">Utility Libraries/Software</h3>
				<div class="flex flex-wrap mobile:justify-center">
					{#each SKILLS.UTILITY as skill}
						<LangIcon {...skill} />
					{/each}
				</div>
			</div>

			<div>
				<h3 class="mb-2">Other</h3>
				<div class="flex flex-wrap mobile:justify-center">
					{#each SKILLS.OTHER as skill}
						<LangIcon {...skill} />
					{/each}
				</div>
			</div>
		</Box>
	</Box>
</ContentToggle>

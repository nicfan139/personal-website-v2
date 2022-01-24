/// <reference types="@sveltejs/kit" />

interface NavbarLink {
	href: string;
	label: string;
}

interface SocialLink {
	href: string;
	className: string;
	tooltip: string;
}

interface LangSkill {
	name: string;
	imgSrc?: string;
	imgAlt?: string;
	iconClass?: string;
}

interface Project {
	name: string;
	desc: string;
	repoUrl?: string;
	siteUrl?: string;
	imgSrc: string;
}

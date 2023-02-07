const SKILLS_PRIMARY: LangSkill[] = [
	{
		name: 'JavaScript',
		iconClass: 'devicon-javascript-plain colored'
	},
	{
		name: 'TypeScript',
		iconClass: 'devicon-typescript-plain colored'
	},
	{
		name: 'React',
		iconClass: 'devicon-react-original colored'
	},
	{
		name: 'Next.js',
		iconClass: 'devicon-nextjs-original colored'
	},
	{
		name: 'Redux',
		iconClass: 'devicon-redux-original colored'
	},
	{
		name: 'Svelte',
		iconClass: 'devicon-svelte-plain colored'
	},
	{
		name: 'GraphQL',
		iconClass: 'devicon-graphql-plain colored'
	},
	{
		name: 'Apollo',
		imgSrc: '/icons/apollo.svg'
	},
	{
		name: 'HTML',
		iconClass: 'devicon-html5-plain colored'
	},
	{
		name: 'CSS',
		iconClass: 'devicon-css3-plain colored'
	},
	{
		name: 'SASS/SCSS',
		iconClass: 'devicon-sass-original colored'
	},
	{
		name: 'Tailwind CSS',
		iconClass: 'devicon-tailwindcss-plain colored'
	},
	{
		name: 'Styled Components',
		imgSrc: '/icons/styled-components.png',
		imgAlt: 'styled-components'
	}
];

const SKILLS_UTILITY: LangSkill[] = [
	{
		name: 'Git',
		iconClass: 'devicon-git-plain colored'
	},
	{
		name: 'Jest',
		iconClass: 'devicon-jest-plain colored'
	},
	{
		name: 'Cypress',
		imgSrc: '/icons/cypress.svg',
		imgAlt: 'Cypress.io'
	},
	{
		name: 'React Query',
		imgSrc: '/icons/react-query.svg',
		imgAlt: 'react-query'
	},
	{
		name: 'CircleCI',
		iconClass: 'devicon-circleci-plain colored'
	},
	{
		name: 'Sentry',
		imgSrc: '/icons/sentry.png',
		imgAlt: 'Sentry.io'
	},
	{
		name: 'Heroku',
		iconClass: 'devicon-heroku-plain colored'
	},
	{
		name: 'Netlify',
		imgSrc: '/icons/netlify.svg',
		imgAlt: 'Netlify'
	},
	{
		name: 'Vercel',
		imgSrc: '/icons/vercel.svg',
		imgAlt: 'Vercel'
	}
];

const SKILLS_OTHER: LangSkill[] = [
	{
		name: 'Node.js',
		iconClass: 'devicon-nodejs-plain colored'
	},
	{
		name: 'Express',
		iconClass: 'devicon-express-original colored'
	},
	{
		name: 'MobX',
		imgSrc: '/icons/mobx.png',
		imgAlt: 'MobX'
	},
	{
		name: 'Gatsby',
		iconClass: 'devicon-gatsby-plain colored'
	},
	{
		name: 'MongoDB',
		iconClass: 'devicon-mongodb-plain colored'
	},
	{
		name: 'Ruby',
		iconClass: 'devicon-ruby-plain colored'
	},
	{
		name: 'Rails',
		iconClass: 'devicon-rails-plain colored'
	},
	{
		name: 'PostgreSQL',
		iconClass: 'devicon-postgresql-plain colored'
	}
];

export const SKILLS = {
	PRIMARY: SKILLS_PRIMARY,
	UTILITY: SKILLS_UTILITY,
	OTHER: SKILLS_OTHER
};

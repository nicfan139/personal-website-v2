module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: 'media',
	theme: {
		colors: {
			white: '#FFFFFF',
			black: '#000000',
			'dark-blue': '#152E3C',
			green: '#31C48D'
		},
		screens: {
			mobile: { max: '767px' },
			tablet: { min: '768px', max: '1023px' },
			desktop: { min: '1024px' }
		}
	},
	plugins: [require('@themesberg/flowbite/plugin')]
};

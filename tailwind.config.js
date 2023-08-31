/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#41403e'
			},
			maxWidth: {
				90: '90%'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

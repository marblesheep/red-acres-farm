/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#3F0E00',
				secondary: '#8C1C04',
				accent: '#BF5B05'
			},
			maxWidth: {
				90: '90%'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

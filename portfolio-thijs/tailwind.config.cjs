/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
				'ava': '-4px 4px 6px rgba(0, 0, 0, 0.4)',
				'avad': '-4px 4px 8px rgba(0, 0, 0, 0.7)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'),...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}

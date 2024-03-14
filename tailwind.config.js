/** @type {import('tailwindcss').Config} */
// export default {
// 	content: [],
// 	theme: {
// 		extend: {}
// 	},
// 	plugins: []
// };

module.exports = {
	content: [
		'./pages/**/*.{html,js,svelte}',
		'./src/components/**/*.{html,js,svelte}',
		'./src/routes/**/*.{html,js,svelte}'
	],
	theme: {
		fontFamily: {
			mono: ['mono', 'ui-monospace']
		}
	}
	// ...
};

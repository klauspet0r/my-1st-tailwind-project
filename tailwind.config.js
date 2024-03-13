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
		'./pages/**/*.{html,js}',
		'./components/**/*.{html,js}',
		'./src/routes/*.{html,js,svelte}'
	],
	theme: {
		fontFamily: {
			mono: ['mono', 'ui-monospace']
		}
	}
	// ...
};

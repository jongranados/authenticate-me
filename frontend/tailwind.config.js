/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/components/**/index.js",
		"./public/index.html",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};

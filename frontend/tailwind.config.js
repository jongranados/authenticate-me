/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/components/**/index.js",
		"./public/index.html",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				roboto: ["Roboto", "sans-serif"], 
				bayon: ["Bayon", "sans-serif"]
			},
		},
	},
	plugins: [],
};

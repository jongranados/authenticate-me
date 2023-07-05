/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
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

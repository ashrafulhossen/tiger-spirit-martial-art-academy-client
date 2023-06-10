const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#120024"
			}
		},
		screens: {
			xs: "400px",
			...defaultTheme.screens
		}
	},
	plugins: [require("daisyui")]
};

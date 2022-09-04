// /** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			dark: "#16213E",
			light: "#EFFFFD",
			primary: "#354259",
			secondary: "#EEEEEE",
			border: "#292C6D",
			borderDark: "#344CB7",
			hoverDark: "#01ffee",
			hoverLight: "#f50839",
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
		},
		extend: {},
	},
	plugins: [],
};

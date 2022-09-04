import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	return (
		<div className='transition duration-500 ease-in-out flex items-center mb-2'>
			{theme === "dark" ? (
				<FaSun
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					className='text-dark dark:text-white dark:hover:text-hoverDark hover:text-hoverLight ease-in duration-300'
					size={25}
				/>
			) : (
				<FaMoon
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					className='text-dark dark:text-white dark:hover:text-hoverDark hover:text-hoverLight ease-in duration-300'
					size={25}
				/>
			)}
		</div>
	);
};

export default Toggle;

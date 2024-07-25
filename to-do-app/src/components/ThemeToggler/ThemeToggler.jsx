import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ReactComponent as Sun } from '../../assets/images/icon-sun.svg';
import { ReactComponent as Moon } from '../../assets/images/icon-moon.svg';


export const ThemeToggler = () => {
    const { darkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="ThemeToggler">
            <div className="ThemeToggler__Switch" onClick={toggleTheme}>
                {darkTheme ? <Moon /> : <Sun />}
            </div>
        </div>
    );
}

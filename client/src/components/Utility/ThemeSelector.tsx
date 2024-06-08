import React from "react";
import { useTheme } from "../hooks/useTheme";

import "./ThemeSelector.css";

const themeColors: string[] = ["#58249c", "#249c6b", "#b70233"];

function ThemeSelector(): JSX.Element {
  const { changeColor, changeMode, mode } = useTheme();

  function toggleMode(): void {
    changeMode(mode === "dark" ? "light" : "dark");
  }

  console.log(mode);
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src="/darkmode.svg"
          alt="dark-/lightmode icon"
          onClick={toggleMode}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;

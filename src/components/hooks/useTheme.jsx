import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme måste användas inom themeProvider");
  }

  return context;
};

import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

interface ThemeContextType {
  color: string;
  mode: string;
  changeColor: (color: string) => void;
  changeMode: (mode: string) => void;
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme måste användas inom themeProvider");
  }

  return context;
};

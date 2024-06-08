import React, { createContext, useReducer, ReactNode } from "react";

interface State {
  color: string;
  mode: string;
}

interface Action {
  type: string;
  payload: string;
}

interface ContextType extends State {
  changeColor: (color: string) => void;
  changeMode: (mode: string) => void;
}

export const ThemeContext = createContext<ContextType | undefined>(undefined);

const themeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props): JSX.Element {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#58249c",
    mode: "dark",
  });

  function changeColor(color: string): void {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  }

  function changeMode(mode: string): void {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

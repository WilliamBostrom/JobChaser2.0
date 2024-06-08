import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const useAuthContext = (): any => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext måste användas inom AuthContextProvider");
  }

  return context;
};

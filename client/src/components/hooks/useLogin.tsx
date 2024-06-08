import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

interface LoginReturnType {
  error: string | null;
  login: (email: string, password: string) => void;
}

export const useLogin = (): LoginReturnType => {
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useAuthContext();

  const login = (email: string, password: string): void => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("user logged in", res.user);
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, login };
};

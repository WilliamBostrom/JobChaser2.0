import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

interface SignupReturnType {
  error: string | null;
  signup: (email: string, password: string) => void;
}

export const useSignup = (): SignupReturnType => {
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useAuthContext();

  const signup = (email: string, password: string): void => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("user signed up", res.user);
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, signup };
};

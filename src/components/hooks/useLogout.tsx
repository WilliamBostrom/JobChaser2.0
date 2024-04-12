import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

interface LogoutReturnType {
  logout: () => void;
}

export const useLogout = (): LogoutReturnType => {
  const { dispatch } = useAuthContext();

  const logout = (): void => {
    signOut(auth)
      .then(() => {
        console.log("utloggad");
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};

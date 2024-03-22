import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("utloggad");
        dispatch({ type: "LOGOUT" });
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};

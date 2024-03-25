import { Link } from "react-router-dom";
import Navbar from "./Nav";
import { useTheme } from "../hooks/useTheme";
import ThemeSelector from "../Utility/ThemeSelector";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Header() {
  const { color } = useTheme();
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <header style={{ background: color }}>
      <div className="header">
        <nav>
          <div className="nav-container">
            <h1>
              <Link to="/">JobChaser</Link>
            </h1>

            <div>
              {/*     {user && (
                <Navbar
                  linkText="Favoriter"
                  imagePath="/favorite_grey.svg"
                  altText="Favoriter"
                />
              )} */}
              {!user && (
                <Link to="/login">
                  {" "}
                  <Navbar
                    linkText="Logga in"
                    imagePath="/login_regular.svg"
                    altText="Login"
                  />
                </Link>
              )}

              {user && (
                <div onClick={logout}>
                  <Navbar
                    linkText="Logga ut"
                    imagePath="/login_regular.svg"
                    altText="Login"
                  />
                </div>
              )}
            </div>
          </div>
        </nav>
        <ThemeSelector />
      </div>
    </header>
  );
}

export default Header;

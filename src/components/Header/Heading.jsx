import { Link } from "react-router-dom";
import Navbar from "./Nav";
import { useTheme } from "../hooks/useTheme";
import ThemeSelector from "../Utility/ThemeSelector";
import { useLogout } from "../hooks/useLogout";

function Header() {
  const { color } = useTheme();
  const { logout } = useLogout();
  return (
    <header style={{ background: color }}>
      <div className="header">
        <nav>
          <div className="nav-container">
            <h1>
              <Link to="/">JobChaser</Link>
            </h1>

            <div>
              <Navbar
                linkText="Favoriter"
                imagePath="/favorite_grey.svg"
                altText="Favoriter"
              />
              <Link to="/login">
                {" "}
                <Navbar
                  linkText="Logga in"
                  imagePath="/login_regular.svg"
                  altText="Login"
                />
              </Link>
              <button onClick={logout}>log out</button>
            </div>
          </div>
        </nav>
        <ThemeSelector />
      </div>
    </header>
  );
}

export default Header;

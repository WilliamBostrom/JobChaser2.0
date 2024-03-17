import { Link } from "react-router-dom";
import Navbar from "./Nav";
import { useTheme } from "../hooks/useTheme";
import ThemeSelector from "../Utility/ThemeSelector";

function Header() {
  const { color } = useTheme();
  return (
    <header style={{ background: color }}>
      <div className="header">
        <nav>
          <div className="nav-container">
            <h1>
              <Link to="/">JobChaser</Link>
            </h1>

            <div>
              {/*     <Navbar
                linkText="Bevakning"
                imagePath="/alert_grey.svg"
                altText="Bevakning"
              /> */}
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
            </div>
          </div>
        </nav>
        <ThemeSelector />
      </div>
    </header>
  );
}

export default Header;

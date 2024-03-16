import Navbar from "./Nav";
// import Search from "./Search";
import { useTheme } from "../hooks/useTheme";

function Header() {
  const { color } = useTheme();
  return (
    <header style={{ background: color }}>
      <div className="header">
        <nav>
          <div className="nav-container">
            <h1>JobChaser</h1>

            <div>
              <Navbar
                linkText="Bevakning"
                imagePath="/alert_grey.svg"
                altText="Bevakning"
              />
              <Navbar
                linkText="Favoriter"
                imagePath="/favorite_grey.svg"
                altText="Favoriter"
              />
              <Navbar
                linkText="Logga in"
                imagePath="/login_regular.svg"
                altText="Login"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

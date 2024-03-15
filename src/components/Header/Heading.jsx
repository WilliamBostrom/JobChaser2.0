import Navbar from "./Nav";
// import Search from "./Search";
import { useTheme } from "../hooks/useTheme";

function Header() {
  const { color, changeColor } = useTheme();
  return (
    <header style={{ background: color }}>
      <div className="header">
        <nav onClick={() => changeColor("pink")}>
          <div className="nav-container">
            <h1>JobChaser</h1>
            <div>
              <Navbar
                linkText="Bevakning"
                imagePath="https://jobb.blocket.se/img/alert_grey.svg"
                altText="Bevakning"
              />
              <Navbar
                linkText="Favoriter"
                imagePath="https://jobb.blocket.se/img/favorite_grey.svg"
                altText="Favoriter"
              />
              <Navbar
                linkText="Logga in"
                imagePath="https://jobb.blocket.se/img/login_regular.svg"
                altText="Login"
              />
            </div>
          </div>
        </nav>
      </div>
      {/* <Search /> */}
    </header>
  );
}

export default Header;

import Navbar from "./Nav";
import Search from "./Search";

function Header() {
  return (
    <header>
      <div className="header">
        <nav>
          <div className="nav-container">
            <h1>JobChaser</h1>
            <div>
              <Navbar
                linkText="Bevakning"
                imagePath="https://jobb.blocket.se/img/alert_grey.svg"
                altText="Bevakning"
              />
              <Navbar
                linkText="Sök"
                imagePath="https://jobb.blocket.se/img/favorite_grey.svg"
                altText="Sparade"
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
      <Search />
    </header>
  );
}

export default Header;

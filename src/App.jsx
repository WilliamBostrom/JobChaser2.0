import Header from "./components/Header/Heading.jsx";
import Footer from "./components/Footer.jsx";
import DisplayCards from "./components/Jobs/Jobs.jsx";

import "./assets/App.css";
import "./assets/utility/utility.css";
import "./assets/jobcard.css";

function App() {
  return (
    <main>
      <Header />
      <DisplayCards />
      <Footer />
    </main>
  );
}

export default App;

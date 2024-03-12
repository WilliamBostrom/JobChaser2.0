import Header from "./components/Header/Heading.jsx";
import Footer from "./components/Footer.jsx";
// import DisplayCards from "./components/Jobs/Jobs.jsx";
import FetchJobs from "./components/Jobs/JobsFetch.jsx";

import "./assets/App.css";
import "./assets/utility/utility.css";
import "./assets/jobcard.css";
// import FetchJobs from "./components/Jobs/JobsFetch.jsx";

function App() {
  return (
    <main>
      <Header />
      <FetchJobs />
      <Footer />
    </main>
  );
}

export default App;

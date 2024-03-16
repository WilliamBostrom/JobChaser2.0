import Header from "./components/Header/Heading.jsx";
import Footer from "./components/Footer.jsx";
// import DisplayCards from "./components/Jobs/Jobs.jsx";
import FetchJobs from "./components/Jobs/JobsFetch.jsx";

import "./assets/App.css";
import "./assets/utility/utility.css";
import "./assets/jobcard.css";
import ThemeSelector from "./components/Utility/ThemeSelector.jsx";
import { useTheme } from "./components/hooks/useTheme.jsx";
// import FetchJobs from "./components/Jobs/JobsFetch.jsx";

function App() {
  const { mode } = useTheme();
  return (
    <main className={`app ${mode}`}>
      <Header />
      <ThemeSelector />
      <FetchJobs />
      <Footer />
    </main>
  );
}

export default App;

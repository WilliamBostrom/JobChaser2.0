import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Heading.jsx";
import Footer from "./components/Footer.jsx";

import "./assets/App.css";
import "./assets/utility/utility.css";
import "./assets/jobcard.css";

import { useTheme } from "./components/hooks/useTheme.jsx";
import Home from "./pages/home/Home.jsx";
import JobSite from "./pages/jobsite/JobSite.jsx";
import Login from "./pages/login/Login.jsx";

function App() {
  const { mode } = useTheme();
  return (
    <main className={`app ${mode}`}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* <Route path="/search" element={<Search />} /> */}

          <Route path="/jobb/:id" element={<JobSite />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

{
  /* <FetchJobs />
   */
}

export default App;

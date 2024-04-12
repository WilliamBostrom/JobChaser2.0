// @ts-nocheck
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Heading.jsx";
import Footer from "./components/Footer.jsx";

import "./assets/App.css";
import "./assets/utility/utility.css";
import "./assets/jobcard.css";

import { useTheme } from "./components/hooks/useTheme.jsx";

import Home from "./pages/home/Home.jsx";
import JobSite from "./pages/jobsite/JobSite.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import { useAuthContext } from "./components/hooks/useAuthContext.jsx";

function App() {
  const { mode } = useTheme();
  const { user, authIsReady } = useAuthContext();
  return (
    <main className={`app ${mode}`}>
      {authIsReady && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="login" />}
            />
            <Route
              path="signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/jobb/:id"
              element={user ? <JobSite /> : <Navigate to="login" />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </main>
  );
}

{
  /* <FetchJobs />
   */
}

export default App;

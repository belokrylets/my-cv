import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import ErrorPage from "./components/ErrorPage";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Footer } from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="projects" element={<Projects />} />
          <Route path="404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

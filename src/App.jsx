import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import CursorGlow from "./components/CursorGlow"
import About from "./components/About"
import Loader from "./components/Loader"
import Spotlight from "./components/Spotlight"
import FloatingTech from "./components/FloatingTech"
import { useEffect } from "react";
import Footer from "./components/Footer"
import MovingText from "./components/MovingText"
import MovingText2 from "./components/MovingText2"
import ResumePage from "./pages/ResumePage"

function Home(){
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.replaceState(null, "", "#home");
  }, []);

  return (
    <>
      <FloatingTech/>
      <Loader/>
      <CursorGlow/>
      <Spotlight/>

      <Navbar/>

      <Hero/>
      <MovingText/>
      <About/>

      <Skills/>
      <MovingText2/>
      <Projects/>

      <Contact/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <Router>

      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* RESUME PAGE */}
        <Route path="/resume" element={<ResumePage />} />

      </Routes>

    </Router>
  )
}

export default App
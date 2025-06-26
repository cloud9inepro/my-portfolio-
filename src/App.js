import { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Added
import "./App.css";
import profile from "./assets/profile.png"; // ✅ Import profile image
import Navbar from "./components/Nav.jsx";
import Card from "./components/Card.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Projects from "./pages/projects.jsx";



function App() {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (!effectRef.current) {
      effectRef.current = GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x00ffff,
        //backgroundColor: 0x0d1117,
      });
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div className="app">
      <div
        ref={vantaRef}
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>

      {/* Hero Section */}
      <AnimatePresence mode="wait">
  {!activeCard && (
    <motion.div
      className="overlay"
      initial={{ opacity: 1, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
            <div className="hero-card">
              <img
                src= {profile}
                alt="Gift Emmanuel"
                className="profile-img"
              />
              <div className="intro-text">
                <h1>Hi, I'm Ojieh Gift</h1>
                <p>FullStack Developer | React/Node.js Enthusiast</p>
       <button className="cta-btn" onClick={() => setActiveCard("projects")}>
  View My Work
</button>
              </div>
            </div>


          </motion.div>
        )}
      </AnimatePresence>
       

      {/* Nav always visible */}
      <Navbar activeCard={activeCard} setActiveCard={setActiveCard} />

      {/* Section Card */}
      <AnimatePresence mode="wait">
        {activeCard === "about" && (
        <motion.div
  key="about-card"
  initial={{ y: "100vh", opacity: 0 }}   // Starts from bottom
  animate={{ y: 0, opacity: 1 }}         // Slides into view
  exit={{ y: "100vh", opacity: 0 }}      // ✅ Slides back down on close
  transition={{ duration: 0.6, ease: "easeInOut" }}
  style={{
   position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
  }}
>
  <Card title="About Me" onClose={() => setActiveCard(null)}>
    <About />
  </Card>
</motion.div>

        )}
      </AnimatePresence>



        {activeCard === "contact" && (
  <motion.div
    key="contact-card"
  initial={{ y: "100vh", opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: "100vh", opacity: 0 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  style={{
   position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
    }}
  >
    <Card title="Contact Me" onClose={() => setActiveCard(null)}>
      <Contact />
    </Card>
  </motion.div>
)}

        {activeCard === "projects" && (
  <motion.div
    key="projects-card"
    initial={{ y: "100vh", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: "100vh", opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    style={{
     position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
    }}
  >
    <Card title="My Projects" onClose={() => setActiveCard(null)}>
      <Projects />
    </Card>
  </motion.div>
)}

          

    </div>
  );
}

export default App;

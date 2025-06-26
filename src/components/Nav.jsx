import React from "react";
import "../App.css";

function Navbar({ activeCard, setActiveCard }) {
  const navItems = [
    { label: "About", id: "about" },
    { label: "Resume", id: "resume" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="nav-container">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveCard(item.id)}
          className={`nav-button ${activeCard === item.id ? "active" : ""}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default Navbar;

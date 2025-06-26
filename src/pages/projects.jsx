import { useState } from "react";
import "../App.css";

const projects = [
  {
    title: "Courier Web App",
    description: "A responsive web platform for tracking deliveries in real time.",
    image: "/projects/courier.png",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Vanta.js background.",
    image: "/projects/portfolio.png",
  },
  {
    title: "OrbitHive",
    description: "A modern React webapp layout with cart functionality and filters.",
    image: "/projects/orbithive.jpg",
  },
  {
    title: "Landing Page",
    description: "A sleek landing page built for a startup product launch.",
    image: "/projects/landing.png",
  },
];

function Projects() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  const { title, description, image } = projects[current];

  return (
    <div className="projects-container">
      <img src={image} alt={title} className="project-image" />
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="arrow-buttons">
        <button onClick={prev}>&larr;</button>
        <button onClick={next}>&rarr;</button>
      </div>
    </div>
  );
}

export default Projects;

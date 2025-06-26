import { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 70 },
  { name: "MongoDB", level: 60 },
];

const certificates = [
  {
    title: "React Developer Certificate",
    issuer: "freeCodeCamp",
    date: "May 2024",
    link: "/certificates/react.pdf",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "February 2024",
    link: "/certificates/js.pdf",
  },
  {
    title: "Responsive Web Design",
    issuer: "Coursera",
    date: "December 2023",
  },
];

function Resume() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="resume-card">
      {/* Toggle Buttons */}
      <div className="resume-toggle">
        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
        <button
          className={activeTab === "certs" ? "active" : ""}
          onClick={() => setActiveTab("certs")}
        >
          Certificates
        </button>
      </div>

      {/* Scrollable Area */}
      <div className="resume-scroll">
        {activeTab === "skills" ? (
          <div className="skills-section">
            {skills.map((skill, index) => (
              <div key={index} className="skill-bar">
                <span className="skill-name">{skill.name}</span>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      delay: index * 0.1,
                    }}
                  >
                    <span className="progress-percent">{skill.level}%</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="certificates-section">
            {certificates.map((cert, index) => (
              <div className="certificate-card" key={index}>
                <h3>{cert.title}</h3>
                <p>
                  <strong>Issuer:</strong> {cert.issuer}
                </p>
                <p>
                  <strong>Date:</strong> {cert.date}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Resume;

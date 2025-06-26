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

function Skills() {
  return (
    <div className="skills-certificates-wrapper">
      {/* Skills Section */}
      <div className="skills-container">
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <span className="skill-name">{skill.name}</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              >
                <span className="progress-percent">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="certificates-container">
        <h2>Certificates</h2>
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
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

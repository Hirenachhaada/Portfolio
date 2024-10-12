import React from "react";
import "./css/Experience.css";
import googleLogo from "./assets/google.webp"; // Add appropriate logo paths
import digitalIpsumLogo from "./assets/digital_ipsum.png";

function Experience() {
  const experiences = [
    {
      company: "Google",
      logo: googleLogo,
      role: "Software Engineering Intern",
      duration: "May 2024 - August 2024",
      description:
        "Automated the task of creating replay configs, which was previously done manually, increasing efficiency by 85%. Utilized internal monitoring tools to obtain per-second data measurements like QPS (Queries per second) for configuration parameters.",
    },
    {
      company: "Digital Ipsum",
      logo: digitalIpsumLogo,
      role: "Web Developer",
      duration: "Mar 2022 - Apr 2022",
      description:
        "Developed a fully functional web application to automate the generation of employee certificates. Implemented manager authentication, boosting efficiency by 40%, allowing managers to generate certificates with minimal input.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <img src={exp.logo} alt={exp.company} className="company-logo" />
            <h3>{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

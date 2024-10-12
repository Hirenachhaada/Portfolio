import React from "react";
import "./css/Resume.css"; // Ensure you have a separate CSS file for styles
import resumeFile from "./assets/Hiren_Google_IIT_Patna_Resume.pdf"; // Path to your resume file

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <div className="resume-buttons">
        <a href={resumeFile} download className="resume-button">
          Download Resume
        </a>
        <a
          href="https://drive.google.com/file/d/1TU5ubDhKpCCRN5CG_X9uaETy0Qf5nlG1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          Show Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;

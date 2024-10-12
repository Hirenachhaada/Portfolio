import React from "react";
import "./css/About.css";
import profilePic from "./assets/profilePic.jpg"; // Add your image path

function About() {
  return (
    <section id="about" className="about-section">
      <h2>Let Me Introduce Myself</h2>
      <div className="about-content">
        <img src={profilePic} alt="Hiren Achhada" className="profile-pic" />
        <div className="about-text">
          <p>
            Hello! I'm <strong>Achhada Hiren Rajkumar</strong>, currently
            pursuing my BTech in Computer Science & Engineering at{" "}
            <strong>IIT Patna</strong>. I have a deep interest in{" "}
            <strong>competitive programming</strong> and{" "}
            <strong>software development</strong>. My passion for{" "}
            <strong>problem-solving </strong>
            and <strong>web development</strong> has driven me to explore
            various technologies and frameworks.
          </p>
          <p>
            I possess a strong grasp of{" "}
            <strong>Data Structures and Algorithms (DSA)</strong> and enjoy
            challenging myself in programming contests. I am always keen on
            learning new technologies and solving real-world problems through
            efficient and innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from "react";
import "./css/Contact.css"; // Ensure you have a separate CSS file for styles
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <a href="mailto:achhadahiren201@gmail.com" title="Email">
          <FaEnvelope />
        </a>
        <a href="tel:+917383757637" title="Phone">
          <FaPhone />
        </a>
        <a
          href="https://www.linkedin.com/in/hiren-achhada-5aa214210"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Hirenachhaada"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Contact;

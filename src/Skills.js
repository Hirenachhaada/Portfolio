import React from "react";
import Slider from "react-slick";
import "./css/Skills.css";
import cPlusPlusLogo from "./assets/C++_logo.png"; // Add appropriate image paths
import pythonLogo from "./assets/python.png";
import javascriptLogo from "./assets/js.png";
import reactLogo from "./assets/react.webp";
import goLogo from "./assets/go.png";
import phpLogo from "./assets/php.png";
import MongoDBLogo from "./assets/mongodb.png";
import ExpressJSLogo from "./assets/express.png";
import NodeJSLogo from "./assets/nodejs.png";
import MySQLLogo from "./assets/mysql.png";
import GitLogo from "./assets/git.png";

function Skills() {
  const logos = [
    { src: cPlusPlusLogo, alt: "C++" },
    { src: pythonLogo, alt: "Python" },
    { src: javascriptLogo, alt: "JavaScript" },
    { src: reactLogo, alt: "React" },
    { src: goLogo, alt: "Go" },
    { src: phpLogo, alt: "PHP" },
    { src: MongoDBLogo, alt: "MongoDB" },
    { src: ExpressJSLogo, alt: "ExpressJS" },
    { src: NodeJSLogo, alt: "NodeJS" },
    { src: MySQLLogo, alt: "MySQL" },
    { src: GitLogo, alt: "Git" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Speed of transition
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Speed of auto-scroll
    cssEase: "linear", // Smooth transition effect
    pauseOnHover: false, // Disable pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div className="skill-card" key={index}>
            <img src={logo.src} alt={logo.alt} className="logo" />
            <p>{logo.alt}</p>
          </div>
        ))}
        {/* Duplicate logos for seamless looping */}
        {logos.map((logo, index) => (
          <div className="skill-card" key={`duplicate-${index}`}>
            <img src={logo.src} alt={logo.alt} className="logo" />
            <p>{logo.alt}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Skills;

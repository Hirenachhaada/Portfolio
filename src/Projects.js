import React from "react";
import Slider from "react-slick";
import "./css/Projects.css";
import chatAppImage from "./assets/chatapp.jpg"; // Add appropriate image paths
import placementStatsImage from "./assets/projects1.jpeg";
import fractalImage from "./assets/fractal.jpg";
import trojan from "./assets/trojan.jpeg";
import mathGame from "./assets/math_game.png";
import codeforces from "./assets/codeforces.webp";
import blogs from "./assets/blog.png";
import amazon from "./assets/amazon.png";

function Projects() {
  const projects = [
    {
      title: "Chat App",
      techStack: "MERN Stack (MongoDB, Express, React, Node.js), Socket, JWT",
      description:
        "A full-featured real-time chat application supporting one-on-one and group conversations. Features include message timestamps, user authentication, and video calling. Users can create custom profiles with photo uploads and personalized settings, making it an interactive messaging platform.",
      image: chatAppImage,
      link: "https://github.com/Hirenachhaada/Mern-Chat-Application",
    },
    {
      title: "Placement Stats Handling",
      techStack: "HTML, CSS, JS, PHP, MySQL, Bootstrap",
      description:
        "A platform designed to manage placement data for multiple sectors including companies, alumni, and students. The application features user authentication, query-based data retrieval, and privileges for different user roles to access placement data with enhanced security.",
      image: placementStatsImage,
      link: "https://github.com/nitya-06/database_project",
    },
    {
      title: "Fractal Generator",
      techStack: "HTML, CSS, JavaScript",
      description:
        "An educational project that visualizes five different types of fractals based on well-known mathematical equations. Users can interact with the application to generate visually stunning fractals and explore the beauty of recursive mathematics.",
      image: fractalImage,
      link: "https://hirenachhaada.github.io/Fractal_generator/index.html",
    },
    {
      title: "FPGA Trojan Detection",
      techStack: "Python, XYLinx, HLS, CodeT5, Fairseq, Mistral",
      description:
        "This project aims to design a Reverse HLS framework that generates profiles for closed-source compilers and develop a reverse compiler to produce equivalent high-level programs from platform-specific executables. By enabling security analysis and debugging of closed-source compilers and FPGA-compliant programs, we address the critical issue of identifying Trojans and malware embedded in executable code. Our framework enhances security by providing insights into compiler behavior, facilitating the detection of hidden threats, and ensuring the integrity of sensitive information. Ultimately, this work promotes safer software development in high-stakes environments.",
      image: trojan,
      link: "https://github.com/subhrendu1987/Reverse-Engineering",
    },
    {
      title: "Blogs",
      techStack: "MERN Stack (MongoDB, Express, React, Node.js)",
      description:
        "This project focuses on developing an intuitive blog posting platform that empowers users to create and publish engaging content effortlessly. The platform supports text styling options, allowing writers to enhance their posts with various formatting features. Users can seamlessly add images to their blogs, enriching the visual appeal of their content. Additionally, the platform encourages community interaction by enabling users to like and comment on posts, fostering discussions and feedback. With a user-friendly interface and essential features, this project aims to create a vibrant space for writers and readers alike.",
      image: blogs,
      link: "https://github.com/Hirenachhaada/MyBlog",
    },
    {
      title: "Math Game",
      techStack: "MERN Stack (MongoDB, Express, React, Node.js)",
      description:
        "The Speed Math Challenge is an engaging math game designed to test your calculation skills under pressure. Players are given 60 seconds to solve a series of tricky mathematical problems that challenge their speed and accuracy. At the end of each round, the game records your last score and updates your maximum score based on the ID you entered at the start. This feature allows you to track your progress and improvement over time. Whether you’re a math enthusiast or just looking to sharpen your skills, the Speed Math Challenge offers a fun and competitive way to enhance your abilities!",
      image: mathGame,
      link: "https://math-game-frontend.onrender.com/",
    },
    {
      title: "CodeForces Visulaizer",
      techStack: "ReactJS, Codeforces API",
      description:
        "This web application provides you with insightful features to analyze your CodeForces contest standings, view problems solved by you, and track problems solved by your friend that are yet to be solved by you.",
      image: codeforces,
      link: "https://code-forces-contest-visualizer.vercel.app/",
    },
    {
      title: "Amazon Hack On",
      techStack: "Python 3.6, OpenCV, NumPY, YOLO, Amazon Product API",
      description:
        "This repository contains code for identifying objects in video using the YOLO (You Only Look Once) algorithm. It analyzes detected objects to extract features such as color, size, and other relevant characteristics. Based on these attributes, the application generates links to corresponding products on Amazon, facilitating easy access to similar items. Key features include real-time object detection utilizing the YOLO algorithm, feature extraction to determine attributes like color and size, and Amazon product linking that directs users to similar products based on the extracted features, enhancing the shopping experience.",
      image: amazon,
      link: "https://github.com/Pradeep845/Amazon-HackOn---Visual-AI-and-Ecommerce-",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() =>
              window.open(project.link, "_blank")
            } /* Open the link on card click */
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
            <div className="project-content">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projects;

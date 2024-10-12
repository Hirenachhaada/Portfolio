import React from "react";
import "./css/Achievements.css"; // Ensure you have a separate CSS file for styles
import {
  FaAward,
  FaTrophy,
  FaStar,
  FaMedal,
  FaCertificate,
} from "react-icons/fa"; // Importing icons

function Achievements() {
  const achievements = [
    {
      icon: <FaAward />,
      text: "Expert on Codeforces  [achhadahappy](https://codeforces.com/profile/achhadahappy)",
    },
    {
      icon: <FaTrophy />,
      text: "5 star on CodeChef [happyachhada](https://www.codechef.com/users/happyachhada)",
    },
    {
      icon: <FaStar />,
      text: " Organizing team member of Codepeak 2022 and Mentor at Codepeak 2023 organized by IIT Guwahati, Patna",
    },
    {
      icon: <FaMedal />,
      text: "2nd Runner up in the Pitch it Up event organized by E-cell, IIT Patna",
    },
    {
      icon: <FaCertificate />,
      text: "[1st Rank](https://practice.geeksforgeeks.org/contest/kinetic-koding-by-indian-institute-of-petroleum-and-energy/leaderboard) in Kinetic Coding contest organized on GFG by IIPE (Indian Institute of Petrolenum and Energy)",
    },
    {
      icon: <FaStar />,
      text: "Secured an All India Rank of 2569 out of more than 0.17 million candidates in JEE Advanced 2021.",
    },
    {
      icon: <FaAward />,
      text: "Topper in screening test organized by PRL(Physics Research Laboratory) in 2020",
    },
    {
      icon: <FaMedal />,
      text: "Under 2k rank in Hackercup organized by Meta.",
    },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            {achievement.icon} {/* Display icon */}
            <span
              dangerouslySetInnerHTML={{
                __html: achievement.text.replace(
                  /\[(.*?)\]\((.*?)\)/g,
                  '<a href="$2" target="_blank" rel="noopener noreferrer" color="light-blue" >$1</a>'
                ),
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;

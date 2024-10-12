import React from "react";
import "./css/ExtraCurricular.css"; // Create a separate CSS file for styles
import { FaUserGraduate, FaCode, FaUsers } from "react-icons/fa"; // Example icons from react-icons

function ExtraCurricular() {
  const activities = [
    {
      icon: <FaUserGraduate />,
      text: "Head Coordinator at TPC (Training & Placement Cell), IIT Patna - Leading a team of 50+ coordinators.",
    },
    {
      icon: <FaCode />,
      text: "Coordinator of Web and App Development for SAAR (Students’ Association for Alumni Relations).",
    },
    {
      icon: <FaUsers />,
      text: "Sub-Coordinator of Web and App Development for NJACK (The Coding Club of IIT Patna).",
    },
    {
      icon: <FaUsers />,
      text: "Sub-Coordinator in Google Developer Student Clubs (GDSC) at IIT Patna.",
    },
  ];

  return (
    <section id="extra-curricular" className="extra-curricular-section">
      <h2>Extra-Curricular Activities</h2>
      <ul className="activities-list">
        {activities.map((activity, index) => (
          <li key={index} className="activity-item">
            {activity.icon} {/* Display icon */}
            <span>{activity.text}</span> {/* Display activity text */}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExtraCurricular;

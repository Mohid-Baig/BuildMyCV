import React, { useState } from "react";
import "../Components/About.css";
import team1 from "../assets/images/mohid.jpg";
import team2 from "../assets/images/soban.jpeg";
import TiltedCard from "../Components/Animation/Card";

const About = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Mohid Baig",
      role: "React Specialist",
      rollNo: "2233132",
      bio: "Frontend expert with strong skills in React.js and UI/UX design. Responsible for the interactive components and smooth user experience of BuildMyCV.",
      image: team1,
    },
    {
      id: 2,
      name: "Soban Inam",
      role: "Web Developer",
      rollNo: "2233206",
      bio: "Full-stack developer specializing in web technologies. Handled the core functionality and integration aspects of BuildMyCV.",
      image: team2,
    },
  ];

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>
          About <span>BuildMyCV</span>
        </h1>
        <p className="university-badge">
          National College of Business Administration and Economics
        </p>
        <p className="about-description">
          A professional resume builder created by 4th Semester Computer Science
          students
        </p>
      </div>

      <div className="team-cards-container">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className={`team-member-card ${
              expandedCard === member.id ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(member.id)}
          >
            <div className="tilted-card-wrapper">
              <TiltedCard
                imageSrc={member.image}
                captionText={`${member.name} - ${member.role}`}
              />
            </div>

            {expandedCard === member.id && (
              <div className="member-details">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="roll-no">Roll No: {member.rollNo}</p>
                <p className="bio">{member.bio}</p>
                <div className="university-info">
                  <p>NCBA&E - Computer Science</p>
                  <p>4th Semester</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="project-info">
        <h2>About The Project</h2>
        <p>
          BuildMyCV is a final semester project developed as part of our Web
          Engineering course in the Computer Science curriculum at NCBA&E. The
          platform helps users create professional resumes quickly and easily
          with customizable templates. Our goal is to simplify the job
          application process for students and professionals alike.
        </p>
      </div>
    </div>
  );
};

export default About;

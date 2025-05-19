import React, { useState, useEffect } from "react";
import "../Components/About.css";

const About = () => {
  const [activeModal, setActiveModal] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Mohid Baig",
      role: "React Specialist",
      rollNo: "2233132",
      bio: "Frontend expert with strong skills in React.js and UI/UX design. Responsible for the interactive components and smooth user experience of BuildMyCV.",
    },
    {
      id: 2,
      name: "Soban Inam",
      role: "Web Developer",
      rollNo: "2233206",
      bio: "Full-stack developer specializing in web technologies. Handled the core functionality and integration aspects of BuildMyCV.",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("member-modal")) {
        setActiveModal(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    if (activeModal !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [activeModal]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveModal(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const openModal = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>
          About <span>BuildMyCV</span>
        </h1>
        <div className="university-badge">
          National College of Business Administration and Economics
        </div>
        <p className="about-description">
          A professional resume builder created by 4th Semester Computer Science
          students
        </p>
      </div>

      <div className="team-section">
        <h2 className="team-heading">Our Team</h2>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-card"
              onClick={() => openModal(member.id)}
            >
              <div className="member-initials">
                {member.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Modals */}
      {teamMembers.map((member) => (
        <div
          key={`modal-${member.id}`}
          className={`member-modal ${
            activeModal === member.id ? "active" : ""
          }`}
        >
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header-initials">
                {member.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <div className="modal-header-info">
                <h3>{member.name}</h3>
                <p className="modal-role">{member.role}</p>
                <p className="modal-roll">Roll No: {member.rollNo}</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-bio">
                <p>{member.bio}</p>
              </div>
            </div>
            <div className="modal-footer">
              <p>NCBA&E - Computer Science</p>
              <p>4th Semester</p>
            </div>
            <div
              className="modal-close"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <span>×</span>
            </div>
          </div>
        </div>
      ))}

      <div className="project-info">
        <h2>About The Project</h2>
        <p>
          BuildMyCV is a semester final project developed as part of our Web
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

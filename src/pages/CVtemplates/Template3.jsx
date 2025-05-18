import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
  faCode,
  faBook,
  faMountain,
  faChess,
} from "@fortawesome/free-solid-svg-icons";

// CSS import would go in your main App.js or index.js:
// import "@fortawesome/fontawesome-svg-core/styles.css";

const Resume3 = () => {
  // You could replace these with props or state from a parent component
  const profileData = {
    name: "Soban Inam",
    title: "Software Developer",
    contact: {
      phone: "+1-234-232-33",
      email: "mughalsobi61@gmail.com",
      website: "www.google.com",
      location: "Pakistan",
    },
    skills: [
      { name: "Angular", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 80 },
      { name: "React", level: 65 },
      { name: "Node.js", level: 60 },
    ],
    education: [
      {
        period: "2020 - 2024",
        degree: "BS in Computer Science",
        school: "NCBA&E",
      },
      {
        period: "2018 - 2020",
        degree: "Intermediate",
        school: "Superior College",
      },
      {
        period: "2016 - 2018",
        degree: "Matric",
        school: "Pakistan Grammar School",
      },
    ],
    languages: [
      { name: "Urdu", level: "Native" },
      { name: "English", level: "Professional" },
    ],
    interests: [
      { name: "Coding", icon: faCode },
      { name: "Reading", icon: faBook },
      { name: "Hiking", icon: faMountain },
      { name: "Chess", icon: faChess },
    ],
    about:
      "I am a passionate software developer with experience in front-end development, focused on building responsive and user-friendly applications. Looking to contribute to innovative projects and grow my technical skills.",
    experience: [
      {
        position: "Senior Software Developer",
        company: "ABC Tech",
        period: "2020 - Present",
        description:
          "Worked on enterprise-level web applications, leading a team of developers and coordinating with stakeholders.",
      },
      {
        position: "Software Developer",
        company: "XYZ Solutions",
        period: "2018 - 2020",
        description:
          "Contributed to various front-end projects using Angular and JavaScript, optimized performance and improved UI/UX.",
      },
      {
        position: "Junior Developer",
        company: "StartUp Hub",
        period: "2016 - 2018",
        description:
          "Built small-scale websites and internal tools under mentorship. Learned Agile development practices.",
      },
    ],
    projects: [
      {
        title: "E-Commerce Dashboard",
        subtitle: "Self-Initiated • 2023",
        description:
          "Developed a responsive dashboard using Angular with real-time data visualization and performance analytics.",
      },
      {
        title: "Health Tracking App",
        subtitle: "Client Project • 2022",
        description:
          "Built a cross-platform mobile application focusing on user health metrics and statistics.",
      },
      {
        title: "Personal Finance Manager",
        subtitle: "Self-Initiated • 2021",
        description:
          "Created a web application to help users track expenses, manage budgets, and visualize spending patterns.",
      },
    ],
    certifications: [
      {
        title: "Angular Certified Developer",
        issuer: "Google • 2023",
      },
      {
        title: "JavaScript Advanced Programming",
        issuer: "Udemy • 2022",
      },
      {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp • 2021",
      },
      {
        title: "Agile Project Management",
        issuer: "Coursera • 2020",
      },
    ],
  };

  // CSS styles inline (in a real project, consider using CSS modules or styled-components)
  const styles = {
    root: {
      fontFamily: "'Raleway', sans-serif",
    },
    body: {
      background: "#e5e7eb",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    },
    container: {
      position: "relative",
      width: "100%",
      maxWidth: "1000px",
      minHeight: "1000px",
      background: "white",
      margin: "50px",
      boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
      display: "grid",
      gridTemplateColumns: "350px 1fr",
    },
    header: {
      gridColumn: "span 2",
      background: "#2c3e50",
      color: "white",
      padding: "30px 40px",
      display: "flex",
      alignItems: "center",
    },
    profileImg: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "4px solid #ecf0f1",
      marginRight: "30px",
    },
    profileImgContent: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    headerContent: {
      flex: 1,
    },
    headerName: {
      fontSize: "32px",
      fontWeight: 600,
      marginBottom: "5px",
    },
    headerTitle: {
      fontSize: "18px",
      color: "#ecf0f1",
      marginBottom: "15px",
    },
    contactBar: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
    },
    contactInfo: {
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
    },
    contactIcon: {
      marginRight: "8px",
      color: "#3498db",
    },
    leftSide: {
      background: "#f5f5f5",
      padding: "40px 30px",
    },
    section: {
      marginBottom: "40px",
    },
    sectionTitle: {
      fontSize: "20px",
      textTransform: "uppercase",
      color: "#2c3e50",
      fontWeight: 600,
      marginBottom: "15px",
      paddingBottom: "10px",
      borderBottom: "2px solid #3498db",
    },
    skillsList: {
      listStyle: "none",
      padding: 0,
    },
    skillItem: {
      marginBottom: "15px",
    },
    skillName: {
      display: "block",
      marginBottom: "5px",
      fontWeight: 500,
      color: "#333",
    },
    skillBar: {
      height: "8px",
      background: "#ddd",
      borderRadius: "4px",
    },
    skillLevel: {
      height: "100%",
      background: "#3498db",
      borderRadius: "4px",
    },
    educationItem: {
      marginBottom: "20px",
    },
    eduDate: {
      color: "#3498db",
      fontWeight: 600,
      marginBottom: "5px",
    },
    eduDegree: {
      fontWeight: 600,
      color: "#333",
      marginBottom: "3px",
    },
    eduSchool: {
      fontSize: "14px",
      color: "#555",
    },
    languagesList: {
      listStyle: "none",
      padding: 0,
    },
    languageItem: {
      marginBottom: "10px",
      fontWeight: 500,
    },
    languageLevel: {
      fontSize: "14px",
      color: "#555",
      fontWeight: "normal",
    },
    interestsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "15px",
    },
    interestItem: {
      textAlign: "center",
      background: "#f9f9f9",
      padding: "15px 10px",
    },
    interestIcon: {
      fontSize: "24px",
      color: "#3498db",
      marginBottom: "8px",
    },
    rightSide: {
      padding: "40px",
    },
    aboutContent: {
      color: "#555",
      lineHeight: 1.6,
      marginBottom: "30px",
    },
    experienceItem: {
      marginBottom: "30px",
      position: "relative",
      paddingLeft: "20px",
      borderLeft: "2px solid #ddd",
    },
    experienceItemBefore: {
      content: '""',
      position: "absolute",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      background: "#3498db",
      left: "-7px",
      top: "5px",
    },
    expPosition: {
      fontWeight: 600,
      color: "#2c3e50",
      marginBottom: "5px",
    },
    expCompany: {
      fontWeight: 500,
      color: "#3498db",
      marginBottom: "5px",
    },
    expDate: {
      fontSize: "14px",
      color: "#777",
      marginBottom: "10px",
    },
    expDesc: {
      color: "#555",
      fontSize: "15px",
      lineHeight: 1.5,
    },
    projectItem: {
      marginBottom: "25px",
      paddingBottom: "25px",
      borderBottom: "1px solid #eee",
    },
    projectTitle: {
      fontWeight: 600,
      color: "#2c3e50",
      marginBottom: "5px",
    },
    projectSubtitle: {
      fontSize: "14px",
      color: "#3498db",
      marginBottom: "10px",
    },
    projectDesc: {
      color: "#555",
      fontSize: "15px",
      lineHeight: 1.5,
    },
    certGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },
    certItem: {
      background: "#f9f9f9",
      padding: "15px",
      borderLeft: "3px solid #3498db",
    },
    certTitle: {
      fontWeight: 600,
      color: "#2c3e50",
      marginBottom: "5px",
    },
    certIssuer: {
      fontSize: "14px",
      color: "#555",
    },
    referenceNote: {
      padding: "15px",
      background: "#f9f9f9",
      color: "#555",
      fontStyle: "italic",
    },
  };

  // Media query styles (in a real application, handle this with CSS or CSS-in-JS solution)
  // This is simplified - for production, consider using a responsive approach with React

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.header}>
          <div style={styles.profileImg}>
            <img
              src="image/one.jpg"
              alt="Profile Picture"
              style={styles.profileImgContent}
            />
          </div>
          <div style={styles.headerContent}>
            <h1 style={styles.headerName}>{profileData.name}</h1>
            <p style={styles.headerTitle}>{profileData.title}</p>
            <div style={styles.contactBar}>
              <div style={styles.contactInfo}>
                <FontAwesomeIcon icon={faPhone} style={styles.contactIcon} />
                <span>{profileData.contact.phone}</span>
              </div>
              <div style={styles.contactInfo}>
                <FontAwesomeIcon icon={faEnvelope} style={styles.contactIcon} />
                <span>{profileData.contact.email}</span>
              </div>
              <div style={styles.contactInfo}>
                <FontAwesomeIcon icon={faGlobe} style={styles.contactIcon} />
                <span>{profileData.contact.website}</span>
              </div>
              <div style={styles.contactInfo}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={styles.contactIcon}
                />
                <span>{profileData.contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side */}
        <div style={styles.leftSide}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Skills</h2>
            <ul style={styles.skillsList}>
              {profileData.skills.map((skill, index) => (
                <li key={index} style={styles.skillItem}>
                  <span style={styles.skillName}>{skill.name}</span>
                  <div style={styles.skillBar}>
                    <div
                      style={{ ...styles.skillLevel, width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Education</h2>
            {profileData.education.map((edu, index) => (
              <div key={index} style={styles.educationItem}>
                <div style={styles.eduDate}>{edu.period}</div>
                <div style={styles.eduDegree}>{edu.degree}</div>
                <div style={styles.eduSchool}>{edu.school}</div>
              </div>
            ))}
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Languages</h2>
            <ul style={styles.languagesList}>
              {profileData.languages.map((lang, index) => (
                <li key={index} style={styles.languageItem}>
                  {lang.name}{" "}
                  <span style={styles.languageLevel}>({lang.level})</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Interests</h2>
            <div style={styles.interestsGrid}>
              {profileData.interests.map((interest, index) => (
                <div key={index} style={styles.interestItem}>
                  <FontAwesomeIcon
                    icon={interest.icon}
                    style={styles.interestIcon}
                  />
                  <div>{interest.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div style={styles.rightSide}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>About Me</h2>
            <p style={styles.aboutContent}>{profileData.about}</p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Experience</h2>
            {profileData.experience.map((exp, index) => (
              <div
                key={index}
                style={{ ...styles.experienceItem, position: "relative" }}
              >
                <div style={styles.experienceItemBefore}></div>
                <div style={styles.expPosition}>{exp.position}</div>
                <div style={styles.expCompany}>{exp.company}</div>
                <div style={styles.expDate}>{exp.period}</div>
                <p style={styles.expDesc}>{exp.description}</p>
              </div>
            ))}
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Projects</h2>
            {profileData.projects.map((project, index) => (
              <div
                key={index}
                style={{
                  ...styles.projectItem,
                  borderBottom:
                    index === profileData.projects.length - 1
                      ? "none"
                      : "1px solid #eee",
                  marginBottom:
                    index === profileData.projects.length - 1 ? 0 : "25px",
                  paddingBottom:
                    index === profileData.projects.length - 1 ? 0 : "25px",
                }}
              >
                <div style={styles.projectTitle}>{project.title}</div>
                <div style={styles.projectSubtitle}>{project.subtitle}</div>
                <p style={styles.projectDesc}>{project.description}</p>
              </div>
            ))}
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Certifications</h2>
            <div style={styles.certGrid}>
              {profileData.certifications.map((cert, index) => (
                <div key={index} style={styles.certItem}>
                  <div style={styles.certTitle}>{cert.title}</div>
                  <div style={styles.certIssuer}>{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>References</h2>
            <p style={styles.referenceNote}>
              Professional references available upon request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume3;

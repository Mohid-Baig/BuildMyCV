import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
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
import styles from "./temp3style";

// Map for icon names to actual FontAwesome icons
const iconMap = {
  faCode,
  faBook,
  faMountain,
  faChess,
};

const Resume3 = () => {
  const [profileData, setProfileData] = useState(null);
  const [hasLocalData, setHasLocalData] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const resumeRef = useRef(null);
  const navigate = useNavigate();
  // Check for saved data in localStorage
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("resumeData");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setProfileData(parsedData);
        setHasLocalData(true);
      }
    } catch (error) {
      console.error("Error parsing resume data:", error);
      setHasLocalData(false);
    }
  }, []);

  const downloadPDF = async () => {
    try {
      setIsDownloading(true);

      // Check if window is defined (we're in the browser)
      if (typeof window === "undefined") {
        throw new Error("PDF generation can only happen in the browser");
      }

      // First, check if the script is already loaded
      let html2pdfScript = document.getElementById("html2pdf-script");

      if (!html2pdfScript) {
        // If script is not loaded, add it to the document
        html2pdfScript = document.createElement("script");
        html2pdfScript.id = "html2pdf-script";
        html2pdfScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
        document.body.appendChild(html2pdfScript);

        // Wait for the script to load
        await new Promise((resolve, reject) => {
          html2pdfScript.onload = resolve;
          html2pdfScript.onerror = reject;
        });
      }

      // At this point, html2pdf should be available globally
      const element = resumeRef.current;
      const opt = {
        margin: 10,
        filename: `${data.personalInfo.firstName}_${data.personalInfo.lastName}_Resume.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      // Use the global html2pdf object
      await window.html2pdf().from(element).set(opt).save();
      setIsDownloading(false);
    } catch (error) {
      console.error("Error generating PDF:", error);
      setIsDownloading(false);
      alert("Failed to download PDF. Please try again.");
    }
  };

  // Handle Edit button click
  const handleEdit = () => {
    navigate("/form");
  };

  // Static fallback data with proper skill levels
  const staticData = {
    personalInfo: {
      firstName: "Soban",
      lastName: "Inam",
      designation: "Software Developer",
      address: "Pakistan",
      email: "mughalsobi61@gmail.com",
      phone: "+1-234-232-33",
      website: "www.google.com",
      imagePreview: "/api/placeholder/120/120", // Using placeholder image
      summary:
        "I am a passionate software developer with experience in front-end development, focused on building responsive and user-friendly applications. Looking to contribute to innovative projects and grow my technical skills.",
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
      { name: "Coding", iconName: "faCode" },
      { name: "Reading", iconName: "faBook" },
      { name: "Hiking", iconName: "faMountain" },
      { name: "Chess", iconName: "faChess" },
    ],
    experiences: [
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

  // Use local data if available, otherwise use static data
  const data = hasLocalData && profileData ? profileData : staticData;

  // Ensure skills have proper level values (0-100)
  const normalizedSkills = (data?.skills || []).map((skill) => {
    if (typeof skill === "string") {
      return { name: skill, level: 70 }; // Default level for string skills
    }
    return {
      name: skill?.name || "",
      level: Math.min(100, Math.max(0, skill?.proficiency || 70)), // Clamp between 0-100
    };
  });

  // Safely access nested properties
  const personalInfo = data?.personalInfo || {};
  const education = Array.isArray(data?.education) ? data.education : [];
  const languages = Array.isArray(data?.languages) ? data.languages : [];
  const interests = Array.isArray(data?.interests) ? data.interests : [];
  const experiences = Array.isArray(data?.experiences) ? data.experiences : [];
  const projects = Array.isArray(data?.projects) ? data.projects : [];
  const certifications = Array.isArray(data?.certifications)
    ? data.certifications
    : [];

  // Helper function to get a default icon if the iconName is invalid
  const getIconFromName = (iconName) => {
    return iconMap[iconName] || faCode; // Default to faCode if icon not found
  };

  return (
    <div>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={downloadPDF}
          disabled={isDownloading}
        >
          {isDownloading ? "Generating PDF..." : "📥 Download PDF"}
        </button>
        <button style={styles.button} onClick={handleEdit}>
          ✏️ Edit Resume
        </button>
      </div>

      <div style={styles.body} ref={resumeRef}>
        <div style={styles.container}>
          {/* Header Section */}
          <div style={styles.header}>
            <div style={styles.profileImg}>
              <img
                src={personalInfo.imagePreview || "/api/placeholder/120/120"}
                alt="Profile"
                style={styles.profileImgContent}
              />
            </div>
            <div style={styles.headerContent}>
              <h1 style={styles.headerName}>
                {`${personalInfo.firstName || ""} ${
                  personalInfo.lastName || ""
                }`}
              </h1>
              <p style={styles.headerTitle}>{personalInfo.designation || ""}</p>
              <div style={styles.contactBar}>
                {personalInfo.phone && (
                  <div style={styles.contactInfo}>
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={styles.contactIcon}
                    />
                    <span>{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.email && (
                  <div style={styles.contactInfo}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={styles.contactIcon}
                    />
                    <span>{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.website && (
                  <div style={styles.contactInfo}>
                    <FontAwesomeIcon
                      icon={faGlobe}
                      style={styles.contactIcon}
                    />
                    <span>{personalInfo.website}</span>
                  </div>
                )}
                {personalInfo.address && (
                  <div style={styles.contactInfo}>
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      style={styles.contactIcon}
                    />
                    <span>{personalInfo.address}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Left Side */}
          <div style={styles.leftSide}>
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Skills</h2>
              <ul style={styles.skillsList}>
                {normalizedSkills.map((skill, index) => (
                  <li key={index} style={styles.skillItem}>
                    <span style={styles.skillName}>{skill.name}</span>
                    <div style={styles.skillBar}>
                      <div
                        style={{
                          ...styles.skillLevel,
                          width: `${skill.proficiency}%`,
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {education.length > 0 && (
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Education</h2>
                {education.map((edu, index) => (
                  <div key={index} style={styles.educationItem}>
                    <div style={styles.eduDate}>{edu?.period || ""}</div>
                    <div style={styles.eduDegree}>{edu?.degree || ""}</div>
                    <div style={styles.eduSchool}>{edu?.school || ""}</div>
                  </div>
                ))}
              </div>
            )}

            {languages.length > 0 && (
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Languages</h2>
                <ul style={styles.languagesList}>
                  {languages.map((lang, index) => (
                    <li key={index} style={styles.languageItem}>
                      {lang?.name || ""}{" "}
                      <span style={styles.languageLevel}>
                        ({lang?.proficiency || ""})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {interests.length > 0 && (
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Interests</h2>
                <div style={styles.interestsGrid}>
                  {interests.map((interest, index) => (
                    <div key={index} style={styles.interestItem}>
                      <FontAwesomeIcon
                        icon={
                          interest?.iconName
                            ? getIconFromName(interest.iconName)
                            : faCode
                        }
                        style={styles.interestIcon}
                      />
                      <div>{interest?.name || ""}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side */}
          <div style={styles.rightSide}>
            {personalInfo.summary && (
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>About Me</h2>
                <p style={styles.aboutContent}>{personalInfo.summary}</p>
              </div>
            )}

            {experiences.length > 0 && (
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Experience</h2>
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    style={{ ...styles.experienceItem, position: "relative" }}
                  >
                    <div style={styles.experienceItemBefore}></div>
                    <div style={styles.expPosition}>{exp?.title || ""}</div>
                    <div style={styles.expCompany}>
                      {exp?.organization || ""}
                    </div>
                    <div style={styles.expDate}>
                      {exp?.startDate || ""} –{" "}
                      {exp?.current ? "Present" : exp?.endDate || ""}
                    </div>
                    <p style={styles.expDesc}>{exp?.description || ""}</p>
                  </div>
                ))}
              </div>
            )}

            {projects.length > 0 && (
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Projects</h2>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.projectItem,
                      borderBottom:
                        index === projects.length - 1
                          ? "none"
                          : "1px solid #eee",
                      marginBottom: index === projects.length - 1 ? 0 : "25px",
                      paddingBottom: index === projects.length - 1 ? 0 : "25px",
                    }}
                  >
                    <div style={styles.projectTitle}>
                      {project?.title || ""}
                    </div>
                    <div style={styles.projectSubtitle}>
                      {project?.subtitle || ""}
                    </div>
                    <p style={styles.projectDesc}>
                      {project?.description || ""}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {certifications.length > 0 && (
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Certifications</h2>
                <div style={styles.certGrid}>
                  {certifications.map((cert, index) => (
                    <div key={index} style={styles.certItem}>
                      <div style={styles.certTitle}>{cert?.name || ""}</div>
                      <div style={styles.certIssuer}>
                        {cert?.organization || ""}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>References</h2>
              <p style={styles.referenceNote}>
                Professional references available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume3;

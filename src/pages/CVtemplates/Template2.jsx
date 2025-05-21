import React, { useState, useEffect, useRef } from "react";
import styles from "./temp2style";
import { useNavigate } from "react-router-dom";

const Resume2 = () => {
  const [resumeData, setResumeData] = useState(null);
  const [hasLocalData, setHasLocalData] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const resumeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const savedData = localStorage.getItem("resumeData");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setResumeData(parsedData);
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

  const handleEdit = () => {
    navigate("/form");
  };

  const staticData = {
    personalInfo: {
      firstName: "Your",
      lastName: "Name",
      designation: "Front-End Developer",
      address: "New York, NY",
      email: "example@gmail.com",
      phone: "+1 2345 6789",
      summary:
        "Creative and detail-oriented Front-End Developer with a passion for responsive design and a firm believer in the mobile-first approach. I combine technical expertise with an eye for design to create engaging and intuitive user experiences. I stay current with emerging technologies and industry trends to deliver modern and innovative solutions.",
      imagePreview: "/api/placeholder/120/120",
    },
    skills: [
      { name: "HTML5" },
      { name: "CSS3/SASS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Responsive Design" },
      { name: "UI/UX Principles" },
      { name: "Webpack" },
      { name: "Git" },
      { name: "REST APIs" },
    ],
    languages: [
      { name: "English", proficiency: "Native", level: 100 },
      { name: "Urdu", proficiency: "Advanced", level: 80 },
      { name: "French", proficiency: "Intermediate", level: 60 },
    ],
    experiences: [
      {
        title: "Lead Front-End Developer",
        organization: "TechSolutions Inc.",
        startDate: "2023",
        endDate: "Present",
        current: true,
        description: [
          "Led the development of the company's flagship web application using React and Next.js",
          "Implemented responsive designs that improved mobile user engagement by 45%",
          "Mentored junior developers and conducted code reviews to ensure high code quality",
          "Collaborated with UX/UI designers to create seamless user experiences",
        ],
      },
      {
        title: "Front-End Developer",
        organization: "WebCraft Studios",
        startDate: "2021",
        endDate: "2023",
        current: false,
        description: [
          "Developed and maintained multiple client websites using HTML5, CSS3, and JavaScript",
          "Built reusable components and front-end libraries for future use",
          "Optimized applications for maximum speed and scalability",
          "Collaborated with back-end developers to integrate user-facing elements with server-side logic",
        ],
      },
    ],
    education: [
      {
        degree: "M.S. in Computer Science",
        school: "Tech University",
        startDate: "2019",
        endDate: "2021",
      },
      {
        degree: "B.S. in Web Development",
        school: "State University",
        startDate: "2015",
        endDate: "2019",
      },
    ],
    certifications: [
      {
        name: "Advanced React Developer",
        organization: "Frontend Masters",
        date: "2022",
      },
      {
        name: "UI/UX Design Fundamentals",
        organization: "Design Academy",
        date: "2021",
      },
    ],
    hobbies: ["Running", "Reading", "Guitar", "Travel"],
  };

  // Use local data if available, otherwise use static data
  const data = hasLocalData && resumeData ? resumeData : staticData;

  // Helper function to render description items
  const renderDescriptionItems = (items) => {
    if (!items) return null;

    if (Array.isArray(items)) {
      return items.map((item, index) => (
        <li key={index} style={styles.jobDescriptionItem}>
          <span style={styles.jobDescriptionBullet}>→</span>
          {typeof item === "string" ? item : ""}
        </li>
      ));
    }

    if (typeof items === "string") {
      return items.split("\n").map((item, index) => (
        <li key={index} style={styles.jobDescriptionItem}>
          <span style={styles.jobDescriptionBullet}>→</span>
          {item}
        </li>
      ));
    }

    return null;
  };

  // Only render section if it has data
  const renderSection = (sectionData, renderFunction) => {
    if (!sectionData) return null;

    if (Array.isArray(sectionData)) {
      return sectionData.length > 0 ? renderFunction() : null;
    }

    if (typeof sectionData === "object" && sectionData !== null) {
      return Object.values(sectionData).some(
        (val) => val !== undefined && val !== null && val !== ""
      )
        ? renderFunction()
        : null;
    }

    return sectionData ? renderFunction() : null;
  };

  // Safely get data with fallbacks
  const personalInfo = data?.personalInfo || {};
  const skills = Array.isArray(data?.skills) ? data.skills : staticData.skills;
  const languages = Array.isArray(data?.languages)
    ? data.languages
    : staticData.languages;
  const experiences = Array.isArray(data?.experiences)
    ? data.experiences
    : staticData.experiences;
  const education = Array.isArray(data?.education)
    ? data.education
    : staticData.education;
  const certifications = Array.isArray(data?.certifications)
    ? data.certifications
    : staticData.certifications;
  const hobbies = Array.isArray(data?.hobbies)
    ? data.hobbies
    : staticData.hobbies;

  return (
    <div style={styles.pageContainer}>
      {/* Action Buttons */}
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

      {/* Resume Content (to be converted to PDF) */}
      <div style={styles.body}>
        <div style={styles.resume} ref={resumeRef}>
          {/* Header Section */}
          <div style={styles.header}>
            {personalInfo.imagePreview && (
              <div style={styles.profileImageContainer}>
                <img
                  src={personalInfo.imagePreview}
                  alt="Profile"
                  style={styles.profileImage}
                />
              </div>
            )}
            <div style={styles.headerContent}>
              <h1 style={styles.headerName}>
                {`${personalInfo.firstName || ""} ${
                  personalInfo.lastName || ""
                }`}
              </h1>
              {personalInfo.designation && (
                <p style={styles.headerTitle}>{personalInfo.designation}</p>
              )}
              <div style={styles.contactBar}>
                {personalInfo.phone && (
                  <div style={styles.contactItem}>
                    <span style={styles.contactIcon}>📱</span>
                    <span>{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.email && (
                  <div style={styles.contactItem}>
                    <span style={styles.contactIcon}>📧</span>
                    <span>{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.address && (
                  <div style={styles.contactItem}>
                    <span style={styles.contactIcon}>📍</span>
                    <span>{personalInfo.address}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div style={styles.mainContent}>
            {/* Left Column */}
            <div>
              {/* About Me */}
              {renderSection(personalInfo.summary, () => (
                <div style={styles.contentSection}>
                  <h2 style={styles.sectionTitle}>About Me</h2>
                  <div style={styles.aboutMe}>{personalInfo.summary}</div>
                </div>
              ))}

              {/* Work Experience */}
              {renderSection(experiences, () => (
                <div style={styles.contentSection}>
                  <h2 style={styles.sectionTitle}>Experience</h2>
                  {experiences.map((exp, index) => (
                    <div key={index} style={styles.experienceCard}>
                      <div style={styles.experienceHeader}>
                        <h3 style={styles.jobTitle}>{exp?.title || ""}</h3>
                        <span style={styles.jobDuration}>
                          {exp?.startDate || ""} –{" "}
                          {exp?.current ? "Present" : exp?.endDate || ""}
                        </span>
                      </div>
                      <p style={styles.companyName}>
                        <span style={styles.companyIcon}>🏢</span>
                        {exp?.organization || ""}
                      </p>
                      <ul style={styles.jobDescription}>
                        {renderDescriptionItems(exp?.description)}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}

              {/* Education */}
              {renderSection(education, () => (
                <div style={styles.contentSection}>
                  <h2 style={styles.sectionTitle}>Education</h2>
                  {education.map((edu, index) => (
                    <div key={index} style={styles.experienceCard}>
                      <div style={styles.experienceHeader}>
                        <h3 style={styles.jobTitle}>{edu?.degree || ""}</h3>
                        <span style={styles.jobDuration}>
                          {edu?.startDate || ""} – {edu?.endDate || ""}
                        </span>
                      </div>
                      <p style={styles.companyName}>
                        <span style={styles.companyIcon}>🎓</span>
                        {edu?.school || ""}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div>
              {/* Skills */}
              {renderSection(skills, () => (
                <div style={styles.contentSection}>
                  <h2 style={styles.sectionTitle}>Skills</h2>
                  <div style={styles.skillsContainer}>
                    {skills.map((skill, index) => (
                      <span key={index} style={styles.skillTag}>
                        {skill?.name || skill || ""}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Languages */}
              {renderSection(languages, () => (
                <div style={styles.contentSection}>
                  <h2 style={styles.sectionTitle}>Languages</h2>
                  {languages.map((lang, index) => (
                    <div key={index} style={styles.languageItem}>
                      <div style={styles.languageInfo}>
                        <span style={styles.languageName}>
                          {lang?.name || ""}
                        </span>
                        <span style={styles.languageLevel}>
                          {lang?.proficiency || ""}
                        </span>
                      </div>
                      {/* <div style={styles.languageBar}>
                        <div
                          style={{
                            ...styles.languageProgress,
                            width: `${lang?.level || 0}%`,
                          }}
                        ></div>
                      </div> */}
                    </div>
                  ))}
                </div>
              ))}

              {/* Certifications */}
              {renderSection(certifications, () => (
                <div style={styles.contentSection}>
                  <h2 style={styles.sectionTitle}>Certifications</h2>
                  {certifications.map((cert, index) => (
                    <div key={index} style={styles.experienceCard}>
                      <h3 style={styles.jobTitle}>{cert?.name || ""}</h3>
                      <p style={styles.companyName}>
                        <span style={styles.companyIcon}>🏆</span>
                        {cert?.organization || ""}{" "}
                        {cert?.date && `(${cert.date})`}
                      </p>
                    </div>
                  ))}
                </div>
              ))}

              {/* Hobbies */}
              {renderSection(hobbies, () => (
                <div style={styles.contentSection}>
                  <h2 style={styles.sectionTitle}>Hobbies</h2>
                  <div style={styles.hobbiesContainer}>
                    {hobbies.map((hobby, index) => {
                      let hobbyIcon = "✨";
                      const hobbyName = typeof hobby === "string" ? hobby : "";

                      if (hobbyName === "Running") hobbyIcon = "🏃";
                      else if (hobbyName === "Reading") hobbyIcon = "📚";
                      else if (hobbyName === "Guitar") hobbyIcon = "🎸";
                      else if (hobbyName === "Travel") hobbyIcon = "✈️";

                      return (
                        <div key={index} style={styles.hobbyItem}>
                          <span style={styles.hobbyIcon}>{hobbyIcon}</span>
                          <span>{hobbyName}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Extending the styles object with new button styles
// const buttonStyles = {

// };

// // Merge the new button styles with the existing styles
// const mergedStyles = { ...styles, ...buttonStyles };

export default Resume2;

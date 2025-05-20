import React, { useState, useEffect } from "react";
import styles from "./temp4style";

const Resume4 = () => {
  const [resumeData, setResumeData] = useState(null);
  const [hasLocalData, setHasLocalData] = useState(false);

  // Check for saved data in localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
      setResumeData(JSON.parse(savedData));
      setHasLocalData(true);
    }
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "short" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Static fallback data
  const staticData = {
    personalInfo: {
      firstName: "Soban",
      lastName: "Inam",
      designation: "Software Developer",
      address: "Pakistan",
      email: "mughalsobi61@gmail.com",
      phone: "+1-234-232-33",
      website: "www.google.com",
      summary:
        "I am a passionate software developer with experience in front-end development, focused on building responsive and user-friendly applications. Looking to contribute to innovative projects and grow my technical skills. With a strong foundation in Angular, JavaScript, and web technologies, I strive to create clean, efficient, and maintainable code while delivering exceptional user experiences.",
      imagePreview: "/api/placeholder/180/180",
    },
    skills: [
      { name: "Angular", proficiency: 90 }, // Changed percentage to proficiency to match component
      { name: "JavaScript", proficiency: 85 },
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 80 },
      { name: "React", proficiency: 65 },
    ],
    languages: [
      { name: "Urdu", proficiency: 5 }, // Changed level to proficiency
      { name: "English", proficiency: 4 },
    ],
    education: [
      {
        startDate: "2020-01-01",
        graduationDate: "2024-01-01",
        degree: "BS in Computer Science",
        school: "NCBA&E", // Changed institution to school to match component
      },
      {
        startDate: "2018-01-01",
        graduationDate: "2020-01-01",
        degree: "Intermediate",
        school: "Superior College",
      },
      {
        startDate: "2016-01-01",
        graduationDate: "2018-01-01",
        degree: "Matric",
        school: "Pakistan Grammar School",
      },
    ],
    experiences: [
      {
        title: "Senior Software Developer", // Changed position to title
        organization: "ABC Tech", // Changed company to organization
        startDate: "2020-01-01",
        current: true,
        description:
          "Worked on enterprise-level web applications, leading a team of developers and coordinating with stakeholders. Implemented new features, optimized performance, and mentored junior developers. Established coding standards and best practices for the front-end development team.",
      },
      {
        title: "Software Developer",
        organization: "XYZ Solutions",
        startDate: "2018-01-01",
        endDate: "2020-01-01",
        current: false,
        description:
          "Contributed to various front-end projects using Angular and JavaScript, optimized performance and improved UI/UX. Collaborated with the design team to implement responsive interfaces and ensure consistent user experience across different devices.",
      },
      {
        title: "Junior Developer",
        organization: "StartUp Hub",
        startDate: "2016-01-01",
        endDate: "2018-01-01",
        current: false,
        description:
          "Built small-scale websites and internal tools under mentorship. Learned Agile development practices and gained valuable experience in full-stack development environments. Participated in code reviews and daily stand-up meetings.",
      },
    ],
    projects: [
      {
        title: "E-Commerce Dashboard",
        subtitle: "Self-Initiated • 2023",
        description:
          "Developed a responsive dashboard using Angular with real-time data visualization and performance analytics. Integrated with multiple APIs and implemented advanced filtering capabilities.",
      },
      {
        title: "Health Tracking App",
        subtitle: "Client Project • 2022",
        description:
          "Built a cross-platform mobile application focusing on user health metrics and statistics. Implemented secure data storage and synchronization across devices.",
      },
      {
        title: "Personal Finance Manager",
        subtitle: "Self-Initiated • 2021",
        description:
          "Created a web application to help users track expenses, manage budgets, and visualize spending patterns. Implemented user authentication and data visualization components.",
      },
      {
        title: "Social Media Analytics Tool",
        subtitle: "Hackathon • 2020",
        description:
          "Developed a tool that analyzes social media engagement metrics and provides actionable insights. Won first place in a 48-hour development competition.",
      },
    ],
    certifications: [
      {
        icon: "fa-certificate", // This is correct
        name: "Angular Certified Developer", // Changed title to name to match component
        organization: "Google • 2023",
      },
      {
        icon: "fa-award",
        name: "JavaScript Advanced Programming",
        organization: "Udemy • 2022",
      },
      {
        icon: "fa-medal",
        name: "Responsive Web Design",
        organization: "freeCodeCamp • 2021",
      },
      {
        icon: "fa-trophy",
        name: "Agile Project Management",
        organization: "Coursera • 2020",
      },
    ],
    interests: [
      { icon: "fa-code", name: "Coding" }, // This is correct
      { icon: "fa-book", name: "Reading" },
      { icon: "fa-mountain", name: "Hiking" },
      { icon: "fa-chess", name: "Chess" },
      { icon: "fa-camera", name: "Photography" },
      { icon: "fa-music", name: "Music" },
    ],
    references:
      "Professional references available upon request. I maintain strong professional relationships with previous employers and colleagues who can attest to my skills, work ethic, and contributions.",
  };

  // Use local data if available, otherwise use static data
  const data = hasLocalData ? { ...staticData, ...resumeData } : staticData;

  // Helper function to render section only if data exists
  const renderSection = (sectionData, renderFunction) => {
    if (Array.isArray(sectionData)) {
      return sectionData.length > 0 ? renderFunction() : null;
    } else if (typeof sectionData === "object" && sectionData !== null) {
      return Object.values(sectionData).some((val) => val)
        ? renderFunction()
        : null;
    }
    return sectionData ? renderFunction() : null;
  };

  return (
    <div style={styles.container}>
      {/* Sidebar Section */}
      <div style={styles.sidebar}>
        <div style={styles.profileSection}>
          <div style={styles.profileImage}>
            <img
              src={data.personalInfo.imagePreview || "/api/placeholder/180/180"}
              alt="Profile"
              style={styles.profileImg}
            />
          </div>
          <h1 style={styles.profileName}>
            {data.personalInfo.firstName} {data.personalInfo.lastName}
          </h1>
          <p style={styles.profileTitle}>{data.personalInfo.designation}</p>
        </div>

        {/* Contact */}
        {renderSection(data.personalInfo, () => (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Contact
              <span style={styles.sectionTitleAfter}></span>
            </h2>
            <ul style={styles.contactList}>
              <li style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <i className="fas fa-phone"></i>
                </div>
                <div style={styles.contactText}>{data.personalInfo.phone}</div>
              </li>
              <li style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div style={styles.contactText}>{data.personalInfo.email}</div>
              </li>
              {data.personalInfo.website && (
                <li style={styles.contactItem}>
                  <div style={styles.contactIcon}>
                    <i className="fas fa-globe"></i>
                  </div>
                  <div style={styles.contactText}>
                    {data.personalInfo.website}
                  </div>
                </li>
              )}
              <li style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div style={styles.contactText}>
                  {data.personalInfo.address}
                </div>
              </li>
            </ul>
          </div>
        ))}

        {/* Skills */}
        {renderSection(data.skills, () => (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Skills
              <span style={styles.sectionTitleAfter}></span>
            </h2>
            <ul style={styles.skillsList}>
              {data.skills.map((skill, index) => (
                <Skill
                  key={index}
                  name={skill.name}
                  percentage={skill.proficiency}
                  styles={styles}
                />
              ))}
            </ul>
          </div>
        ))}

        {/* Education */}
        {renderSection(data.education, () => (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Education
              <span style={styles.sectionTitleAfter}></span>
            </h2>
            {data.education.map((edu, index) => (
              <Education
                key={index}
                date={`${formatDate(edu.startDate)} – ${formatDate(
                  edu.graduationDate
                )}`}
                degree={edu.degree}
                institution={edu.school}
                styles={styles}
              />
            ))}
          </div>
        ))}

        {/* Languages */}
        {renderSection(data.languages, () => (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Languages
              <span style={styles.sectionTitleAfter}></span>
            </h2>
            <ul style={styles.languagesList}>
              {data.languages.map((lang, index) => (
                <Language
                  key={index}
                  name={lang.name}
                  level={lang.proficiency}
                  styles={styles}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* About Me */}
        {renderSection(data.personalInfo.summary, () => (
          <div style={styles.mainSection}>
            <h2 style={styles.mainTitle}>
              About Me
              <span style={styles.mainTitleAfter}></span>
            </h2>
            <p style={styles.aboutText}>{data.personalInfo.summary}</p>
          </div>
        ))}

        {/* Professional Experience */}
        {renderSection(data.experiences, () => (
          <div style={styles.mainSection}>
            <h2 style={styles.mainTitle}>
              Professional Experience
              <span style={styles.mainTitleAfter}></span>
            </h2>
            {data.experiences.map((exp, index) => (
              <Experience
                key={index}
                position={exp.title}
                company={exp.organization}
                date={`${formatDate(exp.startDate)} – ${
                  exp.current ? "Present" : formatDate(exp.endDate)
                }`}
                description={exp.description}
                styles={styles}
              />
            ))}
          </div>
        ))}

        {/* Projects */}
        {renderSection(data.projects, () => (
          <div style={styles.mainSection}>
            <h2 style={styles.mainTitle}>
              Projects
              <span style={styles.mainTitleAfter}></span>
            </h2>
            <div style={styles.projectsContainer}>
              {data.projects.map((project, index) => (
                <Project
                  key={index}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  styles={styles}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Certifications */}
        {renderSection(data.certifications, () => (
          <div style={styles.mainSection}>
            <h2 style={styles.mainTitle}>
              Certifications
              <span style={styles.mainTitleAfter}></span>
            </h2>
            <div style={styles.certificationsContainer}>
              {data.certifications.map((cert, index) => (
                <Certification
                  key={index}
                  icon={cert.icon}
                  title={cert.name}
                  organization={cert.organization}
                  styles={styles}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Interests */}
        {renderSection(data.interests, () => (
          <div style={styles.mainSection}>
            <h2 style={styles.mainTitle}>
              Interests
              <span style={styles.mainTitleAfter}></span>
            </h2>
            <div style={styles.interestsContainer}>
              {data.interests.map((interest, index) => (
                <Interest
                  key={index}
                  icon={interest.icon}
                  name={interest.name}
                  styles={styles}
                />
              ))}
            </div>
          </div>
        ))}

        {/* References */}
        {renderSection(data.references, () => (
          <div style={styles.mainSection}>
            <h2 style={styles.mainTitle}>
              References
              <span style={styles.mainTitleAfter}></span>
            </h2>
            <div style={styles.referenceBox}>{data.references}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Skill Component
const Skill = ({ name, percentage, styles }) => {
  const fillStyle = {
    height: "100%",
    width: `${percentage}%`,
    background: "#fc5c7d",
  };

  return (
    <li style={styles.skillItem}>
      <div style={styles.skillName}>
        <span>{name}</span>
        <span style={styles.skillPercentage}>{percentage}%</span>
      </div>
      <div style={styles.skillBar}>
        <div style={fillStyle}></div>
      </div>
    </li>
  );
};

// Education Component
const Education = ({ date, degree, institution, styles }) => {
  const educationBefore = {
    content: '""',
    position: "absolute",
    top: "8px",
    left: 0,
    width: "8px",
    height: "8px",
    background: "#fc5c7d",
    borderRadius: "50%",
  };

  const educationAfter = {
    content: '""',
    position: "absolute",
    top: "16px",
    left: "3.5px",
    width: "1px",
    height: "calc(100% - 8px)",
    background: "rgba(255, 255, 255, 0.2)",
  };

  return (
    <div style={{ ...styles.educationItem, position: "relative" }}>
      <div style={educationBefore}></div>
      <div style={educationAfter}></div>
      <div style={styles.educationDate}>{date}</div>
      <div style={styles.educationDegree}>{degree}</div>
      <div style={styles.educationInstitution}>{institution}</div>
    </div>
  );
};

// Language Component
const Language = ({ name, level, styles }) => {
  return (
    <li style={styles.languageItem}>
      <span style={styles.languageName}>{name}</span>
      <div style={styles.languageLevel}>{level}</div>
    </li>
  );
};

// Experience Component
const Experience = ({ position, company, date, description, styles }) => {
  const experienceBefore = {
    content: '""',
    position: "absolute",
    left: "-10px",
    top: "20px",
    width: "16px",
    height: "16px",
    background: "#fff",
    border: "3px solid #6a82fb",
    borderRadius: "50%",
  };

  return (
    <div style={{ ...styles.experienceItem, position: "relative" }}>
      <div style={experienceBefore}></div>
      <div style={styles.experienceHeader}>
        <div>
          <div style={styles.experiencePosition}>{position}</div>
          <div style={styles.experienceCompany}>{company}</div>
        </div>
        <div style={styles.experienceDate}>{date}</div>
      </div>
      <p style={styles.experienceDescription}>{description}</p>
    </div>
  );
};

// Project Component
const Project = ({ title, subtitle, description, styles }) => {
  return (
    <div style={styles.projectCard}>
      <div style={styles.projectHeader}>
        <div style={styles.projectTitle}>{title}</div>
        <div style={styles.projectSubtitle}>{subtitle}</div>
      </div>
      <div style={styles.projectBody}>
        <p style={styles.projectDescription}>{description}</p>
      </div>
    </div>
  );
};

// Certification Component
const Certification = ({ icon, title, organization, styles }) => {
  return (
    <div style={styles.certificationCard}>
      <div style={styles.certificationIcon}>
        <i className={`fas ${icon}`}></i>
      </div>
      <div>
        <h4 style={styles.certificationInfoH4}>{title}</h4>
        <p style={styles.certificationInfoP}>{organization}</p>
      </div>
    </div>
  );
};

// Interest Component
const Interest = ({ icon, name, styles }) => {
  return (
    <div style={styles.interestBadge}>
      <i className={`fas ${icon}`} style={styles.interestBadgeI}></i>
      <span>{name}</span>
    </div>
  );
};

export default Resume4;

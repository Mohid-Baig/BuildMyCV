import React from "react";

const Resume4 = () => {
  // Scoped styles using CSS-in-JS to prevent global style leakage
  const styles = {
    // Container styles
    container: {
      position: "relative",
      width: "100%",
      maxWidth: "1100px",
      minHeight: "1000px",
      background: "#fff",
      margin: "50px auto",
      boxShadow: "0 15px 40px rgba(149, 157, 165, 0.15)",
      borderRadius: "15px",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "360px 1fr",
    },

    // Sidebar styles
    sidebar: {
      position: "relative",
      background: "#445069",
      color: "#fff",
      padding: "40px 25px",
    },
    profileSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: "30px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      marginBottom: "40px",
    },
    profileImage: {
      width: "180px",
      height: "180px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "5px solid rgba(255, 255, 255, 0.2)",
      marginBottom: "20px",
      position: "relative",
    },
    profileImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    profileName: {
      fontSize: "24px",
      fontWeight: 600,
      marginBottom: "5px",
      textAlign: "center",
      fontFamily: "'Montserrat', sans-serif",
    },
    profileTitle: {
      fontSize: "16px",
      opacity: 0.8,
      marginBottom: "20px",
      textAlign: "center",
      fontWeight: 300,
      fontFamily: "'Montserrat', sans-serif",
    },
    section: {
      marginBottom: "35px",
    },
    sectionTitle: {
      fontSize: "18px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontWeight: 600,
      marginBottom: "20px",
      position: "relative",
      paddingBottom: "10px",
      fontFamily: "'Montserrat', sans-serif",
    },
    sectionTitleAfter: {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "50px",
      height: "3px",
      background: "#fc5c7d",
    },

    // Contact styles
    contactList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
    },
    contactIcon: {
      minWidth: "35px",
      height: "35px",
      background: "rgba(255, 255, 255, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      marginRight: "15px",
      color: "#fff",
    },
    contactText: {
      fontSize: "14px",
      fontWeight: 300,
      fontFamily: "'Montserrat', sans-serif",
    },

    // Skills styles
    skillsList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    skillItem: {
      marginBottom: "20px",
    },
    skillName: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
      fontSize: "14px",
      fontFamily: "'Montserrat', sans-serif",
    },
    skillPercentage: {
      fontWeight: 500,
    },
    skillBar: {
      height: "5px",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "10px",
      overflow: "hidden",
    },

    // Education styles
    educationItem: {
      marginBottom: "20px",
      paddingLeft: "20px",
      position: "relative",
    },
    educationDate: {
      fontSize: "13px",
      fontWeight: 500,
      color: "#fc5c7d",
      marginBottom: "5px",
      fontFamily: "'Montserrat', sans-serif",
    },
    educationDegree: {
      fontSize: "16px",
      fontWeight: 500,
      marginBottom: "3px",
      fontFamily: "'Montserrat', sans-serif",
    },
    educationInstitution: {
      fontSize: "14px",
      opacity: 0.8,
      fontWeight: 300,
      fontFamily: "'Montserrat', sans-serif",
    },

    // Languages styles
    languagesList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    languageItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "12px",
    },
    languageName: {
      fontSize: "14px",
      fontFamily: "'Montserrat', sans-serif",
    },
    languageLevel: {
      display: "flex",
    },
    levelDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.2)",
      margin: "0 3px",
    },
    levelDotActive: {
      background: "#fc5c7d",
    },

    // Main content styles
    mainContent: {
      padding: "50px 40px",
      background: "#fff",
      color: "#444",
    },
    mainSection: {
      marginBottom: "40px",
    },
    mainTitle: {
      fontSize: "24px",
      color: "#445069",
      fontWeight: 600,
      marginBottom: "20px",
      position: "relative",
      paddingBottom: "12px",
      fontFamily: "'Lora', serif",
    },
    mainTitleAfter: {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "60px",
      height: "3px",
      background: "#6a82fb",
    },

    // About text
    aboutText: {
      lineHeight: 1.8,
      fontSize: "15px",
      textAlign: "justify",
      fontFamily: "'Montserrat', sans-serif",
    },

    // Experience styles
    experienceItem: {
      padding: "25px 30px",
      background: "#fcfcfc",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.03)",
      marginBottom: "25px",
      borderLeft: "4px solid #6a82fb",
      position: "relative",
    },
    experienceHeader: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "15px",
    },
    experiencePosition: {
      fontWeight: 600,
      fontSize: "18px",
      color: "#333",
      marginBottom: "5px",
      fontFamily: "'Montserrat', sans-serif",
    },
    experienceCompany: {
      fontSize: "16px",
      color: "#6a82fb",
      fontFamily: "'Montserrat', sans-serif",
    },
    experienceDate: {
      color: "#fc5c7d",
      fontWeight: 500,
      fontSize: "14px",
      fontFamily: "'Montserrat', sans-serif",
    },
    experienceDescription: {
      fontSize: "15px",
      lineHeight: 1.7,
      color: "#444",
      fontFamily: "'Montserrat', sans-serif",
    },

    // Projects styles
    projectsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "25px",
    },
    projectCard: {
      background: "#fcfcfc",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.03)",
      display: "flex",
      flexDirection: "column",
    },
    projectHeader: {
      background: "linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)",
      padding: "15px 20px",
      color: "#fff",
    },
    projectTitle: {
      fontSize: "16px",
      fontWeight: 600,
      marginBottom: "3px",
      fontFamily: "'Montserrat', sans-serif",
    },
    projectSubtitle: {
      fontSize: "13px",
      opacity: 0.8,
      fontFamily: "'Montserrat', sans-serif",
    },
    projectBody: {
      padding: "20px",
      flexGrow: 1,
    },
    projectDescription: {
      fontSize: "14px",
      lineHeight: 1.6,
      color: "#444",
      fontFamily: "'Montserrat', sans-serif",
    },

    // Certifications styles
    certificationsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
    },
    certificationCard: {
      background: "#fcfcfc",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.03)",
      display: "flex",
      alignItems: "center",
    },
    certificationIcon: {
      minWidth: "50px",
      width: "50px",
      height: "50px",
      background: "#6a82fb",
      opacity: 0.8,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "15px",
      color: "#fff",
    },
    certificationInfoH4: {
      fontSize: "15px",
      marginBottom: "5px",
      color: "#333",
      fontFamily: "'Montserrat', sans-serif",
    },
    certificationInfoP: {
      fontSize: "13px",
      color: "#777",
      fontFamily: "'Montserrat', sans-serif",
    },

    // Interests styles
    interestsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
      marginTop: "10px",
    },
    interestBadge: {
      background: "#fcfcfc",
      borderRadius: "50px",
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.03)",
      fontFamily: "'Montserrat', sans-serif",
    },
    interestBadgeI: {
      marginRight: "8px",
      color: "#6a82fb",
    },

    // References styles
    referenceBox: {
      padding: "20px",
      background: "#fcfcfc",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.03)",
      fontStyle: "italic",
      borderLeft: "4px solid #6a82fb",
      color: "#333",
      fontSize: "16px",
      textAlign: "center",
      fontFamily: "'Lora', serif",
      lineHeight: 1.6,
    },

    // Responsive styles
    mediaMobile: {
      container: {
        gridTemplateColumns: "1fr",
        margin: "20px",
      },
      projectsContainer: {
        gridTemplateColumns: "1fr",
      },
      certificationsContainer: {
        gridTemplateColumns: "1fr",
      },
      sidebar: {
        paddingBottom: "50px",
      },
    },
    mediaSmall: {
      experienceHeader: {
        flexDirection: "column",
      },
      experienceDate: {
        marginTop: "10px",
      },
      mainContent: {
        padding: "30px 25px",
      },
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar Section */}
      <div style={styles.sidebar}>
        <div style={styles.profileSection}>
          <div style={styles.profileImage}>
            <img
              src="/api/placeholder/180/180"
              alt="Profile"
              style={styles.profileImg}
            />
          </div>
          <h1 style={styles.profileName}>Soban Inam</h1>
          <p style={styles.profileTitle}>Software Developer</p>
        </div>

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
              <div style={styles.contactText}>+1-234-232-33</div>
            </li>
            <li style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <div style={styles.contactText}>mughalsobi61@gmail.com</div>
            </li>
            <li style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <i className="fas fa-globe"></i>
              </div>
              <div style={styles.contactText}>www.google.com</div>
            </li>
            <li style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div style={styles.contactText}>Pakistan</div>
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Skills
            <span style={styles.sectionTitleAfter}></span>
          </h2>
          <ul style={styles.skillsList}>
            <Skill name="Angular" percentage={90} styles={styles} />
            <Skill name="JavaScript" percentage={85} styles={styles} />
            <Skill name="HTML" percentage={95} styles={styles} />
            <Skill name="CSS" percentage={80} styles={styles} />
            <Skill name="React" percentage={65} styles={styles} />
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Education
            <span style={styles.sectionTitleAfter}></span>
          </h2>
          <Education
            date="2020 - 2024"
            degree="BS in Computer Science"
            institution="NCBA&E"
            styles={styles}
          />
          <Education
            date="2018 - 2020"
            degree="Intermediate"
            institution="Superior College"
            styles={styles}
          />
          <Education
            date="2016 - 2018"
            degree="Matric"
            institution="Pakistan Grammar School"
            styles={styles}
          />
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Languages
            <span style={styles.sectionTitleAfter}></span>
          </h2>
          <ul style={styles.languagesList}>
            <Language name="Urdu" level={5} styles={styles} />
            <Language name="English" level={4} styles={styles} />
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.mainSection}>
          <h2 style={styles.mainTitle}>
            About Me
            <span style={styles.mainTitleAfter}></span>
          </h2>
          <p style={styles.aboutText}>
            I am a passionate software developer with experience in front-end
            development, focused on building responsive and user-friendly
            applications. Looking to contribute to innovative projects and grow
            my technical skills. With a strong foundation in Angular,
            JavaScript, and web technologies, I strive to create clean,
            efficient, and maintainable code while delivering exceptional user
            experiences.
          </p>
        </div>

        <div style={styles.mainSection}>
          <h2 style={styles.mainTitle}>
            Professional Experience
            <span style={styles.mainTitleAfter}></span>
          </h2>

          <Experience
            position="Senior Software Developer"
            company="ABC Tech"
            date="2020 - Present"
            description="Worked on enterprise-level web applications, leading a team of developers and coordinating with stakeholders. Implemented new features, optimized performance, and mentored junior developers. Established coding standards and best practices for the front-end development team."
            styles={styles}
          />

          <Experience
            position="Software Developer"
            company="XYZ Solutions"
            date="2018 - 2020"
            description="Contributed to various front-end projects using Angular and JavaScript, optimized performance and improved UI/UX. Collaborated with the design team to implement responsive interfaces and ensure consistent user experience across different devices."
            styles={styles}
          />

          <Experience
            position="Junior Developer"
            company="StartUp Hub"
            date="2016 - 2018"
            description="Built small-scale websites and internal tools under mentorship. Learned Agile development practices and gained valuable experience in full-stack development environments. Participated in code reviews and daily stand-up meetings."
            styles={styles}
          />
        </div>

        <div style={styles.mainSection}>
          <h2 style={styles.mainTitle}>
            Projects
            <span style={styles.mainTitleAfter}></span>
          </h2>
          <div style={styles.projectsContainer}>
            <Project
              title="E-Commerce Dashboard"
              subtitle="Self-Initiated • 2023"
              description="Developed a responsive dashboard using Angular with real-time data visualization and performance analytics. Integrated with multiple APIs and implemented advanced filtering capabilities."
              styles={styles}
            />

            <Project
              title="Health Tracking App"
              subtitle="Client Project • 2022"
              description="Built a cross-platform mobile application focusing on user health metrics and statistics. Implemented secure data storage and synchronization across devices."
              styles={styles}
            />

            <Project
              title="Personal Finance Manager"
              subtitle="Self-Initiated • 2021"
              description="Created a web application to help users track expenses, manage budgets, and visualize spending patterns. Implemented user authentication and data visualization components."
              styles={styles}
            />

            <Project
              title="Social Media Analytics Tool"
              subtitle="Hackathon • 2020"
              description="Developed a tool that analyzes social media engagement metrics and provides actionable insights. Won first place in a 48-hour development competition."
              styles={styles}
            />
          </div>
        </div>

        <div style={styles.mainSection}>
          <h2 style={styles.mainTitle}>
            Certifications
            <span style={styles.mainTitleAfter}></span>
          </h2>
          <div style={styles.certificationsContainer}>
            <Certification
              icon="fa-certificate"
              title="Angular Certified Developer"
              organization="Google • 2023"
              styles={styles}
            />

            <Certification
              icon="fa-award"
              title="JavaScript Advanced Programming"
              organization="Udemy • 2022"
              styles={styles}
            />

            <Certification
              icon="fa-medal"
              title="Responsive Web Design"
              organization="freeCodeCamp • 2021"
              styles={styles}
            />

            <Certification
              icon="fa-trophy"
              title="Agile Project Management"
              organization="Coursera • 2020"
              styles={styles}
            />
          </div>
        </div>

        <div style={styles.mainSection}>
          <h2 style={styles.mainTitle}>
            Interests
            <span style={styles.mainTitleAfter}></span>
          </h2>
          <div style={styles.interestsContainer}>
            <Interest icon="fa-code" name="Coding" styles={styles} />
            <Interest icon="fa-book" name="Reading" styles={styles} />
            <Interest icon="fa-mountain" name="Hiking" styles={styles} />
            <Interest icon="fa-chess" name="Chess" styles={styles} />
            <Interest icon="fa-camera" name="Photography" styles={styles} />
            <Interest icon="fa-music" name="Music" styles={styles} />
          </div>
        </div>

        <div style={styles.mainSection}>
          <h2 style={styles.mainTitle}>
            References
            <span style={styles.mainTitleAfter}></span>
          </h2>
          <div style={styles.referenceBox}>
            "Professional references available upon request. I maintain strong
            professional relationships with previous employers and colleagues
            who can attest to my skills, work ethic, and contributions."
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for skills with percentage bar
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

// Component for education items
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

// Component for language proficiency
const Language = ({ name, level, styles }) => {
  // Create an array of 5 dots, with 'level' number of them active
  const dots = Array(5)
    .fill()
    .map((_, index) => (
      <span
        key={index}
        style={
          index < level
            ? { ...styles.levelDot, ...styles.levelDotActive }
            : styles.levelDot
        }
      ></span>
    ));

  return (
    <li style={styles.languageItem}>
      <span style={styles.languageName}>{name}</span>
      <div style={styles.languageLevel}>{dots}</div>
    </li>
  );
};

// Component for work experience items
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

// Component for project cards
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

// Component for certification cards
const Certification = ({ icon, title, organization, styles }) => {
  return (
    <div style={styles.certificationCard}>
      <div style={styles.certificationIcon}>
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <div>
        <h4 style={styles.certificationInfoH4}>{title}</h4>
        <p style={styles.certificationInfoP}>{organization}</p>
      </div>
    </div>
  );
};

// Component for interest badges
const Interest = ({ icon, name, styles }) => {
  return (
    <div style={styles.interestBadge}>
      <i className={`fa-solid ${icon}`} style={styles.interestBadgeI}></i>
      <span>{name}</span>
    </div>
  );
};

export default Resume4;

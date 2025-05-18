import React from "react";

const Resume2 = () => {
  // CSS styles converted to React inline styles object
  const styles = {
    // GLOBAL STYLES (converted to component-specific styles)
    colors: {
      primary: "#5c6bc0",
      secondary: "#42a5f5",
      accent: "#f1f8ff",
      background: "#ffffff",
      card: "#f9fbfe",
      textDark: "#2a3042",
      textMedium: "#505a74",
      textLight: "#8896b8",
      white: "#ffffff",
      border: "#e6eef7",
    },

    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
    },

    spacing: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "3rem",
    },

    shadow: {
      sm: "0 1px 3px rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px rgba(0, 0, 0, 0.05)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.04), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
    },

    // COMPONENT STYLES
    body: {
      fontFamily:
        '"Inter", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: "#ffffff",
      color: "#2a3042",
      lineHeight: 1.6,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: "1.5rem",
    },

    resume: {
      width: "100%",
      maxWidth: "850px",
      background: "#ffffff",
      borderRadius: "16px",
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.04), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "1fr",
    },

    header: {
      background: "linear-gradient(135deg, #5c6bc0 0%, #42a5f5 100%)",
      padding: "2rem 3rem",
      color: "#ffffff",
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: "2rem",
    },

    headerContent: {
      flex: 1,
    },

    profileImageContainer: {
      position: "relative",
      zIndex: 2,
    },

    profileImage: {
      width: "120px",
      height: "120px",
      borderRadius: "16px",
      objectFit: "cover",
      border: "4px solid rgba(255, 255, 255, 0.3)",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
    },

    headerName: {
      fontSize: "1.875rem",
      fontWeight: 700,
      marginBottom: "0.25rem",
      letterSpacing: "-0.5px",
    },

    headerTitle: {
      fontSize: "1.125rem",
      fontWeight: 500,
      marginBottom: "1rem",
      opacity: 0.9,
    },

    contactBar: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5rem",
    },

    contactItem: {
      display: "flex",
      alignItems: "center",
      fontSize: "0.875rem",
    },

    contactIcon: {
      marginRight: "0.5rem",
      opacity: 0.9,
      fontSize: "1.125rem",
    },

    mainContent: {
      padding: "3rem",
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "3rem",
    },

    contentSection: {
      marginBottom: "2rem",
    },

    sectionTitle: {
      fontSize: "1.25rem",
      color: "#5c6bc0",
      marginBottom: "1.5rem",
      fontWeight: 600,
      position: "relative",
      paddingBottom: "0.5rem",
      borderBottom: "3px solid transparent",
      backgroundImage: "linear-gradient(to right, #5c6bc0, #42a5f5)",
      backgroundSize: "40px 3px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left bottom",
    },

    aboutMe: {
      fontSize: "1rem",
      color: "#505a74",
      lineHeight: 1.8,
      marginBottom: "2rem",
      padding: "1.5rem",
      backgroundColor: "#f9fbfe",
      borderRadius: "12px",
      border: "1px solid #e6eef7",
    },

    experienceCard: {
      backgroundColor: "#f9fbfe",
      borderRadius: "12px",
      padding: "1.5rem",
      marginBottom: "1.5rem",
      border: "1px solid #e6eef7",
      position: "relative",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },

    experienceCardHover: {
      transform: "translateY(-3px)",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    },

    experienceHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "0.5rem",
    },

    jobTitle: {
      fontSize: "1.125rem",
      fontWeight: 600,
      color: "#2a3042",
    },

    jobDuration: {
      fontSize: "0.75rem",
      color: "#8896b8",
      backgroundColor: "#f1f8ff",
      padding: "0.25rem 0.5rem",
      borderRadius: "12px",
    },

    companyName: {
      fontSize: "1rem",
      color: "#505a74",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
    },

    companyIcon: {
      marginRight: "0.5rem",
      color: "#42a5f5",
    },

    jobDescription: {
      listStyle: "none",
      padding: 0,
    },

    jobDescriptionItem: {
      position: "relative",
      paddingLeft: "1.5rem",
      marginBottom: "0.5rem",
      color: "#505a74",
    },

    jobDescriptionBullet: {
      position: "absolute",
      left: 0,
      color: "#42a5f5",
    },

    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "1.5rem",
    },

    skillTag: {
      backgroundColor: "#f1f8ff",
      color: "#5c6bc0",
      fontSize: "0.875rem",
      padding: "0.4rem 0.8rem",
      borderRadius: "20px",
      display: "inline-block",
      fontWeight: 500,
      transition: "transform 0.2s ease",
    },

    skillTagHover: {
      transform: "translateY(-2px)",
    },

    languageItem: {
      marginBottom: "1rem",
    },

    languageInfo: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "0.25rem",
    },

    languageName: {
      fontWeight: 500,
      color: "#505a74",
    },

    languageLevel: {
      fontSize: "0.75rem",
      color: "#8896b8",
    },

    languageBar: {
      height: "6px",
      backgroundColor: "#e9ecef",
      borderRadius: "3px",
      overflow: "hidden",
    },

    languageProgress: {
      height: "100%",
      background: "linear-gradient(to right, #5c6bc0, #42a5f5)",
      borderRadius: "3px",
    },

    hobbiesContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
    },

    hobbyItem: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#f1f8ff",
      padding: "0.5rem 1rem",
      borderRadius: "8px",
      fontSize: "0.875rem",
      color: "#505a74",
      fontWeight: 500,
    },

    hobbyIcon: {
      marginRight: "0.5rem",
      color: "#42a5f5",
    },

    // Media query styles will be handled conditionally in the component
  };

  return (
    <div style={styles.body}>
      <div style={styles.resume}>
        {/* Header Section */}
        <div style={styles.header}>
          <div style={styles.profileImageContainer}>
            <img
              src="/api/placeholder/120/120"
              alt="Profile Photo"
              style={styles.profileImage}
            />
          </div>
          <div style={styles.headerContent}>
            <h1 style={styles.headerName}>Your Name</h1>
            <p style={styles.headerTitle}>Front-End Developer</p>
            <div style={styles.contactBar}>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📱</span>
                <span>+1 2345 6789</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📧</span>
                <span>example@gmail.com</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Left Column */}
          <div className="main-column">
            {/* About Me */}
            <div style={styles.contentSection}>
              <h2 style={styles.sectionTitle}>About Me</h2>
              <div style={styles.aboutMe}>
                Creative and detail-oriented Front-End Developer with a passion
                for responsive design and a firm believer in the mobile-first
                approach. I combine technical expertise with an eye for design
                to create engaging and intuitive user experiences. I stay
                current with emerging technologies and industry trends to
                deliver modern and innovative solutions.
              </div>
            </div>

            {/* Work Experience */}
            <div style={styles.contentSection}>
              <h2 style={styles.sectionTitle}>Experience</h2>

              <div style={styles.experienceCard}>
                <div style={styles.experienceHeader}>
                  <h3 style={styles.jobTitle}>Lead Front-End Developer</h3>
                  <span style={styles.jobDuration}>2023 - Present</span>
                </div>
                <p style={styles.companyName}>
                  <span style={styles.companyIcon}>🏢</span>
                  TechSolutions Inc.
                </p>
                <ul style={styles.jobDescription}>
                  <li style={styles.jobDescriptionItem}>
                    <span style={styles.jobDescriptionBullet}>→</span>
                    Led the development of the company's flagship web
                    application using React and Next.js
                  </li>
                  <li style={styles.jobDescriptionItem}>
                    <span style={styles.jobDescriptionBullet}>→</span>
                    Implemented responsive designs that improved mobile user
                    engagement by 45%
                  </li>
                  <li style={styles.jobDescriptionItem}>
                    <span style={styles.jobDescriptionBullet}>→</span>
                    Mentored junior developers and conducted code reviews to
                    ensure high code quality
                  </li>
                  <li style={styles.jobDescriptionItem}>
                    <span style={styles.jobDescriptionBullet}>→</span>
                    Collaborated with UX/UI designers to create seamless user
                    experiences
                  </li>
                </ul>
              </div>

              <div style={styles.experienceCard}>
                <div style={styles.experienceHeader}>
                  <h3 style={styles.jobTitle}>Front-End Developer</h3>
                  <span style={styles.jobDuration}>2021 - 2023</span>
                </div>
                <p style={styles.companyName}>
                  <span style={styles.companyIcon}>🏢</span>
                  WebCraft Studios
                </p>
                <ul style={styles.jobDescription}>
                  <li style={styles.jobDescriptionItem}>
                    <span style={styles.jobDescriptionBullet}>→</span>
                    Developed and maintained multiple client websites using
                    HTML5, CSS3, and JavaScript
                  </li>
                  <li style={styles.jobDescriptionItem}>
                    <span style={styles.jobDescriptionBullet}>→</span>
                    Built reusable components and front-end libraries for future
                    use
                  </li>
                  <li style={styles.jobDescriptionItem}>
                    <span style={styles.jobDescriptionBullet}>→</span>
                    Optimized applications for maximum speed and scalability
                  </li>
                  <li style={styles.jobDescriptionItem}>
                    <span style={styles.jobDescriptionBullet}>→</span>
                    Collaborated with back-end developers to integrate
                    user-facing elements with server-side logic
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div style={styles.contentSection}>
              <h2 style={styles.sectionTitle}>Education</h2>

              <div style={styles.experienceCard}>
                <div style={styles.experienceHeader}>
                  <h3 style={styles.jobTitle}>M.S. in Computer Science</h3>
                  <span style={styles.jobDuration}>2019 - 2021</span>
                </div>
                <p style={styles.companyName}>
                  <span style={styles.companyIcon}>🎓</span>
                  Tech University
                </p>
              </div>

              <div style={styles.experienceCard}>
                <div style={styles.experienceHeader}>
                  <h3 style={styles.jobTitle}>B.S. in Web Development</h3>
                  <span style={styles.jobDuration}>2015 - 2019</span>
                </div>
                <p style={styles.companyName}>
                  <span style={styles.companyIcon}>🎓</span>
                  State University
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="side-column">
            {/* Skills */}
            <div style={styles.contentSection}>
              <h2 style={styles.sectionTitle}>Skills</h2>
              <div style={styles.skillsContainer}>
                <span style={styles.skillTag}>HTML5</span>
                <span style={styles.skillTag}>CSS3/SASS</span>
                <span style={styles.skillTag}>JavaScript</span>
                <span style={styles.skillTag}>TypeScript</span>
                <span style={styles.skillTag}>React.js</span>
                <span style={styles.skillTag}>Next.js</span>
                <span style={styles.skillTag}>Tailwind CSS</span>
                <span style={styles.skillTag}>Responsive Design</span>
                <span style={styles.skillTag}>UI/UX Principles</span>
                <span style={styles.skillTag}>Webpack</span>
                <span style={styles.skillTag}>Git</span>
                <span style={styles.skillTag}>REST APIs</span>
              </div>
            </div>

            {/* Languages */}
            <div style={styles.contentSection}>
              <h2 style={styles.sectionTitle}>Languages</h2>

              <div style={styles.languageItem}>
                <div style={styles.languageInfo}>
                  <span style={styles.languageName}>English</span>
                  <span style={styles.languageLevel}>Native</span>
                </div>
                <div style={styles.languageBar}>
                  <div
                    style={{ ...styles.languageProgress, width: "100%" }}
                  ></div>
                </div>
              </div>

              <div style={styles.languageItem}>
                <div style={styles.languageInfo}>
                  <span style={styles.languageName}>Spanish</span>
                  <span style={styles.languageLevel}>Advanced</span>
                </div>
                <div style={styles.languageBar}>
                  <div
                    style={{ ...styles.languageProgress, width: "80%" }}
                  ></div>
                </div>
              </div>

              <div style={styles.languageItem}>
                <div style={styles.languageInfo}>
                  <span style={styles.languageName}>French</span>
                  <span style={styles.languageLevel}>Intermediate</span>
                </div>
                <div style={styles.languageBar}>
                  <div
                    style={{ ...styles.languageProgress, width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div style={styles.contentSection}>
              <h2 style={styles.sectionTitle}>Certifications</h2>
              <div style={styles.experienceCard}>
                <h3 style={styles.jobTitle}>Advanced React Developer</h3>
                <p style={styles.companyName}>
                  <span style={styles.companyIcon}>🏆</span>
                  Frontend Masters (2022)
                </p>
              </div>
              <div style={styles.experienceCard}>
                <h3 style={styles.jobTitle}>UI/UX Design Fundamentals</h3>
                <p style={styles.companyName}>
                  <span style={styles.companyIcon}>🏆</span>
                  Design Academy (2021)
                </p>
              </div>
            </div>

            {/* Hobbies */}
            <div style={styles.contentSection}>
              <h2 style={styles.sectionTitle}>Hobbies</h2>
              <div style={styles.hobbiesContainer}>
                <div style={styles.hobbyItem}>
                  <span style={styles.hobbyIcon}>🏃</span>
                  <span>Running</span>
                </div>
                <div style={styles.hobbyItem}>
                  <span style={styles.hobbyIcon}>📚</span>
                  <span>Reading</span>
                </div>
                <div style={styles.hobbyItem}>
                  <span style={styles.hobbyIcon}>🎸</span>
                  <span>Guitar</span>
                </div>
                <div style={styles.hobbyItem}>
                  <span style={styles.hobbyIcon}>✈️</span>
                  <span>Travel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume2;

import React, { useState, useEffect } from "react";
import baseStyles from "./temp1base";

const Resume1 = () => {
  const [isMobile, setIsMobile] = useState(false);
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

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Static fallback data
  const staticData = {
    personalInfo: {
      firstName: "Your",
      lastName: "Name",
      designation: "Software Engineer",
      address: "#1 road, city/state-0011",
      email: "example@gmail.com",
      phone: "+1 2345 6789",
      summary:
        "I am a software engineer with experience in a variety of programming languages and a track record of delivering high-quality code. I am skilled in problem-solving and have a strong background in computer science. I am a strong communicator and enjoy working collaboratively with others.",
      imagePreview: "/api/placeholder/160/160",
    },
    skills: [
      { name: "SQL Database Management", proficiency: "80" },
      { name: "Linux/Unix Command line", proficiency: "75" },
      { name: "Python", proficiency: "85" },
      { name: "C++", proficiency: "70" },
      { name: "JAVA", proficiency: "75" },
    ],
    languages: [
      { name: "English", proficiency: "Proficient" },
      { name: "Hindi", proficiency: "Proficient" },
    ],
    experiences: [
      {
        title: "Senior Software Developer",
        organization: "Company",
        location: "Country",
        startDate: "2022-01-01",
        endDate: "2023-12-31",
        current: false,
        description:
          "Developed and maintained software using Java, Python, and C++\nLed cross-functional teams to deliver successful software projects\nDesigned and implemented scalable architecture for enterprise applications",
      },
      {
        title: "Web Developer",
        organization: "Company",
        location: "Country",
        startDate: "2021-01-01",
        endDate: "2021-12-31",
        current: false,
        description:
          "Developed and maintained various web applications using languages such as HTML, CSS, JavaScript, and PHP\nWorked with cross-functional teams to gather requirements and design user interfaces",
      },
    ],
    education: [
      {
        school: "XYX University",
        degree: "Masters in Software Engineering",
        field: "Software Engineering",
        city: "Bangalore",
        startDate: "2019-01-01",
        graduationDate: "2020-12-31",
        description: "",
      },
      {
        school: "XYX University",
        degree: "Bachelor in Computer Science",
        field: "Computer Science",
        city: "Bangalore",
        startDate: "2015-01-01",
        graduationDate: "2018-12-31",
        description: "",
      },
    ],
  };

  // Use local data if available, otherwise use static data
  const data = hasLocalData ? resumeData : staticData;

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "short" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Combine all CSS variables
  const cssVars = {
    ...baseStyles.mainColors,
    ...baseStyles.fontSizes,
    ...baseStyles.spacing,
    ...baseStyles.shadows,
  };

  // Only render section if it has data
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
    <div style={cssVars}>
      <div
        style={{
          fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          backgroundColor: "var(--color-background)",
          color: "var(--color-text-dark)",
          lineHeight: 1.6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "var(--space-lg)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "850px",
            background: "var(--color-white)",
            borderRadius: "10px",
            boxShadow: "var(--shadow-xl)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
          }}
        >
          {/* Left Sidebar */}
          <div
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-white)",
              padding: isMobile ? "var(--space-lg)" : "var(--space-xl)",
              position: "relative",
            }}
          >
            {/* Background gradient overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                background:
                  "radial-gradient(circle at top right, rgba(52, 152, 219, 0.2), transparent 70%)",
                zIndex: 0,
              }}
            ></div>

            {/* Profile */}
            <div
              style={{
                position: "relative",
                textAlign: "center",
                marginBottom: isMobile ? "var(--space-xl)" : "var(--space-2xl)",
                zIndex: 1,
              }}
            >
              <img
                src={
                  data.personalInfo.imagePreview || "/api/placeholder/160/160"
                }
                alt="Profile"
                style={{
                  width: isMobile ? "120px" : "160px",
                  height: isMobile ? "120px" : "160px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid rgba(255, 255, 255, 0.2)",
                  marginBottom: "var(--space-lg)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                }}
              />
              <h1
                style={{
                  fontSize: "var(--text-2xl)",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  marginBottom: "var(--space-sm)",
                  margin: "0 0 var(--space-sm) 0",
                }}
              >
                {`${data.personalInfo.firstName} ${
                  data.personalInfo.middleName
                    ? data.personalInfo.middleName + " "
                    : ""
                }${data.personalInfo.lastName}`}
              </h1>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {data.personalInfo.designation}
              </p>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "2px",
                background:
                  "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.15), transparent)",
                margin: "var(--space-xl) 0",
              }}
            ></div>

            {/* Contact Information */}
            {renderSection(data.personalInfo, () => (
              <div
                style={{
                  marginBottom: "var(--space-xl)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <h2
                  style={{
                    fontSize: "var(--text-lg)",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "var(--space-lg)",
                    paddingBottom: "var(--space-sm)",
                    position: "relative",
                    margin: "0 0 var(--space-lg) 0",
                  }}
                >
                  Contact
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "30px",
                      height: "2px",
                      backgroundColor: "var(--color-secondary)",
                    }}
                  ></div>
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "var(--space-md)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "28px",
                        height: "28px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "50%",
                        marginRight: "var(--space-md)",
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      📱
                    </div>
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      {data.personalInfo.phone}
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "var(--space-md)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "28px",
                        height: "28px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "50%",
                        marginRight: "var(--space-md)",
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      📧
                    </div>
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      {data.personalInfo.email}
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "var(--space-md)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "28px",
                        height: "28px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "50%",
                        marginRight: "var(--space-md)",
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      📍
                    </div>
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      {data.personalInfo.address}
                    </span>
                  </li>
                </ul>
              </div>
            ))}

            {/* Skills */}
            {renderSection(data.skills, () => (
              <div
                style={{
                  marginBottom: "var(--space-xl)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <h2
                  style={{
                    fontSize: "var(--text-lg)",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "var(--space-lg)",
                    paddingBottom: "var(--space-sm)",
                    position: "relative",
                    margin: "0 0 var(--space-lg) 0",
                  }}
                >
                  Skills
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "30px",
                      height: "2px",
                      backgroundColor: "var(--color-secondary)",
                    }}
                  ></div>
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {data.skills.map((skill, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "var(--space-sm)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "6px",
                          height: "6px",
                          backgroundColor: "var(--color-secondary)",
                          borderRadius: "50%",
                          marginRight: "var(--space-md)",
                        }}
                      ></span>
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Languages */}
            {renderSection(data.languages, () => (
              <div
                style={{
                  marginBottom: "var(--space-xl)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <h2
                  style={{
                    fontSize: "var(--text-lg)",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "var(--space-lg)",
                    paddingBottom: "var(--space-sm)",
                    position: "relative",
                    margin: "0 0 var(--space-lg) 0",
                  }}
                >
                  Languages
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "30px",
                      height: "2px",
                      backgroundColor: "var(--color-secondary)",
                    }}
                  ></div>
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {data.languages.map((language, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "var(--space-sm)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--color-secondary)",
                            borderRadius: "50%",
                            marginRight: "var(--space-md)",
                          }}
                        ></span>
                        <span>{language.name}</span>
                      </div>
                      <span
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        {language.proficiency}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Links - Only show if using local data and links exist */}
            {hasLocalData &&
              renderSection(data.socialLinks, () => (
                <div
                  style={{
                    marginBottom: "var(--space-xl)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <h2
                    style={{
                      fontSize: "var(--text-lg)",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      marginBottom: "var(--space-lg)",
                      paddingBottom: "var(--space-sm)",
                      position: "relative",
                      margin: "0 0 var(--space-lg) 0",
                    }}
                  >
                    Online Presence
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "30px",
                        height: "2px",
                        backgroundColor: "var(--color-secondary)",
                      }}
                    ></div>
                  </h2>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {data.socialLinks.linkedin && (
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "var(--space-sm)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--color-secondary)",
                            borderRadius: "50%",
                            marginRight: "var(--space-md)",
                          }}
                        ></span>
                        <a
                          href={data.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "var(--color-white)",
                            textDecoration: "none",
                            fontSize: "var(--text-sm)",
                          }}
                        >
                          LinkedIn
                        </a>
                      </li>
                    )}
                    {data.socialLinks.github && (
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "var(--space-sm)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--color-secondary)",
                            borderRadius: "50%",
                            marginRight: "var(--space-md)",
                          }}
                        ></span>
                        <a
                          href={data.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "var(--color-white)",
                            textDecoration: "none",
                            fontSize: "var(--text-sm)",
                          }}
                        >
                          GitHub
                        </a>
                      </li>
                    )}
                    {data.socialLinks.portfolio && (
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "var(--space-sm)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--color-secondary)",
                            borderRadius: "50%",
                            marginRight: "var(--space-md)",
                          }}
                        ></span>
                        <a
                          href={data.socialLinks.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "var(--color-white)",
                            textDecoration: "none",
                            fontSize: "var(--text-sm)",
                          }}
                        >
                          Portfolio
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
          </div>

          {/* Main Content */}
          <div
            style={{
              padding: isMobile ? "var(--space-lg)" : "var(--space-xl)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2xl)",
            }}
          >
            {/* About Me */}
            {renderSection(data.personalInfo.summary, () => (
              <section>
                <h2
                  style={{
                    fontSize: "var(--text-2xl)",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "var(--space-lg)",
                    position: "relative",
                    paddingBottom: "var(--space-sm)",
                    color: "var(--color-primary)",
                    margin: "0 0 var(--space-lg) 0",
                  }}
                >
                  Profile
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "50px",
                      height: "3px",
                      backgroundColor: "var(--color-secondary)",
                    }}
                  ></div>
                </h2>
                <p
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--color-text-medium)",
                    lineHeight: 1.8,
                    textAlign: "justify",
                    margin: 0,
                    whiteSpace: "pre-line",
                  }}
                >
                  {data.personalInfo.summary}
                </p>
              </section>
            ))}

            {/* Work Experience */}
            {renderSection(data.experiences, () => (
              <section>
                <h2
                  style={{
                    fontSize: "var(--text-2xl)",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "var(--space-lg)",
                    position: "relative",
                    paddingBottom: "var(--space-sm)",
                    color: "var(--color-primary)",
                    margin: "0 0 var(--space-lg) 0",
                  }}
                >
                  Work Experience
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "50px",
                      height: "3px",
                      backgroundColor: "var(--color-secondary)",
                    }}
                  ></div>
                </h2>

                <div
                  style={{
                    position: "relative",
                  }}
                >
                  {/* Timeline vertical line */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      bottom: "10px",
                      left: "8px",
                      width: "2px",
                      backgroundColor: "#e0e0e0",
                    }}
                  ></div>

                  {data.experiences.map((exp, index) => (
                    <div
                      key={index}
                      style={{
                        position: "relative",
                        paddingLeft: "var(--space-xl)",
                        marginBottom: "var(--space-xl)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "5px",
                          left: 0,
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-white)",
                          border: "3px solid var(--color-secondary)",
                          zIndex: 1,
                        }}
                      ></div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "var(--space-sm)",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "var(--text-lg)",
                            fontWeight: 600,
                            color: "var(--color-text-dark)",
                            margin: 0,
                          }}
                        >
                          {exp.title}
                        </h3>
                        <span
                          style={{
                            fontSize: "var(--text-sm)",
                            color: "var(--color-text-light)",
                          }}
                        >
                          {formatDate(exp.startDate)} –{" "}
                          {exp.current ? "Present" : formatDate(exp.endDate)}
                        </span>
                      </div>
                      <p
                        style={{
                          marginBottom: "var(--space-md)",
                          color: "var(--color-text-medium)",
                          fontStyle: "italic",
                          margin: "0 0 var(--space-md) 0",
                        }}
                      >
                        {exp.organization} – {exp.location}
                      </p>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {exp.description.split("\n").map((item, i) => (
                          <li
                            key={i}
                            style={{
                              position: "relative",
                              paddingLeft: "var(--space-lg)",
                              marginBottom: "var(--space-sm)",
                              color: "var(--color-text-medium)",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: 0,
                                color: "var(--color-secondary)",
                                fontWeight: "bold",
                              }}
                            >
                              •
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Education */}
            {renderSection(data.education, () => (
              <section>
                <h2
                  style={{
                    fontSize: "var(--text-2xl)",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "var(--space-lg)",
                    position: "relative",
                    paddingBottom: "var(--space-sm)",
                    color: "var(--color-primary)",
                    margin: "0 0 var(--space-lg) 0",
                  }}
                >
                  Education
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "50px",
                      height: "3px",
                      backgroundColor: "var(--color-secondary)",
                    }}
                  ></div>
                </h2>

                <div
                  style={{
                    position: "relative",
                  }}
                >
                  {/* Timeline vertical line */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      bottom: "10px",
                      left: "8px",
                      width: "2px",
                      backgroundColor: "#e0e0e0",
                    }}
                  ></div>

                  {data.education.map((edu, index) => (
                    <div
                      key={index}
                      style={{
                        position: "relative",
                        paddingLeft: "var(--space-xl)",
                        marginBottom: "var(--space-xl)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "5px",
                          left: 0,
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-white)",
                          border: "3px solid var(--color-secondary)",
                          zIndex: 1,
                        }}
                      ></div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "var(--space-sm)",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "var(--text-lg)",
                            fontWeight: 600,
                            color: "var(--color-text-dark)",
                            margin: 0,
                          }}
                        >
                          {edu.degree}
                        </h3>
                        <span
                          style={{
                            fontSize: "var(--text-sm)",
                            color: "var(--color-text-light)",
                          }}
                        >
                          {formatDate(edu.startDate)} –{" "}
                          {formatDate(edu.graduationDate)}
                        </span>
                      </div>
                      <p
                        style={{
                          color: "var(--color-text-medium)",
                          fontStyle: "italic",
                          margin: 0,
                        }}
                      >
                        {edu.school}, {edu.city}
                      </p>
                      {edu.description && (
                        <p
                          style={{
                            color: "var(--color-text-medium)",
                            marginTop: "var(--space-sm)",
                          }}
                        >
                          {edu.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Projects - Only show if using local data and projects exist */}
            {hasLocalData &&
              renderSection(data.projects, () => (
                <section>
                  <h2
                    style={{
                      fontSize: "var(--text-2xl)",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      marginBottom: "var(--space-lg)",
                      position: "relative",
                      paddingBottom: "var(--space-sm)",
                      color: "var(--color-primary)",
                      margin: "0 0 var(--space-lg) 0",
                    }}
                  >
                    Projects
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "50px",
                        height: "3px",
                        backgroundColor: "var(--color-secondary)",
                      }}
                    ></div>
                  </h2>

                  {data.projects.map((project, index) => (
                    <div
                      key={index}
                      style={{
                        marginBottom: "var(--space-xl)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "var(--space-sm)",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "var(--text-lg)",
                            fontWeight: 600,
                            color: "var(--color-text-dark)",
                            margin: 0,
                          }}
                        >
                          {project.title}
                        </h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontSize: "var(--text-sm)",
                              color: "var(--color-primary)",
                            }}
                          >
                            View Project
                          </a>
                        )}
                      </div>
                      <p
                        style={{
                          color: "var(--color-text-medium)",
                          lineHeight: 1.8,
                          margin: "0 0 var(--space-sm) 0",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {project.description}
                      </p>
                      {project.technologies && (
                        <p
                          style={{
                            color: "var(--color-text-light)",
                            fontSize: "var(--text-sm)",
                            fontStyle: "italic",
                            margin: 0,
                          }}
                        >
                          <strong>Technologies:</strong> {project.technologies}
                        </p>
                      )}
                    </div>
                  ))}
                </section>
              ))}

            {/* Certifications - Only show if using local data and certifications exist */}
            {hasLocalData &&
              renderSection(data.certifications, () => (
                <section>
                  <h2
                    style={{
                      fontSize: "var(--text-2xl)",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      marginBottom: "var(--space-lg)",
                      position: "relative",
                      paddingBottom: "var(--space-sm)",
                      color: "var(--color-primary)",
                      margin: "0 0 var(--space-lg) 0",
                    }}
                  >
                    Certifications
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "50px",
                        height: "3px",
                        backgroundColor: "var(--color-secondary)",
                      }}
                    ></div>
                  </h2>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {data.certifications.map((cert, index) => (
                      <li
                        key={index}
                        style={{
                          marginBottom: "var(--space-lg)",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "var(--text-lg)",
                            fontWeight: 600,
                            color: "var(--color-text-dark)",
                            margin: "0 0 var(--space-xs) 0",
                          }}
                        >
                          {cert.name}
                        </h3>
                        <p
                          style={{
                            color: "var(--color-text-medium)",
                            fontStyle: "italic",
                            margin: "0 0 var(--space-xs) 0",
                          }}
                        >
                          {cert.organization}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            gap: "var(--space-md)",
                            fontSize: "var(--text-sm)",
                            color: "var(--color-text-light)",
                          }}
                        >
                          <span>Issued: {formatDate(cert.date)}</span>
                          {cert.expiry && (
                            <span>Expires: {formatDate(cert.expiry)}</span>
                          )}
                        </div>
                        {cert.credential && (
                          <p
                            style={{
                              fontSize: "var(--text-sm)",
                              color: "var(--color-primary)",
                              margin: "var(--space-xs) 0 0 0",
                            }}
                          >
                            Credential: {cert.credential}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume1;

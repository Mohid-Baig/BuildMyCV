import React, { useState, useEffect } from "react";

const Resume1 = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Base styles
  const baseStyles = {
    // GLOBAL STYLES
    mainColors: {
      "--color-primary": "#2c3e50",
      "--color-secondary": "#3498db",
      "--color-background": "#f9f9f9",
      "--color-text-dark": "#2c3e50",
      "--color-text-medium": "#546e7a",
      "--color-text-light": "#78909c",
      "--color-white": "#ffffff",
    },
    fontSizes: {
      "--text-xs": "0.75rem",
      "--text-sm": "0.875rem",
      "--text-base": "1rem",
      "--text-lg": "1.125rem",
      "--text-xl": "1.25rem",
      "--text-2xl": "1.5rem",
      "--text-3xl": "1.875rem",
    },
    spacing: {
      "--space-xs": "0.25rem",
      "--space-sm": "0.5rem",
      "--space-md": "1rem",
      "--space-lg": "1.5rem",
      "--space-xl": "2rem",
      "--space-2xl": "3rem",
    },
    shadows: {
      "--shadow-sm": "0 1px 2px rgba(0, 0, 0, 0.05)",
      "--shadow-md": "0 4px 6px rgba(0, 0, 0, 0.1)",
      "--shadow-lg":
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "--shadow-xl":
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  };

  // Combine all CSS variables
  const cssVars = {
    ...baseStyles.mainColors,
    ...baseStyles.fontSizes,
    ...baseStyles.spacing,
    ...baseStyles.shadows,
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
                src="/api/placeholder/160/160"
                alt="Profile Photo"
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
                Your Name
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
                Software Engineer
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
                    +1 2345 6789
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
                    example@gmail.com
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
                    #1 road, city/state-0011
                  </span>
                </li>
              </ul>
            </div>

            {/* Skills */}
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
                {[
                  "SQL Database Management",
                  "Linux/Unix Command line",
                  "Python",
                  "C++",
                  "JAVA",
                ].map((skill, index) => (
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
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
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
                <li
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
                    <span>English</span>
                  </div>
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    Proficient
                  </span>
                </li>
                <li
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
                    <span>Hindi</span>
                  </div>
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    Proficient
                  </span>
                </li>
              </ul>
            </div>

            {/* Hobbies */}
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
                Hobbies
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
                {["Writing", "Cricket", "Music"].map((hobby, index) => (
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
                    <span>{hobby}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                }}
              >
                I am a software engineer with experience in a variety of
                programming languages and a track record of delivering
                high-quality code. I am skilled in problem-solving and have a
                strong background in computer science. I am a strong
                communicator and enjoy working collaboratively with others.
              </p>
            </section>

            {/* Work Experience */}
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

                {/* Experience Item 1 */}
                <div
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
                      Senior Software Developer
                    </h3>
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-text-light)",
                      }}
                    >
                      Jan 2022 – Dec 2023
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
                    Company – Country
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {[
                      "Developed and maintained software using Java, Python, and C++",
                      "Led cross-functional teams to deliver successful software projects",
                      "Designed and implemented scalable architecture for enterprise applications",
                    ].map((item, index) => (
                      <li
                        key={index}
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

                {/* Experience Item 2 */}
                <div
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
                      Web Developer
                    </h3>
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-text-light)",
                      }}
                    >
                      Jan 2021 – Dec 2021
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
                    Company – Country
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {[
                      "Developed and maintained various web applications using languages such as HTML, CSS, JavaScript, and PHP",
                      "Worked with cross-functional teams to gather requirements and design user interfaces",
                    ].map((item, index) => (
                      <li
                        key={index}
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
              </div>
            </section>

            {/* Education */}
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

                {/* Education Item 1 */}
                <div
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
                      Masters in Software Engineering
                    </h3>
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-text-light)",
                      }}
                    >
                      Jan 2019 – Dec 2020
                    </span>
                  </div>
                  <p
                    style={{
                      color: "var(--color-text-medium)",
                      fontStyle: "italic",
                      margin: 0,
                    }}
                  >
                    XYX University, Bangalore
                  </p>
                </div>

                {/* Education Item 2 */}
                <div
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
                      Bachelor in Computer Science
                    </h3>
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-text-light)",
                      }}
                    >
                      Jan 2015 – Dec 2018
                    </span>
                  </div>
                  <p
                    style={{
                      color: "var(--color-text-medium)",
                      fontStyle: "italic",
                      margin: 0,
                    }}
                  >
                    XYX University, Bangalore
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume1;

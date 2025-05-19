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
export default styles;
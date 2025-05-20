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
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "20px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        backgroundColor: "#4a6cf7",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        transition: "background-color 0.3s ease",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },

};
export default styles;
import React, { useState, useEffect } from "react";
import "../Components/ResumeForm.css";

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      middleName: "",
      lastName: "",
      designation: "",
      address: "",
      email: "",
      phone: "",
      website: "",
      linkedin: "",
      github: "",
      summary: "",
      image: null,
      imagePreview: "",
    },
    achievements: [],
    experiences: [],
    education: [],
    projects: [],
    skills: [],
    certifications: [],
  });

  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          personalInfo: {
            ...formData.personalInfo,
            image: file,
            imagePreview: reader.result,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e, section, index = null) => {
    const { name, value } = e.target;

    if (index !== null) {
      const updatedSection = [...formData[section]];
      updatedSection[index][name] = value;
      setFormData({ ...formData, [section]: updatedSection });
    } else {
      setFormData({
        ...formData,
        personalInfo: {
          ...formData.personalInfo,
          [name]: value,
        },
      });
    }
  };

  const addEntry = (section, template) => {
    setFormData({
      ...formData,
      [section]: [...formData[section], { ...template }],
    });
  };

  const removeEntry = (section, index) => {
    const updatedSection = [...formData[section]];
    updatedSection.splice(index, 1);
    setFormData({ ...formData, [section]: updatedSection });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.personalInfo.firstName ||
      !formData.personalInfo.lastName ||
      !formData.personalInfo.email ||
      !formData.personalInfo.phone ||
      !formData.personalInfo.imagePreview
    ) {
      alert("Please fill all required fields including profile picture");
      return;
    }

    // Save to localStorage
    localStorage.setItem("resumeData", JSON.stringify(formData));
    alert("Resume saved successfully!");
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all data?")) {
      setFormData({
        personalInfo: {
          firstName: "",
          middleName: "",
          lastName: "",
          designation: "",
          address: "",
          email: "",
          phone: "",
          website: "",
          linkedin: "",
          github: "",
          summary: "",
          image: null,
          imagePreview: "",
        },
        achievements: [],
        experiences: [],
        education: [],
        projects: [],
        skills: [],
        certifications: [],
      });
      localStorage.removeItem("resumeData");
    }
  };

  return (
    <div className="resume-form-container">
      <h2 className="form-title">Build Your Resume</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="form-section">
          <h3 className="section-title">Personal Information</h3>
          <div className="form-grid cols-3">
            <div className="form-group">
              <label className="form-label">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.personalInfo.firstName}
                onChange={(e) => handleChange(e, "personalInfo")}
                className="form-control"
                placeholder="John"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Middle Name</label>
              <input
                type="text"
                name="middleName"
                value={formData.personalInfo.middleName}
                onChange={(e) => handleChange(e, "personalInfo")}
                className="form-control"
                placeholder="Herbert"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.personalInfo.lastName}
                onChange={(e) => handleChange(e, "personalInfo")}
                className="form-control"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="form-grid cols-3">
            <div className="form-group">
              <label className="form-label">Your Image*</label>
              <input
                type="file"
                name="image"
                onChange={handleImageUpload}
                className="form-control"
                accept="image/*"
                required
              />
              {formData.personalInfo.imagePreview && (
                <div className="image-preview">
                  <img src={formData.personalInfo.imagePreview} alt="Preview" />
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Designation*</label>
              <input
                type="text"
                name="designation"
                value={formData.personalInfo.designation}
                onChange={(e) => handleChange(e, "personalInfo")}
                className="form-control"
                placeholder="Sr. Software Engineer"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Address*</label>
              <input
                type="text"
                name="address"
                value={formData.personalInfo.address}
                onChange={(e) => handleChange(e, "personalInfo")}
                className="form-control"
                placeholder="Lake Street-23"
                required
              />
            </div>
          </div>

          <div className="form-grid cols-3">
            <div className="form-group">
              <label className="form-label">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.personalInfo.email}
                onChange={(e) => handleChange(e, "personalInfo")}
                className="form-control"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone*</label>
              <input
                type="tel"
                name="phone"
                value={formData.personalInfo.phone}
                onChange={(e) => handleChange(e, "personalInfo")}
                className="form-control"
                placeholder="456-768-798"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Website</label>
              <input
                type="url"
                name="website"
                value={formData.personalInfo.website}
                onChange={(e) => handleChange(e, "personalInfo")}
                className="form-control"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>

          <div className="form-grid cols-3">
            <div className="form-group">
              <label className="form-label">LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                value={formData.personalInfo.linkedin}
                onChange={(e) => handleChange(e, "personalInfo")}
                className="form-control"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className="form-group">
              <label className="form-label">GitHub</label>
              <input
                type="url"
                name="github"
                value={formData.personalInfo.github}
                onChange={(e) => handleChange(e, "personalInfo")}
                className="form-control"
                placeholder="https://github.com/yourusername"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Summary*</label>
              <textarea
                name="summary"
                value={formData.personalInfo.summary}
                onChange={(e) => handleChange(e, "personalInfo")}
                className="form-control"
                placeholder="Professional summary..."
                rows="3"
                required
              />
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="form-section">
          <div className="section-header">
            <h3 className="section-title">Achievements</h3>
            <button
              type="button"
              className="add-btn"
              onClick={() =>
                addEntry("achievements", { title: "", description: "" })
              }
            >
              + Add Achievement
            </button>
          </div>

          {formData.achievements.map((achievement, index) => (
            <div key={index} className="form-row">
              <div className="form-grid cols-2">
                <div className="form-group">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={achievement.title}
                    onChange={(e) => handleChange(e, "achievements", index)}
                    className="form-control"
                    placeholder="Achievement title"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    name="description"
                    value={achievement.description}
                    onChange={(e) => handleChange(e, "achievements", index)}
                    className="form-control"
                    placeholder="Achievement description"
                  />
                </div>
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeEntry("achievements", index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="form-section">
          <div className="section-header">
            <h3 className="section-title">Work Experience</h3>
            <button
              type="button"
              className="add-btn"
              onClick={() =>
                addEntry("experiences", {
                  title: "",
                  organization: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                })
              }
            >
              + Add Experience
            </button>
          </div>

          {formData.experiences.map((exp, index) => (
            <div key={index} className="form-row">
              <div className="form-grid cols-3">
                <div className="form-group">
                  <label className="form-label">Title*</label>
                  <input
                    type="text"
                    name="title"
                    value={exp.title}
                    onChange={(e) => handleChange(e, "experiences", index)}
                    className="form-control"
                    placeholder="Job title"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Company*</label>
                  <input
                    type="text"
                    name="organization"
                    value={exp.organization}
                    onChange={(e) => handleChange(e, "experiences", index)}
                    className="form-control"
                    placeholder="Company name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={exp.location}
                    onChange={(e) => handleChange(e, "experiences", index)}
                    className="form-control"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div className="form-grid cols-3">
                <div className="form-group">
                  <label className="form-label">Start Date*</label>
                  <input
                    type="date"
                    name="startDate"
                    value={exp.startDate}
                    onChange={(e) => handleChange(e, "experiences", index)}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={exp.endDate}
                    onChange={(e) => handleChange(e, "experiences", index)}
                    className="form-control"
                    placeholder="Present if current"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description*</label>
                  <textarea
                    name="description"
                    value={exp.description}
                    onChange={(e) => handleChange(e, "experiences", index)}
                    className="form-control"
                    placeholder="Your responsibilities and achievements"
                    rows="3"
                    required
                  />
                </div>
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeEntry("experiences", index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="form-section">
          <div className="section-header">
            <h3 className="section-title">Education</h3>
            <button
              type="button"
              className="add-btn"
              onClick={() =>
                addEntry("education", {
                  school: "",
                  degree: "",
                  city: "",
                  startDate: "",
                  graduationDate: "",
                  description: "",
                })
              }
            >
              + Add Education
            </button>
          </div>

          {formData.education.map((edu, index) => (
            <div key={index} className="form-row">
              <div className="form-grid cols-3">
                <div className="form-group">
                  <label className="form-label">School*</label>
                  <input
                    type="text"
                    name="school"
                    value={edu.school}
                    onChange={(e) => handleChange(e, "education", index)}
                    className="form-control"
                    placeholder="University name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Degree*</label>
                  <input
                    type="text"
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleChange(e, "education", index)}
                    className="form-control"
                    placeholder="Bachelor of Science"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    value={edu.city}
                    onChange={(e) => handleChange(e, "education", index)}
                    className="form-control"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div className="form-grid cols-3">
                <div className="form-group">
                  <label className="form-label">Start Date*</label>
                  <input
                    type="date"
                    name="startDate"
                    value={edu.startDate}
                    onChange={(e) => handleChange(e, "education", index)}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Graduation Date*</label>
                  <input
                    type="date"
                    name="graduationDate"
                    value={edu.graduationDate}
                    onChange={(e) => handleChange(e, "education", index)}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    value={edu.description}
                    onChange={(e) => handleChange(e, "education", index)}
                    className="form-control"
                    placeholder="Notable achievements or coursework"
                    rows="3"
                  />
                </div>
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeEntry("education", index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="form-section">
          <div className="section-header">
            <h3 className="section-title">Projects</h3>
            <button
              type="button"
              className="add-btn"
              onClick={() =>
                addEntry("projects", {
                  title: "",
                  link: "",
                  description: "",
                })
              }
            >
              + Add Project
            </button>
          </div>

          {formData.projects.map((project, index) => (
            <div key={index} className="form-row">
              <div className="form-grid cols-3">
                <div className="form-group">
                  <label className="form-label">Project Name*</label>
                  <input
                    type="text"
                    name="title"
                    value={project.title}
                    onChange={(e) => handleChange(e, "projects", index)}
                    className="form-control"
                    placeholder="Project title"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Project Link</label>
                  <input
                    type="url"
                    name="link"
                    value={project.link}
                    onChange={(e) => handleChange(e, "projects", index)}
                    className="form-control"
                    placeholder="https://example.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description*</label>
                  <textarea
                    name="description"
                    value={project.description}
                    onChange={(e) => handleChange(e, "projects", index)}
                    className="form-control"
                    placeholder="Project details and your contributions"
                    rows="3"
                    required
                  />
                </div>
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeEntry("projects", index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="form-section">
          <div className="section-header">
            <h3 className="section-title">Certifications</h3>
            <button
              type="button"
              className="add-btn"
              onClick={() =>
                addEntry("certifications", {
                  name: "",
                  organization: "",
                  date: "",
                  credential: "",
                })
              }
            >
              + Add Certification
            </button>
          </div>

          {formData.certifications.map((cert, index) => (
            <div key={index} className="form-row">
              <div className="form-grid cols-4">
                <div className="form-group">
                  <label className="form-label">Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={cert.name}
                    onChange={(e) => handleChange(e, "certifications", index)}
                    className="form-control"
                    placeholder="Certification name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Organization*</label>
                  <input
                    type="text"
                    name="organization"
                    value={cert.organization}
                    onChange={(e) => handleChange(e, "certifications", index)}
                    className="form-control"
                    placeholder="Issuing organization"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Date*</label>
                  <input
                    type="date"
                    name="date"
                    value={cert.date}
                    onChange={(e) => handleChange(e, "certifications", index)}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Credential ID</label>
                  <input
                    type="text"
                    name="credential"
                    value={cert.credential}
                    onChange={(e) => handleChange(e, "certifications", index)}
                    className="form-control"
                    placeholder="Credential ID or URL"
                  />
                </div>
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeEntry("certifications", index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="form-section">
          <div className="section-header">
            <h3 className="section-title">Skills</h3>
            <button
              type="button"
              className="add-btn"
              onClick={() => addEntry("skills", { name: "" })}
            >
              + Add Skill
            </button>
          </div>

          <div className="skills-container">
            {formData.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <input
                  type="text"
                  name="name"
                  value={skill.name}
                  onChange={(e) => handleChange(e, "skills", index)}
                  className="form-control skill-input"
                  placeholder="Skill name"
                  required
                />
                <button
                  type="button"
                  className="remove-skill-btn"
                  onClick={() => removeEntry("skills", index)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Save Resume
          </button>
          <button type="button" className="reset-btn" onClick={handleReset}>
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeForm;

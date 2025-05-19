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
      summary: "",
      image: null,
      imagePreview: "",
    },
    socialLinks: {
      website: "",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    languages: [],
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

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [name]: value,
      },
    });
  };

  const handleSocialLinksChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      socialLinks: {
        ...formData.socialLinks,
        [name]: value,
      },
    });
  };

  const handleChange = (e, section, index = null) => {
    const { name, value } = e.target;

    if (index !== null) {
      const updatedSection = [...formData[section]];
      updatedSection[index][name] = value;
      setFormData({ ...formData, [section]: updatedSection });
    }
  };

  const handleSkillChange = (e, index, field) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index][field] = e.target.value;
    setFormData({ ...formData, skills: updatedSkills });
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
          summary: "",
          image: null,
          imagePreview: "",
        },
        socialLinks: {
          website: "",
          linkedin: "",
          github: "",
          twitter: "",
          portfolio: "",
        },
        languages: [],
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
      <h2 className="form-title">Build Your Professional Resume</h2>
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
                onChange={handlePersonalInfoChange}
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
                onChange={handlePersonalInfoChange}
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
                onChange={handlePersonalInfoChange}
                className="form-control"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="form-grid cols-3">
            <div className="form-group">
              <label className="form-label">Your Photo*</label>
              <input
                type="file"
                name="image"
                onChange={handleImageUpload}
                className="form-control custom-file-input"
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
              <label className="form-label">Job Title*</label>
              <input
                type="text"
                name="designation"
                value={formData.personalInfo.designation}
                onChange={handlePersonalInfoChange}
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
                onChange={handlePersonalInfoChange}
                className="form-control"
                placeholder="City, Country"
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
                onChange={handlePersonalInfoChange}
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
                onChange={handlePersonalInfoChange}
                className="form-control"
                placeholder="+92 300 12345678"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Professional Summary*</label>
              <textarea
                name="summary"
                value={formData.personalInfo.summary}
                onChange={handlePersonalInfoChange}
                className="form-control"
                placeholder="Brief overview of your professional background and strengths..."
                rows="3"
                required
              />
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="form-section">
          <h3 className="section-title">Social & Online Presence</h3>
          <div className="form-grid cols-3">
            <div className="form-group">
              <label className="form-label">Personal Website</label>
              <input
                type="url"
                name="website"
                value={formData.socialLinks.website}
                onChange={handleSocialLinksChange}
                className="form-control"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                value={formData.socialLinks.linkedin}
                onChange={handleSocialLinksChange}
                className="form-control"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className="form-group">
              <label className="form-label">GitHub</label>
              <input
                type="url"
                name="github"
                value={formData.socialLinks.github}
                onChange={handleSocialLinksChange}
                className="form-control"
                placeholder="https://github.com/yourusername"
              />
            </div>
          </div>

          <div className="form-grid cols-2">
            <div className="form-group">
              <label className="form-label">Twitter/X</label>
              <input
                type="url"
                name="twitter"
                value={formData.socialLinks.twitter}
                onChange={handleSocialLinksChange}
                className="form-control"
                placeholder="https://twitter.com/yourusername"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Portfolio</label>
              <input
                type="url"
                name="portfolio"
                value={formData.socialLinks.portfolio}
                onChange={handleSocialLinksChange}
                className="form-control"
                placeholder="https://yourportfolio.com"
              />
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="form-section">
          <div className="section-header">
            <h3 className="section-title">Languages</h3>
            <button
              type="button"
              className="add-btn"
              onClick={() =>
                addEntry("languages", { name: "", proficiency: "Intermediate" })
              }
            >
              + Add Language
            </button>
          </div>

          {formData.languages.map((language, index) => (
            <div key={index} className="form-row">
              <div className="form-grid cols-2">
                <div className="form-group">
                  <label className="form-label">Language*</label>
                  <input
                    type="text"
                    name="name"
                    value={language.name}
                    onChange={(e) => handleChange(e, "languages", index)}
                    className="form-control"
                    placeholder="e.g., English, Spanish, French"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Proficiency Level*</label>
                  <select
                    name="proficiency"
                    value={language.proficiency}
                    onChange={(e) => handleChange(e, "languages", index)}
                    className="form-control"
                    required
                  >
                    <option value="Native">Native</option>
                    <option value="Fluent">Fluent</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Basic">Basic</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeEntry("languages", index)}
                aria-label="Remove language"
              >
                ×
              </button>
            </div>
          ))}
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
                  <label className="form-label">Title*</label>
                  <input
                    type="text"
                    name="title"
                    value={achievement.title}
                    onChange={(e) => handleChange(e, "achievements", index)}
                    className="form-control"
                    placeholder="Achievement title"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description*</label>
                  <textarea
                    name="description"
                    value={achievement.description}
                    onChange={(e) => handleChange(e, "achievements", index)}
                    className="form-control"
                    placeholder="Achievement description"
                    rows="2"
                    required
                  />
                </div>
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeEntry("achievements", index)}
                aria-label="Remove achievement"
              >
                ×
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
                  current: false,
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
                  <label className="form-label">Job Title*</label>
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
                    disabled={exp.current}
                  />
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id={`current-job-${index}`}
                      name="current"
                      checked={exp.current}
                      onChange={(e) => {
                        const updatedExperiences = [...formData.experiences];
                        updatedExperiences[index].current = e.target.checked;
                        if (e.target.checked) {
                          updatedExperiences[index].endDate = "";
                        }
                        setFormData({
                          ...formData,
                          experiences: updatedExperiences,
                        });
                      }}
                    />
                    <label
                      htmlFor={`current-job-${index}`}
                      className="checkbox-label"
                    >
                      Current Position
                    </label>
                  </div>
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
                aria-label="Remove experience"
              >
                ×
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
                  field: "",
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
                  <label className="form-label">School/University*</label>
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
                  <label className="form-label">Field of Study*</label>
                  <input
                    type="text"
                    name="field"
                    value={edu.field}
                    onChange={(e) => handleChange(e, "education", index)}
                    className="form-control"
                    placeholder="Computer Science"
                    required
                  />
                </div>
              </div>

              <div className="form-grid cols-3">
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    name="city"
                    value={edu.city}
                    onChange={(e) => handleChange(e, "education", index)}
                    className="form-control"
                    placeholder="City, Country"
                  />
                </div>

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
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  value={edu.description}
                  onChange={(e) => handleChange(e, "education", index)}
                  className="form-control"
                  placeholder="Notable achievements or coursework"
                  rows="2"
                />
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeEntry("education", index)}
                aria-label="Remove education"
              >
                ×
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
                  technologies: "",
                })
              }
            >
              + Add Project
            </button>
          </div>

          {formData.projects.map((project, index) => (
            <div key={index} className="form-row">
              <div className="form-grid cols-2">
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
              </div>

              <div className="form-grid cols-2">
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

                <div className="form-group">
                  <label className="form-label">Technologies Used</label>
                  <textarea
                    name="technologies"
                    value={project.technologies}
                    onChange={(e) => handleChange(e, "projects", index)}
                    className="form-control"
                    placeholder="React, Node.js, MongoDB, etc."
                    rows="3"
                  />
                </div>
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeEntry("projects", index)}
                aria-label="Remove project"
              >
                ×
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
              onClick={() =>
                addEntry("skills", { name: "", proficiency: "50" })
              }
            >
              + Add Skill
            </button>
          </div>

          {formData.skills.map((skill, index) => (
            <div key={index} className="form-row skill-row">
              <div className="form-grid cols-2">
                <div className="form-group">
                  <label className="form-label">Skill Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={skill.name}
                    onChange={(e) => handleSkillChange(e, index, "name")}
                    className="form-control"
                    placeholder="e.g., JavaScript, Project Management"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Proficiency* ({skill.proficiency}%)
                  </label>
                  <div className="range-container">
                    <input
                      type="range"
                      min="10"
                      max="100"
                      step="5"
                      value={skill.proficiency}
                      onChange={(e) =>
                        handleSkillChange(e, index, "proficiency")
                      }
                      className="range-input"
                      required
                    />
                    <div className="proficiency-level">
                      {skill.proficiency < 25 && "Beginner"}
                      {skill.proficiency >= 25 &&
                        skill.proficiency < 50 &&
                        "Elementary"}
                      {skill.proficiency >= 50 &&
                        skill.proficiency < 75 &&
                        "Intermediate"}
                      {skill.proficiency >= 75 &&
                        skill.proficiency < 90 &&
                        "Advanced"}
                      {skill.proficiency >= 90 && "Expert"}
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeEntry("skills", index)}
                aria-label="Remove skill"
              >
                ×
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
                  expiry: "",
                })
              }
            >
              + Add Certification
            </button>
          </div>

          {formData.certifications.map((cert, index) => (
            <div key={index} className="form-row">
              <div className="form-grid cols-2">
                <div className="form-group">
                  <label className="form-label">Certification Name*</label>
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
                  <label className="form-label">Issuing Organization*</label>
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
              </div>

              <div className="form-grid cols-3">
                <div className="form-group">
                  <label className="form-label">Issue Date*</label>
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
                  <label className="form-label">
                    Expiry Date (if applicable)
                  </label>
                  <input
                    type="date"
                    name="expiry"
                    value={cert.expiry}
                    onChange={(e) => handleChange(e, "certifications", index)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Credential ID/URL</label>
                  <input
                    type="text"
                    name="credential"
                    value={cert.credential}
                    onChange={(e) => handleChange(e, "certifications", index)}
                    className="form-control"
                    placeholder="Credential ID or verification URL"
                  />
                </div>
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeEntry("certifications", index)}
                aria-label="Remove certification"
              >
                ×
              </button>
            </div>
          ))}
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

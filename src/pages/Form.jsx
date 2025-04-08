import React, { useState } from "react";
import "../Components/AISuggestionsForm.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    summary: "",
    experiences: [{ role: "", company: "", description: "" }],
    skills: [],
    currentSkill: "",
  });

  const handleChange = (e, index = null, field = null) => {
    if (index !== null) {
      const updatedExperiences = [...formData.experiences];
      updatedExperiences[index][field] = e.target.value;
      setFormData({ ...formData, experiences: updatedExperiences });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { role: "", company: "", description: "" },
      ],
    });
  };

  const addSkill = () => {
    if (formData.currentSkill) {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.currentSkill],
        currentSkill: "",
      });
    }
  };

  const handleSave = () => {
    console.log("Form Data Saved:", formData);
  };

  return (
    <div className="ai-form-container">
      <h2>Build Your Resume</h2>

      <div className="form-section">
        <h3>Personal Information</h3>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-section">
        <h3>Professional Summary</h3>
        <textarea
          name="summary"
          placeholder="Describe your professional background..."
          value={formData.summary}
          onChange={handleChange}
        />
      </div>

      <div className="form-section">
        <h3>Work Experience</h3>
        {formData.experiences.map((exp, index) => (
          <div key={index} className="experience-entry">
            <input
              placeholder="Job Title"
              value={exp.role}
              onChange={(e) => handleChange(e, index, "role")}
            />
            <input
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleChange(e, index, "company")}
            />
            <textarea
              placeholder="Job Description"
              value={exp.description}
              onChange={(e) => handleChange(e, index, "description")}
            />
          </div>
        ))}
        <button onClick={addExperience}>+ Add Another Experience</button>
      </div>

      <div className="form-section">
        <h3>Skills</h3>
        <div className="skills-input">
          <input
            type="text"
            placeholder="Enter a skill (e.g., React, Project Management)"
            value={formData.currentSkill}
            onChange={(e) =>
              setFormData({ ...formData, currentSkill: e.target.value })
            }
          />
          <button onClick={addSkill}>Add Skill</button>
        </div>
        <div className="skills-list">
          {formData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
              <button
                onClick={() => {
                  const updatedSkills = [...formData.skills];
                  updatedSkills.splice(index, 1);
                  setFormData({ ...formData, skills: updatedSkills });
                }}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="save-section">
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Form;

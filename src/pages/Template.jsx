import React, { useState } from "react";
import "../Components/Templates.css";
import template1 from "../assets/images/tp1.jpeg";
import template2 from "../assets/images/tp2.jpeg";
import template3 from "../assets/images/tp3.jpeg";
import template4 from "../assets/images/tp4.jpeg";

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    { id: 1, name: "Modern Professional", image: template1 },
    { id: 2, name: "Creative Designer", image: template2 },
    { id: 3, name: "Minimalist", image: template3 },
    { id: 4, name: "Executive", image: template4 },
  ];

  const handleTemplateClick = (id, e) => {
    e.stopPropagation();
    setSelectedTemplate(id === selectedTemplate ? null : id);
  };

  const handleCloseTemplate = () => {
    setSelectedTemplate(null);
  };

  return (
    <div
      className={`templates-container ${
        selectedTemplate ? "template-selected" : ""
      }`}
      onClick={handleCloseTemplate}
    >
      <h1>Choose Your Template</h1>
      <p>Select a design to start building your resume</p>

      <div className="template-grid">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`template-card ${
              selectedTemplate === template.id ? "selected" : ""
            }`}
            onClick={(e) => handleTemplateClick(template.id, e)}
          >
            <img
              src={template.image}
              alt={template.name}
              className="template-image"
            />
            <div className="template-name">{template.name}</div>
            {selectedTemplate === template.id && (
              <button
                className="use-template-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle template selection
                }}
              >
                Use This Template
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "../Components/Templates.css";
import template1 from "../assets/images/tp1.jpg";
import template2 from "../assets/images/tp2.jpg";
import template3 from "../assets/images/tp3.jpg";
import template4 from "../assets/images/tp4.jpg";

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const modalRef = useRef(null);
  const navigate = useNavigate(); // Hook for navigation

  const templates = [
    {
      id: 1,
      name: "Modern Professional",
      image: template1,
      path: "/template1", // Path to redirect to for this template
    },
    {
      id: 2,
      name: "Creative Designer",
      image: template2,
      path: "/template2",
    },
    {
      id: 3,
      name: "Minimalist",
      image: template3,
      path: "/template3",
    },
    {
      id: 4,
      name: "Executive",
      image: template4,
      path: "/template4",
    },
  ];

  const handleTemplateClick = (id, e) => {
    e.stopPropagation();
    setSelectedTemplate(id === selectedTemplate ? null : id);
  };

  const handleCloseTemplate = () => {
    setSelectedTemplate(null);
  };

  // Function to navigate to the selected template page
  const navigateToTemplate = (templateId) => {
    const template = templates.find((t) => t.id === templateId);
    if (template) {
      console.log(`Navigating to template: ${template.path}`);
      navigate(template.path); // Navigate to the template route
    }
  };

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        setSelectedTemplate(null);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, []);

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
            className="template-card"
            onClick={(e) => handleTemplateClick(template.id, e)}
          >
            <img
              src={template.image}
              alt={template.name}
              className="template-image"
            />
            <div className="template-name">{template.name}</div>
          </div>
        ))}
      </div>

      {selectedTemplate && (
        <div className="template-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{templates.find((t) => t.id === selectedTemplate)?.name}</h2>
            <button className="close-btn" onClick={handleCloseTemplate}>
              ×
            </button>
          </div>
          <div className="modal-content">
            <img
              src={templates.find((t) => t.id === selectedTemplate)?.image}
              alt={templates.find((t) => t.id === selectedTemplate)?.name}
            />
          </div>
          <div className="modal-footer">
            <button
              className="use-template-btn"
              onClick={(e) => {
                e.stopPropagation();
                // Navigate to the selected template page
                navigateToTemplate(selectedTemplate);
              }}
            >
              Use This Template
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Templates;

"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    // Simulate successful form submission
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div id="contact" className="container">
      <h1 className="section__heading">Contact Me</h1>
      <div className="contact">
        <form onSubmit={handleSubmit}>
          <div className="container p-0">
            {submitted && (
              <div className="alert alert-success mb-3" role="alert">
                Thank you for your message! I will get back to you soon.
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="formName" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="formName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formEmail" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                className="form-control"
                id="formEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formMessage" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="formMessage"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="button primary-button">
              Submit
            </button>
          </div>
        </form>

        <div className="contact-info-sidebar">
          <div className="contact-info-title">Contact info</div>
          <div className="contact-info-header">
            <a
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="small-icon" />
              <p>{personalInfo.email}</p>
            </a>
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}>
              <FontAwesomeIcon icon={faPhone} className="small-icon" />
              <p>{personalInfo.phone}</p>
            </a>
          </div>
          <div className="social-links mt-4">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="large-icon" />
            </a>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithubAlt} className="large-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

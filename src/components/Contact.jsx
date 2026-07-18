"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { portfolioData } from "../data/portfolioData";
import Link from "next/link";

const Contact = () => {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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
    <div id="contact" className="container mx-auto px-6 py-24">
      <h1 className="section__heading">Contact Me</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div className="flex flex-col justify-between min-h-[300px] md:min-h-[450px]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight font-medium">
            Let's build
            <br />
            something great.
          </h2>

          <div className="flex gap-6 mt-12 md:mt-auto">
            <Link
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#774bc4] transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
            </Link>
            <Link
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#774bc4] transition-colors"
            >
              <FontAwesomeIcon icon={faGithubAlt} className="text-xl" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-12">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
                Contact Info
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{personalInfo.phone}</p>
                <p>{personalInfo.email}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
                Address
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Gujarat, India</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {submitted && (
              <div
                className="p-4 text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg text-sm font-medium animate-fade-in"
                role="alert"
              >
                Thank you for your message! I will get back to you soon.
              </div>
            )}
            <div className="space-y-12">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name here..."
                required
                className="w-full py-4 bg-transparent border-b border-gray-300 text-gray-900 focus:outline-none focus:border-[#774bc4] transition-colors placeholder-gray-500 font-serif text-lg"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@yourname.com"
                required
                className="w-full py-4 bg-transparent border-b border-gray-300 text-gray-900 focus:outline-none focus:border-[#774bc4] transition-colors placeholder-gray-500 font-serif text-lg"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message here..."
                required
                rows="1"
                className="w-full py-4 bg-transparent border-b border-gray-300 text-gray-900 focus:outline-none focus:border-[#774bc4] transition-colors placeholder-gray-500 font-serif text-lg resize-none"
              />
            </div>
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="px-10 py-4 bg-black text-white hover:bg-gray-800 font-medium rounded-lg text-sm transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

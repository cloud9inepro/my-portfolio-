import React, { useState } from "react";
import "../App.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // 👉 You can integrate EmailJS or Formspree here
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent!");
  };

  return (
    <div className="contact-container">
     <div className="contact-content">
    <div className="contact-info">
     <p className='contact-tel'><strong>Call Us:</strong> <a  href="tel:+2348012345678">+234 801 234 5678</a></p>
    <p><strong>Email:</strong> <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></p>
    </div>
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Message
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Send Message</button>
    </form>
    </div>
    </div>
  );
}

export default Contact;

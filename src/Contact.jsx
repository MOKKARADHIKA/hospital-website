import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";


function Contact() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(0);

  // =======================
  // Accordion Contact Sections
  // =======================
  const contactSections = [
    {
      title: "International Service Enquiries",
      content: (
        <div className="accordion-detail">
          <p><strong>Mr. Santosh Kumar Sahoo</strong></p>
          <p>Vice President, Business Development & International Relations</p>
          <p>Email: <a href="mailto:international.patient@aighospitals.com">international.patient@aighospitals.com</a></p>

          <p><strong>Mr. Niladri B. Samal</strong></p>
          <p>General Manager International Relations</p>
          <p>Email: <a href="mailto:niladrib.samal@aighospitals.com">niladrib.samal@aighospitals.com</a></p>

          <p><strong>Mr. Sandeep Ingle</strong></p>
          <p>General Manager International Relations, GCC and Central Asian Countries</p>
          <p>Email: <a href="mailto:sandeep.ingle@aighospitals.com">sandeep.ingle@aighospitals.com</a></p>
        </div>
      ),
    },
    {
      title: "PSU / GOVT. Enquiries",
      content: (
        <div className="accordion-detail">
          <p><strong>Mr. K. Naga Shiva Raj</strong></p>
          <p>AGM - Corporate Relations & Recovery</p>
          <p>Mob: +91 9849999857</p>
          <p>Email: <a href="mailto:shiva.koppula@aighospitals.com">shiva.koppula@aighospitals.com</a></p>
        </div>
      ),
    },
    {
      title: "Corporate Relations & Insurance / TPA",
      content: (
        <div className="accordion-detail">
          <p><strong>Mr. Amit Chaudhury</strong></p>
          <p>General Manager</p>
          <p>Mob: +91 9000260399</p>
          <p>Email: <a href="mailto:amit.c@aighospitals.com">amit.c@aighospitals.com</a></p>

          <hr />

          <p><strong>AIG Hospitals, Gachibowli</strong></p>
          <p>Address: 1-66/AIG/2 to 5, Mindspace Road, Gachibowli Hyderabad, Telangana 500032</p>
          <p>Ambulance: 040-4244 4244, Appointments: 040 6744 4222</p>
          <p>Email: <a href="mailto:info@aighospitals.com">info@aighospitals.com</a>, Phone: +91-40-4244 4222</p>
          <p>Fax: 91-40-2332 4255</p>
        </div>
      ),
    },
  ];

  // =======================
  // Hospital Locations
  // =======================
  const locations = [
    {
      name: "AIG Hospitals, Gachibowli",
      address: "1-66/AIG/2 to 5, Mindspace Road, Gachibowli Hyderabad, Telangana 500032",
      ambulance: "040-4244 4244",
      appointments: "040 6744 4222",
      email: "info@aighospitals.com",
      phone: "+91-40-4244 4222",
      fax: "91-40-2332 4255",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.427835053182!2d78.377259214871!3d17.439781288100774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b2ed0cf82b%3A0x934b7c836b0f2b4!2sAIG%20Hospitals!5e0!3m2!1sen!2sin!4v1670000000000!5m2!1sen!2sin",
    },
    {
      name: "Asian Institute of Gastroenterology, Somajiguda",
      address: "Somajiguda, Hyderabad, Telangana 500082",
      ambulance: "040-4244 4255",
      appointments: "040 6744 4222",
      email: "info@aighospitals.com",
      phone: "+91-40-4244 4333",
      fax: "91-40-2332 4255",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.427835053182!2d78.383259214871!3d17.428781288100774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b2ee0cf82b%3A0x123456789abcdef!2sAIG%20Somajiguda!5e0!3m2!1sen!2sin!4v1670000000001!5m2!1sen!2sin",
    },
    {
      name: "Asian Institute of Gastroenterology, Banjara Hills",
      address: "Banjara Hills, Hyderabad, Telangana 500034",
      ambulance: "040-4244 4266",
      appointments: "040 6744 4444",
      email: "info@aighospitals.com",
      phone: "+91-40-4244 4222",
      fax: "91-40-2332 4255",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.427835053182!2d78.405259214871!3d17.425781288100774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b2ef0cf82b%3A0xabcdef123456789!2sAIG%20Banjara%20Hills!5e0!3m2!1sen!2sin!4v1670000000002!5m2!1sen!2sin",
    },
  ];

  return (
    <div className="contact-page">
      {/* Banner */}
      <div className="contact-banner">
        <div className="banner-content">
          <div className="banner-image">
            <img src="/images/contact.png" alt="Contact" />
          </div>
          <div className="banner-text">
            <h1>Contact Us</h1>
            <div className="banner-breadcrumb">
              <span className="home-link" onClick={() => navigate("/home")}>
                Home
              </span>{" "}
              / Contact Us
            </div>
          </div>
        </div>
      </div>

      {/* ==================== */}
      {/* Accordion Section */}
      {/* ==================== */}
      <div className="contact-accordion-container">
        {contactSections.map((section, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-title"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span>{section.title}</span>
              <span className="accordion-toggle">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="accordion-content">{section.content}</div>
            )}
          </div>
        ))}
      </div>

      {/* ==================== */}
      {/* Location Sidebar Section */}
      {/* ==================== */}
      <div className="location-sidebar-section">
        <div className="location-sidebar-container">
          {/* Left Sidebar */}
          <div className="location-sidebar-left">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className={`sidebar-item ${
                  selectedLocation === idx ? "active" : ""
                }`}
                onClick={() => setSelectedLocation(idx)}
              >
                {loc.name}
              </div>
            ))}
          </div>

          {/* Right Panel */}
          <div className="location-sidebar-right">
            <div className="location-address">
              <h3>{locations[selectedLocation].name}</h3>
              {locations[selectedLocation].address && (
                <p>
                  <strong>Address:</strong> {locations[selectedLocation].address}
                </p>
              )}
              {locations[selectedLocation].ambulance && (
                <p>
                  <strong>Ambulance:</strong>{" "}
                  {locations[selectedLocation].ambulance}
                </p>
              )}
              {locations[selectedLocation].appointments && (
                <p>
                  <strong>Appointments:</strong>{" "}
                  {locations[selectedLocation].appointments}
                </p>
              )}
              {locations[selectedLocation].email && (
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${locations[selectedLocation].email}`}>
                    {locations[selectedLocation].email}
                  </a>
                </p>
              )}
              {locations[selectedLocation].phone && (
                <p>
                  <strong>Phone:</strong> {locations[selectedLocation].phone}
                </p>
              )}
              {locations[selectedLocation].fax && (
                <p>
                  <strong>Fax:</strong> {locations[selectedLocation].fax}
                </p>
              )}
            </div>

            <div className="location-map">
              <iframe
                src={locations[selectedLocation].mapSrc}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={locations[selectedLocation].name}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
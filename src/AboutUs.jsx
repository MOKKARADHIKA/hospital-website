import React, { useState, useEffect } from "react";
import History from "./History";
import { useNavigate, Link } from "react-router-dom";


function AboutUs({ overviewRef, historyRef, boardRef, showHistory }) { // <-- added showHistory
  const [openCard, setOpenCard] = useState(null);

  // Fade-in animation for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-in");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));
  }, []);

  const toggleCard = (cardName) => {
    setOpenCard(openCard === cardName ? null : cardName);
  };

  return (
    <div className="aboutus-page">

     {/* Banner Section */}
      <div ref={overviewRef} className="about-banner fade-section">

        <div className="banner-text">
          <h1>ABOUT US</h1>
          <p>Delivering Excellence in Healthcare Every Day</p>
        </div>

        {/* Breadcrumb INSIDE banner (bottom center) */}
        <div className="banner-breadcrumb">
          <span
            className="home-link"
            onClick={() => navigate("/home")}
          >
            Home
          </span>
          <span> / About Us</span>
        </div>

      </div>

      {/* Welcome Section */}
      <div className="about-section fade-section">
        <div className="about-image">
          <img src="/images/hospital.jpg" alt="Hospital" />
        </div>
        <div className="about-content">
          <h2>Welcome to HEALTHCARE Hospitals</h2>
          <p><strong>Excellence in healthcare is our everyday commitment.</strong></p>
          <p>
            HEALTHCARE Hospitals is a leading multi-specialty institution offering world-class medical services with advanced technology and expert care.
          </p>
          <p>
            Led by Dr. D Nageshwar Reddy, Chairman & Managing Director, and Dr. G.V. Rao, Director, we cover 8 Centres of Excellence: Gastroenterology, Liver Sciences, Organ Transplant, Pulmonary, Renal, Oncology, Cardiac, and Obesity & Metabolic Therapy.
          </p>
          <p>
            Our hospital is designed to handle complex surgeries including Liver, Kidney, Heart, Pancreas, and Islet Cell transplants, supported by Emergency and Critical Care services.
          </p>
          <p>
            Everything is crafted for patient comfort — from serene interiors to advanced facilities, creating an environment conducive to healing.
          </p>
        </div>
      </div>

      {/* Overview Accordion */}
      <section className="section overview fade-section">
        <h2>Overview</h2>
        <div className="accordion horizontal">
          {/* Vision */}
          <div className="card">
            <div className="card-header" onClick={() => toggleCard("vision")}>
              <span>Vision</span>
              <span className="toggle-symbol">{openCard === "vision" ? "-" : "+"}</span>
            </div>
            {openCard === "vision" && (
              <div className="card-content">
                Excellence and Innovation to ensure best-in-class healthcare at affordable price.
              </div>
            )}
          </div>

          {/* Mission */}
          <div className="card">
            <div className="card-header" onClick={() => toggleCard("mission")}>
              <span>Mission</span>
              <span className="toggle-symbol">{openCard === "mission" ? "-" : "+"}</span>
            </div>
            {openCard === "mission" && (
              <div className="card-content">
                At AIG Hospitals, our mission is to provide world-class healthcare to Indian and International patients whilst ensuring ‘inclusivity for all’ by:
                <ul>
                  <li>Utilizing resources efficiently.</li>
                  <li>Imparting education to community doctors.</li>
                  <li>Improving patient awareness.</li>
                  <li>Deploying state-of-the-art technology.</li>
                  <li>Investing in Research & Development for healthcare advancement.</li>
                </ul>
              </div>
            )}
          </div>

          {/* Values */}
          <div className="card">
            <div className="card-header" onClick={() => toggleCard("values")}>
              <span>Values</span>
              <span className="toggle-symbol">{openCard === "values" ? "-" : "+"}</span>
            </div>
            {openCard === "values" && (
              <div className="card-content">
                <ul>
                  <li><strong>Intrinsic Learner:</strong> Continuously improving skills.</li>
                  <li><strong>Nurture:</strong> Help colleagues grow, be a team player.</li>
                  <li><strong>Self-Driven:</strong> Zeal to excel and innovate.</li>
                  <li><strong>Perfection:</strong> Focus on specialization.</li>
                  <li><strong>Integrity:</strong> Communicate actively and ethically.</li>
                  <li><strong>Role Model:</strong> Walk the talk, make things happen.</li>
                  <li><strong>Empathy:</strong> Support patients and colleagues.</li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* History Section - only show when clicked */}
      {/* {showHistory && (
        <div ref={historyRef}>
          <History />
        </div>
      )} */}

      {/* Board Section */}
      {/* <section ref={boardRef} className="section board fade-section">
        <h2>Board of Directors</h2>
        <p>Dr. D Nageshwar Reddy – Chairman & Managing Director, Dr. G.V. Rao – Director...</p>
      </section> */}

    </div>
  );
}

export default AboutUs;
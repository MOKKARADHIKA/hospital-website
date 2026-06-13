import React from "react";
import { Link } from "react-router-dom";
import "./Nursing.css";

const Nursing = () => {

  return (

    <div className="nursing-page">

      {/* Banner */}

      <div className="nursing-banner">

        <h1>Nursing At HEALTH CARE</h1>

      </div>

      {/* Breadcrumb */}

      <div className="breadcrumb">

        <Link to="/home">Home</Link> /

        <span> Nursing At HEALTH CARE</span>

      </div>

      {/* Content Section */}

      <section className="nursing-content">

        {/* Left Side Text */}

        <div className="nursing-left">

          <h2>VISION</h2>

          <p>
            Excellence and dedication to ensure empathetic
            and compassionate nursing care.
          </p>

          <h2>MISSION</h2>

          <p>
            At AIG Hospitals, our mission is to provide
            Best in Class Nursing care to all patients
            whilst ensuring ‘Highest Empathy’ by:
          </p>

          <ul>

            <li>
              Utilizing our nursing resources
              efficiently and effectively.
            </li>

            <li>
              Effectively training nurses to the
              required knowledge and skills.
            </li>

            <li>
              Enriching Patient Experience with
              High-quality nursing care.
            </li>

            <li>
              Upholding ethical nursing practice
              and patient safety.
            </li>

            <li>
              Encouraging nurse residency programs,
              clinical nursing research, & nursing
              clinical audits to ensure patient
              care quality.
            </li>

          </ul>

        </div>

        {/* Right Side Image */}

        <div className="nursing-right">

          <img
            src="/images/nursing.jpg"
            alt="Nursing At HEALTH CARE"
          />

        </div>

      </section>

    </div>

  );

};

export default Nursing;
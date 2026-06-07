import React from "react";
import { Link } from "react-router-dom";
import "./BWM.css";

const BWM = () => {
  return (
    <div className="bwm-page">

      {/* Banner */}
      <div className="bwm-banner">
        <h1>Biomedical Waste Management (BWM)</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> /
        <span> Biomedical Waste Management</span>
      </div>

      {/* Content Section */}
      <section className="bwm-content">

        <h2>Biomedical Waste Management</h2>

        <p>
          Biomedical Waste Management (BWM) plays a crucial role in maintaining
          a safe and hygienic healthcare environment. Proper handling and
          disposal of biomedical waste help prevent infections, protect public
          health, and safeguard the environment from harmful contaminants.
        </p>

        <p>
          Our hospital follows strict biomedical waste management protocols in
          accordance with national healthcare guidelines. Waste generated from
          medical procedures, laboratories, and patient care areas is carefully
          segregated, collected, transported, and disposed of using approved
          methods.
        </p>

        <p>
          Color-coded bins are used to separate different types of biomedical
          waste such as infectious materials, sharps, pathological waste, and
          recyclable items. All healthcare workers are trained regularly on
          safe waste handling procedures to ensure compliance with safety
          standards.
        </p>

        <p>
          We collaborate with authorized waste management agencies to ensure
          safe disposal through environmentally responsible methods such as
          incineration and sterilization. Continuous monitoring and audits are
          conducted to maintain high standards of waste management.
        </p>

        <p>
          Through effective biomedical waste management practices, we are
          committed to protecting patients, healthcare workers, visitors, and
          the community while promoting sustainable healthcare operations.
        </p>

      </section>

    </div>
  );
};

export default BWM;
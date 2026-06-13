import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PatientInformation.css";

const PatientInformation = () => {

  // Dropdown selected section
  const [selected, setSelected] = useState("emergencyServices");

  // Content Data
  const contentData = {

  emergencyServices: {
    title: "24/7 Emergency Services",
    text: `
Our emergency department operates 24/7 with highly trained doctors, nurses, and advanced medical equipment to provide immediate care during emergencies. We are fully equipped to handle trauma, cardiac emergencies, stroke cases, and critical medical conditions with rapid response systems.

Our emergency services include ambulance support, critical care units, trauma management, and emergency diagnostics such as X-rays, CT scans, and laboratory services available round the clock. The emergency team works in coordination with specialists to ensure timely intervention and effective treatment.

Patients arriving at the emergency department are quickly assessed through a triage system that prioritizes cases based on severity. This helps in delivering faster treatment to patients who require urgent medical attention.

We also provide continuous monitoring and support for patients until they are stabilized or transferred to specialized departments for further care.
`,
    image: "/images/emergency.jpg",
  },

  ourPatients: {
    title: "Our Patients",
    text: `
Our patients are at the center of everything we do. We are committed to providing compassionate, respectful, and personalized healthcare services to individuals from all walks of life.

From admission to discharge, every patient receives dedicated attention from our experienced doctors, nurses, and healthcare staff. We ensure that patients are informed about their diagnosis, treatment plans, and recovery process at every stage.

Our hospital focuses on patient safety, comfort, and satisfaction by maintaining high standards of hygiene, advanced medical facilities, and patient-friendly services.

We also encourage patient feedback to continuously improve our services and deliver better healthcare outcomes.
`,
    image: "/images/patient1.jpg",
  },

  patientServices: {
    title: "Patient Services",
    text: `
We provide a wide range of patient services designed to make healthcare convenient and accessible. These services include outpatient consultations, inpatient care, pharmacy services, laboratory testing, radiology, and physiotherapy support.

Our patient service department assists with appointment scheduling, admission procedures, discharge formalities, and insurance documentation. The goal is to simplify administrative processes so patients can focus on their health and recovery.

Additional services include 24/7 ambulance availability, emergency response teams, blood bank facilities, and support for international patients.

We also offer patient education programs that help individuals understand their medical conditions, treatment plans, and preventive healthcare practices.
`,
    image: "/images/patient2.jpg",
  },

  dietServices: {
    title: "Diet Services",
    text: `
Our diet services department plays an important role in supporting patient recovery through proper nutrition. Experienced dietitians create personalized meal plans based on individual health conditions, dietary requirements, and medical advice.

Special diets are provided for patients with diabetes, heart disease, kidney disorders, and other health conditions. Meals are prepared in hygienic kitchens following strict quality and safety standards.

Patients are also educated about healthy eating habits that support long-term wellness and recovery. Nutritional counseling sessions are available to guide patients and their families on maintaining balanced diets.

We ensure that every patient receives nutritious and well-balanced meals that aid in faster healing and improved health outcomes.
`,
    image: "/images/patient3.jpg",
  },

  paymentProcedures: {
    title: "Payment Procedures",
    text: `
We offer flexible and transparent payment procedures to ensure convenience for patients and their families. Multiple payment methods are available, including cash, debit cards, credit cards, and digital payment platforms.

Insurance support services are available to assist patients with claim processing, documentation, and approvals. Our billing team provides clear explanations of treatment costs, ensuring there are no hidden charges.

Patients can also access online payment facilities for hospital bills and advance deposits. Detailed invoices and receipts are provided for every transaction.

Our financial assistance team is available to guide patients through various payment options and help them choose the most suitable method.
`,
    image: "/images/patient4.jpg",
  },

  forVisitors: {
    title: "For Visitors",
    text: `
Visitors play an important role in supporting patient recovery. We welcome visitors during designated visiting hours while ensuring a safe and comfortable environment for patients.

Visitors are requested to follow hospital guidelines, including maintaining cleanliness, limiting noise levels, and adhering to visiting schedules. This helps create a peaceful atmosphere for patient care.

Facilities such as waiting areas, cafeterias, restrooms, and parking services are available to ensure visitor convenience.

We also encourage visitors to cooperate with hospital staff and follow safety protocols to maintain hygiene and prevent infections within the hospital premises.
`,
    image: "/images/patient5.jpg",
  },

};

  return (
    <div className="patient-info-page">

      {/* Top Banner */}
      <div className="patient-info-banner">
        <h1>Patient Information</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/home">Home</Link> /
        <span> Patient Information</span>
      </div>

      {/* Second Banner */}
      <div className="looking-banner">
        <h2>I am looking for</h2>

        {/* Dropdown */}
        <select
          className="info-dropdown"
          onChange={(e) => setSelected(e.target.value)}
        >


             {/* New Option Added */}
             <option value="emergencyServices">
             24/7 Emergency Services
           </option>

          <option value="ourPatients">
            Our Patients
          </option>

          <option value="patientServices">
            Patient Services
          </option>

          <option value="dietServices">
            Diet Services
          </option>

          <option value="paymentProcedures">
            Payment Procedures
          </option>

          <option value="forVisitors">
            For Visitors
          </option>

        </select>

      </div>

      {/* Dynamic Content Section */}
      <div className="info-content">

        {/* Left Text */}
        <div className="info-text">

          <h3>
            {contentData[selected].title}
          </h3>

          <p>
            {contentData[selected].text}
          </p>

        </div>

        {/* Right Image */}
        <div className="info-image">

          <img
            src={contentData[selected].image}
            alt={contentData[selected].title}
          />

        </div>

      </div>

    </div>
  );
};

export default PatientInformation;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "./FAQ.css";

const faqData = [
  {
    question:
      "What is the process to get an appointment for Dr.DNR?",
    answer:
      "Patients who have booked an appointment or are walk in will be first screened by a team doctor, post which Dr. DNR will personally advise/prescribe treatment.",
  },
  {
    question:
      "What should I do if I need to reschedule an appointment?",
    answer:
      "The patient can call our customer service line @ 040-42444222 and reschedule an appointment purely based on the doctor's availability.",
  },
  {
    question:
      "Can appointments be booked for multiple doctors on the same date?",
    answer:
      "Yes, appointments can be booked for multiple doctors on the same date but at different time slots.",
  },
  {
    question:
      "How prior in advance can a patient schedule an appointment?",
    answer:
      "There is no time limit to book an appointment. However, patients can call 7 days before to verify availability.",
  },
  {
    question:
      "How long before my appointment time should I arrive?",
    answer:
      "It is advised to reach the hospital 45 minutes before the scheduled appointment time.",
  },

  {
  question:
    "What is the process to get an appointment for Dr.DNR?",
  answer:
    "Patients who have booked an appointment or are walk-in will first be screened by a team doctor, post which Dr. DNR will personally advise and prescribe treatment."
},

{
  question:
    "What should I do if I need to reschedule an appointment?",
  answer:
    "Patients can call our customer service line and reschedule an appointment based on the doctor's availability."
},

{
  question:
    "Can appointments be booked for multiple doctors on the same date?",
  answer:
    "Yes, appointments can be booked for multiple doctors on the same date but at different time slots."
},

{
  question:
    "How prior in advance can a patient schedule an appointment?",
  answer:
    "There is no strict time limit to book an appointment. However, patients are advised to confirm availability at least 7 days before the appointment date."
},

{
  question:
    "How long before my appointment time should I arrive?",
  answer:
    "It is advised to reach the hospital at least 45 minutes before the scheduled appointment time to complete registration and billing procedures."
},

{
  question:
    "What documents should I carry during my visit?",
  answer:
    "Patients should carry a valid ID proof, previous medical records, prescriptions, lab reports, and insurance documents if applicable."
},

{
  question:
    "Do I need a referral to consult a specialist?",
  answer:
    "In most cases, a referral is not required. However, some insurance providers may require a referral before consulting specialists."
},

{
  question:
    "Can I cancel my appointment online?",
  answer:
    "Yes, appointments can be cancelled online through the website or by contacting the customer care team."
},

{
  question:
    "Are emergency services available 24/7?",
  answer:
    "Yes, our emergency department operates 24 hours a day, 7 days a week to provide immediate medical assistance."
},

{
  question:
    "Do you provide health checkup packages?",
  answer:
    "Yes, we offer a wide range of preventive health checkup packages designed for different age groups and health conditions."
},

{
  question:
    "Is online consultation available?",
  answer:
    "Yes, online consultation services are available with selected doctors. Patients can book appointments through the website."
},

{
  question:
    "What payment methods are accepted?",
  answer:
    "We accept cash, debit cards, credit cards, UPI payments, and insurance-based payments depending on eligibility."
},

{
  question:
    "Do you provide ambulance services?",
  answer:
    "Yes, ambulance services are available 24/7 for emergency patient transport."
},

{
  question:
    "Can I access my medical reports online?",
  answer:
    "Yes, registered patients can access and download their reports through the patient portal."
},

{
  question:
    "Do you accept insurance and TPA services?",
  answer:
    "Yes, we are associated with multiple insurance providers and TPAs for cashless hospitalization services."
},

{
  question:
    "Are visitors allowed in patient rooms?",
  answer:
    "Visitors are allowed during designated visiting hours as per hospital policies."
},

{
  question:
    "How can I contact customer support?",
  answer:
    "You can contact our customer support team through the helpline number or email provided on the contact page."
},

{
  question:
    "Do you provide international patient services?",
  answer:
    "Yes, dedicated services are available for international patients including visa assistance, travel support, and accommodation."
},

{
  question:
    "Can I book health packages for family members?",
  answer:
    "Yes, health packages can be booked for family members during the booking process."
},

{
  question:
    "Is parking available at the hospital?",
  answer:
    "Yes, ample parking facilities are available for patients and visitors."
},

{
  question:
    "What are the hospital visiting hours?",
  answer:
    "Visiting hours vary depending on the department. Generally, visitors are allowed during designated hours in the morning and evening as per hospital policy."
},

{
  question:
    "Do I need to fast before certain medical tests?",
  answer:
    "Yes, some tests require fasting for accurate results. Patients will be informed in advance if fasting is required."
},

{
  question:
    "Can I choose my preferred doctor while booking an appointment?",
  answer:
    "Yes, patients can select their preferred doctor based on availability while booking the appointment."
},

{
  question:
    "What should I do in case of a medical emergency?",
  answer:
    "In case of a medical emergency, please visit the emergency department immediately or call the ambulance service for assistance."
},

{
  question:
    "Are laboratory services available on weekends?",
  answer:
    "Yes, laboratory services are available on weekends, but specific timings may vary depending on the department."
},

{
  question:
    "Can I get my prescription refilled without visiting the doctor?",
  answer:
    "Prescription refills may be provided depending on the doctor's instructions and patient history."
},

{
  question:
    "Do you provide vaccination services?",
  answer:
    "Yes, we provide a wide range of vaccination services for children and adults."
},

{
  question:
    "How can I check the availability of doctors?",
  answer:
    "Doctor availability can be checked through the hospital website or by contacting the appointment desk."
},

{
  question:
    "Are private rooms available for patients?",
  answer:
    "Yes, private rooms and shared rooms are available based on availability and patient preference."
},

{
  question:
    "What facilities are available for international patients?",
  answer:
    "International patients are provided with travel assistance, visa support, accommodation help, and dedicated coordinators."
},

{
  question:
    "Can I request home healthcare services?",
  answer:
    "Yes, home healthcare services are available for eligible patients based on medical requirements."
},

{
  question:
    "How can I provide feedback about hospital services?",
  answer:
    "Patients can provide feedback through feedback forms available at the hospital or via the official website."
},

{
  question:
    "Do you offer dietary consultation services?",
  answer:
    "Yes, certified dietitians are available to provide personalized diet plans for patients."
},

{
  question:
    "Is Wi-Fi available for patients and visitors?",
  answer:
    "Yes, Wi-Fi services are available in most patient and waiting areas."
},

{
  question:
    "Can I request a copy of my medical records?",
  answer:
    "Yes, patients can request copies of their medical records through the medical records department."
},

{
  question:
    "Do you provide maternity services?",
  answer:
    "Yes, comprehensive maternity services including prenatal, delivery, and postnatal care are available."
},

{
  question:
    "Is there a pharmacy available inside the hospital?",
  answer:
    "Yes, an in-house pharmacy is available for patient convenience."
},

{
  question:
    "What safety measures are followed in the hospital?",
  answer:
    "Strict safety and hygiene protocols are followed including infection control, patient monitoring, and emergency preparedness."
},

{
  question:
    "Do you provide physiotherapy services?",
  answer:
    "Yes, physiotherapy services are available for rehabilitation and recovery programs."
},

{
  question:
    "Can attendants stay overnight with patients?",
  answer:
    "Yes, attendants may stay overnight depending on hospital policy and room type."
}


  
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] =
    useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <div className="faq-page">

      {/* Banner */}

      <div className="faq-banner">
        <h1>FAQ</h1>
      </div>

      {/* Breadcrumb */}

      <div className="breadcrumb">
        <Link to="/">Home</Link> /
        <span> FAQ</span>
      </div>

      {/* FAQ Section */}

      <div className="faq-container">

        {faqData.map((item, index) => (

          <div
            key={index}
            className="faq-item"
          >

            {/* Question */}

            <div
              className="faq-question"
              onClick={() =>
                toggleFAQ(index)
              }
            >

              <h3>
                {item.question}
              </h3>

              <FaChevronDown
                className={`faq-icon ${
                  activeIndex === index
                    ? "rotate"
                    : ""
                }`}
              />

            </div>

            {/* Answer */}

            {activeIndex === index && (

              <p className="faq-answer">
                {item.answer}
              </p>

            )}

          </div>

        ))}

      </div>

    </div>
  );
};

export default FAQ;
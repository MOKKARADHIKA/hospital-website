import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { doctorsData } from "./doctorsData";
import "./DoctorProfile.css";

function DoctorProfile() {
  const { id } = useParams();

  /* Scroll page to top when profile opens */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const doctor = doctorsData.find((doc) => doc.id === id);

  if (!doctor) {
    return <h2>Doctor not found</h2>;
  }

  return (
    <div className="doctor-profile">

      {/* Banner Section */}
      <div className="doctor-banner">
        <div className="doctor-header">

          <img
            src={doctor.image}
            alt={doctor.name}
            className="doctor-banner-img"
          />

          <div className="doctor-text">
            <h1>{doctor.name}</h1>
            <h3 style={{color:"white"}}>{doctor.designation}</h3>
            <p style={{color:"white"}}>{doctor.speciality}</p>
          </div>

        </div>
      </div>

      {/* Qualifications */}
      <h2>Qualifications</h2>
      <ul>
        {doctor.qualifications?.map((q, index) => (
          <li key={index}>{q}</li>
        ))}
      </ul>

      {/* Experience */}
      <h2>Experience</h2>
      <ul>
        {doctor.experience?.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>

      {/* Professional Synopsis */}
      <h2>Professional Synopsis</h2>
      <p>{doctor.synopsis}</p>

      {/* Areas of Interest */}
      <h2>Areas of Interest</h2>
      <ul>
        {doctor.interests?.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>

      {/* Awards */}
      <h2>Awards</h2>
      <ul>
        {doctor.awards?.map((award, index) => (
          <li key={index}>{award}</li>
        ))}
      </ul>

      {/* Academic Achievements */}
      <h2>Academic Achievements</h2>
      <ul>
        {doctor.achievements?.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>

    </div>
  );
}

export default DoctorProfile;
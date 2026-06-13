import React, { useState } from "react";
import "./Careers.css";
import { Link, useNavigate } from "react-router-dom";

const jobsData = [
  { title: "Staff Nurse", department: "Nurse", location: "Gachibowli", experience: "5 Years", qualification: "GNM / BSc Nursing", description: "Staff Nurse" },
  { title: "OT Nurses", department: "OT Nurses", location: "Gachibowli", experience: "3+ Years", qualification: "Diploma / BSc Nursing", description: "Operation Theatre Nurse" },
  { title: "Corporate Sales", department: "Sales & Marketing", location: "Gachibowli", experience: "4+ Years", qualification: "MBA Marketing", description: "Corporate Sales Executive" },
  { title: "Radiology Technician", department: "Radiology", location: "Gachibowli", experience: "2+ Years", qualification: "DMLT / Diploma", description: "Radiology Technician" },
  { title: "Pharmacist", department: "Pharmacy", location: "Gachibowli", experience: "3+ Years", qualification: "BPharm / DPharm", description: "Pharmacist" },
  { title: "Receptionist", department: "Front Office", location: "Gachibowli", experience: "1+ Year", qualification: "Graduate", description: "Front Desk Receptionist" }
];

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalType, setModalType] = useState(null);
  // const [AboutUs, setAboutUs] = useState(false);

  const closeModal = () => {
    setSelectedJob(null);
    setModalType(null);
  };
const navigate = useNavigate();
  return (
    <div className="careers">

     
     {/* Banner */}
<div className="career-banner">
  <h1>COME BUILD A BRIGHT FUTURE</h1>
  <p>Let your ambition scale new heights.</p>
  <p className="email">careers@aighospitals.com</p>

  <button
    className="about-btn"
    onClick={() => navigate("/about-us")}
  >
    About Us
  </button>
</div>

{/* ✅ Breadcrumb BELOW banner */}
<div className="breadcrumb-container">
  <Link to="/home" className="home-link">Home</Link>
  <span> / Careers</span>
</div>
      

      {/* ✅ ABOUT SECTION (OUTSIDE BUTTON) */}
      {/* {AboutUs && (
        <div id="about-section">
          <AboutUs />
        </div>
      )} */}
{/* Jobs Section */}
<div className="jobs">
  <h2>Open Positions</h2>

  <div className="jobs-list">
    {jobsData.map((job, index) => (
      <div className="job-row" key={index}>

        {/* Left Image */}
        <div className="job-image">
          <img src="/images/job.png" alt="job" />
        </div>

        {/* Middle Content */}
        <div className="job-details">
          <p><b>Job Title :</b> {job.title}</p>
          <p><b>Department :</b> {job.department}</p>
          <p><b>Location :</b> {job.location}</p>

          {/* Job Description Link */}
          <span
            className="job-link"
            onClick={() => {
              setSelectedJob(job);
              setModalType("description");
            }}
          >
            Job Description →
          </span>
        </div>

        {/* Right Button */}
        <div className="job-action">
          <button
            onClick={() => {
              setSelectedJob(job);
              setModalType("form");
            }}
          >
            Apply Now
          </button>
        </div>

      </div>
    ))}
  </div>
</div>
      {/* Modal */}
      {modalType && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            {modalType === "description" && selectedJob && (
              <>
                <h3>{selectedJob.title}</h3>
                <p><b>Experience:</b> {selectedJob.experience}</p>
                <p><b>Qualification:</b> {selectedJob.qualification}</p>
                <p><b>Location:</b> {selectedJob.location}</p>
                <p><b>Description:</b> {selectedJob.description}</p>

                <button onClick={closeModal}>Close</button>
              </>
            )}

            {modalType === "form" && (
              <>
                <h3>Apply for {selectedJob?.title}</h3>

                <form>
                  <input placeholder="Name" />
                  <input placeholder="Phone No" />
                  <input type="email" placeholder="Email" />
                  <input placeholder="Qualification" />
                  <input value={selectedJob?.title} readOnly />
                  <input placeholder="Total Experience" />
                  <input placeholder="Location" />
                  <input type="file" accept="application/pdf" />

                  <button type="submit">Submit</button>
                  <button type="button" onClick={closeModal}>Close</button>
                </form>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default Careers;
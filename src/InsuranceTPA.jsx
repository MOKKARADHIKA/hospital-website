import React from "react";
import { Link } from "react-router-dom";
import "./InsuranceTPA.css";

// Insurance Companies List
const insuranceCompanies = [
  { name: "Aditya Birla Health Insurance", image: "/images/insurance1.jpg" },
  { name: "STAR Health Insurance", image: "/images/insurance2.jpg" },
  { name: "Manipal Cigna Health Insurance", image: "/images/insurance3.jpg" },
  { name: "New India Assurance", image: "/images/insurance4.jpg" },
  { name: "Universal Sompo General Insurance Company Ltd.", image: "/images/insurance5.jpg" },
  { name: "Oriental Insurance", image: "/images/insurance6.jpg" },
  { name: "ICICI Lombard", image: "/images/insurance7.jpg" },
  { name: "National Insurance", image: "/images/insurance8.jpg" },
  { name: "HDFC ERGO General Insurance", image: "/images/insurance9.jpg" },
  { name: "Bajaj Allianz- General Insurance Co Ltd", image: "/images/insurance10.jpg" },
  { name: "Liberty General Insurance", image: "/images/insurance11.jpg" },
  { name: "RELIGARE- CARE Health Insurance", image: "/images/insurance12.jpg" },
  { name: "SBI General Insurance", image: "/images/insurance13.jpg" },
  { name: "TATA AIG Insurance", image: "/images/insurance14.jpg" },
  { name: "Reliance General Insurance", image: "/images/insurance15.jpg" },
  { name: "Niva Bupa Health Insurance", image: "/images/insurance16.jpg" },
  { name: "IFFCO-TOKIO- General Insurance", image: "/images/insurance17.jpg" },
  { name: "Royal Sundaram- General Insurance", image: "/images/insurance18.jpg" },
];

const InsuranceTPA = () => {
  return (
    <div className="insurance-page">

      {/* Top Banner */}
      <div className="insurance-banner">
        <h1>Insurance & TPA</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> /
        <span> Insurance & TPA</span>
      </div>

      {/* Second Banner */}
      <div className="insurance-title-banner">

        <h2>Major Insurance Companies</h2>    <h2>Third Party Administrator and Insurance Companies List</h2>

        

      </div>

      {/* Cards Section */}
      <section className="insurance-cards">

        {insuranceCompanies.map((company, index) => (

          <div className="insurance-card" key={index}>

            <img
              src={company.image}
              alt={company.name}
            />

            <h3>{company.name}</h3>

          </div>

        ))}

      </section>

    </div>
  );
};

export default InsuranceTPA;
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PackageDetails.css";

const PackageDetails = () => {

  const { id } = useParams();

  const title =
    "Essential Wellness Package Female";

  // ⭐ State to show form
  const [showForm, setShowForm] =
    useState(false);

  return (

    <div>

      {/* Banner */}

      <div className="package-banner">

        <h1>{title}</h1>

      </div>

      {/* Breadcrumb */}

      <div className="breadcrumb">

        <Link to="/">Home</Link> /

        <Link to="/health-packages">
          Health Packages
        </Link> /

        <span>{title}</span>

      </div>

      {/* Details Section */}

      <section className="package-details">

        {/* Left Image */}

        <div className="details-left">

          <img
            src="/images/package1.jpg"
            alt="package"
          />

        </div>

        {/* Right Content */}

        <div className="details-right">

          <h2>{title}</h2>

          <h4>General Tests</h4>

          <ul>

            <li>Complete Blood Picture</li>
            <li>ESR</li>
            <li>Blood Grouping</li>
            <li>Complete Urine Examination</li>

          </ul>

          <h4>Renal Function Tests</h4>

          <ul>

            <li>Blood Urea</li>
            <li>Creatinine</li>
            <li>Sodium</li>
            <li>Potassium</li>

          </ul>

          {/* ⭐ Book Now Button */}

          <button
            className="book-btn"
            onClick={() =>
              setShowForm(true)
            }
          >

            Book Now

          </button>

        </div>

      </section>


      {/* ⭐ Show Form Only After Click */}

      {showForm && (

        <section className="book-form">

          <h2>
            Book Health Package
          </h2>

          <form>

            <input
              type="text"
              placeholder="Name"
              required
            />

            <input
              type="tel"
              placeholder="Mobile"
              required
            />

            <input
              type="email"
              placeholder="Email"
              required
            />

            <input
              type="text"
              value={title}
              readOnly
            />

            <textarea
              placeholder="Message"
            />

            <button type="submit">

              Submit

            </button>

          </form>

        </section>

      )}

    </div>

  );

};

export default PackageDetails;
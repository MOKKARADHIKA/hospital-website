import React from "react";
import { Link } from "react-router-dom";
import "./HealthPackages.css";

const HealthPackages = () => {

  const packages = [

    {
      id: 1,
      title: "Essential Wellness Package Female",
      image: "/images/package1.jpg"
    },

    {
      id: 2,
      title: "Kidney Screening Package",
      image: "/images/package2.jpg"
    },

    {
      id: 3,
      title: "Essential Wellness Package Male",
      image: "/images/package3.jpg"
    },

    {
      id: 4,
      title: "Advanced Wellness Package Female",
      image: "/images/package4.jpg"
    },

    {
      id: 5,
      title: "Advanced Wellness Package Male",
      image: "/images/package5.jpg"
    },

    {
      id: 6,
      title: "Wellness Package Platinum Male",
      image: "/images/package6.jpg"
    },

    {
      id: 7,
      title: "Wellness Package Platinum Female",
      image: "/images/package7.jpg"
    },

    {
      id: 8,
      title: "Geriatric Advanced Package Male",
      image: "/images/package8.jpg"
    },

    {
      id: 9,
      title: "Geriatric Advanced Package Female",
      image: "/images/package9.jpg"
    }

  ];

  return (

    <div className="health-page">

      {/* Banner */}

      <div className="health-banner">

        <h1>Health Packages</h1>

        <p>
          Get Your Self Screened Today!
        </p>

      </div>

      {/* Breadcrumb */}

      <div className="breadcrumb">

        <Link to="/">Home</Link> /
        <span> Health Packages</span>

      </div>

      {/* Info Section */}

      <section className="health-info">

        <div className="info-left">

          <img
            src="/images/health-info.jpg"
            alt="Health Check"
          />

        </div>

        <div className="info-right">

          <h2>
            STAY AT THE PEAK OF YOUR HEALTH
            WITH REGULAR CHECKUPS.
          </h2>

          <p>

            Comprehensive health check packages
            to nip diseases in the bud.

            With the changing lifestyle patterns,
            the health conditions of people
            have become unpredictable.

            Preventive health care must always
            be planned & done ahead of time,
            even when there are no signs of illness.

          </p>

        </div>

      </section>

      {/* Packages Section */}

      <section className="packages-section">

        <h2>
          OUR HEALTH CHECKUP PACKAGES
        </h2>

        <div className="packages-grid">

          {packages.map(pkg => (

            <div
              className="package-card"
              key={pkg.id}
            >

              <img
                src={pkg.image}
                alt={pkg.title}
              />

              <h3>
                {pkg.title}
              </h3>

              <Link
                to={`/health-packages/${pkg.id}`}
                className="view-btn"
              >

                View Detail →

              </Link>

            </div>

          ))}

        </div>

      </section>

    </div>

  );

};

export default HealthPackages;
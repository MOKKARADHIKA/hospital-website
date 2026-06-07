import React from "react";
import { Link } from "react-router-dom";
import "./PsuGovt.css";

const psuData = [

  { id: 1, image: "/images/psu1.png" },
  { id: 2, image: "/images/psu2.png" },
  { id: 3, image: "/images/psu3.png" },
  { id: 4, image: "/images/psu4.png" },
  { id: 5, image: "/images/psu5.png" },
  { id: 6, image: "/images/psu6.png" },
  { id: 7, image: "/images/psu7.png" },
  { id: 8, image: "/images/psu8.png" },
  { id: 9, image: "/images/psu9.png" },

  { id: 10, image: "/images/psu10.png" },
  { id: 11, image: "/images/psu11.png" },
  { id: 12, image: "/images/psu12.png" },
  { id: 13, image: "/images/psu13.png" },
  { id: 14, image: "/images/psu14.png" },
  { id: 15, image: "/images/psu15.png" },
  { id: 16, image: "/images/psu16.png" },
  { id: 17, image: "/images/psu17.png" },
  { id: 18, image: "/images/psu18.png" },

  { id: 19, image: "/images/psu19.png" },
  { id: 20, image: "/images/psu20.png" },
  { id: 21, image: "/images/psu21.png" },
  { id: 22, image: "/images/psu22.png" },
  { id: 23, image: "/images/psu23.png" },
  { id: 24, image: "/images/psu24.png" },
  { id: 25, image: "/images/psu25.png" },
  { id: 26, image: "/images/psu26.png" },
  { id: 27, image: "/images/psu27.png" },

  { id: 28, image: "/images/psu28.png" },
  { id: 29, image: "/images/psu29.png" },
  { id: 30, image: "/images/psu30.png" },

];

const PsuGovt = () => {

  return (

    <div className="psu-page">

      {/* Banner */}
      <div className="psu-banner">

        <h1>PSU & Govt</h1>

      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">

        <Link to="/">Home</Link> /
        <span> PSU & Govt</span>

      </div>

      {/* Cards Section */}

      <section className="psu-cards">

        {psuData.map((item) => (

          <div
            className="psu-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={`psu-${item.id}`}
            />

          </div>

        ))}

      </section>

    </div>

  );

};

export default PsuGovt;
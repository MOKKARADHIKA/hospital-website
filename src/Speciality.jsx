import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Speciality.css";

const Speciality = () => {

  const centreRef = useRef(null);

  const [selectedSpeciality, setSelectedSpeciality] =
    useState("");

  const specialityData = [

  {
    name: "Gastroenterology",
    slug: "gastroenterology"
  },

  

  
  {
    name: "Cardiology",
    slug: "cardiology"
  },

  {
    name: "Neurology",
    slug: "neurology"
  },

  
  {
    name: "Nephrology",
    slug: "nephrology"
  },


  {
    name: "Orthopedics",
    slug: "orthopedics"
  },

  

  {
    name: "Pulmonology",
    slug: "pulmonology"
  },

  {
    name: "Oncology",
    slug: "oncology"
  }

];

  const handleReadMore = (name) => {

    setSelectedSpeciality(name);

    if (centreRef.current) {

      centreRef.current.scrollIntoView({
        behavior: "smooth"
      });

    }

  };

  return (

    <div className="speciality-page">

      {/* Banner */}

      <div className="speciality-banner">

        <h1>Our Specialities</h1>

      </div>

      {/* Breadcrumb */}

      <div className="breadcrumb">

        <Link to="/home">Home</Link> /

        <Link to="/speciality">
          Specialities
        </Link>

        {selectedSpeciality && (

          <>
            {" "} / <span>
              {selectedSpeciality}
            </span>
          </>

        )}

      </div>

       {/* Centres Section */}

      <section
        className="centres-section"
        ref={centreRef}
      >

        <h2>Centres of Excellence</h2>

        <p>

          Our depth of each center of excellence
          makes us a force to reckon with in
          super speciality tertiary healthcare.

        </p>

      </section>

      {/* Cards Section */}

      <section className="speciality-cards">

        {specialityData.map((item, index) => (

          <div
            className="speciality-card"
            key={index}
          >

            <h3>{item.name}</h3>

            <p>
              Our department provides advanced
              diagnosis, treatment and care
              using modern technologies and
              expert doctors.
            </p>

           <Link
  to={`/centre/${item.name}`}
  className="read-more"
>
  Read More
</Link>
          </div>

        ))}

      </section>

     

    </div>

  );

};

export default Speciality;
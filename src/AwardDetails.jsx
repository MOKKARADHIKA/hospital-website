import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AwardDetails.css";


function AwardDetails({ awardsData }) {

  const { slug } = useParams();
  const navigate = useNavigate();

  const selectedAward =
    awardsData.find(
      (item) =>
        item.slug === slug
    );

  if (!selectedAward)
    return <h2>Award Not Found</h2>;

  return (
    <div className="events-page">

      {/* Banner */}
      <div className="awards-banner">

        <h1>
          {selectedAward.title}
        </h1>

      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb-container">

        <span
          className="home-link"
          onClick={() =>
            navigate("/home")
          }
        >
          Home
        </span>

        <span
          className="home-link"
          onClick={() =>
            navigate("/awards")
          }
        >
          {" "} / Awards
        </span>

        <span>
          {" "} /
          {selectedAward.title}
        </span>

      </div>

      {/* Main Section */}
      <div className="award-details-container">

        {/* LEFT */}
        <div className="award-left">

          <img
            src={selectedAward.image}
            alt={selectedAward.title}
          />

          <div className="award-description">

            {selectedAward.description &&
              selectedAward.description
                .split("\n")
                .map((line, index) => (
                  <p key={index}>
                    {line}
                  </p>
                ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="award-right">

          <h3 className="recent-title">
            Recent Awards / Publications
          </h3>

          {awardsData
            .slice(0, 16)
            .map((item, index) => (

            <div
              key={index}
              className="recent-item"
              onClick={() =>
                navigate(
                  `/awards/${item.slug}`
                )
              }
            >

              <p>
                {item.title}
              </p>

              <img
                src={item.image}
                alt={item.title}
              />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AwardDetails;
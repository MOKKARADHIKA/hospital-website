import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EventDetails.css";

function EventDetails({ eventsData }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  const event = eventsData.find((e) => e.slug === slug);

  if (!event) return <h2>Event Not Found</h2>;

  return (
    <div className="event-details-page">

      {/* ==================== */}
      {/* Banner */}
      {/* ==================== */}
      <div className="event-details-banner">
        <h1>{event.title}</h1>
      </div>

      {/* ==================== */}
      {/* Breadcrumb */}
      {/* ==================== */}
      <div className="breadcrumb-container">
        <span className="home-link" onClick={() => navigate("/home")}>
          Home
        </span>
        <span> / Events / Conference / {event.title}</span>
      </div>

      {/* ==================== */}
      {/* Main Section */}
      {/* ==================== */}
      <div className="event-details-container">

        {/* LEFT IMAGE */}
        <div className="event-left">
          <img src={event.image} alt={event.title} />

          {/* ✅ DYNAMIC DESCRIPTION */}
          <div className="event-description">
            {event.description &&
              event.description.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
          </div>
        </div>

        {/* RIGHT RECENT EVENTS */}
        <div className="event-right">
          <h3 className="recent-title">Recent Events</h3>

          {eventsData.slice(0, 16).map((item, index) => (
            <div
              key={index}
              className="recent-item"
              onClick={() => navigate(`/events/${item.slug}`)}
            >
              <p>{item.title}</p>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default EventDetails;
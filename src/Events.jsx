import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import eventsData from "./data/eventsData";
import "./Events.css";



function Events() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    if (value === "conferences") {
      navigate("/conferences");
    } else {
      navigate("/events");
    }
  };

  const [visibleCount, setVisibleCount] = useState(4); // initially 4 cards




 const eventsData = [
  {
    title: "Nurses Week Celebration 2025",
    slug: "nurses-week-celebration-2025",
    date: "2025-05-05",
    image: "/images/event1.jpg",
  },
  {
    title: "World Heart Day Camp",
    slug: "world-heart-day-camp",
    date: "2023-09-29",
    image: "/images/event2.jpg",
  },
  {
    title: "Live Workshop Surgery",
    slug: "live-workshop-surgery",
    date: "2022-09-25",
    image: "/images/event3.jpg",
  },
  {
    title: "4th Anniversary Celebration",
    slug: "4th-anniversary-celebration",
    date: "2022-06-30",
    image: "/images/event4.jpg",
  },

  {
    title: "AIG Hospitals Conducts Exclusive Preventive Heath Check-up For Maa Members",
    slug: "aig-preventive-health-checkup-maa-members",
    date: "2022-05-20",
    image: "/images/event5.jpg",
  },
  {
    title: "A Refreshing and Relaxing Mind Management Session at AIG Hospitals",
    slug: "mind-management-session-aig-hospitals",
    date: "2022-05-10",
    image: "/images/event6.jpg",
  },
  {
    title: "Celebrating World Hand Hygiene Day at AIG Hospitals: A Fun-Filled Event Creating Hand-Hygiene Awareness Among All!",
    slug: "world-hand-hygiene-day-aig-hospitals",
    date: "2022-05-05",
    image: "/images/event7.jpg",
  },
  {
    title: "Colon Cancer Awareness Campaign at AIG Hospitals",
    slug: "colon-cancer-awareness-aig-hospitals",
    date: "2022-04-25",
    image: "/images/event8.jpg",
  },
  {
    title: 'CME Program on "Comprehensive Approach to Obstructive Sleep Apnea"',
    slug: "cme-program-obstructive-sleep-apnea",
    date: "2022-04-15",
    image: "/images/event9.jpg",
  },
  {
    title: "Women’s Day Celebrations - AIG Hospitals",
    slug: "womens-day-celebrations-aig-hospitals",
    date: "2022-03-08",
    image: "/images/event10.jpg",
  },
  {
    title: "AIG Hospitals Organized A Rewards and Recognitions Program",
    slug: "aig-rewards-recognitions-program",
    date: "2022-03-01",
    image: "/images/event11.jpg",
  },
  {
    title: "Inauguration of Basic Science Skill Labs",
    slug: "basic-science-skill-labs-inauguration",
    date: "2022-02-20",
    image: "/images/event12.jpg",
  },
  {
    title: "Beat Workshop",
    slug: "beat-workshop",
    date: "2022-02-10",
    image: "/images/event13.jpg",
  },

  {
    title: "International Health Summit",
    slug: "international-health-summit",
    date: "2022-02-05",
    image: "/images/event14.jpg",
  },
  {
    title: "Doctor Conference Meet",
    slug: "doctor-conference-meet",
    date: "2022-01-25",
    image: "/images/event15.jpg",
  },
  {
    title: "Health Awareness Camp",
    slug: "health-awareness-camp",
    date: "2022-01-10",
    image: "/images/event16.jpg",
  },
];

  return (
    <div className="events-page">

      {/* ==================== */}
      {/* Banner ONLY */}
      {/* ==================== */}
      <div className="events-banner">
        <h1>Events / Conferences</h1>
      </div>

      {/* ==================== */}
      {/* ✅ Breadcrumb OUTSIDE banner */}
      {/* ==================== */}
      <div className="breadcrumb-container">
        <span className="home-link" onClick={() => navigate("/home")}>
          Home
        </span>
        <span> / Events / Conferences</span>
      </div>

      {/* ==================== */}
      {/* Main Content */}
      {/* ==================== */}
      <div className="events-container">

        {/* Filter Right Side */}
        <div className="filter-section">
          <label>Filter By Events/Conference:</label>

          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="events">Events</option>
            <option value="conferences">Conferences</option>
          </select>
        </div>

        {/* Content */}
      <div className="events-grid">
  {eventsData.slice(0, visibleCount).map((event, index) => (
    <div
      className="event-card"
      key={index}
      onClick={() => navigate(`/events/${event.slug}`)}   // ✅ ADD THIS
    >
      <div className="event-image">
        <img src={event.image} alt={event.title} />
        <span className="event-date">{event.date}</span>
      </div>

      <div className="event-info">
        <h3>{event.title}</h3>
       <p 
  className="read-more"
  onClick={(e) => {
    e.stopPropagation();
    navigate(`/events/${event.slug}`);
  }}
>
  Read More →
</p>
      </div>

    </div>
  ))}
</div>



{visibleCount < eventsData.length && (
  <div className="load-more-container">
    <button onClick={() => setVisibleCount(visibleCount + 4)}>
      Load More
    </button>
  </div>
)}

      </div>
    </div>
  );
}

export default Events;
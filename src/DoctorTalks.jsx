// pages/DoctorTalks.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./DoctorTalks.css";

// Example data for doctor talks
const doctorTalksData = [
  {
    title: "Digestive Health Tips",
    videoUrl: "https://www.youtube.com/watch?v=Av9VyyB2imQ",
  },
  {
    title: "Preventive Care Guidelines",
    videoUrl: "https://www.youtube.com/watch?v=tzncMHA6idg",
  },
  {
    title: "Nutrition and Gut Health",
    videoUrl: "https://www.youtube.com/watch?v=kUBoXkOgcaI",
  },
  // New three videos
  {
    title: "Heart Health Awareness",
    videoUrl: "https://www.youtube.com/watch?v=ezDCy0vO8Bo",
  },
  {
    title: "Mental Wellbeing Tips",
    videoUrl: "https://www.youtube.com/watch?v=eXPISNRddfk",
  },
  {
    title: "Healthy Lifestyle Habits",
    videoUrl: "https://www.youtube.com/watch?v=51SG5ue7WkM",
  },
];

const DoctorTalks = () => {
  // Function to convert any YouTube link into embed URL
  const getEmbedUrl = (url) => {
    const regex = /(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url; // fallback if URL is already an embed link
  };

  return (
    <div className="doctor-talks-page">
      {/* Banner Section */}
      <div className="doctor-talks-banner">
        <h1>Doctor Talk</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/home">Home</Link> / <span>Doctor Talk</span>
      </div>

      {/* Cards Section */}
      <section className="doctor-talks-cards">
        {doctorTalksData.map((talk, index) => (
          <div className="doctor-talk-card" key={index}>
            <div className="video-container">
              <iframe
                width="100%"
                height="250"
                src={getEmbedUrl(talk.videoUrl)}  // Convert to embed URL automatically
                title={talk.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Title below the video */}
            <h3 className="video-title">{talk.title}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DoctorTalks;
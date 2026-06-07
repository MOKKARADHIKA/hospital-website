import React from "react";
import { Link } from "react-router-dom";
import "./PatientTestimonials.css";

const testimonialsData = [
  {
    title: "Successful Digestive Treatment",
    videoUrl: "https://www.youtube.com/watch?v=kmEdZUtXwDg",
  },
  {
    title: "Patient Recovery Story",
    videoUrl: "https://www.youtube.com/watch?v=nKm1mL1nJm0",
  },
  {
    title: "Advanced Surgery Experience",
    videoUrl: "https://www.youtube.com/watch?v=kUBoXkOgcaI",
  },
  {
    title: "Quick Healing Journey",
    videoUrl: "https://www.youtube.com/watch?v=XNkMAHfnhpU",
  },
  {
    title: "Happy Patient Feedback",
    videoUrl: "https://www.youtube.com/watch?v=I9IOVI7AWEI",
  },
  {
    title: "Life Changing Treatment",
    videoUrl: "https://www.youtube.com/watch?v=maVWABW0Lp0",
  },
];

const PatientTestimonials = () => {
  // Convert YouTube URL to embed
  const getEmbedUrl = (url) => {
    const regex = /(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);

    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }

    return url;
  };

  return (
    <div className="testimonials-page">

      {/* Banner */}
      <div className="testimonials-banner">
        <h1>Connect with AIG Hospitals</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> / 
        <span> Connect with AIG Hospitals</span>
      </div>

      {/* Video Cards */}
      <section className="testimonials-cards">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <div className="video-container">
              <iframe
                src={getEmbedUrl(item.videoUrl)}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <h3 className="video-title">
              {item.title}
            </h3>

          </div>
        ))}
      </section>

    </div>
  );
};

export default PatientTestimonials;
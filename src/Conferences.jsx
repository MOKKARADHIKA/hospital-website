import React, { useState, useEffect } from "react"; // ✅ added useEffect
import { useNavigate } from "react-router-dom";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import "./Events.css";
import "./Conferences.css";

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function Conferences() {

  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(4);
  const [filter, setFilter] = useState("conferences");
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    if (value === "events") {
      navigate("/events");
    } else {
      navigate("/conferences");
    }
  };

  // ✅ CONFERENCE DATA
  const conferencesData = [
  { date: "2025-06-15", image: "/images/conf1.jpg", pdf: "/pdfs/conf1.pdf" },
  { date: "2025-06-20", image: "/images/conf2.jpg", pdf: "/pdfs/conf2.pdf" },
  { date: "2025-06-25", image: "/images/conf3.jpg", pdf: "/pdfs/conf3.pdf" },
  { date: "2025-07-01", image: "/images/conf4.jpg", pdf: "/pdfs/conf4.pdf" },

  { date: "2025-07-05", image: "/images/conf5.jpg", pdf: "/pdfs/conf5.pdf" },
  { date: "2025-07-10", image: "/images/conf6.jpg", pdf: "/pdfs/conf6.pdf" },
  { date: "2025-07-15", image: "/images/conf7.jpg", pdf: "/pdfs/conf7.pdf" },
  { date: "2025-07-20", image: "/images/conf8.jpg", pdf: "/pdfs/conf8.pdf" },

  { date: "2025-07-25", image: "/images/conf9.jpg", pdf: "/pdfs/conf9.pdf" },
  { date: "2025-08-01", image: "/images/conf10.jpg", pdf: "/pdfs/conf10.pdf" },
  { date: "2025-08-05", image: "/images/conf11.jpg", pdf: "/pdfs/conf11.pdf" },
  { date: "2025-08-10", image: "/images/conf12.jpg", pdf: "/pdfs/conf12.pdf" },

  { date: "2025-08-15", image: "/images/conf13.jpg", pdf: "/pdfs/conf13.pdf" },
  { date: "2025-08-20", image: "/images/conf14.jpg", pdf: "/pdfs/conf14.pdf" },
  { date: "2025-08-25", image: "/images/conf15.jpg", pdf: "/pdfs/conf15.pdf" },
  { date: "2025-08-30", image: "/images/conf16.jpg", pdf: "/pdfs/conf16.pdf" }
];


  // ✅ UPDATED plugin (to show thumbnails)
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [defaultTabs[0]],
  });

  // ✅ Auto-open thumbnails
  useEffect(() => {
    if (selectedPdf) {
      defaultLayoutPluginInstance.activateTab(0);
    }
  }, [selectedPdf]);

  return (
    <div className="events-page">

      {/* Banner */}
      <div className="events-banner">
        <h1>Events / Conferences</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <span className="home-link" onClick={() => navigate("/")}>
          Home
        </span>
        <span> / Events / Conferences</span>
      </div>

      {/* Filter */}
      <div className="filter-section">
        <label>Filter By Events/Conference:</label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="events">Events</option>
          <option value="conferences">Conferences</option>
        </select>
      </div>

      {/* Conference Cards */}
      <div className="conference-container">
        <div className="conference-grid">
         {conferencesData.slice(0, visibleCount).map((conf, index) => (
            <div className="conference-card" key={index}>
              <div className="conference-image">
                <img src={conf.image} alt={conf.title} />
                <span className="conference-date">{conf.date}</span>
              </div>
              <div className="conference-info">
                <button
                  className="download-btn"
                  onClick={() => setSelectedPdf(conf.pdf)}
                >
                  View PDF <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Load More Button */}
{visibleCount < conferencesData.length && (
  <div className="load-more-container">
    <button
      className="load-more-btn"
      onClick={() => setVisibleCount(visibleCount + 4)}
    >
      Load More
    </button>
  </div>
)}

      {/* ==================== */}
      {/* Inline PDF Viewer — MODAL */}
      {/* ==================== */}
      {selectedPdf && (
        <div className="pdf-modal">
          <div className="pdf-content">

            {/* Close Button */}
            <span className="close-btn" onClick={() => setSelectedPdf(null)}>✕</span>

            {/* ✅ Viewer with toolbar + thumbnails */}
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={selectedPdf}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>

          </div>
        </div>
      )}

    </div>
  );
}

export default Conferences;
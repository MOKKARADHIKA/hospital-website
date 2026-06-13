// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import publicationsData from "./data/publicationsData"; // your publications data

// import "./Publications.css";

// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// function Publications() {
//   const navigate = useNavigate();
//   const [visibleCount, setVisibleCount] = useState(4);
//   const [filter, setFilter] = useState("all");
//   const [selectedPdf, setSelectedPdf] = useState(null);

//   const handleFilterChange = (e) => {
//     const value = e.target.value;
//     setFilter(value);
//     // Optional: Navigate to filtered route
//     navigate("/publications");
//   };

//   const filteredData =
//     filter === "all"
//       ? publicationsData
//       : publicationsData.filter((item) => item.type === filter);

//   // PDF Viewer plugin
//   const defaultLayoutPluginInstance = defaultLayoutPlugin({
//     sidebarTabs: (defaultTabs) => [defaultTabs[0]],
//   });

//   useEffect(() => {
//     if (selectedPdf) {
//       defaultLayoutPluginInstance.activateTab(0);
//     }
//   }, [selectedPdf]);

//   return (
//     <div className="publications-page">

//       {/* Banner */}
//       <div className="publications-banner">
//         <h1>Publications</h1>
//       </div>

//       {/* Breadcrumb */}
//       <div className="breadcrumb-container">
//         <span className="home-link" onClick={() => navigate("/")}>Home</span>
//         <span> / Publications</span>
//       </div>

//       {/* Filter */}
//       <div className="filter-section">
//         <label>Filter By:</label>
//         <select value={filter} onChange={handleFilterChange}>
//           <option value="all">All</option>
//           <option value="journals">Journals</option>
//           <option value="conferences">Conferences</option>
//           <option value="books">Books</option>
//         </select>
//       </div>

//       {/* Publications Grid */}
//       <div className="publication-container">
//         <div className="publication-grid">
//           {filteredData.slice(0, visibleCount).map((pub, index) => (
//             <div className="publication-card" key={index}>
//               <div className="publication-image">
//                 <img src={pub.image} alt={pub.title} />
//                 <span className="publication-date">{pub.date}</span>
//               </div>
//               <div className="publication-info">
//                 <button
//                   className="download-btn"
//                   onClick={() => setSelectedPdf(pub.pdf)}
//                 >
//                   View PDF <span className="arrow">→</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Load More */}
//       {visibleCount < filteredData.length && (
//         <div className="load-more-container">
//           <button
//             className="load-more-btn"
//             onClick={() => setVisibleCount(visibleCount + 4)}
//           >
//             Load More
//           </button>
//         </div>
//       )}

//       {/* PDF Modal */}
//       {selectedPdf && (
//         <div className="pdf-modal">
//           <div className="pdf-content">
//             <span className="close-btn" onClick={() => setSelectedPdf(null)}>✕</span>
//             <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//               <Viewer
//                 fileUrl={selectedPdf}
//                 plugins={[defaultLayoutPluginInstance]}
//               />
//             </Worker>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// export default Publications;


// src/pages/Publications.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // ✅ correct import
import "./Publications.css";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Sample publications data
const publicationsData = [
  {
    title: "Medical Research Journal 2023",
    slug: "medical-research-2023",
    image: "/images/pub1.jpg",
    date: "2023-01-15",
    type: "journals",
    pdf: "/pdfs/pub1.pdf",
  },
  {
    title: "Healthcare Innovation Conference",
    slug: "healthcare-innovation-2023",
    image: "/images/pub2.jpg",
    date: "2023-03-10",
    type: "conferences",
    pdf: "/pdfs/pub2.pdf",
  },
  {
    title: "Digital Health Book",
    slug: "digital-health-book",
    image: "/images/pub3.jpg",
    date: "2023-05-20",
    type: "books",
    pdf: "/pdfs/pub3.pdf",
  },
];

function Publications() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(8);
  const [filter, setFilter] = useState("all");
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleFilterChange = (e) => {
  const value = e.target.value;
  setFilter(value);

  if (value === "awards") {
    navigate("/awards"); // Navigate to Awards page
  } else {
    navigate("/publications"); // Stay on Publications for other filters
  }
};
  const filteredData =
    filter === "all"
      ? publicationsData
      : publicationsData.filter((item) => item.type === filter);

  // PDF Viewer plugin (just like Conferences.jsx)
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [defaultTabs[0]], // show thumbnails only
  });

  useEffect(() => {
    if (selectedPdf) {
      defaultLayoutPluginInstance.activateTab(0);
    }
  }, [selectedPdf]);

  return (
    <div className="publications-page">
      {/* Banner */}
      <div className="publications-banner">
        <h1>Publications</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <span className="home-link" onClick={() => navigate("/home")}>
          Home
        </span>
        <span> / Publications</span>
      </div>

      {/* Filter */}
      {/* Filter */}
<div className="filter-section">
  <label>Filter By:</label>
  <select value={filter} onChange={handleFilterChange}>
    <option value="all">All</option>
    <option value="journals">Journals</option>
    <option value="conferences">Conferences</option>
    <option value="books">Books</option>
    <option value="awards">Awards</option> {/* ✅ Added Awards */}
  </select>
</div>

      {/* Publications Grid */}
      <div className="publication-container">
        <div className="publication-grid">
          {filteredData.slice(0, visibleCount).map((pub, index) => (
            <div
              className="publication-card"
              key={index}
              onClick={() => setSelectedPdf(pub.pdf)}
            >
              <div className="publication-image">
                <img src={pub.image} alt={pub.title} />
                <span className="publication-date">{pub.date}</span>
              </div>
              <div className="publication-info">
                <h3>{pub.title}</h3>
                <button
                  className="download-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPdf(pub.pdf);
                  }}
                >
                  View PDF <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      {visibleCount < filteredData.length && (
        <div className="load-more-container">
          <button
            className="load-more-btn"
            onClick={() => setVisibleCount(visibleCount + 4)}
          >
            Load More
          </button>
        </div>
      )}

      {/* PDF Modal */}
      {selectedPdf && (
        <div className="pdf-modal" onClick={() => setSelectedPdf(null)}>
          <div className="pdf-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedPdf(null)}>
              ✕
            </span>
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

export default Publications;
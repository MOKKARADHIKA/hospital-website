// src/pages/Awards.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Awards.css";

const awardsData = [
  {
    title: "Best Medical Excellence Award",
    slug: "best-medical-excellence-award",
    image: "/images/award1.jpg",
    date: "2023-01-15"
  },
  {
    title: "Top Healthcare Innovation Award",
    slug: "top-healthcare-innovation-award",
    image: "/images/award2.jpg",
    date: "2023-03-10"
  },
  {
    title: "International Recognition Award",
    slug: "international-recognition-award",
    image: "/images/award3.jpg",
    date: "2023-05-20"
  },
  {
    title: "Best Doctor Award",
    slug: "best-doctor-award",
    image: "/images/award4.jpg",
    date: "2023-06-30"
  },
  {
    title: "Patient Safety Excellence Award",
    slug: "patient-safety-excellence-award",
    image: "/images/award5.jpg",
    date: "2023-07-15"
  },
  {
    title: "Outstanding Surgical Care Award",
    slug: "outstanding-surgical-care-award",
    image: "/images/award6.jpg",
    date: "2023-08-05"
  },
  {
    title: "Excellence in Nursing Care Award",
    slug: "excellence-in-nursing-care-award",
    image: "/images/award7.jpg",
    date: "2023-09-12"
  },
  {
    title: "Community Healthcare Service Award",
    slug: "community-healthcare-service-award",
    image: "/images/award8.jpg",
    date: "2023-10-01"
  },
  {
    title: "Advanced Medical Technology Award",
    slug: "advanced-medical-technology-award",
    image: "/images/award9.jpg",
    date: "2023-11-18"
  },
  {
    title: "Research Excellence Award",
    slug: "research-excellence-award",
    image: "/images/award10.jpg",
    date: "2023-12-05"
  },
  {
    title: "Quality Healthcare Leadership Award",
    slug: "quality-healthcare-leadership-award",
    image: "/images/award11.jpg",
    date: "2024-01-10"
  },
  {
    title: "Best Multispeciality Hospital Award",
    slug: "best-multispeciality-hospital-award",
    image: "/images/award12.jpg",
    date: "2024-02-20"
  },
  {
    title: "Excellence in Emergency Care Award",
    slug: "excellence-in-emergency-care-award",
    image: "/images/award13.jpg",
    date: "2024-03-15"
  },
  {
    title: "Outstanding Patient Experience Award",
    slug: "outstanding-patient-experience-award",
    image: "/images/award14.jpg",
    date: "2024-04-05"
  },
  {
    title: "Green Hospital Initiative Award",
    slug: "green-hospital-initiative-award",
    image: "/images/award15.jpg",
    date: "2024-05-22"
  },
  {
    title: "Digital Healthcare Transformation Award",
    slug: "digital-healthcare-transformation-award",
    image: "/images/award16.jpg",
    date: "2024-06-12"
  }
];

// function Awards() {
//   const navigate = useNavigate();
//   const [visibleCount, setVisibleCount] = useState();
//   const [filter, setFilter] = useState("all");

//   const handleFilterChange = (e) => {
//     const value = e.target.value;
//     setFilter(value);

//     if (value === "publications") {
//       navigate("/publications");
//     } else {
//       navigate("/awards");
//     }
//   };

//   return (
//     <div className="awards-page">

//       {/* Banner */}
//       <div className="awards-banner">
//   <h1>Awards</h1>
// </div>
//       {/* Breadcrumb */}
//       <div className="breadcrumb-container">
//         <span className="home-link" onClick={() => navigate("/")}>Home</span>
//         <span> / Awards</span>
//       </div>

//       {/* Filter */}
//       <div className="filter-section">
//         <label>Filter By:</label>
//         <select value={filter} onChange={handleFilterChange}>
//           <option value="all">All</option>
//           <option value="awards">Awards</option>
//           <option value="publications">Publications</option>
//         </select>
//       </div>

//       {/* Awards Grid */}
//       <div className="awards-container">
//         <div className="awards-grid">
//           {awardsData.slice(0, visibleCount).map((award, index) => (
//             <div
//               className="award-card"
//               key={index}
//               onClick={() => navigate(`/awards/${award.slug}`)}
//             >
//               <div className="award-image">
//                 <img src={award.image} alt={award.title} />
//                 <span className="award-date">{award.date}</span>
//               </div>

//               <div className="award-info">
//                 <h3>{award.title}</h3>
//                 <p
//                   className="read-more"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     navigate(`/awards/${award.slug}`);
//                   }}
//                 >
//                   Read More →
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More */}
//         {/* {visibleCount < awardsData.length && (
//           <div className="load-more-container">
//             <button onClick={() => setVisibleCount(visibleCount + 4)}>
//               Load More
//             </button>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// }

// export default Awards;

function Awards() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(8); // initial items
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    if (value === "publications") {
      navigate("/publications");
    } else {
      navigate("/awards");
    }
  };

  return (
    <div className="awards-page">

      {/* Banner */}
      <div
  style={{
    minHeight: "350px",
    backgroundColor: "red",
    backgroundImage: 'url("/images/awards-banner.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "left",
    alignItems: "flex-start",
    paddingLeft: "80px",
    color: "white",
  }}
>
  <h1>Awards/Publications</h1>
</div>

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <span className="home-link" onClick={() => navigate("/home")}>Home</span>
        <span> / Awards</span>
      </div>

      {/* Filter */}
      <div className="filter-section">
        <label>Filter By:</label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="awards">Awards</option>
          <option value="publications">Publications</option>
        </select>
      </div>

      {/* Awards Grid */}
      <div className="awards-container">
        <div className="awards-grid">
          {awardsData.slice(0, visibleCount).map((award, index) => (
            <div
              className="award-card"
              key={index}
              onClick={() => navigate(`/awards/${award.slug}`)}
            >
              <div className="award-image">
                <img src={award.image} alt={award.title} />
                <span className="award-date">{award.date}</span>
              </div>
              <div className="award-info">
                <h3>{award.title}</h3>
                <p
                  className="read-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/awards/${award.slug}`);
                  }}
                >
                  Read More →
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < awardsData.length && (
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

export default Awards;
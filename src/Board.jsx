import React from "react";
import "./Board.css"; // Create this file for styles

function Board() {
  const directors = [
    {
      name: "Dr. Duvvur Nageshwar Reddy",
      position: "Chairman & Managing Director",
      img: "/images/duvvur.jpg",
    },
    {
      name: "Mr. Penmetsa Venkata Subbaraju",
      position: "Vice Chairman & Director",
      img: "/images/penmetsa.jpg",
    },
    {
      name: "Dr. Guduru Venkata Rao",
      position: "Whole Time Director",
      img: "/images/guduru.jpg",
    },
    {
      name: "Dr. Carol Ann Reddy",
      position: "Director",
      img: "/images/carol.jpg",
    },
  ];

  return (
    <div className="board-page">
      {/* Banner Section */}
      <div className="board-banner">
        <h1>Board of Directors</h1>
      </div>
     {/* Doctors carrds*/}
     <section className="board-section">

  {directors.map((dir, idx) => (
    <div key={idx} className="director-card">
      

      <div className="director-image">
        <img src={dir.img} alt={dir.name} />
      </div>

      <div className="director-info">
        <h3>{dir.name}</h3>
        <p>{dir.position}</p>
      </div>
    </div>
  ))}
</section>
    </div>
  );
}

export default Board;
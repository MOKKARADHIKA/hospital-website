// import React from "react";
import "./Home.css";
import React, { useState, useEffect, useRef } from "react";
import { 
  FaHeartbeat, 
  FaBrain, 
  FaBone, 
  FaStethoscope, 
  FaRibbon,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";




const heroImages = [
  "/hospital1.jpg",
  "/images/hospital2.jpg",
  "/images/hospital3.jpg",
]; // your carousel images





const Home = () => {
 
  const navigate = useNavigate();   // ✅ ADD THIS

  const [currentIndex, setCurrentIndex] = useState(0); // ✅ INSIDE
   const scrollRef = useRef(null);

const nextSlide = () => {
  setCurrentIndex((prev) =>
    prev === heroImages.length - 1 ? 0 : prev + 1
  );
};

const prevSlide = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? heroImages.length - 1 : prev - 1
  );
};

    // Auto-change hero image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);



  // const nextSlide = () => {
  //   setCurrentIndex((prev) =>
  //     prev === heroImages.length - 1 ? 0 : prev + 1
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) =>
  //     prev === 0 ? heroImages.length - 1 : prev - 1
  //   );
  // };

  
  
  return (
    <div className="home">

      {/* HERO SECTION */}
      <div
  className="hero"
  style={{
    background: `url(${heroImages[currentIndex]}) center/cover no-repeat`,
  }}
>
  <div className="overlay">
    <h1>WELLNESS CENTRE</h1>
    <p>Personalized Multi Disciplinary Health Checkup</p>
  </div>

  {/* Arrow buttons */}
  {/* Arrow symbols */}
<span className="arrow left-arrow" onClick={prevSlide}>
  &#10094;
</span>
<span className="arrow right-arrow" onClick={nextSlide}>
  &#10095;
</span>

        <div className="mini-images">
          <img src="/hospital1.jpg" alt="Hospital" />
          <img src="/hospital2.jpg" alt="Hospital" />
          <img src="/images/hospitall3.jpg" alt="Hospital" />
          <img src="/images/hospital4.jpg" alt="Hospital" />
          <img src="/images/hospital5.jpg" alt="Hospital" />
        </div>
      </div>


      {/* SPECIALITIES SECTION */}
     <section className="specialities">
  <h2>Our Specialities</h2>

  <div className="speciality-container">

    <div className="speciality-card">
      <h3>Cardiology</h3>
      <p>Advanced heart care with expert cardiologists.</p>
    </div>

    <div className="speciality-card">
      <h3>Neurology</h3>
      <p>Comprehensive brain and spine treatment.</p>
    </div>

    <div className="speciality-card">
      <h3>Orthopedics</h3>
      <p>World-class bone and joint treatments.</p>
    </div>

    <div className="speciality-card">
      <h3>Gastroenterology</h3>
      <p>Complete digestive system care.</p>
    </div>

     <div className="speciality-card">
      <h3>Oncology</h3>
      <p>Comprehensive cancer diagnosis, chemotherapy and radiation therapy.</p>
    </div>

    <div className="speciality-card">
      <h3>Nephrology</h3>
      <p>Advanced kidney care including dialysis and transplant services.</p>
    </div> 

  </div>
</section>

      {/* CENTRES OF EXCELLENCE */}
{/* <section className="centres">
  <h2>Centres of Excellence</h2>
  <p className="centre-subtitle">
    Our depth of each center of excellence makes us a force to reckon with in super speciality tertiary healthcare.
  </p>

 <div className="centre-container" ref={scrollRef}>

  <div
    className="centre-card"
    onClick={() => navigate("/centre/Cardiology")}
  >
    <FaHeartbeat className="centre-icon" />
    <h3>Cardiology</h3>
    <p>Advanced heart care with interventional cardiology.</p>
  </div>

  <div
    className="centre-card"
    onClick={() => navigate("/centre/Neurology")}
  >
   
    <FaBrain className="centre-icon" />
    <h3>Neurology</h3>
    <p>Comprehensive brain & spine care services.</p>
  </div>

  <div
    className="centre-card"
    onClick={() => navigate("/centre/Orthopedics")}
  >
   
    <FaBone className="centre-icon" />
    <h3>Orthopedics</h3>
    <p>Joint replacement & trauma management.</p>
  </div>

  <div
    className="centre-card"
    onClick={() => navigate("/centre/Gastroenterology")}
  >
     

    <FaStethoscope className="centre-icon" />
    <h3>Gastroenterology</h3>
    <p>Complete digestive & liver care treatments.</p>
  </div>

  <div
    className="centre-card"
    onClick={() => navigate("/centre/Oncology")}
  >
    <FaRibbon className="centre-icon" />
    <h3>Oncology</h3>
    <p>Advanced cancer diagnosis & therapies.</p>
  </div>

  <div
    className="centre-card"
    onClick={() => navigate("/centre/Nephrology")}
  >
    
    <FaHeartbeat className="centre-icon" />
    <h3>Nephrology</h3>
    <p>Advanced kidney care & dialysis services.</p>
  </div>

  <div
    className="centre-card"
    onClick={() => navigate("/centre/Pulmonology")}
  >
   
    <FaBrain className="centre-icon" />
    <h3>Pulmonology</h3>
    <p>Expert lung & respiratory care services.</p>
  </div>

</div>
</section> */}


<section className="centres">
  <h2>Centres of Excellence</h2>
  <p className="centre-subtitle">
    Our depth of each center of excellence makes us a force to reckon with in super speciality tertiary healthcare.
  </p>

  <div className="centre-carousel">
    {/* Left Arrow */}
    <span className="arrow left-arrow" onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })}>
      &#10094;
    </span>

    <div className="centre-container" ref={scrollRef}>
      {/* Existing centre-cards go here */}
      <div className="centre-card" onClick={() => navigate("/centre/Cardiology")}>
        <FaHeartbeat className="centre-icon" />
        <h3>Cardiology</h3>
        <p>Advanced heart care with interventional cardiology.</p>
      </div>
      <div className="centre-card" onClick={() => navigate("/centre/Neurology")}>
        <FaBrain className="centre-icon" />
        <h3>Neurology</h3>
        <p>Comprehensive brain & spine care services.</p>
      </div>
      <div className="centre-card" onClick={() => navigate("/centre/Orthopedics")}>
        <FaBone className="centre-icon" />
        <h3>Orthopedics</h3>
        <p>Joint replacement & trauma management.</p>
      </div>
      <div className="centre-card" onClick={() => navigate("/centre/Gastroenterology")}>
        <FaStethoscope className="centre-icon" />
        <h3>Gastroenterology</h3>
        <p>Complete digestive & liver care treatments.</p>
      </div>
      <div className="centre-card" onClick={() => navigate("/centre/Oncology")}>
        <FaRibbon className="centre-icon" />
        <h3>Oncology</h3>
        <p>Advanced cancer diagnosis & therapies.</p>
      </div>
      <div className="centre-card" onClick={() => navigate("/centre/Nephrology")}>
        <FaHeartbeat className="centre-icon" />
        <h3>Nephrology</h3>
        <p>Advanced kidney care & dialysis services.</p>
      </div>
      <div className="centre-card" onClick={() => navigate("/centre/Pulmonology")}>
        <FaBrain className="centre-icon" />
        <h3>Pulmonology</h3>
        <p>Expert lung & respiratory care services.</p>
      </div>
    </div>

    {/* Right Arrow */}
    <span className="arrow right-arrow" onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })}>
      &#10095;
    </span>
  </div>
</section>

 </div>
  );
};



export default Home;
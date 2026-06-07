


// App.jsx
 import React, { useRef } from "react";

import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import History from "./History";
import Board from "./Board";
import DoctorsList from "./DoctorsList";
import DoctorsDetails from "./DoctorsDetails";
import DoctorProfile from "./DoctorProfile";
import DoctorDashboard from "./DoctorDashboard";
import PatientDashboard from "./PatientDashboard";
import BookAppointment from "./BookAppointment";
import AdminDashboard from "./AdminDashboard";
import AppointmentsPage from "./AppointmentsPage";
import CentreDetails from "./CentreDetails";
import SubSpecialityDetails from "./SubSpecialityDetails";
import Register from "./Register";
import RegisteredUsers from "./RegisteredUsers";
import Login from "./Login";
import Careers from "./Careers";
import Research from "./Research"; 

import Events from "./Events";
import EventDetails from "./EventDetails";
import eventsData from "./data/eventsData";
import Conferences from "./Conferences";
import Awards from "./Awards";
import awardsData from "./data/awardsData";
import AwardDetails from "./AwardDetails";
import Publications from "./Publications";


import Contact from "./Contact";

import Footer from "./Footer";
import DoctorTalks from "./DoctorTalks"; // import the new page
import PatientTestimonials from "./PatientTestimonials";
import PatientInformation from "./PatientInformation";
import InsuranceTPA from "./InsuranceTPA";
import BWM from "./BWM";
import Blog from "./Blog";
import blogData from "./data/blogData";
import BlogDetails from "./BlogDetails";
import PsuGovt from "./PsuGovt";
import Speciality from "./Speciality";
import HealthPackages from "./HealthPackages";
import PackageDetails from "./PackageDetails";
import PrivacyPolicy from "./PrivacyPolicy";
import Nursing from "./Nursing";
import FAQ from "./FAQ";





function AppWrapper() {
  const overviewRef = useRef(null);
  const boardRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (section) => {
    // Smooth scroll for Overview
    if (section === "overview") {
      if (location.pathname !== "/about-us") {
        navigate("/about-us");
        setTimeout(() => overviewRef.current?.scrollIntoView({ behavior: "smooth" }), 200);
      } else {
        overviewRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Navigate to separate pages for History and Board
    if (section === "history") navigate("/about-us/history");
    if (section === "board") navigate("/about-us/board");
  };

  return (
    <>
      {/* Main Navbar */}
      <NavBar refs={{ overviewRef, boardRef }} onScroll={handleScrollTo} />

      <Routes>
        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* About Us */}
        <Route path="/about-us" element={<AboutUs overviewRef={overviewRef} />} />

        {/* History Page */}
        <Route path="/about-us/history" element={<History />} />

        {/* Board of Directors Page */}
       <Route path="/about-us/board" element={<Board />} />

         {/* Research Page */}
        <Route path="/research" element={<Research />} />


        <Route path="/events" element={<Events />} />

        <Route path="/events/:slug" element={<EventDetails eventsData={eventsData} />}/>




       <Route path="/conferences" element={<Conferences />} />

        
<Route path="/awards" element={<Awards />} />

<Route
  path="/awards/:slug"
  element={
    <AwardDetails
      awardsData={awardsData}
    />
  }
/>

{/* <Route path="/awards/:title" element={<AwardDetails />} /> */}
<Route path="/publications" element={<Publications />} />

        {/* Contact Us Page */}
        <Route path="/contact" element={<Contact />} />





         





        {/* Other routes (your previous routes) */}
        <Route path="/doctors" element={<DoctorsList />} />
        <Route path="/doctor-details" element={<DoctorsDetails />} />
         {/* ✅ Health Packages Route */}
        <Route
          path="/health-packages"
          element={<HealthPackages/>}
        />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/" element={<Register />} />
        <Route path="/registered-users" element={<RegisteredUsers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/careers" element={<Careers />} />
        {/* Contact Us Page */}
        

        <Route path="/centre/:name" element={<CentreDetails />} />
        <Route
          path="/subspeciality/:speciality/:subname"
          element={<SubSpecialityDetails />}
        />

        <Route path="/doctor-talks" element={<DoctorTalks />} />
        <Route 
  path="/patient-testimonials" 
  element={<PatientTestimonials />}/>

  <Route
  path="/patient-information"
  element={<PatientInformation />}/>

      <Route
  path="/insurance-tpa"
  element={<InsuranceTPA />}/>


  <Route
  path="/bwm"
  element={<BWM />}/>
    
    <Route path="/blog" element={<Blog />} />

   <Route
    path="/blog/:id"
    element={<BlogDetails />}/>

    <Route
    path="/psu-govt"
     element={<PsuGovt />}/>

     <Route
       path="/speciality"
           element={<Speciality />}/>
           <Route
          path="/health-packages"
             element={<HealthPackages />}/>

          <Route
            path="/health-packages/:id"
           element={<PackageDetails />}/>

           <Route
             path="/privacy-policy"
               element={<PrivacyPolicy />}/>

               <Route
              path="/nursing"
            element={<Nursing />}/>

            <Route
              path="/faq"
               element={<FAQ />}/>

           

         



      



      </Routes>
      {/* Footer goes here */}
      <Footer />
    </>

    
  );
}

// Default App export
export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
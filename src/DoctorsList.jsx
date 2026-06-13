import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For Home link
import DoctorCard from "./DoctorCard";
import "./DoctorsList.css";

function DoctorsDetails() {
  const navigate = useNavigate(); // ✅ For Home breadcrumb

  // const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // For search bar
  const [selectedSpecialty, setSelectedSpecialty] = useState(""); // New filter

 const [visibleCount, setVisibleCount] = useState(8); // Initially show 8 cards

  const loadMore = () => {
    setVisibleCount((prev) => prev + 8); // Load 8 more each time
  };

  const doctors = [
    { id: 1, name: "Dr. Ramesh Kumar", specialization: "Cardiologist", experience: 12, description: "Expert in heart-related treatments, angioplasty, and cardiac surgeries.", image: "/doctor1.jpg" },
    { id: 2, name: "Dr. Priya Sharma", specialization: "Dermatologist", experience: 8, description: "Specialist in skin care, acne treatment, and cosmetic dermatology.", image: "/doctor2.jpg" },
    { id: 3, name: "Dr. Anil Verma", specialization: "Neurologist", experience: 15, description: "Highly experienced in brain disorders, stroke management, and nerve care.", image: "/doctor3.jpg" },
    { id: 4, name: "Dr. Sneha Reddy", specialization: "Pediatrician", experience: 10, description: "Child health specialist providing complete care for infants and children.", image: "/doctor4.jpg" },
    { id: 5, name: "Dr. Arjun Mehta", specialization: "Orthopedic Surgeon", experience: 14, description: "Expert in bone fractures, joint replacement, and sports injury treatment.", image: "/doctor5.jpg" },
    { id: 6, name: "Dr. Kavya Nair", specialization: "Gynecologist", experience: 9, description: "Specialist in women’s health, pregnancy care, and reproductive treatments.", image: "/doctor6.jpg" },
    { id: 7, name: "Dr. Rahul Singh", specialization: "ENT Specialist", experience: 11, description: "Treats ear, nose, and throat problems with advanced surgical expertise.", image: "/doctor7.jpg" },
    { id: 8, name: "Dr. Neha Kapoor", specialization: "Psychiatrist", experience: 7, description: "Provides mental health support, therapy, and stress disorder treatment.", image: "/doctor8.jpg" },
    { id: 9, name: "Dr. Vikram Joshi", specialization: "General Physician", experience: 13, description: "Primary care expert treating fever, infections, diabetes, and BP issues.", image: "/doctor9.jpg" },
    { id: 10, name: "Dr. Aishwarya Menon", specialization: "Ophthalmologist", experience: 6, description: "Eye specialist for cataract surgery, vision correction, and retina care.", image: "/doctor10.jpg" },
    { id: 11, name: "Dr. Suresh Iyer", specialization: "Gastroenterologist", experience: 16, description: "Expert in digestive system disorders, liver care, and endoscopy treatment.", image: "/doctor11.jpg" },
    { id: 12, name: "Dr. Megha Patil", specialization: "Oncologist", experience: 12, description: "Cancer specialist providing chemotherapy, radiation therapy, and counseling.", image: "/doctor12.jpg" },
    { id: 13, name: "Dr. Kiran Das", specialization: "Urologist", experience: 10, description: "Treats kidney stones, urinary tract infections, and bladder disorders.", image: "/doctor13.jpg" },
    { id: 14, name: "Dr. Pooja Chatterjee", specialization: "Endocrinologist", experience: 8, description: "Specialist in thyroid, hormonal imbalance, diabetes, and metabolism issues.", image: "/doctor14.jpg" },
    { id: 15, name: "Dr. Mahesh Babu", specialization: "Pulmonologist", experience: 14, description: "Lung specialist treating asthma, bronchitis, pneumonia, and breathing issues.", image: "/doctor15.jpg" },




    {
    id: "dr-ramesh-kumar",
    name: "Dr. Ramesh Kumar",
    specialization: "Cardiologist",
    experience: 12,
    description: "Expert in heart-related treatments, angioplasty, and cardiac surgeries.",
    image: "/doctor1.jpg"
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    specialization: "Dermatologist",
    experience: 8,
    description: "Specialist in skin care, acne treatment, and cosmetic dermatology.",
    image: "/doctor2.jpg"
  },
  {
    id: "dr-anil-verma",
    name: "Dr. Anil Verma",
    specialization: "Neurologist",
    experience: 15,
    description: "Highly experienced in brain disorders, stroke management, and nerve care.",
    image: "/doctor3.jpg"
  },
  {
    id: "dr-sneha-reddy",
    name: "Dr. Sneha Reddy",
    specialization: "Pediatrician",
    experience: 10,
    description: "Child health specialist providing complete care for infants and children.",
    image: "/doctor4.jpg"
  },
  {
    id: "dr-arjun-mehta",
    name: "Dr. Arjun Mehta",
    specialization: "Orthopedic Surgeon",
    experience: 14,
    description: "Expert in bone fractures, joint replacement, and sports injury treatment.",
    image: "/doctor5.jpg"
  },
  {
    id: "dr-kavya-nair",
    name: "Dr. Kavya Nair",
    specialization: "Gynecologist",
    experience: 9,
    description: "Specialist in women’s health, pregnancy care, and reproductive treatments.",
    image: "/doctor6.jpg"
  },
  {
    id: "dr-rahul-singh",
    name: "Dr. Rahul Singh",
    specialization: "ENT Specialist",
    experience: 11,
    description: "Treats ear, nose, and throat problems with advanced surgical expertise.",
    image: "/doctor7.jpg"
  },
  {
    id: "dr-neha-kapoor",
    name: "Dr. Neha Kapoor",
    specialization: "Psychiatrist",
    experience: 7,
    description: "Provides mental health support, therapy, and stress disorder treatment.",
    image: "/doctor8.jpg"
  },
  {
    id: "dr-vikram-joshi",
    name: "Dr. Vikram Joshi",
    specialization: "General Physician",
    experience: 13,
    description: "Primary care expert treating fever, infections, diabetes, and BP issues.",
    image: "/doctor9.jpg"
  },
  {
    id: "dr-aishwarya-menon",
    name: "Dr. Aishwarya Menon",
    specialization: "Ophthalmologist",
    experience: 6,
    description: "Eye specialist for cataract surgery, vision correction, and retina care.",
    image: "/doctor10.jpg"
  },
  {
    id: "dr-suresh-iyer",
    name: "Dr. Suresh Iyer",
    specialization: "Gastroenterologist",
    experience: 16,
    description: "Expert in digestive system disorders, liver care, and endoscopy treatment.",
    image: "/doctor11.jpg"
  },
  {
    id: "dr-megha-patil",
    name: "Dr. Megha Patil",
    specialization: "Oncologist",
    experience: 12,
    description: "Cancer specialist providing chemotherapy, radiation therapy, and counseling.",
    image: "/doctor12.jpg"
  },
  {
    id: "dr-kiran-das",
    name: "Dr. Kiran Das",
    specialization: "Urologist",
    experience: 10,
    description: "Treats kidney stones, urinary tract infections, and bladder disorders.",
    image: "/doctor13.jpg"
  },
  {
    id: "dr-pooja-chatterjee",
    name: "Dr. Pooja Chatterjee",
    specialization: "Endocrinologist",
    experience: 8,
    description: "Specialist in thyroid, hormonal imbalance, diabetes, and metabolism issues.",
    image: "/doctor14.jpg"
  },
  {
    id: "dr-mahesh-babu",
    name: "Dr. Mahesh Babu",
    specialization: "Pulmonologist",
    experience: 14,
    description: "Lung specialist treating asthma, bronchitis, pneumonia, and breathing issues.",
    image: "/doctor15.jpg"
  },


  {
    id: "dr-kiran-rao",
    name: "Dr. Kiran Rao",
    specialization: "Cardiology",
    experience: 15,
    description: "Dr. Kiran Rao is an experienced Interventional Cardiologist specializing in the diagnosis and treatment of coronary artery disease and structural heart disorders. He has performed numerous coronary angiographies and angioplasties with high success rates. His patient-centered approach and expertise in advanced cardiac procedures ensure the highest standards of cardiac care.",
    image: "/images/doc9.jpg"
  },
  {
    id: "dr-naveen-kumar",
    name: "Dr. Naveen Kumar",
    specialization: "Cardiology",
    experience: 14,
    description: "Dr. Naveen Kumar is a Heart Failure Specialist with extensive experience in managing complex cardiac conditions. He focuses on improving quality of life for patients with advanced heart disease through innovative treatments and personalized care.",
    image: "/images/doc10.jpg"
  },
  {
    id: "dr-sandeep-varma",
    name: "Dr. Sandeep Varma",
    specialization: "Cardiology",
    experience: 16,
    description: "Dr. Sandeep Varma is a highly experienced Senior Cardiologist known for his expertise in diagnosing and managing various cardiac disorders. His patient-focused approach ensures comprehensive cardiac care.",
    image: "/images/doc11.jpg"
  },
  {
    id: "dr-rohith-reddy",
    name: "Dr. Rohit Reddy",
    specialization: "Cardiology",
    experience: 12,
    description: "Dr. Rohit Reddy specializes in diagnosing and treating heart rhythm disorders using advanced electrophysiology techniques and minimally invasive procedures.",
    image: "/images/doc12.jpg"
  },
  {
    id: "dr-harish-patel",
    name: "Dr. Harish Patel",
    specialization: "Cardiology",
    experience: 15,
    description: "Dr. Harish Patel is an Interventional Cardiologist known for his expertise in angioplasty and advanced coronary procedures with high success rates.",
    image: "/images/doc13.jpg"
  },
  {
    id: "dr-vikram-singh",
    name: "Dr. Vikram Singh",
    specialization: "Cardiology",
    experience: 13,
    description: "Dr. Vikram Singh provides comprehensive cardiology care including preventive cardiology and advanced cardiac diagnostics.",
    image: "/images/doc14.jpg"
  },
  {
    id: "dr-anil-mehta",
    name: "Dr. Anil Mehta",
    specialization: "Cardiology",
    experience: 18,
    description: "Dr. Anil Mehta is a Senior Heart Specialist known for his expertise in treating complex cardiac conditions and providing holistic cardiac care.",
    image: "/images/doc15.jpg"
  },
  {
    id: "dr-rakesh-gup",
    name: "Dr. Rakesh Gupta",
    specialization: "Cardiology",
    experience: 14,
    description: "Dr. Rakesh Gupta is a Cardiology Consultant specializing in preventive cardiology and non-invasive cardiac diagnostic procedures.",
    image: "/images/doc16.jpg"
  },

  {
    id: "dr-anusha-devi",
    name: "Dr. Anusha Devi",
    specialization: "Neurology",
    experience: 12,
    description: "Dr. Anusha Devi is a dedicated Neurologist and Epilepsy Specialist with extensive experience in managing complex neurological disorders. She specializes in the diagnosis and treatment of epilepsy and seizure-related conditions using advanced neurological evaluation techniques. Her compassionate approach ensures personalized care and improved quality of life for her patients.",
    image: "/images/doc17.jpg"
  },
  {
    id: "dr-rahul-sharma",
    name: "Dr. Rahul Sharma",
    specialization: "Neurology",
    experience: 14,
    description: "Dr. Rahul Sharma is a Stroke Specialist with extensive experience in managing cerebrovascular disorders. He focuses on early diagnosis and advanced treatments for stroke patients to improve recovery and long-term neurological health.",
    image: "/images/doc18.jpg"
  },
  {
    id: "dr-pooja-nair",
    name: "Dr. Pooja Nair",
    specialization: "Neurology",
    experience: 15,
    description: "Dr. Pooja Nair is an experienced Senior Neurologist known for diagnosing and managing complex neurological disorders including migraines, epilepsy, and neurodegenerative diseases.",
    image: "/images/doc19.jpg"
  },
  {
    id: "dr-suresh-patel",
    name: "Dr. Suresh Patel",
    specialization: "Neurology",
    experience: 13,
    description: "Dr. Suresh Patel is a Neuro Physician specializing in neurological conditions such as epilepsy, stroke, and neuropathy with a focus on accurate diagnosis and effective treatment.",
    image: "/images/doc20.jpg"
  },
  {
    id: "dr-kavya-reddy",
    name: "Dr. Kavya Reddy",
    specialization: "Neurology",
    experience: 11,
    description: "Dr. Kavya Reddy is a Movement Disorder Specialist focusing on neurological conditions such as Parkinson’s disease, tremors, and dystonia.",
    image: "/images/doc21.jpg"
  },
  {
    id: "dr-aditya-varma",
    name: "Dr. Aditya Varma",
    specialization: "Neurology",
    experience: 12,
    description: "Dr. Aditya Varma is a Consultant Neurologist specializing in diagnosing and treating a wide range of neurological disorders.",
    image: "/images/doc22.jpg"
  },
  {
    id: "dr-ritu-sharma",
    name: "Dr. Ritu Sharma",
    specialization: "Neurology",
    experience: 10,
    description: "Dr. Ritu Sharma focuses on helping patients recover from neurological injuries and disorders through structured neuro rehabilitation programs.",
    image: "/images/doc23.jpg"
  },
  {
    id: "dr-manish-gupta",
    name: "Dr. Manish Gupta",
    specialization: "Neurology",
    experience: 18,
    description: "Dr. Manish Gupta is a Senior Neuro Consultant known for his expertise in managing complex neurological disorders and providing comprehensive neurological care.",
    image: "/images/doc24.jpg"
  },
   {
    id: "dr-ajay-kumar",
    name: "Dr. Ajay Kumar",
    specialization: "Pulmonology",
    experience: 18,
    description: "Dr. Ajay Kumar is a Senior Pulmonologist with extensive experience in diagnosing and managing complex respiratory disorders including COPD, asthma, and lung infections.",
    image: "/images/doc25.jpg"
  },
  {
    id: "dr-deepak-verma",
    name: "Dr. Deepak Verma",
    specialization: "Pulmonology",
    experience: 12,
    description: "Dr. Deepak Verma is an Asthma Specialist focusing on advanced treatment and long-term management of asthma and allergic respiratory diseases.",
    image: "/images/doc26.jpg"
  },
  {
    id: "dr-sneha-reddy",
    name: "Dr. Sneha Reddy",
    specialization: "Pulmonology",
    experience: 10,
    description: "Dr. Sneha Reddy is a Sleep Medicine Specialist focusing on sleep-related breathing disorders including sleep apnea and chronic insomnia.",
    image: "/images/doc27.jpg"
  },
  {
    id: "dr-arvind-singh",
    name: "Dr. Arvind Singh",
    specialization: "Pulmonology",
    experience: 14,
    description: "Dr. Arvind Singh is a Consultant Pulmonologist experienced in managing respiratory infections, lung diseases, and pulmonary complications.",
    image: "/images/doc28.jpg"
  },
  {
    id: "dr-meera-nair",
    name: "Dr. Meera Nair",
    specialization: "Pulmonology",
    experience: 13,
    description: "Dr. Meera Nair is a Respiratory Medicine Specialist focusing on comprehensive treatment of lung diseases and respiratory disorders.",
    image: "/images/doc29.jpg"
  },
  {
    id: "dr-ravi-teja",
    name: "Dr. Ravi Teja",
    specialization: "Pulmonology",
    experience: 11,
    description: "Dr. Ravi Teja is a Critical Care Pulmonologist specializing in managing severe respiratory conditions in ICU settings.",
    image: "/images/doc30.jpg"
  },
  {
    id: "dr-harini-patel",
    name: "Dr. Harini Patel",
    specialization: "Pulmonology",
    experience: 12,
    description: "Dr. Harini Patel is a Chest Physician experienced in diagnosing and treating various lung conditions including tuberculosis, asthma, and bronchitis.",
    image: "/images/doc31.jpg"
  },
  {
    id: "dr-sanjay-gupta",
    name: "Dr. Sanjay Gupta",
    specialization: "Pulmonology",
    experience: 16,
    description: "Dr. Sanjay Gupta is a Pulmonary Consultant known for his expertise in diagnosing and managing advanced respiratory conditions and lung diseases.",
    image: "/images/doc32.jpg"
  },
  {
    id: "dr-ramesh-kumar",
    name: "Dr. Ramesh Kumar",
    specialization: "Gastroenterology",
    experience: 18,
    description: "Dr. Ramesh Kumar is a Senior Gastroenterologist with extensive experience in diagnosing and treating digestive tract disorders including liver disease, acid reflux, and intestinal problems.",
    image: "/images/doc33.jpg"
  },
  {
    id: "dr-priya-nair",
    name: "Dr. Priya Nair",
    specialization: "Gastroenterology",
    experience: 12,
    description: "Dr. Priya Nair is a Consultant Gastroenterologist known for diagnosing and treating digestive system disorders with a patient-centered approach.",
    image: "/images/doc34.jpg"
  },
  {
    id: "dr-sanjay-reddy",
    name: "Dr. Sanjay Reddy",
    specialization: "Gastroenterology",
    experience: 14,
    description: "Dr. Sanjay Reddy is a Hepatology Specialist focusing on liver diseases including hepatitis, fatty liver disease, and cirrhosis.",
    image: "/images/doc35.jpg"
  },
  {
    id: "dr-kavitha-sharma",
    name: "Dr. Kavitha Sharma",
    specialization: "Gastroenterology",
    experience: 11,
    description: "Dr. Kavitha Sharma is an Endoscopy Specialist known for performing advanced endoscopic procedures for diagnosing digestive system disorders.",
    image: "/images/doc36.jpg"
  },
  {
    id: "dr-arvind-patel",
    name: "Dr. Arvind Patel",
    specialization: "Gastroenterology",
    experience: 16,
    description: "Dr. Arvind Patel is a Senior GI Consultant specializing in diagnosing and treating a wide range of gastrointestinal disorders.",
    image: "/images/doc37.jpg"
  },
  {
    id: "dr-sneha-gupta",
    name: "Dr. Sneha Gupta",
    specialization: "Gastroenterology",
    experience: 10,
    description: "Dr. Sneha Gupta is an IBD Specialist focusing on inflammatory bowel diseases including Crohn’s disease and ulcerative colitis.",
    image: "/images/doc38.jpg"
  },
  {
    id: "dr-rajiv-menon",
    name: "Dr. Rajiv Menon",
    specialization: "Gastroenterology",
    experience: 13,
    description: "Dr. Rajiv Menon is a Consultant Hepatologist with expertise in treating complex liver diseases and providing advanced hepatology care.",
    image: "/images/doc39.jpg"
  },
  {
    id: "dr-meena-reddy",
    name: "Dr. Meena Reddy",
    specialization: "Gastroenterology",
    experience: 12,
    description: "Dr. Meena Reddy is a GI Endoscopy Consultant specializing in advanced endoscopic procedures and digestive disease diagnosis.",
    image: "/images/doc40.jpg"
  },
   {
    id: "dr-anil-kumar",
    name: "Dr. Anil Kumar",
    specialization: "Oncology",
    experience: 18,
    description: "Dr. Anil Kumar is a Senior Medical Oncologist with extensive experience in diagnosing and treating various types of cancer using advanced medical therapies.",
    image: "/images/doc41.jpg"
  },
  {
    id: "dr-shalini-verma",
    name: "Dr. Shalini Verma",
    specialization: "Oncology",
    experience: 14,
    description: "Dr. Shalini Verma is a Radiation Oncologist specializing in treating cancer using advanced radiation therapy technologies.",
    image: "/images/doc42.jpg"
  },
  {
    id: "dr-rajesh-sharma",
    name: "Dr. Rajesh Sharma",
    specialization: "Oncology",
    experience: 16,
    description: "Dr. Rajesh Sharma is a Surgical Oncologist with expertise in performing complex cancer surgeries and providing comprehensive surgical care for oncology patients.",
    image: "/images/doc43.jpg"
  },
  {
    id: "dr-kavya-menon",
    name: "Dr. Kavya Menon",
    specialization: "Oncology",
    experience: 12,
    description: "Dr. Kavya Menon specializes in diagnosing and treating breast cancer using advanced medical and surgical techniques.",
    image: "/images/doc44.jpg"
  },
  {
    id: "dr-vivek-gupta",
    name: "Dr. Vivek Gupta",
    specialization: "Oncology",
    experience: 17,
    description: "Dr. Vivek Gupta is a Senior Cancer Consultant specializing in comprehensive cancer care and advanced treatment strategies.",
    image: "/images/doc45.jpg"
  },
  {
    id: "dr-nisha-patel",
    name: "Dr. Nisha Patel",
    specialization: "Oncology",
    experience: 11,
    description: "Dr. Nisha Patel is a Medical Oncology Specialist focusing on personalized cancer treatment plans for patients.",
    image: "/images/doc46.jpg"
  },
  {
    id: "dr-raghav-bansal",
    name: "Dr. Raghav Bansal",
    specialization: "Oncology",
    experience: 13,
    description: "Dr. Raghav Bansal is a Head & Neck Oncologist specializing in diagnosing and treating cancers of the throat, mouth, and neck.",
    image: "/images/doc47.jpg"
  },
  {
    id: "dr-pooja-iyer",
    name: "Dr. Pooja Iyer",
    specialization: "Oncology",
    experience: 12,
    description: "Dr. Pooja Iyer is a GI Oncology Specialist focusing on cancers of the digestive system including stomach, liver, and colorectal cancers.",
    image: "/images/doc48.jpg"
  },
   {
    id: "dr-suresh-kumar",
    name: "Dr. Suresh Kumar",
    specialization: "Nephrology",
    experience: 18,
    description: "Dr. Suresh Kumar is a Senior Nephrologist known for his expertise in managing complex kidney disorders and providing comprehensive renal care.",
    image: "/images/doc49.jpg"
  },
  {
    id: "dr-priyanka-reddy",
    name: "Dr. Priyanka Reddy",
    specialization: "Nephrology",
    experience: 14,
    description: "Dr. Priyanka Reddy specializes in kidney transplantation and advanced renal care with a patient-focused treatment approach.",
    image: "/images/doc50.jpg"
  },
  {
    id: "dr-arjun-sharma",
    name: "Dr. Arjun Sharma",
    specialization: "Nephrology",
    experience: 12,
    description: "Dr. Arjun Sharma focuses on dialysis management and treatment of kidney disorders with modern medical techniques.",
    image: "/images/doc51.jpg"
  },
  {
    id: "dr-kavita-patel",
    name: "Dr. Kavita Patel",
    specialization: "Nephrology",
    experience: 13,
    description: "Dr. Kavita Patel specializes in managing chronic kidney disease and providing long-term kidney care for patients.",
    image: "/images/doc52.jpg"
  },
  {
    id: "dr-vinay-gupta",
    name: "Dr. Vinay Gupta",
    specialization: "Nephrology",
    experience: 15,
    description: "Dr. Vinay Gupta is a Consultant Nephrologist with expertise in diagnosing and treating various kidney disorders.",
    image: "/images/doc53.jpg"
  },
  {
    id: "dr-sneha-menon",
    name: "Dr. Sneha Menon",
    specialization: "Nephrology",
    experience: 11,
    description: "Dr. Sneha Menon focuses on providing comprehensive renal care and improving kidney health outcomes for patients.",
    image: "/images/doc54.jpg"
  },
  {
    id: "dr-rohit-bansal",
    name: "Dr. Rohit Bansal",
    specialization: "Nephrology",
    experience: 12,
    description: "Dr. Rohit Bansal is known for his expertise in diagnosing and managing various kidney diseases.",
    image: "/images/doc55.jpg"
  },
  {
    id: "dr-meera-sharma",
    name: "Dr. Meera Sharma",
    specialization: "Nephrology",
    experience: 16,
    description: "Dr. Meera Sharma is a Senior Renal Specialist providing advanced care for patients with kidney disorders.",
    image: "/images/doc56.jpg"
  }


  ];

  // Get all unique specialties
  const specialties = [...new Set(doctors.map((doc) => doc.specialization))];

  // Filter doctors by search term and specialty
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "" || doctor.specialization === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  // Slice doctors based on visibleCount
  const visibleDoctors = filteredDoctors.slice(0, visibleCount);

  return (
    <div className="doctor-list-page">
      {/* Banner */}
      <div
        className="doctor-banner"
        style={{
          background: `url("/images/doctors-banner.jpg") center/cover no-repeat`,
        }}
      >
        <h1 className="banner-title">Our Doctors</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <span className="breadcrumb-home" onClick={() => navigate("/home")}>
          Home
        </span>{" "}
        / <span>Our Doctors</span>
      </div>

      {/* Header */}
      <div className="doctor-list-header">
        <p className="page-subtitle">
          Search and connect with top specialists for your healthcare needs
        </p>

        <div className="search-container-right">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="doctor-search"
          />

          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="doctor-filter"
          >
            <option value="">All Specialties</option>
            {specialties.map((spec, idx) => (
              <option key={idx} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="doctor-grid">
        {visibleDoctors.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%", marginTop: "20px" }}>
            No doctors found
          </p>
        ) : (
          visibleDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        )}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredDoctors.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="load-more-btn" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default DoctorsDetails;
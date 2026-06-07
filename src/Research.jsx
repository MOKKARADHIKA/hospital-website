import React, { useRef, useState } from "react";
import "./Research.css";
import { useNavigate } from "react-router-dom";
import {
  FaFlask,
  FaDna,
  FaVirus,
  FaHeartbeat,
  FaMicroscope,
  FaProjectDiagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const researchAreas = [
  { icon: <FaFlask />, title: "Cytotherapy Including Islet Transplantation" },
  { icon: <FaDna />, title: "Gut Microbiome" },
  { icon: <FaHeartbeat />, title: "Non-Alcoholic Fatty Liver Disease" },
  { icon: <FaVirus />, title: "Viral Hepatitis" },
  { icon: <FaProjectDiagram />, title: "Pancreatogenic Diabetes" },
  { icon: <FaMicroscope />, title: "Stem Cells Biology" },
  { icon: <FaDna />, title: "Genetics & Genomics" },
];



const publications = [
  "Sasikala, Ravikanth VV, Murali Manohar K, Neha Deshpande, Sandhya Singh, Pavan Kumar P, R. Talukdar, Sudip Ghosh, Mohsin Aslam, GV. Rao, R. Pradeep, D. Nageshwar Reddy. Bach2 repression mediates Th17 cell-induced inflammation and associated with clinical features of the advanced disease in chronic pancreatitis United European Gastroenterology Journal (In Press 2017).",

  "Govardhan B, Steffie UA, Ravi Kanth VV, Rao PN, Mithun Sharma, Sasikala M, Nageshwar Reddy D. Regional differences in genetic susceptibility to NAFLD in two distinct Indian ethnicities. World Journal of Hepatology – 2017.",

  "Murali Manohar K, Sasikala M, Kvsrr Y, Sunil V, Talukdar R, Murthy H, Ramji C, Rao GV, Pradeep R, Reddy DN. Plasma microRNA192 in combination with serum CA19-9 as a non-invasive prognostic biomarker in periampullary carcinoma. Tumour Biol. 2017.",

  "Sai Manasa Jandhyala, A. Madhulika, G. Deepika, G. Venkat Rao, D. Nageshwar Reddy. Altered intestinal microbiota in patients with chronic pancreatitis. Scientific Reports 2017.",

  "Neha Deshpande, Radhika Chavan, Govardhan Bale, Mohsin Aslam, Mohan Ramchandani, D. Nageshwar Reddy. Hereditary persistence of alpha-fetoprotein. ACG Case Reports Journal, 2017.",

  "K. Murali Manohar, M. Sasikala, P. Pavan Kumar, G.V. Rao, D. Nageshwar Reddy. Dysregulated miRNA in chronic pancreatitis. Journal of Endocrine and Metabolic Diseases, 2016.",

  "V. V. Ravi Kanth, G.V. Rao, B. Govardhan, M. Sasikala. Polymorphisms in UGT1A1 gene predispose South Indians to pigment gallstones. Journal of Clinical and Experimental Hepatology, 2016.",

  "Ratnakar Reddy B, Aparna J, Sasikala M. Pancreatic stellate cell: The Pandora’s Box. World Journal of Gastroenterology 2016.",

  "Talukdar R et al. Antioxidants and pregabalin combination in chronic pancreatitis. J Gastroenterol Hepatol. 2016.",

  "Talukdar R et al. Cathepsin B causes cell death in acute pancreatitis. Gastroenterology. 2016.",
"Sai Manasa Jandhyala, A. Madhulika, G. Deepika, G. Venkat Rao, D. Nageshwar Reddy, Chivukula Subramanyam, Mitnala Sasikala, Rupjyoti Talukdar. Altered intestinal microbiota in patients with chronic pancreatitis: implications in diabetes and metabolic abnormalities. Scientific Reports 7:43640. DOI: 10.1038/srep43640. Published: 03 March 2017.Vishnubhotla Venkata Ravi Kanth et al. Genetics of NAFLD. World J Hepatol 2016.",

  "Siddapuram Siva Prasad, P. N. Rao, Rajesh Gupta, Kaitha Ashwini, Duvvuru Nageshwar Reddy: The Distribution of genotype and allelic frequency of IL28B gene polymorphism in Andhra Pradesh, India. Journal of Clinical and Experimental Hepatology/ June 2012/ Vol.2/No2/ 1-4.",

  "Rathindra Mohan Mukherjee, Gelli Veena Shravanti, Aparna Jakkampudi, Ramya Kota, Asha Latha Jangala, Panyala Balkumar Reddy, Padaki Nagaraja Rao, Rajesh Gupta, Duvvuru Nageshwar Reddy. Reduced Expression of DNA Damage Repair Genes High Mobility Group Box1 and Poly(ADP-ribose) Polymerase1in Inactive Carriers of Hepatitis B Virus Infection-A Possible Stage of Viral Integration. Journal of Clinical and Experimental Hepatology/2013/Vol/No. 1-7.",

  "Uma Mahesh KSS, Murali MK, Sasikala M, Talukdar R, Rao GV, Spandana B, Rajasekhar K, Siva Prasad S, Anuradha S, Ramji C, Pradeep R, Reddy DN. MicroRNA profiling in periampullary carcinoma. Pancreatology 2013; 14: 36-47.",

  "Mitnala Sasikala, GuduruVenkat Rao, Venkateshan Vijaya Lakshmi, Rebala Pradeep, Suresh Pothani, Pondugala Pavan Kumar, Radhika Gaddipati, Ganneru Sirisha, Ramji Cheemalakonda, Chivukula Subramanyam, Seshadri Vasudevan, D. Nageshwar Reddy. Long-term functions of encapsulated islets grafted in nonhuman primates without immunosuppression. Transplantation. 2013 Oct 15;96(7):624-32..",

  "Sadik Ali Mohammad, Shaik Sarfaraz Nawaz, Imran Ahmed Siddiqui, Sasikala M, Rathindra Mohan Mukherjee, Nagaraja Rao P, Nageshwar Reddy D. Circulating visfatin and pro-inflammatory cytokine levels in non-alcoholic fatty liver disease. International Journal of Current Research, 2014; Vol.6, Issue.8, 8159-8162.",

  "P.N.Rao, P.Balkumar Reddy, R.M.Mukherjee, R.Gupta, D.N.Reddy. The spectrum of Incidentally Detected Hepatitis C Virus Infection in Southern India- A Prospective Study. Global Journal of Gastroenterology & Hepatology, 2014;2, 69-73.",

  "Sharma M, Shasikala M, Rao PN, Reddy DN.AUTOLOGOUS CD34+ STEM CELL INFUSION AS A BRIDGE TO LIVER TRANSPLANT IN DECOMPENSATED CIRRHOSIS. Abstract P0124 EASL, Vienna 2015.",

  "Sharma M, Reddy D N, Kiat T C. Endoscopic Retrograde Cholangiopancreatography as a risk factor for pancreatic panniculitis in a post liver transplant patient. ACG Case Rep J. 2014 Oct 10;2(1):36-8. doi: 10.14309/crj.2014.77. eCollection 2014 Oct..",

  "Rupjyoti Talukdar, Abhik Bhattacharyya, Bhavana Rao, Mithun Sharma, G V Rao, D N Reddy.Validation of the revised Atlanta definition of the severity of acute pancreatitis: Have all loose ends being tied. Pancreatology 11/2014; DOI: 10.1016/j.pan.2014.06.003.",

  "Mithun Sharma, Chan Li Ning, Jason Chang, Tan Hui Hui, Chow W Chen, Tony Lim Immunohistochemistry of inflammatory cytokine markers on steatosis vs. steatohepatitis. Indian J Gastroenterol (November 2012) 31(Suppl 1): A8 . As Presidential Poster at ISGCON 2012, Jaipur."
];

/* ✅ TEAM DATA ADDED */
const teamData = {
  "Research Personnel": [
    { name: "Dr. Rajesh Kumar", img: "/images/rajesh.jpg" },
    { name: "Dr. Anitha Reddy", img: "/images/anitha.jpg" },
    { name: "Dr. Suresh Babu", img: "/images/doctors/suresh.jpg" },
    { name: "Dr. Meena Sharma", img: "/images/doctors/meena.jpg" },
    { name: "Dr. Ravi Teja", img: "/images/doctors/raviteja.jpg" },
    { name: "Dr. Kavitha Rao", img: "/images/doctors/kavitha.jpg" },
    { name: "Dr. Arjun Varma", img: "/images/doctors/arjun.jpg" },
    { name: "Dr. Sneha Iyer", img: "/images/doctors/sneha.jpg" },
  ],

  "Technical Personnel": [
    { name: "Mr. Kiran Kumar", img: "/images/tech/kiran.jpg" },
    { name: "Ms. Swathi Rani", img: "/images/tech/swathi.jpg" },
    { name: "Mr. Naresh Patel", img: "/images/tech/naresh.jpg" },
    { name: "Ms. Priya Nair", img: "/images/tech/priya.jpg" },
    { name: "Mr. Rohit Singh", img: "/images/tech/rohit.jpg" },
    { name: "Ms. Divya Sharma", img: "/images/tech/divya.jpg" },
  ],

  /* 👇 Cartoon images (same but allowed for staff) */
  "Office Staff": [
    { name: "Mr. Ramesh Gupta", img: "/images/cartoon-doc.png" },
    { name: "Ms. Kavya Sharma", img: "/images/cartoon-doc.png" },
    { name: "Mr. Ajay Verma", img: "/images/cartoon-doc.png" },
    { name: "Ms. Deepika Rao", img: "/images/cartoon-doc.png" },
    { name: "Mr. Sunil Kumar", img: "/images/cartoon-doc.png" },
  ],

  "Volunteers": [
    { name: "Akhil Reddy", img: "/images/cartoon-doc.png" },
    { name: "Neha Kapoor", img: "/images/cartoon-doc.png" },
    { name: "Rahul Mehta", img: "/images/cartoon-doc.png" },
    { name: "Pooja Sharma", img: "/images/cartoon-doc.png" },
    { name: "Vikram Singh", img: "/images/cartoon-doc.png" },
  ],
};

function Research() {
  const navigate = useNavigate();
  const scrollRef = useRef();

  /* ✅ STATE ADDED */
  const [selectedTeam, setSelectedTeam] = useState("Research Personnel");

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="research-page">

      {/* 🔵 Banner */}
      <div className="research-banner">
        <h1>RESEARCH</h1>
        <p>Advancing Science for Better Healthcare</p>
      </div>

      {/* ✅ Breadcrumb BELOW banner */}
      <div className="breadcrumb-container">
        <span onClick={() => navigate("/")} className="home-link">
          Home
        </span>
        <span> / Research</span>
      </div>

      {/* 🧬 About Section */}
      <div className="research-about">
        <div className="research-left">
          <img src="/images/research.jpg" alt="Research" />
        </div>

        <div className="research-right">
          <h2>Asian Healthcare Foundation (AHF)</h2>

          <p>
            The vision of Dr. D. Nageshwar Reddy to unravel etiopathogenesis of GI diseases 
            led to the establishment of Asian Healthcare Foundation (AHF) in 2008.
          </p>

          <p>
            AHF conducts research in frontier areas of gastrointestinal diseases 
            in association with AIG.
          </p>

          <p>
            Asian Institute of Gastroenterology is a tertiary care referral centre 
            with 10,000 outpatients and 1,500 in-patients per month.
          </p>

          <p>
            It is the largest referral centre in Asia for Therapeutic Endoscopy.
          </p>
        </div>
      </div>

      {/* 🔬 Research Areas Slider */}
      <div className="research-areas">
        <h2>Research Areas</h2>

        <div className="slider-wrapper">
          <button className="arrow left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="areas-slider" ref={scrollRef}>
            {researchAreas.map((area, index) => (
              <div className="area-card" key={index}>
                <div className="icon">{area.icon}</div>
                <h3>{area.title}</h3>
              </div>
            ))}
          </div>

          <button className="arrow right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* 👨‍⚕️ Team Section */}
      <div className="team-section">
        <h2>Clinical Research Scientists</h2>

        {/* Dropdown */}
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="team-dropdown"
        >
          {Object.keys(teamData).map((team, index) => (
            <option key={index} value={team}>
              {team}
            </option>
          ))}
        </select>

        {/* Team Grid */}
        <div className="team-grid">
          {teamData[selectedTeam].map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} />
              <p>{member.name}</p>
            </div>
          ))}
        </div>

              {/* ================= Research Publications Section ================= */}
      {/* ================= Publications Section ================= */}
<div className="publications-section">
  <h2>Research Publications</h2>

  <ul className="publications-list">
    {publications.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</div>






{/* ================= More Info Section ================= */}
<div className="research-link-section">
  <p>
    For any further information on the Research, please visit{" "}
    <a
      href="http://www.ahf.aigindia.net"
      target="_blank"
      rel="noopener noreferrer"
    >
      www.ahf.aigindia.net
    </a>
  </p>
</div>




      </div>

    </div>
  );
}

export default Research;
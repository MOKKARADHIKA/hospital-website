import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import "./CentreDetails.css";
import { doctorsData } from "./doctorsData"; // <-- check the relative path

import { 
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaLungs,
  FaUserMd,
  FaProcedures,
  FaMicroscope,
  FaStethoscope
} from "react-icons/fa";

const centreData = {
  Cardiology: {
    image: "/images/cardiology.jpg",
    clearImage: "/images/cardiology1.jpg",
    desc: `The Department of Cardiology is a comprehensive centre for prevention, diagnosis, and treatment of cardiovascular diseases. 
    We provide advanced interventional cardiology services including angiography, angioplasty, stenting, device closures, and structural heart interventions.

    Our team of highly experienced cardiologists and cardiac surgeons manage complex heart conditions such as coronary artery disease, heart failure, arrhythmias, congenital heart defects and valvular disorders.

    Equipped with state-of-the-art Cath Labs, cardiac ICUs, advanced imaging technologies, and 24/7 emergency response systems, we ensure rapid and accurate treatment for heart attack and other cardiac emergencies.

    We also focus on preventive cardiology through lifestyle management programs, cardiac rehabilitation, risk assessment clinics and long-term follow-up care to ensure optimal heart health.`,

   // ✅ ADD THIS PART HERE
  subSpecialities: [
  {
    name: "Interventional Cardiology",
    icon: <FaHeartbeat />,
    image: "/images/interventional.jpg",
    desc: `Interventional Cardiology is a highly specialized branch of cardiology that focuses on catheter-based treatment of structural heart diseases and coronary artery disorders without the need for major open-heart surgery.

Our department performs advanced procedures including:

• Coronary Angiography  
• Balloon Angioplasty  
• Drug-Eluting Stent Placement  
• Primary PCI for Heart Attack  
• Structural Heart Interventions  
• Device Closures for ASD/VSD  
• TAVI (Transcatheter Aortic Valve Implantation)

Using state-of-the-art Cath Lab technology, imaging guidance, and intravascular ultrasound systems, we ensure precision, safety, and faster recovery.

Our 24/7 emergency response team provides immediate treatment for acute myocardial infarction (heart attack) to reduce heart muscle damage and improve survival outcomes.

We emphasize minimally invasive techniques, reduced hospital stay, and rapid rehabilitation.`
  },

  {
    name: "Electrophysiology",
    icon: <FaStethoscope />,
    image: "/images/electrophysiology.jpg",
    desc: `Cardiac Electrophysiology (EP) is the study and treatment of disorders related to the electrical system of the heart.

The heart beats due to precisely controlled electrical impulses. When these signals become abnormal, arrhythmias (irregular heart rhythms) occur.

Common arrhythmias treated include:

• Atrial Fibrillation  
• Atrial Flutter  
• Ventricular Tachycardia  
• Supraventricular Tachycardia  
• Ventricular Fibrillation  
• Long QT Syndrome  
• Brugada Syndrome  
• Sudden Cardiac Arrest

Our advanced EP Lab provides:

• Electrophysiology Studies (EPS)  
• Radiofrequency Ablation  
• Cryoablation  
• Pacemaker Implantation  
• ICD (Implantable Cardioverter Defibrillator)  
• Cardiac Resynchronization Therapy (CRT)

With 3D mapping systems and precision-guided catheter techniques, we ensure accurate diagnosis and successful rhythm correction.

Our goal is to restore normal rhythm, improve heart efficiency, and prevent life-threatening complications.`
  },

  {
    name: "Heart Failure Clinic",
    icon: <FaHeartbeat />,
    image: "/images/heartfailure.jpg",
    desc: `The Heart Failure Clinic provides comprehensive management for patients with weakened heart function and chronic cardiac conditions.

Heart failure occurs when the heart cannot pump blood effectively to meet the body’s needs. It may result from coronary artery disease, long-standing hypertension, valve disorders, or cardiomyopathy.

Symptoms include:

• Shortness of breath  
• Swelling in legs and abdomen  
• Fatigue and weakness  
• Persistent cough  
• Rapid or irregular heartbeat  

Our clinic offers:

• Advanced Heart Function Assessment  
• Echocardiography & Cardiac Imaging  
• Medication Optimization  
• Device Therapy (CRT, ICD)  
• Lifestyle & Dietary Counseling  
• Cardiac Rehabilitation Programs  
• Remote Monitoring Services  

We work closely with interventional cardiologists, cardiac surgeons, nutritionists, and rehabilitation specialists to deliver multidisciplinary care.

Our mission is to improve quality of life, reduce hospital admissions, and enhance long-term survival for heart failure patients.`
  }
]
  },

  Neurology: {
    image: "/images/Neurology.jpg",
    desc: `The Department of Neurology offers comprehensive care for disorders of the brain, spine and nervous system. 
    Our specialists treat stroke, epilepsy, Parkinson’s disease, multiple sclerosis, migraines, neuropathies, and neurodegenerative disorders.

    We provide advanced neuro-diagnostic services including MRI, CT, EEG, EMG, nerve conduction studies and neuro-interventional procedures.

    Our dedicated Stroke Unit operates round-the-clock ensuring rapid thrombolysis and life-saving interventions within the golden hour.

    Supported by expert neurosurgeons, neuro intensivists and rehabilitation specialists, we deliver holistic neurological care focused on recovery, mobility and improved quality of life.`,
     subSpecialities: [
  {
    name: "Stroke Unit",
    icon: <FaBrain />,
    image: "/images/stroke.jpg",
    desc: `The Stroke Unit provides rapid diagnosis and emergency management for patients suffering from ischemic and hemorrhagic strokes.

Time is critical in stroke care. Our dedicated stroke team operates 24/7 to provide immediate thrombolysis and mechanical thrombectomy within the golden hour.

Services include:

• CT & MRI Brain Imaging  
• Thrombolytic Therapy  
• Mechanical Clot Retrieval  
• Neuro ICU Monitoring  
• Post-Stroke Rehabilitation  
• Risk Factor Management  

Our multidisciplinary approach ensures reduced disability, improved recovery outcomes, and long-term neurological stability.`
  },

  {
    name: "Epilepsy Clinic",
    icon: <FaBrain />,
    image: "/images/epilepsy.jpg",
    desc: `The Epilepsy Clinic specializes in diagnosing and managing seizure disorders using advanced neuro-diagnostic tools.

We provide:

• EEG & Video EEG Monitoring  
• MRI Brain Imaging  
• Medication Management  
• Refractory Epilepsy Evaluation  
• Pre-Surgical Assessment  

Our goal is complete seizure control, improved quality of life, and safe long-term neurological care.`
  },

  {
    name: "Neuro Rehabilitation",
    icon: <FaBrain />,
    image: "/images/neurorehab.jpg",
    desc: `Neuro Rehabilitation focuses on restoring movement, speech, and cognitive functions after stroke, trauma, or neurological disorders.

Programs include:

• Physiotherapy  
• Occupational Therapy  
• Speech & Swallow Therapy  
• Cognitive Therapy  
• Balance & Gait Training  

Our rehabilitation specialists design individualized recovery plans for optimal functional independence.`
  }
]
  },

  Orthopedics: {
    image: "/images/Orthopedics.jpg",
    desc: `Our Orthopedics department provides world-class treatment for bone, joint, spine and sports-related injuries. 
    We specialize in total knee replacement, hip replacement, shoulder surgeries, arthroscopic procedures and complex trauma management.

    Our surgeons use minimally invasive techniques and computer-assisted surgical systems to ensure precision, faster recovery and reduced hospital stay.

    The department also offers comprehensive spine care, pediatric orthopedics, and advanced fracture management services.

    With integrated physiotherapy and rehabilitation programs, we ensure patients regain strength, mobility and independence at the earliest.`,
     subSpecialities: [
  {
    name: "Joint Replacement",
    icon: <FaBone />,
    image: "/images/joint.jpg",
    desc: `Joint Replacement Surgery relieves pain and restores mobility in severely damaged joints.

We specialize in:

• Total Knee Replacement  
• Total Hip Replacement  
• Shoulder Replacement  
• Revision Joint Surgery  
• Robotic Assisted Surgery  

Using minimally invasive techniques, we ensure faster recovery and improved long-term joint function.`
  },

  {
    name: "Sports Medicine",
    icon: <FaBone />,
    image: "/images/sports.jpg",
    desc: `Sports Medicine focuses on treating ligament injuries, fractures, and sports-related trauma.

Services include:

• ACL Reconstruction  
• Arthroscopic Surgery  
• Shoulder Stabilization  
• Meniscus Repair  
• Rehabilitation & Performance Training  

We help athletes return to peak performance safely and effectively.`
  },

  {
    name: "Spine Surgery",
    icon: <FaBone />,
    image: "/images/spine.jpg",
    desc: `Spine Surgery addresses conditions affecting the spinal cord and vertebrae.

We treat:

• Disc Herniation  
• Spinal Stenosis  
• Scoliosis  
• Spinal Fractures  
• Degenerative Spine Disease  

Advanced minimally invasive spine techniques ensure precise treatment and faster recovery.`
  }
]
  },

  Gastroenterology: {
    image: "/images/Gastroenterology.jpg",
    desc: `The Department of Medical Gastroenterology is a centre of excellence dedicated to the diagnosis and treatment of disorders related to the stomach, intestines, liver, pancreas and gall bladder.

    Our team manages a wide spectrum of gastrointestinal diseases including acid reflux, ulcers, inflammatory bowel disease, liver cirrhosis, hepatitis, pancreatic disorders and GI cancers.

    We are equipped with advanced endoscopic technologies including diagnostic endoscopy, colonoscopy, ERCP, EUS and therapeutic interventions.

    With multidisciplinary collaboration involving Oncology, Liver Transplant, Radiology and Critical Care teams, we handle both routine and complex GI cases efficiently.

    We provide 24/7 emergency services for GI bleeding, liver failure and acute abdominal conditions ensuring timely and life-saving care.`,
  

   subSpecialities: [
  {
    name: "Hepatology",
    icon: <FaStethoscope />,
    image: "/images/hepatology.jpg",
    desc: `Hepatology focuses on liver diseases including hepatitis, fatty liver, cirrhosis, and liver failure.

Services include:

• Liver Function Assessment  
• Fibroscan  
• Hepatitis Treatment  
• Liver Cirrhosis Management  
• Pre-Transplant Evaluation  

Our team provides comprehensive liver care and preventive management.`
  },

  {
    name: "IBD Clinic",
    icon: <FaStethoscope />,
    image: "/images/ibd.jpg",
    desc: `The IBD Clinic treats inflammatory bowel diseases like Crohn’s Disease and Ulcerative Colitis.

We provide:

• Colonoscopy & Biopsy  
• Advanced Immunotherapy  
• Nutritional Support  
• Long-term Disease Monitoring  

Our focus is symptom control and improving patient quality of life.`
  },

  {
    name: "GI Oncology",
    icon: <FaStethoscope />,
    image: "/images/gioncology.jpg",
    desc: `GI Oncology specializes in cancers of the stomach, liver, pancreas, and intestines.

We offer:

• Endoscopic Tumor Removal  
• Chemotherapy  
• Surgical Resection  
• Palliative Care  

Multidisciplinary collaboration ensures comprehensive gastrointestinal cancer care.`
  }
]
  },


  Oncology: {
    image: "/images/Oncology.jpg",
    desc: `The Oncology department delivers comprehensive cancer care through a multidisciplinary approach combining medical, surgical and radiation oncology.

    We specialize in the treatment of breast cancer, lung cancer, gastrointestinal cancers, blood cancers and other solid tumors.

    Our services include chemotherapy, immunotherapy, targeted therapy, radiation therapy and advanced surgical procedures.

    Supported by modern diagnostic imaging, molecular pathology and tumor board discussions, we create personalized treatment plans for each patient.

    We emphasize early detection, precision treatment, supportive care and psychological counselling to improve survival outcomes and patient well-being.`,
      subSpecialities: [
  {
    name: "Medical Oncology",
    icon: <FaStethoscope />,
    image: "/images/medicaloncology.jpg",
    desc: `Medical Oncology focuses on chemotherapy, immunotherapy, and targeted therapy for cancer treatment.

Services include:

• Chemotherapy Administration  
• Immunotherapy  
• Targeted Molecular Therapy  
• Hormonal Therapy  
• Precision Medicine  

Personalized treatment plans are created through tumor board discussions and molecular diagnostics.`
  },

  {
    name: "Radiation Oncology",
    icon: <FaStethoscope />,
    image: "/images/radiation.jpg",
    desc: `Radiation Oncology delivers high-precision radiation therapy to destroy cancer cells while protecting healthy tissue.

We offer:

• IMRT  
• IGRT  
• Stereotactic Radiosurgery  
• Brachytherapy  

Advanced planning systems ensure accurate tumor targeting and minimal side effects.`
  },

  {
    name: "Surgical Oncology",
    icon: <FaStethoscope />,
    image: "/images/surgicaloncology.jpg",
    desc: `Surgical Oncology provides advanced cancer surgeries using minimally invasive and robotic techniques.

We specialize in:

• Breast Cancer Surgery  
• GI Cancer Surgery  
• Thoracic Oncology  
• Head & Neck Cancer Surgery  

Our multidisciplinary team ensures safe surgery and comprehensive cancer care.`
  }
]
  },

  Nephrology: {
    image: "/images/Nephrology.jpg",
    desc: `The Department of Nephrology provides advanced kidney care services including dialysis, renal transplant evaluation and management of chronic kidney disease.

    We treat conditions such as kidney failure, glomerulonephritis, nephrotic syndrome, electrolyte imbalances and hypertension-related kidney damage.

    Our dialysis unit is equipped with high-efficiency machines ensuring safe and comfortable hemodialysis and peritoneal dialysis services.

    Working closely with transplant surgeons and critical care teams, we provide complete pre- and post-transplant care for renal transplant patients.

    Our focus remains on early detection, preventive nephrology and long-term kidney health management.`,
    subSpecialities: [
  {
    name: "Dialysis Unit",
    icon: <FaUserMd />,
    image: "/images/dialysis.jpg",
    desc: `The Dialysis Unit provides advanced hemodialysis and peritoneal dialysis services for patients with kidney failure.

Features include:

• High-Efficiency Dialysis Machines  
• Infection-Controlled Environment  
• Continuous Monitoring  
• Emergency Dialysis Support  

We ensure safe and comfortable dialysis treatment.`
  },

  {
    name: "Kidney Transplant",
    icon: <FaUserMd />,
    image: "/images/transplant.jpg",
    desc: `Our Kidney Transplant Program provides complete evaluation, surgical care, and long-term follow-up.

Services include:

• Pre-Transplant Evaluation  
• Living & Deceased Donor Transplant  
• Immunosuppressive Therapy  
• Post-Transplant Monitoring  

We focus on successful graft survival and patient safety.`
  },

  {
    name: "CKD Clinic",
    icon: <FaUserMd />,
    image: "/images/ckd.jpg",
    desc: `The CKD Clinic manages Chronic Kidney Disease to slow progression and prevent complications.

We provide:

• Early Screening  
• Blood Pressure Control  
• Diabetes Management  
• Diet & Lifestyle Counseling  

Our goal is to preserve kidney function and avoid dialysis dependency.`
  }
]
  },

  Pulmonology: {
    image: "/images/Pulmonology.jpg",
    desc: `The Department of Pulmonology offers specialized care for respiratory and lung disorders including asthma, COPD, pneumonia, tuberculosis and interstitial lung diseases.

    We provide advanced pulmonary diagnostics such as pulmonary function testing, bronchoscopy, sleep studies and allergy testing.

    Our critical care team manages respiratory failure, ventilator support and emergency pulmonary conditions round-the-clock.

    We also offer smoking cessation programs, preventive lung health clinics and long-term management plans for chronic respiratory diseases.

    Our goal is to restore optimal lung function and improve the quality of breathing for every patient.`,
     subSpecialities: [
  {
    name: "Asthma Clinic",
    icon: <FaLungs />,
    image: "/images/asthma.jpg",
    desc: `The Asthma Clinic provides advanced care for allergic and chronic asthma conditions.

Services include:

• Pulmonary Function Testing  
• Allergy Evaluation  
• Inhaler Therapy  
• Biologic Treatments  

We focus on long-term symptom control and improved breathing quality.`
  },

  {
    name: "Sleep Medicine",
    icon: <FaLungs />,
    image: "/images/sleep.jpg",
    desc: `Sleep Medicine specializes in diagnosing and treating sleep disorders including sleep apnea.

We offer:

• Sleep Studies (Polysomnography)  
• CPAP Therapy  
• Insomnia Treatment  
• Snoring & Breathing Evaluation  

Proper sleep improves overall respiratory and cardiovascular health.`
  },

  {
    name: "Critical Care",
    icon: <FaLungs />,
    image: "/images/criticalcare.jpg",
    desc: `Critical Care Pulmonology manages severe respiratory failure and ICU patients.

We provide:

• Ventilator Support  
• ARDS Management  
• Bronchoscopy  
• Emergency Respiratory Care  

Our ICU team ensures life-saving respiratory support 24/7.`
  }
]
  }
};

const CentreDetails = () => {
  const { name } = useParams();
  const centre = centreData[name];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!centre) return <h2>Centre Not Found</h2>;

  // Filter doctors for this centre
  const doctors = doctorsData.filter((doc) => doc.speciality === name);

  return (
    <motion.div
      className="details-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Banner Section */}
      <div
        className="details-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,70,0.7), rgba(0,0,70,0.7)), url(${centre.image})`
        }}
      >
        <h1>{name}</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> / 
        <Link to="/specialities"> Specialities</Link> / 
        <span>{name}</span>
      </div>

      {/* Content Section */}
      <div className="details-content">
        <div className="text-section">
          <p>{centre.desc}</p>
        </div>

        <div className="video-section">
          <iframe
            width="373"
            height="300"
            src="https://www.youtube.com/embed/a_iBbB4yULw"
            title="Hospital Overview"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Sub Speciality Section */}
      {centre.subSpecialities && (
        <div className="subspeciality-section">
          <h2 className="sub-title">Sub Specialities</h2>
          <div className="subspeciality-grid">
            {centre.subSpecialities.map((item, index) => (
              <Link
                key={index}
                to={`/subspeciality/${name}/${item.name}`}
                className="sub-card"
              >
                <div className="sub-icon">{item.icon}</div>
                <div className="sub-name">{item.name}</div>
              </Link>
            ))}
          </div>

          {/* ✅ Key Doctors Section goes RIGHT HERE */}
          {doctors.length > 0 && (
            <div className="doctors-section">
              <h2>Key Doctors</h2>

  <div className="doctors-row">
  {doctors.map((doc) => (
    <Link
      to={`/doctor/${doc.id}`}
      key={doc.id}
      className="doctor-card"
    >
      <img src={doc.image} alt={doc.name} />

      <h3>{doc.name}</h3>

      <p>{doc.designation}</p>
    </Link>
  ))}
</div>
</div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default CentreDetails;
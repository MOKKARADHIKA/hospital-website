import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "./CentreDetails.css";

import { doctorsData } from "./doctorsData";

const subSpecialityData = {

Electrophysiology: {
title: "Electrophysiology",
image: "/images/Electrophysiology.jpg",
description: `Cardiac Electrophysiology focuses on diagnosing and treating heart rhythm disorders.

Conditions treated include:

• Atrial Fibrillation
• Ventricular Tachycardia
• Supraventricular Tachycardia
• Long QT Syndrome
• Sudden Cardiac Arrest

Procedures include:

• Electrophysiology Study (EPS)
• Radiofrequency Ablation
• Cryoablation
• Pacemaker Implantation
• ICD Implantation
• Cardiac Resynchronization Therapy

Our advanced EP lab uses 3D mapping systems to precisely locate abnormal electrical pathways and restore normal heart rhythm.`
},

"Interventional Cardiology": {
title: "Interventional Cardiology",
 image: "/images/Interventional Cardiology.jpg",
description: `Interventional cardiology uses catheter-based techniques to treat heart diseases without open surgery.

Procedures include:

• Coronary Angiography
• Balloon Angioplasty
• Drug Eluting Stent Placement
• Primary PCI for Heart Attack
• Structural Heart Interventions
• TAVI Procedures

Our Cath Lab operates 24/7 for emergency heart attack treatment.`
},

"Heart Failure Clinic": {
    title: "Heart Failure",
    image: "/images/heartfailure.jpg",
    description: `The Heart Failure Center is a center of excellence dedicated to the treatment of heart failure from all causes.

Our primary goal is to improve the quality of life for patients suffering from heart failure.

Treatments include:

• Advanced cardiac imaging  
• Medication optimization  
• Cardiac resynchronization therapy  
• Implantable defibrillators  
• Heart transplantation`
  },

  // ✅ ADD THESE

"Stroke Unit": {
  title: "Stroke Unit",
  image: "/images/stroke.jpg",
  description: `The Stroke Unit provides rapid diagnosis and emergency management for patients suffering from stroke.

Services include:
• CT & MRI Brain Imaging
• Thrombolytic Therapy
• Mechanical Clot Retrieval
• Neuro ICU Monitoring
• Rehabilitation`
},

"Epilepsy Clinic": {
  title: "Epilepsy Clinic",
  image: "/images/epilepsy.jpg",
  description: `Specialized clinic for seizure disorders.

Services include:
• EEG & Video EEG
• MRI Brain
• Medication Management
• Surgical Evaluation`
},

"Neuro Rehabilitation": {
  title: "Neuro Rehabilitation",
  image: "/images/neurorehab.jpg",
  description: `Rehabilitation for stroke and neurological injuries.

Programs include:
• Physiotherapy
• Occupational Therapy
• Speech Therapy
• Cognitive Therapy`
},

"Joint Replacement": {
  title: "Joint Replacement",
  image: "/images/joint.jpg",
  description: `Joint Replacement Surgery relieves pain and restores mobility in severely damaged joints.

Procedures include:

• Total Knee Replacement  
• Total Hip Replacement  
• Shoulder Replacement  
• Revision Joint Surgery  
• Robotic Assisted Joint Surgery

Our orthopedic surgeons use minimally invasive techniques and advanced robotic systems to ensure precision, faster recovery, and improved long-term joint function.`
},

"Sports Medicine": {
  title: "Sports Medicine",
  image: "/images/sports.jpg",
  description: `Sports Medicine focuses on treating injuries related to physical activity and sports.

Common treatments include:

• ACL Reconstruction  
• Arthroscopic Knee Surgery  
• Shoulder Stabilization  
• Meniscus Repair  
• Ligament Injury Treatment

Our specialists help athletes and active individuals return safely to their peak performance through advanced surgery and rehabilitation programs.`
},

"Spine Surgery": {
  title: "Spine Surgery",
  image: "/images/spine.jpg",
  description: `Spine Surgery treats disorders affecting the spinal cord, vertebrae, and nerves.

Conditions treated include:

• Herniated Disc  
• Spinal Stenosis  
• Degenerative Disc Disease  
• Scoliosis  
• Spinal Fractures

Using advanced minimally invasive techniques and modern imaging guidance, our surgeons provide precise treatment with faster recovery and reduced hospital stay.`
},

"Hepatology": {
  title: "Hepatology",
  image: "/images/hepatology.jpg",
  description: `Hepatology is a specialized branch of gastroenterology that focuses on diseases affecting the liver, gallbladder, biliary tree, and pancreas. 
The liver is one of the most important organs in the body and plays a major role in digestion, metabolism, detoxification, and immunity.

Our Hepatology department provides comprehensive care for patients with both acute and chronic liver diseases using advanced diagnostic tools and evidence-based treatments.

Common Liver Conditions Treated:

• Viral Hepatitis (Hepatitis A, B, C, D and E)  
• Fatty Liver Disease (Non-Alcoholic Fatty Liver Disease – NAFLD)  
• Alcohol-Related Liver Disease  
• Liver Cirrhosis and Portal Hypertension  
• Liver Failure  
• Autoimmune Liver Diseases  
• Liver Tumors and Liver Cancer  
• Genetic Liver Disorders  

Symptoms of Liver Disease may include:

• Fatigue and weakness  
• Yellowing of skin and eyes (Jaundice)  
• Abdominal swelling or pain  
• Loss of appetite  
• Nausea and vomiting  
• Dark urine and pale stools  

Advanced Diagnostic Services:

• Liver Function Tests  
• Ultrasound and CT Scan  
• Fibroscan (Non-invasive liver fibrosis assessment)  
• Endoscopy for varices  
• Liver Biopsy  
• Viral Hepatitis Screening  

Treatment and Management:

• Antiviral therapy for hepatitis infections  
• Lifestyle and dietary management for fatty liver disease  
• Medications for cirrhosis and complications  
• Endoscopic treatment for portal hypertension  
• Liver cancer screening programs  
• Pre- and Post-Liver Transplant Evaluation  

Our hepatology specialists work closely with transplant surgeons, nutritionists, and critical care teams to deliver holistic liver care and improve long-term patient outcomes.`
},

"IBD Clinic": {
  title: "IBD Clinic",
  image: "/images/ibd.jpg",
  description: `The Inflammatory Bowel Disease (IBD) Clinic specializes in diagnosing and managing chronic inflammatory disorders of the digestive tract.

IBD mainly includes two conditions:

• Crohn’s Disease  
• Ulcerative Colitis  

These diseases cause inflammation in the gastrointestinal tract, leading to symptoms that affect daily life and long-term health.

Common Symptoms:

• Persistent diarrhea  
• Abdominal pain and cramping  
• Blood in stool  
• Unexplained weight loss  
• Fatigue and weakness  
• Fever and nutritional deficiencies  

Possible Causes and Risk Factors:

• Genetic predisposition  
• Immune system dysfunction  
• Environmental triggers  
• Gut microbiome imbalance  

Advanced Diagnostic Services:

• Colonoscopy and Endoscopy  
• Biopsy for tissue analysis  
• CT Enterography and MRI  
• Stool and Blood Tests  
• Inflammatory Marker Testing  

Treatment and Management:

• Anti-inflammatory medications  
• Immunosuppressant therapy  
• Biologic therapies targeting immune pathways  
• Nutritional therapy and diet counseling  
• Surgical treatment when necessary  

Our multidisciplinary team including gastroenterologists, dietitians, and surgeons ensures personalized treatment plans that aim to control inflammation, prevent complications, and improve quality of life.

Regular monitoring and early intervention help patients maintain remission and live healthy, productive lives.`
},
"GI Oncology": {
  title: "GI Oncology",
  image: "/images/gioncology.jpg",
  description: `GI Oncology focuses on the diagnosis and treatment of cancers that affect the gastrointestinal tract and digestive organs.

These cancers include:

• Esophageal Cancer  
• Stomach (Gastric) Cancer  
• Liver Cancer  
• Pancreatic Cancer  
• Colorectal Cancer  
• Gallbladder and Bile Duct Cancer  

Early detection and timely treatment are critical for improving survival rates and treatment success.

Common Warning Signs:

• Persistent abdominal pain  
• Unexplained weight loss  
• Difficulty swallowing  
• Blood in stool  
• Chronic indigestion or vomiting  
• Changes in bowel habits  

Advanced Diagnostic Technologies:

• Endoscopy and Colonoscopy  
• Endoscopic Ultrasound (EUS)  
• CT Scan and MRI Imaging  
• PET Scan for cancer staging  
• Biopsy and Molecular Testing  

Comprehensive Cancer Treatments:

• Minimally invasive tumor removal  
• Chemotherapy  
• Targeted molecular therapy  
• Immunotherapy  
• Radiation therapy  
• Palliative care and symptom management  

Our multidisciplinary cancer care team includes oncologists, gastroenterologists, surgeons, radiologists, and pathologists who work together through tumor board discussions to design individualized treatment plans.

In addition to treatment, we provide emotional support, nutritional counseling, and rehabilitation services to help patients and families navigate their cancer journey with confidence and hope.`
},
"Medical Oncology": {
  title: "Medical Oncology",
  image: "/images/medicaloncology.jpg",
  description: `Medical Oncology is a specialized field of cancer treatment that focuses on using medications to treat and control cancer. These treatments include chemotherapy, targeted therapy, immunotherapy, and hormone therapy.

Medical oncologists play a central role in cancer care by diagnosing cancer, determining the stage of the disease, and designing personalized treatment plans based on the patient's condition.

Common cancers treated include:

• Breast Cancer  
• Lung Cancer  
• Colorectal Cancer  
• Blood Cancers (Leukemia, Lymphoma, Myeloma)  
• Prostate Cancer  
• Ovarian Cancer  

Treatment Methods:

• Chemotherapy – Drugs used to destroy rapidly growing cancer cells  
• Targeted Therapy – Medicines that specifically target cancer cell mutations  
• Immunotherapy – Treatment that boosts the body’s immune system to fight cancer  
• Hormone Therapy – Used for hormone-sensitive cancers such as breast and prostate cancer  

Supportive Care Services:

• Pain management  
• Nutritional counseling  
• Management of treatment side effects  
• Psychological and emotional support  

Our medical oncology team works closely with radiation oncologists, surgical oncologists, radiologists, and pathologists to provide comprehensive cancer treatment with the goal of improving survival and quality of life for patients.`
},
"Radiation Oncology": {
  title: "Radiation Oncology",
  image: "/images/radiation.jpg",
  description: `Radiation Oncology focuses on treating cancer using high-energy radiation beams to destroy cancer cells while protecting surrounding healthy tissue.

Radiation therapy works by damaging the DNA of cancer cells, preventing them from growing and multiplying.

Radiation therapy may be used:

• As the primary treatment for certain cancers  
• Before surgery to shrink tumors  
• After surgery to eliminate remaining cancer cells  
• Along with chemotherapy to improve treatment effectiveness  

Types of Radiation Therapy:

• External Beam Radiation Therapy (EBRT)  
• Intensity-Modulated Radiation Therapy (IMRT)  
• Image-Guided Radiation Therapy (IGRT)  
• Stereotactic Radiosurgery (SRS)  
• Brachytherapy (Internal Radiation Therapy)  

Common cancers treated include:

• Brain Tumors  
• Head and Neck Cancer  
• Breast Cancer  
• Lung Cancer  
• Cervical Cancer  
• Prostate Cancer  

Our radiation oncology department uses advanced imaging systems and precision radiation delivery techniques to ensure accurate tumor targeting while minimizing side effects and damage to healthy tissues.`
},
"Surgical Oncology": {
  title: "Surgical Oncology",
  image: "/images/surgicaloncology.jpg",
  description: `Surgical Oncology focuses on the surgical removal of tumors and cancer-affected tissues from the body. Surgery is one of the most effective treatments for many types of cancer, especially when the disease is detected early.

Surgical oncologists are specially trained surgeons who perform complex cancer surgeries while preserving normal body functions as much as possible.

Types of Cancer Surgeries:

• Tumor Removal Surgery  
• Organ-Preserving Cancer Surgery  
• Lymph Node Removal (Lymphadenectomy)  
• Reconstructive Surgery after tumor removal  
• Minimally Invasive Laparoscopic Surgery  
• Robotic-Assisted Cancer Surgery  

Common cancers treated with surgery include:

• Breast Cancer  
• Colorectal Cancer  
• Liver and Pancreatic Cancer  
• Lung Cancer  
• Thyroid Cancer  
• Gynecologic Cancers  

Benefits of Modern Surgical Techniques:

• Smaller incisions  
• Less blood loss  
• Faster recovery time  
• Reduced hospital stay  
• Better cosmetic outcomes  

Our surgical oncology team collaborates closely with medical and radiation oncologists to provide a multidisciplinary approach to cancer treatment and ensure the best possible outcomes for patients.`
},
"Dialysis Unit": {
  title: "Dialysis Unit",
  image: "/images/dialysis.jpg",
  description: `The Dialysis Unit provides life-saving treatment for patients whose kidneys are unable to properly filter waste products and excess fluids from the blood.

Dialysis acts as an artificial kidney by removing toxins, maintaining electrolyte balance, and controlling fluid levels in the body.

Conditions that may require dialysis include:

• Chronic Kidney Disease (CKD)  
• End-Stage Renal Disease (ESRD)  
• Severe Kidney Failure  
• Acute Kidney Injury  
• Poisoning or drug toxicity affecting kidney function  

Types of Dialysis Provided:

• Hemodialysis – Blood is filtered through a dialysis machine outside the body  
• Peritoneal Dialysis – Uses the lining of the abdomen to filter blood inside the body  

Services in Our Dialysis Unit:

• Advanced dialysis machines with safety monitoring  
• Infection-controlled dialysis environment  
• Continuous patient monitoring by trained staff  
• Nutritional counseling and kidney-friendly diet planning  
• Emergency dialysis support  

Our nephrology team ensures that patients receive safe, comfortable, and effective dialysis treatment to improve quality of life and prevent complications.`
},
"Kidney Transplant": {
  title: "Kidney Transplant",
  image: "/images/transplant.jpg",
  description: `Kidney Transplantation is a surgical procedure in which a healthy kidney from a donor is placed into a patient whose kidneys are no longer functioning properly.

A transplant is often the best treatment for patients with end-stage kidney disease because it can restore normal kidney function and improve overall quality of life.

Reasons for Kidney Failure:

• Chronic Kidney Disease  
• Diabetes-related kidney damage  
• High blood pressure  
• Genetic kidney disorders  
• Severe infections or autoimmune diseases  

Types of Kidney Transplants:

• Living Donor Transplant – Kidney donated by a healthy living person  
• Deceased Donor Transplant – Kidney donated from a brain-dead donor  

Transplant Evaluation Process:

• Blood and tissue compatibility testing  
• Comprehensive medical evaluation  
• Imaging and kidney function tests  
• Psychological and nutritional assessment  

Post-Transplant Care:

• Immunosuppressant medications to prevent organ rejection  
• Regular follow-up monitoring  
• Infection prevention and lifestyle guidance  
• Long-term kidney function monitoring  

Our transplant program provides complete care from donor evaluation to post-transplant follow-up, ensuring the best outcomes for patients and donors.`
},
"CKD Clinic": {
  title: "CKD Clinic",
  image: "/images/ckd.jpg",
  description: `The Chronic Kidney Disease (CKD) Clinic specializes in early detection, monitoring, and treatment of kidney diseases to slow their progression and prevent kidney failure.

Chronic Kidney Disease occurs when the kidneys gradually lose their ability to filter waste products from the blood.

Common Causes of CKD:

• Diabetes (Diabetic Nephropathy)  
• High Blood Pressure (Hypertensive Nephropathy)  
• Glomerulonephritis  
• Polycystic Kidney Disease  
• Long-term medication or toxin exposure  

Symptoms of CKD may include:

• Swelling in legs, ankles, or feet  
• Fatigue and weakness  
• Nausea or loss of appetite  
• Frequent urination  
• High blood pressure  
• Difficulty concentrating  

Diagnostic Tests:

• Blood tests for kidney function (Creatinine, GFR)  
• Urine tests for protein or infection  
• Ultrasound imaging of kidneys  
• Kidney biopsy when necessary  

Treatment and Management:

• Blood pressure control  
• Diabetes management  
• Medication to protect kidney function  
• Dietary changes (low salt, low protein diet)  
• Lifestyle modification and exercise guidance  

Our CKD clinic focuses on preventing disease progression, reducing complications, and helping patients maintain healthy kidney function for as long as possible.`
},
"Asthma Clinic": {
  title: "Asthma Clinic",
  image: "/images/asthma.jpg",
  description: `The Asthma Clinic specializes in diagnosing, treating, and managing asthma and other allergic respiratory conditions. Asthma is a chronic disease that causes inflammation and narrowing of the airways, making breathing difficult.

Common symptoms include:

• Shortness of breath  
• Wheezing (whistling sound while breathing)  
• Chest tightness  
• Persistent coughing, especially at night or early morning  
• Difficulty breathing during exercise  

Common triggers include:

• Dust mites and allergens  
• Pollen and seasonal changes  
• Air pollution and smoke  
• Respiratory infections  
• Cold weather  
• Exercise-induced asthma  

Diagnostic tests performed:

• Pulmonary Function Test (PFT)  
• Spirometry testing  
• Allergy testing  
• Chest X-ray and imaging  

Treatment options include:

• Inhaled bronchodilators to open airways  
• Anti-inflammatory medications  
• Allergy management  
• Personalized asthma action plans  
• Lifestyle and trigger avoidance guidance  

Our asthma specialists help patients control symptoms, prevent asthma attacks, and maintain a healthy and active lifestyle.`
},
"Sleep Medicine": {
  title: "Sleep Medicine",
  image: "/images/sleep.jpg",
  description: `Sleep Medicine focuses on diagnosing and treating sleep-related breathing disorders that affect overall health and quality of life.

Sleep disorders can lead to fatigue, poor concentration, cardiovascular problems, and reduced daily performance.

Common sleep disorders treated include:

• Obstructive Sleep Apnea  
• Snoring disorders  
• Insomnia  
• Restless Leg Syndrome  
• Narcolepsy  

Symptoms of sleep disorders:

• Loud snoring  
• Interrupted breathing during sleep  
• Excessive daytime sleepiness  
• Morning headaches  
• Difficulty concentrating  
• Poor sleep quality  

Diagnostic services include:

• Sleep Study (Polysomnography)  
• Overnight oxygen monitoring  
• Respiratory monitoring during sleep  
• CPAP titration studies  

Treatment options:

• CPAP or BiPAP therapy  
• Lifestyle modification and weight management  
• Sleep hygiene education  
• Medication when required  

Our sleep specialists use advanced sleep diagnostic technology to ensure patients achieve better sleep and improved overall health.`
},
"Critical Care": {
  title: "Critical Care Pulmonology",
  image: "/images/criticalcare.jpg",
  description: `Critical Care Pulmonology focuses on treating severe and life-threatening lung and respiratory conditions in intensive care settings.

Patients with serious breathing problems require continuous monitoring, advanced life support systems, and specialized medical care.

Conditions treated include:

• Acute Respiratory Distress Syndrome (ARDS)  
• Severe Pneumonia  
• Respiratory Failure  
• COVID-19 complications  
• Pulmonary embolism  
• Severe asthma attacks  

Advanced treatments provided:

• Mechanical ventilation support  
• Oxygen therapy and respiratory support  
• Bronchoscopy procedures  
• Lung infection management  
• Emergency airway management  

Critical care pulmonologists work closely with ICU specialists, cardiologists, and other healthcare professionals to stabilize patients and restore breathing function.

Our intensive care unit is equipped with advanced ventilators, continuous monitoring systems, and highly trained medical staff to provide round-the-clock life-saving care.`
},
};

const SubSpecialityDetails = () => {

  const { speciality, subname } = useParams();

  const decodedSubName = decodeURIComponent(subname || "");

  const sub = subSpecialityData[decodedSubName];

  // ✅ ADD THIS BLOCK HERE
  let doctors = doctorsData.filter(
    (doc) => doc.subSpeciality === decodedSubName
  );

  // ✅ Ensure at least 8 doctors
  if (doctors.length < 8 && doctors.length > 0) {
    const copiesNeeded = 8 - doctors.length;
    const repeatedDoctors = [];

    for (let i = 0; i < copiesNeeded; i++) {
      repeatedDoctors.push(doctors[i % doctors.length]);
    }

    doctors = [...doctors, ...repeatedDoctors];
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!sub) return <h2>Sub Speciality Not Found</h2>;

  return (
  <motion.div
    className="details-page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >

    {/* Banner Section */}
    <div className="details-banner">
      <h1>{sub.title}</h1>

      <div className="banner-breadcrumb">
        <Link to="/home">Home</Link> /
        <span> Sub Speciality </span> /
        <span>{sub.title}</span>
      </div>
    </div>

    {/* Content Section */}
<div className="details-content">

  <div className="text-section">
    <p style={{ whiteSpace: "pre-line" }}>
      {sub.description}
    </p>
  </div>

  {sub.image && (
    <div className="image-section">
      <img src={sub.image} alt={sub.title} />
    </div>
  )}

</div>


{/* Key Doctors Section
      <div className="doctors-section">
        <h2>Key Doctors</h2>
        <div className="doctors-grid">
          {doctors.length > 0 ? (
            doctors.map((doc, index) => (
              <div key={index} className="doctor-card">
                <img src={doc.image} alt={doc.name} />
                <h3>{doc.name}</h3>
                <p>{doc.designation}</p>
              </div>
            ))
          ) : (
            <p>No doctors available for this subspeciality.</p>
          )}
        </div>
      </div> */}
    </motion.div>
  );
};

export default SubSpecialityDetails;
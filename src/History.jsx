// History.jsx
import React, { useEffect } from "react";
import "./History.css";

function History() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-in");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="history-page">

      <div className="history-banner fade-section">
        <h1>Our Journey</h1>
        <p>Excellence in healthcare since inception</p>
      </div>

      <div className="history-timeline fade-section">

        {/* Timeline Item 1 */}
        <div className="timeline-item">
          <div className="timeline-year">🏥</div>
          <div className="timeline-content">
            <h3 style={{color:"black"}}>Foundation</h3>
            <p>
              AIG Hospitals was founded with the vision to provide high-quality healthcare services to all patients.
            </p>
          </div>
        </div>

         {/* Timeline Item 2 */}
        <div className="timeline-item">
          <div className="timeline-year">🧪</div>
          <div className="timeline-content">
            <h3 style={{color:"black"}}> Research </h3>
            <p>
            Asian Institute of Gastroenterology runs a very successful Basic Sciences and Research facility in association with Asian Health care Foundation. Our highly talented and experienced Clinical Team has published more than 430 Research Papers in leading International Journals and have 2 patents to their name. We have extensive collaboration with renowned agencies like ISRO, IIT, IISC, DBT, ICMR, NIN, CCMB, etc. to work on numerable research projects. We have developed several indigenous accessories and stents which have been used nationally and internationally, providing high quality at substantial lower costs. Our team is currently undertaking path-breaking research which may have long term impact on the healthcare landscape globally. Successful studies on Islet Cell Transplantation and DMR (Duodenal Mucosal Resurfacing) could lead to eradication of Type 2 Diabetes as well as successful Fecal Transplant could lead to eradication of several Bowel diseases. Many similar studies are underway in our state of the art Research Centre.
            </p>
          </div>
        </div>

        
        {/* Timeline Item 10 */}
        <div className="timeline-item">
          <div className="timeline-year">🏢</div>
          <div className="timeline-content">
            <h3 style={{color:"black"}}>The First Step</h3>
            <p>
            Asian Institute of Gastroenterology was established in Somajiguda, Hyderabad, India’s first standalone Gastroenterology 300-bed Hospital providing the widest spectrum of Gastroenterology services in the world today and the most comprehensive services under one roof.
            </p>
          </div>
        </div>




        {/* Timeline Item 3 */}
        <div className="timeline-item">
          <div className="timeline-year">⚕</div>
          <div className="timeline-content">
            <h3 style={{color:"black"}}>New Medical Innovations</h3>
            <p>
             With patients from over 20 countries, it has set new benchmarks internationally for performing the most complex procedures with utmost success. It is credited with introducing NOTES worldwide when the world’s first Transgastric Appendectomy was performed Asian Institute of Gastroenterology has introduced a large number of procedures and surgeries in India and Asia Pacific region for the first time such as GERD-X, STRETTA, POEM, G-POEM, STERR, ESD, EMR, Endoscopic Sleeve Gastroplasty, Interventional GA procedures, Islet Cell Transplantation, etc.Over the years, Asian Institute of Gastroenterology has been able to create strong capabilities across each sub-specialty of Gastroenterology – Medical, Surgical and Interventional Radiology. The Medical Gastroenterology team has skilled doctors working in Endoscopy, Colonoscopy, Therapeutic Endoscopy, Third space endoscopy, Inflammatory Bowel Diseases, Liver, Pancreas, etc. The Surgical Gastroenterology team has specialized surgeons for Upper GI, Corrosive Injury, Hepatic Pancreatico Biliary (Hpb) Surgery, Colorectal, GI Oncology including Cytoreductive Surgery And Heated Chemotherapy (HIPEC), Bariatric surgery and General Surgeries. The Interventional Radiology department at AIG Hospitals offers minimally invasive procedures performed by passing a needle through the skin that are fast replacing the conventional techniques and surgeries. It ensures reduced risks, shorter hospital stays, lower costs, greater comfort and quicker return to work.
            </p>
          </div>
        </div>

        {/* Timeline Item 4 */}
        <div className="timeline-item">
          <div className="timeline-year">🎓</div>
          <div className="timeline-content">
            <h3 style={{color:"black"}}>Academics</h3>
            <p>
             The success of Asian Institute of Gastroenterology is driven by the strong academic and research orientation of its doctors. All our Consultants are speakers at various International Conferences and Universities. We have trained over 400 doctors from over the world at Asian Institute of Gastroenterology, many of whom have gone on to become renowned gastroenterologists and surgeons in their respective countries. Further, our strong academic focus can well be measured by the fact that we have trained 75 DNB doctors & others fellowship program seats in the hospital.
            </p>
          </div>
        </div>

        {/* Timeline Item 5 */}
        <div className="timeline-item">
          <div className="timeline-year">🧡</div>
          <div className="timeline-content">
            <h3 style={{color:"black"}}> CSR </h3>
            <p>
             Beyond the clinical excellence, academics and research, Asian Institute of Gastroenterology believes in giving back to the society. We have a well-equipped Ambulance, fitted with ultrasound and basic endoscopy system which has travelled to all districts of erstwhile united Andhra Pradesh and provided free of cost services to people living in rural areas.
            </p>
          </div>
        </div>




        
        {/* Timeline Item 6 */}
        <div className="timeline-item">
          <div className="timeline-year">💹</div>
          <div className="timeline-content">
            <h3 style={{color:"black"}}> Global Recognition</h3>
            <p>
              Recognized as a leading multi-specialty hospital providing world-class healthcare to Indian and International patients.
            </p>
          </div>
        </div>




        
        {/* Timeline Item 7 */}
        <div className="timeline-item">
          <div className="timeline-year">🚀</div>
          <div className="timeline-content">
            <h3 style={{color:"black"}}> Where We Stand</h3>
            <p>
              We continue to work towards our vision and have many break throughs during the journey
            </p>
          </div>
        </div>


        
      </div>
    </div>
  );
}

export default History;
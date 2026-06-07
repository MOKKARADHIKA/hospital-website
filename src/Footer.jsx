// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./Footer.css"; // Make sure this CSS file exists

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Column 1 */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/doctor-talks">+ Doctor Talks</Link></li>
            <li><Link to="/patient-testimonials">+ Patient Testimonials</Link></li>
            <li><Link to="/patient-information">+ Patient Information</Link></li>
            <li><Link to="/insurance-tpa">+ Insurance & TPA</Link></li>
            <li><Link to="/bwm">+ BWM</Link></li>
            <li><Link to="/blog">+ Blog</Link></li>
            <li><Link to="/psu-govt">+ Psu & Govt</Link></li>
          </ul>
        </div>

        {/* Quick Links Column 2 */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/careers">+ Careers</Link></li>
            <li><Link to="/research">+ Research</Link></li>
            <li>
  <a
    href="/pdfs/aig-brochure.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    + AIG Brochure
  </a>
</li>
            <li><Link to="/speciality">+ Specialty</Link></li>
            <li><Link to="/health-packages">+ Health Packages</Link></li>
            <li><Link to="/privacy-policy">+ Privacy Policy</Link></li>
            <li><Link to="/nursing">+ Nursing at HEALTH CARE</Link></li>
          </ul>
        </div>

        {/* Quick Links Column 3 */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/faq">+ FAQ</Link></li>
            <li><Link to="/doctors">+ Find a Doctor</Link></li>
            <li><Link to="/conferences">+ Conferences</Link></li>
            <li><Link to="/events">+ Events</Link></li>
            <li><Link to="/awards">+ Awards</Link></li>
            <li><Link to="/publications">+ Publications</Link></li>
           <li><Link to="/about-us/board">+ Board of Directors</Link></li>
          </ul>
        </div>

        {/* Address Column */}
        <div className="footer-column address-column">
          <h4>Address</h4>
          <p>
            1-66/AIG/2 to 5, Mindspace Road,<br />
            Gachibowli, Hyderabad, Telangana 500032
          </p>
          <p><strong>Ambulance Services:</strong> +91 40 4244 4244</p>
          <p><strong>Appointments:</strong> +91 40 4244 4222</p>

          <p>
            <strong>Asian Institute of Gastroenterology Private Limited (Banjara Hills)</strong><br />
            Gaffar Khan Colony, Banjara Hills,<br />
            Hyderabad, Telangana 500045
          </p>

          <p>
            <strong>Asian Institute of Gastroenterology Private Limited (Somajiguda)</strong><br />
            6/3/661, Somajiguda, Hyderabad,<br />
            Telangana 500082
          </p>

          <p>info@aighospitals.com</p>

          {/* Social Media Icons */}
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>

          {/* Certifications */}
          <div className="footer-certifications">
            <img src="/images/cert1.png" alt="Certification 1" />
            <img src="/images/cert2.png" alt="Certification 2" />
            <img src="/images/cert3.png" alt="Certification 3" />
            <img src="/images/cert4.png" alt="Certification 4" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} HEALTH CARE Hospital. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
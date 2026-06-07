// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        aboutUs: "About Us",
        doctors: "Find a Doctor",
        appointments: "Appointments",
        contact: "Contact Us",
        login: "Login",
        register: "Register",
      },
      banner: {
        welcome: "Welcome to AIG Hospital",
      },
      publications: {
        title: "Publications",
        viewPdf: "View PDF",
      },
      // Add other sections here
    },
  },
  hi: {
    translation: {
      navbar: {
        home: "मुख्य पृष्ठ",
        aboutUs: "हमारे बारे में",
        doctors: "डॉक्टर खोजें",
        appointments: "अपॉइंटमेंट्स",
        contact: "संपर्क करें",
        login: "लॉगिन",
        register: "रजिस्टर",
      },
      banner: {
        welcome: "एआईजी अस्पताल में आपका स्वागत है",
      },
      publications: {
        title: "प्रकाशन",
        viewPdf: "पीडीएफ देखें",
      },
    },
  },
  te: {
    translation: {
      navbar: {
        home: "హోమ్",
        aboutUs: "మా గురించి",
        doctors: "డాక్టర్ కనుగొనండి",
        appointments: "అపాయింట్‌మెంట్స్",
        contact: "మా తో సంబంధం పెట్టుకోండి",
        login: "లాగిన్",
        register: "నమోదు",
      },
      banner: {
        welcome: "AIG హాస్పిటల్ కి స్వాగతం",
      },
      publications: {
        title: "ప్రచురణలు",
        viewPdf: "PDF చూడండి",
      },
    },
  },
};

i18n
  .use(initReactI18next) // Connects React to i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
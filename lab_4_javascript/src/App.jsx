import { useState } from "react";

import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Languages from "./components/Languages";
import Motivation from "./components/Motivation";
import AdditionalInfo from "./components/AdditionalInfo";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  const [theme, setTheme] = useState(() => {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 21 ? "light" : "dark";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center p-8 transition-colors duration-300">
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-xl p-10 max-w-3xl w-full transition-colors duration-300">
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              {theme === "light" ? "Темна тема" : "Світла тема"}
            </button>
          </div>

          <Header />
          <PersonalInfo />
          <About />
          <Education />
          <Skills />
          <SoftSkills />
          <Languages />
          <Motivation />
          <AdditionalInfo />
          <Reviews />
          <Footer />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default App;

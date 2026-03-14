import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Languages from "./components/Languages";
import Motivation from "./components/Motivation";
import AdditionalInfo from "./components/AdditionalInfo";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-8">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-3xl w-full">
        <Header />
        <PersonalInfo />
        <About />
        <Education />
        <Skills />
        <SoftSkills />
        <Languages />
        <Motivation />
        <AdditionalInfo />
      </div>
    </div>
  );
}

export default App;

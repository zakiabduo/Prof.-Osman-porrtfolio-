import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Research from "./components/Research";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <Education />
      <Research />
      
      <Contact />
      <footer className="text-center  text-gray text-sm">
        © {new Date().getFullYear()} Muhammad Usman Javeed. All rights reserved.
      </footer>
    </div>
  );
};

export default App;

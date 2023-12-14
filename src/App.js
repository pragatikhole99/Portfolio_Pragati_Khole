import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Navbar from "./components/Navbar/navbar"
import Intro  from "./components/Intro/intro";
import Skills from "./components/AboutUs/about";
import Contact from "./components/Contact/contact";
import Experi from "./components/Experience/experi";
import Certification from "./components/Certification/certification.js";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Experi />
      <Certification/>
      <Contact/>
      
    </div>
  );
}

export default App;

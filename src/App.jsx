import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackgroundSpotlight from "./components/BackgroundSpotlight";
import StarsCanvas from "./components/Background";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tech from "./sections/Tech"; // Ensure imports are correct
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Feedbacks from "./sections/Feedbacks";
import Contact from "./sections/Contact";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <BackgroundSpotlight />
        <Navbar />

        <StarsCanvas />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Certificates />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;

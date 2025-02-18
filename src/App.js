import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import LatestProjects from './components/LatestProjects';
import LatestThinking from './components/LatestThinking';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LandingPage from './components/Navbar';
import CollaborationProcess from './components/CollabrationProcess';
// import Hero from './components/Hero';
// import ClientLogos from './components/ClientLogos';
// import Testimonials from './components/Testimonials';
// import Services from './components/Services';
// import Projects from './components/Projects';
// import Process from './components/Process';
// import LatestThinking from './components/LatestThinking';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <LandingPage />
        <Services />
        <LatestProjects/>
        <CollaborationProcess/>
        <LatestThinking />
        <ContactForm />
        <Footer/>
        {/* <Hero />
        <ClientLogos />
        <Testimonials />
        <Services />
        <Projects />
        <Process />
        <LatestThinking />
        <Contact />
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

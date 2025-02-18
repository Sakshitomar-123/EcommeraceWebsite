import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Services from './components/Services';
import LatestProjects from './components/LatestProjects';
import LatestThinking from './components/LatestThinking';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LandingPage from './components/Navbar';
import CollaborationProcess from './components/CollabrationProcess';

function App() {
  return (
    <Router>
      <div className="App">
        <LandingPage />
        <Services />
        <LatestProjects/>
        <CollaborationProcess/>
        <LatestThinking />
        <ContactForm />
        <Footer/>
       
      </div>
    </Router>
  );
}

export default App;

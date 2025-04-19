import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import CoreFeatures from './components/CoreFeatures';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowItWorks />
      <CoreFeatures />
      <StatsSection />
      {/* Add more sections as needed */}
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import CoreFeatures from './components/CoreFeatures';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import AppRouter from './router';
// import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <HowItWorks />
              <CoreFeatures />
              <StatsSection />
              {/* <DarkModeToggle /> */}
              {/* <AppRouter /> */}
            </>
          } 
        />
        <Route path="/DarkModeToggle" element={<SignIn />} />
        <Route path="/AppRouter" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
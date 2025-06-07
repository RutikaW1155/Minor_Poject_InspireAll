import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import CoreFeatures from './components/CoreFeatures';
import StatsSection from './components/StatsSection';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import BusinessInfo from './components/BusinessInfo';
import PostSection from './components/PostSection';
import SchemeSearchForm from './components/SchemeSearchForm';
import EntrepreneurProfile from './components/profiles/EntrepreneurProfile';
import InvestorProfile from './components/profiles/InvestorProfile';

const AuthSection = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to InspireAll 🚀</h1>

      {!isAuthenticated ? (
        <button onClick={loginWithRedirect}>Sign in with Google</button>
      ) : (
        <>
          <p>Logged in as: {user.name}</p>
          <img src={user.picture} alt={user.name} style={{ borderRadius: '50%' }} />
          <br />
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
        </>
      )}
    </div>
  );
};

const App = () => (
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
            <AuthSection />
          </>
        }
      />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/PostSection" element={<PostSection />} />
      <Route path="/BusinessInfo" element={<BusinessInfo />} />
      <Route path="/SchemeSearchForm" element={<SchemeSearchForm />} />
      {/* <Route
        path="/SchemeSearch"
        element={<SchemeSearchForm onResults={() => {}} onLoading={() => {}} toast={() => {}} />}
      /> */}
      
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
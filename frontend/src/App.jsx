import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import CoreFeatures from './components/CoreFeatures';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import BusinessInfo from './components/BusinessInfo';
import PostSection from './components/PostSection';


// import Schemes from './components/Schemes';

function AuthSection() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to InspireAll 🚀</h1>

      {/* {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Sign in with Google</button>
      ) : (
        <>
          <p>Logged in as: {user.name}</p>
          <img src={user.picture} alt={user.name} style={{ borderRadius: '50%' }} />
          <br />
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
        </>
      )} */}
    </div>
  );
}

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
              <AuthSection />
            </>
          }
        />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/PostSection" element={<SignUp />} />
        {/* <Route path="/Schemes" element={<Schemes />} /> */}
        <Route path="/BusinessInfo" element={<BusinessInfo />} />
        {/* <Route path="/SchemeSearch" element={<SchemeSearchForm />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
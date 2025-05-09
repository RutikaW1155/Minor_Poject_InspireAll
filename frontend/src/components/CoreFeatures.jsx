import React from 'react';
import './CoreFeatures.css';
import { FaComments, FaGlobe, FaTools, FaStore, FaUsers, FaStar } from 'react-icons/fa';

function CoreFeatures() {
  const features = [
    {
      title: "AI Chatbot for Business Help",
      icon: <FaComments />,
      desc: "Get personalized business advice from our AI-powered assistant in your language.",
    },
    {
      title: "Multilingual & Voice Support",
      icon: <FaGlobe />,
      desc: "Access all resources in your preferred regional language with voice support.",
    },
    {
      title: "Business Development Tools",
      icon: <FaTools />,
      desc: "Learn essential skills and access tools to grow your business sustainably.",
    },
    {
      title: "Local Marketplace",
      icon: <FaStore />,
      desc: "Connect with local suppliers and sell your products to a wider audience.",
    },
    {
      title: "Community Building",
      icon: <FaUsers />,
      desc: "Connect with fellow entrepreneurs for support, collaboration, and growth.",
    },
    {
      title: "Government Schemes",
      icon: <FaStar />,
      desc: "Discover and apply for relevant government schemes and support programs.",
    },
  ];

  return (
    <section className="core-features">
      <h2 className="section-title">Core Features</h2>
      <div className="features">
        {features.map((feature, idx) => (
          <div className="feature" key={idx}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.desc}</p>
            <div className="feature-image-placeholder">
              <img src="/images/placeholder.png" alt={feature.title} className="feature-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreFeatures;
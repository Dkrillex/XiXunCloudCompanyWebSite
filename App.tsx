import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoreServices } from './components/CoreServices';
import { ProcessSteps } from './components/ProcessSteps';
import { PricingPlans } from './components/PricingPlans';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased selection:bg-primary-100 selection:text-primary-700">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <CoreServices />
        <ProcessSteps />
        <PricingPlans />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
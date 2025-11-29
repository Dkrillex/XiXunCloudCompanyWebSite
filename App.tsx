import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoreServices } from './components/CoreServices';
import { ProcessSteps } from './components/ProcessSteps';
import { PricingPlans } from './components/PricingPlans';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased selection:bg-primary-100 selection:text-primary-700">
      <Navbar onConsultClick={handleOpenModal} />
      <main>
        <Hero onConsultClick={handleOpenModal} />
        <AboutSection />
        <CoreServices />
        <ProcessSteps />
        <PricingPlans onConsultClick={handleOpenModal} />
        <Testimonials />
        <CallToAction onConsultClick={handleOpenModal} />
      </main>
      <Footer />
      <ConsultationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
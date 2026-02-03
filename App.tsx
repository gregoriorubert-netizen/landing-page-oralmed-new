
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import ImplantTypesSection from './components/ImplantTypesSection';
import WhoIsItForSection from './components/WhoIsItForSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ImplantTypesSection />
        <WhoIsItForSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

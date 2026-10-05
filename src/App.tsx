import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProcessSection } from './components/ProcessSection';
import { CalculatorSection } from './components/CalculatorSection';
import { RateExamplesSection } from './components/RateExamplesSection';
import { ComplianceSection } from './components/ComplianceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EligibilitySection } from './components/EligibilitySection';
import { FAQSection } from './components/FAQSection';
import { DirectoryBanner } from './components/DirectoryBanner';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { ApplicationModal } from './components/ApplicationModal';
import { DirectoryModal } from './components/DirectoryModal';
import { LegalModal } from './components/LegalModal';
import { RateScenario } from './types';

export default function App() {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [appAmount, setAppAmount] = useState(1000);
  const [appZip, setAppZip] = useState('90210');
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
  const [legalTopic, setLegalTopic] = useState<string | null>(null);

  const handleStartApplication = (amount: number = 1000, zip: string = '90210') => {
    setAppAmount(amount);
    setAppZip(zip);
    setIsAppModalOpen(true);
  };

  const handleSelectScenario = (scenario: RateScenario) => {
    setAppAmount(scenario.amount);
    setIsAppModalOpen(true);
  };

  const handleApplyCalculation = (amount: number) => {
    setAppAmount(amount);
    setIsAppModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-900">
      {/* Top Navigation */}
      <Navbar onStartApplication={(amt) => handleStartApplication(amt || 1000)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Preset Loan Selector */}
        <HeroSection onStartApplication={handleStartApplication} />

        {/* 4-Step Process Section */}
        <ProcessSection onStartApplication={() => handleStartApplication(2500)} />

        {/* Interactive Installment Loan Calculator */}
        <CalculatorSection
          onApplyCalculation={handleApplyCalculation}
          initialAmount={appAmount || 2500}
        />

        {/* Representative Rate Examples Table */}
        <RateExamplesSection onSelectScenario={handleSelectScenario} />

        {/* Institutional Safeguards & Regulatory Compliance */}
        <ComplianceSection />

        {/* Verified Customer Feedback */}
        <TestimonialsSection />

        {/* Eligibility Criteria & Process Timeline */}
        <EligibilitySection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Educational Directory Banner */}
        <DirectoryBanner onOpenDirectory={() => setIsDirectoryOpen(true)} />
      </main>

      {/* Legal & Compliance Footer */}
      <Footer onOpenLegal={(topic) => setLegalTopic(topic)} />

      {/* Floating Cookie & Consent Notice */}
      <CookieBanner />

      {/* Interactive Application Modal Wizard */}
      <ApplicationModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        initialAmount={appAmount}
        initialZip={appZip}
      />

      {/* Spoke Hub Directory Modal */}
      <DirectoryModal
        isOpen={isDirectoryOpen}
        onClose={() => setIsDirectoryOpen(false)}
        onSelectState={(stateCode) => {
          handleStartApplication(appAmount, stateCode === 'CA' ? '90210' : '75001');
        }}
      />

      {/* Legal & Policy Modal */}
      <LegalModal
        topic={legalTopic}
        onClose={() => setLegalTopic(null)}
      />
    </div>
  );
}

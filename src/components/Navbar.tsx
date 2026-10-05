import React, { useState } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onStartApplication: (amount?: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartApplication }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2.5 text-left focus:outline-none"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-emerald-700 transition-colors">
                L
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Level
              </span>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-emerald-600 transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Calculator
            </button>
            <button
              onClick={() => scrollToSection('rates')}
              className="hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Rates & Terms
            </button>
            <button
              onClick={() => scrollToSection('eligibility')}
              className="hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Eligibility
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-emerald-600 transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop Right Action: Phone + Quick CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:18005550199"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>1-800-555-0199</span>
            </a>
            <button
              onClick={() => onStartApplication(1000)}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Check Rates
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:18005550199"
              aria-label="Call support"
              className="p-2 text-slate-700 hover:text-emerald-600"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-emerald-600"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('calculator')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-emerald-600"
          >
            Calculator
          </button>
          <button
            onClick={() => scrollToSection('rates')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-emerald-600"
          >
            Rates & Terms
          </button>
          <button
            onClick={() => scrollToSection('eligibility')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-emerald-600"
          >
            Eligibility
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-emerald-600"
          >
            FAQ
          </button>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:18005550199"
              className="flex items-center gap-2 text-sm font-semibold text-slate-800"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              1-800-555-0199 (Mon-Fri 9am-7pm EST)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartApplication(1000);
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
            >
              Start Application
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

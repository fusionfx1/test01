import React, { useState } from 'react';
import { CheckCircle2, Lock, Calendar, Zap, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onStartApplication: (amount: number, zipCode: string) => void;
}

const PRESET_AMOUNTS = [350, 500, 1000, 1500, 2500, 5000];

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartApplication }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [zipCode, setZipCode] = useState<string>('');
  const [zipError, setZipError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.trim() && !/^\d{5}(-\d{4})?$/.test(zipCode.trim())) {
      setZipError('Please enter a valid 5-digit US ZIP code.');
      return;
    }
    setZipError('');
    onStartApplication(selectedAmount, zipCode.trim() || '90210');
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F4F9F6] to-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Verification Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wide mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>FIXED-RATE INSTALLMENT SOLUTIONS • 2025 VERIFIED RATES</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Clear, Predictable Installment Loans <br className="hidden sm:inline" />
          <span className="text-emerald-600">Without Hidden Surprise Fees</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          Access fixed monthly payments and transparent terms from{' '}
          <strong className="font-semibold text-slate-900">$200 up to $5,000</strong>.
          Review options from licensed lending networks with no obligation and zero
          impact on your FICO credit score during initial check.
          <sup className="text-xs text-slate-400 font-medium ml-0.5">[1]</sup>
        </p>

        {/* Start Your Application Card */}
        <div className="mt-10 max-w-lg mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-8 text-left transition-all">
          <form onSubmit={handleSubmit} noValidate>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              START YOUR APPLICATION
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5">
              How much do you need?
            </h2>

            {/* Amount Presets */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {PRESET_AMOUNTS.map((amt) => {
                const isSelected = selectedAmount === amt;
                return (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setSelectedAmount(amt)}
                    className={`py-3 px-2 rounded-xl text-base font-bold transition-all text-center cursor-pointer border ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                    }`}
                  >
                    ${amt.toLocaleString()}
                  </button>
                );
              })}
            </div>

            {/* ZIP Code Input */}
            <div className="mb-6">
              <label htmlFor="hero-zip" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Your ZIP code
              </label>
              <input
                id="hero-zip"
                type="text"
                inputMode="numeric"
                maxLength={5}
                value={zipCode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                  if (zipError) setZipError('');
                }}
                placeholder="e.g. 90210"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                  zipError
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                    : 'border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                }`}
              />
              {zipError && (
                <p className="mt-1.5 text-xs text-rose-600">{zipError}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-base shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Continue with ${selectedAmount.toLocaleString()}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* 4 Feature Badges row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>No FICO Score Impact</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>No Prepayment Penalty</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-emerald-600" />
            <span>Fixed Monthly Installments</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Rapid Online Inquiry</span>
          </div>
        </div>

        {/* Stat Highlights Bar */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight tabular-nums">
                $48M+
              </div>
              <div className="mt-1 text-xs text-slate-500 font-medium">
                Requested Loan Volume<sup className="text-[10px] ml-0.5">[2]</sup>
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight tabular-nums">
                110,000+
              </div>
              <div className="mt-1 text-xs text-slate-500 font-medium">
                Inquiries Processed
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-600 tracking-tight tabular-nums">
                4.8 / 5.0
              </div>
              <div className="mt-1 text-xs text-slate-500 font-medium">
                Customer Experience Rating
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight tabular-nums">
                &lt; 3 Mins
              </div>
              <div className="mt-1 text-xs text-slate-500 font-medium">
                Typical Inquiry Review Time
              </div>
            </div>
          </div>

          <p className="mt-6 text-[11px] text-slate-400 font-normal leading-relaxed max-w-3xl mx-auto">
            * Editorial Status: Verified Q1 2025. Data reflects representative marketplace activity across all participating state networks.
          </p>
        </div>
      </div>
    </section>
  );
};

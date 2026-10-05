import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, Loader2, Sparkles, Building2 } from 'lucide-react';
import { calculateLoan, formatCurrency } from '../utils/loanCalculator';
import { LenderOffer } from '../types';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
  initialZip?: string;
}

const PURPOSES = [
  'Emergency Expense',
  'Debt Consolidation',
  'Home Improvement',
  'Auto Repair',
  'Medical Bills',
  'Major Purchase / Other',
];

const EMPLOYMENT_STATUSES = [
  'Full-Time Employed',
  'Part-Time Employed',
  'Self-Employed / Independent Contractor',
  'Retired / Social Security',
  'Disability / Government Benefits',
];

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialAmount = 1000,
  initialZip = '90210',
}) => {
  const [step, setStep] = useState<number>(1);
  const [amount, setAmount] = useState<number>(initialAmount);
  const [purpose, setPurpose] = useState<string>('Emergency Expense');
  const [zip, setZip] = useState<string>(initialZip);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [employmentStatus, setEmploymentStatus] = useState<string>('Full-Time Employed');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('3500');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [matchedOffers, setMatchedOffers] = useState<LenderOffer[]>([]);
  const [selectedOffer, setSelectedOffer] = useState<LenderOffer | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialAmount) setAmount(initialAmount);
    if (initialZip) setZip(initialZip);
  }, [initialAmount, initialZip, isOpen]);

  if (!isOpen) return null;

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!firstName.trim()) errs.firstName = 'First name is required';
    if (!lastName.trim()) errs.lastName = 'Last name is required';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Valid email is required';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) errs.phone = '10-digit phone number is required';
    if (!zip.trim() || !/^\d{5}$/.test(zip.trim())) errs.zip = 'Valid 5-digit ZIP code is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      setStep(3);
    }
  };

  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
    setIsSearching(true);

    // Simulate smart matching across participating network lenders
    setTimeout(() => {
      const calc1 = calculateLoan(amount, 12, 14.5);
      const calc2 = calculateLoan(amount, 18, 19.99);
      const calc3 = calculateLoan(amount, 24, 26.5);

      const offers: LenderOffer[] = [
        {
          id: 'offer-1',
          lenderName: 'Silverline Direct Installment',
          tagline: 'Lowest Fixed APR Option',
          amount: amount,
          termMonths: 12,
          apr: 14.5,
          monthlyPayment: calc1.monthlyPayment,
          originationFee: '$0.00 (No upfront fees)',
          speed: 'Funds Next Business Day',
          rating: 4.9,
          recommended: true,
        },
        {
          id: 'offer-2',
          lenderName: 'Apex Consumer Lending Network',
          tagline: 'Balanced Monthly Flexibility',
          amount: amount,
          termMonths: 18,
          apr: 19.99,
          monthlyPayment: calc2.monthlyPayment,
          originationFee: '$0.00',
          speed: 'Same-Day ACH Direct Deposit',
          rating: 4.8,
        },
        {
          id: 'offer-3',
          lenderName: 'Keystone Financial Partners',
          tagline: 'Extended Budget Comfort',
          amount: amount,
          termMonths: 24,
          apr: 26.5,
          monthlyPayment: calc3.monthlyPayment,
          originationFee: '$0.00',
          speed: 'Next Business Day Direct Wire',
          rating: 4.7,
        },
      ];

      setMatchedOffers(offers);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
              L
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Installment Loan Inquiry
              </h3>
              <p className="text-[11px] text-slate-500">
                Step {step} of 4 • Soft Pull • Zero FICO Impact
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="w-full bg-slate-100 h-1">
          <div
            className="bg-emerald-600 h-1 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* STEP 1: Amount & Purpose */}
          {step === 1 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                STEP 1 OF 4: LOAN PREFERENCES
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900 mb-2">
                What amount and purpose are you seeking?
              </h4>
              <p className="text-xs text-slate-500 mb-6">
                Choose an installment amount between $200 and $5,000. All options feature fixed monthly payments.
              </p>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="inquiry-loan-amount" className="text-xs font-bold text-slate-700">
                    Requested Amount:
                  </label>
                  <span className="text-lg font-black text-emerald-600 tabular-nums">
                    ${amount.toLocaleString()}
                  </span>
                </div>
                <input
                  id="inquiry-loan-amount"
                  type="range"
                  min={200}
                  max={5000}
                  step={50}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>$200</span>
                  <span>$2,500</span>
                  <span>$5,000</span>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Primary Purpose of Funds:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {PURPOSES.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPurpose(p)}
                      className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                        purpose === p
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-500 ring-2 ring-emerald-500/20'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continue to Eligibility Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Contact & Personal Info */}
          {step === 2 && (
            <form onSubmit={handleStep2Submit}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                STEP 2 OF 4: CONTACT &amp; RESIDENCE
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900 mb-2">
                Where should we send your matched offers?
              </h4>
              <p className="text-xs text-slate-500 mb-6 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>256-bit encrypted. This soft inquiry will not impact your credit score.</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="modal-fname" className="block text-xs font-semibold text-slate-700 mb-1">
                    First Name
                  </label>
                  <input
                    id="modal-fname"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="e.g. John"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  {errors.firstName && <p className="text-xs text-rose-500 mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label htmlFor="modal-lname" className="block text-xs font-semibold text-slate-700 mb-1">
                    Last Name
                  </label>
                  <input
                    id="modal-lname"
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="e.g. Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  {errors.lastName && <p className="text-xs text-rose-500 mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Phone
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="modal-zip" className="block text-xs font-semibold text-slate-700 mb-1">
                  ZIP Code
                </label>
                <input
                  id="modal-zip"
                  type="text"
                  maxLength={5}
                  required
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="e.g. 90210"
                  className="w-full max-w-xs px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                {errors.zip && <p className="text-xs text-rose-500 mt-1">{errors.zip}</p>}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue to Income Verification</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Income & Employment */}
          {step === 3 && (
            <form onSubmit={handleStep3Submit}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                STEP 3 OF 4: FINANCIAL PROFILE
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900 mb-2">
                Income and verification details
              </h4>
              <p className="text-xs text-slate-500 mb-6">
                Participating lenders require verifiable monthly income to confirm debt-to-income affordability.
              </p>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Employment Status
                </label>
                <select
                  value={employmentStatus}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white"
                >
                  {EMPLOYMENT_STATUSES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="modal-income" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Estimated Monthly Take-Home Pay (After Taxes)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold text-sm">
                    $
                  </span>
                  <input
                    id="modal-income"
                    type="number"
                    min={500}
                    step={100}
                    required
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Includes salary, wages, retirement distributions, or disability benefits.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 leading-relaxed mb-6">
                By clicking &ldquo;Find Licensed Lenders&rdquo;, I confirm that all provided information is accurate and authorize Level to transmit my inquiry for real-time soft pull evaluation.
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Find Licensed Lenders</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Results & Offer Selection */}
          {step === 4 && (
            <div>
              {isSearching ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <Loader2 className="w-10 h-10 text-emerald-600 animate-spin mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    Matching with Licensed Lenders...
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                    Querying state-regulated installment networks for ZIP {zip} and ${amount.toLocaleString()} requested principal.
                  </p>
                </div>
              ) : selectedOffer ? (
                <div>
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 mb-6 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-900">
                        Pre-Approval Verified with {selectedOffer.lenderName}
                      </h4>
                      <p className="text-xs text-emerald-700 mt-0.5">
                        Your soft pull was approved for ${selectedOffer.amount.toLocaleString()} at {selectedOffer.apr.toFixed(2)}% fixed APR.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white rounded-2xl p-6 mb-6">
                    <div className="flex justify-between items-start pb-4 border-b border-slate-800">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400">
                          Selected Financing Option
                        </span>
                        <h5 className="text-lg font-extrabold text-white mt-0.5">
                          {selectedOffer.lenderName}
                        </h5>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold text-xs">
                        {selectedOffer.apr.toFixed(2)}% Fixed APR
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 text-xs">
                      <div>
                        <span className="text-slate-400 block mb-0.5">Monthly Payment:</span>
                        <span className="text-xl font-black text-white tabular-nums">
                          {formatCurrency(selectedOffer.monthlyPayment)}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5">Term Length:</span>
                        <span className="text-base font-bold text-white">
                          {selectedOffer.termMonths} Months
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5">Funding Speed:</span>
                        <span className="text-xs font-semibold text-emerald-400">
                          {selectedOffer.speed}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2 mb-6">
                    <p>
                      <strong>Next Step:</strong> You will be connected to the lender’s secure electronic signature portal to verify your government ID and direct deposit bank routing info.
                    </p>
                    <p className="text-[11px] text-slate-500">
                      No obligation. You may review the final Truth in Lending statement before accepting.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedOffer(null)}
                      className="px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                    >
                      Compare Other Offers
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        alert(`Thank you, ${firstName || 'Borrower'}! You are being redirected to complete your loan documentation with ${selectedOffer.lenderName}.`);
                        onClose();
                      }}
                      className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Lender Portal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                    PRE-QUALIFIED LENDER MATCHES
                  </span>
                  <h4 className="text-2xl font-extrabold text-slate-900 mb-1">
                    We found 3 options for ${amount.toLocaleString()}
                  </h4>
                  <p className="text-xs text-slate-500 mb-5">
                    Compare fixed APRs, term options, and monthly commitments below.
                  </p>

                  <div className="space-y-3.5 mb-6">
                    {matchedOffers.map((offer) => (
                      <div
                        key={offer.id}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                          offer.recommended
                            ? 'border-emerald-500 bg-emerald-50/30 shadow-sm'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                        onClick={() => setSelectedOffer(offer)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-emerald-600" />
                            <h5 className="font-bold text-slate-900 text-sm">
                              {offer.lenderName}
                            </h5>
                          </div>
                          {offer.recommended && (
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                              Recommended
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                          <div>
                            <span className="text-slate-400 block">Monthly Payment:</span>
                            <span className="text-base font-extrabold text-slate-900 tabular-nums">
                              {formatCurrency(offer.monthlyPayment)} / mo
                            </span>
                          </div>
                          <div className="text-center">
                            <span className="text-slate-400 block">Fixed APR:</span>
                            <span className="text-sm font-bold text-emerald-600 tabular-nums">
                              {offer.apr.toFixed(2)}%
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-slate-400 block">Term:</span>
                            <span className="text-sm font-semibold text-slate-700">
                              {offer.termMonths} Mo
                            </span>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                          <span>{offer.speed}</span>
                          <span className="text-emerald-700 font-bold flex items-center gap-1">
                            Review Offer &rarr;
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-500 hover:text-slate-800 underline font-medium"
                  >
                    Adjust amount or inquiry details
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { UserCheck, History, Check } from 'lucide-react';

export const EligibilitySection: React.FC = () => {
  return (
    <section id="eligibility" className="py-20 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-2">
            PREREQUISITES &amp; TIMELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Eligibility &amp; What to Expect
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Honest guidelines to help you understand standard marketplace underwriting requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card: Who May Qualify */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Who May Qualify
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                Approval is not guaranteed and remains subject to review by participating lenders. General criteria often include:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="font-semibold text-slate-900">Age &amp; Residency:</strong> At least 18 years of age (19 in Alabama) and a US Citizen or permanent resident.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="font-semibold text-slate-900">Stable Income:</strong> Regular source of verifiable monthly income (employment, retirement, or benefits).
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="font-semibold text-slate-900">Active Bank Account:</strong> Valid checking account in your name capable of accepting direct ACH transfers.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="font-semibold text-slate-900">Contact Details:</strong> Working phone number and email address for electronic consent and disclosures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: What to Expect Timeline */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <History className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  What to Expect: Timeline
                </h3>
              </div>

              <div className="space-y-6 relative before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
                <div className="relative flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 ring-4 ring-white z-10">
                    1
                  </div>
                  <div className="pt-0.5">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Fill out your inquiry without affecting your credit score.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 ring-4 ring-white z-10">
                    2
                  </div>
                  <div className="pt-0.5">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      If matched, you will be redirected to review specific rates and agreements.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 ring-4 ring-white z-10">
                    3
                  </div>
                  <div className="pt-0.5">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The lender verifies documents (income, bank routing). A hard inquiry may occur here.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 ring-4 ring-white z-10">
                    4
                  </div>
                  <div className="pt-0.5">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Approved funds are directly wired into your checking account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

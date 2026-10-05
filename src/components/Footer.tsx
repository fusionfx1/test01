import React from 'react';

interface FooterProps {
  onOpenLegal: (topic: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#050B14] text-slate-400 py-16 px-4 sm:px-6 lg:px-8 text-xs border-t border-slate-900">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Brand & Links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center text-white font-extrabold text-sm">
                L
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Level
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Connecting consumers with transparent, fixed-rate installment loans.
            </p>
          </div>

          {/* Legal Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <button
              onClick={() => onOpenLegal('Privacy Policy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('Terms of Service')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenLegal('E-Consent')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              E-Consent
            </button>
            <button
              onClick={() => onOpenLegal('State Licenses')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              State Licenses
            </button>
            <button
              onClick={() => onOpenLegal('Do Not Sell My Info')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Do Not Sell My Info
            </button>
          </nav>
        </div>

        {/* Detailed Disclosures */}
        <div className="space-y-4 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400 font-semibold">Soft Pull vs. Hard Pull Credit Inquiries:</strong> Initial qualification through Level/Lending utilizes soft credit bureau checks which do not impact your FICO credit score. However, once you choose to accept and submit a formal application with a specific lender, that lender will conduct a standard credit inquiry (hard pull) with one or more national credit reporting agencies (Equifax, Experian, TransUnion), which may affect your credit score.
          </p>

          <p>
            <strong className="text-slate-400 font-semibold">APR &amp; Underwriting Disclosures:</strong> Level is an independent loan referral marketplace and not a direct lender or broker. Rates range from 5.99% to 34.99% APR with terms from 3 to 36 months. Actual APR and loan eligibility depend on borrower creditworthiness, income verification, debt ratios, loan duration, and governing state statutory limits.
          </p>

          <p>
            <strong className="text-slate-400 font-semibold">TCPA Consent:</strong> By submitting an inquiry form, you provide express written consent under the Telephone Consumer Protection Act (TCPA) to receive automated phone calls, pre-recorded messages, and SMS text messages from Level and our network partners at the number provided. Consent is not a condition of purchasing any good or service.
          </p>

          <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-slate-600">
            <div>
              Wilmington, DE 19801 • NMLS #: [TBD / Verification Pending] • Sources Cited: (1) CFPB Installment Lending Guidelines; (2) Internal Network Aggregated Volume Q4 2024.
            </div>
            <div>
              &copy; {new Date().getFullYear()} Level Lending Marketplace. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

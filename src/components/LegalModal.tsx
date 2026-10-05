import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  topic: string | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ topic, onClose }) => {
  if (!topic) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-bold text-slate-900">{topic}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto text-xs text-slate-600 leading-relaxed space-y-4">
          {topic === 'Privacy Policy' && (
            <>
              <p className="font-semibold text-slate-800">
                Last Updated: March 2025
              </p>
              <p>
                Level Lending Marketplace (&ldquo;Level&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personally identifiable information you share with us.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Information We Collect</h4>
              <p>
                We collect personal identifiers including your name, email address, residential address, telephone number, employment status, and monthly income estimate to transmit your request to licensed lending partners.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Soft Credit Bureau Inquiries</h4>
              <p>
                Our initial marketplace search relies exclusively on soft credit pulls that do not impact your FICO score. You will only receive a formal hard credit inquiry if you choose to proceed with a lender’s specific offer on their secure portal.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Data Security</h4>
              <p>
                All data transmission between your browser and our server infrastructure is protected with 256-bit SSL/TLS cryptographic encryption conforming to GLBA financial data privacy mandates.
              </p>
            </>
          )}

          {topic === 'Terms of Service' && (
            <>
              <p className="font-semibold text-slate-800">
                Terms of Use and Referral Marketplace Agreement
              </p>
              <p>
                Level is not a direct lender, loan broker, or credit decision-maker. We operate an electronic marketplace connecting prospective borrowers with independent, state-licensed installment loan providers.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Zero Fee Guarantee</h4>
              <p>
                Use of the Level website and matching engine is 100% complimentary. We do not charge borrowers any upfront processing fees, application charges, or monthly account maintenance fees.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Credit Decision Authority</h4>
              <p>
                Approval, APR terms, maximum principal amounts, and funding timelines are determined solely by participating lenders according to their underwriting policies and applicable state law.
              </p>
            </>
          )}

          {topic === 'E-Consent' && (
            <>
              <h4 className="font-bold text-slate-900 text-sm">
                Consent to Electronic Disclosures and Signatures (E-SIGN Act)
              </h4>
              <p>
                By using our services, you consent to receive all communications, notices, disclosures, and loan offers electronically via email, SMS, or web portal.
              </p>
              <p>
                You may withdraw electronic consent at any time by contacting our support desk at 1-800-555-0199 or emailing compliance@levellending.com.
              </p>
            </>
          )}

          {topic === 'State Licenses' && (
            <>
              <h4 className="font-bold text-slate-900 text-sm">
                State Regulatory Compliance &amp; Maximum APR Limits
              </h4>
              <p>
                Participating lenders in our network are licensed in their respective jurisdictions and operate within statutory APR interest rate ceilings. Maximum APR on installment loans within our network is capped at 34.99%.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>California: DFPI Licensed Financing Law (CFL)</li>
                <li>Texas: OCCC Regulated Lender Chapter 342</li>
                <li>Florida: Office of Financial Regulation Chapter 516</li>
                <li>Ohio: Division of Financial Institutions Small Loan Act</li>
              </ul>
            </>
          )}

          {topic === 'Do Not Sell My Info' && (
            <>
              <h4 className="font-bold text-slate-900 text-sm">
                Notice of Right to Opt-Out (CCPA / CPRA / State Privacy Rights)
              </h4>
              <p>
                We do not sell personal information to third-party commercial data brokers for independent marketing purposes. Information submitted through our inquiry engine is shared strictly with participating financial institutions to generate installment loan options upon your explicit request.
              </p>
              <p>
                To register your global opt-out preference or exercise your right to delete personal records, contact privacy@levellending.com with the subject line &ldquo;Privacy Preference Request&rdquo;.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};

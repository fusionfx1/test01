import React, { useState } from 'react';
import { ChevronDown, Headphones, Phone } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Will checking my installment loan options affect my credit score?',
    answer:
      'No. Checking your loan options through our network uses a soft credit pull, which allows participating lenders to review your preliminary eligibility without impacting your FICO score. If you choose to proceed with a specific lender and electronically sign the formal loan agreement, that lender may perform a standard hard credit inquiry.',
  },
  {
    question: 'What is an installment loan, and how is it structured?',
    answer:
      'An installment loan is a fixed-sum personal loan repaid over time in regular, scheduled monthly payments (installments). Each payment includes a portion of principal and fixed interest, providing complete predictability from origination to final payoff with no surprise balloon payments.',
  },
  {
    question: 'What are the maximum and minimum APR rates?',
    answer:
      'Annual Percentage Rates (APRs) typically range between 5.99% and our strict marketplace ceiling of 34.99%. Exact rates depend on your credit profile, debt-to-income ratio, requested duration, and state statutory caps.',
  },
  {
    question: 'How fast can I receive funding if approved?',
    answer:
      'Most participating lenders process ACH direct deposits as fast as the next business day following electronic signature and document verification, subject to your banking institution’s cutoff times.',
  },
  {
    question: 'Can I pay off my installment loan early without a penalty?',
    answer:
      'Yes. All lenders within our licensed network adhere to a zero prepayment penalty standard. You can make extra principal payments or settle your full remaining balance at any time without fees.',
  },
  {
    question: 'Are there upfront application fees?',
    answer:
      'No. Our marketplace matching service is 100% free to users. There are zero upfront fees, broker charges, or subscription costs. Any lender-specific origination fees are explicitly detailed in your Truth in Lending Act (TILA) disclosure before you sign.',
  },
  {
    question: 'Which states are eligible for installment credit?',
    answer:
      'Our network connects borrowers across eligible US states adhering to state-specific lending statutes and maximum rate limits. You can explore our Spoke Hub Directory below to see jurisdictional rules for your state.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open like screenshot

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Support Box */}
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-2">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              Everything you need to know about installment credit solutions, APR ranges, and our referral marketplace.
            </p>

            {/* Support Callout Box */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 flex flex-col items-start shadow-xs">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Need human assistance?
              </h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Our support team is available Mon-Fri, 9am - 7pm EST.
              </p>
              <a
                href="tel:18005550199"
                className="flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>1-800-555-0199</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-8 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'border-emerald-200 bg-white shadow-sm ring-1 ring-emerald-500/10'
                      : 'border-slate-200/90 bg-[#F8FAFC] hover:bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-4.5 px-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

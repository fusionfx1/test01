import React from 'react';
import { Sliders, ClipboardCheck, Scale, Banknote, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onStartApplication: () => void;
}

const STEPS = [
  {
    number: '01',
    title: 'Select Amount',
    icon: Sliders,
    description:
      'Choose your needed amount between $200 and $5,000. Review potential monthly terms that seamlessly fit your household cash flow.',
  },
  {
    number: '02',
    title: 'Check Eligibility',
    icon: ClipboardCheck,
    description:
      'Submit your basic contact details online. Participating lenders utilize a soft pull inquiry, meaning your credit score remains unaffected.',
  },
  {
    number: '03',
    title: 'Review Offers',
    icon: Scale,
    description:
      'Evaluate real lender proposals with fixed APRs (up to 34.99%), predictable schedules, and zero prepayment penalties.',
  },
  {
    number: '04',
    title: 'Direct Funding',
    icon: Banknote,
    description:
      'Upon your final electronic signature and approval, funds are typically transferred directly to your checking account as soon as the next business day.',
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartApplication }) => {
  return (
    <section id="how-it-works" className="py-20 bg-white border-t border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-2">
            SIMPLE PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Get connected with licensed installment loan options in four straightforward, transparent steps.
          </h2>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:border-emerald-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-slate-300 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navy CTA Strip */}
        <div className="mt-12 bg-[#0B1527] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1">
              Ready to see what installment loan options you qualify for?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              No paperwork to mail, no waiting in lines, and zero obligation.
            </p>
          </div>
          <button
            onClick={onStartApplication}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Check Your Rate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

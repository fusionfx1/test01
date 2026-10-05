import React from 'react';
import { Award, ShieldCheck, Landmark, HandCoins, Percent, BadgeCheck } from 'lucide-react';

const SAFEGUARDS = [
  {
    title: 'BBB Standards',
    subtitle: 'Ethical business marketplace alignment',
    icon: Award,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: '256-Bit SSL',
    subtitle: 'End-to-end encrypted transmission',
    icon: ShieldCheck,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    title: 'GLBA Compliant',
    subtitle: 'Financial privacy consumer protection',
    icon: Landmark,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    title: 'No Prepayment Fee',
    subtitle: 'Pay early anytime without penalty',
    icon: HandCoins,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    title: 'Fixed Rates Only',
    subtitle: 'Predictable payments that never rise',
    icon: Percent,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    title: 'Licensed Network',
    subtitle: 'State-regulated lending partners',
    icon: BadgeCheck,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
];

export const ComplianceSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-2">
            INDUSTRY SECURITY &amp; STANDARDS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Institutional Safeguards &amp; Regulatory Compliance
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {SAFEGUARDS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 text-center flex flex-col items-center justify-start hover:shadow-md hover:border-slate-300 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

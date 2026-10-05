import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RateScenario } from '../types';

interface RateExamplesSectionProps {
  onSelectScenario: (scenario: RateScenario) => void;
}

const RATE_SCENARIOS: RateScenario[] = [
  {
    amount: 1000,
    termMonths: 6,
    apr: 12.5,
    estMonthly: 172.84,
    totalCost: 1037.04,
  },
  {
    amount: 2000,
    termMonths: 12,
    apr: 18.99,
    estMonthly: 184.34,
    totalCost: 2212.08,
  },
  {
    amount: 3000,
    termMonths: 18,
    apr: 24.5,
    estMonthly: 201.21,
    totalCost: 3621.78,
  },
  {
    amount: 4000,
    termMonths: 24,
    apr: 29.99,
    estMonthly: 224.96,
    totalCost: 5399.04,
  },
  {
    amount: 5000,
    termMonths: 36,
    apr: 34.99,
    estMonthly: 229.07,
    totalCost: 8246.52,
  },
];

export const RateExamplesSection: React.FC<RateExamplesSectionProps> = ({ onSelectScenario }) => {
  return (
    <section id="rates" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-2">
            REPRESENTATIVE SCENARIOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Installment Loan Rate Examples
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Sample payment schedules across common installment financing amounts, adhering strictly to our 34.99% maximum APR ceiling.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-4 px-6">AMOUNT</th>
                <th className="py-4 px-6">TERM</th>
                <th className="py-4 px-6">FIXED APR</th>
                <th className="py-4 px-6">EST. MONTHLY</th>
                <th className="py-4 px-6">TOTAL COST</th>
                <th className="py-4 px-6 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {RATE_SCENARIOS.map((row) => (
                <tr
                  key={row.amount}
                  className="hover:bg-emerald-50/40 transition-colors group"
                >
                  <td className="py-4 px-6 font-bold text-slate-900 tabular-nums">
                    ${row.amount.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {row.termMonths} Months
                  </td>
                  <td className="py-4 px-6 font-bold text-emerald-600 tabular-nums">
                    {row.apr.toFixed(2)}%
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-900 tabular-nums">
                    ${row.estMonthly.toFixed(2)}
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium tabular-nums">
                    ${row.totalCost.toFixed(2)}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => onSelectScenario(row)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 underline underline-offset-4 cursor-pointer"
                    >
                      <span>Check</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Representative Example Footnote Box */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-500 leading-relaxed">
          <p>
            <strong className="font-semibold text-slate-700">Representative Example:</strong> Borrowing $2,000 with a 12-month repayment schedule at an Annual Percentage Rate (APR) of 18.99% results in 12 equal monthly installments of $184.34, totaling $2,212.08 repaid ($212.08 total finance charges). Actual APRs range between 5.99% and 34.99%, depending on credit score, debt-to-income ratio, state regulatory caps, and underwriting assessment.
          </p>
        </div>
      </div>
    </section>
  );
};

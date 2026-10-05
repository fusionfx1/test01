import React, { useState, useMemo } from 'react';
import { calculateLoan, formatCurrency } from '../utils/loanCalculator';
import { ArrowRight, Info, Check } from 'lucide-react';

interface CalculatorSectionProps {
  onApplyCalculation: (amount: number, termMonths: number, apr: number) => void;
  initialAmount?: number;
}

const TERM_OPTIONS = [3, 6, 12, 18, 24, 36];

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  onApplyCalculation,
  initialAmount = 2500,
}) => {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [termMonths, setTermMonths] = useState<number>(12);
  const [apr, setApr] = useState<number>(18.5);

  const calculation = useMemo(() => {
    return calculateLoan(amount, termMonths, apr);
  }, [amount, termMonths, apr]);

  return (
    <section id="calculator" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-2">
            INTERACTIVE TOOL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Installment Loan Calculator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Simulate monthly installments and total loan costs based on different amounts, terms,
            and fixed APR scenarios.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Controls */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              {/* Loan Amount Control */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="loan-amount-slider" className="text-sm font-bold text-slate-800">
                    Loan Amount
                  </label>
                  <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 font-extrabold text-base tabular-nums border border-emerald-200/60">
                    ${amount.toLocaleString()}
                  </span>
                </div>
                <input
                  id="loan-amount-slider"
                  type="range"
                  min={200}
                  max={5000}
                  step={50}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer focus:outline-none"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                  <span>$200</span>
                  <span>$2,500</span>
                  <span>$5,000 (Max)</span>
                </div>
              </div>

              {/* Repayment Term Control */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-3">
                  Repayment Term
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {TERM_OPTIONS.map((t) => {
                    const isSelected = termMonths === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTermMonths(t)}
                        className={`py-2 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer border ${
                          isSelected
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {t} Mo
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Estimated Fixed APR Control */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <label htmlFor="apr-slider" className="text-sm font-bold text-slate-800">
                      Estimated Fixed APR
                    </label>
                    <span title="Annual Percentage Rate represents the yearly interest rate charged for borrowing." className="cursor-help">
                      <Info className="w-3.5 h-3.5 text-slate-400" />
                    </span>
                  </div>
                  <span className="font-extrabold text-slate-900 text-base tabular-nums">
                    {apr.toFixed(2)}%
                  </span>
                </div>
                <input
                  id="apr-slider"
                  type="range"
                  min={5.99}
                  max={34.99}
                  step={0.25}
                  value={apr}
                  onChange={(e) => setApr(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer focus:outline-none"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                  <span>5.99% (Min)</span>
                  <span>20.00%</span>
                  <span>34.99% (Compliant Cap)</span>
                </div>
              </div>
            </div>

            {/* Right Summary Dark Card */}
            <div className="lg:col-span-5 bg-[#0B1527] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Subtle top background decorative glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  ESTIMATED MONTHLY PAYMENT
                </span>

                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums">
                    {formatCurrency(calculation.monthlyPayment)}
                  </span>
                  <span className="text-sm font-medium text-slate-400">/ month</span>
                </div>

                <p className="text-xs text-slate-400 mb-6 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Fixed amount • Predictable amortization</span>
                </p>

                {/* Breakdown List */}
                <div className="space-y-3.5 pt-5 border-t border-slate-800 text-sm">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Total Principal:</span>
                    <span className="font-semibold text-white tabular-nums">
                      {formatCurrency(calculation.principal)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-slate-300">
                    <span>Total Interest &amp; Cost:</span>
                    <span className="font-bold text-emerald-400 tabular-nums">
                      {formatCurrency(calculation.totalInterest)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-slate-300 pt-2 border-t border-slate-800/80">
                    <span className="font-semibold text-white">Total Repayable:</span>
                    <span className="font-bold text-white text-base tabular-nums">
                      {formatCurrency(calculation.totalRepayable)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onApplyCalculation(amount, termMonths, apr)}
                className="mt-8 w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Check Rates for {formatCurrency(amount)}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Footnote Disclaimer */}
        <p className="mt-5 text-center text-xs text-slate-500 leading-relaxed max-w-3xl mx-auto">
          <strong>Disclaimer:</strong> Illustrative calculation only. Your actual rate, loan amount, and monthly repayment terms depend on your individual credit profile, verified income, state of residence, and final lender agreement.
        </p>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, Search, MapPin, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { StateLendingRule } from '../types';

interface DirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectState: (stateCode: string) => void;
}

const STATE_RULES: StateLendingRule[] = [
  {
    state: 'California',
    code: 'CA',
    maxAprCap: '36.00% + Fed Funds (Fair Access to Credit Act)',
    maxLoanAmount: '$5,000+',
    licensingAuthority: 'California Department of Financial Protection and Innovation (DFPI)',
    status: 'Active Marketplace',
  },
  {
    state: 'Texas',
    code: 'TX',
    maxAprCap: 'Regulated under Tex. Fin. Code Ch. 342 (Tiered Structure)',
    maxLoanAmount: '$5,000+',
    licensingAuthority: 'Office of Consumer Credit Commissioner (OCCC)',
    status: 'Active Marketplace',
  },
  {
    state: 'Florida',
    code: 'FL',
    maxAprCap: '30.00% - 36.00% Tiered (FL Consumer Finance Act)',
    maxLoanAmount: '$5,000',
    licensingAuthority: 'Florida Office of Financial Regulation (OFR)',
    status: 'Active Marketplace',
  },
  {
    state: 'Ohio',
    code: 'OH',
    maxAprCap: '28.00% APR Cap (Ohio Small Loan Act)',
    maxLoanAmount: '$5,000',
    licensingAuthority: 'Ohio Division of Financial Institutions',
    status: 'Active Marketplace',
  },
  {
    state: 'Georgia',
    code: 'GA',
    maxAprCap: '10.00% Simple / Georgia Industrial Loan Act (GILA)',
    maxLoanAmount: '$3,000 - $5,000',
    licensingAuthority: 'Georgia Department of Banking and Finance',
    status: 'Active Marketplace',
  },
  {
    state: 'Illinois',
    code: 'IL',
    maxAprCap: '36.00% All-In APR Cap (Predatory Loan Prevention Act)',
    maxLoanAmount: '$5,000',
    licensingAuthority: 'Illinois Department of Financial & Professional Regulation (IDFPR)',
    status: 'Active Marketplace',
  },
  {
    state: 'Pennsylvania',
    code: 'PA',
    maxAprCap: '6.00% statutory / Licensed Consumer Discount Act',
    maxLoanAmount: '$5,000',
    licensingAuthority: 'Pennsylvania Department of Banking and Securities',
    status: 'Active Marketplace',
  },
  {
    state: 'New York',
    code: 'NY',
    maxAprCap: '16.00% civil / 25.00% criminal usury cap',
    maxLoanAmount: '$5,000',
    licensingAuthority: 'New York Department of Financial Services (DFS)',
    status: 'Active Marketplace',
  },
  {
    state: 'North Carolina',
    code: 'NC',
    maxAprCap: '30.00% tiered down to 18.00% (Consumer Finance Act)',
    maxLoanAmount: '$5,000',
    licensingAuthority: 'North Carolina Commissioner of Banks',
    status: 'Active Marketplace',
  },
  {
    state: 'Michigan',
    code: 'MI',
    maxAprCap: '25.00% APR Cap (Regulatory Loan Act)',
    maxLoanAmount: '$5,000',
    licensingAuthority: 'Michigan Department of Insurance and Financial Services (DIFS)',
    status: 'Active Marketplace',
  },
];

export const DirectoryModal: React.FC<DirectoryModalProps> = ({
  isOpen,
  onClose,
  onSelectState,
}) => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'states' | 'purposes'>('states');

  if (!isOpen) return null;

  const filteredStates = STATE_RULES.filter(
    (s) =>
      s.state.toLowerCase().includes(search.toLowerCase()) ||
      s.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-0.5">
              EDUCATIONAL NETWORK
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Spoke Hub Directory &amp; Regulatory Guides
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close directory"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher & Search */}
        <div className="p-6 border-b border-slate-100 bg-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('states')}
                className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'states'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                State Regulatory Guides (50 States)
              </button>
              <button
                onClick={() => setActiveTab('purposes')}
                className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'purposes'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Borrowing Purpose Hubs
              </button>
            </div>

            {activeTab === 'states' && (
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Filter state (e.g. CA, Ohio)..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>
            )}
          </div>

          <p className="text-xs text-slate-500">
            Installment lending regulations are strictly governed at both state and federal CFPB levels. Review statutory APR limits and licensing authorities below.
          </p>
        </div>

        {/* Content Area */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'states' ? (
            <div className="space-y-3">
              {filteredStates.map((rule) => (
                <div
                  key={rule.code}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:bg-slate-50/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-extrabold text-sm text-slate-900">
                        {rule.state}
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">
                        {rule.code}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        {rule.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      <strong>Statutory APR Cap:</strong> {rule.maxAprCap}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Overseen by {rule.licensingAuthority}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onSelectState(rule.code);
                      onClose();
                    }}
                    className="shrink-0 text-xs font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-4 cursor-pointer"
                  >
                    Check Rates in {rule.code}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50">
                <BookOpen className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Emergency Expense Financing
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  How fixed-rate installment loans offer predictable alternatives to high-interest payday or title loans when unexpected household repairs strike.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50">
                <BookOpen className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  High-Interest Debt Consolidation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strategies for bundling multiple revolving credit card balances into a single monthly installment payment with fixed interest and end dates.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50">
                <BookOpen className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  HVAC &amp; Home Appliance Replacement
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Understanding monthly repayment schedules when funding heating, plumbing, or roofing emergencies without tapping home equity.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50">
                <BookOpen className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Medical &amp; Dental Copay Assistance
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Managing deductible and dental expenses with clear TILA disclosures and no prepayment penalties if you pay off balance early.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Directory
          </button>
        </div>
      </div>
    </div>
  );
};

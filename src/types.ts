export interface LoanCalculation {
  principal: number;
  months: number;
  apr: number;
  monthlyPayment: number;
  totalInterest: number;
  totalRepayable: number;
}

export interface RateScenario {
  amount: number;
  termMonths: number;
  apr: number;
  estMonthly: number;
  totalCost: number;
}

export interface LenderOffer {
  id: string;
  lenderName: string;
  tagline: string;
  amount: number;
  termMonths: number;
  apr: number;
  monthlyPayment: number;
  originationFee: string;
  speed: string;
  rating: number;
  recommended?: boolean;
}

export interface StateLendingRule {
  state: string;
  code: string;
  maxAprCap: string;
  maxLoanAmount: string;
  licensingAuthority: string;
  status: 'Active Marketplace' | 'Subject to Statutory Cap';
}

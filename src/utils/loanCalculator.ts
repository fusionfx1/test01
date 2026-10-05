import { LoanCalculation } from '../types';

export function calculateLoan(principal: number, months: number, apr: number): LoanCalculation {
  if (months <= 0) {
    return {
      principal,
      months: 1,
      apr,
      monthlyPayment: principal,
      totalInterest: 0,
      totalRepayable: principal,
    };
  }

  const monthlyRate = apr / 100 / 12;

  if (monthlyRate === 0) {
    const monthlyPayment = principal / months;
    return {
      principal,
      months,
      apr,
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalInterest: 0,
      totalRepayable: principal,
    };
  }

  const factor = Math.pow(1 + monthlyRate, months);
  const rawPayment = (principal * (monthlyRate * factor)) / (factor - 1);
  const monthlyPayment = Math.round(rawPayment * 100) / 100;
  
  // Total cost matches monthly payment * months
  const totalRepayable = Math.round(monthlyPayment * months * 100) / 100;
  const totalInterest = Math.max(0, Math.round((totalRepayable - principal) * 100) / 100);

  return {
    principal,
    months,
    apr,
    monthlyPayment,
    totalInterest,
    totalRepayable,
  };
}

export function formatCurrency(val: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(val);
}

export function formatWholeCurrency(val: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(val);
}

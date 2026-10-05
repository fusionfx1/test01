import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after short mount unless already consented
    const consent = localStorage.getItem('level_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('level_cookie_consent', 'all');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('level_cookie_consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-40 p-2.5 rounded-full bg-slate-900/90 text-white shadow-lg hover:bg-slate-800 transition-all border border-slate-700 text-xs flex items-center gap-1.5 cursor-pointer opacity-80 hover:opacity-100"
        title="Cookie Settings"
      >
        <Cookie className="w-4 h-4 text-emerald-400" />
      </button>
    );
  }

  return (
    <aside
      aria-label="Cookie and Consent Settings"
      className="fixed bottom-4 left-4 z-50 max-w-sm w-[calc(100vw-2rem)] bg-[#0B1527] text-white rounded-2xl border border-slate-700/80 p-5 shadow-2xl animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Cookie className="w-4 h-4 text-amber-400" />
          <h4 className="text-xs font-bold tracking-tight text-white">
            Cookie &amp; Consent Settings
          </h4>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
        We use essential technical cookies and anonymized measurement (Google Consent Mode v2) to optimize site speed and ensure secure inquiry routing.
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={handleAcceptAll}
          className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer text-center"
        >
          Accept All
        </button>
        <button
          onClick={handleEssentialOnly}
          className="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-xs transition-colors cursor-pointer text-center"
        >
          Essential Only
        </button>
      </div>
    </aside>
  );
};

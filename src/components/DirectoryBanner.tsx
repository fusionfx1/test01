import React from 'react';
import { Compass, BookOpen } from 'lucide-react';

interface DirectoryBannerProps {
  onOpenDirectory: () => void;
}

export const DirectoryBanner: React.FC<DirectoryBannerProps> = ({ onOpenDirectory }) => {
  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1.5">
              DIRECTORY &amp; EDUCATIONAL RESOURCES
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Explore the RiseUp Lending Information Network
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Browse installment loan guides by state, credit tier, and financing purpose.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenDirectory}
              className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-emerald-500 hover:text-emerald-700 text-slate-800 text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>Spoke Hub Directory</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'Knowing my exact monthly payment in advance helped me budget efficiently to replace my home heating unit. No surprise interest spikes.',
    author: 'David M.',
    location: 'Ohio',
    badge: 'Verified Borrower',
    term: '12 Mo Term',
  },
  {
    quote:
      'The eligibility check was truly soft—my credit score didn’t drop a single point. I was connected with a licensed option within minutes.',
    author: 'Elena R.',
    location: 'Texas',
    badge: 'Verified Borrower',
    term: '24 Mo Term',
  },
  {
    quote:
      'Straightforward terms, clear TILA disclosures, and the funds arrived directly in my account the very next morning. Seamless process.',
    author: 'Marcus T.',
    location: 'Georgia',
    badge: 'Verified Borrower',
    term: '18 Mo Term',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-2">
            VERIFIED FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Borrower Experiences
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Sample verified customer survey responses regarding installment loan access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:bg-white hover:border-emerald-200 transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">
                    {item.author}
                  </div>
                  <div className="text-slate-500 flex items-center gap-1 mt-0.5">
                    <span>{item.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 font-medium inline-flex items-center gap-0.5">
                      <ShieldCheck className="w-3 h-3" />
                      {item.badge}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 font-semibold text-[11px] tabular-nums">
                  {item.term}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

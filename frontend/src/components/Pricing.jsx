import { Check } from 'lucide-react';
import { Reveal, Chapter } from './Reveal';
import { useLang, GradientHeading } from '../i18n';

const WA_NUMBER = '355696738308';

export const Pricing = () => {
  const { t } = useLang();
  const p = t.pricing;

  return (
    <section id="paketat" className="relative py-24 lg:py-32" data-testid="pricing-section">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <Chapter number="03" label={p.chapter} />
          <GradientHeading part={p} testid="pricing-heading" />
          <p className="mt-5 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed" data-testid="pricing-intro">
            {p.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {p.plans.map((plan, i) => {
            const waText = `${p.waGreeting} ${plan.name} (${plan.setup} + ${plan.monthly})`;
            const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`;
            const featured = plan.featured;
            return (
              <div
                key={i}
                data-testid={`pricing-card-${i + 1}`}
                className={`relative rounded-3xl p-7 sm:p-9 card-surface ${
                  featured ? 'border-2 border-[#1FBF7A]/70' : ''
                }`}
              >
                {featured && (
                  <span
                    className="absolute -top-3 left-8 bg-[#1FBF7A] text-[#0F1512] text-xs font-bold px-4 py-1.5 rounded-full tracking-wide"
                    data-testid={`pricing-badge-${i + 1}`}
                  >
                    {p.recommended}
                  </span>
                )}

                <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#1FBF7A] mb-2">{plan.eyebrow}</div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                <p className="mt-1.5 text-sm text-gray-400">{plan.channels}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">{plan.setup}</span>
                  <span className="text-sm text-gray-500">{p.oneTime}</span>
                </div>
                <div className="mt-1 text-base sm:text-lg text-gray-300">{plan.monthlyLabel} {plan.monthly}</div>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3" data-testid={`pricing-feature-${i + 1}-${fi + 1}`}>
                      <Check size={17} className="text-[#1FBF7A] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-[15px] text-gray-300 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-6 border-t border-white/10 text-sm text-gray-400 leading-relaxed" data-testid={`pricing-addon-${i + 1}`}>
                  {plan.addon}
                </div>

                
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`pricing-cta-${i + 1}`}
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 font-semibold px-6 py-4 rounded-full text-sm sm:text-base transition-colors duration-300 ${
                    featured ? 'btn-glow text-white' : 'border border-white/15 text-gray-200 hover:border-[#1FBF7A]/50 hover:text-[#1FBF7A]'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

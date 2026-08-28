import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Reveal, Chapter } from './Reveal';
import { useLang, GradientHeading } from '../i18n';

export const WhyOrbix = () => {
  const { t } = useLang();
  return (
    <section id="pse-orbix" className="relative py-24 lg:py-32" data-testid="why-orbix-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <Reveal className="lg:sticky lg:top-28">
            <Chapter number="05" label={t.why.chapter} />
            <GradientHeading part={t.why} testid="why-orbix-heading" />
            <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed max-w-md">
              {t.why.sub}
            </p>
          </Reveal>

          <div className="space-y-5">
            {t.why.points.map((p, i) => (
              <motion.div
                key={i}
                data-testid={`why-card-${i + 1}`}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card-surface rounded-3xl p-6 sm:p-8 flex gap-5"
              >
                <CheckCircle2 size={26} className="text-[#1FBF7A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

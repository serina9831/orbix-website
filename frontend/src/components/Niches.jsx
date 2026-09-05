import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, UtensilsCrossed, Building2, Dumbbell, GraduationCap } from 'lucide-react';
import { Reveal, Chapter } from './Reveal';
import { useLang, GradientHeading } from '../i18n';

const meta = [
  { id: 'dental', icon: Stethoscope },
  { id: 'beauty', icon: Sparkles },
  { id: 'realestate', icon: Building2 },
  { id: 'restaurants', icon: UtensilsCrossed },
  { id: 'gyms', icon: Dumbbell },
  { id: 'schools', icon: GraduationCap },
];

export const Niches = () => {
  const { t } = useLang();
  return (
    <section id="klientet" className="relative py-24 lg:py-32 bg-[#24282B]" data-testid="niches-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <Chapter number="05" label={t.niches.chapter} />
          <GradientHeading part={t.niches} testid="niches-heading" />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {meta.map((n, i) => (
            <motion.div
              key={n.id}
              data-testid={`niche-card-${n.id}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="card-surface rounded-3xl p-6 sm:p-8 flex flex-col items-start gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1FBF7A]/10 border border-[#1FBF7A]/25 flex items-center justify-center">
                <n.icon size={22} className="text-[#1FBF7A]" />
              </div>
              <h3 className="font-display text-base sm:text-xl font-bold text-white tracking-tight">{t.niches.names[i]}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

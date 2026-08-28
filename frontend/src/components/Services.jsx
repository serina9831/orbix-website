import { motion } from 'framer-motion';
import {
  MessageSquareText,
  CalendarCheck2,
  UserPlus,
  BellRing,
  BarChart3,
  Fingerprint,
  PlugZap,
} from 'lucide-react';
import { Reveal, Chapter } from './Reveal';
import { useLang, GradientHeading } from '../i18n';

const icons = [MessageSquareText, CalendarCheck2, UserPlus, BellRing, BarChart3, Fingerprint, PlugZap];

export const Services = () => {
  const { t } = useLang();
  return (
    <section id="sherbimet" className="relative py-24 lg:py-32 bg-[#24282B]" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <Chapter number="02" label={t.services.chapter} />
          <GradientHeading part={t.services} testid="services-heading" />
          <p className="mt-5 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed" data-testid="services-intro">
            {t.services.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                data-testid={`service-card-${i + 1}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`card-surface rounded-3xl p-7 sm:p-8 ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1FBF7A]/10 border border-[#1FBF7A]/25 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-[#1FBF7A]" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

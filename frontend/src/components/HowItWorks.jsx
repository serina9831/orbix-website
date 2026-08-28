import { motion } from 'framer-motion';
import { Reveal, Chapter } from './Reveal';
import { useLang, GradientHeading } from '../i18n';

const nums = ['01', '02', '03', '04'];

export const HowItWorks = () => {
  const { t } = useLang();
  return (
    <section id="procesi" className="relative py-24 lg:py-32" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <Chapter number="03" label={t.how.chapter} />
          <GradientHeading part={t.how} testid="how-it-works-heading" />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.how.steps.map((s, i) => (
            <motion.div
              key={nums[i]}
              data-testid={`step-card-${nums[i]}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="relative card-surface rounded-3xl p-7 overflow-hidden"
            >
              <span className="font-display text-6xl font-extrabold text-[#1FBF7A]/12 absolute -top-2 right-4 select-none">
                {nums[i]}
              </span>
              <span className="inline-flex items-center justify-center font-display text-sm font-bold text-[#1FBF7A] border border-[#1FBF7A]/35 rounded-full px-3.5 py-1 mb-6">
                {t.how.stepLabel} {nums[i]}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

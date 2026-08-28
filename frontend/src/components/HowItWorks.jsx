import { motion } from 'framer-motion';
import { Reveal, Chapter } from './Reveal';

const steps = [
  {
    n: '01',
    title: 'Konsultë Falas',
    desc: 'Ulemi bashkë dhe kuptojmë nevojat specifike të biznesit tënd — ku humbet kohë, ku ikin klientët.',
  },
  {
    n: '02',
    title: 'Ndërtimi i Agjentit AI',
    desc: 'Krijojmë agjentin tënd AI, të personalizuar plotësisht për shërbimet, çmimet dhe mënyrën tënde të punës.',
  },
  {
    n: '03',
    title: 'Integrimi në Kanale',
    desc: 'E lidhim me WhatsApp, Instagram dhe Facebook Messenger — klientët e tu vazhdojnë të shkruajnë aty ku shkruajnë gjithmonë.',
  },
  {
    n: '04',
    title: 'Lançimi & Optimizimi',
    desc: 'E vëmë në punë dhe e përmirësojmë vazhdimisht, bazuar në rezultate reale — jo premtime.',
  },
];

export const HowItWorks = () => (
  <section id="procesi" className="relative py-24 lg:py-32" data-testid="how-it-works-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal>
        <Chapter number="03" label="Procesi" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white" data-testid="how-it-works-heading">
          Si Funksionon <span className="text-gradient-emerald">Bashkëpunimi</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            data-testid={`step-card-${s.n}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="relative card-surface rounded-3xl p-7 overflow-hidden"
          >
            <span className="font-display text-6xl font-extrabold text-[#1FBF7A]/12 absolute -top-2 right-4 select-none">
              {s.n}
            </span>
            <span className="inline-flex items-center justify-center font-display text-sm font-bold text-[#1FBF7A] border border-[#1FBF7A]/35 rounded-full px-3.5 py-1 mb-6">
              Hapi {s.n}
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">{s.title}</h3>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

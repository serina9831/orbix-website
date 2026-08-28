import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Reveal, Chapter } from './Reveal';

const points = [
  {
    title: 'Demo Reale, Jo Premtime',
    desc: 'E vetmja agjenci që tregon demo reale të agjentit AI, jo vetëm premtime — sheh me sytë e tu çfarë po blen.',
  },
  {
    title: 'E Personalizuar, Jo Shabllon',
    desc: 'Çdo zgjidhje ndërtohet nga e para rreth biznesit tënd — proceset e tua, klientët e tu, zëri yt.',
  },
  {
    title: 'Suport i Vazhdueshëm',
    desc: 'Pas lançimit nuk të lëmë vetëm — optimizojmë dhe përmirësojmë sistemin vazhdimisht, çdo muaj.',
  },
  {
    title: 'Transparencë e Plotë',
    desc: 'Çdo rezultat matet e shihet në panelin analitik — sa takime, sa konfirmime, sa të ardhura. Asgjë e fshehur.',
  },
];

export const WhyOrbix = () => (
  <section id="pse-orbix" className="relative py-24 lg:py-32" data-testid="why-orbix-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <Reveal className="lg:sticky lg:top-28">
          <Chapter number="05" label="Diferenca" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white" data-testid="why-orbix-heading">
            Pse <span className="text-gradient-emerald">ORBIX</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed max-w-md">
            Sepse biznesi yt meriton më shumë se një shabllon të kopjuar — meriton një sistem që punon saktësisht siç punon ti.
          </p>
        </Reveal>

        <div className="space-y-5">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
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

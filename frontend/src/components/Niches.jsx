import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, UtensilsCrossed, Building2, Dumbbell, GraduationCap } from 'lucide-react';
import { Reveal, Chapter } from './Reveal';

const niches = [
  { id: 'dental', icon: Stethoscope, name: 'Klinika Dentare' },
  { id: 'beauty', icon: Sparkles, name: 'Sallone Bukurie' },
  { id: 'realestate', icon: Building2, name: 'Agjenci Imobiliare' },
  { id: 'restaurants', icon: UtensilsCrossed, name: 'Restorante' },
  { id: 'gyms', icon: Dumbbell, name: 'Palestra' },
  { id: 'schools', icon: GraduationCap, name: 'Shkolla Private' },
];

export const Niches = () => (
  <section id="klientet" className="relative py-24 lg:py-32 bg-[#212527]" data-testid="niches-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal>
        <Chapter number="04" label="Për Ken Punojmë" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white" data-testid="niches-heading">
          Punojmë me Biznese <span className="text-gradient-emerald">si i Yti</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {niches.map((n, i) => (
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
            <h3 className="font-display text-base sm:text-xl font-bold text-white tracking-tight">{n.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
